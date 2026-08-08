import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type SpotlightVideo = {
  src: string;
  title: string;
};

/**
 * Premium Video Spotlight — A centered infinite-loop slider.
 * The active video stays in the middle. Clicking side videos or 
 * using arrows rotates the gallery seamlessly.
 */
export function VideoSpotlight({ videos }: { videos: SpotlightVideo[] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState<Record<string, boolean>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const count = videos.length;

  const pauseAllExcept = useCallback((activeSrc: string) => {
    Object.entries(videoRefs.current).forEach(([src, v]) => {
      if (v && src !== activeSrc) v.pause();
    });
  }, []);

  const go = useCallback(
    (dir: number) => {
      const next = (index + dir + count) % count;
      setIndex(next);
      const nextVideo = videos[next];
      if (nextVideo) pauseAllExcept(nextVideo.src);
    },
    [count, index, pauseAllExcept, videos],
  );

  const toggle = useCallback((src: string) => {
    const v = videoRefs.current[src];
    if (!v) return;
    if (v.paused) {
      pauseAllExcept(src);
      void v.play();
    } else {
      v.pause();
    }
  }, [pauseAllExcept]);

  // Infinite items mapping for the 4 visible slots
  const visibleIndices = count >= 4
    ? [
        (index - 1 + count) % count,
        index,
        (index + 1) % count,
        (index + 2) % count,
      ]
    : videos.map((_, i) => i);

  const anyPlaying = Object.values(playing).some(Boolean);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  // Continuous autoplay loop — pauses while a video plays or on hover
  useEffect(() => {
    if (anyPlaying || paused || count < 2) return;
    const id = window.setInterval(() => go(1), 3500);
    return () => window.clearInterval(id);
  }, [anyPlaying, paused, go, count]);

  if (count === 0) return null;

  return (
    <div className="relative">
      {/* Centered Infinite Viewport */}
      <div
        className="edge-fade-x relative -mx-5 flex h-[580px] items-center justify-center overflow-hidden px-5 sm:-mx-10 sm:px-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence initial={false}>
          {visibleIndices.map((actualIdx, displayPos) => {
            const video = videos[actualIdx]!;
            const isActive = displayPos === 1;
            const isPlaying = !!playing[video.src];

            // 4-card strip: active is the 2nd card; shift group so it feels centered
            const position = displayPos - 1;
            const gap = 300;
            const groupShift = gap / 2;

            return (
              <motion.div
                key={video.src}
                initial={false}
                animate={{
                  x: position * gap - groupShift,
                  scale: isActive ? 1 : 0.92,
                  opacity: isActive ? 1 : 0.45,
                  zIndex: isActive ? 10 : 0,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => {
                  if (!isActive) go(position < 0 ? -1 : 1);
                }}
                className="absolute shrink-0 cursor-pointer"
                style={{ width: "min(260px, 65vw)" }}
              >
                <div
                  className="relative overflow-hidden rounded-2xl border border-border bg-black shadow-xl dark:border-white/10"
                  style={{ aspectRatio: "9 / 16" }}
                >
                  <video
                    ref={(el) => { videoRefs.current[video.src] = el; }}
                    src={video.src}
                    playsInline
                    loop
                    preload="metadata"
                    aria-label={video.title}
                    onPlay={() => {
                      setPlaying((p) => ({ ...p, [video.src]: true }));
                      setIndex(actualIdx);
                      pauseAllExcept(video.src);
                    }}
                    onPause={() => setPlaying((p) => ({ ...p, [video.src]: false }))}
                    className="h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!isActive) { go(position < 0 ? -1 : 1); return; }
                      toggle(video.src);
                    }}
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
                <p className={`mt-4 text-center text-sm font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                  {video.title}
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>
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
          {videos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setIndex(i);
                const v = videos[i];
                if (v) pauseAllExcept(v.src);
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
