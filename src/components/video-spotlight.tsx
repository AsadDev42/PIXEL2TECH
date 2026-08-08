import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

export type SpotlightVideo = {
  src: string;
  title: string;
};

/**
 * Video Spotlight — a premium gallery made for a small number of vertical videos.
 *
 * A large active player sits next to a clickable thumbnail strip. Switching
 * fades between videos, and only the active clip plays. Designed so 3–5
 * vertical assets feel intentional rather than sparse.
 */
export function VideoSpotlight({ videos }: { videos: SpotlightVideo[] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const count = videos.length;

  const active = videos[index]!;

  const go = useCallback(
    (dir: number) => {
      setIsFading(true);
      setPlaying(false);
      setTimeout(() => {
        setIndex((i) => (i + dir + count) % count);
        setIsFading(false);
      }, 220);
    },
    [count],
  );

  const select = useCallback(
    (i: number) => {
      if (i === index) return;
      setIsFading(true);
      setPlaying(false);
      setTimeout(() => {
        setIndex(i);
        setIsFading(false);
      }, 220);
    },
    [index],
  );

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) void v.play();
    else v.pause();
  }, [playing, active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
      if (e.key === " " || e.key === "k") {
        e.preventDefault();
        setPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (count === 0) return null;

  const toggle = () => setPlaying((p) => !p);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        {/* Main player */}
        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[420px]">
          <div
            className={`relative overflow-hidden rounded-3xl border border-border bg-black shadow-2xl dark:border-white/10 transition-opacity duration-200 ${isFading ? "opacity-40" : "opacity-100"}`}
            style={{ aspectRatio: "9 / 16" }}
          >
            <video
              ref={videoRef}
              key={active.src}
              src={active.src}
              playsInline
              loop
              preload="metadata"
              aria-label={active.title}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              className="h-full w-full object-cover"
            />

            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? `Pause ${active.title}` : `Play ${active.title}`}
              className="absolute inset-0 flex items-center justify-center transition hover:bg-black/10"
            >
              <span
                aria-hidden="true"
                className={`flex h-16 w-16 items-center justify-center rounded-full bg-background/95 text-foreground shadow-2xl ring-1 ring-border/40 backdrop-blur-md transition ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
              >
                {playing ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="ml-1 h-6 w-6" fill="currentColor" />
                )}
              </span>
            </button>
          </div>

          {/* Mobile arrows */}
          <div className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous video"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/90 text-foreground backdrop-blur transition hover:bg-background dark:border-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="min-w-[3.5rem] text-center text-sm font-medium tabular-nums text-muted-foreground">
              {index + 1} / {count}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next video"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/90 text-foreground backdrop-blur transition hover:bg-background dark:border-white/10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="hidden flex-col gap-4 lg:flex">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Select a clip
          </div>
          <div className="space-y-3">
            {videos.map((video, i) => {
              const selected = i === index;
              return (
                <button
                  key={video.src}
                  type="button"
                  onClick={() => select(i)}
                  aria-label={`Play ${video.title}`}
                  aria-current={selected}
                  className={`group flex w-full items-center gap-4 rounded-2xl border p-2.5 text-left transition ${selected ? "border-primary/40 bg-primary/[0.06]" : "border-border bg-background hover:bg-muted dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"}`}
                >
                  <div className="relative shrink-0 overflow-hidden rounded-xl bg-black" style={{ aspectRatio: "9 / 16", width: "56px" }}>
                    <video
                      src={video.src}
                      preload="metadata"
                      muted
                      playsInline
                      className="h-full w-full object-cover opacity-80 transition group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-sm">
                        <Play className="h-2.5 w-2.5 translate-x-0.5" fill="currentColor" />
                      </span>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className={`text-sm font-semibold leading-snug ${selected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                      {video.title}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground/80">
                      {selected ? "Now playing" : `Clip ${i + 1}`}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous video"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted dark:border-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="min-w-[3.5rem] text-center text-sm font-medium tabular-nums text-muted-foreground">
              {index + 1} / {count}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next video"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted dark:border-white/10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mobile thumbnail strip */}
        <div className="mt-16 flex gap-3 overflow-x-auto pb-2 lg:hidden">
          {videos.map((video, i) => {
            const selected = i === index;
            return (
              <button
                key={video.src}
                type="button"
                onClick={() => select(i)}
                aria-label={`Play ${video.title}`}
                aria-current={selected}
                className={`group relative shrink-0 overflow-hidden rounded-xl border bg-black transition ${selected ? "w-20 border-primary" : "w-16 border-border opacity-70 hover:opacity-100 dark:border-white/10"}`}
                style={{ aspectRatio: "9 / 16" }}
              >
                <video
                  src={video.src}
                  preload="metadata"
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-sm">
                    <Play className="h-2 w-2 translate-x-0.5" fill="currentColor" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-6 hidden text-center text-sm font-semibold text-foreground lg:block">
        {active.title}
      </p>
    </div>
  );
}
