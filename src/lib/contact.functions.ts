import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader, getRequestIP } from "@tanstack/react-start/server";
import type { z } from "zod";
import { SITE } from "@/lib/site-config";
import type { NewContact } from "@/server/db/contacts.server";
import {
  MIN_FILL_MS,
  SUBMIT_ERRORS,
  contactSubmissionSchema,
  newsletterSubmissionSchema,
  type ContactSubmission,
  type NewsletterSubmission,
} from "@/lib/contact-schema";

/** Parses with the shared schema; any failure becomes one friendly message. */
function parseSubmission<S extends z.ZodType>(schema: S, input: unknown): z.output<S> {
  const result = schema.safeParse(input);
  if (!result.success) throw new Error(SUBMIT_ERRORS.invalid);
  return result.data;
}

/*
 * Rate limits.
 *
 * Best-effort only. These Maps live in one server process's memory: they reset
 * on every restart or deploy and are not shared between instances, so a
 * determined sender can go past these numbers. They stop double posts and slow down one noisy client;
 * they are not real abuse protection (that needs a shared store or a CAPTCHA).
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_IP = 5;
const CONFIRMATION_WINDOW_MS = 24 * 60 * 60 * 1000;
const MAX_CONFIRMATIONS_PER_ADDRESS = 2;
// Cap on visitor confirmation emails across all addresses, so a script that
// rotates addresses can't use the form to mail strangers in bulk. The owner
// notification is not capped: every saved submission still reaches the inbox.
const CONFIRMATION_GLOBAL_WINDOW_MS = 60 * 60 * 1000;
const MAX_CONFIRMATIONS_GLOBAL = 20;
const MAX_TRACKED_KEYS = 5000;

const ipHits = new Map<string, number[]>();
const confirmationHits = new Map<string, number[]>();
const globalConfirmationHits = new Map<string, number[]>();

/** Records a hit for `key`; returns false when it would go over `max` in `windowMs`. */
function allow(buckets: Map<string, number[]>, key: string, max: number, windowMs: number) {
  const now = Date.now();
  if (buckets.size > MAX_TRACKED_KEYS) {
    for (const [k, hits] of buckets) {
      if (now - hits[hits.length - 1] >= windowMs) buckets.delete(k);
    }
  }
  const recent = (buckets.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= max) {
    buckets.set(key, recent);
    return false;
  }
  recent.push(now);
  buckets.set(key, recent);
  return true;
}

function clientIp() {
  // Cloudflare is DNS only (no proxy), so cf-connecting-ip, x-real-ip and the
  // first x-forwarded-for entry are whatever the client chose to send and are
  // never trusted. A proxy appends the address it saw to the END of
  // x-forwarded-for, so the last entry was written by the hosting edge in
  // front of the app and is the one value the client can't pick.
  // Without the header (local dev), use the socket address.
  const forwarded = getRequestHeader("x-forwarded-for")
    ?.split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  return forwarded?.at(-1) || getRequestIP() || "no-ip";
}

type SpamGuard = { website: string; elapsedMs: number };

/**
 * Runs the honeypot, speed and per-IP checks shared by every public form.
 * Returns false for a bot that filled the honeypot: the caller should answer
 * "ok" without saving or emailing anything, so the bot learns nothing.
 */
function passesSpamGuards({ website, elapsedMs }: SpamGuard) {
  if (website.length > 0) return false;
  if (elapsedMs < MIN_FILL_MS) throw new Error(SUBMIT_ERRORS.tooFast);
  if (!allow(ipHits, clientIp(), MAX_PER_IP, WINDOW_MS)) throw new Error(SUBMIT_ERRORS.rateLimited);
  return true;
}

/**
 * Saves the submission to the site's Prisma Postgres `contacts` table.
 *
 * Fails soft: a missing connection, a slow or unreachable database, or a
 * rejected row all become the friendly "unavailable" error, never a crash.
 * The database code is imported lazily so it never ships in the client bundle.
 */
async function saveContact(row: NewContact) {
  try {
    const { insertContact } = await import("@/server/db/contacts.server");
    await insertContact(row);
  } catch (error) {
    // Log only the error's kind: the full ORM error can echo the visitor's
    // email and message (bound parameter values) into the service logs.
    const { name, code } = (error ?? {}) as { name?: unknown; code?: unknown };
    console.error("[contact] insert failed", { name: String(name ?? "Error"), code });
    throw new Error(SUBMIT_ERRORS.unavailable);
  }
}

function ownerEmail() {
  return process.env.CONTACT_OWNER_EMAIL || SITE.email;
}

function submittedAt() {
  return new Date().toLocaleString("en-US", {
    timeZone: "Asia/Karachi",
    dateStyle: "full",
    timeStyle: "short",
  });
}

/** Loaded lazily so the email renderer never ships in the client bundle. */
async function loadMailer() {
  const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
  return sendTemplateEmail;
}

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((input: ContactSubmission) => parseSubmission(contactSubmissionSchema, input))
  .handler(async ({ data }) => {
    if (!passesSpamGuards(data)) return { ok: true as const };

    await saveContact({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });

    // Emails are best-effort: a delivery problem must not fail a saved submission.
    const eventId = crypto.randomUUID();
    const owner = ownerEmail();
    try {
      const sendTemplateEmail = await loadMailer();
      const sends: Promise<unknown>[] = [
        sendTemplateEmail("contact-notification", owner, {
          templateData: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            subject: data.subject ?? "",
            source: data.source ?? "",
            message: data.message,
            submittedAt: submittedAt(),
          },
          idempotencyKey: `contact-notification-${eventId}`,
          replyTo: data.email,
        }),
      ];
      // The visitor's copy is a fixed acknowledgement: it never repeats anything
      // they typed, so the form can't be used to send our email to strangers.
      if (
        allow(
          confirmationHits,
          data.email,
          MAX_CONFIRMATIONS_PER_ADDRESS,
          CONFIRMATION_WINDOW_MS,
        ) &&
        allow(
          globalConfirmationHits,
          "all",
          MAX_CONFIRMATIONS_GLOBAL,
          CONFIRMATION_GLOBAL_WINDOW_MS,
        )
      ) {
        sends.push(
          sendTemplateEmail("contact-confirmation", data.email, {
            idempotencyKey: `contact-confirmation-${eventId}`,
            replyTo: owner,
          }),
        );
      }
      const results = await Promise.allSettled(sends);
      for (const r of results) {
        if (r.status === "rejected") console.warn("[contact] email failed", r.reason);
      }
    } catch (e) {
      console.warn("[contact] email setup failed", e);
    }

    return { ok: true as const };
  });

/**
 * Blog newsletter signup. There is no subscriber list yet, so a signup is saved
 * as a `contacts` row and the owner is notified. The visitor gets no email:
 * without double opt-in we can't confirm the address belongs to them.
 */
export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .validator((input: NewsletterSubmission) => parseSubmission(newsletterSubmissionSchema, input))
  .handler(async ({ data }) => {
    if (!passesSpamGuards(data)) return { ok: true as const };

    const message = "Newsletter signup from the blog.";
    await saveContact({ firstName: "Newsletter signup", email: data.email, message });

    try {
      const sendTemplateEmail = await loadMailer();
      await sendTemplateEmail("contact-notification", ownerEmail(), {
        templateData: {
          email: data.email,
          source: "newsletter",
          message,
          submittedAt: submittedAt(),
        },
        idempotencyKey: `newsletter-notification-${crypto.randomUUID()}`,
        replyTo: data.email,
      });
    } catch (e) {
      console.warn("[newsletter] owner notification failed", e);
    }

    return { ok: true as const };
  });
