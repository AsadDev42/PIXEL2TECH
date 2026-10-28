import { MediaImage } from "@/components/media-image";
import { memo, useEffect, useRef, useState } from "react";
import { Play, Maximize2 } from "lucide-react";
import type { PortfolioVideo, VideoOrientation } from "@/lib/portfolio-data";
import { PROTECTED_VIDEO_PROPS } from "@/lib/video-sound";
import { PortfolioVideoPlayer } from "@/components/portfolio-video-player";

const GRID: Record<VideoOrientation, string> = {
  vertical: "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
  landscape: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
};
const ASPECT = { vertical: "aspect-[9/16]", landscape: "aspect-video" };

/** Lightweight muted loops keep the original preview experience without fetching full videos. */
export function VideoWall({
  videos,
  label,
  layout = "grid",
  playlist = videos,
}: {
  videos: PortfolioVideo[];
  label: string;
  layout?: "grid" | "slider";
  playlist?: PortfolioVideo[];
}) {
  const [active, setActive] = useState<number | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [motionOK, setMotionOK] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionOK(!motion.matches);
    const visibility = () => setPageVisible(!document.hidden);
    update();
    visibility();
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      motion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  if (!videos.length) return null;
  const orientations = [...new Set(videos.map((video) => video.orientation))];
  return (
    <div role="group" aria-label={label} className="space-y-10">
      {orientations.map((orientation) => (
        <div key={orientation}>
          {orientations.length > 1 && (
            <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
              {orientation === "vertical" ? "Vertical videos (9:16)" : "Landscape videos (16:9)"}
            </h3>
          )}
          <ul
            className={
              layout === "slider"
                ? "flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 pt-1 motion-reduce:scroll-auto [scrollbar-color:var(--border)_transparent] [scrollbar-width:thin]"
                : GRID[orientation]
            }
          >
            {videos.map((video) =>
              video.orientation === orientation ? (
                <li
                  key={video.poster}
                  className={
                    layout === "slider"
                      ? `min-w-0 shrink-0 snap-start ${orientation === "vertical" ? "w-[184px] sm:w-[216px]" : "w-[280px] sm:w-[360px]"}`
                      : undefined
                  }
                >
                  <VideoCard
                    video={video}
                    running={motionOK && pageVisible && active === null}
                    showCaption={layout !== "slider"}
                    onOpen={(button) => {
                      trigger.current = button;
                      setActive(playlist.findIndex((item) => item.poster === video.poster));
                    }}
                  />
                </li>
              ) : null,
            )}
          </ul>
        </div>
      ))}
      <PortfolioVideoPlayer
        videos={playlist}
        index={active}
        onSelect={setActive}
        onClose={() => setActive(null)}
        returnFocus={trigger}
      />
    </div>
  );
}

const VideoCard = memo(function VideoCard({
  video,
  running,
  onOpen,
  showCaption,
}: {
  video: PortfolioVideo;
  running: boolean;
  onOpen: (button: HTMLButtonElement) => void;
  showCaption: boolean;
}) {
  const button = useRef<HTMLButtonElement>(null);
  const preview = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = button.current;
    if (!element) return;
    if (typeof IntersectionObserver === "undefined") {
      setNear(true);
      setVisible(true);
      return;
    }
    const nearby = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNear(true);
          nearby.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(Boolean(entry?.isIntersecting)),
      { threshold: 0.2 },
    );
    nearby.observe(element);
    observer.observe(element);
    return () => {
      nearby.disconnect();
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    const element = preview.current;
    if (!element) return;
    if (running && near && visible) void element.play().catch(() => undefined);
    else element.pause();
  }, [running, near, visible]);
  return (
    <>
      <button
        ref={button}
        type="button"
        onClick={(event) => onOpen(event.currentTarget)}
        aria-label={`Open video: ${video.title}`}
        aria-haspopup="dialog"
        data-protect=""
        className={`group relative block w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${ASPECT[video.orientation]}`}
      >
        <MediaImage
          src={video.poster}
          alt={`${video.title} — preview frame`}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        {video.preview && near && (
          <video
            title={video.title}
            ref={preview}
            src={video.preview}
            poster={video.poster}
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
            {...PROTECTED_VIDEO_PROPS}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
        )}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/60 to-transparent"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-950 shadow-lg transition group-hover:scale-110"
        >
          <Play size={20} fill="currentColor" />
        </span>
        <span
          aria-hidden="true"
          className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/65 px-3 py-1 text-[11px] font-semibold text-white"
        >
          <Maximize2 size={12} /> Open player
        </span>
      </button>
      {showCaption && (
        <p aria-hidden="true" className="mt-2 text-sm text-muted-foreground">
          {video.title}
        </p>
      )}
    </>
  );
});
