import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { FadeIn } from "@/components/motion";
import { useState } from "react";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio — Pixel2Tech" },
      { name: "description", content: "Selected work from Pixel2Tech across branding, web design, UI UX and AI." },
      { property: "og:title", content: "Portfolio — Pixel2Tech" },
      { property: "og:description", content: "Selected work that helps brands grow." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
});

type Item = { title: string; img: string };

const CATEGORIES = ["Creative", "Design", "Video Editing"] as const;
type Category = typeof CATEGORIES[number];

const SUBS: Record<Category, string[]> = {
  Creative: ["Social Media", "Branding", "Print & Merchandise"],
  Design: ["Web Design", "UI / UX", "Mobile Apps"],
  "Video Editing": ["Reels & Shorts", "Ads", "YouTube"],
};

const WORK: Record<Category, Record<string, Item[]>> = {
  Creative: {
    "Social Media": [
      { title: "Product launch campaign", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Bakery brand posts", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Instagram grid design", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Skincare content series", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Cafe seasonal creatives", img: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Fashion editorial reels", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&auto=format&fit=crop&fm=webp&q=70" },
    ],
    Branding: [
      { title: "Coffee house identity", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Logo & brand system", img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Studio rebrand", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Restaurant brand guide", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Startup visual identity", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Wellness brand mark", img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=900&auto=format&fit=crop&fm=webp&q=70" },
    ],
    "Print & Merchandise": [
      { title: "Business card set", img: "https://images.unsplash.com/photo-1606115915090-be18fea23ec7?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Packaging mockups", img: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Merchandise tees", img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Brand stationery kit", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Menu & signage", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Tote bag prints", img: "https://images.unsplash.com/photo-1544441893-675973e31985?w=900&auto=format&fit=crop&fm=webp&q=70" },
    ],
  },
  Design: {
    "Web Design": [
      { title: "SaaS marketing site", img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Agency portfolio", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "E-commerce redesign", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Landing page series", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Coaching brand site", img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Studio one-pager", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&auto=format&fit=crop&fm=webp&q=70" },
    ],
    "UI / UX": [
      { title: "Fintech dashboard", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Booking flow redesign", img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Analytics product", img: "https://images.unsplash.com/photo-1551288049-4b39c6b5d9f6?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Onboarding wizard", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "CRM workspace", img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Design system", img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&auto=format&fit=crop&fm=webp&q=70" },
    ],
    "Mobile Apps": [
      { title: "Fitness tracker app", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Food delivery app", img: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Banking app redesign", img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Meditation app", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Travel companion", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Habit tracker", img: "https://images.unsplash.com/photo-1522199873717-bc67b1a5e32b?w=900&auto=format&fit=crop&fm=webp&q=70" },
    ],
  },
  "Video Editing": {
    "Reels & Shorts": [
      { title: "Brand reel series", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Product teaser shorts", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Behind the scenes cuts", img: "https://images.unsplash.com/photo-1493804714600-6edb1cd93080?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Founder story reels", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Event highlights", img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Recipe shorts", img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=900&auto=format&fit=crop&fm=webp&q=70" },
    ],
    Ads: [
      { title: "Facebook video ads", img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "TikTok ad series", img: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "YouTube pre-roll", img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Testimonial ad cuts", img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "App promo videos", img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Explainer animations", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop&fm=webp&q=70" },
    ],
    YouTube: [
      { title: "Long-form edit", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Podcast video edit", img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Tutorial series", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Vlog cuts", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Interview episodes", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&auto=format&fit=crop&fm=webp&q=70" },
      { title: "Documentary snippets", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&auto=format&fit=crop&fm=webp&q=70" },
    ],
  },
};

const STATS = [
  { value: "95%+", label: "Client Satisfaction", body: "We focus on quality work and strong client relationships." },
  { value: "3+", label: "Years of Experience", body: "Building brands and digital experiences with passion." },
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
              <FadeIn key={`${cat}-${sub}-${w.title}`} delay={0.03 * i}>
                <div className="group cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 sm:rounded-3xl">
                  <div className="relative aspect-[4/5]">
                    <img loading="lazy" decoding="async" src={w.img} alt={w.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                    <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6">
                      <div className="text-[11px] uppercase tracking-widest opacity-70 sm:text-xs">{sub}</div>
                      <div className="mt-1 text-base font-semibold sm:text-lg">{w.title}</div>
                    </div>
                  </div>
                </div>
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
