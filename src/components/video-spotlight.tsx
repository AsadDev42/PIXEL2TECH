import { useCallback, useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { CarouselControls, CarouselShell, loopOffset } from "@/components/coverflow-3d";
import {
  PROTECTED_VIDEO_PROPS,
  claimVideoSound,
  onVideoSoundClaimed,
  prefersReducedMotion,
} from "@/lib/video-sound";

export type SpotlightVideo = {
  src: string;
  title: string;
};

/** Long enough to read a title; well above the 5s WCAG 2.2.2 threshold. */
const AUTO_ADVANCE_MS = 6000;

/**
 * Card width and the distance between card centres. Phones step by one card
 * plus a 16px gap so the active video sits in the middle with its neighbours
 * peeking in; from md up the cards sit 300px apart.
 */
const stageStyle = {
  "--vs-card": "min(260px, 68vw)",
  height: "calc(min(260px, 68vw) * 16 / 9 + 64px)",
} as CSSProperties;

/**
 * Vertical video slider for case studies. The active video is always centred,
 * visitors can swipe, use the buttons or (while focused) the arrow keys, and
 * the slideshow pauses on hover, focus, touch, sound playback or when off-screen.
 *
 * The active slide runs a muted, looping preview while the carousel is on
 * screen. Its button restarts it from the beginning with sound; pressing it
 * again returns to the muted preview. Only one video on the page has sound.
 */
export function VideoSpotlight({
  videos,
  label = "Video creatives",
}: {
  videos: SpotlightVideo[];
  label?: string;
}) {
  const count = videos.length;
  const ownerId = useId();
  const [index, setIndex] = useState(0);
  /** The video playing from the start with sound, if any. */
  const [soundSrc, setSoundSrc] = useState<string | null>(null);
  // Off until mounted, so the server render and reduced-motion visitors get no
  // auto-advance and no muted preview.
  const [autoplay, setAutoplay] = useState(false);
  const [motionOK, setMotionOK] = useState(false);
  const [held, setHeld] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef(new Map<string, HTMLVideoElement>());

  useEffect(() => {
    const motion = !prefersReducedMotion();
    setAutoplay(motion);
    setMotionOK(motion);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return () => document.removeEventListener("visibilitychange", updateVisibility);
    }
    const io = new IntersectionObserver(([entry]) => setInView(!!entry?.isIntersecting), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  // Another player on the page took the sound: back to the muted preview.
  useEffect(
    () =>
      onVideoSoundClaimed((owner) => {
        if (owner !== ownerId) setSoundSrc(null);
      }),
    [ownerId],
  );

  const activeSrc = videos[index]?.src;

  // The active slide runs a muted, looping preview while the carousel is on
  // screen; every other slide is paused. A video playing with sound is left alone.
  useEffect(() => {
    if (soundSrc && (soundSrc !== activeSrc || !inView || !pageVisible)) {
      setSoundSrc(null);
      return;
    }
    videoRefs.current.forEach((v, src) => {
      if (src === soundSrc) return;
      v.muted = true;
      v.loop = true;
      if (src === activeSrc && motionOK && inView && pageVisible) {
        void v.play().catch(() => undefined);
      } else if (!v.paused) {
        v.pause();
      }
    });
  }, [activeSrc, soundSrc, motionOK, inView, pageVisible]);

  const select = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  // Timer restarts on every slide change, so manual navigation never skips ahead.
  useEffect(() => {
    if (!autoplay || held || !inView || soundSrc || count < 2) return;
    const id = window.setTimeout(() => select(index + 1), AUTO_ADVANCE_MS);
    return () => window.clearTimeout(id);
  }, [autoplay, held, inView, soundSrc, count, index, select]);

  if (count === 0) return null;

  // Manual navigation stops the slideshow for good; the play button restarts it.
  const step = (dir: -1 | 1) => {
    setAutoplay(false);
    select(index + dir);
  };

  const toggleSound = (src: string) => {
    const v = videoRefs.current.get(src);
    if (!v) return;
    if (soundSrc === src) {
      // Back to the muted preview (or the still frame with reduced motion).
      v.muted = true;
      v.loop = true;
      if (!motionOK) v.pause();
      setSoundSrc(null);
      return;
    }
    // From the start, with sound. play() must run inside the click for iOS.
    setAutoplay(false);
    claimVideoSound(ownerId);
    v.loop = false;
    v.muted = false;
    try {
      v.currentTime = 0;
    } catch {
      // Not seekable yet; it starts from 0 anyway.
    }
    setSoundSrc(src);
    void v.play().catch(() => {
      v.muted = true;
      setSoundSrc(null);
    });
  };

  const active = videos[index]!;

  return (
    <div ref={rootRef}>
      <CarouselShell
        label={label}
        onStep={step}
        announcement={`Video ${index + 1} of ${count}: ${active.title}`}
        autoAdvancing={autoplay && !held}
        onHoldChange={setHeld}
      >
        {/* Bleeds to the section edge (the parent uses px-5 md:px-10). */}
        <div
          className="edge-fade-x relative -mx-5 overflow-hidden [--vs-step:calc(var(--vs-card)_+_16px)] md:-mx-10 md:[--vs-step:300px]"
          style={stageStyle}
        >
          {videos.map((video, i) => {
            const offset = loopOffset(i, index, count);
            const abs = Math.abs(offset);
            // Only the active video and two on each side are mounted.
            if (abs > 2) return null;
            const isActive = offset === 0;
            const withSound = soundSrc === video.src;
            return (
              <div
                key={video.src}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}: ${video.title}`}
                aria-hidden={!isActive || undefined}
                onClick={isActive ? undefined : () => step(offset < 0 ? -1 : 1)}
                className={`absolute left-1/2 top-0 transition-[transform,opacity] duration-500 ease-out ${
                  isActive ? "z-10" : "cursor-pointer"
                }`}
                style={{
                  width: "var(--vs-card)",
                  transform: `translateX(calc(-50% + ${offset} * var(--vs-step))) scale(${isActive ? 1 : 0.9})`,
                  opacity: isActive ? 1 : abs === 1 ? 0.5 : 0.25,
                }}
              >
                <div
                  data-protect=""
                  className={`relative aspect-[9/16] overflow-hidden rounded-2xl border bg-muted shadow-xl ${
                    withSound ? "border-primary ring-2 ring-primary" : "border-border"
                  }`}
                >
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current.set(video.src, el);
                      else videoRefs.current.delete(video.src);
                    }}
                    // The #t fragment makes iOS Safari paint the first frame as a poster.
                    src={`${video.src}#t=0.1`}
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    tabIndex={-1}
                    onEnded={() => {
                      // Finished with sound: back to the muted preview.
                      if (soundSrc === video.src) setSoundSrc(null);
                    }}
                    {...PROTECTED_VIDEO_PROPS}
                    className="h-full w-full object-cover"
                  />
                  {isActive && (
                    <button
                      type="button"
                      onClick={() => toggleSound(video.src)}
                      aria-label={
                        withSound ? `Mute: ${video.title}` : `Play with sound: ${video.title}`
                      }
                      className="group absolute inset-0 flex items-center justify-center focus-visible:outline-none"
                    >
                      <span
                        aria-hidden="true"
                        className={`flex h-14 w-14 items-center justify-center rounded-full bg-background/95 text-foreground shadow-2xl ring-1 ring-border/40 transition group-focus-visible:opacity-100 group-focus-visible:ring-2 group-focus-visible:ring-ring ${
                          withSound ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                        }`}
                      >
                        {withSound ? (
                          <VolumeX className="h-5 w-5" />
                        ) : (
                          <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />
                        )}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold leading-none ${
                          withSound
                            ? "bg-primary text-primary-foreground"
                            : "bg-black/65 text-white"
                        }`}
                      >
                        {withSound ? (
                          <Volume2 className="h-3.5 w-3.5" />
                        ) : (
                          <VolumeX className="h-3.5 w-3.5" />
                        )}
                        {withSound ? "Sound on" : "Play with sound"}
                      </span>
                    </button>
                  )}
                </div>
                <p
                  className={`mt-3 line-clamp-2 text-center text-sm font-medium ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {video.title}
                </p>
              </div>
            );
          })}
        </div>

        <CarouselControls
          className="mt-6"
          count={count}
          index={index}
          onStep={step}
          onSelect={(i) => {
            setAutoplay(false);
            select(i);
          }}
          itemLabel={(i) => `Show video ${i + 1} of ${count}`}
          noun="video"
          playing={autoplay}
          onTogglePlay={() => setAutoplay((on) => !on)}
        />
      </CarouselShell>
    </div>
  );
}
