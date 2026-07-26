import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { FadeIn } from "@/components/motion";
import { useState } from "react";
import { CATEGORIES, SUBS, WORK, type Category } from "@/lib/portfolio-data";

const OG_IMAGE = "/__l5e/assets-v1/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio — Branding, Web & Product Work | Pixel2Tech" },
      { name: "description", content: "Selected Pixel2Tech work across branding, web design, UI/UX, video and custom platforms — 50+ projects shipped for growing brands worldwide." },
      { property: "og:title", content: "Portfolio — Branding, Web & Product Work | Pixel2Tech" },
      { property: "og:description", content: "Selected work from Pixel2Tech across branding, web, UI/UX, video and custom platforms." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Portfolio", item: "/portfolio" },
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
      <section className="bg-background pb-10 pt-10 sm:pb-14 sm:pt-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
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
      <section className="bg-background pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <FadeIn>
            <div className="flex justify-center">
              <div className="inline-flex rounded-full bg-muted p-1.5">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => onCat(c)}
                    className={`min-h-10 rounded-full px-5 py-2 text-sm font-semibold transition ${
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
              <div className="inline-flex flex-wrap justify-center rounded-full bg-muted p-1.5">
                {SUBS[cat].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSub(s)}
                    className={`min-h-10 rounded-full px-5 py-2 text-sm font-semibold transition ${
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
                  onClick={() => trackEvent("portfolio_project_opened", { slug: w.slug, title: w.title })}
                  className="group block overflow-hidden rounded-2xl bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:rounded-3xl"
                >
                  <div className="relative aspect-[4/5]">
                    <img loading="lazy" decoding="async" src={w.img} alt={w.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                    <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6">
                      <div className="text-[11px] uppercase tracking-widest opacity-70 sm:text-xs">{sub}</div>
                      <div className="mt-1 text-base font-semibold sm:text-lg">{w.title}</div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
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
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
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
