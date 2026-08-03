import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { LazySection } from "@/components/lazy-section";
import { lazy, Suspense, useState } from "react";

// Heavy, below-the-fold: its chunk is fetched only when the user scrolls near it.
const VideoTestimonials = lazy(() =>
  import("@/components/video-testimonials").then((m) => ({ default: m.VideoTestimonials })),
);

import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { z } from "zod";
import { submitContactForm } from "@/lib/contact.functions";
import { useFormValidation } from "@/lib/use-form-validation";

import { SOCIAL_LINKS } from "@/components/social-links";
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
  Sparkles,
  Target,
  ArrowUpRight,
} from "lucide-react";
import { FadeIn, Stagger, StaggerItem, HoverLift } from "@/components/motion";

const whyReasons = [
  { title: "One Agency, Every Skill", desc: "Design, content, development, and software handled in-house by one team. No chasing five different freelancers.", icon: "Sparkles" },
  { title: "Design + Technology", desc: "We combine creative thinking with technical expertise to build impactful digital solutions.", icon: "Layers" },
  { title: "Business-First Approach", desc: "Every solution is designed around business outcomes, not just deliverables.", icon: "Target" },
  { title: "Built for Growth", desc: "From startups to growing companies, we create systems that support long-term scalability.", icon: "TrendingUp" },
];

const OG_IMAGE = "https://pixel2tech.com/__l5e/assets-v1/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | Branding, Web Design, UI/UX & AI Automation" },
      { name: "description", content: "Full-service creative solutions: branding, website development, UI/UX design, social media, motion video, and custom software & AI automation." },
      { property: "og:title", content: "Services | Branding, Web Design, UI/UX & AI Automation" },
      { property: "og:description", content: "Full-service creative solutions: branding, website development, UI/UX design, social media, motion video, and custom software & AI automation." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel2tech.com/services" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:title", content: "Services | Branding, Web Design, UI/UX & AI Automation" },
      { name: "twitter:description", content: "Full-service creative solutions: branding, website development, UI/UX design, social media, motion video, and custom software & AI automation." },
    ],
    links: [{ rel: "canonical", href: "https://pixel2tech.com/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Pixel2Tech services",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.desc,
              areaServed: "Worldwide",
              provider: {
                "@type": "Organization",
                "@id": "https://pixel2tech.com/#organization",
                name: "Pixel2Tech",
                url: "https://pixel2tech.com",
              },
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://pixel2tech.com/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://pixel2tech.com/services" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],

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
  message: z.string().trim().min(10, "Please write at least 10 characters").max(5000),
});

type FormState = { name: string; email: string; subject: string; message: string };
const initial: FormState = { name: "", email: "", subject: "", message: "" };

function ServicesPage() {
  const submit = useServerFn(submitContactForm);
  const [website, setWebsite] = useState("");
  const [loadedAt] = useState<number>(() => Date.now());
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { values: form, errors, submitting: loading, setField, handleBlur, handleSubmit, reset } =
    useFormValidation(clientSchema, initial);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await submit({ data: { ...data, website, elapsedMs: Date.now() - loadedAt } });
      toast.success("Message sent!", {
        description: "Thanks — we'll get back to you within one business day.",
      });
      reset();
    } catch (err) {
      toast.error("Couldn't send message", {
        description: err instanceof Error ? err.message : "Please try again in a moment.",
      });
    }
  });

  const fields = [
    { id: "name", label: "Your Name", type: "text", autoComplete: "name", placeholder: "John Doe", inputMode: "text", enterKeyHint: "next" },
    { id: "email", label: "Your Email", type: "email", autoComplete: "email", placeholder: "john@example.com", inputMode: "email", enterKeyHint: "next" },
    { id: "subject", label: "Subject", type: "text", autoComplete: "off", placeholder: "Project Inquiry", inputMode: "text", enterKeyHint: "next" },
  ] as const;


  return (
    <PageShell>
      {/* What We Do */}
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <FadeIn>
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground dark:border-white/10 dark:bg-white/[0.04] sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1E90FF]" aria-hidden="true" />
                What We Do
              </span>

              <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[52px]">
                Everything You Need to{" "}
                <span className="text-[#1E90FF]">Build, Grow and Scale</span>
              </h1>

              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                From creative design and custom development to AI-powered automation and digital
                solutions, we help businesses streamline operations, improve customer experiences,
                and accelerate growth.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 flex flex-col items-center gap-6 rounded-3xl bg-muted p-6 dark:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between sm:p-8 md:p-10 lg:p-12">
              <p className="text-center text-base font-bold leading-snug tracking-tight text-foreground sm:text-left sm:text-lg lg:text-xl">
                One Team. Multiple Expertise. Real Business Impact.
              </p>
              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90 sm:px-8 sm:py-4"
              >
                Start Your Project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
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
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
        <div className="mb-8 text-center sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">How We Work</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[40px]">
            A structured process to deliver quality work without confusion.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.title} className="relative rounded-2xl border border-border/70 bg-background p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-7">
              <span className="absolute right-5 top-5 text-xs font-bold text-muted-foreground">{p.step}</span>
              <div aria-hidden="true" className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <p.Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Pixel2Tech */}
      <section className="relative overflow-hidden bg-muted py-16 md:py-24 lg:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Why Pixel2Tech
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
                Built to be your unfair advantage
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
                We act like your in-house creative department — without the high cost.
              </p>
            </div>
          </FadeIn>
          <Stagger className="mt-10 grid items-stretch gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {whyReasons.map((r, i) => {
              const Icon = { Sparkles, Layers, Target, TrendingUp }[r.icon as "Sparkles"];
              return (
                <StaggerItem key={r.title} className="h-full">
                  <HoverLift className="h-full">
                    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_60px_-25px_color-mix(in_oklab,var(--primary)_35%,transparent)] dark:bg-white/[0.03] sm:p-7">
                      <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="flex items-center justify-between">
                        <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>
                        <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-bold leading-tight text-foreground sm:text-xl">{r.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{r.desc}</p>
                      <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Learn more <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                      </div>
                    </div>
                  </HoverLift>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <LazySection minHeight={520}>
        <Suspense
          fallback={
            <div
              aria-hidden="true"
              className="mx-auto h-[520px] max-w-7xl animate-pulse rounded-3xl bg-muted/60"
            />
          }
        >
          <VideoTestimonials />
        </Suspense>
      </LazySection>


      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:px-10 md:py-24 lg:py-32" aria-labelledby="faq-title">
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
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.05]">
            Let&apos;s <span className="text-primary">work together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Ready to transform your brand? Get in touch with us today, and let&apos;s create something amazing.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-16 sm:mt-16">
          {/* Left: Form */}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Send us a message</h3>
            <form onSubmit={onSubmit} aria-labelledby="services-form-title" noValidate className="mt-6 space-y-5">
              <h2 id="services-form-title" className="sr-only">Services inquiry form</h2>
              <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
                <label htmlFor="hp-svc-website">Website</label>
                <input id="hp-svc-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>

              {fields.map((f) => (
                <div key={f.id} className="flex flex-col">
                  <label htmlFor={`svc-${f.id}`} className="mb-2 text-sm font-medium text-foreground">
                    {f.label}
                  </label>
                  <input
                    id={`svc-${f.id}`}
                    name={f.id}
                    type={f.type}
                    inputMode={f.inputMode}
                    enterKeyHint={f.enterKeyHint}
                    autoComplete={f.autoComplete}
                    placeholder={f.placeholder}
                    value={form[f.id]}
                    onChange={setField(f.id)}
                    onBlur={handleBlur(f.id)}
                    disabled={loading}
                    aria-invalid={!!errors[f.id]}
                    aria-describedby={`svc-${f.id}-error`}
                    className={`min-h-12 rounded-xl border bg-muted px-4 py-3 text-base text-foreground placeholder:text-muted-foreground outline-none transition-colors disabled:opacity-60 dark:bg-white/[0.04] ${errors[f.id] ? "border-destructive focus:border-destructive" : "border-transparent focus:border-foreground/30"}`}
                  />
                  <p id={`svc-${f.id}-error`} role="alert" aria-live="polite" className="mt-1.5 min-h-[1.25rem] text-xs text-destructive">
                    {errors[f.id] ?? ""}
                  </p>
                </div>
              ))}
              <div className="flex flex-col">
                <label htmlFor="svc-message" className="mb-2 text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="svc-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={setField("message")}
                  onBlur={handleBlur("message")}
                  disabled={loading}
                  placeholder="Tell us about your project"
                  aria-invalid={!!errors.message}
                  aria-describedby="svc-message-error"
                  className={`resize-none rounded-xl border bg-muted px-4 py-3 text-base text-foreground placeholder:text-muted-foreground outline-none transition-colors disabled:opacity-60 dark:bg-white/[0.04] ${errors.message ? "border-destructive focus:border-destructive" : "border-transparent focus:border-foreground/30"}`}
                />
                <p id="svc-message-error" role="alert" aria-live="polite" className="mt-1.5 min-h-[1.25rem] text-xs text-destructive">
                  {errors.message ?? ""}
                </p>

              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-foreground text-base font-semibold text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                {loading ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right: Get in touch */}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Get in touch</h3>
            <div className="mt-6 space-y-4">
              <a href="mailto:sales@pixel2tech.com" className="group flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground dark:bg-white/[0.06]">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-base font-semibold text-foreground">Email</div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground">sales@pixel2tech.com</div>
                </div>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=923177475233" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground dark:bg-white/[0.06]">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-base font-semibold text-foreground">WhatsApp</div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground">+92 317 7475233</div>
                </div>
              </a>
            </div>

            <h3 className="mt-10 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Follow us</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {SOCIAL_LINKS.filter((s) => ["Facebook", "X / Twitter", "Instagram", "LinkedIn"].includes(s.name)).map((s) => {
                const Icon = s.Icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-foreground transition hover:bg-muted dark:bg-white/[0.02] dark:hover:bg-white/[0.06]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl bg-muted p-6 dark:bg-white/[0.04] sm:p-8">
              <h4 className="text-xl font-semibold text-foreground">Business Hours</h4>
              <dl className="mt-5 space-y-3 text-[15px]">
                <div className="flex items-center justify-between">
                  <dt className="text-foreground">Monday – Friday</dt>
                  <dd className="text-muted-foreground">9:00 AM – 6:00 PM</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-foreground">Saturday</dt>
                  <dd className="text-muted-foreground">10:00 AM – 4:00 PM</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-foreground">Sunday</dt>
                  <dd className="text-muted-foreground">Closed</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
