import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Custom cursor for mouse users:
 *  - Small brand-blue arrow that snaps to the pointer
 *  - Soft trailing blob that follows with easing (inverts against any background)
 *  - On links and buttons: the blob becomes an outlined ring
 *  - On clickable media (images/videos inside links, or [data-cursor="expand"]):
 *    the blob grows into a pill labelled "View" (override with data-cursor-label)
 *  - Over text fields and embedded frames the native cursor comes back, so the
 *    text caret and third-party widgets work normally
 *  - Disabled on touch, small screens and for prefers-reduced-motion
 */
const MEDIA_SEL = 'a img, a picture, a video, [data-cursor="expand"]';
const INTERACTIVE_SEL = 'a, button, [role="button"], select, label, summary, [data-cursor="hover"]';
const NATIVE_SEL =
  'input:not([type="button"]):not([type="submit"]):not([type="checkbox"]):not([type="radio"]), textarea, [contenteditable="true"], iframe';

export function CursorFollower() {
  const blobRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);
  const showRef = useRef<(() => void) | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Route changes can swallow the pointer events that keep the cursor visible
  // (and reset hover state), so force it back on after every navigation.
  useEffect(() => {
    showRef.current?.();
  }, [pathname]);

  useEffect(() => {
    const capable = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 768px) and (prefers-reduced-motion: no-preference)",
    );
    if (!capable.matches) return;
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let blobX = mouseX;
    let blobY = mouseY;
    // Last values actually committed to the DOM, so we can skip redundant
    // style writes (each write repaints the blend-mode layer).
    let lastDotX = Number.NaN;
    let lastDotY = Number.NaN;
    let lastBlobX = Number.NaN;
    let lastBlobY = Number.NaN;
    let raf = 0;
    let running = false;
    let visible = false;

    const setVisible = (v: boolean) => {
      visible = v;
      if (blobRef.current) blobRef.current.style.opacity = v ? "" : "0";
      if (dotRef.current) dotRef.current.style.opacity = v ? "" : "0";
    };

    const setState = (key: "media" | "hover" | "down" | "native", on: boolean) => {
      const blob = blobRef.current;
      const val = on ? "1" : "0";
      if (blob && blob.dataset[key] !== val) blob.dataset[key] = val;
    };

    showRef.current = () => {
      setState("media", false);
      setState("hover", false);
      setState("down", false);
      setState("native", false);
      setVisible(true);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
      // Do NOT write styles here: mousemove can fire several times per frame on
      // high-polling-rate mice. The rAF loop commits at display refresh rate.
      start();
    };

    // One DOM walk per mouseover; dataset is only written when state changes.
    const onOver = (e: MouseEvent) => {
      const el = e.target instanceof Element ? e.target : null;
      const native = !!el?.closest(NATIVE_SEL);
      const mediaEl = !native ? el?.closest(MEDIA_SEL) : null;
      const hover = !native && !mediaEl && !!el?.closest(INTERACTIVE_SEL);
      if (mediaEl && labelRef.current) {
        const label =
          mediaEl.closest("[data-cursor-label]")?.getAttribute("data-cursor-label") ?? "View";
        if (labelRef.current.textContent !== label) labelRef.current.textContent = label;
      }
      setState("native", native);
      setState("media", !!mediaEl);
      setState("hover", hover);
    };
    const onDown = () => setState("down", true);
    const onUp = () => setState("down", false);
    const onLeave = (e: MouseEvent) => {
      // Only hide when the pointer really exits the window.
      if (e.relatedTarget) return;
      setVisible(false);
    };
    const onEnter = () => {
      setVisible(true);
      start();
    };

    const tick = () => {
      blobX += (mouseX - blobX) * 0.18;
      blobY += (mouseY - blobY) * 0.18;

      const dot = dotRef.current;
      if (dot) {
        const dx = mouseX - 3;
        const dy = mouseY - 2;
        if (dx !== lastDotX || dy !== lastDotY) {
          dot.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
          lastDotX = dx;
          lastDotY = dy;
        }
      }

      const blob = blobRef.current;
      if (blob && (blobX !== lastBlobX || blobY !== lastBlobY)) {
        blob.style.transform = `translate3d(${blobX}px, ${blobY}px, 0) translate(-50%, -50%)`;
        lastBlobX = blobX;
        lastBlobY = blobY;
      }

      // Park the loop once the blob has caught up; the next move restarts it.
      const settled = Math.abs(mouseX - blobX) < 0.05 && Math.abs(mouseY - blobY) < 0.05;
      if (settled) {
        blobX = mouseX;
        blobY = mouseY;
        running = false;
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      running = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <style>{`
        html.p2t-cursor, html.p2t-cursor * { cursor: none !important; }
        html.p2t-cursor :is(${NATIVE_SEL}) { cursor: auto !important; }
        .lv-cursor-blob{
          position: fixed; left: 0; top: 0; z-index: 9999;
          height: 36px; width: 36px; border-radius: 9999px;
          background: #ffffff;
          mix-blend-mode: difference;
          pointer-events: none;
          opacity: 0;
          will-change: transform;
          contain: layout style paint;
          transition: width .28s cubic-bezier(.2,.8,.2,1), height .28s cubic-bezier(.2,.8,.2,1), opacity .2s ease, background-color .2s ease, box-shadow .2s ease;
        }
        .lv-cursor-blob[data-hover="1"]{
          height: 56px; width: 56px;
          background: transparent;
          mix-blend-mode: normal;
          box-shadow: inset 0 0 0 1.5px var(--brand);
        }
        .lv-cursor-blob[data-down="1"]{ height: 22px; width: 22px; }
        .lv-cursor-blob[data-hover="1"][data-down="1"]{ height: 44px; width: 44px; }
        .lv-cursor-blob[data-media="1"]{
          height: 96px; width: 96px;
          background: rgb(10 13 31 / .72);
          mix-blend-mode: normal;
          backdrop-filter: blur(2px);
        }
        .lv-cursor-blob[data-media="1"][data-down="1"]{ height: 86px; width: 86px; }
        .lv-cursor-label{
          display: flex; align-items: center; justify-content: center;
          height: 100%; width: 100%;
          font-size: 14px; font-weight: 600; letter-spacing: .01em;
          color: #fff; white-space: nowrap;
          opacity: 0; transform: scale(.9);
          transition: opacity .2s ease, transform .28s cubic-bezier(.2,.8,.2,1);
        }
        .lv-cursor-blob[data-media="1"] .lv-cursor-label{ opacity: 1; transform: scale(1); }
        .lv-cursor-blob[data-media="1"] ~ .lv-cursor-dot,
        .lv-cursor-blob[data-native="1"],
        .lv-cursor-blob[data-native="1"] ~ .lv-cursor-dot{ opacity: 0 !important; }
        .lv-cursor-dot{
          position: fixed; left: 0; top: 0; z-index: 10000;
          height: 24px; width: 24px;
          pointer-events: none;
          opacity: 0;
          transition: opacity .2s ease;
          will-change: transform;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,.28));
        }
      `}</style>
      <HideNativeCursor />
      <div
        ref={blobRef}
        aria-hidden="true"
        data-hover="0"
        data-down="0"
        data-media="0"
        data-native="0"
        className="lv-cursor-blob"
      >
        <span ref={labelRef} className="lv-cursor-label">
          View
        </span>
      </div>
      <div ref={dotRef} aria-hidden="true" className="lv-cursor-dot">
        <svg viewBox="0 0 512 512" width="24" height="24" fill="none" aria-hidden="true">
          <defs>
            <linearGradient
              id="lv-cursor-arrow"
              x1="60"
              y1="50"
              x2="440"
              y2="450"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4da3ff" />
              <stop offset="1" stopColor="#1b3a8f" />
            </linearGradient>
          </defs>
          <path
            d="M63 46c-14-6-28 8-22 22l138 385c6 17 30 17 36 0l50-140a20 20 0 0 1 12-12l140-50c17-6 17-30 0-36L63 46z"
            fill="url(#lv-cursor-arrow)"
          />
        </svg>
      </div>
    </>
  );
}

/** Hides the system cursor only while the custom cursor is mounted. */
function HideNativeCursor() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("p2t-cursor");
    return () => root.classList.remove("p2t-cursor");
  }, []);
  return null;
}
