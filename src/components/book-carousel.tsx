import { useCallback, useEffect, useRef, useState } from "react";
import type { BookCover } from "@/assets/book-cover-assets";
import { BookMockup } from "@/components/book-mockup";
import { CarouselControls, CarouselShell, loopOffset } from "@/components/coverflow-3d";

/** Above the 5s WCAG 2.2.2 threshold, and there is a pause button anyway. */
const AUTO_ADVANCE_MS = 5000;

/**
 * Covers fanned out around the active book. Card size and spacing come from
 * CSS breakpoints (not window.innerWidth), so the server and the browser
 * render the same layout and phones do not jump after hydration.
 */
export function BookCarousel({
  covers,
  initialIndex = 0,
  onActiveChange,
}: {
  covers: BookCover[];
  initialIndex?: number;
  /** Called with the active index, e.g. to open the 3D viewer on the same book. */
  onActiveChange?: (index: number) => void;
}) {
  const count = covers.length;
  const [index, setIndex] = useState(initialIndex);
  // Off until mounted, so the server render and reduced-motion visitors get no auto-advance.
  const [autoplay, setAutoplay] = useState(false);
  const [held, setHeld] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAutoplay(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setInView(!!entry?.isIntersecting), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    onActiveChange?.(index);
  }, [index, onActiveChange]);

  const select = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);

  // One timeout per slide, cleared on every change and on unmount.
  useEffect(() => {
    if (!autoplay || held || !inView || count < 2) return;
    const id = window.setTimeout(() => select(index + 1), AUTO_ADVANCE_MS);
    return () => window.clearTimeout(id);
  }, [autoplay, held, inView, count, index, select]);

  if (count === 0) return null;

  // Manual navigation stops the slideshow; the play button restarts it.
  const goTo = (i: number) => {
    setAutoplay(false);
    select(i);
  };
  const active = covers[index]!;

  return (
    <div ref={rootRef}>
      <CarouselShell
        label="Book covers"
        onStep={(dir) => goTo(index + dir)}
        announcement={`Book ${index + 1} of ${count}: ${active.title}`}
        autoAdvancing={autoplay && !held}
        onHoldChange={setHeld}
      >
        <div
          className="edge-fade-x relative h-[320px] overflow-hidden [--book-step:120px] sm:h-[400px] sm:[--book-step:170px] md:h-[440px] md:[--book-step:200px] lg:h-[560px] lg:[--book-step:270px]"
          style={{ perspective: "1500px" }}
        >
          {covers.map((cover, i) => {
            const offset = loopOffset(i, index, count);
            const abs = Math.abs(offset);
            // The active book and two on each side are mounted; phones show one per side.
            if (abs > 2) return null;
            const isActive = offset === 0;
            return (
              <div
                key={cover.src}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}: ${cover.title}`}
                aria-hidden={!isActive || undefined}
                onClick={isActive ? undefined : () => goTo(i)}
                className={`absolute left-1/2 top-1/2 w-[170px] transition-[transform,opacity,filter] duration-500 ease-out sm:w-[220px] md:w-[240px] lg:w-[320px] ${
                  isActive ? "" : "cursor-pointer brightness-75"
                } ${abs === 2 ? "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100" : ""}`}
                style={{
                  zIndex: 10 - abs,
                  transform: `translate(-50%, -50%) translateX(calc(${offset} * var(--book-step))) rotateY(${offset * -25}deg) scale(${isActive ? 1.05 : 0.85})`,
                }}
              >
                <BookMockup
                  src={cover.src}
                  alt={`Book cover design for ${cover.title}`}
                  loading={isActive ? "eager" : "lazy"}
                />
              </div>
            );
          })}
        </div>

        <CarouselControls
          className="mt-4"
          count={count}
          index={index}
          onStep={(dir) => goTo(index + dir)}
          onSelect={goTo}
          itemLabel={(i) => `Show book ${i + 1} of ${count}: ${covers[i]!.title}`}
          noun="book"
          playing={autoplay}
          onTogglePlay={() => setAutoplay((on) => !on)}
        />
      </CarouselShell>
    </div>
  );
}
