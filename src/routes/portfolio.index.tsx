import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { FadeIn } from "@/components/motion";
import { trackEvent } from "@/lib/analytics";
import { useState } from "react";
import { CATEGORIES, SUBS, WORK, type Category } from "@/lib/portfolio-data";

const OG_IMAGE = "https://pixel2tech.com/__l5e/assets-v1/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg";

export const Route = createFileRoute("/portfolio/")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio — Branding, Web & Product Work | Pixel2Tech" },
      { name: "description", content: "Selected Pixel2Tech work across branding, web design, UI/UX, video and custom platforms — 50+ projects shipped for growing brands worldwide." },
      { property: "og:title", content: "Portfolio — Branding, Web & Product Work | Pixel2Tech" },
      { property: "og:description", content: "Selected work from Pixel2Tech across branding, web, UI/UX, video and custom platforms." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel2tech.com/portfolio" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://pixel2tech.com/portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://pixel2tech.com/" },
            { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://pixel2tech.com/portfolio" },
          ],
        }),
      },
    ],
  }),
});

const STATS = [
  { value: "95%+", label: "Client Satisfaction", body: "We focus on quality work and strong client relationships." },
  { value: "3", label: "Years growing", body: "Building brands and digital experiences with passion." },
  { value: "50+", label: "Projects Completed", body: "Branding, websites, and marketing projects delivered." },
  { value: "15+", label: "Happy Clients", body: "Startups and growing businesses we've partnered with." },
];

function PortfolioPage() {
  const [cat, setCat] = useState<Category>("Creative");
  const [sub, setSub] = useState<string>(SUBS.Creative[0]);

  const onCat = (c: Category) => {
    setCat(c);
    setSub(SUBS[c][0]);
  };

  const items = WORK[cat][sub] ?? [];

  return (
    <PageShell>
      {/* Header */}
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[52px]">
                Our Work Speaks for Itself
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] text-muted-foreground sm:text-base">
                We create brands, websites, and digital experiences that help businesses grow, attract better clients, and increase sales.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-background pb-16 md:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <FadeIn>
            <div className="flex justify-center">
              <div className="inline-flex max-w-full flex-wrap justify-center gap-1 rounded-3xl bg-muted p-1.5 sm:rounded-full">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => onCat(c)}
                    aria-pressed={cat === c}
                    className={`min-h-11 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      cat === c ? "bg-foreground text-background shadow" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="mt-4 flex justify-center">
              <div className="inline-flex max-w-full flex-wrap justify-center gap-1 rounded-3xl bg-muted p-1.5 sm:rounded-full">
                {SUBS[cat].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSub(s)}
                    aria-pressed={sub === s}
                    className={`min-h-11 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      sub === s ? "bg-foreground text-background shadow" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Grid */}
          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((w, i) => (
              <FadeIn key={w.slug} delay={0.03 * i}>
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: w.slug }}
                  aria-label={`View case study: ${w.title}`}
                  data-cursor="expand"
                  onClick={() => trackEvent("portfolio_project_opened", { slug: w.slug, title: w.title })}
                  className="group block overflow-hidden rounded-2xl bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:rounded-3xl"
                >
                  <div className="relative aspect-[4/5]">
                    <img loading="lazy" decoding="async" src={w.img} alt={w.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    <div aria-hidden="true" className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-white sm:p-6">
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-widest text-white/90">{sub}</div>
                        <div className="mt-1 truncate text-base font-semibold sm:text-lg">{w.title}</div>
                      </div>
                      <span
                        aria-hidden="true"
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/90 text-neutral-900 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/60 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <FadeIn key={s.label} delay={0.05 * i}>
                <div className="rounded-2xl bg-background p-6 text-center shadow-sm sm:p-8">
                  <div className="text-3xl font-bold text-foreground sm:text-4xl">{s.value}</div>
                  <div className="mt-2 text-sm font-semibold text-foreground">{s.label}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 md:px-10 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[56px]">
              Ready to Take Your Brand to the Next Level?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] text-muted-foreground sm:text-base">
              Let&apos;s build something that not only looks great but helps your business grow faster and stand out in the market.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/contact" className="inline-flex min-h-12 items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition hover:opacity-90">
                Start Your Project
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageShell>
  );
}
