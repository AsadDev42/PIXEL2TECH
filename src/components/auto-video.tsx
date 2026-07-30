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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setActive(true);
          // play() rejects when autoplay is blocked or the element unmounts.
          void el.play().catch(() => undefined);
        } else if (!el.paused) {
          el.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );

    io.observe(el);

    const onVisibility = () => {
      if (document.hidden) {
        el.pause();
      } else if (active) {
        void el.play().catch(() => undefined);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
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
