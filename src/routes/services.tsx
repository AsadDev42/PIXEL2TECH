import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Brain,
  Clapperboard,
  Cog,
  FileText,
  Globe,
  Hammer,
  Layers,
  Megaphone,
  MessagesSquare,
  Palette,
  Rocket,
  Search,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { BookCallButton } from "@/components/book-call-button";
import { Faq, faqJsonLd, type FaqItem } from "@/components/faq";
import { SERVICES, SITE, serviceAnchor } from "@/lib/site-config";

const OG_IMAGE =
  "https://pixel2tech.com/__l5e/assets-v1/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg";
const PAGE_URL = `${SITE.url}/services`;
const ORG_REF = { "@id": `${SITE.url}/#organization` };
const TITLE = "Pixel2Tech Services | Branding, Websites, Video & Automation";
const DESCRIPTION =
  "Branding, websites, Shopify and WordPress, custom apps, automation, AI chatbots, SEO, social media and video editing from one Lahore studio, quoted up front.";

type ServiceTitle = (typeof SERVICES)[number];
type ServiceDetail = { Icon: LucideIcon; desc: string; tags: string[] };

/** Keyed by the canonical names in site-config, so every service must be described here. */
const SERVICE_DETAILS: Record<ServiceTitle, ServiceDetail> = {
  "Branding & Design": {
    Icon: Palette,
    desc: "Logo, color palette, typography and brand guidelines, so your business looks consistent everywhere it shows up.",
    tags: ["Logo", "Brand guide", "UI/UX"],
  },
  "Website Development": {
    Icon: Globe,
    desc: "Fast, mobile-ready websites, from a single landing page to a full business site, built to turn visitors into inquiries.",
    tags: ["React", "Next.js", "Custom code"],
  },
  "WordPress & Shopify": {
    Icon: ShoppingBag,
    desc: "WordPress sites and Shopify stores with the theme, plugins, product pages and payment setup done for you.",
    tags: ["WordPress", "Shopify", "WooCommerce"],
  },
  "Custom Platforms & Apps": {
    Icon: Layers,
    desc: "Mobile apps, SaaS products, client portals and dashboards built from scratch around how your business works.",
    tags: ["SaaS", "Mobile app", "Portals"],
  },
  "Automation & CRM": {
    Icon: Cog,
    desc: "Workflow automation, CRM setup and integrations that take repetitive work, like copying leads between tools, off your team's plate.",
    tags: ["n8n", "Make", "Zapier", "Custom CRM"],
  },
  "AI Solutions": {
    Icon: Brain,
    desc: "AI chatbots, voice agents and RAG systems that answer common customer questions and search your own documents.",
    tags: ["Chatbots", "RAG", "Voice agents"],
  },
  "SEO & Search Growth": {
    Icon: Search,
    desc: "On-page SEO, technical audits and keyword strategy to help the right people find your business on Google.",
    tags: ["On-page SEO", "Technical SEO", "Local SEO"],
  },
  "Social Media & Email": {
    Icon: Megaphone,
    desc: "Content, ad campaigns, email sequences and newsletters across the major platforms, handled end to end.",
    tags: ["Instagram", "Facebook ads", "Email"],
  },
  "Video Editing & Ads": {
    Icon: Clapperboard,
    desc: "Reels, brand videos, YouTube content and paid ad creatives, edited for the platform they'll run on.",
    tags: ["Reels", "YouTube", "Paid ads"],
  },
};

const SERVICE_LIST = SERVICES.map((title) => ({
  title,
  id: serviceAnchor(title),
  ...SERVICE_DETAILS[title],
}));

const PROCESS: { title: string; desc: string; Icon: LucideIcon }[] = [
  {
    title: "Discovery call",
    desc: "A 30-minute call about your goals, audience and deadline. We ask questions before we recommend anything.",
    Icon: MessagesSquare,
  },
  {
    title: "Scope and quote",
    desc: "We send a proposal with the scope and timeline, and start once you approve it.",
    Icon: FileText,
  },
  {
    title: "Design and build",
    desc: "Our in-house team designs and builds the work, and you review it before anything goes live.",
    Icon: Hammer,
  },
  {
    title: "Launch and improve",
    desc: "We launch, then keep improving it against what matters to you, such as leads, sales or hours saved.",
    Icon: Rocket,
  },
];

/** Scope, pricing and process only. General buyer questions live on Home, team questions on About. */
const SERVICE_FAQS: FaqItem[] = [
  {
    q: "Can I hire you for just one service?",
    a: "Yes. You can hire us for a single job, such as a logo, a Shopify store or a set of ad edits, and add other services later if you need them.",
  },
  {
    q: "Do you sell fixed packages or custom scopes?",
    a: "Most projects start from a fixed package we agree on up front. We adjust what's in it to your goals rather than forcing a one-size-fits-all bundle.",
  },
  {
    q: "Which platforms and tools do you use?",
    a: "Websites in React, Next.js or custom code; stores on Shopify and WordPress with WooCommerce; automations in n8n, Make or Zapier. We recommend one based on your budget and who will maintain it.",
  },
  {
    q: "What industries do you work with?",
    a: "Startups, SaaS companies, e-commerce brands, agencies, service businesses and other growing companies.",
  },
];

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Pixel2Tech services",
          itemListElement: SERVICE_LIST.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.desc,
              url: `${PAGE_URL}#${s.id}`,
              areaServed: "Worldwide",
              provider: ORG_REF,
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
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
            { "@type": "ListItem", position: 2, name: "Services", item: PAGE_URL },
          ],
        }),
      },
      faqJsonLd(SERVICE_FAQS),
    ],
  }),
});

const EYEBROW = "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground";
const H2 =
  "text-2xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl";
const ICON_TILE =
  "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary";
const CARD = "rounded-2xl border border-border bg-card p-6 text-card-foreground sm:p-8";

function ServicesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section aria-labelledby="services-title" className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className={EYEBROW}>Services</p>
            <h1
              id="services-title"
              className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl xl:text-[56px]"
            >
              Design, web, video and automation,{" "}
              <span className="text-primary">quoted up front</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              {SERVICES.length} services, all handled by our in-house team in Lahore. Hire us for a
              single job or combine a few; every project starts with an agreed scope and timeline.
            </p>
          </div>

          <nav aria-label="Jump to a service" className="mx-auto mt-10 max-w-4xl">
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {SERVICE_LIST.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-border bg-background px-4 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Services. Card ids come from serviceAnchor(): the footer and case studies link to them. */}
      <section aria-labelledby="services-list-title" className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="max-w-2xl">
            <h2 id="services-list-title" className={H2}>
              What each service covers
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              The tags show typical deliverables and the tools we use most.
            </p>
          </div>
          <ul className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {SERVICE_LIST.map((s) => (
              <li
                key={s.id}
                id={s.id}
                className={`flex min-w-0 scroll-mt-28 flex-col target:border-primary target:ring-2 target:ring-primary/30 ${CARD}`}
              >
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className={ICON_TILE}>
                    <s.Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-lg font-bold leading-snug">{s.title}</h3>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul
                  aria-label="Typical deliverables and tools"
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border bg-muted px-3 py-1 text-xs text-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="services-process-title" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="max-w-2xl">
            <p className={EYEBROW}>Process</p>
            <h2 id="services-process-title" className={`mt-4 ${H2}`}>
              How a project runs
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              The same four steps, whichever service you pick.
            </p>
          </div>
          <ol className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS.map((step, i) => (
              <li key={step.title} className={`flex min-w-0 flex-col ${CARD}`}>
                <div className="flex items-start justify-between gap-4">
                  <span aria-hidden="true" className={ICON_TILE}>
                    <step.Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-sm font-semibold tabular-nums text-muted-foreground"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold leading-snug">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="services-faq-title" className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <h2 id="services-faq-title" className={`text-center ${H2}`}>
            Scope, pricing and process
          </h2>
          <Faq items={SERVICE_FAQS} className="mt-8 sm:mt-10" />
        </div>
      </section>

      {/* Closing CTA */}
      <section aria-labelledby="services-cta-title" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12 sm:py-16">
            <h2
              id="services-cta-title"
              className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl"
            >
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-balance sm:text-base">
              Tell us what you&apos;re trying to get done and we&apos;ll suggest where to start. We
              reply within one business day.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <BookCallButton
                source="services_cta"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-background px-6 text-sm font-semibold text-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              />
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary-foreground/60 px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Send a project brief
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
