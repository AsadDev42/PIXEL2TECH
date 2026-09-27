import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Pause, Phone, Play, Star, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

import { PageShell } from "@/components/site-chrome";
import { LoopSlider } from "@/components/loop-slider";
import { AutoVideo } from "@/components/auto-video";
import { BookCallButton } from "@/components/book-call-button";
import { ContactForm } from "@/components/contact-form";
import { Faq, faqJsonLd, type FaqItem } from "@/components/faq";
import { ResponsiveImage } from "@/components/responsive-image";
import { TeamSlider } from "@/components/team-slider";
import { VideoTestimonials } from "@/components/video-testimonials";
import { trackEvent } from "@/lib/analytics";
import { getLatestPostSummaries } from "@/lib/blog-index";
import {
  heroColumns,
  heroLcpImage,
  heroMobileTiles,
  workItems,
  type HeroMedia,
} from "@/lib/home-media";
import { SERVICES, SITE, STATS, serviceAnchor } from "@/lib/site-config";
import { TEAM, TEAM_SIZE } from "@/lib/team";

import officeStudioAsset from "@/assets/opt-office-studio-2-800.webp.asset.json";
import founderPortrait from "@/assets/opt-founder-portrait-540.webp.asset.json";
import founderPortrait1080 from "@/assets/opt-founder-portrait-1080.webp.asset.json";
import indVahub from "@/assets/ind-vahub.png.asset.json";
import indSwishtag from "@/assets/ind-swishtag.webp.asset.json";
import indBiscuits from "@/assets/ind-biscuits.webp.asset.json";
import indCave from "@/assets/ind-cave.webp.asset.json";
import indEscada from "@/assets/ind-escada.webp.asset.json";
import indGallop from "@/assets/ind-gallop.webp.asset.json";
import indMixmasters from "@/assets/ind-mixmasters.webp.asset.json";
import indAchhsoft from "@/assets/ind-achhsoft.webp.asset.json";
import indLocks from "@/assets/ind-locks.webp.asset.json";
import indHolloway from "@/assets/ind-holloway.webp.asset.json";
import indCoinmarketfees from "@/assets/ind-coinmarketfees.webp.asset.json";
import indMadluvv from "@/assets/ind-madluvv.png.asset.json";
import indMadluvvWhite from "@/assets/ind-madluvv-white.png.asset.json";

/* ------------------------------------------------------------------------ */
/* Page-wide layout and type scale (one of each, used by every section).    */
/* ------------------------------------------------------------------------ */

const CONTAINER = "mx-auto max-w-7xl px-5 md:px-10";
const SECTION_Y = "py-16 md:py-24";
const H2 = "text-3xl font-bold tracking-tight text-foreground sm:text-4xl";
const LEAD = "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground";
const EYEBROW = "text-xs font-semibold uppercase tracking-widest text-muted-foreground";
const BTN =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold";
const BTN_PRIMARY = `${BTN} bg-foreground text-background transition-opacity hover:opacity-90`;
const BTN_SECONDARY = `${BTN} border border-border bg-background text-foreground transition-colors hover:bg-muted`;

/* ------------------------------------------------------------------------ */
/* Head: title, meta, one hero preload and JSON-LD.                         */
/* ------------------------------------------------------------------------ */

const OG_IMAGE =
  "https://pixel2tech.com/__l5e/assets-v1/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg";
const LOGO_URL =
  "https://pixel2tech.com/__l5e/assets-v1/ae4a7ff7-7a55-46ec-a545-ecb94ff2d14b/pixel2tech-logo.png";

const TITLE = "Pixel2Tech | Branding, Web Design & Video Studio in Lahore";
const DESCRIPTION =
  "Pixel2Tech is a creative and web studio in Lahore, Pakistan: branding, websites, apps, video and automation for clients worldwide. Book a free call.";

/**
 * Rendered width of a hero tile. The first phone tile and the first image of
 * the middle desktop column are the same file, so a single preload with these
 * sizes serves both layouts.
 */
const HERO_TILE_SIZES = "(max-width: 479px) 30vw, (max-width: 767px) 144px, 170px";

const HOME_FAQS: FaqItem[] = [
  {
    q: "What services does Pixel2Tech offer?",
    a: "Branding and design, website development, WordPress and Shopify stores, custom platforms and apps, automation and CRM, AI solutions, SEO, social media and email, and video editing and ads. All of it is done in-house.",
  },
  {
    q: "How long does a typical project take?",
    a: "Branding takes 2–3 weeks, websites 3–6 weeks, and custom software depends on scope. We share a clear timeline before starting.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on scope, but most projects start from a fixed package we agree on upfront. Book a free strategy call and we'll give you a clear quote.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We're based in Lahore, Pakistan and work with clients across the US, UK, Gulf, and Europe — communication over email, WhatsApp, and Google Meet.",
  },
  {
    q: "Can you handle both design and development?",
    a: "Yes. Design, development, content, and deployment all happen in-house, so there are no hand-offs between vendors.",
  },
  {
    q: "What happens after I book a strategy call?",
    a: "We discuss your goals on a 30-minute call, send a proposal with scope and timeline, and start once you approve.",
  },
];

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.url}/` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: `${SITE.url}/` },
      // The only preload on the page: the first hero tile (phone and desktop).
      {
        rel: "preload",
        as: "image",
        href: heroLcpImage.src,
        imageSrcSet: heroLcpImage.srcSet,
        imageSizes: HERO_TILE_SIZES,
        fetchPriority: "high",
      },
    ],
    scripts: [
      faqJsonLd(HOME_FAQS),
      {
        type: "application/ld+json",
        // Same @id as the Organization in __root, so search engines read one
        // business entity with these local-business details added to it.
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${SITE.url}/#organization`,
          name: SITE.name,
          description: SITE.shortDescription,
          url: SITE.url,
          image: OG_IMAGE,
          logo: LOGO_URL,
          email: SITE.email,
          telephone: SITE.phoneE164,
          address: { "@type": "PostalAddress", ...SITE.address },
          areaServed: "Worldwide",
          priceRange: "$$",
          numberOfEmployees: { "@type": "QuantitativeValue", value: TEAM_SIZE },
          // Matches SITE.hours.
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "10:00",
              closes: "16:00",
            },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${SITE.name} services`,
            itemListElement: SERVICES.map((name) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name },
            })),
          },
        }),
      },
    ],
  }),
});

/* ------------------------------------------------------------------------ */
/* Hero                                                                      */
/* ------------------------------------------------------------------------ */

function HeroTile({ media, paused }: { media: HeroMedia; paused: boolean }) {
  const box = "aspect-[9/16] w-full overflow-hidden rounded-xl bg-muted lg:rounded-2xl";
  if (media.kind === "video") {
    return <AutoVideo src={media.src} poster={media.poster} paused={paused} className={box} />;
  }
  return (
    <div className={box}>
      <img
        src={media.src}
        srcSet={media.srcSet}
        sizes={HERO_TILE_SIZES}
        width={384}
        height={683}
        alt=""
        loading="lazy"
        decoding="async"
        draggable={false}
        className="pointer-events-none h-full w-full select-none object-cover"
      />
    </div>
  );
}

function Hero() {
  const [motionPaused, setMotionPaused] = useState(false);

  return (
    <section aria-labelledby="home-hero-title" className="bg-background">
      <div
        className={`${CONTAINER} grid items-center gap-10 py-12 sm:py-16 md:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-20`}
      >
        <div className="min-w-0">
          <h1
            id="home-hero-title"
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            One studio. <span className="block text-primary">Not ten freelancers.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            A creative and web studio in Lahore, Pakistan. We design brands, build websites and
            apps, produce video and automate busywork for clients worldwide.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BookCallButton source="home_hero" className={`${BTN_PRIMARY} w-full sm:w-auto`} />
            <Link to="/portfolio" className={`${BTN_SECONDARY} w-full sm:w-auto`}>
              See our work
            </Link>
          </div>
        </div>

        {/* Phones: still tiles only (no video, no animation). Decorative. */}
        <div
          aria-hidden="true"
          className="mx-auto grid w-full max-w-md grid-cols-3 gap-2 md:hidden"
        >
          {heroMobileTiles.map((tile) => (
            <div key={tile.src} className="aspect-[3/4] overflow-hidden rounded-xl bg-muted">
              <img
                src={tile.src}
                srcSet={tile.srcSet}
                sizes={HERO_TILE_SIZES}
                width={384}
                height={512}
                alt=""
                loading="lazy"
                decoding="async"
                draggable={false}
                className="pointer-events-none h-full w-full select-none object-cover"
              />
            </div>
          ))}
        </div>

        {/* md and up: three slowly looping columns, with a pause control. */}
        <div className="relative hidden w-full md:block">
          <div
            aria-hidden="true"
            className="ml-auto grid h-[440px] w-full max-w-[560px] grid-cols-3 gap-2 lg:h-[520px] lg:gap-3 xl:h-[580px]"
          >
            {heroColumns.map((column, ci) => (
              <LoopSlider
                key={ci}
                axis="y"
                className="h-full"
                direction={ci % 2 === 0 ? "up" : "down"}
                speed={30}
                autoplay={!motionPaused}
                gapClassName="gap-2 lg:gap-3"
                items={column}
                keyFor={(_m, i) => `${ci}-${i}`}
                renderItem={(media) => <HeroTile media={media} paused={motionPaused} />}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMotionPaused((p) => !p)}
            className="absolute bottom-3 right-3 z-10 inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background px-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted motion-reduce:hidden"
          >
            {motionPaused ? (
              <Play className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Pause className="h-4 w-4" aria-hidden="true" />
            )}
            {motionPaused ? "Play motion" : "Pause motion"}
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* Brands                                                                    */
/* ------------------------------------------------------------------------ */

const BRANDS: { name: string; src: string; darkSrc?: string }[] = [
  { name: "VA Hub PRO", src: indVahub.url },
  { name: "Swishtag", src: indSwishtag.url },
  { name: "Biscuit's Backyard", src: indBiscuits.url },
  { name: "Cave Magazine", src: indCave.url },
  { name: "Escada", src: indEscada.url },
  { name: "Gallop", src: indGallop.url },
  { name: "Mix Masters", src: indMixmasters.url },
  { name: "AchhSoft", src: indAchhsoft.url },
  { name: "Locks & Co", src: indLocks.url },
  { name: "Holloway Diamonds", src: indHolloway.url },
  { name: "Coinmarketfees", src: indCoinmarketfees.url },
  { name: "MADLUVV", src: indMadluvv.url, darkSrc: indMadluvvWhite.url },
];

function Brands() {
  return (
    <section aria-labelledby="home-brands-title" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-10">
        <h2
          id="home-brands-title"
          className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          Brands we&apos;ve worked with
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-[15px]">
          From startups to established businesses in e-commerce, beauty, fashion and professional
          services.
        </p>
      </div>
      <LoopSlider
        items={BRANDS}
        keyFor={(b, i) => `${b.name}-${i}`}
        direction="rtl"
        speed={40}
        gapClassName="gap-14 sm:gap-20"
        className="mt-10 sm:mt-12"
        ariaLabel="Brands we've worked with"
        renderItem={(b) => (
          <div className="flex h-6 w-20 shrink-0 items-center justify-center sm:h-8 sm:w-28">
            <img
              loading="lazy"
              decoding="async"
              src={b.src}
              alt={b.name}
              draggable={false}
              className={`pointer-events-none h-6 max-w-full object-contain opacity-80 transition hover:opacity-100 sm:h-8 ${b.darkSrc ? "dark:hidden" : "dark:invert"}`}
            />
            {b.darkSrc ? (
              <img
                loading="lazy"
                decoding="async"
                src={b.darkSrc}
                alt={b.name}
                draggable={false}
                className="pointer-events-none hidden h-6 max-w-full object-contain opacity-80 transition hover:opacity-100 sm:h-8 dark:block"
              />
            ) : null}
          </div>
        )}
      />
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* What we make (the nine canonical services)                                */
/* ------------------------------------------------------------------------ */

function WhatWeMake() {
  return (
    <section aria-labelledby="home-services-title" className={`bg-background ${SECTION_Y}`}>
      <div className={CONTAINER}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 id="home-services-title" className={H2}>
              What we <span className="text-primary">make</span>
            </h2>
            <p className={LEAD}>
              Branding, websites and stores, apps, automation, search, social and video, all done
              in-house. Drag to explore.
            </p>
          </div>
          <Link to="/services" className={`${BTN_SECONDARY} shrink-0 self-start sm:self-auto`}>
            All services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <LoopSlider
        items={workItems}
        keyFor={(w, i) => `${w.title}-${i}`}
        direction="ltr"
        speed={40}
        pauseOnHover
        gapClassName="gap-4 sm:gap-5"
        className="mt-8 sm:mt-10"
        ariaLabel="What we make"
        pauseControlLabel="services slider"
        renderItem={(w) => (
          <Link
            to="/services"
            draggable={false}
            data-cursor="expand"
            className="group relative block aspect-[3/4] w-[240px] shrink-0 overflow-hidden rounded-2xl bg-neutral-900 sm:w-[280px] sm:rounded-3xl lg:w-[320px]"
          >
            {w.video ? (
              <AutoVideo
                src={w.img}
                poster={w.poster}
                className="pointer-events-none h-full w-full opacity-90 transition duration-700 group-hover:scale-110"
              />
            ) : (
              <img
                loading="lazy"
                decoding="async"
                src={w.img}
                width={640}
                height={853}
                alt=""
                draggable={false}
                className="pointer-events-none h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-110"
              />
            )}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent"
            />
            <span className="absolute inset-x-0 top-0 p-4 text-center text-base font-semibold text-white drop-shadow sm:p-5 sm:text-lg">
              {w.title}
            </span>
          </Link>
        )}
      />
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* Approach (dark band, founder portrait with floating badges)               */
/* ------------------------------------------------------------------------ */

const portraitPerson = TEAM.find((m) => m.profile === "/asad-farooq");

function FloatingBadge({
  className,
  delay = 0,
  children,
}: {
  className: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute z-10 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl shadow-black/20 sm:px-5 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Approach() {
  return (
    <section
      aria-labelledby="home-approach-title"
      className="bg-neutral-950 text-white dark:bg-background dark:text-foreground"
    >
      <div
        className={`${CONTAINER} grid items-center gap-12 py-16 md:grid-cols-2 md:py-24 lg:py-32`}
      >
        <div className="min-w-0">
          <h2
            id="home-approach-title"
            className="text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
          >
            Brand, website and video from <span className="text-[#4DA3FF]">one studio</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 dark:text-muted-foreground">
            Most businesses hire a designer for the logo, a developer for the site and someone else
            for reels, then spend weeks getting them to agree. We do all three in-house, so the
            colors, type and tone carry through from the first sketch to launch day and the
            campaigns after it.
          </p>
          {portraitPerson ? (
            <p className="mt-8 text-sm text-white/70 dark:text-muted-foreground">
              <Link
                to="/asad-farooq"
                className="font-semibold text-white underline underline-offset-4 hover:text-[#4DA3FF] dark:text-foreground"
              >
                {portraitPerson.name}
              </Link>
              , {portraitPerson.role}
            </p>
          ) : null}
        </div>

        <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px]">
          <FloatingBadge className="left-0 top-[34%] sm:-left-4 lg:-left-8" delay={0.6}>
            <Star className="h-5 w-5 shrink-0 fill-yellow-400 text-yellow-400" aria-hidden="true" />
            <div className="text-left">
              <div className="text-sm font-bold text-card-foreground">
                {STATS.rating} client rating
              </div>
              <div className="text-xs text-muted-foreground">{STATS.clients} happy clients</div>
            </div>
          </FloatingBadge>
          <div className="mt-10 aspect-square w-full overflow-hidden rounded-full">
            <img
              loading="lazy"
              decoding="async"
              src={founderPortrait.url}
              srcSet={`${founderPortrait.url} 540w, ${founderPortrait1080.url} 1080w`}
              sizes="(max-width: 640px) 90vw, 520px"
              width={540}
              height={707}
              alt={portraitPerson ? `Portrait of ${portraitPerson.name}` : ""}
              className="h-full w-full object-contain"
            />
          </div>
          <FloatingBadge className="right-0 top-[68%] sm:-right-4 lg:-right-8">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary">
              <TrendingUp className="h-4 w-4 text-primary-foreground" aria-hidden="true" />
            </span>
            <div className="text-left">
              <div className="text-sm font-bold text-card-foreground">
                {STATS.projects} projects shipped
              </div>
              <div className="text-xs text-muted-foreground">
                Since {STATS.foundingYear}, {TEAM_SIZE} people in-house
              </div>
            </div>
          </FloatingBadge>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* Team and studio                                                           */
/* ------------------------------------------------------------------------ */

function Team() {
  return (
    <section aria-labelledby="home-team-title" className={`bg-background ${SECTION_Y}`}>
      <div
        className={`${CONTAINER} flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between`}
      >
        <div className="max-w-2xl">
          <h2 id="home-team-title" className={H2}>
            Meet the people behind the work
          </h2>
          <p className={LEAD}>
            Designers, developers and video editors: {TEAM_SIZE} of us, all in-house.
          </p>
        </div>
        <Link to="/about" className={`${BTN_SECONDARY} shrink-0 self-start sm:self-auto`}>
          About the team
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      <TeamSlider className="mt-10 sm:mt-12" />
    </section>
  );
}

const STUDIO_FACTS = [
  { label: "Team members", value: String(TEAM_SIZE) },
  { label: "Projects shipped", value: STATS.projects },
  { label: "Founded", value: STATS.foundingYear },
];

function Studio() {
  return (
    <section aria-labelledby="home-studio-title" className={`bg-muted ${SECTION_Y}`}>
      <div className={`${CONTAINER} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
        <figure>
          <img
            src={officeStudioAsset.url}
            alt="Pixel2Tech designers and developers working at their desks"
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
          <figcaption className="mt-3 text-sm text-muted-foreground">
            Our studio in {SITE.location}
          </figcaption>
        </figure>

        <div className="min-w-0">
          <h2 id="home-studio-title" className={H2}>
            Inside the studio
          </h2>
          <p className={LEAD}>
            Designers, developers and editors work side by side in our Lahore office, sketching
            brands, shipping code and reviewing campaigns together. Clients abroad work with us over
            email, WhatsApp and Google Meet.
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
            {STUDIO_FACTS.map((f) => (
              <div
                key={f.label}
                // column-reverse + justify-end: value on top, and every card top-aligned.
                className="flex flex-col-reverse justify-end rounded-2xl border border-border bg-background p-3 sm:p-5"
              >
                <dt className="mt-1 text-xs text-muted-foreground sm:text-sm">{f.label}</dt>
                <dd className="text-xl font-bold text-foreground sm:text-3xl">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* Latest insights                                                           */
/* ------------------------------------------------------------------------ */

function Insights() {
  const posts = getLatestPostSummaries(3);
  return (
    <section aria-labelledby="home-insights-title" className={`bg-background ${SECTION_Y}`}>
      <div className={CONTAINER}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 id="home-insights-title" className={H2}>
              Latest insights
            </h2>
            <p className={LEAD}>
              Notes from our work on branding, websites, search and automation.
            </p>
          </div>
          <Link to="/blog" className={`${BTN_SECONDARY} shrink-0 self-start sm:self-auto`}>
            All articles
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            // The newest post spans both columns on tablets so the grid has no gap.
            <li key={p.slug} className={i === 0 ? "sm:col-span-2 lg:col-span-1" : undefined}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-muted">
                <div className="relative aspect-[40/21] overflow-hidden bg-muted">
                  <ResponsiveImage
                    src={p.img}
                    alt=""
                    sizes={
                      i === 0
                        ? "(min-width: 1024px) 400px, 100vw"
                        : "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    }
                    width={800}
                    height={500}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span>{p.tag}</span>
                    <time dateTime={p.dateISO}>{p.date}</time>
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="after:absolute after:inset-0 after:rounded-2xl"
                    >
                      {p.title}
                    </Link>
                  </h3>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* FAQ and contact                                                           */
/* ------------------------------------------------------------------------ */

function HomeFaq() {
  return (
    <section aria-labelledby="home-faq-title" className={`bg-muted ${SECTION_Y}`}>
      <div className={`${CONTAINER} grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16`}>
        <div>
          <h2 id="home-faq-title" className={H2}>
            Frequently asked questions
          </h2>
          <p className={LEAD}>Timelines, pricing and how a project starts.</p>
        </div>
        <Faq items={HOME_FAQS} />
      </div>
    </section>
  );
}

function HomeContact() {
  const contactLink =
    "inline-flex min-h-11 items-center gap-3 font-medium text-foreground hover:text-primary";
  return (
    <section aria-labelledby="home-contact-title" className={`bg-background ${SECTION_Y}`}>
      <div className={`${CONTAINER} grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16`}>
        <div className="min-w-0">
          <h2 id="home-contact-title" className={H2}>
            Have a project in mind?
          </h2>
          <p className={LEAD}>Tell us what you need. We reply within one business day.</p>
          <ul className="mt-8 space-y-2 text-base">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                onClick={() => trackEvent("email_click", { location: "home_contact" })}
                className={contactLink}
              >
                <Mail className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${SITE.phoneE164}`}
                onClick={() => trackEvent("phone_click", { location: "home_contact" })}
                className={contactLink}
              >
                <Phone className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex min-h-11 items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
              {SITE.locationLine}
            </li>
          </ul>
          <div className="mt-8 border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">Prefer to talk it through?</p>
            <BookCallButton
              source="home_contact"
              className={`${BTN_SECONDARY} mt-4 w-full sm:w-auto`}
            />
          </div>
        </div>

        <div className="min-w-0 rounded-3xl bg-muted p-5 sm:p-8">
          <ContactForm source="home" />
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Brands />
      <WhatWeMake />
      <Approach />
      <VideoTestimonials className="bg-muted" />
      <Team />
      <Studio />
      <Insights />
      <HomeFaq />
      <HomeContact />
    </PageShell>
  );
}
