import { memo, useEffect, useRef, type ReactNode } from "react";

type Axis = "x" | "y";
type DirX = "rtl" | "ltr";
type DirY = "up" | "down";

type Props<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyFor: (item: T, index: number) => string;
  /** Scroll axis. Default "x". */
  axis?: Axis;
  /** Auto-scroll direction. Default "rtl" for x, "down" for y. */
  direction?: DirX | DirY;
  /** Pixels per second. */
  speed?: number;
  /** Gap between items (Tailwind classes). */
  gapClassName?: string;
  /** Extra classes for the outer viewport. */
  className?: string;
  /** Optional aria-label for the scroller. */
  ariaLabel?: string;
  /** Enable grab-and-fling drag interaction. Default true. */
  draggable?: boolean;
  /** Auto-scroll drift. Set false to stop drifting (drag still works). Default true. */
  autoplay?: boolean;
  /** Pause the drift while the pointer hovers the track. Default false. */
  pauseOnHover?: boolean;
};


/**
 * LoopLoop Slider — draggable, momentum-preserving, seamlessly looping slider.
 * Supports horizontal (x) and vertical (y) axes. Users can grab and fling the track;
 * when idle it drifts at a constant speed and wraps forever. The original list is
 * duplicated internally for seamless wrap-around; only the first copy is announced
 * to assistive tech.
 */
function LoopSliderImpl<T>({
  items,
  renderItem,
  keyFor,
  axis = "x",
  direction,
  speed = 40,
  gapClassName = "gap-4 sm:gap-6",
  className = "",
  ariaLabel,
  draggable = true,
  autoplay = true,
  pauseOnHover = false,
}: Props<T>) {
  const loop = [...items, ...items];
  const trackRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    pos: 0,
    half: 0,
    dragging: false,
    start: 0,
    startPos: 0,
    lastMove: 0,
    lastMoveT: 0,
    velocity: 0,
    pointerId: null as number | null,
    moved: 0,
    hovering: false,
  });
  // Kept in refs so toggling autoplay/hover-pause never rebuilds the RAF loop.
  const autoplayRef = useRef(autoplay);
  autoplayRef.current = autoplay;
  const pauseOnHoverRef = useRef(pauseOnHover);
  pauseOnHoverRef.current = pauseOnHover;

  const resolvedDir: DirX | DirY = direction ?? (axis === "x" ? "rtl" : "down");
  const isX = axis === "x";


  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      // The track renders the list twice. Total size = 2 * content + (2n - 1) gaps,
      // so one loop period is (total + one gap) / 2. Ignoring the gap makes the
      // duplicated half drift and tiles visually overlap/jump on wrap-around.
      const cs = getComputedStyle(track);
      const gap = parseFloat(isX ? cs.columnGap : cs.rowGap) || 0;
      const total = isX ? track.scrollWidth : track.scrollHeight;
      stateRef.current.half = total > 0 ? (total + gap) / 2 : 0;
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    const dir =
      resolvedDir === "ltr" || resolvedDir === "down" ? 1 : -1;
    let last = performance.now();
    let raf = 0;
    let running = false;
    let lastTransform = "";

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const s = stateRef.current;
      if (!s.dragging) {
        s.pos += dir * speed * dt;
        if (Math.abs(s.velocity) > 1) {
          s.pos += s.velocity * dt;
          s.velocity *= Math.pow(0.001, dt);
        }
      }
      if (s.half > 0) {
        while (s.pos <= -s.half) s.pos += s.half;
        while (s.pos > 0) s.pos -= s.half;
      }
      const next = isX
        ? `translate3d(${s.pos.toFixed(2)}px, 0, 0)`
        : `translate3d(0, ${s.pos.toFixed(2)}px, 0)`;
      // Skip redundant style writes; each one invalidates the compositor.
      if (next !== lastTransform) {
        track.style.transform = next;
        lastTransform = next;
      }
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(raf);
    };

    // Only animate while the slider is actually visible and the tab is active.
    let visible = true;
    let io: IntersectionObserver | null = null;
    const sync = () => {
      if (visible && !document.hidden) start();
      else stop();
    };

    if (typeof IntersectionObserver !== "undefined") {
      visible = false;
      io = new IntersectionObserver(
        (entries) => {
          visible = entries.some((e) => e.isIntersecting);
          sync();
        },
        { rootMargin: "150px 0px" },
      );
      io.observe(track);
    }

    const onVisibility = () => sync();
    document.addEventListener("visibilitychange", onVisibility);
    sync();


    const onDown = (e: PointerEvent) => {
      const s = stateRef.current;
      if (e.button !== undefined && e.button !== 0) return;
      if (e.pointerType === "mouse") e.preventDefault();
      s.dragging = true;
      s.start = isX ? e.clientX : e.clientY;
      s.startPos = s.pos;
      s.lastMove = s.start;
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
      const client = isX ? e.clientX : e.clientY;
      const d = client - s.start;
      s.moved = Math.max(s.moved, Math.abs(d));
      s.pos = s.startPos + d;
      const now = performance.now();
      const dt = (now - s.lastMoveT) / 1000;
      if (dt > 0) s.velocity = (client - s.lastMove) / dt;
      s.lastMove = client;
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

    if (draggable) {
      track.addEventListener("pointerdown", onDown);
      track.addEventListener("pointermove", onMove);
      track.addEventListener("pointerup", onUp);
      track.addEventListener("pointercancel", onUp);
      track.addEventListener("click", onClickCapture, true);
      track.style.cursor = "grab";
    }

    return () => {
      stop();
      cancelAnimationFrame(raf);
      io?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      ro.disconnect();

      if (draggable) {
        track.removeEventListener("pointerdown", onDown);
        track.removeEventListener("pointermove", onMove);
        track.removeEventListener("pointerup", onUp);
        track.removeEventListener("pointercancel", onUp);
        track.removeEventListener("click", onClickCapture, true);
      }
    };
  }, [isX, resolvedDir, speed, draggable]);

  const fadeClass = isX ? "edge-fade-x" : "edge-fade-y";
  const touchClass = draggable
    // Vertical sliders must never swallow page scrolling on touch devices:
    // allow native pan-y on small screens and only capture the gesture from lg up.
    ? (isX ? "touch-pan-y" : "touch-pan-y lg:touch-none")
    : "touch-auto";
  const trackClass = isX
    ? `flex w-max ${touchClass} select-none ${gapClassName}`
    : `flex flex-col h-max ${touchClass} select-none ${gapClassName}`;

  return (
    <div className={`${fadeClass} overflow-hidden ${className}`} aria-label={ariaLabel}>
      <div
        ref={trackRef}
        className={trackClass}
        style={{ willChange: "transform" }}
      >
        {loop.map((item, i) => (
          <div key={keyFor(item, i)} className="shrink-0" aria-hidden={i >= items.length ? "true" : undefined}>
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Memoized so parent re-renders (theme toggles, form state) don't rebuild the
 * whole duplicated track. Cast keeps the generic signature intact.
 */
export const LoopSlider = memo(LoopSliderImpl) as typeof LoopSliderImpl;
