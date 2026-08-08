import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

export type SpotlightVideo = {
  src: string;
  title: string;
};

/**
 * Video Strip — a flat, snap-scroll carousel made for a small number of
 * vertical videos. Multiple cards are visible at once on larger screens,
 * so 3–5 clips feel like a deliberate gallery instead of a sparse coverflow.
 */
export function VideoSpotlight({ videos }: { videos: SpotlightVideo[] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState<Record<number, boolean>>({});
  const refs = useRef<Array<HTMLVideoElement | null>>([]);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const count = videos.length;

  const pauseAllExcept = useCallback((active: number) => {
    refs.current.forEach((v, i) => {
      if (v && i !== active) v.pause();
    });
  }, []);

  const go = useCallback(
    (dir: number) => {
      const next = (index + dir + count) % count;
      setIndex(next);
      pauseAllExcept(next);
    },
    [count, index, pauseAllExcept],
  );

  const toggle = useCallback((i: number) => {
    const v = refs.current[i];
    if (!v) return;
    if (v.paused) {
      pauseAllExcept(i);
      void v.play();
    } else {
      v.pause();
    }
  }, [pauseAllExcept]);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const card = strip.firstElementChild as HTMLElement | null;
    if (!card) return;
    const gap = parseFloat(getComputedStyle(strip).gap) || 0;
    const scrollAmount = card.offsetWidth + gap;
    strip.scrollTo({ left: index * scrollAmount, behavior: "smooth" });
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (count === 0) return null;

  return (
    <div className="relative">
      {/* Scroll viewport */}
      <div
        ref={stripRef}
        className="edge-fade-x -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 pt-2 sm:-mx-10 sm:px-10 lg:gap-6"
        style={{ scrollbarWidth: "none" }}
      >
        {videos.map((video, i) => {
          const active = i === index;
          const isPlaying = !!playing[i];
          return (
            <div
              key={video.src}
              className={`relative shrink-0 snap-center transition-all duration-300 ${active ? "scale-100 opacity-100" : "scale-[0.96] opacity-70"}`}
              style={{ width: "min(280px, 72vw)" }}
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-border bg-black shadow-xl dark:border-white/10"
                style={{ aspectRatio: "9 / 16" }}
              >
                <video
                  ref={(el) => { refs.current[i] = el; }}
                  src={video.src}
                  playsInline
                  loop
                  preload="metadata"
                  aria-label={video.title}
                  onPlay={() => {
                    setPlaying((p) => ({ ...p, [i]: true }));
                    pauseAllExcept(i);
                  }}
                  onPause={() => setPlaying((p) => ({ ...p, [i]: false }))}
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-label={isPlaying ? `Pause ${video.title}` : `Play ${video.title}`}
                  className="absolute inset-0 flex items-center justify-center transition hover:bg-black/10"
                >
                  <span
                    aria-hidden="true"
                    className={`flex h-14 w-14 items-center justify-center rounded-full bg-background/95 text-foreground shadow-2xl ring-1 ring-border/40 backdrop-blur-md transition ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
                    )}
                  </span>
                </button>
              </div>
              <p className={`mt-4 text-center text-sm font-medium transition-colors ${active ? "text-foreground" : "text-muted-foreground"}`}>
                {video.title}
              </p>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous video"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted dark:border-white/10"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          {videos.map((v, i) => (
            <button
              key={v.src}
              type="button"
              onClick={() => {
                setIndex(i);
                pauseAllExcept(i);
              }}
              aria-label={`Go to video ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next video"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted dark:border-white/10"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
