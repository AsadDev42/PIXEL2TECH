import * as React from "react";
import { render } from "@react-email/render";
import { TEMPLATES } from "./registry";

// Server-only: reads RESEND_API_KEY. Never import from client components.
//
// Sends through Resend's REST API with plain fetch (no SDK). The From address
// must be on a domain verified in Resend (here the notify.pixel2tech.com
// subdomain); EMAIL_FROM overrides it without a code change.

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_FROM = "Pixel2Tech <noreply@notify.pixel2tech.com>";
const MAX_ATTEMPTS = 3;
const REQUEST_TIMEOUT_MS = 10_000;

export type SendTemplateEmailResult = { sent: true; id: string };

export interface SendTemplateEmailOptions {
  templateData?: Record<string, unknown>;
  /** Dedupes retries of the same logical send for 24h; defaults to a random UUID (no dedupe). Max 256 chars. */
  idempotencyKey?: string;
  replyTo?: string;
}

/** A Resend API failure. `code` is Resend's error `name` (e.g. "validation_error", "rate_limit_exceeded"). */
export class EmailAPIError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly code: string | undefined,
  ) {
    super(message);
    this.name = "EmailAPIError";
  }
}

/**
 * 429 rate limits and 5xx are transient; 409 concurrent_idempotent_requests
 * means "same key still in flight, retry later". An exhausted daily/monthly
 * quota is also a 429 but cannot succeed on retry.
 */
function isRetryable(status: number, code: string | undefined) {
  if (code === "daily_quota_exceeded" || code === "monthly_quota_exceeded") return false;
  return status === 429 || status >= 500 || code === "concurrent_idempotent_requests";
}

function retryDelayMs(response: Response, attempt: number) {
  const header = Number(response.headers.get("retry-after"));
  const fromHeader = Number.isFinite(header) && header > 0 ? header * 1000 : 0;
  // Keep the whole send well inside a request: never wait more than 2s per retry.
  return Math.min(Math.max(fromHeader, 250 * 2 ** attempt), 2_000);
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Renders a registered template and sends it through Resend. Any failure
 * throws (EmailAPIError exposes .status and .code); callers treat email as
 * best-effort. Retries reuse the same Idempotency-Key, so a retried request
 * can never deliver twice.
 */
export async function sendTemplateEmail(
  templateName: string,
  to: string,
  options: SendTemplateEmailOptions = {},
): Promise<SendTemplateEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const template = TEMPLATES[templateName];
  if (!template) {
    throw new Error(
      `Template '${templateName}' not found. Available: ${Object.keys(TEMPLATES).join(", ")}`,
    );
  }

  // Template-level `to` takes precedence — notification templates always
  // send to their fixed address.
  const recipient = template.to || to;
  if (!recipient) {
    throw new Error("Recipient is required (the template defines no fixed recipient)");
  }

  const templateData = options.templateData ?? {};
  const element = React.createElement(template.component, templateData);
  const html = await render(element);
  const text = await render(element, { plainText: true });
  const subject =
    typeof template.subject === "function" ? template.subject(templateData) : template.subject;

  const idempotencyKey = (options.idempotencyKey || crypto.randomUUID()).slice(0, 256);
  const body = JSON.stringify({
    from: process.env.EMAIL_FROM || DEFAULT_FROM,
    to: [recipient],
    subject,
    html,
    text,
    ...(options.replyTo ? { reply_to: options.replyTo } : {}),
    // Tag values allow only ASCII letters, digits, "_" and "-"; template names fit.
    tags: [{ name: "template", value: templateName.replace(/[^A-Za-z0-9_-]/g, "_") }],
  });

  for (let attempt = 1; ; attempt++) {
    let response: Response;
    try {
      response = await fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "Idempotency-Key": idempotencyKey,
        },
        body,
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });
    } catch (error) {
      // Network error or timeout: safe to retry thanks to the idempotency key.
      if (attempt >= MAX_ATTEMPTS) throw error;
      await sleep(250 * 2 ** attempt);
      continue;
    }

    if (response.ok) {
      const json = (await response.json().catch(() => null)) as { id?: unknown } | null;
      return { sent: true, id: typeof json?.id === "string" ? json.id : "" };
    }

    const raw = await response.text();
    let code: string | undefined;
    let message = raw;
    try {
      const parsed = JSON.parse(raw) as { name?: string; message?: string };
      code = parsed.name;
      message = parsed.message ?? raw;
    } catch {
      // Not JSON: keep the raw text.
    }

    if (attempt < MAX_ATTEMPTS && isRetryable(response.status, code)) {
      await sleep(retryDelayMs(response, attempt));
      continue;
    }
    throw new EmailAPIError(
      `Resend ${response.status}${code ? ` ${code}` : ""}: ${message}`,
      response.status,
      code,
    );
  }
}
