import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site-chrome";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { z } from "zod";
import { submitContactForm } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Pixel2Tech" },
      { name: "description", content: "Get in touch with Pixel2Tech. Tell us about your project and let's build something great together." },
      { property: "og:title", content: "Contact — Pixel2Tech" },
      { property: "og:description", content: "Tell us about your project. We reply within one business day." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const clientSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Please enter a subject").max(200),
  message: z.string().trim().min(1, "Please write a message").max(5000),
});

type FormState = { name: string; email: string; subject: string; message: string };
const initial: FormState = { name: "", email: "", subject: "", message: "" };

function ContactPage() {
  const submit = useServerFn(submitContactForm);
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = clientSchema.safeParse(form);
    if (!parsed.success) {
      const next: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      return;
    }
    setLoading(true);
    try {
      await submit({ data: parsed.data });
      toast.success("Message sent!", {
        description: "Thanks — we'll get back to you within one business day.",
      });
      setForm(initial);
      setErrors({});
    } catch (err) {
      toast.error("Couldn't send message", {
        description: err instanceof Error ? err.message : "Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  }

  const fields = [
    { id: "name", label: "Full Name", type: "text", autoComplete: "name", placeholder: "Jane Doe" },
    { id: "email", label: "Email", type: "email", autoComplete: "email", placeholder: "you@company.com" },
    { id: "subject", label: "Subject", type: "text", autoComplete: "off", placeholder: "What can we help with?" },
  ] as const;

  return (
    <PageShell>
      <PageHeader
        title="Ready to"
        highlight="Grow Your Brand?"
        subtitle="Tell us about your project and goals. Let's build something great together."
      />

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="grid gap-6 sm:gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl bg-muted p-6 sm:rounded-3xl sm:p-10 md:p-14">
            <form onSubmit={onSubmit} aria-labelledby="contact-form-title" noValidate className="grid gap-5 sm:gap-6">
              <h2 id="contact-form-title" className="sr-only">Contact form</h2>

              {fields.map((f) => (
                <div key={f.id} className="flex flex-col">
                  <label htmlFor={f.id} className="mb-1 text-xs font-semibold uppercase tracking-wide text-foreground/80">
                    {f.label} <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    placeholder={f.placeholder}
                    value={form[f.id]}
                    onChange={set(f.id)}
                    aria-invalid={!!errors[f.id]}
                    aria-describedby={errors[f.id] ? `${f.id}-error` : undefined}
                    className="min-h-11 border-0 border-b border-neutral-500 bg-transparent px-1 py-3 text-base text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-foreground"
                  />
                  {errors[f.id] && (
                    <p id={`${f.id}-error`} className="mt-1 text-xs text-red-600">{errors[f.id]}</p>
                  )}
                </div>
              ))}

              <div className="flex flex-col">
                <label htmlFor="message" className="mb-1 text-xs font-semibold uppercase tracking-wide text-foreground/80">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us a bit about your project…"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="border-0 border-b border-neutral-500 bg-transparent px-1 py-3 text-base text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-foreground"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-3 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:mt-4"
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                {loading ? "Sending…" : "Get in Touch"}
              </button>
            </form>
          </div>

          <aside aria-labelledby="direct-contact-title" className="flex flex-col justify-between rounded-2xl bg-foreground p-6 text-background sm:rounded-3xl sm:p-10 md:p-12">
            <div>
              <h2 id="direct-contact-title" className="text-xl font-bold sm:text-2xl">Talk to us directly</h2>
              <p className="mt-3 text-sm text-background/80">
                Prefer to skip the form? Reach out on the channels below and a
                team member will get back within one business day.
              </p>
              <ul className="mt-6 space-y-4 text-sm sm:mt-8">
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background/10">
                    <Mail className="h-4 w-4" />
                  </span>
                  <a href="mailto:sales@pixel2tech.com" className="min-w-0 break-all hover:underline">sales@pixel2tech.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background/10">
                    <Phone className="h-4 w-4" />
                  </span>
                  <a href="tel:+923177475233" className="hover:underline">+92 317 7475233</a>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background/10">
                    <MapPin className="h-4 w-4" />
                  </span>
                  Pakistan Based, Serving Worldwide
                </li>
              </ul>
            </div>
            <p className="mt-8 rounded-2xl bg-background/10 p-4 text-sm text-background sm:mt-10 sm:p-5">
              Response time <span className="font-bold">under 24h</span> · Mon – Sat
            </p>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
