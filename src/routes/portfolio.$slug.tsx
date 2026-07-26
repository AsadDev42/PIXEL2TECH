import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { FadeIn } from "@/components/motion";
import { ArrowLeft, ArrowRight, Target, Wrench, TrendingUp } from "lucide-react";
import { getItemBySlug, getRelated, getGallery } from "@/lib/portfolio-data";

export const Route = createFileRoute("/portfolio/$slug")({
  component: PortfolioDetailPage,
  loader: ({ params }) => {
    const item = getItemBySlug(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — Pixel2Tech" }, { name: "robots", content: "noindex" }] };
    }
    const { item } = loaderData;
    const title = `${item.title} — Pixel2Tech`;
    const desc = `${item.category} · ${item.subcategory} — a Pixel2Tech case study covering the challenge, our approach and the outcome.`;
    const url = `/portfolio/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: item.img },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: item.img },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Portfolio", item: "/portfolio" },
              { "@type": "ListItem", position: 3, name: item.title, item: url },
            ],
          }),
        },
      ],
    };
  },
});

function PortfolioDetailPage() {
  const { item } = Route.useLoaderData();
  const gallery = getGallery(item);
  const related = getRelated(item);

  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-5 pt-16 md:px-10 md:pt-24 lg:pt-32">
        <FadeIn>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Portfolio
          </Link>
        </FadeIn>
      </section>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <FadeIn>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            <span className="rounded-full bg-muted px-3 py-1 text-foreground dark:bg-white/[0.06]">{item.category}</span>
            <span className="text-muted-foreground/60">/</span>
            <span>{item.subcategory}</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[56px]">
            {item.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            A {item.subcategory.toLowerCase()} project under our {item.category.toLowerCase()} practice — designed to help the client stand out, connect with the right audience, and turn attention into measurable growth.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-muted dark:border-white/10 dark:bg-white/[0.03]">
            <img
              src={item.img}
              alt={item.title}
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </FadeIn>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-5xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              Icon: Target,
              title: "The Challenge",
              body: `The client needed a ${item.subcategory.toLowerCase()} solution that felt distinctly theirs — one that could compete against bigger players without inflating cost, and stay flexible as the brand evolved.`,
            },
            {
              Icon: Wrench,
              title: "What We Did",
              body: `We ran a focused discovery, aligned on goals and audience, then designed and shipped the ${item.subcategory.toLowerCase()} end-to-end. Every decision was tied to a business outcome, not just aesthetics.`,
            },
            {
              Icon: TrendingUp,
              title: "The Result",
              body: `A polished, on-brand ${item.subcategory.toLowerCase()} that helped the client attract the right customers, improve engagement, and create a foundation the team can keep building on.`,
            },
          ].map(({ Icon, title, body }) => (
            <FadeIn key={title}>
              <div className="h-full rounded-2xl border border-border/70 bg-background p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-7">
                <div aria-hidden="true" className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h2 className="text-lg font-bold text-foreground sm:text-xl">{title}</h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Gallery</h2>
            <p className="mt-2 text-sm text-muted-foreground">A closer look at the work.</p>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, i) => (
              <FadeIn key={src + i} delay={0.05 * i}>
                <div className="overflow-hidden rounded-2xl border border-border bg-muted dark:border-white/10 dark:bg-white/[0.03]">
                  <img
                    src={src}
                    alt={`${item.title} — visual ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] h-full w-full object-cover transition hover:scale-[1.02]"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">More {item.category} work</h2>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <FadeIn key={r.slug}>
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: r.slug }}
                  className="group block overflow-hidden rounded-2xl border border-border bg-muted dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="relative aspect-[4/5]">
                    <img src={r.img} alt={r.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition group-hover:scale-105" />
                    <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                      <div className="text-[11px] uppercase tracking-widest opacity-70">{r.subcategory}</div>
                      <div className="mt-1 text-base font-semibold">{r.title}</div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
        <FadeIn>
          <div className="rounded-3xl bg-foreground px-6 py-14 text-center text-background sm:px-12 sm:py-20">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
              Have a project like this in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-background/70 sm:text-base">
              Tell us about your goals — we'll come back with a clear plan and a fair timeline.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </PageShell>
  );
}
