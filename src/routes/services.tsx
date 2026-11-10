import { ClosingCta } from "@/components/closing-cta";
import { MediaImage } from "@/components/media-image";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
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
import { getItemBySlug } from "@/lib/portfolio-data";
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
    desc: "Logo, color palette, typography and brand guidelines.",
    tags: ["Logo", "Brand guide", "UI/UX"],
  },
  "Website Development": {
    Icon: Globe,
    desc: "Mobile-ready websites, from a single landing page to a full business site.",
    tags: ["React", "Next.js", "Custom code"],
  },
  "WordPress & Shopify": {
    Icon: ShoppingBag,
    desc: "Sites and stores, including the theme, plugins, product pages and payment setup.",
    tags: ["WordPress", "Shopify", "WooCommerce"],
  },
  "Custom Platforms & Apps": {
    Icon: Layers,
    desc: "Built from scratch around how your business works.",
    tags: ["SaaS", "Mobile app", "Portals"],
  },
  "Automation & CRM": {
    Icon: Cog,
    desc: "Workflow automation, CRM setup and integrations, such as moving leads between tools.",
    tags: ["n8n", "Make", "Zapier", "Custom CRM"],
  },
  "AI Solutions": {
    Icon: Brain,
    desc: "Chatbots, voice agents and RAG systems that answer from your own documents.",
    tags: ["Chatbots", "RAG", "Voice agents"],
  },
  "SEO & Search Growth": {
    Icon: Search,
    desc: "Fixes and plans for how your business appears on Google.",
    tags: ["On-page SEO", "Technical SEO", "Local SEO"],
  },
  "Social Media & Email": {
    Icon: Megaphone,
    desc: "Content, ad campaigns, email sequences and newsletters.",
    tags: ["Instagram", "Facebook ads", "Email"],
  },
  "Video Editing & Ads": {
    Icon: Clapperboard,
    desc: "Reels, brand videos, YouTube content and paid ad creative.",
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
              url: `${SITE.url}/services/${s.id}`,
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
  "text-3xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl";
const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const ON_EVERY_PROJECT = [
  "A free scoping call before anything is quoted",
  "A fixed quote in writing before work starts",
  "Final deliverables transfer to you once the project is paid in full",
];

const STARTING_POINTS = [
  {
    title: "Launch a new brand",
    body: "Give the business a clear identity, a useful website and the content needed to introduce it.",
    send: "Tell us who you serve, what you offer and when you want to launch.",
    visual: "Branding & Design",
    services: ["Branding & Design", "Website Development", "Video Editing & Ads"],
  },
  {
    title: "Improve an online store",
    body: "Work on how shoppers discover products, make a choice and complete an order, with creative that supports the offer.",
    send: "Share your store URL, the shopping journey you want to improve and the tools you use.",
    visual: "WordPress & Shopify",
    services: ["WordPress & Shopify", "Social Media & Email", "SEO & Search Growth"],
  },
  {
    title: "Keep your content consistent",
    body: "Turn approved ideas, product information and footage into a coordinated library of social, email and video assets.",
    send: "Bring your existing brand assets, a sample of your footage and the channels you publish on.",
    visual: "Social Media & Email",
    services: ["Branding & Design", "Social Media & Email", "Video Editing & Ads"],
  },
  {
    title: "Connect your tools and team",
    body: "Map the handovers between your website, team and tools, then build the interface or workflow the task needs.",
    send: "Walk us through one repetitive task, the tools involved and where the handover breaks down.",
    visual: "Automation & CRM",
    services: ["Automation & CRM", "AI Solutions", "Custom Platforms & Apps"],
  },
] satisfies {
  title: string;
  body: string;
  send: string;
  visual: ServiceTitle;
  services: ServiceTitle[];
}[];

/**
 * What each service tile shows. Real work only: a project image with its name, or for services
 * with no published project, large type listing what the service covers. No mock screens.
 */
const TILES: {
  title: ServiceTitle;
  image?: string;
  alt?: string;
  /** White-label work always says so on the card. */
  partner?: boolean;
  covers?: string[];
  tone?: string;
}[] = [
  {
    title: "Branding & Design",
    image: SERVICE_PRESENTATION["Branding & Design"].image,
    alt: SERVICE_PRESENTATION["Branding & Design"].alt,
  },
  {
    title: "Website Development",
    image: "/portfolio/cargo-health-wordpress-website/mobile-home.webp",
    alt: SERVICE_PRESENTATION["Website Development"].alt,
    partner: true,
  },
  {
    title: "WordPress & Shopify",
    image: "/portfolio/histreet-shopify-store/mobile-home.webp",
    alt: SERVICE_PRESENTATION["WordPress & Shopify"].alt,
  },
  {
    title: "Automation & CRM",
    image: getItemBySlug("inquiry-to-invoice-automation")?.img,
    alt: "Inquiry to invoice automation workflow",
  },
  {
    title: "Custom Platforms & Apps",
    covers: ["SaaS products", "Mobile apps", "Client portals", "Dashboards"],
    tone: "bg-primary text-white",
  },
  {
    title: "AI Solutions",
    image: getItemBySlug("rag-document-assistant")?.img,
    alt: "Document assistant workflow",
  },
  {
    title: "Social Media & Email",
    image: SERVICE_PRESENTATION["Social Media & Email"].image,
    alt: SERVICE_PRESENTATION["Social Media & Email"].alt,
  },
  {
    title: "SEO & Search Growth",
    covers: ["Technical audits", "On-page SEO", "Keyword strategy", "Local SEO"],
    tone: "bg-sky-100 text-slate-950 dark:bg-slate-800 dark:text-white",
  },
  {
    title: "Video Editing & Ads",
    image: SERVICE_PRESENTATION["Video Editing & Ads"].image,
    alt: SERVICE_PRESENTATION["Video Editing & Ads"].alt,
  },
];

/** Tile ids come from serviceAnchor(): the footer and case studies link to them. */
function ServiceWall() {
  return (
    <section
      id="services-list"
      aria-labelledby="services-list-title"
      className="scroll-mt-20 pb-16 md:pb-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <h2 id="services-list-title" className={H2}>
            What we do
          </h2>
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            Open a service to see its scope, our work and how pricing works.
          </p>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TILES.map((tile, index) => {
            const service = SERVICE_DETAILS[tile.title];
            const id = serviceAnchor(tile.title);
            return (
              <li
                key={tile.title}
                id={id}
                className="min-w-0 scroll-mt-28 rounded-3xl target:ring-4 target:ring-primary"
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: id }}
                  className={`group relative block aspect-[4/5] overflow-hidden rounded-3xl ${tile.tone ?? "bg-muted"} ${FOCUS_RING}`}
                >
                  {tile.image ? (
                    <MediaImage
                      src={tile.image}
                      alt={tile.alt ?? ""}
                      width={800}
                      height={1000}
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                    />
                  ) : (
                    <ul
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 p-6 text-3xl font-bold leading-tight tracking-tight sm:p-8 lg:text-4xl"
                    >
                      {tile.covers?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <span className="absolute inset-x-3 bottom-3 rounded-2xl bg-background p-4 text-foreground shadow-lg">
                    <span className="flex items-center justify-between gap-3">
                      <span className="min-w-0 text-lg font-bold leading-snug tracking-tight">
                        {tile.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-foreground text-background transition group-hover:translate-x-1"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </span>
                    {tile.partner ? (
                      <span className="mt-1 block text-xs text-muted-foreground">
                        Agency partner work
                      </span>
                    ) : null}
                    {/* The description stays out of the way until someone hovers or tabs to the card. */}
                    <span className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] motion-reduce:transition-none">
                      <span className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                        <span className="block pt-2">{service.desc}</span>
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section aria-labelledby="services-title" className="pb-12 pt-12 md:pb-16 md:pt-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h1
            id="services-title"
            className="max-w-5xl text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Branding, websites, apps, automation and video from one studio in Lahore.
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:col-span-7">
              You can hire us for a single job, such as a logo, a Shopify store or a set of ad
              edits, and add other services later if you need them. Our in-house team plans the
              scope, does the work and hands it over.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <BookCallButton
                source="services_hero"
                className={`inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90 ${FOCUS_RING}`}
              />
              <a
                href="#services-list"
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold text-foreground transition hover:bg-muted ${FOCUS_RING}`}
              >
                See what we do <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-10 border-y border-border py-6">
            <h2 className="sr-only">On every project</h2>
            <ul className="grid gap-4 md:grid-cols-3 md:gap-8">
              {ON_EVERY_PROJECT.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-medium text-foreground"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ServiceWall />

      {/* Start from a goal: each card shows which services combine to reach it */}
      <section
        aria-labelledby="services-start-title"
        className="bg-slate-950 py-16 text-white md:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <h2
              id="services-start-title"
              className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Know the goal, but not the service?
            </h2>
            <p className="max-w-md leading-relaxed text-slate-300">
              You do not need to arrive with a list of services. Start with what you want to do, and
              we can help shape the first phase.
            </p>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {STARTING_POINTS.map((point) => (
              <li
                key={point.title}
                className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <div className="relative h-56 shrink-0 overflow-hidden bg-slate-900 sm:h-72">
                  <MediaImage
                    src={TILES.find((tile) => tile.title === point.visual)?.image}
                    alt=""
                    width={960}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent"
                  />
                  <h3 className="absolute inset-x-0 bottom-0 p-5 text-2xl font-bold leading-tight tracking-tight sm:p-6 sm:text-3xl">
                    {point.title}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="leading-relaxed text-slate-200">{point.body}</p>
                  <ol
                    aria-label="Services involved"
                    className="relative mt-6 grid grid-cols-3 gap-2"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-[16.67%] right-[16.67%] top-6 h-px bg-white/25"
                    />
                    {point.services.map((title) => {
                      const ServiceIcon = SERVICE_DETAILS[title].Icon;
                      return (
                        <li key={title} className="relative min-w-0">
                          <Link
                            to="/services/$slug"
                            params={{ slug: serviceAnchor(title) }}
                            className="group/node flex flex-col items-center gap-2 rounded-xl text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                          >
                            <span className="grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-slate-950 text-sky-300 transition group-hover/node:border-sky-300 group-hover/node:bg-sky-300 group-hover/node:text-slate-950">
                              <ServiceIcon
                                className="h-5 w-5"
                                strokeWidth={1.75}
                                aria-hidden="true"
                              />
                            </span>
                            <span className="text-xs font-semibold leading-snug text-white group-hover/node:text-sky-300">
                              {title}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                  <p className="mt-6 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-400">
                    <span className="font-semibold text-slate-200">What to send: </span>
                    {point.send}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            to="/for-agencies"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded text-sm font-semibold text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Bringing an agency brief? <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="services-process-title" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 id="services-process-title" className={H2}>
            How a project runs
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            The same four steps, whichever service you pick.
          </p>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="relative min-w-0 border-t-2 border-border pt-8">
                <span
                  aria-hidden="true"
                  className="absolute -top-5 left-0 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground ring-4 ring-background"
                >
                  <step.Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="text-lg font-bold leading-snug">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="services-faq-title" className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-10 lg:grid-cols-12 lg:gap-16">
          <h2
            id="services-faq-title"
            className={`lg:sticky lg:top-24 lg:col-span-4 lg:self-start ${H2}`}
          >
            Planning your project
          </h2>
          <Faq items={SERVICE_FAQS} className="min-w-0 lg:col-span-8" />
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
