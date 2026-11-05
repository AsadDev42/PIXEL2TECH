import { useEffect, useRef, useState } from "react";
import { MediaImage } from "@/components/media-image";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CarouselControls, CarouselShell, loopOffset } from "@/components/coverflow-3d";
import { ALL_ITEMS } from "@/lib/portfolio-data";

/** `ratio` is the image's own width / height, so each piece keeps its real shape. */
const HOME_WORK = [
  {
    slug: "skin-deep-shopify-store",
    label: "Ecom Stores",
    description: "Shopify store for a natural skincare, haircare and beauty brand.",
    image: "/portfolio/skin-deep-shopify-store/desktop-home.webp",
    ratio: 1280 / 800,
  },
  {
    slug: "madluvv-social-media-meta-ads",
    label: "Social Media & Ads",
    description: "Social content and Meta ad creative for MADLUVV.",
    image: "/media/5029b141-c991-4ba8-9909-25e972eb8692/madluvv-cover.png",
    ratio: 1122 / 1402,
  },
  {
    slug: "sweet-temptation-logo-menu-design",
    label: "Design",
    description: "Logo, menus and launch creatives.",
    image: "/portfolio/sweet-temptation-logo-menu-design/menu-cover.webp",
    ratio: 1536 / 1024,
  },
  {
    slug: "short-form-social-media-videos",
    label: "Video Editing",
    description: "Short-form edits prepared for social content.",
    image: "/portfolio/short-form-social-media-videos/5.jpg",
    ratio: 720 / 1280,
  },
  {
    slug: "acely-website",
    label: "Websites",
    description: "Next.js marketing website for an SAT and ACT test prep platform.",
    image: "/portfolio/acely-website/desktop-home.webp",
    ratio: 1280 / 800,
  },
  {
    slug: "brand-identity-design-collection",
    label: "Branding",
    description: "Brand identities, visual systems and design guidelines.",
    image: "/portfolio/brand-identity-design-collection/1.webp",
    ratio: 1,
  },
  {
    slug: "unze-london-shopify-store",
    label: "Ecom Stores",
    description: "Shopify store for a shoes, bags and clothing brand.",
    image: "/portfolio/unze-london-shopify-store/desktop-home.webp",
    ratio: 1280 / 800,
  },
].map((work) => {
  const project = ALL_ITEMS.find((item) => item.slug === work.slug)!;
  return {
    ...work,
    name: project.client ?? project.title,
    whiteLabel: Boolean(project.whiteLabel),
  };
});

const COUNT = HOME_WORK.length;
const GAP = 20;
/** Size of each card relative to the centre one, by distance from it. */
const SCALE = [1, 0.6, 0.42];

/** Each card's size at full scale: as tall as the stage, unless that makes it too wide. */
function cardSize(ratio: number, stage: { width: number; height: number }) {
  const width = Math.min(stage.height * ratio, stage.width * 0.84);
  return { width, height: width / ratio };
}

/** Lays cards out edge to edge from the centre, so different shapes never overlap. */
function offsetX(index: number, offset: number, stage: { width: number; height: number }) {
  const direction = Math.sign(offset);
  let x = 0;
  let edge = cardSize(HOME_WORK[index].ratio, stage).width / 2;
  for (let step = 1; step <= Math.abs(offset); step++) {
    const card = HOME_WORK[(index + direction * step + COUNT * 3) % COUNT];
    const half = (cardSize(card.ratio, stage).width * SCALE[step]) / 2;
    x = edge + GAP + half;
    edge = x + half;
  }
  return direction * x;
}

export function HomeSelectedWork() {
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState({ width: 1280, height: 460 });
  const stageRef = useRef<HTMLDivElement>(null);
  const active = HOME_WORK[index];
  const select = (i: number) => setIndex(((i % COUNT) + COUNT) % COUNT);
  const step = (dir: -1 | 1) => select(index + dir);

  useEffect(() => {
    const element = stageRef.current;
    if (!element) return;
    const measure = () => setStage({ width: element.clientWidth, height: element.clientHeight });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

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
      </div>

      <CarouselShell
        label="Selected work"
        onStep={step}
        announcement={`Project ${index + 1} of ${COUNT}: ${active.name}, ${active.label}`}
        className="mt-10"
      >
        <div
          ref={stageRef}
          className="relative h-[300px] overflow-hidden sm:h-[400px] lg:h-[480px]"
          style={{ perspective: "1800px" }}
        >
          {HOME_WORK.map((work, i) => {
            const offset = loopOffset(i, index, COUNT);
            const abs = Math.abs(offset);
            const visible = abs <= 2;
            const size = cardSize(work.ratio, stage);
            const image = (
              <MediaImage
                src={work.image}
                alt={`${work.name} project preview`}
                loading={abs <= 1 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
                className="h-full w-full object-cover"
              />
            );
            const frame = "block h-full w-full overflow-hidden rounded-2xl bg-muted";
            return (
              <div
                key={work.slug}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${COUNT}`}
                aria-hidden={offset !== 0 || undefined}
                onClick={offset !== 0 ? () => select(i) : undefined}
                className="absolute left-1/2 top-1/2 transition-all duration-500 ease-out motion-reduce:transition-none"
                style={{
                  width: size.width,
                  height: size.height,
                  transform: `translate(-50%, -50%) translateX(${visible ? offsetX(index, offset, stage) : Math.sign(offset) * stage.width}px) rotateY(${Math.sign(offset) * -14}deg) scale(${SCALE[abs] ?? 0.4})`,
                  opacity: offset === 0 ? 1 : abs === 1 ? 0.55 : visible ? 0.3 : 0,
                  zIndex: 10 - abs,
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
                    className={`${frame} shadow-2xl ring-1 ring-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
                  >
                    {image}
                  </Link>
                ) : (
                  <div className={frame}>{image}</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-8 min-h-28 max-w-xl px-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            {active.label}
            {active.whiteLabel ? " · Agency partner work" : ""}
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight">
            <Link
              to="/portfolio/$slug"
              params={{ slug: active.slug }}
              className="rounded hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {active.name}
            </Link>
          </h3>
          <p className="mt-2 text-muted-foreground">{active.description}</p>
        </div>

        <CarouselControls
          className="mt-4 px-5"
          count={COUNT}
          index={index}
          onStep={step}
          onSelect={select}
          itemLabel={(i) => `Show project ${i + 1} of ${COUNT}: ${HOME_WORK[i].name}`}
          noun="project"
        />
      </CarouselShell>
    </section>
  );
}
