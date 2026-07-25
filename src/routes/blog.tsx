import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site-chrome";
import { posts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog — Pixel2Tech" },
      { name: "description", content: "Tips, trends and thought leadership on branding, AI and modern web from the Pixel2Tech team." },
      { property: "og:title", content: "Blog — Pixel2Tech" },
      { property: "og:description", content: "Insights on branding, AI and modern web." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});


function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <PageShell>
      <PageHeader
        eyebrow="LATEST INSIGHTS"
        title="Ideas, essays &"
        highlight="case studies"
        subtitle="Tips, trends, and thought leadership from the Pixel2Tech team."
      />

      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 sm:pb-12">
        <div className="grid gap-6 rounded-2xl bg-muted p-5 sm:gap-8 sm:rounded-3xl sm:p-6 md:grid-cols-2 md:p-8">
          <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-300 dark:bg-background">
            <img loading="lazy" decoding="async" src={featured.img} alt={featured.title} className="h-full w-full object-cover" />
          </div>
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
            <a href="#" className="sr-only">read</a>
            <Link to="/blog/$slug" params={{ slug: featured.slug }} className="mt-5 inline-flex min-h-11 w-fit items-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background hover:opacity-90 sm:mt-6">
              Read Article
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="block rounded-3xl bg-muted p-3 transition hover:bg-neutral-200/60 dark:hover:bg-muted/70 sm:p-4">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-300 dark:bg-background">
                <img loading="lazy" decoding="async" src={p.img} alt={p.title} className="h-full w-full object-cover" />
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

