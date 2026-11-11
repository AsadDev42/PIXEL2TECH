import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import {
  initAnalytics,
  loadAnalyticsScripts,
  revokeAnalytics,
  trackPageview,
} from "@/lib/analytics";
import { hasAnalyticsConsent, onConsentChange } from "@/lib/consent";

/** Wait this long after the `load` event before fetching third-party tags. */
const TAG_DELAY_MS = 3500;
const INTERACTIONS = ["pointerdown", "keydown"] as const;

function currentPath() {
  return window.location.pathname + window.location.search;
}

export function AnalyticsTracker() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const search = useRouterState({ select: (s) => s.location.searchStr });

  // Nothing loads until the visitor accepts analytics cookies. For a returning
  // visitor who already accepted, the gtag queue is set up at once (no
  // network), so the first page view and early events are kept, and the
  // scripts load a few seconds after the page has finished loading, in an idle
  // moment, or on the first tap or key press, to stay out of the LCP/TBT window.
  useEffect(() => {
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

    if (hasAnalyticsConsent()) {
      initAnalytics();
      INTERACTIONS.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }));
      if (document.readyState === "complete") schedule();
      else window.addEventListener("load", schedule, { once: true });
    }

    // A choice made in the banner applies at once: accepting loads the tags
    // and counts the current page; rejecting stops them and deletes cookies.
    const unsubscribe = onConsentChange((consent) => {
      if (consent.analytics) {
        initAnalytics();
        trackPageview(currentPath());
        start();
      } else {
        cleanup();
        revokeAnalytics();
      }
    });

    return () => {
      cleanup();
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    // Next tick, so document.title reflects the new route.
    const t = window.setTimeout(() => trackPageview(pathname + (search || "")), 0);
    return () => window.clearTimeout(t);
  }, [pathname, search]);

  return null;
}
