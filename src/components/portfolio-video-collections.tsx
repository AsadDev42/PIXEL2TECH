import { useEffect, useId, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Film } from "lucide-react";
import { VideoWall } from "@/components/video-wall";
import { ALL_ITEMS, type PortfolioItem } from "@/lib/portfolio-data";
import { trackEvent } from "@/lib/analytics";

const COLLECTION_COPY: Record<string, { title: string; description: string }> = {
  "vip-talking-head-videos": {
    title: "Talking-head videos",
    description: "Founders, coaches and personal brands. One voice, brought into focus.",
  },
  "short-form-social-media-videos": {
    title: "Short-form social videos",
    description: "Interview highlights, social stories and edits made for the vertical feed.",
  },
  "long-form-video-and-podcast-production": {
    title: "Video & podcast production",
    description: "Conversations, interviews and presentations with room for the whole story.",
  },
  "cash-cow-youtube-videos": {
    title: "Faceless YouTube videos",
    description: "Narration, supporting visuals and motion. Stories without an on-camera host.",
  },
  "long-form-video-editing": {
    title: "Long-form video editing",
    description: "Full-length edits, from a few minutes to deeper conversations.",
  },
  "animated-explainer-videos": {
    title: "Animated explainers",
    description: "Product walkthroughs and motion graphics for SaaS, tech and AI.",
  },
  "performance-marketing-video-ads": {
    title: "Performance marketing ads",
    description: "Creator-led demos, app promotions and animated ad creative.",
  },
  "ugc-video-ads": {
    title: "UGC video ads",
    description: "Creator-style product stories and ads that feel at home in the feed.",
  },
};

const COLLECTIONS = ALL_ITEMS.filter((item) => item.category === "Video Editing");

function CollectionSlider({ item, index }: { item: PortfolioItem; index: number }) {
  const id = useId();
  const railRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const copy = COLLECTION_COPY[item.slug];
  const videos = item.videos ?? [];
  const vertical = videos.filter((video) => video.orientation === "vertical");
  const landscape = videos.filter((video) => video.orientation === "landscape");
  const portrait = vertical.length >= landscape.length;
  const previews = (portrait ? vertical : landscape).slice(0, portrait ? 6 : 4);

  useEffect(() => {
    const rail = railRef.current?.querySelector("ul");
    if (!rail) return;
    const update = () =>
      setEdges({
        start: rail.scrollLeft <= 2,
        end: rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2,
      });
    update();
    rail.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(rail);
    return () => {
      rail.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  const slide = (direction: number) => {
    const rail = railRef.current?.querySelector("ul");
    if (!rail) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.scrollBy({
      left: direction * rail.clientWidth * 0.8,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  };

  return (
    <article aria-labelledby={id} className="min-w-0 border-t border-border pt-8 sm:pt-10">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <span className="text-primary">{String(index + 1).padStart(2, "0")}</span>
            <span>{portrait ? "Vertical / 9:16" : "Landscape / 16:9"}</span>
            <span className="rounded-full bg-muted px-3 py-1 normal-case tracking-normal">
              {videos.length} videos
            </span>
          </div>
          <h3 id={id} className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {copy?.title ?? item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy?.description}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2" aria-label={`${copy?.title ?? item.title} slider controls`}>
            {[-1, 1].map((direction) => (
              <button
                key={direction}
                type="button"
                aria-label={`${direction < 0 ? "Previous" : "Next"} ${copy?.title ?? item.title}`}
                aria-controls={`${id}-rail`}
                disabled={direction < 0 ? edges.start : edges.end}
                onClick={() => slide(direction)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default disabled:opacity-30"
              >
                {direction < 0 ? (
                  <ArrowLeft className="h-4 w-4" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </button>
            ))}
          </div>
          <Link
            to="/portfolio/$slug"
            params={{ slug: item.slug }}
            aria-label={`View more ${copy?.title ?? item.title}`}
            onClick={() =>
              trackEvent("portfolio_project_opened", { slug: item.slug, title: item.title })
            }
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View more <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div ref={railRef} id={`${id}-rail`}>
        <VideoWall
          videos={previews}
          label={`${copy?.title ?? item.title}: selected videos`}
          layout="slider"
        />
      </div>
    </article>
  );
}

export function PortfolioVideoCollections({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const collections = featuredOnly
    ? COLLECTIONS.filter((item) =>
        [
          "vip-talking-head-videos",
          "performance-marketing-video-ads",
          "animated-explainer-videos",
        ].includes(item.slug),
      )
    : COLLECTIONS;
  return (
    <section aria-labelledby="video-collections-title" className="mt-10 min-w-0">
      <div className="mb-8 max-w-2xl">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          <Film className="h-4 w-4" aria-hidden="true" /> Video editing
        </p>
        <h2
          id="video-collections-title"
          className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Made to be watched.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          A few edits from each collection. Swipe through the previews, or view more to explore
          every video.
        </p>
        {featuredOnly && (
          <Link
            to="/portfolio"
            search={{ category: "video-editing" }}
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Explore all {COLLECTIONS.length} video collections{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>
      <div className="space-y-10 sm:space-y-16">
        {collections.map((item, index) => (
          <CollectionSlider key={item.slug} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
