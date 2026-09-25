import { Suspense, useState } from "react";
import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Box,
  Check,
  GalleryHorizontal,
  Target,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { BookCallButton } from "@/components/book-call-button";
import { Faq, faqJsonLd } from "@/components/faq";
import { BookCarousel } from "@/components/book-carousel";
import { Coverflow3D } from "@/components/coverflow-3d";
import { VideoSpotlight, type SpotlightVideo } from "@/components/video-spotlight";
import { bookCoverAssets, type BookCover } from "@/assets/book-cover-assets";
import { lazyWithRetry } from "@/lib/lazy-with-retry";
import { classifyLegacyPath } from "@/lib/legacy-urls";
import { SITE, serviceAnchor } from "@/lib/site-config";
import {
  absoluteImageUrl,
  categoryFromSlug,
  categorySlug,
  getBrandName,
  getDeliverables,
  getItemBySlug,
  getRelated,
  getSubcategoryGallery,
  imageSrcSet,
  type PortfolioItem,
} from "@/lib/portfolio-data";
import { getProjectCopy } from "@/lib/portfolio-copy";
import { getProjectDetail } from "@/lib/portfolio-detail";
import affinityVideo1 from "@/assets/affinity-video-1.mp4.asset.json";
import affinityVideo2 from "@/assets/affinity-video-2.mp4.asset.json";
import affinityVideo3 from "@/assets/affinity-video-3.mp4.asset.json";
import affinityVideo4 from "@/assets/affinity-video-4.mp4.asset.json";
import madluvvVideo1 from "@/assets/madluvv-video-1.mp4.asset.json";
import madluvvVideo2 from "@/assets/madluvv-video-2.mp4.asset.json";
import madluvvVideo3 from "@/assets/madluvv-video-3.mp4.asset.json";
import madluvvVideo4 from "@/assets/madluvv-video-4.mp4.asset.json";
import madluvvVideo5 from "@/assets/madluvv-video-5.mp4.asset.json";
import madluvvVideo6 from "@/assets/madluvv-video-6.mp4.asset.json";
import madluvvVideo8 from "@/assets/madluvv-video-8.mp4.asset.json";
import madluvvVideo9 from "@/assets/madluvv-video-9.mp4.asset.json";
import madluvvVideo10 from "@/assets/madluvv-video-10.mp4.asset.json";
import madluvvVideo11 from "@/assets/madluvv-video-11.mp4.asset.json";
import madluvvVideo12 from "@/assets/madluvv-video-12.mp4.asset.json";
import madluvvVideo13 from "@/assets/madluvv-video-13.mp4.asset.json";
import madluvvVideo14 from "@/assets/madluvv-video-14.mp4.asset.json";

// three.js + drei is ~1 MB: only fetched when a visitor opens the 3D view on
// the book-cover case study, never on the other portfolio pages.
const InteractiveBookShowcase = lazyWithRetry(() =>
  import("@/components/book-3d-showcase").then((m) => ({ default: m.InteractiveBookShowcase })),
);
const preloadBookShowcase = () => void import("@/components/book-3d-showcase");

const BOOK_COVERS_SLUG = "book-cover-design-portfolio";
const NAYYER_SLUG = "nayyer-carpets-creative-direction-mockups";

const PROJECT_VIDEOS: Record<string, SpotlightVideo[]> = {
  "affinity-law-social-media-ad-creatives": [
    { src: affinityVideo1.url, title: "He accepted the first offer and couldn't go back" },
    { src: affinityVideo2.url, title: "Partly at fault? You may still have a claim" },
    { src: affinityVideo3.url, title: "Insurance companies check your social media" },
    { src: affinityVideo4.url, title: "What to expect after hiring a lawyer" },
  ],
  "madluvv-social-media-meta-ads": [
    { src: madluvvVideo1.url, title: "Creator review: new favourite eyebrow product" },
    { src: madluvvVideo2.url, title: "Mother's Day PSA" },
    { src: madluvvVideo3.url, title: "Beach day approved: waterproof brows" },
    { src: madluvvVideo4.url, title: "Brow Stamp Kit: easier than you expect" },
    { src: madluvvVideo5.url, title: "Simple brow routine with Laminate Me gel" },
    { src: madluvvVideo6.url, title: "Set Me Setting Spray for melting makeup" },
    { src: madluvvVideo8.url, title: "The science behind perfectly shaped brows" },
    { src: madluvvVideo9.url, title: "Clean stencil, clean brows" },
    { src: madluvvVideo10.url, title: "Brow Stamp ASMR moment" },
    { src: madluvvVideo11.url, title: "Celebrating Social Media Day with the community" },
    { src: madluvvVideo12.url, title: "The life-changing eyeliner hack" },
    { src: madluvvVideo13.url, title: "How to actually romanticise your life" },
    { src: madluvvVideo14.url, title: "Which brow shape is your favourite?" },
  ],
};

function categoryLinkSearch(category: string) {
  const cat = categoryFromSlug(category);
  return cat ? { category: categorySlug(cat) } : {};
}

export const Route = createFileRoute("/portfolio/$slug")({
  component: PortfolioDetailPage,
  loader: ({ params }) => {
    // Renamed slugs live in the legacy-URL map, which the server middleware
    // applies with a real 301. This covers in-app navigation to an old link.
    const legacy = classifyLegacyPath(`/portfolio/${params.slug}`);
    if (legacy?.type === "redirect") {
      throw redirect({ to: legacy.target, statusCode: 301 });
    }
    const item = getItemBySlug(params.slug);
    // A slug that does not exist is a genuine 404. Redirecting every unknown
    // slug to /portfolio would be a soft 404, which Google reports as
    // "Crawled - currently not indexed" instead of dropping the URL.
    if (!item) throw notFound();
    return { item };
  },

  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found | Pixel2Tech" }, { name: "robots", content: "noindex" }],
      };
    }
    const { item } = loaderData;
    const copy = getProjectCopy(item);
    const detail = getProjectDetail(item);
    const title = copy.metaTitle ?? `${item.title} — ${item.subcategory} case study | Pixel2Tech`;
    const desc = copy.metaDescription;
    const url = `${SITE.url}/portfolio/${item.slug}`;
    const image = absoluteImageUrl(item.img);
    const imageAlt = `${item.title}, a Pixel2Tech ${item.subcategory.toLowerCase()} project`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { property: "og:image:alt", content: imageAlt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
        { name: "twitter:image", content: image },
        { name: "twitter:image:alt", content: imageAlt },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            headline: item.title,
            name: item.title,
            description: desc,
            image,
            url,
            genre: `${item.category} · ${item.subcategory}`,
            creator: {
              "@type": "Organization",
              "@id": `${SITE.url}/#organization`,
              name: SITE.name,
              url: `${SITE.url}/`,
            },
          }),
        },
        faqJsonLd(detail.faqs),
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
              {
                "@type": "ListItem",
                position: 2,
                name: "Portfolio",
                item: `${SITE.url}/portfolio`,
              },
              { "@type": "ListItem", position: 3, name: item.title, item: url },
            ],
          }),
        },
      ],
    };
  },

  notFoundComponent: () => (
    <PageShell>
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Error 404
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Project not found
          </h1>
          <p className="mt-4 text-[15px] text-muted-foreground">
            This case study doesn&apos;t exist or has moved. Browse the portfolio to find it.
          </p>
          <Link
            to="/portfolio"
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90"
          >
            See our work
          </Link>
        </div>
      </section>
    </PageShell>
  ),
});

/* -------------------------------------------------------------------------- */

const panel = "rounded-2xl border border-border bg-background p-6 sm:p-8";
const eyebrow = "text-xs font-semibold uppercase tracking-widest text-muted-foreground";
const h2Class = "text-2xl font-bold tracking-tight text-foreground sm:text-3xl";

function BookShowcase({ covers }: { covers: BookCover[] }) {
  const [view, setView] = useState<"carousel" | "3d">("carousel");
  const [active, setActive] = useState(0);
  const tab = (selected: boolean) =>
    `inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
      selected ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <div>
      <div className="flex justify-center">
        <div
          role="group"
          aria-label="How to view the covers"
          className="inline-flex flex-wrap justify-center gap-1 rounded-full bg-muted p-1"
        >
          <button
            type="button"
            aria-pressed={view === "carousel"}
            onClick={() => setView("carousel")}
            className={tab(view === "carousel")}
          >
            <GalleryHorizontal className="h-4 w-4" aria-hidden="true" />
            Cover carousel
          </button>
          <button
            type="button"
            aria-pressed={view === "3d"}
            onClick={() => setView("3d")}
            onPointerEnter={preloadBookShowcase}
            onFocus={preloadBookShowcase}
            className={tab(view === "3d")}
          >
            <Box className="h-4 w-4" aria-hidden="true" />
            3D viewer
          </button>
        </div>
      </div>

      <div className="mt-8">
        {view === "3d" ? (
          <Suspense
            fallback={
              <div
                role="status"
                className="grid aspect-[4/3] w-full place-items-center rounded-3xl border border-border bg-muted text-sm text-muted-foreground sm:aspect-[16/10]"
              >
                Loading the 3D viewer…
              </div>
            }
          >
            <InteractiveBookShowcase
              covers={covers}
              initialIndex={active}
              onActiveChange={setActive}
            />
          </Suspense>
        ) : (
          <BookCarousel covers={covers} initialIndex={active} onActiveChange={setActive} />
        )}
      </div>
    </div>
  );
}

function CategoryShowcase({ item, images }: { item: PortfolioItem; images: string[] }) {
  const sub = item.subcategory;
  const all = [item.img, ...images];

  if (item.slug === BOOK_COVERS_SLUG) {
    return <BookShowcase covers={bookCoverAssets.items} />;
  }

  // Mobile app → phone frames
  if (sub === "Mobile Apps") {
    return (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {all.slice(0, 6).map((src, i) => (
          <div
            key={src + i}
            className="mx-auto w-full max-w-[260px] rounded-[2.25rem] border-[10px] border-neutral-900 bg-neutral-900 shadow-xl dark:border-neutral-800"
          >
            <div className="overflow-hidden rounded-[1.5rem] bg-muted">
              <img
                src={src}
                srcSet={imageSrcSet(src)}
                sizes="260px"
                alt={`${item.title} screen ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="aspect-[9/19] w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Websites / e-commerce / web apps → browser window mockup
  if (sub === "Websites" || sub === "E-Commerce" || sub === "Web Apps") {
    return (
      <div className="space-y-6">
        {all.slice(0, 3).map((src, i) => (
          <div
            key={src + i}
            className="overflow-hidden rounded-2xl border border-border bg-muted shadow-sm"
          >
            <div
              aria-hidden="true"
              className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-red-400/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
              <span className="h-2 w-2 rounded-full bg-green-400/70" />
              <span className="ml-3 h-4 w-40 max-w-[50%] rounded-full bg-background/70" />
            </div>
            <img
              src={src}
              srcSet={imageSrcSet(src)}
              sizes="(min-width: 1152px) 1072px, 100vw"
              alt={`${item.title} view ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  // Video work → the embedded player when there is one, plus stills
  if (sub === "Short Form" || sub === "Long Form" || sub === "Commercial") {
    return (
      <div className="space-y-8">
        {item.video && (
          <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[1.75rem] border border-border bg-black shadow-lg">
            <iframe
              src={item.video}
              title={`${item.title} video`}
              allow="autoplay; encrypted-media"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-presentation"
              className="aspect-[9/16] w-full"
            />
            {/* Blocks the provider's pop-out / open-in-new-tab control (top-right) */}
            <div
              aria-hidden="true"
              className="pointer-events-auto absolute right-0 top-0 h-16 w-24 bg-transparent"
            />
          </div>
        )}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {all.slice(0, 6).map((src, i) => (
            <div
              key={src + i}
              className="overflow-hidden rounded-2xl border border-border bg-muted"
            >
              <img
                src={src}
                srcSet={imageSrcSet(src)}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                alt={`${item.title} still ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Branding → brand board (hero + palette + type + tiles)
  if (sub === "Branding") {
    const palette = ["#0a0d1f", "#2b7fff", "#f5f2ec", "#111111", "#e7e2d6"];
    return (
      <div className="space-y-5">
        <div className="overflow-hidden rounded-2xl border border-border bg-muted">
          <img
            src={all[0]}
            srcSet={imageSrcSet(all[0]!)}
            sizes="(min-width: 1152px) 1072px, 100vw"
            alt={`${item.title} brand hero`}
            className="aspect-[16/9] w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="h-full rounded-2xl border border-border bg-background p-5 sm:p-6">
            <h3 className={eyebrow}>Color palette</h3>
            <ul className="mt-4 grid grid-cols-5 gap-2">
              {palette.map((c) => (
                <li key={c} className="min-w-0">
                  <div
                    className="h-16 rounded-lg border border-border sm:h-20"
                    style={{ backgroundColor: c }}
                  />
                  <div className="mt-2 truncate text-center font-mono text-[10px] text-muted-foreground sm:text-[11px]">
                    {c}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-full rounded-2xl border border-border bg-background p-5 sm:p-6">
            <h3 className={eyebrow}>Typography</h3>
            <div className="mt-4">
              <div className="break-words font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {getBrandName(item)}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">Display / Sora — 700</div>
            </div>
            <div className="mt-6">
              <div className="text-lg text-foreground">
                The quick brown fox jumps over the lazy dog.
              </div>
              <div className="mt-1 text-sm text-muted-foreground">Body / Manrope — 400</div>
            </div>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {all.slice(1, 4).map((src, i) => (
            <div
              key={src + i}
              className="overflow-hidden rounded-2xl border border-border bg-muted"
            >
              <img
                src={src}
                srcSet={imageSrcSet(src)}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                alt={`${item.title} brand asset ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Social media and creative direction → 3D coverflow of the posts
  if (sub === "Social Media") {
    const sliderImages = item.slider?.length ? item.slider : all.slice(0, 12);
    return (
      <Coverflow3D
        images={sliderImages}
        alt={(i) => `${item.title}: creative ${i + 1}`}
        aspect="4 / 5"
        label={`${getBrandName(item)} creatives`}
      />
    );
  }

  // Default (Print & Merchandise, Tools, Automation, etc.) — clean gallery
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {all.slice(0, 6).map((src, i) => (
        <div key={src + i} className="overflow-hidden rounded-2xl border border-border bg-muted">
          <img
            src={src}
            srcSet={imageSrcSet(src)}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            alt={`${item.title} visual ${i + 1}`}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function PortfolioDetailPage() {
  const { item } = Route.useLoaderData();
  const copy = getProjectCopy(item);
  const detail = getProjectDetail(item);
  const gallery = getSubcategoryGallery(item, item.images?.length ?? 6);
  const related = getRelated(item);
  const deliverables = copy.deliverables ?? getDeliverables(item);
  const videos = PROJECT_VIDEOS[item.slug] ?? [];
  const isNayyer = item.slug === NAYYER_SLUG;

  return (
    <PageShell>
      <article>
        {/* Hero */}
        <section className="bg-background pt-8 sm:pt-12 lg:pt-16">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <Link
              to="/portfolio"
              className="-ml-2 inline-flex min-h-11 items-center gap-2 rounded-full px-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All projects
            </Link>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              <Link
                to="/portfolio"
                search={categoryLinkSearch(item.category)}
                className="inline-flex min-h-8 items-center rounded-full bg-muted px-3 text-foreground transition hover:bg-muted/70"
              >
                {item.category}
              </Link>
              <span aria-hidden="true">/</span>
              <span>{item.subcategory}</span>
            </div>
            <h1 className="mt-4 break-words text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {item.title}
            </h1>

            <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-8">
              <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-base md:col-span-2">
                {copy.overview}
              </p>
              <dl className="grid grid-cols-2 gap-4 self-start rounded-2xl border border-border bg-background p-5 text-sm sm:grid-cols-3 sm:p-6 md:grid-cols-1">
                {item.client && (
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                      Client
                    </dt>
                    <dd className="mt-1 font-semibold text-foreground">{item.client}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Practice
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">{item.category}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Service
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">{item.subcategory}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* The work */}
        <section aria-labelledby="work-title" className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <p className={eyebrow}>The work</p>
            <h2 id="work-title" className={`mt-2 ${h2Class}`}>
              {item.client ? `What we made for ${item.client}` : "What we made"}
            </h2>
            <div className="mt-8">
              <CategoryShowcase item={item} images={gallery} />
            </div>

            {isNayyer && gallery.length > 0 && (
              <div className="mt-16 md:mt-24">
                <p className={eyebrow}>Product mockups</p>
                <h2 className={`mt-2 ${h2Class}`}>Carpets shown in real rooms</h2>
                <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                  We built realistic carpet mockups so Nayyer Carpets could present its designs in
                  furnished interiors. The same mockups are used on the brand&apos;s website and
                  social channels, which keeps the product imagery consistent everywhere.
                </p>
                <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {gallery.map((src, i) => (
                    <li
                      key={src}
                      className="overflow-hidden rounded-2xl border border-border bg-muted shadow-sm"
                    >
                      <img
                        src={src}
                        alt={`Nayyer Carpets carpet mockup ${i + 1}`}
                        className="aspect-square w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {videos.length > 0 && (
              <div className="mt-16 md:mt-24">
                <p className={eyebrow}>Video content</p>
                <h2 className={`mt-2 ${h2Class}`}>Short-form video creatives</h2>
                <p className="mt-3 max-w-2xl text-[15px] text-muted-foreground">
                  Vertical videos made for organic social and paid campaigns. Tap a video to play it
                  with sound.
                </p>
                <div className="mt-8">
                  <VideoSpotlight
                    videos={videos}
                    label={`${item.client ?? getBrandName(item)} video creatives`}
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Brief: deliverables, challenge, approach, outcome */}
        <section aria-labelledby="brief-title" className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <h2 id="brief-title" className="sr-only">
              Project brief
            </h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <div className={`h-full ${panel}`}>
                <h3 className={eyebrow}>Deliverables</h3>
                <ul className="mt-5 space-y-3">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-foreground">
                      <span
                        aria-hidden="true"
                        className="mt-px inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              {[
                { Icon: Target, title: "The challenge", body: copy.challenge },
                { Icon: Wrench, title: "Our approach", body: copy.approach },
              ].map(({ Icon, title, body }) => (
                <div key={title} className={`h-full ${panel}`}>
                  <div
                    aria-hidden="true"
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground sm:text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>

            <div className={`mt-5 lg:mt-8 ${panel}`}>
              <div
                aria-hidden="true"
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"
              >
                <TrendingUp className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold text-foreground sm:text-xl">The outcome</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {copy.outcome}
              </p>
              <dl className="mt-6 grid gap-4 md:grid-cols-3">
                {copy.results.map((r) => (
                  <div key={r.label} className="rounded-xl bg-muted px-5 py-4">
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                      {r.label}
                    </dt>
                    <dd className="mt-1 break-words font-heading text-xl font-bold leading-snug text-foreground sm:text-2xl">
                      {r.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Process, tools and why it matters */}
        <section aria-labelledby="process-title" className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <h2 id="process-title" className={h2Class}>
              How we did it
            </h2>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2">
              {detail.process.map((step, i) => (
                <li key={step.title} className="rounded-2xl border border-border bg-background p-6">
                  <p className={eyebrow}>Step {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <div className={panel}>
                <h3 className="text-lg font-bold text-foreground sm:text-xl">
                  Tools and platforms
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {detail.technologies.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border bg-muted px-3 py-1 text-xs text-foreground/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={panel}>
                <h3 className="text-lg font-bold text-foreground sm:text-xl">
                  Why this project matters
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {detail.whyItMatters}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section aria-labelledby="project-faq-title" className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-4xl px-5 md:px-10">
            <h2 id="project-faq-title" className={h2Class}>
              Questions about this project
            </h2>
            <Faq items={detail.faqs} className="mt-6" />
          </div>
        </section>

        {/* Related services + reading */}
        <section aria-labelledby="related-links-title" className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <h2 id="related-links-title" className="sr-only">
              Related services and articles
            </h2>
            <div className="grid gap-5 lg:grid-cols-2">
              <nav aria-label="Related services" className={panel}>
                <h3 className="text-lg font-bold text-foreground sm:text-xl">Related services</h3>
                <ul className="mt-4 space-y-1">
                  {detail.relatedServices.map((s) => (
                    <li key={s}>
                      <Link
                        to="/services"
                        hash={serviceAnchor(s)}
                        className="-mx-3 flex min-h-11 items-center justify-between gap-3 rounded-xl px-3 text-sm font-medium text-foreground transition hover:bg-muted"
                      >
                        {s}
                        <ArrowRight
                          className="h-4 w-4 shrink-0 text-muted-foreground"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav aria-label="Related articles" className={panel}>
                <h3 className="text-lg font-bold text-foreground sm:text-xl">Related articles</h3>
                <ul className="mt-4 space-y-1">
                  {detail.relatedReading.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: r.slug }}
                        className="-mx-3 flex min-h-11 items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
                      >
                        <span>{r.label}</span>
                        <ArrowRight
                          className="h-4 w-4 shrink-0 text-muted-foreground"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {/* More work */}
        {related.length > 0 && (
          <section aria-labelledby="related-work-title" className="bg-background pb-16 md:pb-24">
            <div className="mx-auto max-w-6xl px-5 md:px-10">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 id="related-work-title" className={h2Class}>
                  Related projects
                </h2>
                <Link
                  to="/portfolio"
                  search={categoryLinkSearch(item.category)}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
                >
                  See our work
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to="/portfolio/$slug"
                      params={{ slug: r.slug }}
                      className="group block overflow-hidden rounded-2xl border border-border bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <div className="relative aspect-[4/5]">
                        <img
                          src={r.img}
                          srcSet={imageSrcSet(r.img)}
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                          <p className="text-[11px] uppercase tracking-widest text-white/80">
                            {r.subcategory}
                          </p>
                          <h3 className="mt-1 line-clamp-2 text-base font-semibold">{r.title}</h3>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* CTA */}
        <section aria-labelledby="project-cta-title" className="bg-background pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="rounded-3xl bg-foreground px-6 py-12 text-center text-background sm:px-12 sm:py-16 lg:py-20">
              <h2
                id="project-cta-title"
                className="mx-auto max-w-2xl text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
              >
                Have a project like this in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-background/75 sm:text-base">
                Tell us what you&apos;re working on. We&apos;ll come back with a clear plan and a
                realistic timeline.
              </p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <BookCallButton
                  source={`portfolio_detail:${item.slug}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                />
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-background/30 px-6 text-sm font-semibold text-background transition hover:bg-background/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                >
                  Send a project brief
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
