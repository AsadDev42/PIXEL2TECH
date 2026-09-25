import { memo, useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  /** Classes for the wrapper box; the poster and the clip fill it (object-cover). */
  className?: string;
  /** Poster frame. Lazy-loaded, shown until the clip plays and whenever it can't. */
  poster?: string;
  /** Stops playback, e.g. from a "Pause motion" button. */
  paused?: boolean;
};

type NetworkInformationLike = { saveData?: boolean; effectiveType?: string };

/** Autoplay only when the visitor accepts motion and the connection can take it. */
function canAutoplay(): boolean {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const connection = (navigator as Navigator & { connection?: NetworkInformationLike }).connection;
  if (connection?.saveData) return false;
  // effectiveType is "slow-2g" | "2g" | "3g" | "4g".
  return !/2g|3g/.test(connection?.effectiveType ?? "");
}

/** Calls `cb` once the page has finished loading and the main thread is idle. */
function afterPageLoad(cb: () => void): () => void {
  let idle: number | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const schedule = () => {
    if (typeof window.requestIdleCallback === "function") {
      idle = window.requestIdleCallback(cb, { timeout: 2000 });
    } else {
      timer = setTimeout(cb, 200);
    }
  };
  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });
  return () => {
    window.removeEventListener("load", schedule);
    if (idle !== undefined) window.cancelIdleCallback(idle);
    if (timer !== undefined) clearTimeout(timer);
  };
}

/**
 * Decorative muted loop. Nothing but the (lazy) poster is requested until the
 * page has loaded and the tile is in the viewport, so clips never compete
 * with the fonts, CSS or hero image. The clip is never loaded when the visitor
 * prefers reduced motion or is on Data Saver / a 2G-3G connection: the poster
 * stays instead. Off-screen, hidden-tab and paused clips stop decoding.
 */
function AutoVideoImpl({ src, className = "", poster, paused = false }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // The <video> element (and its download) only exists once playback is wanted.
  const [attached, setAttached] = useState(false);
  const inView = useRef(false);
  const pageReady = useRef(false);
  const pausedRef = useRef(paused);
  const syncRef = useRef<() => void>(() => undefined);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || typeof IntersectionObserver === "undefined" || !canAutoplay()) return;

    const sync = () => {
      const shouldPlay =
        pageReady.current && inView.current && !pausedRef.current && !document.hidden;
      if (shouldPlay) setAttached(true);
      const video = videoRef.current;
      if (!video) return;
      // play() rejects when autoplay is blocked or the element is detached.
      if (shouldPlay) void video.play().catch(() => undefined);
      else if (!video.paused) video.pause();
    };
    syncRef.current = sync;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        if (!entry) return;
        inView.current = entry.isIntersecting;
        sync();
      },
      // No margin: in a looping column the duplicate tiles only load once they scroll in.
      { threshold: 0.01 },
    );
    io.observe(wrapper);

    const cancelPageLoad = afterPageLoad(() => {
      pageReady.current = true;
      sync();
    });
    document.addEventListener("visibilitychange", sync);

    return () => {
      syncRef.current = () => undefined;
      io.disconnect();
      cancelPageLoad();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  // Start the clip once its element exists, and follow the pause control.
  useEffect(() => {
    pausedRef.current = paused;
    syncRef.current();
  }, [paused, attached]);

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${className}`}>
      {poster ? (
        <img
          src={poster}
          alt=""
          loading="lazy"
          decoding="async"
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
        />
      ) : null}
      {attached ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
        />
      ) : null}
    </div>
  );
}

export const AutoVideo = memo(AutoVideoImpl);
