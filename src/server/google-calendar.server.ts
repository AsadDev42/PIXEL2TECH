import { createHash } from "node:crypto";
import {
  candidateSlots,
  freeSlots,
  CALL_MINUTES,
  HOST_TIMEZONE,
  type BusyPeriod,
} from "../lib/booking-slots.ts";

const API = "https://www.googleapis.com/calendar/v3";
const OWNER = "sales@pixel2tech.com";
type CalendarEvent = {
  id: string;
  etag?: string;
  status?: string;
  hangoutLink?: string;
  extendedProperties?: { private?: { bookingId?: string } };
};
export type BookingInput = {
  start: string;
  name: string;
  email: string;
  message: string;
  timezone: string;
  bookingId: string;
};
export function calendarReady() {
  return Boolean(
    process.env.GOOGLE_CLIENT_ID &&
    process.env.GOOGLE_CLIENT_SECRET &&
    process.env.GOOGLE_REFRESH_TOKEN &&
    process.env.GOOGLE_CALENDAR_ID,
  );
}
async function token() {
  if (!calendarReady()) throw new Error("Calendar is not connected");
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    signal: AbortSignal.timeout(15_000),
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN!,
      grant_type: "refresh_token",
    }),
  });
  const data = await response.json();
  if (!response.ok || !data.access_token) throw new Error("Calendar authentication failed");
  return data.access_token as string;
}
async function call(path: string, accessToken: string, init: RequestInit = {}) {
  return fetch(`${API}${path}`, {
    ...init,
    signal: AbortSignal.timeout(20_000),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
}
async function available(date: string, accessToken: string) {
  const slots = candidateSlots(date);
  if (!slots.length) return [];
  const id = process.env.GOOGLE_CALENDAR_ID!;
  const response = await call("/freeBusy", accessToken, {
    method: "POST",
    body: JSON.stringify({
      timeMin: slots[0],
      timeMax: new Date(Date.parse(slots.at(-1)!) + CALL_MINUTES * 60_000).toISOString(),
      timeZone: HOST_TIMEZONE,
      items: [{ id }],
    }),
  });
  const data = await response.json();
  const calendar = data.calendars?.[id] as { errors?: unknown[]; busy?: BusyPeriod[] } | undefined;
  if (!response.ok || !calendar || calendar.errors?.length || !Array.isArray(calendar.busy))
    throw new Error("Calendar availability failed");
  return freeSlots(slots, calendar.busy);
}
export async function getAvailability(date: string) {
  if (!calendarReady()) return { connected: false, slots: [] as string[] };
  return { connected: true, slots: await available(date, await token()) };
}
export async function createBooking(input: BookingInput) {
  const accessToken = await token();
  const calendar = encodeURIComponent(process.env.GOOGLE_CALENDAR_ID!);
  // Fixed slot IDs make competing inserts atomic across server instances.
  const id = createHash("sha256")
    .update(`${process.env.GOOGLE_CALENDAR_ID}:${input.start}`)
    .digest("hex");
  const path = `/calendars/${calendar}/events`;
  const existing = await call(`${path}/${id}`, accessToken);
  let cancelledEtag: string | undefined;
  if (existing.ok) {
    const event = (await existing.json()) as CalendarEvent;
    if (
      event.status !== "cancelled" &&
      event.extendedProperties?.private?.bookingId === input.bookingId
    )
      return { confirmed: true as const, meetUrl: event.hangoutLink ?? null };
    if (event.status === "cancelled" && event.etag) cancelledEtag = event.etag;
    else return { confirmed: false as const, reason: "taken" as const };
  }
  if (!existing.ok && existing.status !== 404 && existing.status !== 410)
    throw new Error("Calendar lookup failed");
  const date = new Intl.DateTimeFormat("en-CA", {
    timeZone: HOST_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(input.start));
  if (!(await available(date, accessToken)).includes(input.start))
    return { confirmed: false as const, reason: "taken" as const };
  const response = await call(
    `${path}${cancelledEtag ? `/${id}` : ""}?conferenceDataVersion=1&sendUpdates=all`,
    accessToken,
    {
      method: cancelledEtag ? "PUT" : "POST",
      headers: cancelledEtag ? { "If-Match": cancelledEtag } : {},
      body: JSON.stringify({
        id,
        status: "confirmed",
        summary: "Pixel2Tech strategy call",
        description: `Strategy call booked on pixel2tech.com.\nGuest: ${input.name}\nGuest timezone: ${input.timezone}\n\nProject notes:\n${input.message}\n\nFor changes, contact ${OWNER}.`,
        start: { dateTime: input.start, timeZone: HOST_TIMEZONE },
        end: {
          dateTime: new Date(Date.parse(input.start) + CALL_MINUTES * 60_000).toISOString(),
          timeZone: HOST_TIMEZONE,
        },
        attendees: [{ email: input.email, displayName: input.name }],
        guestsCanInviteOthers: false,
        guestsCanModify: false,
        guestsCanSeeOtherGuests: false,
        extendedProperties: { private: { bookingId: input.bookingId } },
        conferenceData: {
          createRequest: {
            requestId: input.bookingId,
            conferenceSolutionKey: { type: "hangoutsMeet" },
          },
        },
      }),
    },
  );
  if (response.status === 409 || response.status === 412)
    return { confirmed: false as const, reason: "taken" as const };
  if (!response.ok) throw new Error("Calendar booking failed");
  let event = (await response.json()) as CalendarEvent;
  // Conference generation can finish after event creation. Invitation remains authoritative.
  if (!event.hangoutLink) {
    const check = await call(`${path}/${id}`, accessToken);
    if (check.ok) event = (await check.json()) as CalendarEvent;
  }
  return { confirmed: true as const, meetUrl: event.hangoutLink ?? null };
}
