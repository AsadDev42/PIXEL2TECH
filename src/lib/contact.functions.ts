import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

// Strip control chars / zero-width, collapse whitespace.
const sanitize = (s: string) =>
  s
    // eslint-disable-next-line no-control-regex -- intentional: strip control + zero-width chars
    .replace(/[\u0000-\u001F\u007F\u200B-\u200D\uFEFF]/g, "")
    .replace(/[ \t]+/g, " ")
    .trim();

const submissionSchema = z.object({
  name: z.string().transform(sanitize).pipe(z.string().min(2, "Name is required").max(100)),
  email: z.string().transform((s) => sanitize(s).toLowerCase()).pipe(z.string().email("Invalid email").max(255)),
  subject: z.string().transform(sanitize).pipe(z.string().min(2, "Subject is required").max(200)),
  message: z.string().transform(sanitize).pipe(z.string().min(10, "Message is too short").max(5000)),
  // Honeypot — real users leave this empty. Bots fill it.
  website: z.string().max(200).optional(),
  // Anti-instant-submit — client stamps form load time; reject sub-second submits.
  ts: z.number().int().optional(),
});

export type SubmissionInput = z.infer<typeof submissionSchema>;

// In-memory rate limit: max 5 submissions per IP per 10 minutes.
// Resets on worker restart; sufficient as a lightweight spam brake.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const rateBuckets = new Map<string, number[]>();
function rateLimit(ip: string): boolean {
  const now = Date.now();
  const arr = (rateBuckets.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (arr.length >= RATE_MAX) {
    rateBuckets.set(ip, arr);
    return false;
  }
  arr.push(now);
  rateBuckets.set(ip, arr);
  return true;
}

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((input: SubmissionInput) => submissionSchema.parse(input))

  .handler(async ({ data }) => {
    // Honeypot: reject silently-ish if bot filled the field.
    if (data.website && data.website.length > 0) {
      return { ok: true as const };
    }
    // Speed trap: reject sub-1s submissions (bots).
    if (typeof data.ts === "number" && Date.now() - data.ts < 1000) {
      throw new Error("Please take a moment to review your message.");
    }

    // Rate limit per client IP.
    const ip =
      (getRequestHeader("cf-connecting-ip") ||
        getRequestHeader("x-forwarded-for")?.split(",")[0].trim() ||
        getRequestHeader("x-real-ip") ||
        "unknown").toString();
    if (!rateLimit(ip)) {
      throw new Error("Too many submissions. Please try again in a few minutes.");
    }

    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) throw new Error("Backend not configured");


    const supabase = createClient<Database>(url, key, {
      auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
            h.delete("Authorization");
          }
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    });

    if (error) {
      console.error("[contact] insert failed", error);
      throw new Error("Could not save your message. Please try again.");
    }

    // Owner notification + visitor confirmation via Lovable's managed email API.
    // Best-effort: a delivery problem must not fail the submission itself.
    const ownerEmail = process.env.CONTACT_OWNER_EMAIL || "sales@pixel2tech.com";
    const eventId = `${data.email}-${Date.now()}`;
    try {
      const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
      await sendTemplateEmail("contact-notification", ownerEmail, {
        templateData: {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        idempotencyKey: `contact-notification-${eventId}`,
        replyTo: data.email,
      });
      await sendTemplateEmail("contact-confirmation", data.email, {
        templateData: {
          name: data.name,
          subject: data.subject,
          message: data.message,
        },
        idempotencyKey: `contact-confirmation-${eventId}`,
      });
    } catch (e) {
      console.warn("[contact] email notification failed", e);
    }

    return { ok: true as const };
  });

