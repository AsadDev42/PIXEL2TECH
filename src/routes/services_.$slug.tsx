import { MediaImage } from "@/components/media-image";
import { ClosingCta } from "@/components/closing-cta";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Briefcase,
  Check,
  ChevronRight,
  Clapperboard,
  Cog,
  FilePen,
  FileText,
  Globe,
  Hammer,
  Layers,
  Megaphone,
  MessagesSquare,
  Palette,
  Receipt,
  Rocket,
  Search,
  ShoppingBag,
  Store,
  type LucideIcon,
} from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { BookCallButton } from "@/components/book-call-button";
import { Faq, faqJsonLd } from "@/components/faq";
import { getItemBySlug, imageSrcSet, warnOnUnknownSlugs } from "@/lib/portfolio-data";
import {
  AUDIENCE_LABELS,
  PRICING_POINTS,
  SERVICE_PAGES,
  SERVICE_PROCESS,
  getServicePage,
  type AudienceKey,
  type ServicePage,
  type ServiceTitle,
} from "@/lib/service-pages";
import { SITE } from "@/lib/site-config";
import { ServiceVisual } from "@/components/service-visual";
import { SERVICE_PRESENTATION } from "@/lib/service-presentation";

const OG_IMAGE = "https://pixel2tech.com/media/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg";
const ORG_REF = { "@id": `${SITE.url}/#organization` };
const SERVICES_URL = `${SITE.url}/services`;

warnOnUnknownSlugs(
  "service-pages",
  SERVICE_PAGES.flatMap((p) => p.work.map((w) => w.slug)),
);

/** Same icons as the service cards on /services. */
const SERVICE_ICONS: Record<ServiceTitle, LucideIcon> = {
  "Branding & Design": Palette,
  "Website Development": Globe,
  "WordPress & Shopify": ShoppingBag,
  "Custom Platforms & Apps": Layers,
  "Automation & CRM": Cog,
  "AI Solutions": Brain,
  "SEO & Search Growth": Search,
  "Social Media & Email": Megaphone,
  "Video Editing & Ads": Clapperboard,
};

const AUDIENCE_ICONS: Record<AudienceKey, LucideIcon> = {
  startups: Rocket,
  smbs: Store,
  dtc: ShoppingBag,
  agencies: Briefcase,
};

const PROCESS_ICONS: LucideIcon[] = [MessagesSquare, FileText, Hammer, Rocket];
const PRICING_ICONS: LucideIcon[] = [MessagesSquare, FileText, FilePen, Receipt];

function pageUrl(page: ServicePage) {
  return `${SERVICES_URL}/${page.slug}`;
}

export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }) => {
    const page = getServicePage(params.slug);
    // An unknown slug is a real 404, not a redirect to /services (a soft 404).
    if (!page) throw notFound();
    // Only the slug crosses to the client; the copy is bundled with the route.
    return { slug: page.slug };
  },
  head: ({ loaderData }) => {
    const page = loaderData ? getServicePage(loaderData.slug) : undefined;
    if (!page) {
      return {
        meta: [{ title: "Service not found | Pixel2Tech" }, { name: "robots", content: "noindex" }],
      };
    }
    const url = pageUrl(page);
    return {
      meta: [
        { title: page.metaTitle },
        { name: "description", content: page.metaDescription },
        { property: "og:title", content: page.metaTitle },
        { property: "og:description", content: page.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: OG_IMAGE },
        { name: "twitter:title", content: page.metaTitle },
        { name: "twitter:description", content: page.metaDescription },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${url}#service`,
            name: page.title,
            serviceType: page.serviceType,
            description: page.answer,
            url,
            provider: ORG_REF,
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Place", name: "Worldwide" },
            ],
            audience: {
              "@type": "BusinessAudience",
              audienceType: "US startups, small and midsize businesses, DTC brands and agencies",
            },
            termsOfService: `${SITE.url}/terms-and-conditions`,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
              { "@type": "ListItem", position: 2, name: "Services", item: SERVICES_URL },
              { "@type": "ListItem", position: 3, name: page.title, item: url },
            ],
          }),
        },
        faqJsonLd(page.faqs),
      ],
    };
  },
  component: ServiceLandingPage,
  notFoundComponent: () => (
    <PageShell>
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Error 404
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Service not found
          </h1>
          <p className="mt-4 text-[15px] text-muted-foreground">
            This service page doesn&apos;t exist or has moved. See everything we offer on the
            services page.
          </p>
          <Link
            to="/services"
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90"
          >
            See all services
          </Link>
        </div>
      </section>
    </PageShell>
  ),
});

/* -------------------------------------------------------------------------- */

const EYEBROW = "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground";
const H2 =
  "text-2xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl";
const LEAD = "mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base";
const BODY = "text-[15px] leading-relaxed text-muted-foreground";
const ICON_TILE =
  "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary";
const CARD = "rounded-2xl border border-border bg-card p-6 text-card-foreground sm:p-8";
const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const CONTAINER = "mx-auto max-w-7xl px-5 md:px-10";
const SECTION = "py-16 md:py-24";

function ServiceLandingPage() {
  const { slug } = Route.useLoaderData();
  const page = getServicePage(slug);
  if (!page) return null;

  const Icon = SERVICE_ICONS[page.title];
  const work = page.work.flatMap((w) => {
    const item = getItemBySlug(w.slug);
    return item ? [{ ...w, item }] : [];
  });
  const otherServices = SERVICE_PAGES.filter((p) => p.slug !== page.slug);
  const id = (name: string) => `svc-${name}`;

  return (
    <PageShell>
      {/* Hero */}
      <section aria-labelledby={id("title")} className="bg-background py-12 md:py-20">
        <div className={CONTAINER}>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/"
                  className={`inline-flex min-h-10 items-center rounded hover:text-foreground ${FOCUS_RING}`}
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-4 w-4" />
              </li>
              <li>
                <Link
                  to="/services"
                  className={`inline-flex min-h-10 items-center rounded hover:text-foreground ${FOCUS_RING}`}
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-4 w-4" />
              </li>
              <li aria-current="page" className="font-medium text-foreground">
                {page.title}
              </li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-10 lg:mt-10 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="min-w-0 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className={ICON_TILE}>
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <p className={EYEBROW}>{page.title}</p>
              </div>
              <h1
                id={id("title")}
                className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl xl:text-[56px]"
              >
                {page.h1} <span className="text-primary">{page.h1Highlight}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {page.answer}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <BookCallButton
                  source={`service_${page.slug}_hero`}
                  className={`inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90 ${FOCUS_RING}`}
                />
                <Link
                  to="/contact"
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold text-foreground transition hover:bg-muted ${FOCUS_RING}`}
                >
                  Send a project brief
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <aside aria-labelledby={id("glance")} className="min-w-0 space-y-5 lg:col-span-5">
              <h2 id={id("glance")} className="sr-only">
                At a glance
              </h2>
              <ServiceVisual title={page.title} priority />
              <div className="rounded-2xl border border-border bg-muted/30 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  A good fit for
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {SERVICE_PRESENTATION[page.title].bestFor}
                </p>
                <ul aria-label="Typical tools and formats" className="mt-4 flex flex-wrap gap-2">
                  {page.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section aria-labelledby={id("deliverables")} className={`bg-muted ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="max-w-2xl">
            <p className={EYEBROW}>Deliverables</p>
            <h2 id={id("deliverables")} className={`mt-4 ${H2}`}>
              What you get
            </h2>
            <p className={LEAD}>
              The typical scope for this service. Your proposal lists exactly what&apos;s included,
              so you can pick only the parts you need.
            </p>
          </div>
          <ul className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {page.deliverables.map((d) => (
              <li key={d.title} className={`flex min-w-0 flex-col ${CARD}`}>
                <span aria-hidden="true" className={ICON_TILE}>
                  <Check className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-6 text-lg font-bold leading-snug">{d.title}</h3>
                <p className={`mt-2 ${BODY}`}>{d.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who it's for */}
      <section aria-labelledby={id("audience")} className={`bg-background ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="max-w-2xl">
            <p className={EYEBROW}>Who it&apos;s for</p>
            <h2 id={id("audience")} className={`mt-4 ${H2}`}>
              Built for teams in situations like these
            </h2>
            <p className={LEAD}>
              If one of these sounds familiar, this service is likely a fit. If you&apos;re not
              sure, ask on the call and we&apos;ll tell you honestly.
            </p>
          </div>
          <ul className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {(Object.keys(AUDIENCE_LABELS) as AudienceKey[]).map((key) => {
              const AudienceIcon = AUDIENCE_ICONS[key];
              return (
                <li key={key} className={`flex min-w-0 flex-col ${CARD}`}>
                  <span aria-hidden="true" className={ICON_TILE}>
                    <AudienceIcon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 text-lg font-bold leading-snug">{AUDIENCE_LABELS[key]}</h3>
                  <p className={`mt-2 ${BODY}`}>{page.audiences[key]}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Process: the same four steps as /services */}
      <section aria-labelledby={id("process")} className={`bg-muted ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="max-w-2xl">
            <p className={EYEBROW}>Process</p>
            <h2 id={id("process")} className={`mt-4 ${H2}`}>
              How a project runs
            </h2>
            <p className={LEAD}>The same four steps we follow on every project.</p>
          </div>
          <ol className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {SERVICE_PROCESS.map((step, i) => {
              const StepIcon = PROCESS_ICONS[i] ?? Check;
              return (
                <li key={step.title} className={`flex min-w-0 flex-col ${CARD}`}>
                  <div className="flex items-start justify-between gap-4">
                    <span aria-hidden="true" className={ICON_TILE}>
                      <StepIcon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-sm font-semibold tabular-nums text-muted-foreground"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold leading-snug">{step.title}</h3>
                  <p className={`mt-2 ${BODY}`}>{step.desc}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Engagement and pricing */}
      <section aria-labelledby={id("pricing")} className={`bg-background ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="max-w-2xl">
            <p className={EYEBROW}>Engagement and pricing</p>
            <h2 id={id("pricing")} className={`mt-4 ${H2}`}>
              How pricing works
            </h2>
            <p className={LEAD}>
              We don&apos;t publish a price list, because scope varies too much from one project to
              the next. You get a fixed quote in writing before any work starts.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-12 lg:gap-6">
            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-6">
              {PRICING_POINTS.map((point, i) => {
                const PointIcon = PRICING_ICONS[i] ?? Check;
                return (
                  <li key={point.title} className={`flex min-w-0 flex-col ${CARD}`}>
                    <span aria-hidden="true" className={ICON_TILE}>
                      <PointIcon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-6 text-lg font-bold leading-snug">{point.title}</h3>
                    <p className={`mt-2 ${BODY}`}>{point.desc}</p>
                  </li>
                );
              })}
            </ul>
            <div className={`flex min-w-0 flex-col bg-muted lg:col-span-5 ${CARD}`}>
              <h3 className="text-lg font-bold leading-snug">What affects your quote</h3>
              <ul className="mt-6 space-y-4">
                {page.priceDrivers.map((driver) => (
                  <li key={driver} className="flex gap-3">
                    <Check
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-primary"
                      strokeWidth={2.25}
                    />
                    <span className="text-[15px] leading-relaxed text-foreground">{driver}</span>
                  </li>
                ))}
              </ul>
              <p className={`mt-8 border-t border-border pt-6 ${BODY}`}>
                Payment terms, revisions and ownership are covered in our{" "}
                <Link
                  to="/terms-and-conditions"
                  className="font-semibold text-foreground underline decoration-primary/50 underline-offset-4 transition hover:decoration-primary"
                >
                  terms and conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related work: real case studies only */}
      <section aria-labelledby={id("work")} className={`bg-muted ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className={EYEBROW}>Our work</p>
              <h2 id={id("work")} className={`mt-4 ${H2}`}>
                Relevant project work
              </h2>
            </div>
            <Link
              to="/portfolio"
              className={`inline-flex min-h-11 items-center gap-2 self-start rounded-full text-sm font-semibold text-foreground underline decoration-primary/50 underline-offset-4 transition hover:decoration-primary sm:self-auto ${FOCUS_RING}`}
            >
              See the full portfolio
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {work.length > 0 ? (
            <ul
              className={`mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:gap-6 ${work.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}
            >
              {work.map(({ item, note }) => (
                <li key={item.slug} className="min-w-0">
                  <Link
                    to="/portfolio/$slug"
                    params={{ slug: item.slug }}
                    className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground transition hover:border-primary ${FOCUS_RING}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <MediaImage
                        src={item.store?.desktop[0] ?? item.img}
                        srcSet={imageSrcSet(item.store?.desktop[0] ?? item.img)}
                        sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        alt={`${item.title} — selected project preview`}
                        loading="lazy"
                        decoding="async"
                        className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${item.store || item.automation ? "object-contain object-top p-3" : "object-cover"}`}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className={EYEBROW}>
                        {item.client ?? item.subcategory}
                        {item.whiteLabel ? " · Agency partner work" : ""}
                      </p>
                      <h3 className="mt-2 text-lg font-bold leading-snug">{item.title}</h3>
                      <p className={`mt-2 flex-1 ${BODY}`}>{note}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                        Read the case study
                        <ArrowRight
                          className="h-4 w-4 transition group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-8 grid gap-6 rounded-3xl border border-border bg-background p-6 sm:p-8 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className={EYEBROW}>Shape the first phase</p>
                <h3 className="mt-3 text-2xl font-semibold">
                  {page.title === "SEO & Search Growth"
                    ? "Start with the pages that matter."
                    : "Start with one complete workflow."}
                </h3>
                <p className={`mt-4 ${BODY}`}>
                  {page.title === "SEO & Search Growth"
                    ? "Share your website, priority services and any existing Search Console or analytics findings. We can discuss a focused review, a prioritised action list and which fixes belong in the agreed scope."
                    : "Share who will use the platform, the task they need to complete and the tools or data involved. We can define the first user journey, permissions, prototype and acceptance checks before a broader build."}
                </p>
              </div>
              <div className="rounded-2xl bg-muted/50 p-5">
                <p className="text-sm font-semibold">Useful inputs for the brief</p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {(page.title === "SEO & Search Growth"
                    ? [
                        "Website URL and priority pages",
                        "Audience, services and target markets",
                        "Existing evidence and previous changes",
                      ]
                    : [
                        "User roles and one important task",
                        "Current tools, data and handovers",
                        "Constraints and a clear approval owner",
                      ]
                  ).map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check size={16} className="mt-1 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"
                >
                  Send your project context <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related articles */}
      <section aria-labelledby={id("articles")} className={`bg-background ${SECTION}`}>
        <div className={CONTAINER}>
          <div className="max-w-2xl">
            <p className={EYEBROW}>Guides</p>
            <h2 id={id("articles")} className={`mt-4 ${H2}`}>
              Further reading
            </h2>
          </div>
          <ul className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3 lg:gap-6">
            {page.articles.map((a) => (
              <li key={a.slug} className="min-w-0">
                <Link
                  to="/blog/$slug"
                  params={{ slug: a.slug }}
                  className={`group flex h-full flex-col transition hover:border-primary ${CARD} ${FOCUS_RING}`}
                >
                  <h3 className="text-lg font-bold leading-snug">{a.title}</h3>
                  <p className={`mt-2 flex-1 ${BODY}`}>{a.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    Read the article
                    <ArrowRight
                      className="h-4 w-4 transition group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby={id("faq")} className={`bg-muted ${SECTION}`}>
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <h2 id={id("faq")} className={`text-center ${H2}`}>
            Common questions
          </h2>
          <Faq items={page.faqs} className="mt-8 sm:mt-10" />
        </div>
      </section>

      {/* Closing CTA + other services */}
      <section aria-labelledby={id("cta")} className={`bg-background ${SECTION}`}>
        <div className={CONTAINER}>
          <ClosingCta
            id={id("cta")}
            title={page.ctaTitle}
            body="Tell us what you need and we'll recommend where to start. We reply within one business day."
            source={`service_${page.slug}_cta`}
          />

          <nav aria-labelledby={id("other")} className="mt-12 sm:mt-16">
            <h2 id={id("other")} className="text-lg font-bold leading-snug text-foreground">
              Other services
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              {otherServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className={`inline-flex min-h-11 items-center rounded-full border border-border bg-background px-4 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary ${FOCUS_RING}`}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </PageShell>
  );
}
