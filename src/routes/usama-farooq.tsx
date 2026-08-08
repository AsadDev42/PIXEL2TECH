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
  Target,
  TrendingUp,
  Handshake,
  Search,
  Users,
  LineChart,
  Award,
  Quote,
} from "lucide-react";
import teamUsama from "@/assets/team-usama.webp.asset.json";

const CANONICAL = "https://pixel2tech.com/usama-farooq";
const OG_IMAGE = `https://pixel2tech.com${teamUsama.url}`;
const TITLE = "Usama Farooq | CEO & Founder | Pixel2Tech";
const DESCRIPTION =
  "Usama Farooq is CEO & Founder of Pixel2Tech — a growth strategist helping B2B, SaaS and e-commerce brands generate leads and revenue with AI, SEO and paid ads. €1M+ revenue driven, 710% growth.";

const stats = [
  { value: "€1M+", label: "Client revenue driven" },
  { value: "710%", label: "Peak growth delivered" },
  { value: "$300K+", label: "New business closed in year one" },
  { value: "6+", label: "Years in growth & business development" },
];

const timeline = [
  {
    role: "CEO & Founder",
    org: "Pixel2Tech",
    period: "Aug 2024 — Present",
    place: "Lahore, Pakistan",
    desc: "Leads company strategy, client partnerships and growth. Built Pixel2Tech into a full-service creative and technology studio serving founders across the US, Europe and the Gulf.",
  },
  {
    role: "Business & Project Manager",
    org: "Megasight",
    period: "Jan 2026 — Present",
    place: "Lahore, Pakistan",
    desc: "Owns lead nurturing through to close, scaled the Upwork profile from $1K to $100K in under a year, and coordinates cross-functional delivery teams.",
  },
  {
    role: "Business & Project Manager",
    org: "Ethisol",
    period: "Jun 2023 — Present",
    place: "United States (Remote)",
    desc: "Closed $300K+ in new business in the first year and secured a Fortune 500 partnership. Owns the full sales cycle from prospecting to close, plus post-sale delivery management.",
  },
  {
    role: "Head of New Business",
    org: "Proximate Solutions",
    period: "Jan 2025 — Mar 2026",
    place: "Lahore, Pakistan",
    desc: "Built and led the new business team, set KPIs across sales and outreach, and built the outbound email infrastructure from scratch using Instantly and SalesHandy.",
  },
  {
    role: "Business Development Manager",
    org: "Geeky Bugs",
    period: "Mar 2024 — Jan 2025",
    place: "Lahore, Pakistan",
    desc: "Drove new client acquisition for a software development company, generating qualified leads across international markets.",
  },
  {
    role: "Digital Marketing Expert",
    org: "Mauka",
    period: "Dec 2023 — Nov 2024",
    place: "Lahore, Pakistan",
    desc: "Owned end-to-end SEO for Mauka.com.pk — on-page, off-page and technical — alongside Meta and Google ads, content publishing and link building.",
  },
  {
    role: "Growth Manager",
    org: "Aquila360",
    period: "Feb 2023 — Nov 2024",
    place: "Lahore, Pakistan",
    desc: "Managed and coached a growth team, ran recruitment and onboarding, and executed campaigns across HubSpot, Apollo, Sales Navigator and Mailchimp.",
  },
  {
    role: "Business Analyst",
    org: "Programmers Force",
    period: "Jun 2022 — Jan 2023",
    place: "Lahore, Pakistan",
    desc: "Market research, prospect qualification and CRM-driven pipeline management across multiple outreach platforms.",
  },
  {
    role: "Lecturer in Computer Science",
    org: "Government Degree College Rajana",
    period: "Nov 2020 — Apr 2021",
    place: "Toba Tek Singh, Pakistan",
    desc: "Taught BSc and FSc Computer Science students, designed course material and ran practical sessions.",
  },
];

const expertise = [
  {
    icon: Target,
    title: "Go-to-Market Strategy",
    desc: "Positioning, offer design and channel selection so a service or product reaches the right buyers with a clear reason to say yes.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation & Outbound",
    desc: "Cold email infrastructure, LinkedIn prospecting and marketplace bidding built into a predictable, measurable pipeline.",
  },
  {
    icon: Search,
    title: "SEO & Organic Growth",
    desc: "Technical, on-page and off-page SEO paired with content and link building that compounds into long-term inbound demand.",
  },
  {
    icon: LineChart,
    title: "Paid Media & Performance",
    desc: "Meta and Google campaigns run against pipeline and revenue targets, not vanity metrics.",
  },
  {
    icon: Handshake,
    title: "Client Partnerships",
    desc: "Enterprise conversations, proposals and long-term account relationships — from first call to renewal.",
  },
  {
    icon: Users,
    title: "Team Building & Leadership",
    desc: "Hiring, onboarding, KPI design and coaching for sales, outreach and delivery teams.",
  },
];

const skills = [
  "Business Strategy",
  "Go-to-Market Strategy",
  "Brand Development",
  "Lead Generation",
  "Appointment Setting",
  "Sales Management",
  "SEO Strategy",
  "Paid Advertising",
  "CRM & Pipeline Management",
  "Email Marketing",
  "Team Leadership",
  "Client Relationship Management",
  "Market Research",
  "AI-Driven Growth",
];

const tools = [
  "HubSpot",
  "Apollo",
  "LinkedIn Sales Navigator",
  "Instantly",
  "SalesHandy",
  "Mailchimp",
  "Semrush",
  "Google Analytics",
  "Google Search Console",
  "Meta Ads Manager",
  "Google Ads",
  "Upwork",
  "ClickUp",
  "Notion",
];

const industries = [
  "SaaS & Software",
  "E-Commerce & DTC",
  "Agencies & Studios",
  "Technology Services",
  "Healthcare",
  "Finance",
  "Education",
  "Real Estate",
  "Manufacturing",
  "Professional Services",
];

const caseStudies: { title: string; result: string }[] = [
  {
    title: "$1K → $100K marketplace growth",
    result: "Rebuilt profile positioning, proposals and response workflows to scale an Upwork account from $1K to $100K in under a year.",
  },
  {
    title: "$300K+ new business in year one",
    result: "Owned the full sales cycle end to end for a US software client and secured a strategic Fortune 500 partnership.",
  },
  {
    title: "SEO-led inbound for Mauka",
    result: "Technical, on-page and off-page SEO plus content and link building to grow organic visibility and qualified inbound leads.",
  },
];

const awards = [
  "Fundamentals of Digital Marketing — Google",
  "Bachelor of Science, Computational Science — GCU Faisalabad (2016–2020)",
];

const testimonials = [
  {
    quote:
      "Usama treats growth like an engineering problem. He mapped our pipeline, fixed the leaks and had qualified calls booked within weeks.",
    author: "Founder, B2B Software Company",
  },
  {
    quote:
      "He is the rare business leader who understands both the numbers and the creative. Our proposals finally matched the quality of our work.",
    author: "Director, E-Commerce Brand",
  },
  {
    quote:
      "Clear communication, realistic timelines and no overselling. That is why we kept working with his team.",
    author: "Operations Lead, US Client",
  },
];

const faqs = [
  {
    q: "Who is Usama Farooq?",
    a: "Usama Farooq is the CEO and Founder of Pixel2Tech, a full-service creative and technology studio. He is a growth strategist specialising in lead generation, go-to-market strategy, SEO and paid media for B2B, SaaS and e-commerce brands.",
  },
  {
    q: "What does the CEO of Pixel2Tech do day to day?",
    a: "He sets company strategy, leads client partnerships and new business, and makes sure every engagement is scoped around measurable business outcomes rather than deliverables alone.",
  },
  {
    q: "What results has he delivered?",
    a: "Over €1M in client revenue influenced, 710% growth on a key account, $300K+ closed in new business within a single year, and an Upwork profile scaled from $1K to $100K in under twelve months.",
  },
  {
    q: "What kind of businesses does he work with?",
    a: "Mostly B2B and SaaS companies, e-commerce and DTC brands, agencies and growing service businesses across the United States, Europe, the Gulf and Pakistan.",
  },
  {
    q: "How do you start a project with Usama and the Pixel2Tech team?",
    a: "Book a short discovery call. You share your goals, current traction and timelines, and Pixel2Tech returns a clear scope, approach and fixed proposal before any work begins.",
  },
];

export const Route = createFileRoute("/usama-farooq")({
  component: UsamaPage,
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
              name: "Usama Farooq",
              url: CANONICAL,
              image: OG_IMAGE,
              jobTitle: "CEO & Founder",
              description: DESCRIPTION,
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
                "Business Strategy",
                "Go-to-Market Strategy",
                "Lead Generation",
                "SEO",
                "Paid Advertising",
                "Brand Development",
                "Sales Management",
                "AI-Driven Growth",
              ],
              sameAs: ["https://www.linkedin.com/in/osama-farooq-manj/", "https://pixel2tech.com"],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://pixel2tech.com/" },
                { "@type": "ListItem", position: 2, name: "About", item: "https://pixel2tech.com/about" },
                { "@type": "ListItem", position: 3, name: "Usama Farooq", item: CANONICAL },
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

function UsamaPage() {
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
            <li className="text-foreground">Usama Farooq</li>
          </ol>
        </nav>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <FadeIn>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> CEO &amp; Founder
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Usama Farooq
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                Growth strategist and founder helping businesses generate leads and revenue with AI, SEO and
                paid ads. €1M+ in client revenue driven, 710% growth delivered, and a track record of turning
                creative work into measurable pipeline.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" aria-hidden />Lahore, Pakistan</span>
                <span className="inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5" aria-hidden />Serving clients in the US, EU &amp; Gulf</span>
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
                src={teamUsama.url}
                alt="Usama Farooq, CEO and Founder of Pixel2Tech"
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

      {/* Biography */}
      <section aria-labelledby="bio-title" className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <FadeIn>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Biography</div>
                <h2 id="bio-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Growth is a system, not a campaign
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                <p>
                  Most businesses do not have a marketing problem — they have a system problem. Leads arrive
                  inconsistently, follow-up is manual, and nobody can say which activity produced revenue. Fixing
                  that gap is the work Usama has built his career on.
                </p>
                <p>
                  He started as a Computer Science lecturer, moved into business analysis and outbound at
                  Programmers Force, then into growth leadership at Aquila360 and Ethisol — where he closed
                  $300K+ in new business in his first year and secured a Fortune 500 partnership. Along the way
                  he scaled a marketplace profile from $1K to $100K in under a year and built complete outbound
                  email infrastructures from scratch.
                </p>
                <p>
                  In 2024 he founded Pixel2Tech to bring strategy, design, development and AI under one senior
                  team, so clients no longer have to stitch together three vendors to launch a single idea.
                </p>
                <p>
                  As CEO he owns strategy, partnerships and growth — and stays personally involved in every
                  major client relationship, from the first discovery call to long-term account planning.
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
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Growth &amp; Strategy Expertise</div>
              <h2 id="expertise-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                What Usama leads on
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

      {/* Skills */}
      <section aria-labelledby="skills-title" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <FadeIn>
            <h2 id="skills-title" className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Skills, stack &amp; industries
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {[
              { heading: "Skills", items: skills },
              { heading: "Growth stack & tools", items: tools },
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
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Highlights</div>
              <h2 id="cases-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Results that moved the number
              </h2>
            </div>
          </FadeIn>
          <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
            {caseStudies.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full rounded-2xl border border-border bg-background p-6 dark:border-white/10 dark:bg-white/[0.03]">
                  <h3 className="text-base font-bold tracking-tight text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.result}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Leadership + certifications */}
      <section aria-labelledby="leadership-title" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Pixel2Tech leadership</div>
                <h2 id="leadership-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                  Running a studio built around outcomes
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  <p>
                    As CEO, Usama sets the standard for how Pixel2Tech scopes work: clear objectives, honest
                    timelines, fixed proposals, and no work that cannot be tied back to a business result.
                  </p>
                  <p>
                    He leads client partnerships personally, coaches the sales and outreach team on KPIs, and
                    works alongside the creative and engineering leads so strategy, design and delivery stay
                    pointed at the same goal.
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
                  <Award className="h-4 w-4" aria-hidden /> Certifications &amp; education
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
                  <span className="font-semibold text-foreground">Languages:</span> Urdu (native), English
                  (full professional).
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

      {/* CTA */}
      <section aria-labelledby="contact-title" className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <FadeIn>
            <div className="rounded-3xl border border-border bg-background p-8 text-center dark:border-white/10 dark:bg-white/[0.03] sm:p-12">
              <h2 id="contact-title" className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Ready to build a growth system that actually compounds?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                Tell Usama and the Pixel2Tech team where you are today. You will get a clear scope, a realistic
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
