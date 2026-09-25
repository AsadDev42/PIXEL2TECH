import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { initAnalytics, loadAnalyticsScripts, trackPageview } from "@/lib/analytics";

/** Wait this long after the `load` event before fetching third-party tags. */
const TAG_DELAY_MS = 3500;
const INTERACTIONS = ["pointerdown", "keydown"] as const;

export function AnalyticsTracker() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const search = useRouterState({ select: (s) => s.location.searchStr });

  // The gtag queue is set up at once (no network), so the first page view and
  // early events are kept. The scripts themselves load a few seconds after the
  // page has finished loading, in an idle moment, or on the first tap or key
  // press, whichever comes first, to stay out of the LCP/TBT window.
  useEffect(() => {
    initAnalytics();

    let timer: number | undefined;
    let idle: number | undefined;

    const cleanup = () => {
      INTERACTIONS.forEach((e) => window.removeEventListener(e, start));
      window.removeEventListener("load", schedule);
      if (timer !== undefined) window.clearTimeout(timer);
      if (idle !== undefined && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idle);
      }
    };

    function start() {
      cleanup();
      loadAnalyticsScripts();
    }

    function schedule() {
      timer = window.setTimeout(() => {
        if (typeof window.requestIdleCallback === "function") {
          idle = window.requestIdleCallback(start, { timeout: 2000 });
        } else {
          start();
        }
      }, TAG_DELAY_MS);
    }

    INTERACTIONS.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }));
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return cleanup;
  }, []);

  useEffect(() => {
    // Next tick, so document.title reflects the new route.
    const t = window.setTimeout(() => trackPageview(pathname + (search || "")), 0);
    return () => window.clearTimeout(t);
  }, [pathname, search]);

  return null;
}
