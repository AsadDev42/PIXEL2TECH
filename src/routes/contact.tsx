import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { Mail, Loader2, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { z } from "zod";
import { submitContactForm } from "@/lib/contact.functions";
import { FadeIn } from "@/components/motion";

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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.79 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.708.888.858 0 2.42-.516 2.75-1.404.13-.343.187-.744.187-1.117 0-.286-1.877-1.135-2.15-1.246Zm-2.895 7.208a10.086 10.086 0 0 1-5.13-1.404l-3.583.945.96-3.522A10.028 10.028 0 0 1 6.145 14.4 10.079 10.079 0 0 1 16.2 4.348a10.079 10.079 0 0 1 10.055 10.052 10.079 10.079 0 0 1-10.041 10.013Zm0-22.146A12.11 12.11 0 0 0 4.098 14.4c0 2.147.573 4.194 1.65 6.055L3.75 27.75l7.457-1.949a12.121 12.121 0 0 0 5.784 1.476h.014c6.694 0 12.176-5.474 12.176-12.166A12.15 12.15 0 0 0 25.638 5.5a12.005 12.005 0 0 0-9.423-4.233Z"/>
    </svg>
  );
}

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
    { id: "name", label: "Your Name", type: "text", autoComplete: "name", placeholder: "John Doe" },
    { id: "email", label: "Your Email", type: "email", autoComplete: "email", placeholder: "john@example.com" },
    { id: "subject", label: "Subject", type: "text", autoComplete: "off", placeholder: "Project Inquiry" },
  ] as const;

  const socials = [
    { Icon: Facebook, label: "Facebook", href: "https://facebook.com/pixel2tech" },
    { Icon: Twitter, label: "Twitter / X", href: "https://twitter.com/pixel2tech" },
    { Icon: Instagram, label: "Instagram", href: "https://instagram.com/pixel2tech" },
    { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/pixel2tech" },
  ] as const;

  return (
    <PageShell>
      <section className="bg-background pb-16 pt-10 sm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[52px]">
                Let&apos;s <span className="text-[#1E90FF]">work together</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-[14px] text-muted-foreground sm:text-[15px]">
                Ready to transform your brand? Get in touch with us today and let&apos;s create something amazing.
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-8 sm:mt-14 md:grid-cols-2 lg:gap-12">
            {/* Form */}
            <FadeIn delay={0.1}>
              <div>
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground sm:mb-8 sm:text-3xl">
                  Send us a message
                </h2>
                <form onSubmit={onSubmit} aria-labelledby="contact-form-title" noValidate className="space-y-4 sm:space-y-5">
                  <h2 id="contact-form-title" className="sr-only">Contact form</h2>

                  {fields.map((f) => (
                    <div key={f.id} className="flex flex-col">
                      <label htmlFor={f.id} className="mb-2 text-sm font-medium text-foreground">
                        {f.label}
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
                        className="min-h-12 w-full rounded-xl bg-muted px-4 py-3 text-base text-foreground placeholder:text-muted-foreground outline-none ring-0 transition-colors focus:bg-muted/80 focus:ring-2 focus:ring-ring"
                      />
                      {errors[f.id] && (
                        <p id={`${f.id}-error`} className="mt-1.5 text-xs text-destructive">{errors[f.id]}</p>
                      )}
                    </div>
                  ))}

                  <div className="flex flex-col">
                    <label htmlFor="message" className="mb-2 text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Tell us about your project"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className="w-full resize-none rounded-xl bg-muted px-4 py-3 text-base text-foreground placeholder:text-muted-foreground outline-none ring-0 transition-colors focus:bg-muted/80 focus:ring-2 focus:ring-ring"
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:mt-3"
                  >
                    {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                    {loading ? "Sending…" : "Send Message"}
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Contact info */}
            <FadeIn delay={0.2}>
              <div>
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground sm:mb-8 sm:text-3xl">
                  Get in touch
                </h2>

                <div className="space-y-4">
                  <a
                    href="mailto:sales@pixel2tech.com"
                    className="group flex items-center gap-4 rounded-2xl bg-muted p-4 transition hover:bg-muted/80 sm:p-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background text-foreground shadow-sm ring-1 ring-border">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Email</div>
                      <div className="text-sm text-muted-foreground group-hover:text-foreground">sales@pixel2tech.com</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/923177475233?text=Hi%20Pixel2Tech%2C%20I%27d%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl bg-muted p-4 transition hover:bg-muted/80 sm:p-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background text-foreground shadow-sm ring-1 ring-border">
                      <WhatsAppIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-foreground">WhatsApp</div>
                      <div className="text-sm text-muted-foreground group-hover:text-foreground">+92 317 7475233</div>
                    </div>
                  </a>
                </div>

                <div className="mt-8">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">Follow us</h3>
                  <div className="flex flex-wrap gap-3">
                    {socials.map(({ Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Pixel2Tech on ${label}`}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-foreground transition hover:bg-muted"
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-muted p-5 sm:p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">Follow us</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between text-foreground">
                      <span>Monday - Friday</span>
                      <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between text-foreground">
                      <span>Saturday</span>
                      <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between text-foreground">
                      <span>Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
