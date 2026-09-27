import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Premium custom cursor with a strong hover state:
 *  - Small precise dot that snaps to the pointer
 *  - Soft trailing blob that follows with easing
 *  - On interactive elements: blob expands into a filled pill using
 *    mix-blend-mode: difference so it inverts against any background
 *  - Shrinks on click
 *  - Hidden on touch / coarse pointer devices
 */
export function CursorFollower() {
  const blobRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const showRef = useRef<(() => void) | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Route changes can swallow the pointer events that keep the cursor visible
  // (and reset hover state), so force it back on after every navigation.
  useEffect(() => {
    showRef.current?.();
  }, [pathname]);


  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);
    // Scope the cursor:none rule to a class on <html>; it never applies when
    // the custom cursor is disabled (coarse pointers, reduced motion, mobile).
    const root = document.documentElement;
    root.classList.add("p2t-cursor");

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
      if (blobRef.current) blobRef.current.style.opacity = v ? "1" : "0";
      if (dotRef.current) dotRef.current.style.opacity = v ? "1" : "0";
    };

    showRef.current = () => {
      const blob = blobRef.current;
      if (blob) {
        blob.dataset.media = "0";
        blob.dataset.hover = "0";
        blob.dataset.down = "0";
        blob.dataset.native = "0";
      }
      setVisible(true);
    };




    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
      // Do NOT write styles here: mousemove can fire several times per frame on
      // high-polling-rate mice. The rAF loop commits at display refresh rate.
      start();
    };

    // Single DOM walk per mouseover instead of two, and only commit dataset
    // changes when the state actually differs (dataset writes invalidate the
    // mix-blend-mode layer and force a repaint).
    const MEDIA_SEL = 'a img, a picture, a video, [data-cursor="expand"]';
    const INTERACTIVE_SEL = 'a, button, [role="button"], label, summary, [data-cursor="hover"]';
    // Native cursor stays visible over text entry surfaces and embedded docs.
    const NATIVE_SEL =
      'input, textarea, select, [contenteditable=""], [contenteditable="true"], iframe';

    const onOver = (e: MouseEvent) => {
      const blob = blobRef.current;
      if (!blob) return;
      const el = e.target instanceof Element ? e.target : null;
      const media = el ? !!el.closest(MEDIA_SEL) : false;
      const hover = !media && el ? !!el.closest(INTERACTIVE_SEL) : false;
      const mediaVal = media ? "1" : "0";
      const hoverVal = hover ? "1" : "0";
      if (blob.dataset.media !== mediaVal) blob.dataset.media = mediaVal;
      if (blob.dataset.hover !== hoverVal) blob.dataset.hover = hoverVal;
    };
    const onDown = () => {
      const blob = blobRef.current;
      if (blob && blob.dataset.down !== "1") blob.dataset.down = "1";
    };
    const onUp = () => {
      const blob = blobRef.current;
      if (blob && blob.dataset.down !== "0") blob.dataset.down = "0";
    };
    const onLeave = (e: MouseEvent) => {
      // Ignore leaves that just move into a child/overlay element; only hide
      // when the pointer really exits the window.
      if (e.relatedTarget) return;
      setVisible(false);
    };
    const onEnter = () => {
      setVisible(true);
      start();
    };

    const tick = (now: number) => {
      // Identical easing constant and per-frame math as before, so the trail
      // feel/speed is unchanged.
      blobX += (mouseX - blobX) * 0.18;
      blobY += (mouseY - blobY) * 0.18;

      const dot = dotRef.current;
      if (dot) {
        const dx = mouseX - 13;
        const dy = mouseY - 13;
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

      // Once the blob has caught up with the pointer (sub-pixel distance),
      // park the loop. It restarts on the next pointer movement. This frees
      // the compositor during scrolling and idle time.
      const settled =
        Math.abs(mouseX - blobX) < 0.05 && Math.abs(mouseY - blobY) < 0.05;
      if (settled) {
        blobX = mouseX;
        blobY = mouseY;
        running = false;
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    start();

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
        @media (pointer: fine){*{cursor:none !important}}
        .lv-cursor-blob{
          position: fixed; left: 0; top: 0; z-index: 9999;
          height: 36px; width: 36px; border-radius: 9999px;
          background: #ffffff;
          mix-blend-mode: difference;
          pointer-events: none;
          opacity: 0;
          /* Only transform is compositor-animated; hinting width/height/border-radius
             cannot be composited and only costs extra memory + repaints. */
          will-change: transform;
          contain: layout style paint;
          transition: width .28s cubic-bezier(.2,.8,.2,1), height .28s cubic-bezier(.2,.8,.2,1), border-radius .28s cubic-bezier(.2,.8,.2,1), opacity .2s ease, background-color .2s ease, box-shadow .2s ease;
        }
        .lv-cursor-blob[data-hover="1"]{
          height: 56px; width: 56px;
          background: transparent;
          mix-blend-mode: normal;
          box-shadow: inset 0 0 0 1.5px rgba(7,132,255,.75);
        }
        .lv-cursor-blob[data-down="1"]{
          height: 22px; width: 22px;
        }
        .lv-cursor-blob[data-hover="1"][data-down="1"]{
          height: 44px; width: 44px;
        }

        .lv-cursor-blob[data-media="1"]{
          height: 104px; width: 104px;
          background: rgba(20,20,22,.62);
          mix-blend-mode: normal;
          backdrop-filter: blur(2px);
        }
        .lv-cursor-blob[data-media="1"][data-down="1"]{
          height: 92px; width: 92px;
        }
        .lv-cursor-label{
          display: flex; align-items: center; justify-content: center;
          height: 100%; width: 100%;
          font-size: 14px; font-weight: 500; letter-spacing: .01em;
          color: #fff; white-space: nowrap;
          opacity: 0; transform: scale(.9);
          transition: opacity .2s ease, transform .28s cubic-bezier(.2,.8,.2,1);
        }
        .lv-cursor-blob[data-media="1"] .lv-cursor-label{
          opacity: 1; transform: scale(1);
        }
        .lv-cursor-blob[data-media="1"] ~ .lv-cursor-dot{ opacity: 0 !important; }
        @media (prefers-reduced-motion: reduce){
          .lv-cursor-blob, .lv-cursor-label{ transition: opacity .2s ease; }
        }
        .lv-cursor-dot{
          position: fixed; left: 0; top: 0; z-index: 10000;
          height: 26px; width: 26px;
          pointer-events: none;
          opacity: 0;
          transition: opacity .2s ease;
          will-change: transform;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,.28));
        }
      `}</style>
      <div ref={blobRef} aria-hidden data-hover="0" data-down="0" data-media="0" className="lv-cursor-blob">
        <span className="lv-cursor-label">Expand +</span>
      </div>
      <div ref={dotRef} aria-hidden className="lv-cursor-dot">
        <svg viewBox="0 0 512 512" width="26" height="26" fill="none" aria-hidden>
          <defs>
            <linearGradient id="lv-cursor-arrow" x1="60" y1="50" x2="440" y2="450" gradientUnits="userSpaceOnUse">
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
