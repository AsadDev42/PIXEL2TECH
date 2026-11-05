import { useState } from "react";
import { MediaImage } from "@/components/media-image";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CarouselControls, CarouselShell, loopOffset } from "@/components/coverflow-3d";
import { ALL_ITEMS } from "@/lib/portfolio-data";

const HOME_WORK = [
  {
    slug: "histreet-shopify-store",
    label: "Ecom Stores",
    description: "Shopify for a Pakistani men's footwear brand.",
    // The tall phone screenshot fills the card; the desktop one would crop badly.
    image: "/portfolio/histreet-shopify-store/mobile-home.webp",
  },
  {
    slug: "cargo-health-wordpress-website",
    label: "Websites",
    description: "Medical courier services for hospitals, labs and pharmacies.",
    image: "/portfolio/cargo-health-wordpress-website/mobile-home.webp",
  },
  {
    slug: "linkedin-posting-agent",
    label: "AI Automation",
    description: "Research, generated images and LinkedIn posting in one workflow.",
  },
  {
    slug: "performance-marketing-video-ads",
    label: "Video Editing",
    description: "Creator-led demos, app promotions and animated ad creative.",
  },
  {
    slug: "madluvv-social-media-meta-ads",
    label: "Social Media & Ads",
    description: "Social content and Meta ad creative for MADLUVV.",
  },
  {
    slug: "brand-identity-design-collection",
    label: "Design",
    description: "Brand identities, visual systems and design guidelines.",
  },
].map((work) => {
  const project = ALL_ITEMS.find((item) => item.slug === work.slug)!;
  return {
    ...work,
    name: project.client ?? project.title,
    image: "image" in work && work.image ? work.image : project.img,
    whiteLabel: Boolean(project.whiteLabel),
  };
});

export function HomeSelectedWork() {
  const [index, setIndex] = useState(0);
  const count = HOME_WORK.length;
  const active = HOME_WORK[index];
  const select = (i: number) => setIndex(((i % count) + count) % count);
  const step = (dir: -1 | 1) => select(index + dir);

  return (
    <section
      aria-labelledby="home-work-title"
      className="border-y border-border bg-muted/40 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              The work, across disciplines
            </p>
            <h2 id="home-work-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              One team. A whole range of work.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-semibold hover:bg-muted"
          >
            Explore our portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <CarouselShell
          label="Selected work"
          onStep={step}
          announcement={`Project ${index + 1} of ${count}: ${active.name}, ${active.label}`}
          className="mt-8"
        >
          <div className="relative overflow-hidden py-6" style={{ perspective: "1400px" }}>
            <div
              className="relative mx-auto w-[220px] sm:w-[300px] lg:w-[340px]"
              style={{ transformStyle: "preserve-3d", aspectRatio: "4 / 5" }}
            >
              {HOME_WORK.map((work, i) => {
                const offset = loopOffset(i, index, count);
                const abs = Math.abs(offset);
                const visible = abs <= 3;
                const card = (
                  <MediaImage
                    src={work.image}
                    alt={`${work.name} project preview`}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                    className="h-full w-full object-cover object-top"
                  />
                );
                return (
                  <div
                    key={work.slug}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${count}`}
                    aria-hidden={offset !== 0 || undefined}
                    onClick={offset !== 0 ? () => select(i) : undefined}
                    className="absolute inset-0 transition-all duration-500 ease-out motion-reduce:transition-none"
                    style={{
                      transform: `translateX(${offset * 56}%) translateZ(${-abs * 180}px) rotateY(${offset * -32}deg) scale(${1 - abs * 0.04})`,
                      opacity: visible ? 1 - abs * 0.22 : 0,
                      zIndex: 100 - abs,
                      pointerEvents: visible ? "auto" : "none",
                      cursor: "pointer",
                    }}
                  >
                    {offset === 0 ? (
                      <Link
                        to="/portfolio/$slug"
                        params={{ slug: work.slug }}
                        draggable={false}
                        aria-label={`View project: ${work.name}`}
                        className="block h-full w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        {card}
                      </Link>
                    ) : (
                      <div className="h-full w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-2xl">
                        {card}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-4 min-h-28 max-w-xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {active.label}
              {active.whiteLabel ? " · Agency partner work" : ""}
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">{active.name}</h3>
            <p className="mt-2 text-muted-foreground">{active.description}</p>
          </div>

          <CarouselControls
            className="mt-4"
            count={count}
            index={index}
            onStep={step}
            onSelect={select}
            itemLabel={(i) => `Show project ${i + 1} of ${count}: ${HOME_WORK[i].name}`}
            noun="project"
          />
        </CarouselShell>
      </div>
    </section>
  );
}
