import { useEffect, useRef, useState } from "react";

/**
 * Premium custom cursor:
 *  - Small solid dot that snaps to the mouse
 *  - Larger outlined ring that trails with easing
 *  - Ring grows + fills softly when hovering interactive elements
 *  - Ring shrinks to a tight click dot on mouse-down
 *  - Hidden on touch / coarse pointer devices
 */
export function CursorFollower() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;
    let visible = false;

    const setVisible = (v: boolean) => {
      visible = v;
      if (ringRef.current) ringRef.current.style.opacity = v ? "1" : "0";
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
      if (!ringRef.current) return;
      ringRef.current.dataset.hover = isInteractive(e.target) ? "1" : "0";
    };
    const onDown = () => {
      if (ringRef.current) ringRef.current.dataset.down = "1";
    };
    const onUp = () => {
      if (ringRef.current) ringRef.current.dataset.down = "0";
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const tick = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 20}px, ${ringY - 20}px, 0)`;
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
      <style>{`@media (pointer: fine){*{cursor:none !important}}`}</style>
      <div
        ref={ringRef}
        aria-hidden
        data-hover="0"
        data-down="0"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full border-2 border-foreground/70 opacity-0 backdrop-blur-[1px] transition-[width,height,background-color,border-color,opacity] duration-200 ease-out data-[hover=1]:h-16 data-[hover=1]:w-16 data-[hover=1]:border-foreground data-[hover=1]:bg-foreground/10 data-[down=1]:h-6 data-[down=1]:w-6 data-[down=1]:border-foreground data-[down=1]:bg-foreground/20"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-foreground opacity-0 transition-opacity duration-200"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
