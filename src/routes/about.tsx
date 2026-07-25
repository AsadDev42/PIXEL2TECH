import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

import { Play, ChevronDown, Mail, Phone, Sparkles, Layers, Target, TrendingUp, ArrowUpRight } from "lucide-react";
import { FadeIn, Stagger, StaggerItem, HoverLift } from "@/components/motion";
import { useState } from "react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Pixel2Tech" },
      { name: "description", content: "Pixel2Tech is an AI-powered creative agency from Pakistan, serving founders and marketing leaders worldwide." },
      { property: "og:title", content: "About Us — Pixel2Tech" },
      { property: "og:description", content: "Meet the team behind Pixel2Tech." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const team = [
  { name: "Usama Farooq", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=600&auto=format&fit=crop&fm=webp&q=70" },
  { name: "Asad Farooq", role: "Co Founder & Creative Director", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&fm=webp&q=70" },
  { name: "Saad", role: "Creative Video Editor", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&fm=webp&q=70" },
  { name: "Gul E Zahra", role: "Creative Brand Designer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&fm=webp&q=70" },
  { name: "Ahsan Mushtaq", role: "Website Developer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&fm=webp&q=70" },
  { name: "Noman Ahmed", role: "Video Editor", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&fm=webp&q=70" },
];

const reasons = [
  { title: "AI-Powered Execution", desc: "We use AI and automation to reduce manual work, improve efficiency, and accelerate results.", icon: "Sparkles" },
  { title: "Design + Technology", desc: "We combine creative thinking with technical expertise to build impactful digital solutions.", icon: "Layers" },
  { title: "Business-First Approach", desc: "Every solution is designed around business outcomes, not just deliverables.", icon: "Target" },
  { title: "Built for Growth", desc: "From startups to growing companies, we create systems that support long-term scalability.", icon: "TrendingUp" },
];

const faqs = [
  { q: "What makes Pixel2Tech different?", a: "We combine creativity, technology, AI, and business strategy to solve real business challenges. Our focus is on outcomes, not just deliverables." },
  { q: "What services does Pixel2Tech provide?", a: "We offer AI solutions, software development, automation, digital experiences, web platforms, branding, and technology consulting tailored to business needs." },
  { q: "Who do you work with?", a: "We work with startups, founders, SaaS companies, agencies, and growing businesses looking to improve efficiency, customer experience, and scalability." },
  { q: "How long does a project take?", a: "Project timelines depend on scope and complexity. Most projects start with a discovery phase to define requirements, goals, and delivery timelines." },
  { q: "Do you provide AI and automation solutions?", a: "Yes. We help businesses automate workflows, reduce manual work, improve efficiency, and implement AI-powered systems that support growth." },
  { q: "Do you work with international clients?", a: "Yes. We work with businesses across different industries and locations, collaborating through both onsite and remote engagement models." },
  { q: "Can you handle both design and development?", a: "Yes. Our team combines creative design, software development, AI, and automation expertise to deliver complete digital solutions." },
];

function Accordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-border">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between py-5 text-left text-base font-semibold text-foreground sm:text-lg"
            >
              {item.q}
              <ChevronDown
                aria-hidden="true"
                className={`ml-4 h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AboutPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pt-10 pb-14 sm:px-8 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-28">
        <FadeIn>
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
            About Us
          </div>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[56px]">
            AI-Powered Technology Solution for{" "}
            <span className="text-[#2b7fff]">Growth</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            From design and development to AI automation and digital products, we help businesses build smarter systems, improve customer experiences, and scale with confidence.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <FadeIn>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted sm:rounded-3xl">
              <img
                loading="lazy"
                decoding="async"
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&fm=webp&q=70"
                alt="Pixel2Tech team collaborating in a modern office"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                Who We Are
              </div>
              <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[36px]">
                Creativity, Technology & AI Working Together
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                We combine creative thinking, modern design, software development, automation, and AI-powered solutions to help businesses create exceptional digital experiences, streamline operations, improve efficiency, and unlock new opportunities for sustainable growth. Our focus is on building solutions that not only look great but also solve real business challenges and deliver measurable results.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Video Intro */}
      <section className="bg-muted py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <div className="text-center">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                Get to Know Pixel2Tech
              </div>
              <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[36px]">
                Watch our short introduction to understand who we are, how we work, and why brands trust us
              </h2>
            </div>
            <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl bg-background sm:rounded-3xl sm:mt-10">
              <img
                loading="lazy"
                decoding="async"
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&auto=format&fit=crop&fm=webp&q=70"
                alt="Pixel2Tech introduction video thumbnail"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button
                  type="button"
                  aria-label="Play introduction video"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-foreground shadow-lg transition hover:scale-105 sm:h-20 sm:w-20"
                >
                  <Play className="ml-1 h-6 w-6 fill-current sm:h-7 sm:w-7" aria-hidden="true" />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <FadeIn>
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
            Our Creative Team
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
            Creative Thinking. Technical Excellence.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our team combines creativity, technology, and AI to build innovative solutions that help businesses improve customer experiences, streamline operations, overcome complex challenges, and achieve sustainable growth with confidence.
          </p>
        </FadeIn>
        <Stagger className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {team.map((m) => (
            <StaggerItem key={m.name}>
              <HoverLift className="h-full">
                <div className="h-full rounded-2xl border border-border bg-background p-3 transition-colors dark:border-white/10 dark:bg-white/[0.03] sm:p-4">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={m.img}
                      alt={`${m.name} — ${m.role}`}
                      className="h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0"
                    />
                  </div>
                  <div className="mt-3 text-base font-bold text-foreground sm:mt-4 sm:text-lg">{m.name}</div>
                  <div className="text-xs text-muted-foreground sm:text-sm">{m.role}</div>
                </div>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn delay={0.2}>
          <div className="mt-10 text-center sm:mt-12">
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Why Choose */}
      <section className="relative overflow-hidden bg-muted py-16 sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
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
          <Stagger className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => {
              const Icon = { Sparkles, Layers, Target, TrendingUp }[r.icon as "Sparkles"];
              return (
                <StaggerItem key={r.title}>
                  <HoverLift>
                    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_60px_-25px_color-mix(in_oklab,var(--primary)_35%,transparent)] dark:bg-white/[0.03] sm:p-7">
                      <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="flex items-center justify-between">
                        <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>
                        <span className="text-xs font-semibold tabular-nums text-muted-foreground/70">
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


      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-8 sm:mt-10">
            <Accordion />
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-[#0a0d1f] p-8 text-white shadow-[0_30px_80px_-30px_rgba(59,130,246,0.45)] sm:p-12 lg:p-14">
            <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Let's Talk
                </span>
                <h2 className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
                  Ready to Get <span className="text-primary">Started?</span>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                  Contact us today and let's discuss how we can help grow your brand.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
                  <a
                    href="mailto:sales@pixel2tech.com"
                    className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 transition group-hover:bg-primary/30">
                      <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    sales@pixel2tech.com
                  </a>
                  <a
                    href="tel:+923177475233"
                    className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 transition group-hover:bg-primary/30">
                      <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    +92 317 7475233
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0a0d1f] shadow-lg shadow-black/20 transition hover:bg-primary hover:text-white sm:self-auto lg:self-end"
                >
                  Contact Us
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

    </PageShell>
  );
}
