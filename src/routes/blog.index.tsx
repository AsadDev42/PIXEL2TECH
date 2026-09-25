import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ResponsiveImage } from "@/components/responsive-image";
import { PageShell, PageHeader } from "@/components/site-chrome";
import { getPostSummaries, POST_INDEX } from "@/lib/blog-index";
import { toISODateTime } from "@/lib/blog-types";
import { SITE } from "@/lib/site-config";

const OG_IMAGE =
  "https://pixel2tech.com/__l5e/assets-v1/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg";
const TITLE = "Pixel2Tech blog: branding, web design and automation guides";
const DESCRIPTION =
  "Practical guides on branding, websites, Shopify, SEO and automation, written by the Pixel2Tech team in Lahore.";
const BLOG_URL = `${SITE.url}/blog`;

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BLOG_URL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: BLOG_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${BLOG_URL}#blog`,
          name: "Pixel2Tech blog",
          url: BLOG_URL,
          description: DESCRIPTION,
          publisher: { "@id": `${SITE.url}/#organization` },
          blogPost: POST_INDEX.map((p) => ({
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
  }),
});

/** Whole card is clickable through the title link; its ring shows on keyboard focus. */
const CARD_FOCUS = "has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring";
const STRETCHED_LINK = "after:absolute after:inset-0 after:content-[''] focus-visible:outline-none";

function BlogPage() {
  const [featured, ...rest] = getPostSummaries();

  return (
    <PageShell>
      <PageHeader
        eyebrow="Blog"
        title="Notes from the studio"
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
                  alt=""
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

      <section aria-labelledby="all-articles" className="bg-background">
        <div className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
          <h2 id="all-articles" className="sr-only">
            More articles
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
                      alt=""
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
        </div>
      </section>
    </PageShell>
  );
}
