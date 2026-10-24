import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader, getRequestIP } from "@tanstack/react-start/server";
import { z } from "zod";

const hits = new Map<string, number[]>();
function throttle(limit: number, prefix: string) {
  const key = `${prefix}:${getRequestHeader("x-forwarded-for")?.split(",").at(-1)?.trim() || getRequestIP() || "unknown"}`;
  const now = Date.now();
  if (hits.size > 5000)
    for (const [key, values] of hits) if (values.at(-1)! < now - 600_000) hits.delete(key);
  const recent = (hits.get(key) ?? []).filter((time) => time > now - 600_000);
  if (recent.length >= limit || hits.size > 10000)
    throw new Error("Too many requests. Please try again later.");
  hits.set(key, [...recent, now]);
}
export const bookingAvailability = createServerFn({ method: "POST" })
  .inputValidator(z.object({ date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/) }))
  .handler(async ({ data }) => {
    throttle(90, "availability");
    try {
      const { getAvailability } = await import("@/server/google-calendar.server");
      return await getAvailability(data.date);
    } catch {
      throw new Error(
        "We couldn't load the calendar. Please try again or contact sales@pixel2tech.com.",
      );
    }
  });
export const bookStrategyCall = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      start: z.string().datetime(),
      name: z.string().trim().min(2).max(120),
      email: z.email().max(254),
      message: z.string().trim().max(2000),
      timezone: z
        .string()
        .max(80)
        .refine((value) => {
          try {
            new Intl.DateTimeFormat("en", { timeZone: value });
            return true;
          } catch {
            return false;
          }
        }),
      bookingId: z.uuid(),
      website: z.string().max(200),
      elapsedMs: z.number().min(2000).max(86_400_000),
    }),
  )
  .handler(async ({ data }) => {
    throttle(5, "booking");
    if (data.website) throw new Error("Unable to complete booking. Please contact us.");
    try {
      const { createBooking } = await import("@/server/google-calendar.server");
      return await createBooking(data);
    } catch {
      throw new Error(
        "We couldn't confirm your booking. Please retry the same time or contact sales@pixel2tech.com.",
      );
    }
  });
