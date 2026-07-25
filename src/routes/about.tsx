import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { SOCIAL_LINKS } from "@/components/social-links";
import { Play, ChevronDown, Mail, Phone } from "lucide-react";
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
        <Stagger className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
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
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} on ${name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground/70 transition hover:text-foreground"
                      >
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
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
      <section className="bg-muted py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
                Why Choose Pixel2Tech
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
                We act like your in house creative department without the high cost.
              </p>
            </div>
          </FadeIn>
          <Stagger className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <StaggerItem key={r.title}>
                <div className="rounded-2xl bg-background p-6 transition hover:shadow-md dark:border dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
                  <h3 className="text-lg font-bold text-foreground sm:text-xl">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{r.desc}</p>
                </div>
              </StaggerItem>
            ))}
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
          <div className="rounded-2xl bg-foreground p-8 text-background sm:rounded-3xl sm:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px]">
                  Ready to Get Started?
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-background/80 sm:text-base">
                  Contact us today and let’s discuss how we can help grow your brand.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:justify-end">
                <a
                  href="mailto:sales@pixel2tech.com"
                  className="inline-flex items-center gap-2 rounded-full border border-background/20 px-5 py-3 text-sm font-medium transition hover:bg-background/10"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  sales@pixel2tech.com
                </a>
                <a
                  href="tel:+923177475233"
                  className="inline-flex items-center gap-2 rounded-full border border-background/20 px-5 py-3 text-sm font-medium transition hover:bg-background/10"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  +92 317 7475233
                </a>
                <Link
                  to="/contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:opacity-90"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </PageShell>
  );
}
