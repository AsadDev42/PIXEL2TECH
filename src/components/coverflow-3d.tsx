import { useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

/* ------------------------------------------------------------------------ *
 * Shared carousel primitives, used by Coverflow3D, VideoSpotlight and
 * BookCarousel so all three behave the same way:
 *  - arrow keys only act while focus is inside that carousel (never window-wide)
 *  - horizontal swipe with touch or mouse; vertical page scroll still works
 *  - slide changes are announced politely, and silenced while auto-advancing
 *  - 44px prev/next/pause buttons; 24px dot targets on tablets and up, and a
 *    compact "3 / 12" counter on phones where a long dot row would not fit
 * ------------------------------------------------------------------------ */

const SWIPE_THRESHOLD_PX = 40;

export function CarouselShell({
  label,
  onStep,
  announcement,
  autoAdvancing = false,
  onHoldChange,
  className = "",
  children,
}: {
  /** Accessible name, e.g. "Book covers". */
  label: string;
  /** Move by -1 (previous) or +1 (next) after a key press or swipe. */
  onStep: (dir: -1 | 1) => void;
  /** Text read out when the active slide changes, e.g. "Slide 3 of 12". */
  announcement: string;
  /** While true, slide changes are not announced (WAI carousel pattern). */
  autoAdvancing?: boolean;
  /** Mouse hover or keyboard focus inside the carousel: hold auto-advance. */
  onHoldChange?: (held: boolean) => void;
  className?: string;
  children: ReactNode;
}) {
  const startX = useRef<number | null>(null);
  const swiped = useRef(false);

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      className={`touch-pan-y select-none ${className}`}
      onKeyDown={(e) => {
        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
        e.preventDefault();
        onStep(e.key === "ArrowLeft" ? -1 : 1);
      }}
      onPointerDown={(e) => {
        if (!e.isPrimary || (e.pointerType === "mouse" && e.button !== 0)) return;
        startX.current = e.clientX;
        swiped.current = false;
      }}
      onPointerUp={(e) => {
        if (startX.current === null) return;
        const dx = e.clientX - startX.current;
        startX.current = null;
        if (Math.abs(dx) < SWIPE_THRESHOLD_PX) return;
        swiped.current = true;
        onStep(dx < 0 ? 1 : -1);
      }}
      onPointerCancel={() => {
        startX.current = null;
      }}
      // A swipe that ends on a slide must not also count as a click on it.
      onClickCapture={(e) => {
        if (!swiped.current) return;
        swiped.current = false;
        e.preventDefault();
        e.stopPropagation();
      }}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") onHoldChange?.(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") onHoldChange?.(false);
      }}
      // Keyboard focus holds the slideshow; a mouse click that leaves focus on
      // a button should not hold it forever.
      onFocus={(e) => {
        if (e.target instanceof HTMLElement && e.target.matches(":focus-visible")) {
          onHoldChange?.(true);
        }
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) onHoldChange?.(false);
      }}
    >
      {children}
      <p className="sr-only" aria-live={autoAdvancing ? "off" : "polite"} aria-atomic="true">
        {announcement}
      </p>
    </div>
  );
}

const controlButton =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function CarouselControls({
  count,
  index,
  onStep,
  onSelect,
  itemLabel,
  noun = "slide",
  playing,
  onTogglePlay,
  className = "",
}: {
  count: number;
  index: number;
  onStep: (dir: -1 | 1) => void;
  onSelect: (i: number) => void;
  /** Accessible name of each dot, e.g. (i) => `Show book 3 of 15`. */
  itemLabel: (i: number) => string;
  /** Used in the prev/next labels: "Previous book", "Next book". */
  noun?: string;
  /** Pass both to show a pause/play button for auto-advance. */
  playing?: boolean;
  onTogglePlay?: () => void;
  className?: string;
}) {
  if (count < 2) return null;
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <button
        type="button"
        onClick={() => onStep(-1)}
        aria-label={`Previous ${noun}`}
        className={controlButton}
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>

      <p
        aria-hidden="true"
        className="min-w-14 text-center text-sm font-medium tabular-nums text-muted-foreground md:hidden"
      >
        {index + 1} / {count}
      </p>
      <div className="hidden max-w-full flex-wrap items-center justify-center md:flex">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={itemLabel(i)}
            aria-current={i === index ? "true" : undefined}
            className="group grid h-6 w-6 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span
              aria-hidden="true"
              className={`block h-2 rounded-full transition-all ${
                i === index
                  ? "w-5 bg-primary"
                  : "w-2 bg-muted-foreground/40 group-hover:bg-muted-foreground/70"
              }`}
            />
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onStep(1)}
        aria-label={`Next ${noun}`}
        className={controlButton}
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      {onTogglePlay && (
        <button
          type="button"
          onClick={onTogglePlay}
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          className={controlButton}
        >
          {playing ? (
            <Pause className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Play className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      )}
    </div>
  );
}

/** Shortest signed distance from `active` to `i` on a loop of `count` slides. */
// eslint-disable-next-line react-refresh/only-export-components -- tiny pure helper shared by the three carousels
export function loopOffset(i: number, active: number, count: number): number {
  let offset = i - active;
  if (offset > count / 2) offset -= count;
  if (offset < -count / 2) offset += count;
  return offset;
}

type Props = {
  images: string[];
  alt: (i: number) => string;
  /** aspect ratio of each card, e.g. "1 / 1" or "4 / 5" */
  aspect?: string;
  /** Accessible name of the carousel. */
  label?: string;
  className?: string;
};

/**
 * 3D coverflow slider: the centre card faces the viewer and its neighbours
 * rotate away. Arrow keys (while focused), swipe, dots and buttons all work.
 */
export function Coverflow3D({
  images,
  alt,
  aspect = "1 / 1",
  label = "Project gallery",
  className = "",
}: Props) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  if (count === 0) return null;

  const select = (i: number) => setIndex(((i % count) + count) % count);
  const step = (dir: -1 | 1) => select(index + dir);

  return (
    <CarouselShell
      label={label}
      onStep={step}
      announcement={`Image ${index + 1} of ${count}: ${alt(index)}`}
      className={className}
    >
      <div className="relative overflow-hidden py-6" style={{ perspective: "1400px" }}>
        <div
          className="relative mx-auto w-[220px] sm:w-[300px] lg:w-[340px]"
          style={{ transformStyle: "preserve-3d", aspectRatio: aspect }}
        >
          {images.map((src, i) => {
            const offset = loopOffset(i, index, count);
            const abs = Math.abs(offset);
            const visible = abs <= 3;
            return (
              <div
                key={src + i}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={offset !== 0 || undefined}
                onClick={offset !== 0 ? () => select(i) : undefined}
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(${offset * 56}%) translateZ(${-abs * 180}px) rotateY(${offset * -32}deg) scale(${1 - abs * 0.04})`,
                  opacity: visible ? 1 - abs * 0.22 : 0,
                  zIndex: 100 - abs,
                  pointerEvents: visible ? "auto" : "none",
                  cursor: offset === 0 ? "grab" : "pointer",
                }}
              >
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted shadow-2xl">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-0 scale-110 blur-xl brightness-50 contrast-125"
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <img
                    src={src}
                    alt={alt(i)}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                    className="relative z-10 h-full w-full object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CarouselControls
        className="mt-6"
        count={count}
        index={index}
        onStep={step}
        onSelect={select}
        itemLabel={(i) => `Show image ${i + 1} of ${count}`}
        noun="image"
      />
    </CarouselShell>
  );
}
