import { memo, useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  className?: string;
  /** Optional poster image shown before the video is attached. */
  poster?: string;
};

/**
 * Autoplaying decorative video that only downloads and plays while it is
 * (near) the viewport. Off-screen videos are paused so the browser stops
 * decoding frames — this keeps scrolling smooth when many clips share a page.
 *
 * Visually identical to a plain muted/looping <video>: same object-cover fill,
 * same rounded parent, no controls.
 */
function AutoVideoImpl({ src, className = "", poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  // Only attach the media source once the element gets close to the viewport.
  const [active, setActive] = useState(false);
  const inViewRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const play = () => {
      // play() rejects when autoplay is blocked or the element is detached.
      void el.play().catch(() => undefined);
    };

    if (typeof IntersectionObserver === "undefined") {
      inViewRef.current = true;
      setActive(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        if (!entry) return;
        inViewRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          setActive(true);
          play();
        } else if (!el.paused) {
          el.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );
    io.observe(el);

    // The source is attached one render after the element becomes active, so
    // resume playback as soon as the media is actually ready.
    const onCanPlay = () => {
      if (inViewRef.current && !document.hidden) play();
    };
    el.addEventListener("loadeddata", onCanPlay);

    const onVisibility = () => {
      if (document.hidden) el.pause();
      else if (inViewRef.current) play();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      el.removeEventListener("loadeddata", onCanPlay);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (active && el && inViewRef.current) void el.play().catch(() => undefined);
  }, [active]);


  return (
    <video
      ref={ref}
      src={active ? src : undefined}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
      className={className}
    />
  );
}

export const AutoVideo = memo(AutoVideoImpl);
