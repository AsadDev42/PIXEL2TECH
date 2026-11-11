import { animate, stagger } from "animejs";
import { useEffect, useLayoutEffect, type RefObject } from "react";

/**
 * Small anime.js helpers. Content is always visible in the server HTML: these
 * only animate things that appear after a user action (a menu opening) or on a
 * client-side page change, never on the first paint. Scroll reveals stay off
 * site-wide (see components/motion.tsx for why).
 */

const EASE = "outQuad";

/** False until the first page has hydrated, so the initial load never animates. */
let navigatedClientSide = false;

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function reducedMotion() {
  return (
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Fades and lifts the `[data-enter]` children of `ref` when a page mounts after a
 * client-side navigation. One short entrance with a small stagger.
 */
export function usePageEntrance(ref: RefObject<HTMLElement | null>) {
  useIsoLayoutEffect(() => {
    const root = ref.current;
    if (!root || !navigatedClientSide || reducedMotion()) return;
    const targets = root.querySelectorAll<HTMLElement>("[data-enter]");
    if (targets.length === 0) return;
    const animation = animate(targets, {
      opacity: [0, 1],
      translateY: [12, 0],
      duration: 420,
      delay: stagger(60),
      ease: EASE,
    });
    return () => {
      animation.revert();
    };
  }, [ref]);

  useEffect(() => {
    navigatedClientSide = true;
  }, []);
}

/**
 * Staggers the `selector` items inside `ref` each time `open` turns true, so a
 * menu reads top to bottom as it opens.
 */
export function useOpenStagger(
  ref: RefObject<HTMLElement | null>,
  open: boolean,
  selector = "[data-stagger]",
) {
  useEffect(() => {
    const root = ref.current;
    if (!open || !root || reducedMotion()) return;
    const targets = root.querySelectorAll<HTMLElement>(selector);
    if (targets.length === 0) return;
    const animation = animate(targets, {
      opacity: [0, 1],
      translateY: [6, 0],
      duration: 260,
      delay: stagger(18),
      ease: EASE,
    });
    return () => {
      animation.revert();
    };
  }, [ref, open, selector]);
}
