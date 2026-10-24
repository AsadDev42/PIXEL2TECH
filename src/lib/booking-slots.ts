export const CALL_MINUTES = 30;
export const HOST_TIMEZONE = "Asia/Karachi";
export const NOTICE_MS = 2 * 60 * 60 * 1000;
export const BOOKING_MONTHS = 2;
export type BusyPeriod = { start: string; end: string };

/** Shared calendar-date limits for the browser and server, including the final day. */
export function bookingDateRange(now = Date.now()) {
  const min = new Intl.DateTimeFormat("en-CA", {
    timeZone: HOST_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(now));
  const end = new Date(`${min}T12:00:00Z`);
  const day = end.getUTCDate();
  end.setUTCDate(1);
  end.setUTCMonth(end.getUTCMonth() + BOOKING_MONTHS);
  const lastDay = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth() + 1, 0)).getUTCDate();
  end.setUTCDate(Math.min(day, lastDay));
  return { min, max: end.toISOString().slice(0, 10) };
}

/** Lahore uses UTC+5 year round. Office hours match the site's published hours. */
export function candidateSlots(date: string, now = Date.now()): string[] {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return [];
  const range = bookingDateRange(now);
  if (date < range.min || date > range.max) return [];
  const midnight = new Date(`${date}T00:00:00+05:00`);
  if (!Number.isFinite(midnight.getTime())) return [];
  if (
    new Intl.DateTimeFormat("en-CA", {
      timeZone: HOST_TIMEZONE,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(midnight) !== date
  )
    return [];
  const day = new Date(`${date}T12:00:00Z`).getUTCDay();
  if (day === 0) return [];
  const start = day === 6 ? 10 : 9;
  const end = day === 6 ? 16 : 18;
  const slots: string[] = [];
  for (let minute = start * 60; minute + CALL_MINUTES <= end * 60; minute += CALL_MINUTES) {
    const time = midnight.getTime() + minute * 60_000;
    if (time >= now + NOTICE_MS) slots.push(new Date(time).toISOString());
  }
  return slots;
}

export function freeSlots(slots: string[], busy: BusyPeriod[]): string[] {
  // Reject malformed upstream data instead of inventing availability.
  if (
    busy.some(
      (b) =>
        !Number.isFinite(Date.parse(b.start)) ||
        !Number.isFinite(Date.parse(b.end)) ||
        Date.parse(b.end) <= Date.parse(b.start),
    )
  )
    throw new Error("Invalid calendar availability");
  return slots.filter((slot) => {
    const start = Date.parse(slot);
    return !busy.some(
      (b) => start < Date.parse(b.end) && start + CALL_MINUTES * 60_000 > Date.parse(b.start),
    );
  });
}
