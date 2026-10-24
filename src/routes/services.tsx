import { ClosingCta } from "@/components/closing-cta";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
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
import { ServiceVisual } from "@/components/service-visual";
import { SERVICE_PRESENTATION } from "@/lib/service-presentation";

const OG_IMAGE = "https://pixel2tech.com/media/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg";
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
    desc: "We check the agreed delivery, launch and hand over the work. Ongoing improvements are planned separately where they are part of your scope.",
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
    a: "We agree a scope around your goal, existing assets and the work your team needs. The proposal identifies the deliverables, review points and timeline. You can start with one focused service and discuss additional work separately.",
  },
  {
    q: "Which platforms and tools do you use?",
    a: "Websites in React, Next.js or custom code; stores on Shopify and WordPress with WooCommerce; automations in n8n, Make or Zapier. We recommend one based on your budget and who will maintain it.",
  },
  {
    q: "What industries do you work with?",
    a: "Startups, SaaS companies, e-commerce brands, agencies, service businesses and other growing companies.",
  },
  {
    q: "What should I send with a project enquiry?",
    a: "Share your current website or creative, the audience you want to reach, what needs to change and any deadline. Include existing brand files or footage where relevant. If the brief is still taking shape, tell us the problem you are trying to solve and we can discuss a useful first phase.",
  },
  {
    q: "Can you work with our agency or existing team?",
    a: "Yes. We can deliver an agreed part of a project, such as development from approved designs, campaign creative or video editing. We define the review process, communication owner and handover requirements before production. Agency partner work is identified on the relevant portfolio pages.",
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

function ServicesHeroArtwork() {
  const examples = [
    { title: "WordPress & Shopify", label: "Web & commerce", wide: true },
    { title: "Branding & Design", label: "Brand identity", wide: false },
    { title: "Video Editing & Ads", label: "Video & motion", wide: false },
  ] as const;
  return (
    <div
      aria-label="Selected work across our services"
      className="grid grid-cols-2 gap-3 rounded-[2rem] border border-border bg-muted/50 p-3 sm:p-4"
    >
      {examples.map(({ title, label, wide }) => {
        const visual = SERVICE_PRESENTATION[title];
        return (
          <Link
            key={title}
            to="/portfolio/$slug"
            params={{ slug: visual.project! }}
            aria-label={`Explore ${visual.caption}`}
            className={`group overflow-hidden rounded-2xl border border-border bg-background transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${wide ? "col-span-2" : ""}`}
          >
            <div className={`overflow-hidden ${wide ? "aspect-[2.5/1]" : "aspect-[4/3]"}`}>
              <img
                src={visual.image}
                alt={visual.alt}
                width={800}
                height={wide ? 320 : 600}
                fetchPriority={wide ? "high" : "auto"}
                className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${wide ? "object-cover object-top" : "object-cover"}`}
              />
            </div>
            <span className="flex min-h-12 items-center justify-between gap-2 px-4 text-xs font-semibold sm:text-sm">
              {label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

const STARTING_POINTS = [
  {
    title: "Launch a new brand",
    body: "Give the business a clear identity, a useful website and the content needed to introduce it.",
    services: ["Branding & Design", "Website Development", "Video Editing & Ads"],
  },
  {
    title: "Improve an online store",
    body: "Work on how shoppers discover products, make a choice and complete an order, with creative that supports the offer.",
    services: ["WordPress & Shopify", "Social Media & Email", "SEO & Search Growth"],
  },
  {
    title: "Keep your content consistent",
    body: "Turn approved ideas, product information and footage into a coordinated library of social, email and video assets.",
    services: ["Branding & Design", "Social Media & Email", "Video Editing & Ads"],
  },
  {
    title: "Connect the way you work",
    body: "Map the handovers between your website, team and tools, then build the interface or workflow the task needs.",
    services: ["Automation & CRM", "AI Solutions", "Custom Platforms & Apps"],
  },
] satisfies { title: string; body: string; services: ServiceTitle[] }[];

function ServicesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section aria-labelledby="services-title" className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Services / Design. Develop. Grow.
              </p>
              <h1
                id="services-title"
                className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl xl:text-[56px]"
              >
                Brand, web, video.
                <br />
                <span className="text-primary">Built to work together.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                A recognisable brand. A website people can use. Content that explains your offer.
                Systems that connect the work behind it.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Our in-house Lahore team brings {SERVICES.length} services together. Bring one
                focused brief or combine the disciplines your project needs, with the scope and
                timeline agreed before production.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <BookCallButton
                  source="services_hero"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background"
                />
                <a
                  href="#services-list-title"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border px-6 text-sm font-semibold hover:bg-muted"
                >
                  Explore services <ArrowRight size={17} />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-muted-foreground">
                {["One focused brief", "Connected disciplines", "Clear review points"].map(
                  (text) => (
                    <span key={text} className="inline-flex items-center gap-2">
                      <Check size={14} className="text-primary" />
                      {text}
                    </span>
                  ),
                )}
              </div>
            </div>
            <ServicesHeroArtwork />
          </div>

          <nav aria-label="Jump to a service" className="mt-12 border-t border-border pt-6">
            <ul className="flex flex-wrap gap-2 sm:gap-3">
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
              Choose the work you need.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              See what each discipline covers, the kind of brief it suits and examples from our
              work. Your proposal defines the exact deliverables for your project.
            </p>
          </div>
          <ul className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {SERVICE_LIST.map((s) => (
              <li
                key={s.id}
                id={s.id}
                className="flex min-w-0 scroll-mt-28 flex-col rounded-3xl border border-border bg-card p-3 text-card-foreground target:border-primary target:ring-2 target:ring-primary/30"
              >
                <ServiceVisual title={s.title} />
                <div className="flex flex-1 flex-col p-3 pt-5">
                  <div className="flex items-center gap-3">
                    <span aria-hidden="true" className={ICON_TILE}>
                      <s.Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="text-lg font-bold leading-snug">{s.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {SERVICE_PRESENTATION[s.title].bestFor}
                  </p>
                  <ul aria-label="Typical deliverables" className="mt-5 space-y-3">
                    {SERVICE_PRESENTATION[s.title].deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-2 text-sm leading-relaxed"
                      >
                        <Check
                          size={15}
                          className="mt-1 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
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
                  <div className="mt-auto pt-6">
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.id }}
                      aria-label={`Explore ${s.title}`}
                      className="inline-flex min-h-11 items-center gap-2 rounded text-sm font-semibold text-foreground underline decoration-primary/50 underline-offset-4 transition hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      Explore this service
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="services-start-title" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="max-w-3xl">
            <p className={EYEBROW}>Start with the goal</p>
            <h2 id="services-start-title" className={`mt-4 ${H2}`}>
              Start with your goal.
              <br />
              Build the right first phase.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              These are useful ways the work can connect. Start with the problem you need to solve;
              we will discuss which parts belong in the first phase.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {STARTING_POINTS.map((point, index) => (
              <article
                key={point.title}
                className="rounded-3xl border border-border bg-muted/30 p-6 sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="text-xs font-semibold tracking-widest text-primary"
                >
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{point.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {point.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {point.services.map((title) => (
                    <Link
                      key={title}
                      to="/services/$slug"
                      params={{ slug: serviceAnchor(title) }}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background px-4 text-xs font-medium hover:border-primary hover:text-primary"
                    >
                      {title}
                      <ArrowUpRight size={13} />
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
            <div>
              <h3 className="text-xl font-semibold">Bringing an agency brief?</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                We can deliver a defined part of your project under an agreed review and handover
                process.
              </p>
            </div>
            <Link
              to="/for-agencies"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-slate-950"
            >
              Agency partnerships <ArrowRight size={16} />
            </Link>
          </div>
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
            Planning your project
          </h2>
          <Faq items={SERVICE_FAQS} className="mt-8 sm:mt-10" />
        </div>
      </section>

      {/* Closing CTA */}
      <section aria-labelledby="services-cta-title" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <ClosingCta
            id="services-cta-title"
            title="Not sure which service"
            highlight="you need?"
            body="Tell us what you're trying to get done and we'll suggest where to start. We reply within one business day."
            source="services_cta"
          />
        </div>
      </section>
    </PageShell>
  );
}
