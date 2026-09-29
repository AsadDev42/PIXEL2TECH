import { memo, useCallback, useEffect, useId, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import type { PortfolioVideo, VideoOrientation } from "@/lib/portfolio-data";
import { PROTECTED_VIDEO_PROPS, claimVideoSound, onVideoSoundClaimed } from "@/lib/video-sound";

const GRID: Record<VideoOrientation, string> = {
  vertical: "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
  landscape: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
};

const ASPECT: Record<VideoOrientation, string> = {
  vertical: "aspect-[9/16]",
  landscape: "aspect-video",
};

const GROUP_LABEL: Record<VideoOrientation, string> = {
  vertical: "Vertical videos (9:16)",
  landscape: "Landscape videos (16:9)",
};

/**
 * Grid of a project's videos. Every card plays a muted, looping preview while
 * it is on screen; clicking a card restarts it from the beginning with sound,
 * and clicking again returns it to the muted preview. Only one video on the
 * page plays with sound at a time. With reduced motion there are no previews:
 * the poster stays until the visitor presses play.
 */
export function VideoWall({ videos, label }: { videos: PortfolioVideo[]; label: string }) {
  const wallId = useId();
  const [soundIndex, setSoundIndex] = useState<number | null>(null);
  // Off until mounted, so the server render and reduced-motion visitors get no previews.
  const [motionOK, setMotionOK] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const mq =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    const updateMotion = () => setMotionOK(!mq?.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    mq?.addEventListener?.("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      mq?.removeEventListener?.("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  // Another player on the page took the sound: go back to previews.
  useEffect(
    () =>
      onVideoSoundClaimed((owner) => {
        if (!owner.startsWith(`${wallId}:`)) setSoundIndex(null);
      }),
    [wallId],
  );

  const claim = useCallback(
    (index: number) => {
      claimVideoSound(`${wallId}:${index}`);
      setSoundIndex(index);
    },
    [wallId],
  );
  const release = useCallback((index: number) => {
    setSoundIndex((current) => (current === index ? null : current));
  }, []);

  if (videos.length === 0) return null;

  // One grid per orientation, in the order they first appear.
  const orientations = [...new Set(videos.map((v) => v.orientation))];
  const mixed = orientations.length > 1;

  return (
    <div role="group" aria-label={label} className="space-y-10">
      {orientations.map((orientation) => (
        <div key={orientation}>
          {mixed && (
            <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
              {GROUP_LABEL[orientation]}
            </h3>
          )}
          <ul className={GRID[orientation]}>
            {videos.map((video, index) =>
              video.orientation === orientation ? (
                <li key={video.src}>
                  <VideoCard
                    video={video}
                    index={index}
                    withSound={soundIndex === index}
                    motionOK={motionOK}
                    pageVisible={pageVisible}
                    onClaim={claim}
                    onRelease={release}
                  />
                </li>
              ) : null,
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

type CardProps = {
  video: PortfolioVideo;
  index: number;
  withSound: boolean;
  motionOK: boolean;
  pageVisible: boolean;
  onClaim: (index: number) => void;
  onRelease: (index: number) => void;
};

const VideoCard = memo(function VideoCard({
  video,
  index,
  withSound,
  motionOK,
  pageVisible,
  onClaim,
  onRelease,
}: CardProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Within ~400px of the viewport: start fetching metadata. Stays true once set.
  const [near, setNear] = useState(false);
  // At least 20% visible: run the muted preview.
  const [inView, setInView] = useState(false);
  // Any part visible: keep the sound playing.
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setNear(true);
      setInView(true);
      setOnScreen(true);
      return;
    }
    const nearObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          nearObserver.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    const viewObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        if (!entry) return;
        setOnScreen(entry.isIntersecting);
        setInView(entry.isIntersecting && entry.intersectionRatio >= 0.2);
      },
      { threshold: [0, 0.2, 0.5] },
    );
    nearObserver.observe(el);
    viewObserver.observe(el);
    return () => {
      nearObserver.disconnect();
      viewObserver.disconnect();
    };
  }, []);

  // Muted preview: plays while in view, pauses off screen or in a hidden tab.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (withSound) {
      // Scrolled away or switched tabs while listening: back to the preview.
      if (!onScreen || !pageVisible) onRelease(index);
      return;
    }
    v.muted = true;
    v.loop = true;
    if (motionOK && near && inView && pageVisible) {
      // play() rejects when autoplay is blocked; the poster stays in that case.
      void v.play().catch(() => undefined);
    } else if (!v.paused) {
      v.pause();
    }
  }, [withSound, motionOK, near, inView, onScreen, pageVisible, index, onRelease]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (withSound) {
      v.muted = true;
      v.loop = true;
      if (!motionOK) v.pause();
      onRelease(index);
      return;
    }
    // From the start, with sound. play() must run inside the click for iOS.
    v.loop = false;
    v.muted = false;
    try {
      v.currentTime = 0;
    } catch {
      // Not seekable yet; it starts from 0 anyway.
    }
    onClaim(index);
    void v.play().catch(() => {
      v.muted = true;
      onRelease(index);
    });
  };

  const aspect = ASPECT[video.orientation];

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-label={withSound ? `Mute: ${video.title}` : `Play with sound: ${video.title}`}
        data-protect=""
        className={`group relative block w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${aspect} ${
          withSound ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""
        }`}
      >
        <img
          src={video.poster}
          alt=""
          loading="lazy"
          decoding="async"
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <video
          ref={videoRef}
          src={video.src}
          poster={near ? video.poster : undefined}
          muted
          loop
          playsInline
          preload={near ? "metadata" : "none"}
          aria-hidden="true"
          tabIndex={-1}
          onEnded={() => {
            if (withSound) onRelease(index);
          }}
          {...PROTECTED_VIDEO_PROPS}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/60 to-transparent"
        />
        {!withSound && (
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg transition ${
              motionOK
                ? "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                : "opacity-100"
            }`}
          >
            <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />
          </span>
        )}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-2 left-2 inline-flex max-w-[calc(100%-1rem)] items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold leading-none ${
            withSound ? "bg-primary text-primary-foreground" : "bg-black/65 text-white"
          }`}
        >
          {withSound ? (
            <Volume2 className="h-3.5 w-3.5 shrink-0" />
          ) : (
            <VolumeX className="h-3.5 w-3.5 shrink-0" />
          )}
          <span className="truncate">{withSound ? "Sound on" : "Play with sound"}</span>
        </span>
      </button>
      <p aria-hidden="true" className="mt-2 text-sm text-muted-foreground">
        {video.title}
      </p>
    </>
  );
});
