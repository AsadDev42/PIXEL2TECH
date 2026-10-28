import { MediaImage } from "@/components/media-image";
import { useState } from "react";
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

/**
 * Swipeable cards on phones, a bento grid from md up. Tile placement and image focus are set per
 * card so each screenshot keeps its subject in frame at both sizes.
 */
const HERO_WORK = [
  {
    title: "Branding & Design",
    label: "Make your brand recognisable",
    category: "01 / Brand & content",
    tile: "md:col-span-5 md:row-span-2",
    focus: "object-center",
  },
  {
    title: "WordPress & Shopify",
    label: "Give your business a digital home",
    category: "02 / Web & commerce",
    tile: "md:col-span-7",
    focus: "object-top",
    mobileImage: "/portfolio/histreet-shopify-store/mobile-home.webp",
  },
  {
    title: "Video Editing & Ads",
    label: "Turn your message into motion",
    category: "03 / Video & storytelling",
    tile: "md:col-span-4",
    focus: "object-[center_30%]",
  },
  {
    title: "Social Media & Email",
    label: "Keep every campaign on brand",
    category: "04 / Social & campaigns",
    tile: "md:col-span-3",
    focus: "object-center",
  },
] satisfies {
  title: ServiceTitle;
  label: string;
  category: string;
  tile: string;
  focus: string;
  mobileImage?: string;
}[];

function ServicesHeroArtwork() {
  return (
    <div className="mt-10 md:mt-14">
      <div className="mb-4 flex items-center justify-between md:hidden">
        <p className={EYEBROW}>Selected work</p>
        <p aria-hidden="true" className="flex items-center gap-1 text-xs text-muted-foreground">
          Swipe <ArrowRight size={14} />
        </p>
      </div>
      <ul
        aria-label="Explore selected work"
        className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:h-[500px] md:grid-cols-12 md:grid-rows-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:h-[560px] [&::-webkit-scrollbar]:hidden"
      >
        {HERO_WORK.map((work, index) => {
          const visual = SERVICE_PRESENTATION[work.title];
          return (
            <li
              key={work.title}
              className={`w-[78vw] max-w-[340px] shrink-0 snap-start sm:w-[44vw] md:w-auto md:max-w-none ${work.tile}`}
            >
              <Link
                to="/portfolio/$slug"
                params={{ slug: visual.project! }}
                className="group relative block aspect-[4/5] h-full overflow-hidden rounded-3xl bg-muted shadow-sm ring-1 ring-border/60 transition duration-500 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:aspect-auto"
              >
                <picture>
                  {"mobileImage" in work && (
                    <source media="(max-width: 767px)" srcSet={work.mobileImage} />
                  )}
                  <MediaImage
                    src={visual.image}
                    alt={visual.alt}
                    width={1200}
                    height={900}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                    className={`absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${work.focus}`}
                  />
                </picture>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/25 to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/95 text-slate-950 shadow-md backdrop-blur transition duration-300 group-hover:rotate-45 group-hover:bg-primary group-hover:text-white motion-reduce:transition-none"
                >
                  <ArrowUpRight size={18} />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
                    {work.category}
                  </span>
                  <span
                    className={`mt-2 block font-semibold leading-tight tracking-tight text-white text-balance ${index === 0 ? "text-xl md:text-3xl" : "text-xl md:text-2xl"}`}
                  >
                    {work.label}
                  </span>
                  <span className="mt-2 block text-xs text-white/70 md:text-sm">
                    {visual.caption}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
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

function ServiceGoalPicker() {
  const [selected, setSelected] = useState(0);
  const point = STARTING_POINTS[selected];
  const prompts = [
    "Tell us who you serve, what you offer and when you want to launch.",
    "Share your store URL, the shopping journey you want to improve and the tools you use.",
    "Bring your existing brand assets, a sample of your footage and the channels you publish on.",
    "Walk us through one repetitive task, the tools involved and where the handover breaks down.",
  ];
  const previews: ServiceTitle[] = [
    "Branding & Design",
    "WordPress & Shopify",
    "Video Editing & Ads",
    "Automation & CRM",
  ];
  return (
    <section
      aria-labelledby="services-start-title"
      className="border-b border-border bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className={EYEBROW}>Find your starting point</p>
            <h2 id="services-start-title" className={`mt-4 ${H2}`}>
              What would you like
              <br />
              to move forward?
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            You do not need to arrive with a list of services. Choose your goal and see how we can
            help shape the first phase.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-3" aria-label="Choose your project goal">
            {STARTING_POINTS.map((option, index) => (
              <button
                key={option.title}
                type="button"
                aria-pressed={selected === index}
                aria-controls="service-goal-detail"
                onClick={() => setSelected(index)}
                className={`flex min-h-20 items-center gap-4 rounded-2xl border px-5 py-5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${selected === index ? "border-primary bg-primary text-white" : "border-border bg-background hover:bg-muted"}`}
              >
                <span
                  className={`text-xs font-semibold ${selected === index ? "text-white/70" : "text-muted-foreground"}`}
                >
                  0{index + 1}
                </span>
                <span className="flex-1 text-base font-semibold sm:text-lg">{option.title}</span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </button>
            ))}
            <Link
              to="/for-agencies"
              className="mt-2 inline-flex min-h-11 items-center gap-2 px-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Bringing an agency brief? <ArrowRight size={16} />
            </Link>
          </div>
          <div
            id="service-goal-detail"
            className="overflow-hidden rounded-3xl border border-border bg-muted/40 p-5 sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-[1fr_0.8fr]">
              <div aria-live="polite" aria-atomic="true">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Your first phase
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
              </div>
              <div className="min-w-0">
                <ServiceVisual title={previews[selected]} />
              </div>
            </div>
            <div className="mt-6 border-t border-border pt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                How we can help
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
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
            </div>
            <div className="mt-6 flex flex-col items-start gap-4 border-t border-border pt-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">A useful first brief: </span>
                {prompts[selected]}
              </p>
              <BookCallButton
                source="services_goal_picker"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section
        aria-labelledby="services-title"
        className="relative overflow-hidden bg-background pb-12 pt-10 md:pb-20 md:pt-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-5 md:px-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
            Pixel2Tech / Our services
          </p>
          <div className="mt-6 grid items-end gap-8 lg:mt-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <h1
              id="services-title"
              className="text-[2.5rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              From first idea.
              <br />
              <span className="text-primary">To ready for launch.</span>
            </h1>
            <div className="lg:pb-2">
              <p className="max-w-lg text-base leading-relaxed text-foreground/80 sm:text-lg">
                A brand that feels like you. A website built for your customers. Content and systems
                that keep the business moving.
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Choose one discipline or bring them together. Our Lahore team plans the scope,
                creates the work and helps you launch.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <BookCallButton
                  source="services_hero"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90 sm:w-auto"
                />
                <a
                  href="#services-list-title"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border px-6 text-sm font-semibold transition hover:border-primary hover:text-primary sm:w-auto"
                >
                  Find your service <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
          <ServicesHeroArtwork />

          <nav
            aria-label="Jump to a service"
            className="mt-10 border-t border-border pt-6 md:mt-12"
          >
            <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
              {SERVICE_LIST.map((s) => (
                <li key={s.id} className="shrink-0">
                  <a
                    href={`#${s.id}`}
                    className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full border border-border bg-background px-4 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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

      <ServiceGoalPicker />

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
