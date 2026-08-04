import { createFileRoute, Link } from "@tanstack/react-router";
import { ResponsiveImage } from "@/components/responsive-image";
import { PageShell, PageHeader } from "@/components/site-chrome";
import { posts, getSortedPosts, type BlogPost } from "@/lib/blog-posts";

const OG_IMAGE = "https://pixel2tech.com/__l5e/assets-v1/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog | Branding, Web Design & AI Insights by Pixel2Tech" },
      { name: "description", content: "Practical insights on branding, web design, AI tools and digital growth for startups and businesses." },
      { property: "og:title", content: "Blog | Branding, Web Design & AI Insights by Pixel2Tech" },
      { property: "og:description", content: "Practical insights on branding, web design, AI tools and digital growth for startups and businesses." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel2tech.com/blog" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:title", content: "Blog | Branding, Web Design & AI Insights by Pixel2Tech" },
      { name: "twitter:description", content: "Practical insights on branding, web design, AI tools and digital growth for startups and businesses." },
    ],
    links: [{ rel: "canonical", href: "https://pixel2tech.com/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Pixel2Tech Blog",
          url: "https://pixel2tech.com/blog",
          description:
            "Practical insights on branding, web design, AI tools and digital growth for startups and businesses.",
          publisher: {
            "@type": "Organization",
            "@id": "https://pixel2tech.com/#organization",
            name: "Pixel2Tech",
            url: "https://pixel2tech.com",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://pixel2tech.com/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://pixel2tech.com/blog" },
          ],
        }),
      },
    ],
  }),
});


function BlogPage() {
  const sortedPosts = getSortedPosts();
  const [featured, ...rest] = sortedPosts;
  return (
    <PageShell>
      <PageHeader
        eyebrow="LATEST INSIGHTS"
        title="Ideas, essays &"
        highlight="case studies"
        subtitle="Tips, trends, and thought leadership from the Pixel2Tech team."
      />

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
        <div className="grid gap-6 rounded-2xl bg-muted p-5 sm:gap-8 sm:rounded-3xl sm:p-6 md:grid-cols-2 md:p-8">
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            aria-label={featured.title}
            className="block aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-300 dark:bg-background"
          >
            <ResponsiveImage
              src={featured.img}
              alt={featured.title}
              width={1600}
              height={1000}
              sizes="(min-width: 768px) 45vw, 92vw"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              priority
            />

          </Link>

          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:gap-4">
              <span className="rounded-full bg-[#1E90FF]/10 px-2.5 py-1 font-semibold text-[#1E90FF]">
                {featured.tag}
              </span>
              <span>{featured.date}</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:mt-4 sm:text-3xl lg:text-[36px]">
              {featured.title}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">{featured.excerpt}</p>
            
            <Link to="/blog/$slug" params={{ slug: featured.slug }} className="mt-5 inline-flex min-h-11 w-fit items-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background hover:opacity-90 sm:mt-6">
              Read Article
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p: BlogPost) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="block rounded-3xl bg-muted p-3 transition hover:bg-neutral-200/60 dark:hover:bg-muted/70 sm:p-4">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-300 dark:bg-background">
                <ResponsiveImage
                  src={p.img}
                  alt={p.title}
                  width={1600}
                  height={1000}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:mt-5 sm:gap-4">
                <span>{p.tag}</span><span>{p.date}</span>
              </div>
              <div className="mt-3 text-base font-semibold leading-snug text-foreground sm:text-lg">{p.title}</div>
              <div className="mt-2 pb-3 text-sm text-muted-foreground">{p.excerpt}</div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

