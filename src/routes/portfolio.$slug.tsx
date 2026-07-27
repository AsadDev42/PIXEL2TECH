import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { FadeIn } from "@/components/motion";
import { ArrowLeft, ArrowRight, Target, Wrench, TrendingUp, Check, Play } from "lucide-react";
import {
  getItemBySlug,
  getRelated,
  getSubcategoryGallery,
  getBrandName,
  getDeliverables,
  type PortfolioItem,
} from "@/lib/portfolio-data";

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
    const desc = `${item.category} · ${item.subcategory} — a Pixel2Tech case study covering the brand, our approach and the outcome.`;
    const url = `https://pixel2tech.com/portfolio/${params.slug}`;
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://pixel2tech.com/" },
              { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://pixel2tech.com/portfolio" },
              { "@type": "ListItem", position: 3, name: item.title, item: url },
            ],
          }),
        },
      ],
    };
  },
});

function CategoryShowcase({ item, images }: { item: PortfolioItem; images: string[] }) {
  const sub = item.subcategory;
  const all = [item.img, ...images];

  // Mobile app → phone frames
  if (sub === "Mobile Apps") {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {all.slice(0, 6).map((src, i) => (
          <FadeIn key={src + i} delay={0.04 * i}>
            <div className="mx-auto w-full max-w-[260px] rounded-[2.25rem] border-[10px] border-neutral-900 bg-neutral-900 shadow-xl dark:border-neutral-800">
              <div className="overflow-hidden rounded-[1.5rem] bg-muted">
                <img src={src} alt={`${item.title} screen ${i + 1}`} loading="lazy" decoding="async" className="aspect-[9/19] w-full object-cover" />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    );
  }

  // Websites / e-commerce / web apps → browser chrome mockup
  if (sub === "Websites" || sub === "E-Commerce" || sub === "Web Apps") {
    return (
      <div className="space-y-6">
        {all.slice(0, 3).map((src, i) => (
          <FadeIn key={src + i} delay={0.05 * i}>
            <div className="overflow-hidden rounded-2xl border border-border bg-muted shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
              <div className="flex items-center gap-1.5 border-b border-border/70 bg-muted/60 px-4 py-2.5 dark:border-white/10">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className="ml-3 truncate text-xs text-muted-foreground">{getBrandName(item).toLowerCase().replace(/\s+/g, "")}.com</span>
              </div>
              <img src={src} alt={`${item.title} view ${i + 1}`} loading={i === 0 ? "eager" : "lazy"} decoding="async" className="aspect-[16/10] w-full object-cover" />
            </div>
          </FadeIn>
        ))}
      </div>
    );
  }

  // Video categories → embedded player (when available) + thumbnails with play overlay
  if (sub === "Short Form" || sub === "Long Form" || sub === "Commercial") {
    return (
      <div className="space-y-8">
        {item.video && (
          <FadeIn>
            <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[1.75rem] border border-border bg-black shadow-lg dark:border-white/10">
              <iframe
                src={item.video}
                title={`${item.title} video`}
                allow="autoplay; encrypted-media"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                className="aspect-[9/16] w-full"
              />
              {/* Blocks the provider's pop-out / open-in-new-tab control (top-right) */}
              <div aria-hidden="true" className="pointer-events-auto absolute right-0 top-0 h-16 w-24 bg-transparent" />
            </div>

          </FadeIn>
        )}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {all.slice(0, 6).map((src, i) => (
            <FadeIn key={src + i} delay={0.04 * i}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-black dark:border-white/10">
                <img src={src} alt={`${item.title} clip ${i + 1}`} loading="lazy" decoding="async" className="aspect-video w-full object-cover opacity-90 transition group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-neutral-900 shadow-lg transition group-hover:scale-110">
                    <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    );
  }


  // Branding → brand board (hero + palette + tiles)
  if (sub === "Branding") {
    const palette = ["#0a0d1f", "#2b7fff", "#f5f2ec", "#111111", "#e7e2d6"];
    return (
      <div className="space-y-5">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl border border-border bg-muted dark:border-white/10 dark:bg-white/[0.03]">
            <img src={all[0]} alt={`${item.title} brand hero`} className="aspect-[16/9] w-full object-cover" loading="eager" decoding="async" />
          </div>
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-2">
          <FadeIn delay={0.05}>
            <div className="h-full rounded-2xl border border-border bg-background p-6 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Color palette</div>
              <div className="mt-4 flex overflow-hidden rounded-xl">
                {palette.map((c) => (
                  <div key={c} className="h-20 flex-1" style={{ backgroundColor: c }} title={c} />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-5 gap-2 text-[11px] text-muted-foreground">
                {palette.map((c) => (<div key={c} className="text-center font-mono">{c}</div>))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-background p-6 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Typography</div>
              <div className="mt-4">
                <div className="font-heading text-4xl font-bold tracking-tight text-foreground">{getBrandName(item)}</div>
                <div className="mt-1 text-sm text-muted-foreground">Display / Sora — 700</div>
              </div>
              <div className="mt-6">
                <div className="text-lg text-foreground">The quick brown fox jumps over the lazy dog.</div>
                <div className="mt-1 text-sm text-muted-foreground">Body / Manrope — 400</div>
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {all.slice(1, 4).map((src, i) => (
            <FadeIn key={src + i} delay={0.05 * i}>
              <div className="overflow-hidden rounded-2xl border border-border bg-muted dark:border-white/10 dark:bg-white/[0.03]">
                <img src={src} alt={`${item.title} brand asset ${i + 1}`} loading="lazy" decoding="async" className="aspect-square w-full object-cover" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    );
  }

  // Social Media → square posts grid
  if (sub === "Social Media") {
    return (
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 sm:gap-4">
        {all.slice(0, 6).map((src, i) => (
          <FadeIn key={src + i} delay={0.03 * i}>
            <div className="overflow-hidden rounded-xl border border-border bg-muted dark:border-white/10 dark:bg-white/[0.03]">
              <img src={src} alt={`${item.title} post ${i + 1}`} loading="lazy" decoding="async" className="aspect-square w-full object-cover transition hover:scale-105" />
            </div>
          </FadeIn>
        ))}
      </div>
    );
  }

  // Default (Print & Merchandise, Tools, Automation, etc.) — clean gallery
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {all.slice(0, 6).map((src, i) => (
        <FadeIn key={src + i} delay={0.04 * i}>
          <div className="overflow-hidden rounded-2xl border border-border bg-muted dark:border-white/10 dark:bg-white/[0.03]">
            <img src={src} alt={`${item.title} visual ${i + 1}`} loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover transition hover:scale-[1.02]" />
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

function PortfolioDetailPage() {
  const { item } = Route.useLoaderData();
  const gallery = getSubcategoryGallery(item);
  const related = getRelated(item);
  const brand = getBrandName(item);
  const deliverables = getDeliverables(item);

  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-5 pt-16 md:px-10 md:pt-24 lg:pt-32">
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

      {/* Hero: brand meta + summary */}
      <section className="mx-auto max-w-6xl px-5 pt-8 md:px-10 md:pt-10">
        <FadeIn>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            <span className="rounded-full bg-muted px-3 py-1 text-foreground dark:bg-white/[0.06]">{item.category}</span>
            <span className="text-muted-foreground/60">/</span>
            <span>{item.subcategory}</span>
          </div>
          <h1 className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[56px]">
            {item.title}
          </h1>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                A {item.subcategory.toLowerCase()} project we shipped for <span className="font-semibold text-foreground">{brand}</span>.
                We designed the full experience end-to-end — from strategy and concept to final production — to help the brand stand out,
                connect with the right audience, and turn attention into measurable growth.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-5 dark:border-white/10 dark:bg-white/[0.03] sm:p-6">
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">Brand</dt>
                  <dd className="mt-1 font-semibold text-foreground">{brand}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">Practice</dt>
                  <dd className="mt-1 font-semibold text-foreground">{item.category}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">Service</dt>
                  <dd className="mt-1 font-semibold text-foreground">{item.subcategory}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">Year</dt>
                  <dd className="mt-1 font-semibold text-foreground">2025</dd>
                </div>
              </dl>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Category-specific showcase */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <FadeIn>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">The Work</div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">What we designed for {brand}</h2>
            </div>
          </div>
        </FadeIn>
        <CategoryShowcase item={item} images={gallery} />
      </section>

      {/* Deliverables + Story */}
      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
        <div className="grid gap-8 lg:grid-cols-3">
          <FadeIn>
            <div className="h-full rounded-2xl border border-border bg-background p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Deliverables</div>
              <ul className="mt-5 space-y-3">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          {[
            { Icon: Target, title: "The Challenge", body: `${brand} needed a ${item.subcategory.toLowerCase()} solution that felt distinctly theirs — one that could compete against bigger players without inflating cost, and stay flexible as the brand evolved.` },
            { Icon: Wrench, title: "What We Did", body: `We ran a focused discovery, aligned on goals and audience, then designed and shipped the ${item.subcategory.toLowerCase()} end-to-end. Every decision tied to a business outcome, not just aesthetics.` },
            { Icon: TrendingUp, title: "The Result", body: `A polished, on-brand ${item.subcategory.toLowerCase()} that helped ${brand} attract the right customers, improve engagement, and create a foundation the team can keep building on.` },
          ].slice(0, 2).map(({ Icon, title, body }) => (
            <FadeIn key={title}>
              <div className="h-full rounded-2xl border border-border bg-background p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
                <div aria-hidden="true" className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-foreground sm:text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
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
      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32">
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
