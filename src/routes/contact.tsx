import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { Mail, Loader2, MapPin, Phone, ArrowRight, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
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
    { id: "name", label: "YOUR NAME", type: "text", autoComplete: "name", placeholder: "John Doe" },
    { id: "email", label: "YOUR EMAIL", type: "email", autoComplete: "email", placeholder: "john@example.com" },
    { id: "subject", label: "SUBJECT", type: "text", autoComplete: "off", placeholder: "Project Inquiry" },
  ] as const;

  return (
    <PageShell>
      <section className="bg-background pb-16 pt-10 sm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: heading + contact info */}
            <FadeIn>
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Let&apos;s work together
                </span>
                <h1 className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[52px]">
                  Ready to transform your brand?
                </h1>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                  Get in touch with us today, and let&apos;s create something amazing.
                </p>

                <div className="mt-10 space-y-4 sm:mt-12">
                  <a
                    href="mailto:sales@pixel2tech.com"
                    className="group flex items-center gap-4 rounded-3xl border border-border bg-background p-4 transition hover:bg-muted/40 sm:p-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</div>
                      <div className="mt-0.5 text-sm font-medium text-foreground group-hover:text-primary">sales@pixel2tech.com</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/923177475233?text=Hi%20Pixel2Tech%2C%20I%27d%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-3xl border border-border bg-background p-4 transition hover:bg-muted/40 sm:p-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                      <WhatsAppIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                      <div className="mt-0.5 text-sm font-medium text-foreground group-hover:text-primary">+92 317 7475212</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 rounded-3xl border border-border bg-background p-4 sm:p-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Working Hours</div>
                      <div className="mt-0.5 text-sm font-medium text-foreground">
                        Mon - Fri: 9:00 AM - 6:00 PM
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Sat: 10:00 AM - 4:00 PM · Sun: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: form card */}
            <FadeIn delay={0.1}>
              <div className="rounded-[2rem] bg-muted/60 p-6 dark:bg-muted/40 sm:p-8 lg:p-10">
                <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Send us a message
                </h2>
                <form onSubmit={onSubmit} aria-labelledby="contact-form-title" noValidate className="space-y-6">
                  <h2 id="contact-form-title" className="sr-only">Contact form</h2>

                  {fields.map((f) => (
                    <div key={f.id} className="flex flex-col">
                      <label htmlFor={f.id} className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                        {f.label} <span className="text-destructive" aria-hidden="true">*</span>
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
                        className="min-h-11 w-full border-0 border-b border-border bg-transparent px-0 py-2.5 text-base text-foreground placeholder:text-muted-foreground outline-none ring-0 transition-colors focus:border-primary focus:bg-transparent"
                      />
                      {errors[f.id] && (
                        <p id={`${f.id}-error`} className="mt-1.5 text-xs text-destructive">{errors[f.id]}</p>
                      )}
                    </div>
                  ))}

                  <div className="flex flex-col">
                    <label htmlFor="message" className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                      MESSAGE <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Tell us about your project"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className="w-full resize-none border-0 border-b border-border bg-transparent px-0 py-2.5 text-base text-foreground placeholder:text-muted-foreground outline-none ring-0 transition-colors focus:border-primary focus:bg-transparent"
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-sm font-semibold text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                    {loading ? "Sending…" : "Get in Touch"}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Get in Touch intro */}
      <section className="bg-muted/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <div className="grid gap-10 md:grid-cols-2 md:items-center lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Get in Touch
                  <br />
                  <span className="text-primary">with Us</span>
                </h2>
              </div>
              <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                If you have any questions or need assistance, don&apos;t hesitate to reach out to us. We are here to help you with your marketing and design needs. You can also visit our office in Lahore, or contact us directly via phone or email for prompt support.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Map */}
      <section className="bg-background pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
              <iframe
                title="Pixel2Tech office location — Lahore, Pakistan"
                src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[360px] w-full border-0 sm:h-[450px]"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Location */}
      <section className="bg-muted/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Our <span className="text-primary">Location</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] text-muted-foreground sm:text-base">
                Find us at our headquarters, where creativity meets innovation. Our office is designed to inspire collaboration and ideas, making it a perfect hub for client interactions and team efforts.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { Icon: MapPin, title: "Visit Us", body: "Our office is conveniently located at the heart of Lahore, easily accessible for clients and partners. Come by to discuss your next project or just to say hello!" },
              { Icon: Phone, title: "Reach Out", body: "Whether you have questions or need assistance, our team is ready to help. Don't hesitate to stop by or contact us through our website." },
              { Icon: Mail, title: "Write to Us", body: "Drop us an email anytime at sales@pixel2tech.com — we reply within one business day with next steps tailored to your project." },
            ].map(({ Icon, title, body }, i) => (
              <FadeIn key={title} delay={0.1 * (i + 1)}>
                <div className="h-full rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Elevate CTA */}
      <section className="bg-background pb-24 pt-8 sm:pb-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <FadeIn>
            <div className="mx-auto flex min-h-[420px] w-full flex-col items-center justify-center rounded-3xl bg-foreground px-6 py-16 text-center text-background sm:min-h-[480px] sm:px-12 sm:py-20">
              <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
                Ready to elevate your <span className="text-primary">brand</span> today?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-relaxed text-background/70 sm:text-base">
                Your brand deserves to shine. Let our creative expertise help you connect with your audience. We specialize in captivating designs and impactful strategies tailored to your needs. Don&apos;t miss out — let&apos;s create something amazing together.
              </p>
              <div className="mt-9 flex w-full justify-center">
                <Link
                  to="/services"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-foreground active:translate-y-0 active:scale-[0.98]"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageShell>
  );
}
