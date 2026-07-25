import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site-chrome";
import { VideoTestimonials } from "@/components/video-testimonials";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { z } from "zod";
import { submitContactForm } from "@/lib/contact.functions";
import {
  Palette,
  Globe,
  ShoppingBag,
  Layers,
  Cog,
  Brain,
  Search,
  Megaphone,
  Clapperboard,
  Search as SearchIcon,
  Lightbulb,
  Hammer,
  TrendingUp,
  Plus,
  Minus,
  Mail,
  Phone,
  Clock,
  Loader2,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Pixel2Tech" },
      { name: "description", content: "Branding, web development, digital marketing, motion, social media and AI solutions." },
      { property: "og:title", content: "Services — Pixel2Tech" },
      { property: "og:description", content: "Everything you need to build and grow your brand." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  {
    title: "Branding & Design",
    Icon: Palette,
    accent: "bg-violet-500/15 text-violet-600 dark:text-violet-400",
    desc: "Logo, color palette, typography, and brand guidelines that make your business look professional and stand out from day one.",
    tags: ["Logo", "Brand Guide", "UI / UX"],
  },
  {
    title: "Website Development",
    Icon: Globe,
    accent: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
    desc: "Fast, modern, mobile-ready websites that convert visitors into customers — from landing pages to full business sites.",
    tags: ["React", "Next.js", "Custom Code"],
  },
  {
    title: "WordPress & Shopify",
    Icon: ShoppingBag,
    accent: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    desc: "Custom WordPress sites and Shopify stores built to sell — with themes, plugins, product pages, and payment flows all set up for you.",
    tags: ["WordPress", "Shopify", "WooCommerce"],
  },
  {
    title: "Custom Platforms & Apps",
    Icon: Layers,
    accent: "bg-orange-500/15 text-orange-600 dark:text-orange-400",
    desc: "Mobile apps, SaaS products, client portals, and dashboards built from scratch to match your exact business needs.",
    tags: ["SaaS", "Mobile App", "Portals"],
  },
  {
    title: "Automation & CRM",
    Icon: Cog,
    accent: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400",
    desc: "Workflow automation, CRM systems, and third-party integrations that eliminate manual work and keep your business running on its own.",
    tags: ["n8n", "Make", "Zapier", "Custom CRM"],
  },
  {
    title: "AI Solutions",
    Icon: Brain,
    accent: "bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-400",
    desc: "AI chatbots, voice agents, and RAG systems that automate customer interactions and make your product smarter without extra headcount.",
    tags: ["Chatbots", "RAG", "Voice Agents"],
  },
  {
    title: "SEO & Search Growth",
    Icon: Search,
    accent: "bg-green-500/15 text-green-600 dark:text-green-400",
    desc: "On-page SEO, technical audits, and keyword strategy that gets your business ranking on Google and driving consistent organic traffic.",
    tags: ["On-Page SEO", "Technical SEO", "Local SEO"],
  },
  {
    title: "Social Media & Email",
    Icon: Megaphone,
    accent: "bg-pink-500/15 text-pink-600 dark:text-pink-400",
    desc: "Content creation, ad campaigns, email sequences, and newsletter management across all major platforms — handled end to end.",
    tags: ["Instagram", "Facebook Ads"],
  },
  {
    title: "Video Editing & Ads",
    Icon: Clapperboard,
    accent: "bg-red-500/15 text-red-600 dark:text-red-400",
    desc: "Reels, brand videos, YouTube content, and paid ad creatives edited to grab attention and convert across every platform.",
    tags: ["Reels", "YouTube", "Paid Ads"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    Icon: SearchIcon,
    desc: "We understand your business, goals, challenges, and opportunities before recommending any solution.",
  },
  {
    step: "02",
    title: "Strategize",
    Icon: Lightbulb,
    desc: "We identify the best combination of design, technology, AI, and automation to solve the problem.",
  },
  {
    step: "03",
    title: "Build & Implement",
    Icon: Hammer,
    desc: "Our team designs, develops, and implements solutions focused on efficiency, performance, and scalability.",
  },
  {
    step: "04",
    title: "Optimize & Scale",
    Icon: TrendingUp,
    desc: "We continuously improve systems, experiences, and processes to support sustainable business growth.",
  },
];

const faqs = [
  {
    q: "What makes Pixel2Tech different?",
    a: "We combine creativity, technology, AI, and business strategy to build solutions that solve real business challenges and create measurable impact.",
  },
  {
    q: "What services does Pixel2Tech provide?",
    a: "We offer design, software development, AI solutions, automation, digital products, and technology consulting tailored to business goals.",
  },
  {
    q: "Do you work with businesses worldwide?",
    a: "Yes. We work with startups, founders, and businesses across different industries and locations through both onsite and remote collaboration.",
  },
  {
    q: "Can you handle both design and development?",
    a: "Absolutely. Our team combines creative design, development, AI, and automation expertise to deliver complete digital solutions under one roof.",
  },
  {
    q: "Do you offer custom solutions?",
    a: "Every business is different. We tailor our approach based on your goals, challenges, and growth requirements rather than offering one-size-fits-all packages.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with startups, SaaS companies, eCommerce brands, agencies, service businesses, and growing organizations across various industries.",
  },
];

const clientSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Please enter a subject").max(200),
  message: z.string().trim().min(1, "Please write a message").max(5000),
});

type FormState = { name: string; email: string; subject: string; message: string };
const initial: FormState = { name: "", email: "", subject: "", message: "" };

function ServicesPage() {
  const submit = useServerFn(submitContactForm);
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  return (
    <PageShell>
      <PageHeader
        eyebrow="WHAT WE DO"
        title="Everything You Need to"
        highlight="Build, Grow and Scale"
        subtitle="From creative design and custom development to AI-powered automation and digital solutions, we help businesses streamline operations, improve customer experiences, and accelerate growth."
      />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 pb-6 sm:px-8 sm:pb-10">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border/70 bg-muted p-6 dark:border-white/10 dark:bg-white/[0.02] sm:flex-row sm:items-center sm:rounded-3xl sm:p-8 md:p-10">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
              One Team. Multiple Expertise. Real Business Impact.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background hover:opacity-90"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[40px]">Our Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            Everything your business needs to grow online — design, development, marketing, automation, and SEO under one roof.
          </p>
        </div>
        <div className="rounded-2xl bg-muted p-3 sm:rounded-3xl sm:p-4 md:p-6 dark:bg-white/[0.02]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border/70 bg-background p-5 transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05] sm:p-6">
                <div className="flex items-center gap-3">
                  <div aria-hidden="true" className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${s.accent}`}>
                    <s.Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-bold text-foreground sm:text-lg">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs text-foreground/80 dark:border-white/10 dark:bg-white/[0.05]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-8 text-center sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">How We Work</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[40px]">
            A structured process to deliver quality work without confusion.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.title} className="relative rounded-2xl border border-border/70 bg-background p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-7">
              <span className="absolute right-5 top-5 text-xs font-bold text-muted-foreground/60">{p.step}</span>
              <div aria-hidden="true" className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <p.Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <VideoTestimonials />

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16" aria-labelledby="faq-title">
        <h2 id="faq-title" className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[40px]">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-3 sm:mt-10">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={i} className="rounded-2xl border border-border/70 bg-background dark:border-white/10 dark:bg-white/[0.03]">
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <span className="text-base font-semibold text-foreground sm:text-lg">
                    {i + 1}. {f.q}
                  </span>
                  <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted dark:border-white/10 dark:bg-white/[0.05]">
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {open && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Let's work together */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Let's work together</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[40px]">
              Ready to transform your brand?
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Get in touch with us today, and let’s create something amazing.
            </p>

            <div className="mt-8 space-y-4 sm:mt-10">
              <div className="flex items-center gap-4 rounded-2xl border border-border/70 bg-background p-4 dark:border-white/10 dark:bg-white/[0.03] sm:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted dark:bg-white/[0.05]">
                  <Mail className="h-4 w-4 text-foreground" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</p>
                  <a href="mailto:sales@pixel2tech.com" className="text-sm font-medium text-foreground hover:underline">
                    sales@pixel2tech.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-border/70 bg-background p-4 dark:border-white/10 dark:bg-white/[0.03] sm:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted dark:bg-white/[0.05]">
                  <Phone className="h-4 w-4 text-foreground" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">WhatsApp</p>
                  <a href="https://wa.me/923177475212" target="_blank" rel="noreferrer" className="text-sm font-medium text-foreground hover:underline">
                    +92 317 7475212
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-border/70 bg-background p-4 dark:border-white/10 dark:bg-white/[0.03] sm:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted dark:bg-white/[0.05]">
                  <Clock className="h-4 w-4 text-foreground" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Working Hours</p>
                  <p className="text-sm font-medium text-foreground">Mon – Fri: 9:00 AM – 6:00 PM</p>
                  <p className="text-xs text-muted-foreground">Sat: 10:00 AM – 4:00 PM · Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-muted p-6 dark:bg-white/[0.02] sm:rounded-3xl sm:p-8 md:p-10">
            <h3 className="text-lg font-bold text-foreground sm:text-xl">Send us a message</h3>
            <form onSubmit={onSubmit} aria-labelledby="services-form-title" noValidate className="mt-5 grid gap-5 sm:mt-6">
              <h2 id="services-form-title" className="sr-only">Services inquiry form</h2>
              {fields.map((f) => (
                <div key={f.id} className="flex flex-col">
                  <label htmlFor={`svc-${f.id}`} className="mb-1 text-xs font-semibold uppercase tracking-wide text-foreground/80">
                    {f.label} <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`svc-${f.id}`}
                    name={f.id}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    placeholder={f.placeholder}
                    value={form[f.id]}
                    onChange={set(f.id)}
                    aria-invalid={!!errors[f.id]}
                    aria-describedby={errors[f.id] ? `svc-${f.id}-error` : undefined}
                    className="min-h-11 border-0 border-b border-neutral-500 bg-transparent px-1 py-3 text-base text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-foreground"
                  />
                  {errors[f.id] && (
                    <p id={`svc-${f.id}-error`} className="mt-1 text-xs text-red-600">{errors[f.id]}</p>
                  )}
                </div>
              ))}
              <div className="flex flex-col">
                <label htmlFor="svc-message" className="mb-1 text-xs font-semibold uppercase tracking-wide text-foreground/80">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="svc-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us about your project"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "svc-message-error" : undefined}
                  className="border-0 border-b border-neutral-500 bg-transparent px-1 py-3 text-base text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-foreground"
                />
                {errors.message && (
                  <p id="svc-message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                {loading ? "Sending…" : "Get in Touch"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
