import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Motion-graphics style cursor, like the pointer in explainer videos:
 *  - Clean white arrow with a dark outline that glides after the pointer and
 *    tilts a little in the direction of travel
 *  - Turns into a pointing hand over links and buttons
 *  - A ripple ring plays on every click
 *  - A small "View" tag rides along over images and videos
 *  - Hidden on touch / coarse pointers, small screens and reduced motion, and
 *    over text fields so the real caret shows
 */
export function CursorFollower() {
  const rootRef = useRef<HTMLDivElement>(null);
  const ripplesRef = useRef<HTMLDivElement>(null);
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
    let x = mouseX;
    let y = mouseY;
    let tilt = 0;
    let last = "";
    let raf = 0;
    let running = false;
    let visible = false;
    // Over a native text-entry surface the real caret shows instead.
    let overNative = false;

    const setVisible = (v: boolean) => {
      visible = v;
      if (rootRef.current) rootRef.current.style.opacity = v ? "1" : "0";
    };

    const setState = (key: "hover" | "media" | "down", on: boolean) => {
      const el = rootRef.current;
      const val = on ? "1" : "0";
      if (el && el.dataset[key] !== val) el.dataset[key] = val;
    };

    showRef.current = () => {
      overNative = false;
      setState("hover", false);
      setState("media", false);
      setState("down", false);
      setVisible(true);
    };

    const MEDIA_SEL = 'a img, a picture, a video, [data-cursor="expand"]';
    const INTERACTIVE_SEL =
      'a, button, [role="button"], label, summary, select, [data-cursor="hover"]';
    const NATIVE_SEL = 'input, textarea, [contenteditable=""], [contenteditable="true"], iframe';

    const tick = () => {
      // Ease towards the pointer: quick enough to feel direct, soft enough to
      // read as animated rather than a raw system cursor.
      const dx = mouseX - x;
      const dy = mouseY - y;
      x += dx * 0.32;
      y += dy * 0.32;
      // Lean into horizontal motion, capped, and relax back to upright.
      tilt += (Math.max(-14, Math.min(14, dx * 0.6)) - tilt) * 0.2;

      const el = rootRef.current;
      if (el) {
        const t = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${tilt.toFixed(2)}deg)`;
        if (t !== last) {
          el.style.transform = t;
          last = t;
        }
      }

      // Park the loop once everything has settled; it restarts on movement.
      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1 && Math.abs(tilt) < 0.05) {
        x = mouseX;
        y = mouseY;
        tilt = 0;
        if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(0deg)`;
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

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible && !overNative) setVisible(true);
      start();
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target instanceof Element ? e.target : null;
      if (el?.closest(NATIVE_SEL)) {
        overNative = true;
        setVisible(false);
        return;
      }
      overNative = false;
      if (!visible) setVisible(true);
      const media = !!el?.closest(MEDIA_SEL);
      setState("media", media);
      setState("hover", !!el?.closest(INTERACTIVE_SEL));
    };

    const onDown = (e: MouseEvent) => {
      setState("down", true);
      const layer = ripplesRef.current;
      if (!layer || overNative) return;
      const ring = document.createElement("span");
      ring.className = "p2t-cursor-ripple";
      ring.style.left = `${e.clientX}px`;
      ring.style.top = `${e.clientY}px`;
      ring.addEventListener("animationend", () => ring.remove(), { once: true });
      layer.appendChild(ring);
    };
    const onUp = () => setState("down", false);

    const onLeave = (e: MouseEvent) => {
      // Only hide when the pointer really leaves the window.
      if (e.relatedTarget) return;
      setVisible(false);
    };
    const onEnter = () => {
      if (!overNative) setVisible(true);
      start();
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
      root.classList.remove("p2t-cursor");
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
        /* Hide the native cursor only where the custom one replaces it; text
           fields, contenteditable and iframes keep their real cursor. */
        @media (pointer: fine){
          html.p2t-cursor *{cursor:none !important}
          html.p2t-cursor input,
          html.p2t-cursor textarea,
          html.p2t-cursor [contenteditable],
          html.p2t-cursor iframe{cursor:auto !important}
        }
        .p2t-cursor-root{
          position: fixed; left: 0; top: 0; z-index: 10000;
          width: 0; height: 0;
          pointer-events: none;
          opacity: 0;
          transition: opacity .18s ease;
          will-change: transform;
        }
        .p2t-cursor-glyph{
          position: absolute; left: 0; top: 0;
          transform-origin: 3px 2px;
          transition: transform .22s cubic-bezier(.34,1.56,.64,1), opacity .15s ease;
          filter: drop-shadow(0 2px 3px rgba(0,0,0,.35)) drop-shadow(0 6px 14px rgba(0,0,0,.18));
        }
        .p2t-cursor-hand{ opacity: 0; transform: scale(.6); transform-origin: 9px 3px; }
        .p2t-cursor-root[data-hover="1"] .p2t-cursor-arrow{ opacity: 0; transform: scale(.6); }
        .p2t-cursor-root[data-hover="1"] .p2t-cursor-hand{ opacity: 1; transform: scale(1); }
        .p2t-cursor-root[data-down="1"] .p2t-cursor-arrow{ transform: scale(.82); }
        .p2t-cursor-root[data-down="1"] .p2t-cursor-hand{ transform: scale(.86); }
        .p2t-cursor-tag{
          position: absolute; left: 22px; top: 22px;
          padding: 5px 11px; border-radius: 999px;
          background: #0A0D1F; color: #fff;
          font-size: 12px; font-weight: 600; letter-spacing: .02em; white-space: nowrap;
          box-shadow: 0 6px 18px rgba(0,0,0,.25);
          opacity: 0; transform: translateY(4px) scale(.9);
          transition: opacity .18s ease, transform .25s cubic-bezier(.34,1.56,.64,1);
        }
        .p2t-cursor-root[data-media="1"] .p2t-cursor-tag{ opacity: 1; transform: none; }
        .p2t-cursor-ripples{ position: fixed; inset: 0; z-index: 9999; pointer-events: none; }
        .p2t-cursor-ripple{
          position: absolute; width: 44px; height: 44px; margin: -22px 0 0 -22px;
          border-radius: 999px; border: 2px solid #1E90FF;
          animation: p2t-ripple .5s cubic-bezier(.2,.8,.2,1) forwards;
        }
        @keyframes p2t-ripple{
          from{ transform: scale(.2); opacity: .9; }
          to{ transform: scale(1.4); opacity: 0; }
        }
      `}</style>
      <div ref={ripplesRef} aria-hidden className="p2t-cursor-ripples" />
      <div
        ref={rootRef}
        aria-hidden
        data-hover="0"
        data-media="0"
        data-down="0"
        className="p2t-cursor-root"
      >
        <svg
          className="p2t-cursor-glyph p2t-cursor-arrow"
          width="24"
          height="30"
          viewBox="0 0 24 30"
          fill="none"
          style={{ left: -3, top: -2 }}
        >
          <path
            d="M3 2.2v22.2c0 .9 1.1 1.3 1.7.6l5.1-5.6 3.7 8.3c.3.6 1 .9 1.6.6l2.6-1.2c.6-.3.9-1 .6-1.6l-3.7-8.2 7.5-.4c.9 0 1.3-1.1.6-1.7L4.7 1.4C4 .8 3 1.3 3 2.2Z"
            fill="#fff"
            stroke="#0A0D1F"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className="p2t-cursor-glyph p2t-cursor-hand"
          width="26"
          height="30"
          viewBox="0 0 26 30"
          fill="none"
          style={{ left: -9, top: -3 }}
        >
          <path
            d="M9 3.2c0-1.3 1-2.2 2.2-2.2s2.2.9 2.2 2.2v8.3l.4-.1c.3-1.1 1.2-1.8 2.3-1.8 1.2 0 2.1.8 2.2 2l.3-.1c.4-.8 1.2-1.3 2.1-1.3 1.3 0 2.3 1 2.3 2.3v.5c.4-.2.8-.3 1.2-.3 1.1 0 1.9.9 1.9 2v4.6c0 5.6-3.9 9.7-9.3 9.7h-1.2c-3.3 0-5.6-1.4-7.4-4.1l-4.3-6.6c-.6-1-.4-2.2.5-2.9.9-.7 2.2-.6 3 .3L9 18V3.2Z"
            fill="#fff"
            stroke="#0A0D1F"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        <span className="p2t-cursor-tag">View</span>
      </div>
    </>
  );
}
