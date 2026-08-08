import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

export type CarouselVideo = {
  src: string;
  title: string;
};

/**
 * 3D coverflow video slider — center video faces the viewer, siblings rotate away in Z space.
 * Only the active slide is playable; changing slides pauses the others.
 */
export function VideoCarousel({ videos }: { videos: CarouselVideo[] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const refs = useRef<Array<HTMLVideoElement | null>>([]);
  const dragX = useRef<number | null>(null);
  const count = videos.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    refs.current.forEach((v, i) => {
      if (v && i !== index) v.pause();
    });
    setPlaying(false);
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

  const toggle = () => {
    const v = refs.current[index];
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  };

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
    <div>
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
        aria-label="Short-form video creatives"
      >
        <div
          className="relative mx-auto aspect-[9/16] w-[230px] sm:w-[270px] lg:w-[300px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {videos.map((video, i) => {
            let offset = i - index;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;
            const abs = Math.abs(offset);
            const visible = abs <= 3;
            const active = offset === 0;
            return (
              <div
                key={video.src}
                aria-hidden={!active}
                onClick={() => !active && setIndex(i)}
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(${offset * 56}%) translateZ(${-abs * 180}px) rotateY(${offset * -32}deg) scale(${1 - abs * 0.04})`,
                  opacity: visible ? 1 - abs * 0.22 : 0,
                  zIndex: 100 - abs,
                  pointerEvents: visible ? "auto" : "none",
                  cursor: active ? "grab" : "pointer",
                }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-black shadow-2xl dark:border-white/10">
                  <video
                    ref={(el) => {
                      refs.current[i] = el;
                    }}
                    src={video.src}
                    playsInline
                    loop
                    preload="metadata"
                    aria-label={video.title}
                    onPlay={() => active && setPlaying(true)}
                    onPause={() => active && setPlaying(false)}
                    className="h-full w-full object-cover"
                  />
                  {active && (
                    <button
                      type="button"
                      onClick={toggle}
                      aria-label={playing ? `Pause ${video.title}` : `Play ${video.title}`}
                      className="absolute inset-0 flex items-center justify-center transition hover:bg-black/10"
                    >
                      <span
                        aria-hidden="true"
                        className={`flex h-14 w-14 items-center justify-center rounded-full bg-background/90 text-foreground shadow-xl ring-1 ring-border/40 backdrop-blur-md transition ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
                      >
                        {playing ? <Pause className="h-5 w-5" /> : <Play className="ml-1 h-5 w-5" fill="currentColor" />}
                      </span>
                    </button>
                  )}
                  {!active && <div className="pointer-events-none absolute inset-0 bg-background/20" />}
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous video"
          className="absolute left-2 top-1/2 z-[200] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition hover:bg-background dark:border-white/10 sm:left-6"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next video"
          className="absolute right-2 top-1/2 z-[200] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition hover:bg-background dark:border-white/10 sm:right-6"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="mt-5 text-center text-sm font-semibold text-foreground">{videos[index]!.title}</p>

      <div className="mt-4 flex items-center justify-center gap-2">
        {videos.map((v, i) => (
          <button
            key={v.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to video ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"}`}
          />
        ))}
      </div>
    </div>
  );
}
