import { test, afterEach } from "node:test";
import assert from "node:assert/strict";
import { candidateSlots, freeSlots } from "../src/lib/booking-slots.ts";
import { getAvailability, createBooking } from "../src/server/google-calendar.server.ts";

const originalFetch = globalThis.fetch;
const originalEnv = Object.fromEntries(
  ["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET", "GOOGLE_REFRESH_TOKEN", "GOOGLE_CALENDAR_ID"].map(
    (key) => [key, process.env[key]],
  ),
);
afterEach(() => {
  globalThis.fetch = originalFetch;
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
});
const now = Date.parse("2026-10-26T00:00:00Z"); // Monday, 05:00 Lahore
test("office hours, notice, invalid dates and booking horizon", () => {
  assert.equal(candidateSlots("2026-10-26", now).length, 18);
  assert.equal(candidateSlots("2026-10-31", now).length, 12);
  assert.deepEqual(candidateSlots("2026-11-01", now), []);
  assert.deepEqual(candidateSlots("2026-02-31", now), []);
  assert.deepEqual(candidateSlots("not-a-date", now), []);
  assert.deepEqual(candidateSlots("2026-12-01", now), []);
  assert.equal(
    candidateSlots("2026-10-26", Date.parse("2026-10-26T04:00:00Z"))[0],
    "2026-10-26T06:00:00.000Z",
  );
});
test("busy overlaps excluded while adjacent times remain available", () => {
  const slots = candidateSlots("2026-10-26", now);
  assert.deepEqual(
    freeSlots(slots.slice(0, 3), [{ start: "2026-10-26T04:30:00Z", end: "2026-10-26T05:00:00Z" }]),
    [slots[0], slots[2]],
  );
  assert.throws(() => freeSlots(slots, [{ start: "invalid", end: "invalid" }]));
});
function configured() {
  for (const key of Object.keys(originalEnv)) process.env[key] = "test-placeholder";
}
function json(value, status = 200) {
  return new Response(JSON.stringify(value), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
function futureSlot() {
  for (let day = 1; day < 8; day++) {
    const date = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Karachi",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(Date.now() + day * 86400000));
    const slots = candidateSlots(date);
    if (slots.length) return { date, start: slots[0] };
  }
  throw new Error("No future office day");
}
const booking = () => ({
  start: futureSlot().start,
  name: "Test visitor",
  email: "test@example.com",
  timezone: "America/Los_Angeles",
  message: "Test",
  bookingId: "20000000-0000-4000-8000-000000000000",
});
test("missing credentials cannot expose fake slots", async () => {
  delete process.env.GOOGLE_REFRESH_TOKEN;
  assert.deepEqual(await getAvailability(futureSlot().date), { connected: false, slots: [] });
});
test("calendar errors fail closed", async () => {
  configured();
  globalThis.fetch = async (url) =>
    String(url).includes("oauth2")
      ? json({ access_token: "test" })
      : json({ calendars: { "test-placeholder": { errors: [{ reason: "forbidden" }] } } });
  await assert.rejects(getAvailability(futureSlot().date));
});
test("booking creates Google invite and Meet, same-slot competitors conflict", async () => {
  configured();
  let written;
  let conflict = false;
  globalThis.fetch = async (url, init) => {
    if (String(url).includes("oauth2")) return json({ access_token: "test" });
    if (String(url).endsWith("freeBusy"))
      return json({ calendars: { "test-placeholder": { busy: [] } } });
    if (init.method === "POST") {
      written = JSON.parse(init.body);
      return conflict
        ? json({}, 409)
        : json({ id: written.id, hangoutLink: "https://meet.google.com/test" });
    }
    return json({}, 404);
  };
  assert.equal((await createBooking(booking())).confirmed, true);
  assert.match(written.id, /^[0-9a-f]{64}$/);
  assert.equal(written.attendees[0].email, "test@example.com");
  assert.equal(written.conferenceData.createRequest.conferenceSolutionKey.type, "hangoutsMeet");
  assert.equal(Date.parse(written.end.dateTime) - Date.parse(written.start.dateTime), 1800000);
  conflict = true;
  assert.deepEqual(await createBooking(booking()), { confirmed: false, reason: "taken" });
});
test("network retry returns own event, another booking cannot claim it", async () => {
  configured();
  const input = booking();
  globalThis.fetch = async (url) =>
    String(url).includes("oauth2")
      ? json({ access_token: "test" })
      : json({
          id: "existing",
          hangoutLink: "https://meet.google.com/test",
          extendedProperties: { private: { bookingId: input.bookingId } },
        });
  assert.equal((await createBooking(input)).confirmed, true);
  assert.equal((await createBooking({ ...input, bookingId: "another-id" })).confirmed, false);
});
test("canceled slot restoration uses etag and fails safely on concurrent update", async () => {
  configured();
  let header;
  globalThis.fetch = async (url, init) => {
    if (String(url).includes("oauth2")) return json({ access_token: "test" });
    if (String(url).endsWith("freeBusy"))
      return json({ calendars: { "test-placeholder": { busy: [] } } });
    if (init.method === "PUT") {
      header = init.headers["If-Match"];
      return json({}, 412);
    }
    return json({ id: "existing", status: "cancelled", etag: '"version-one"' });
  };
  assert.equal((await createBooking(booking())).confirmed, false);
  assert.equal(header, '"version-one"');
});
test("busy slot cannot create event; failed insert cannot claim success", async () => {
  configured();
  let busy = true;
  let inserts = 0;
  globalThis.fetch = async (url, init) => {
    if (String(url).includes("oauth2")) return json({ access_token: "test" });
    if (String(url).endsWith("freeBusy"))
      return json({
        calendars: {
          "test-placeholder": {
            busy: busy
              ? [
                  {
                    start: booking().start,
                    end: new Date(Date.parse(booking().start) + 1800000).toISOString(),
                  },
                ]
              : [],
          },
        },
      });
    if (init.method === "POST") {
      inserts++;
      return json({}, 503);
    }
    return json({}, 404);
  };
  assert.equal((await createBooking(booking())).confirmed, false);
  assert.equal(inserts, 0);
  busy = false;
  await assert.rejects(createBooking(booking()));
});
