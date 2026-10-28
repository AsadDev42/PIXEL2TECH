import { useId, useRef, useState } from "react";
import { GripHorizontal, Play } from "lucide-react";
import { LoopSlider } from "@/components/loop-slider";
import { ResponsiveImage } from "@/components/responsive-image";
import { InlineTestimonialPlayer } from "@/components/inline-testimonial-player";
import { TESTIMONIAL_VIDEOS } from "@/lib/testimonial-videos";

const CARD_WIDTH = "w-[72vw] max-w-[296px] sm:w-[296px] lg:w-[320px] lg:max-w-[320px]";
const CARD_SIZES = "(min-width: 1024px) 320px, (min-width: 640px) 296px, 72vw";

/** The clicked card becomes the player; its rendered copy stays in the same position. */
export function VideoTestimonials({ className = "bg-background" }: { className?: string }) {
  const headingId = useId();
  const [active, setActive] = useState<number | null>(null);
  const activeRef = useRef<number | null>(null);
  const [playing, setPlaying] = useState(false);

  const select = (index: number) => {
    if (activeRef.current === index) return;
    activeRef.current = index;
    setPlaying(true);
    setActive(index);
  };

  const close = () => {
    activeRef.current = null;
    setActive(null);
    setPlaying(false);
  };

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
            Drag to browse. Select a video to watch it here with sound and English captions.
          </p>
        </div>
      </div>
      <LoopSlider
        items={TESTIMONIAL_VIDEOS}
        activeItemIndex={active ?? undefined}
        keyFor={(item, index) => `${item.poster}-${index}`}
        direction="rtl"
        speed={35}
        autoplay={!playing}
        freezeMomentum={playing}
        pauseOnFocus={false}
        pauseControlLabel="testimonial carousel"
        gapClassName="gap-4 sm:gap-6"
        className="mt-8 pb-2"
        ariaLabel="Client testimonials"
        onItemClick={(_item, _index, renderedIndex) => select(renderedIndex)}
        renderItem={(item, index) => (
          <figure
            className={`${CARD_WIDTH} overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:rounded-3xl`}
          >
            {active === index ? (
              <InlineTestimonialPlayer
                item={item}
                onClose={close}
                onPlayingChange={(value) => {
                  if (activeRef.current === index) setPlaying(value);
                }}
              />
            ) : (
              <button
                type="button"
                data-loop-drag=""
                aria-label={`Play ${item.title.toLowerCase()}`}
                tabIndex={index >= TESTIMONIAL_VIDEOS.length ? -1 : undefined}
                onClick={() => select(index)}
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
            )}
            <figcaption className="flex cursor-grab items-center justify-between gap-2 p-4 text-sm font-semibold text-card-foreground active:cursor-grabbing">
              <span>{item.title}</span>
              <span className="inline-flex items-center gap-2 text-xs font-normal text-muted-foreground">
                <GripHorizontal size={16} aria-hidden="true" /> Drag
              </span>
            </figcaption>
          </figure>
        )}
      />
    </section>
  );
}
