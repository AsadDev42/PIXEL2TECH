import { useEffect, useRef, type ReactNode } from "react";

type Props<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyFor: (item: T, index: number) => string;
  /** Auto-scroll direction. Default "rtl" (right→left). */
  direction?: "rtl" | "ltr";
  /** Pixels per second. */
  speed?: number;
  /** Gap between items (Tailwind classes). */
  gapClassName?: string;
  /** Extra classes for the outer viewport. */
  className?: string;
  /** Optional aria-label for the scroller. */
  ariaLabel?: string;
};

/**
 * LoopLoop Slider — draggable, momentum-preserving, seamlessly looping horizontal slider.
 * Users can grab and fling the track; when idle it drifts at a constant speed in the
 * configured direction and wraps forever. Original list is duplicated internally for
 * seamless wrap-around; only the first copy is announced to assistive tech.
 */
export function LoopSlider<T>({
  items,
  renderItem,
  keyFor,
  direction = "rtl",
  speed = 40,
  gapClassName = "gap-4 sm:gap-6",
  className = "",
  ariaLabel,
}: Props<T>) {
  const loop = [...items, ...items];
  const trackRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    x: 0,
    halfWidth: 0,
    dragging: false,
    startX: 0,
    startPosX: 0,
    lastMoveX: 0,
    lastMoveT: 0,
    velocity: 0,
    pointerId: null as number | null,
    moved: 0,
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      stateRef.current.halfWidth = track.scrollWidth / 2;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    const dir = direction === "ltr" ? 1 : -1;
    let last = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const s = stateRef.current;
      if (!s.dragging) {
        s.x += dir * speed * dt;
        if (Math.abs(s.velocity) > 1) {
          s.x += s.velocity * dt;
          s.velocity *= Math.pow(0.001, dt);
        }
      }
      if (s.halfWidth > 0) {
        while (s.x <= -s.halfWidth) s.x += s.halfWidth;
        while (s.x > 0) s.x -= s.halfWidth;
      }
      track.style.transform = `translate3d(${s.x}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onDown = (e: PointerEvent) => {
      const s = stateRef.current;
      s.dragging = true;
      s.startX = e.clientX;
      s.startPosX = s.x;
      s.lastMoveX = e.clientX;
      s.lastMoveT = performance.now();
      s.velocity = 0;
      s.moved = 0;
      s.pointerId = e.pointerId;
      try { track.setPointerCapture(e.pointerId); } catch {}
      track.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      const s = stateRef.current;
      if (!s.dragging) return;
      const dx = e.clientX - s.startX;
      s.moved = Math.max(s.moved, Math.abs(dx));
      s.x = s.startPosX + dx;
      const now = performance.now();
      const dt = (now - s.lastMoveT) / 1000;
      if (dt > 0) s.velocity = (e.clientX - s.lastMoveX) / dt;
      s.lastMoveX = e.clientX;
      s.lastMoveT = now;
    };
    const onUp = () => {
      const s = stateRef.current;
      if (!s.dragging) return;
      s.dragging = false;
      if (s.pointerId !== null) {
        try { track.releasePointerCapture(s.pointerId); } catch {}
      }
      s.pointerId = null;
      track.style.cursor = "grab";
    };
    const onClickCapture = (e: MouseEvent) => {
      if (stateRef.current.moved > 5) {
        e.preventDefault();
        e.stopPropagation();
        stateRef.current.moved = 0;
      }
    };

    track.addEventListener("pointerdown", onDown);
    track.addEventListener("pointermove", onMove);
    track.addEventListener("pointerup", onUp);
    track.addEventListener("pointercancel", onUp);
    track.addEventListener("click", onClickCapture, true);
    track.style.cursor = "grab";

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      track.removeEventListener("pointerdown", onDown);
      track.removeEventListener("pointermove", onMove);
      track.removeEventListener("pointerup", onUp);
      track.removeEventListener("pointercancel", onUp);
      track.removeEventListener("click", onClickCapture, true);
    };
  }, [direction, speed]);

  return (
    <div className={`edge-fade-x overflow-hidden ${className}`} aria-label={ariaLabel}>
      <div
        ref={trackRef}
        className={`flex w-max touch-pan-y select-none ${gapClassName}`}
        style={{ willChange: "transform" }}
      >
        {loop.map((item, i) => (
          <div key={keyFor(item, i)} aria-hidden={i >= items.length ? "true" : undefined}>
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  );
}
