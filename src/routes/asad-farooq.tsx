import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { FadeIn, Stagger, StaggerItem, HoverLift } from "@/components/motion";
import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Palette,
  Clapperboard,
  Brain,
  Megaphone,
  Layers,
  Award,
  Quote,
} from "lucide-react";
import teamAsad from "@/assets/team-asad.webp.asset.json";
import founderPortrait from "@/assets/opt-founder-portrait-1080.webp.asset.json";

const CANONICAL = "https://pixel2tech.com/asad-farooq";
const OG_IMAGE = `https://pixel2tech.com${founderPortrait.url}`;
const TITLE = "Asad Farooq | Co-Founder & Creative Director | Pixel2Tech";
const DESCRIPTION =
  "Asad Farooq is Co-Founder & Creative Director at Pixel2Tech — 5+ years leading branding, design systems, video and AI-driven creative for 100+ founders and B2B, SaaS and e-commerce brands.";

export const Route = createFileRoute("/asad-farooq")({
  component: AsadPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": `${CANONICAL}#person`,
              name: "Asad Farooq",
              url: CANONICAL,
              image: OG_IMAGE,
              jobTitle: "Co-Founder & Creative Director",
              description: DESCRIPTION,
              email: "mailto:itxasad0011@gmail.com",
              telephone: "+92 317 7475233",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lahore",
                addressRegion: "Punjab",
                addressCountry: "PK",
              },
              worksFor: { "@type": "Organization", name: "Pixel2Tech", url: "https://pixel2tech.com" },
              alumniOf: [
                { "@type": "CollegeOrUniversity", name: "Government College University, Faisalabad" },
              ],
              knowsAbout: [
                "Creative Direction",
                "Brand Identity",
                "UI Design",
                "Motion Graphics",
                "Video Editing",
                "Performance Creative",
                "AI Creative Systems",
                "Marketing Strategy",
              ],
              sameAs: ["https://www.linkedin.com/in/designerasad", "https://pixel2tech.com"],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://pixel2tech.com/" },
                { "@type": "ListItem", position: 2, name: "About", item: "https://pixel2tech.com/about" },
                { "@type": "ListItem", position: 3, name: "Asad Farooq", item: CANONICAL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
});

const stats = [
  { value: "5+", label: "Years in creative direction" },
  { value: "100+", label: "Founders & brands served" },
  { value: "€1M+", label: "Revenue influenced by creative" },
  { value: "12+", label: "Industries worked across" },
];

const timeline = [
  {
    role: "Co-Founder & Creative Director",
    org: "Pixel2Tech",
    period: "Aug 2024 — Present",
    place: "Lahore, Pakistan",
    desc: "Leading creative direction across branding, web, social and video for global clients. Building the creative systems and quality standards the whole studio runs on.",
  },
  {
    role: "Lead Designer & Marketing Strategist",
    org: "VA Hub PRO",
    period: "Sep 2024 — Present",
    place: "Alberta, Canada (Remote)",
    desc: "Campaign creative direction, scalable content and design systems, aligning creative output with marketing and revenue goals.",
  },
  {
    role: "Creative Director",
    org: "Ethisol",
    period: "May 2023 — Present",
    place: "Lahore, Pakistan",
    desc: "Creative direction and brand strategy, managing design teams and keeping visual quality consistent across every touchpoint.",
  },
  {
    role: "Creative Director",
    org: "Niostgroup International",
    period: "Sep 2025 — Jan 2026",
    place: "Brussels, Belgium",
    desc: "Creative strategy, branding and visual execution across digital platforms for an international group.",
  },
  {
    role: "Lead Designer",
    org: "Nimis Tech",
    period: "Sep 2025 — Feb 2026",
    place: "Berlin, Germany",
    desc: "Visual design, branding and creative execution for digital products and marketing assets.",
  },
  {
    role: "Creative Director",
    org: "SwishTag (Shopify Plus Agency)",
    period: "Nov 2024 — May 2025",
    place: "Lahore, Pakistan",
    desc: "Led branding and conversion-focused creative for Shopify Plus brands; previously Lead Motion & Graphic Designer driving high-performing ad creative.",
  },
  {
    role: "Senior Creative Designer",
    org: "PixelForge",
    period: "Jul 2024 — Jan 2026",
    place: "Lahore, Pakistan",
    desc: "Advanced visual design, branding systems and high-quality creatives for digital campaigns.",
  },
  {
    role: "Graphic Designer",
    org: "ibex. Pakistan",
    period: "Jun 2022 — Apr 2023",
    place: "Lahore, Pakistan",
    desc: "Designed digital and marketing assets at enterprise scale while maintaining strict brand consistency.",
  },
];

const expertise = [
  {
    icon: Palette,
    title: "Brand Identity & Design Systems",
    desc: "Logos, wordmarks, colour, typography and component libraries that stay consistent as a brand scales.",
  },
  {
    icon: Megaphone,
    title: "Performance Creative",
    desc: "Meta, TikTok and Google ad creative built around hooks, testing and measurable conversion outcomes.",
  },
  {
    icon: Clapperboard,
    title: "Video & Motion",
    desc: "Short-form reels, long-form edits, podcast cuts, motion graphics, colour grading and sound design.",
  },
  {
    icon: Layers,
    title: "Social & Content Systems",
    desc: "Content pillars, monthly calendars and repeatable templates so brands ship consistently, not sporadically.",
  },
  {
    icon: Brain,
    title: "AI Creative Workflows",
    desc: "AI image, video and copy tooling wired into real production pipelines to compress turnaround times.",
  },
  {
    icon: Sparkles,
    title: "Creative Direction & Strategy",
    desc: "Positioning, messaging and art direction that ties every asset back to a clear business objective.",
  },
];

const skills = [
  "Creative Direction",
  "Brand Identity",
  "UI Design",
  "Art Direction",
  "Motion Graphics",
  "Video Editing",
  "Short-Form Content",
  "Ad Creative",
  "Copywriting",
  "Marketing Strategy",
  "Design Systems",
  "Business Strategy",
  "Team Leadership",
  "Startup Development",
];

const tools = [
  "Figma",
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Premiere Pro",
  "DaVinci Resolve",
  "CapCut",
  "Midjourney",
  "Runway ML",
  "Higgsfield AI",
  "Magnific AI",
  "Claude AI",
  "Artlist",
  "ClickUp",
];

const industries = [
  "SaaS & Software",
  "E-Commerce & DTC",
  "Agencies & Studios",
  "Beauty & Cosmetics",
  "Health & Wellness",
  "Real Estate",
  "Education",
  "Finance",
  "Hospitality",
  "Professional Services",
];

const caseStudies = [
  {
    title: "MADLUVV — social media & Meta ads",
    result: "Full social handling plus Meta, LinkedIn and TikTok ad creative for a beauty brand — a repeatable creative system instead of one-off posts.",
    href: "/portfolio/madluvv-social-media-meta-ads",
  },
  {
    title: "Shopify Plus brand creative",
    result: "Conversion-led ad creative and brand consistency across a portfolio of e-commerce brands as Creative Director at SwishTag.",
    href: "/portfolio",
  },
  {
    title: "B2B agency creative systems",
    result: "Design systems, pitch collateral and campaign creative that helped service businesses look enterprise-grade and win larger accounts.",
    href: "/portfolio",
  },
];

const awards = [
  "Adobe Firefly Essential Training (2024)",
  "Figma Fundamentals",
  "Video Editing Techniques for Impactful Content",
  "Conversations in Video Editing",
  "Entrepreneurship Foundations",
  "Graphics Design — Digi Skills (LMS)",
];

const testimonials = [
  {
    quote:
      "Asad does not just deliver files — he questions the brief, sharpens the positioning, and then designs. Our brand finally looks like the company we want to be.",
    author: "Founder, B2B SaaS",
  },
  {
    quote:
      "Our ad creative went from generic to genuinely stop-scroll. The biggest difference was having one person owning direction across every channel.",
    author: "Marketing Lead, E-Commerce Brand",
  },
  {
    quote:
      "Fast, senior, and calm under deadlines. He built a system our in-house team can keep running without him.",
    author: "Operations Director, Agency Client",
  },
];

const faqs = [
  {
    q: "What does Asad Farooq do at Pixel2Tech?",
    a: "Asad is Co-Founder and Creative Director at Pixel2Tech. He owns creative direction across branding, web design, social content, video and ad creative, and sets the quality standards the studio's designers and editors work to.",
  },
  {
    q: "How much experience does Asad Farooq have?",
    a: "Over 5 years across creative direction, graphic design, motion and video, working with 100+ founders and brands in Pakistan, the Gulf, Europe and North America.",
  },
  {
    q: "What kind of clients does he work with?",
    a: "Mostly B2B and SaaS companies, e-commerce and DTC brands, agencies, and funded or bootstrapped startups that need senior creative direction without hiring a full in-house team.",
  },
  {
    q: "Does he work with international clients remotely?",
    a: "Yes. He has led creative for teams in Canada, Germany, Belgium, the United States and across the Gulf, working remotely with async handoffs and scheduled review calls.",
  },
  {
    q: "How do you start a project with Asad and the Pixel2Tech team?",
    a: "Start with a short discovery call. You share goals, current creative and timelines; Pixel2Tech comes back with scope, approach and a fixed proposal before any work begins.",
  },
];

function Accordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-border">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-foreground sm:text-lg"
            >
              {item.q}
              <ChevronDown
                aria-hidden="true"
                className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div className={`grid transition-all ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AsadPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-28">
        <nav aria-label="Breadcrumb" className="mb-8 text-xs text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li aria-hidden>/</li>
            <li className="text-foreground">Asad Farooq</li>
          </ol>
        </nav>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <FadeIn>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Co-Founder & Creative Director
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Asad Farooq
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                Creative Director, designer and video editor building creative systems that help B2B, SaaS
                and e-commerce brands grow. 5+ years, 100+ founders, and creative work that is measured by
                business outcomes — not just how it looks.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" aria-hidden />Lahore, Pakistan</span>
                <span className="inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5" aria-hidden />Working globally, remote-first</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  Work with Pixel2Tech
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-muted"
                >
                  View featured work
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-muted">
              <img
                src={teamAsad.url}
                alt="Asad Farooq, Co-Founder and Creative Director at Pixel2Tech"
                width={800}
                height={1000}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>

        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:mt-16 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="rounded-2xl border border-border bg-background p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Biography + journey */}
      <section aria-labelledby="bio-title" className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <FadeIn>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Biography</div>
                <h2 id="bio-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Creative that is built to perform
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                <p>
                  Most businesses publish content every day, but very few build creative systems that actually
                  attract clients and compound over time. That gap is the work Asad has spent his career closing.
                </p>
                <p>
                  He started in 2021 as a graphic designer in Lahore, moved into motion and video, and then into
                  full creative direction — leading teams at agencies serving Shopify Plus brands, B2B software
                  companies and international groups across Canada, Germany and Belgium. In 2024 he co-founded
                  Pixel2Tech to bring design, video, development and AI under one senior team.
                </p>
                <p>
                  His approach pairs creative craft with marketing strategy: positioning first, then messaging,
                  then design. Every asset — a logo, a landing page, a 15-second reel — is judged on whether it
                  moves a business metric, not only on whether it looks good in a portfolio.
                </p>
                <p>
                  Today he leads creative direction at Pixel2Tech, mentors the studio's designers and editors,
                  and works directly with founders who need senior creative thinking without building an
                  in-house team from scratch.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section aria-labelledby="expertise-title" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Creative Direction Expertise</div>
              <h2 id="expertise-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                What Asad leads on
              </h2>
            </div>
          </FadeIn>
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((e) => {
              const Icon = e.icon;
              return (
                <StaggerItem key={e.title}>
                  <HoverLift>
                    <div className="h-full rounded-2xl border border-border bg-background p-6 dark:border-white/10 dark:bg-white/[0.03]">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h3 className="mt-4 text-base font-bold tracking-tight text-foreground">{e.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                    </div>
                  </HoverLift>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Experience timeline */}
      <section aria-labelledby="experience-title" className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Experience</div>
              <h2 id="experience-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                A timeline of the work
              </h2>
            </div>
          </FadeIn>
          <div className="mt-10 border-l border-border pl-6 sm:pl-8">
            {timeline.map((t) => (
              <FadeIn key={`${t.org}-${t.period}`}>
                <div className="relative pb-9 last:pb-0">
                  <span aria-hidden className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary sm:-left-[39px]" />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-base font-bold tracking-tight text-foreground">{t.role}</h3>
                    <span className="text-sm font-medium text-primary">{t.org}</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{t.period} · {t.place}</div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills + tools + industries */}
      <section aria-labelledby="skills-title" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <FadeIn>
            <h2 id="skills-title" className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Skills, tech stack & industries
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {[
              { heading: "Skills", items: skills },
              { heading: "Tech stack & tools", items: tools },
              { heading: "Industries served", items: industries },
            ].map((group) => (
              <FadeIn key={group.heading}>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{group.heading}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground dark:border-white/10 dark:bg-white/[0.03]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section aria-labelledby="cases-title" className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Featured work</div>
              <h2 id="cases-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Selected case studies
              </h2>
            </div>
          </FadeIn>
          <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
            {caseStudies.map((c) => (
              <StaggerItem key={c.title}>
                <Link
                  to={c.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <h3 className="text-base font-bold tracking-tight text-foreground">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.result}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                    View project
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Leadership + awards */}
      <section aria-labelledby="leadership-title" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Pixel2Tech leadership</div>
                <h2 id="leadership-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Building the studio, not just the deliverables
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  <p>
                    As Co-Founder, Asad shapes how Pixel2Tech works: how briefs are written, how creative is
                    reviewed, and how design, video and development stay aligned on a single direction.
                  </p>
                  <p>
                    He runs creative reviews with the design and editing team, mentors junior designers into
                    senior craft, and stays hands-on with the most demanding client work — brand launches,
                    campaign systems and high-stakes ad creative.
                  </p>
                </div>
                <Link
                  to="/about"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:underline"
                >
                  Meet the full team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-border bg-background p-6 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  <Award className="h-4 w-4" aria-hidden /> Certifications
                </div>
                <ul className="mt-5 space-y-3">
                  {awards.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Education:</span> Associate Degree,
                  Information Technology — Government College University, Faisalabad (2021–2023).
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="testimonials-title" className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <FadeIn>
            <h2 id="testimonials-title" className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              What clients say
            </h2>
          </FadeIn>
          <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.author}>
                <figure className="h-full rounded-2xl border border-border bg-background p-6 dark:border-white/10 dark:bg-white/[0.03]">
                  <Quote className="h-5 w-5 text-primary" aria-hidden />
                  <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.quote}</blockquote>
                  <figcaption className="mt-4 text-xs font-semibold text-foreground">{t.author}</figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <FadeIn>
            <h2 id="faq-title" className="mb-8 text-center text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Frequently asked questions
            </h2>
          </FadeIn>
          <Accordion />
        </div>
      </section>

      {/* Contact / CTA */}
      <section aria-labelledby="contact-title" className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <FadeIn>
            <div className="rounded-3xl border border-border bg-background p-8 text-center dark:border-white/10 dark:bg-white/[0.03] sm:p-12">
              <h2 id="contact-title" className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Need senior creative direction on your next project?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                Tell Asad and the Pixel2Tech team what you are building. You will get a clear scope, a realistic
                timeline and a fixed proposal — before any work starts.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  Hire Pixel2Tech
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
                <a
                  href="mailto:sales@pixel2tech.com"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-muted"
                >
                  <Mail className="h-4 w-4" aria-hidden /> sales@pixel2tech.com
                </a>
                <a
                  href="tel:+923177475233"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-muted"
                >
                  <Phone className="h-4 w-4" aria-hidden /> +92 317 7475233
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageShell>
  );
}
