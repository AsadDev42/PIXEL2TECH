import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  alt: (i: number) => string;
  /** aspect ratio of each card, e.g. "1 / 1" or "4 / 5" */
  aspect?: string;
  className?: string;
};

/**
 * 3D coverflow slider — center card faces the viewer, siblings rotate away in Z space.
 * Supports arrows, dots, drag/swipe and keyboard navigation.
 */
export function Coverflow3D({ images, alt, aspect = "1 / 1", className = "" }: Props) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const dragX = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (count === 0) return null;

  const onDown = (x: number) => {
    dragX.current = x;
  };
  const onUp = (x: number) => {
    if (dragX.current === null) return;
    const dx = x - dragX.current;
    dragX.current = null;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  return (
    <div className={className}>
      <div
        className="relative select-none overflow-hidden py-6"
        style={{ perspective: "1400px" }}
        onMouseDown={(e) => onDown(e.clientX)}
        onMouseUp={(e) => onUp(e.clientX)}
        onMouseLeave={() => (dragX.current = null)}
        onTouchStart={(e) => onDown(e.touches[0]!.clientX)}
        onTouchEnd={(e) => onUp(e.changedTouches[0]!.clientX)}
        role="group"
        aria-roledescription="carousel"
        aria-label="Project gallery"
      >
        <div
          className="relative mx-auto w-[240px] sm:w-[300px] lg:w-[340px]"
          style={{ transformStyle: "preserve-3d", aspectRatio: aspect }}
        >
          {images.map((src, i) => {
            let offset = i - index;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;
            const abs = Math.abs(offset);
            const visible = abs <= 3;
            return (
              <div
                key={src + i}
                aria-hidden={offset !== 0}
                onClick={() => offset !== 0 && setIndex(i)}
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(${offset * 56}%) translateZ(${-abs * 180}px) rotateY(${offset * -32}deg) scale(${1 - abs * 0.04})`,
                  opacity: visible ? 1 - abs * 0.22 : 0,
                  zIndex: 100 - abs,
                  pointerEvents: visible ? "auto" : "none",
                  cursor: offset === 0 ? "grab" : "pointer",
                }}
              >
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted shadow-2xl dark:border-white/10 dark:bg-white/[0.03]">
                  {/* Blurred Background Layer */}
                  <div 
                    className="absolute inset-0 z-0 scale-110 blur-xl brightness-50 contrast-125"
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  {/* Main Image Layer */}
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

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 z-[200] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition hover:bg-background dark:border-white/10 sm:left-6"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 z-[200] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition hover:bg-background dark:border-white/10 sm:right-6"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"}`}
          />
        ))}
      </div>
    </div>
  );
}
