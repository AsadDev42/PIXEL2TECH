import { useId, useRef, useState } from "react";
import { Play } from "lucide-react";
import { LoopSlider } from "@/components/loop-slider";
import { ResponsiveImage } from "@/components/responsive-image";
import { PortfolioVideoPlayer } from "@/components/portfolio-video-player";
import { TESTIMONIAL_VIDEOS } from "@/lib/testimonial-videos";

const CARD_WIDTH = "w-[72vw] max-w-[296px] sm:w-[296px] lg:w-[320px] lg:max-w-[320px]";
const CARD_SIZES = "(min-width: 1024px) 320px, (min-width: 640px) 296px, 72vw";

/** Testimonial cards open the shared player without sharing or URL navigation. */
export function VideoTestimonials({ className = "bg-background" }: { className?: string }) {
  const headingId = useId();
  const [active, setActive] = useState<number | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  return (
    <section aria-labelledby={headingId} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="min-w-0 max-w-2xl">
          <h2
            id={headingId}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            What clients say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Watch the testimonials. Select a video to open the player, then use the arrows to
            browse.
          </p>
        </div>
      </div>
      <LoopSlider
        items={TESTIMONIAL_VIDEOS}
        keyFor={(item, index) => `${item.poster}-${index}`}
        direction="rtl"
        speed={35}
        autoplay={active === null}
        pauseOnHover
        pauseControlLabel="testimonial carousel"
        gapClassName="gap-4 sm:gap-6"
        className="mt-8 pb-2"
        ariaLabel="Client testimonials"
        renderItem={(item, index) => (
          <figure
            className={`${CARD_WIDTH} overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:rounded-3xl`}
          >
            <button
              type="button"
              aria-label={`Play ${item.title.toLowerCase()}`}
              aria-haspopup="dialog"
              tabIndex={index >= TESTIMONIAL_VIDEOS.length ? -1 : undefined}
              onClick={(event) => {
                trigger.current = event.currentTarget;
                setActive(index % TESTIMONIAL_VIDEOS.length);
              }}
              className="group relative block aspect-[9/16] w-full overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
            >
              <ResponsiveImage
                src={item.poster}
                alt={`${item.title} — video preview`}
                sizes={CARD_SIZES}
                width={720}
                height={1280}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center bg-linear-to-t from-black/40 via-transparent to-transparent"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-background text-foreground shadow-lg ring-1 ring-border transition group-hover:scale-105 sm:h-16 sm:w-16">
                  <Play className="h-6 w-6" fill="currentColor" />
                </span>
              </span>
            </button>
            <figcaption className="p-4 text-sm font-semibold text-card-foreground">
              {item.title}
            </figcaption>
          </figure>
        )}
      />
      <PortfolioVideoPlayer
        videos={TESTIMONIAL_VIDEOS}
        index={active}
        onSelect={setActive}
        onClose={() => setActive(null)}
        returnFocus={trigger}
        shareable={false}
      />
    </section>
  );
}
