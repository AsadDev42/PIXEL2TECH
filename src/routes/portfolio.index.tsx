import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { BookCallButton } from "@/components/book-call-button";
import { trackEvent } from "@/lib/analytics";
import {
  ALL_ITEMS,
  CATEGORIES,
  absoluteImageUrl,
  categoryFromSlug,
  categorySlug,
  imageSrcSet,
  type CategorySlug,
} from "@/lib/portfolio-data";
import { SITE, STATS } from "@/lib/site-config";

const PAGE_URL = `${SITE.url}/portfolio`;
const OG_IMAGE = `${SITE.url}/__l5e/assets-v1/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg`;
const TITLE = "Portfolio and case studies | Pixel2Tech";
const DESCRIPTION =
  "Client work from Pixel2Tech: brand identities, websites, social media creative, video and custom platforms, with case studies for each project.";

/** `?category=design` filters the grid; anything else shows every project. */
type PortfolioSearch = { category?: CategorySlug };

export const Route = createFileRoute("/portfolio/")({
  validateSearch: (search: Record<string, unknown>): PortfolioSearch => {
    const category = categoryFromSlug(search.category);
    return category ? { category: categorySlug(category) } : {};
  },
  component: PortfolioPage,
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
    // Filtered views show the same projects, so they all point at /portfolio.
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Pixel2Tech portfolio and case studies",
          description: DESCRIPTION,
          url: PAGE_URL,
          isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: ALL_ITEMS.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "CreativeWork",
                name: item.title,
                genre: item.subcategory,
                about: item.category,
                image: absoluteImageUrl(item.img),
                url: `${PAGE_URL}/${item.slug}`,
                creator: {
                  "@type": "Organization",
                  "@id": `${SITE.url}/#organization`,
                  name: SITE.name,
                },
              },
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
            { "@type": "ListItem", position: 2, name: "Portfolio", item: PAGE_URL },
          ],
        }),
      },
    ],
  }),
});

const FILTERS: { label: string; slug?: CategorySlug; count: number }[] = [
  { label: "All work", count: ALL_ITEMS.length },
  ...CATEGORIES.map((c) => ({
    label: c,
    slug: categorySlug(c),
    count: ALL_ITEMS.filter((i) => i.category === c).length,
  })),
];

const TRUST_STATS = [
  { value: STATS.projects, label: "Projects delivered" },
  { value: STATS.clients, label: "Clients" },
  { value: STATS.rating, label: "Client rating" },
  { value: STATS.years, label: `Years in business, since ${STATS.foundingYear}` },
];

function PortfolioPage() {
  const { category } = Route.useSearch();
  const active = categoryFromSlug(category);
  const shown = active ? ALL_ITEMS.filter((i) => i.category === active).length : ALL_ITEMS.length;

  return (
    <PageShell>
      {/* Header */}
      <section className="bg-background pb-8 pt-10 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Portfolio
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Our work
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Brand identities, websites, social content, video and custom software we&apos;ve made
              for clients. Filter by practice, or open a project to read how we did it.
            </p>
          </div>
        </div>
      </section>

      {/* Filters + grid. Every project is in the server HTML; the filter only hides cards. */}
      <section aria-labelledby="projects-title" className="bg-background pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 id="projects-title" className="sr-only">
            Projects
          </h2>
          <nav aria-label="Filter projects by practice">
            <ul className="flex flex-wrap gap-2">
              {FILTERS.map((f) => {
                const isActive = f.slug === category;
                return (
                  <li key={f.label}>
                    <Link
                      to="/portfolio"
                      search={f.slug ? { category: f.slug } : {}}
                      replace
                      resetScroll={false}
                      // Exact search match, so the router's aria-current="page"
                      // lands on this chip only (not on "All work" as well).
                      activeOptions={{ exact: true, includeSearch: true }}
                      onClick={() => trackEvent("portfolio_filter", { category: f.slug ?? "all" })}
                      className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                        isActive
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                      }`}
                    >
                      {f.label}
                      <span className="text-xs font-medium tabular-nums opacity-70">{f.count}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
            {active ? `Showing ${shown} ${active} projects` : `Showing all ${shown} projects`}
          </p>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {ALL_ITEMS.map((w, i) => (
              <li key={w.slug} hidden={active ? w.category !== active : undefined}>
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: w.slug }}
                  data-cursor="expand"
                  onClick={() =>
                    trackEvent("portfolio_project_opened", { slug: w.slug, title: w.title })
                  }
                  className="group block overflow-hidden rounded-2xl bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:rounded-3xl"
                >
                  <div className="relative aspect-[4/5]">
                    <img
                      src={w.img}
                      srcSet={imageSrcSet(w.img)}
                      sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      alt=""
                      loading={i < 3 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-white sm:p-6">
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-widest text-white/85">
                          {w.subcategory}
                        </p>
                        <h3 className="mt-1 line-clamp-2 text-base font-semibold sm:text-lg">
                          {w.title}
                        </h3>
                      </div>
                      <span
                        aria-hidden="true"
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-neutral-900 transition group-hover:scale-110"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Numbers */}
      <section
        aria-labelledby="stats-title"
        className="border-y border-border bg-muted/60 py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 id="stats-title" className="sr-only">
            Pixel2Tech in numbers
          </h2>
          <dl className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {TRUST_STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col-reverse rounded-2xl bg-background p-5 text-center shadow-sm sm:p-8"
              >
                <dt className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</dt>
                <dd className="text-3xl font-bold text-foreground sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="portfolio-cta-title" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
          <h2
            id="portfolio-cta-title"
            className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Tell us what you&apos;re working on. We&apos;ll come back with a clear plan and a
            realistic timeline.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <BookCallButton
              source="portfolio_index"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            />
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Send a project brief
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
