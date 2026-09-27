import { memo, useEffect, useRef, useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";

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
  /**
   * Show a Pause/Play button (WCAG 2.2.2: moving content needs a pause control).
   * Pass the accessible name, e.g. "team carousel". Hidden under reduced motion,
   * where nothing drifts anyway.
   */
  pauseControlLabel?: string;
  /**
   * Called when an item is clicked or tapped without dragging. Use it to make
   * whole cards clickable: real links inside cards cannot start a drag.
   */
  onItemClick?: (item: T, index: number) => void;
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
  pauseControlLabel,
  onItemClick,
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
    focused: false,
  });
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;
  // Kept in refs so toggling autoplay/hover-pause never rebuilds the RAF loop.
  const autoplayRef = useRef(autoplay);
  autoplayRef.current = autoplay;
  const itemsRef = useRef(items);
  itemsRef.current = items;
  const onItemClickRef = useRef(onItemClick);
  onItemClickRef.current = onItemClick;
  const downIndexRef = useRef<number | null>(null);
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

    const dir = resolvedDir === "ltr" || resolvedDir === "down" ? 1 : -1;
    // Respect the OS "reduce motion" setting: no ambient drift, drag still works.
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let last = performance.now();
    let raf = 0;
    let running = false;
    let lastTransform = "";

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const s = stateRef.current;
      if (!s.dragging) {
        const drifting =
          autoplayRef.current &&
          !pausedRef.current &&
          !reducedMotion.matches &&
          // Never move content out from under keyboard focus.
          !s.focused &&
          !(pauseOnHoverRef.current && s.hovering);
        if (drifting) s.pos += dir * speed * dt;
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
      // Never start a drag (and never capture the pointer) on interactive
      // children — pointer capture retargets the click to the track, which
      // silently swallows link and button activation.
      const target = e.target as Element | null;
      if (target?.closest?.("a,button,[role='button'],input,textarea,select")) return;
      if (e.pointerType === "mouse") e.preventDefault();
      const cell = target?.closest?.("[data-loop-index]");
      downIndexRef.current = cell ? Number(cell.getAttribute("data-loop-index")) : null;

      s.dragging = true;
      s.start = isX ? e.clientX : e.clientY;
      s.startPos = s.pos;
      s.lastMove = s.start;
      s.lastMoveT = performance.now();
      s.velocity = 0;
      s.moved = 0;
      s.pointerId = e.pointerId;
      try {
        track.setPointerCapture(e.pointerId);
      } catch {
        // Pointer capture can fail if the pointer is already gone; safe to ignore.
      }
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
        try {
          track.releasePointerCapture(s.pointerId);
        } catch {
          // Pointer capture can fail if the pointer is already gone; safe to ignore.
        }
      }
      s.pointerId = null;
      track.style.cursor = "grab";
      // A press that barely moved is a click: open the item.
      const i = downIndexRef.current;
      downIndexRef.current = null;
      const list = itemsRef.current;
      if (s.moved <= 5 && i !== null && list.length && onItemClickRef.current) {
        onItemClickRef.current(list[i % list.length], i % list.length);
      }
    };
    const onClickCapture = (e: MouseEvent) => {
      if (stateRef.current.moved > 5) {
        e.preventDefault();
        e.stopPropagation();
        stateRef.current.moved = 0;
      }
    };

    // Hover pause is opt-in per instance but always wired, so the prop can flip
    // at runtime without tearing down the animation loop.
    const onEnter = () => {
      stateRef.current.hovering = true;
    };
    const onLeave = () => {
      stateRef.current.hovering = false;
    };
    const onFocusIn = () => {
      stateRef.current.focused = true;
    };
    const onFocusOut = (e: FocusEvent) => {
      if (!track.contains(e.relatedTarget as Node | null)) stateRef.current.focused = false;
    };
    track.addEventListener("pointerenter", onEnter);
    track.addEventListener("pointerleave", onLeave);
    track.addEventListener("focusin", onFocusIn);
    track.addEventListener("focusout", onFocusOut);

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
      track.removeEventListener("pointerenter", onEnter);
      track.removeEventListener("pointerleave", onLeave);
      track.removeEventListener("focusin", onFocusIn);
      track.removeEventListener("focusout", onFocusOut);

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
    ? // Vertical sliders must never swallow page scrolling on touch devices:
      // allow native pan-y on small screens and only capture the gesture from lg up.
      isX
      ? "touch-pan-y"
      : "touch-pan-y lg:touch-none"
    : "touch-auto";
  const trackClass = isX
    ? `flex w-max ${touchClass} select-none ${gapClassName}`
    : `flex flex-col h-max ${touchClass} select-none ${gapClassName}`;

  const pauseButton =
    pauseControlLabel && autoplay ? (
      <div className="mx-auto mt-4 flex max-w-7xl justify-end px-5 motion-reduce:hidden md:px-10">
        <button
          type="button"
          onClick={() => setPaused((v) => !v)}
          aria-pressed={paused}
          aria-label={`${paused ? "Play" : "Pause"} ${pauseControlLabel}`}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background px-4 text-sm font-semibold text-foreground transition hover:bg-muted"
        >
          {paused ? (
            <Play className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Pause className="h-4 w-4" aria-hidden="true" />
          )}
          {paused ? "Play" : "Pause"}
        </button>
      </div>
    ) : null;

  return (
    <>
      <div
        className={`${fadeClass} overflow-hidden ${className}`}
        role={ariaLabel ? "region" : undefined}
        aria-label={ariaLabel}
      >
        <div ref={trackRef} className={trackClass} style={{ willChange: "transform" }}>
          {loop.map((item, i) => {
            // The second copy only exists for the seamless wrap: hide it from
            // assistive tech and take its links out of the tab order.
            const clone = i >= items.length;
            return (
              <div
                key={keyFor(item, i)}
                className="shrink-0"
                data-loop-index={i}
                aria-hidden={clone ? "true" : undefined}
              >
                {renderItem(item, i)}
              </div>
            );
          })}
        </div>
      </div>
      {pauseButton}
    </>
  );
}

/**
 * Memoized so parent re-renders (theme toggles, form state) don't rebuild the
 * whole duplicated track. Cast keeps the generic signature intact.
 */
export const LoopSlider = memo(LoopSliderImpl) as typeof LoopSliderImpl;
