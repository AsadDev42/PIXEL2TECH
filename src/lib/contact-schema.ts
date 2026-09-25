import { z } from "zod";
import { SITE } from "@/lib/site-config";

/**
 * One set of rules for every lead form (ContactForm, NewsletterForm) and for the
 * server functions that receive them. Change a limit or a message here, never in
 * a component, so the browser and the server can't drift apart again.
 *
 * Safe to import from client and server code: no env reads, no I/O.
 */

/** Pages that render <ContactForm>. Sent to the server and to analytics. */
export const CONTACT_SOURCES = ["home", "contact", "services"] as const;
export type ContactSource = (typeof CONTACT_SOURCES)[number];

/** Submissions faster than this (ms since the form mounted) are treated as bots. */
export const MIN_FILL_MS = 1500;

// eslint-disable-next-line no-control-regex -- intentional: strip control and zero-width characters
const CONTROL_CHARS = /[\u0000-\u001F\u007F\u200B-\u200D\u2060\uFEFF]/g;
// Same set, but keeps tab (\u0009) and line feed (\u000A) for multi-line text.
// eslint-disable-next-line no-control-regex -- intentional: strip control and zero-width characters
const CONTROL_CHARS_EXCEPT_TAB_LF = /[\u0000-\u0008\u000B-\u001F\u007F\u200B-\u200D\u2060\uFEFF]/g;

/** Single-line text (names, email, phone, subject): one line, single spaces. */
export function cleanLine(value: string) {
  return value.replace(/\s+/g, " ").replace(CONTROL_CHARS, "").trim();
}

/**
 * Multi-line text (the message): keeps line breaks and tabs, normalises CRLF,
 * drops other control characters and trailing spaces, and collapses runs of
 * blank lines into one.
 */
export function cleanMultiline(value: string) {
  return value
    .replace(/\r\n?/g, "\n")
    .replace(CONTROL_CHARS_EXCEPT_TAB_LF, "")
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const PHONE_CHARS = /^\+?[\d\s().-]+$/;

function isPlausiblePhone(value: string) {
  if (value === "") return true;
  const digits = value.replace(/\D/g, "").length;
  return PHONE_CHARS.test(value) && digits >= 7 && digits <= 16;
}

const requiredLine = (label: string, max: number) =>
  z
    .string()
    .overwrite(cleanLine)
    .min(1, `Please enter your ${label}`)
    .max(max, `Please keep your ${label} under ${max} characters`);

export const firstNameField = requiredLine("first name", 100);
export const lastNameField = requiredLine("last name", 100);

export const emailField = z
  .string()
  .overwrite((value) => cleanLine(value).toLowerCase())
  .min(1, "Please enter your email address")
  .max(255, "Please use an email address under 255 characters")
  .pipe(z.email("Please enter a valid email address, like you@company.com"));

/** Optional: an empty string is valid. */
export const phoneField = z
  .string()
  .overwrite(cleanLine)
  .max(40, "Please keep the phone number under 40 characters")
  .refine(isPlausiblePhone, "Please enter a valid phone number, or leave this blank");

export const messageField = z
  .string()
  .overwrite(cleanMultiline)
  .min(10, "Please write at least 10 characters so we know what you need")
  .max(5000, "Please keep your message under 5,000 characters");

export const subjectField = z.string().overwrite(cleanLine).max(200);

/** The base schema: every field a visitor types into <ContactForm>. */
export const contactBaseSchema = z.object({
  firstName: firstNameField,
  lastName: lastNameField,
  email: emailField,
  phone: phoneField,
  message: messageField,
});

export type ContactFormValues = z.input<typeof contactBaseSchema>;

export const CONTACT_FORM_INITIAL: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

/** Newsletter signup: the email rule from the base schema, nothing else. */
export const newsletterSchema = contactBaseSchema.pick({ email: true });

/**
 * Anti-spam fields every public form must send. Both are required so a script
 * that simply leaves them out is rejected.
 * - website: honeypot, hidden from people. Must be sent, and must be empty.
 * - elapsedMs: time since the form mounted (not a wall-clock stamp, so a wrong
 *   device clock can't reject a real visitor).
 */
const spamGuardShape = {
  website: z.string().max(200),
  elapsedMs: z.number().int().nonnegative(),
};

/** What `submitContactForm` accepts. */
export const contactSubmissionSchema = contactBaseSchema.extend({
  subject: subjectField.optional(),
  source: z.enum(CONTACT_SOURCES).optional(),
  ...spamGuardShape,
});
export type ContactSubmission = z.input<typeof contactSubmissionSchema>;

/** What `subscribeToNewsletter` accepts. */
export const newsletterSubmissionSchema = newsletterSchema.extend(spamGuardShape);
export type NewsletterSubmission = z.input<typeof newsletterSubmissionSchema>;

/** Subject line for the owner's notification email, e.g. "New inquiry from Jane Doe (home)". */
export function buildInquirySubject(firstName: string, lastName: string, source: ContactSource) {
  const name = cleanLine(`${firstName} ${lastName}`) || "a visitor";
  return `New inquiry from ${name} (${source})`.slice(0, 200);
}

export const CONTACT_SUCCESS_MESSAGE = "Thanks, we'll reply within one business day.";
export const NEWSLETTER_SUCCESS_MESSAGE = "Thanks, you're on the list.";

/**
 * The only error messages the server sends on purpose. Forms show these as-is
 * and replace anything else (network failures, framework errors) with a
 * generic message, so a visitor never sees raw validation JSON.
 */
export const SUBMIT_ERRORS = {
  invalid: "Some details look incomplete. Please check the form and try again.",
  tooFast: "That was quick. Please check your details, then send again.",
  rateLimited:
    "You've sent a few of these in a short time. Please wait a few minutes and try again.",
  unavailable: `We couldn't save that just now. Please try again, or email us at ${SITE.email}.`,
} as const;

const GENERIC_SUBMIT_ERROR = `Something went wrong on our side. Please try again, or email us at ${SITE.email}.`;

export function submitErrorMessage(error: unknown): string {
  const message = error instanceof Error ? error.message : "";
  return (Object.values(SUBMIT_ERRORS) as string[]).includes(message)
    ? message
    : GENERIC_SUBMIT_ERROR;
}
