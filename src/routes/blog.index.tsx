import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ResponsiveImage } from "@/components/responsive-image";
import { PageShell, PageHeader } from "@/components/site-chrome";
import { toPostSummary, POST_INDEX } from "@/lib/blog-index";
import { getBlogArchive, parseBlogSearch } from "@/lib/blog-archive";
import { toISODateTime } from "@/lib/blog-types";
import { SITE } from "@/lib/site-config";

const OG_IMAGE = "https://pixel2tech.com/media/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg";
const TITLE = "Branding, web & automation guides | Pixel2Tech";
const DESCRIPTION =
  "Practical guides on branding, websites, Shopify, SEO and automation, written by the Pixel2Tech team in Lahore.";
const BLOG_URL = `${SITE.url}/blog`;

export const Route = createFileRoute("/blog/")({
  validateSearch: parseBlogSearch,
  loaderDeps: ({ search }) => search,
  loader: ({ deps }) => getBlogArchive(POST_INDEX, deps),
  component: BlogPage,
  head: ({ loaderData }) => {
    const archive = loaderData ?? getBlogArchive(POST_INDEX, {});
    const url = `${SITE.url}${archive.path}`;
    const title = archive.search.q
      ? `Search articles: ${archive.search.q} | Pixel2Tech`
      : `${archive.search.topic ? `${archive.search.topic} guides | Pixel2Tech` : TITLE}${archive.page > 1 ? ` — Page ${archive.page}` : ""}`;
    return {
      meta: [
        { title },
        ...(archive.search.q || archive.search.topic
          ? [{ name: "robots", content: "noindex, follow" }]
          : []),
        { name: "description", content: DESCRIPTION },
        { property: "og:title", content: title },
        { property: "og:description", content: DESCRIPTION },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: OG_IMAGE },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: DESCRIPTION },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${url}#blog`,
            name: "Pixel2Tech blog",
            url,
            description: DESCRIPTION,
            publisher: { "@id": `${SITE.url}/#organization` },
            blogPost: archive.posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: `${BLOG_URL}/${p.slug}`,
              datePublished: toISODateTime(p.date, p.time),
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
              { "@type": "ListItem", position: 2, name: "Blog", item: BLOG_URL },
            ],
          }),
        },
      ],
    };
  },
});

/** Whole card is clickable through the title link; its ring shows on keyboard focus. */
const CARD_FOCUS = "has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring";
const STRETCHED_LINK = "after:absolute after:inset-0 after:content-[''] focus-visible:outline-none";

function BlogPage() {
  const archive = Route.useLoaderData();
  const summaries = archive.posts.map(toPostSummary);
  const showFeatured = archive.page === 1 && !archive.search.q && !archive.search.topic;
  const featured = showFeatured ? summaries[0] : undefined;
  const rest = featured ? summaries.slice(1) : summaries;
  const topics = [...new Set(POST_INDEX.map((post) => post.tag))].sort();

  return (
    <PageShell>
      <PageHeader
        eyebrow="Blog"
        title="Guides on branding, websites, SEO and automation"
        subtitle="Practical guides on branding, websites, Shopify, SEO and automation, written by the people who do the work."
      />

      {featured ? (
        <section aria-label="Latest article" className="bg-background">
          <div className="mx-auto max-w-7xl px-5 pb-12 md:px-10 md:pb-16">
            <article
              className={`group relative grid gap-6 rounded-3xl bg-muted p-4 sm:p-6 md:grid-cols-2 md:gap-8 md:p-8 ${CARD_FOCUS}`}
            >
              <div className="aspect-[40/21] overflow-hidden rounded-2xl bg-background">
                <ResponsiveImage
                  src={featured.img}
                  alt={featured.imgAlt || featured.title}
                  width={1600}
                  height={1000}
                  sizes="(min-width: 1280px) 600px, (min-width: 768px) 45vw, 92vw"
                  className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
                  priority
                />
              </div>

              <div className="flex min-w-0 flex-col justify-center">
                <p className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-primary">
                    {featured.tag}
                  </span>
                  <time dateTime={featured.dateISO}>{featured.date}</time>
                </p>
                <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: featured.slug }}
                    className={STRETCHED_LINK}
                  >
                    {featured.title}
                  </Link>
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          </div>
        </section>
      ) : null}

      <section aria-label="Find articles" className="mx-auto max-w-7xl px-5 pb-8 md:px-10">
        <form
          action="/blog"
          method="get"
          className="grid items-end gap-4 sm:grid-cols-[1fr_1fr_auto]"
        >
          <label className="grid gap-2 text-sm font-medium">
            Search articles
            <input
              name="q"
              type="search"
              defaultValue={archive.search.q ?? ""}
              key={archive.search.q ?? ""}
              maxLength={120}
              placeholder="Try Shopify, branding or video"
              className="min-h-12 min-w-0 rounded-xl border border-border bg-background px-4 text-base focus-visible:outline-2 focus-visible:outline-primary"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Topic
            <select
              name="topic"
              defaultValue={archive.search.topic ?? ""}
              key={archive.search.topic ?? ""}
              className="min-h-12 min-w-0 rounded-xl border border-border bg-background px-4 text-base focus-visible:outline-2 focus-visible:outline-primary"
            >
              <option value="">All topics</option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="min-h-12 rounded-full bg-foreground px-6 text-sm font-semibold text-background focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Find articles
          </button>
        </form>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p role="status">
            {archive.total
              ? `Showing ${archive.offset + 1}–${archive.offset + summaries.length} of ${archive.total} articles`
              : "No matching articles. Try another topic or a shorter search."}
          </p>
          {(archive.search.q || archive.search.topic) && (
            <Link
              to="/blog"
              search={{}}
              className="inline-flex min-h-11 items-center text-primary underline"
            >
              Clear filters
            </Link>
          )}
        </div>
        <nav aria-label="Browse article topics" className="mt-4 flex flex-wrap gap-2">
          {["Shopify", "Web Development", "Branding", "Video Editing", "SEO"]
            .filter((topic) => topics.includes(topic))
            .map((topic) => (
              <Link
                key={topic}
                to="/blog"
                search={{ topic }}
                className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm hover:bg-muted focus-visible:outline-2 focus-visible:outline-primary"
              >
                {topic}
              </Link>
            ))}
        </nav>
      </section>

      <section aria-labelledby="all-articles" className="bg-background">
        <div className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
          <h2 id="all-articles" className="sr-only">
            {featured ? "More articles" : "Articles"}
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <li key={p.slug}>
                <article
                  className={`group relative flex h-full flex-col rounded-3xl bg-muted p-3 transition-colors hover:bg-muted/70 sm:p-4 ${CARD_FOCUS}`}
                >
                  <div className="aspect-[40/21] overflow-hidden rounded-2xl bg-background">
                    <ResponsiveImage
                      src={p.img}
                      alt={p.imgAlt || p.title}
                      width={1600}
                      height={1000}
                      sizes="(min-width: 1280px) 400px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span>{p.tag}</span>
                    <time dateTime={p.dateISO}>{p.date}</time>
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                    <Link to="/blog/$slug" params={{ slug: p.slug }} className={STRETCHED_LINK}>
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-2 pb-2 text-sm leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                </article>
              </li>
            ))}
          </ul>
          {archive.pages > 1 && (
            <nav
              aria-label="Article pages"
              className="mt-10 flex flex-wrap items-center justify-center gap-2"
            >
              {archive.page > 1 && (
                <Link
                  to="/blog"
                  search={{ ...archive.search, page: archive.page - 1 }}
                  className="inline-flex min-h-11 items-center rounded-xl border border-border px-4 text-sm hover:bg-muted"
                >
                  Previous
                </Link>
              )}
              {Array.from({ length: archive.pages }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  to="/blog"
                  search={{ ...archive.search, page: page === 1 ? undefined : page }}
                  aria-current={page === archive.page ? "page" : undefined}
                  className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border px-3 text-sm focus-visible:outline-2 focus-visible:outline-primary ${page === archive.page ? "border-foreground bg-foreground text-background" : "border-border hover:bg-muted"}`}
                >
                  {page}
                </Link>
              ))}
              {archive.page < archive.pages && (
                <Link
                  to="/blog"
                  search={{ ...archive.search, page: archive.page + 1 }}
                  className="inline-flex min-h-11 items-center rounded-xl border border-border px-4 text-sm hover:bg-muted"
                >
                  Next
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>
    </PageShell>
  );
}
