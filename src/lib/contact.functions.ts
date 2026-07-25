import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const submissionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(5000),
});

export type SubmissionInput = z.infer<typeof submissionSchema>;

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((input: SubmissionInput) => submissionSchema.parse(input))
  .handler(async ({ data }) => {
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

    // Best-effort owner notification via Lovable managed email API.
    // Silently skipped if no email domain / API key is configured yet.
    const apiKey = process.env.LOVABLE_API_KEY;
    const ownerEmail = process.env.CONTACT_OWNER_EMAIL || "sales@pixel2tech.com";
    const senderDomain = process.env.SENDER_DOMAIN;
    if (apiKey && senderDomain) {
      try {
        await fetch("https://api.lovable.dev/v1/email/send", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: `Pixel2Tech <notify@${senderDomain}>`,
            to: ownerEmail,
            reply_to: data.email,
            subject: `New contact form: ${data.subject}`,
            html: `
              <h2>New contact form submission</h2>
              <p><strong>Name:</strong> ${escape(data.name)}</p>
              <p><strong>Email:</strong> ${escape(data.email)}</p>
              <p><strong>Subject:</strong> ${escape(data.subject)}</p>
              <p><strong>Message:</strong></p>
              <p>${escape(data.message).replace(/\n/g, "<br/>")}</p>
            `,
          }),
        });
      } catch (e) {
        console.warn("[contact] email notification failed", e);
      }
    }

    return { ok: true as const };
  });

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
