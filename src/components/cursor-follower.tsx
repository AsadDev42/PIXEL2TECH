import { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let blobX = mouseX;
    let blobY = mouseY;
    let raf = 0;
    let visible = false;

    const setVisible = (v: boolean) => {
      visible = v;
      if (blobRef.current) blobRef.current.style.opacity = v ? "1" : "0";
      if (dotRef.current) dotRef.current.style.opacity = v ? "1" : "0";
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      }
    };

    const isInteractive = (el: EventTarget | null) => {
      if (!(el instanceof Element)) return false;
      return !!el.closest(
        'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor="hover"]',
      );
    };
    const onOver = (e: MouseEvent) => {
      if (!blobRef.current) return;
      blobRef.current.dataset.hover = isInteractive(e.target) ? "1" : "0";
    };
    const onDown = () => {
      if (blobRef.current) blobRef.current.dataset.down = "1";
    };
    const onUp = () => {
      if (blobRef.current) blobRef.current.dataset.down = "0";
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const tick = () => {
      blobX += (mouseX - blobX) * 0.18;
      blobY += (mouseY - blobY) * 0.18;
      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(${blobX}px, ${blobY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
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
          will-change: transform, width, height, border-radius;
          transition: width .28s cubic-bezier(.2,.8,.2,1), height .28s cubic-bezier(.2,.8,.2,1), border-radius .28s cubic-bezier(.2,.8,.2,1), opacity .2s ease;
        }
        .lv-cursor-blob[data-hover="1"]{
          height: 68px; width: 68px;
        }
        .lv-cursor-blob[data-down="1"]{
          height: 22px; width: 22px;
        }
        .lv-cursor-dot{
          position: fixed; left: 0; top: 0; z-index: 10000;
          height: 6px; width: 6px; border-radius: 9999px;
          background: #ffffff;
          mix-blend-mode: difference;
          pointer-events: none;
          opacity: 0;
          transition: opacity .2s ease;
          will-change: transform;
        }
      `}</style>
      <div ref={blobRef} aria-hidden data-hover="0" data-down="0" className="lv-cursor-blob" />
      <div ref={dotRef} aria-hidden className="lv-cursor-dot" />
    </>
  );
}
