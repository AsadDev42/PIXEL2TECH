import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { initAnalytics, trackPageview } from "@/lib/analytics";

const GA_ID = "G-K9RD3Z8MGQ";
const CLARITY_ID = "xwm4fwtyip";

/** Load third-party tags after the page is interactive (or on first input). */
function loadThirdParty() {
  const w = window as unknown as Record<string, any>;
  if (w.__p2tTagsLoaded) return;
  w.__p2tTagsLoaded = true;

  // Microsoft Clarity
  w.clarity =
    w.clarity ||
    function (...args: unknown[]) {
      (w.clarity.q = w.clarity.q || []).push(args);
    };
  const c = document.createElement("script");
  c.async = true;
  c.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
  document.head.appendChild(c);

  // GA4
  w.dataLayer = w.dataLayer || [];
  function gtag(...args: unknown[]) {
    w.dataLayer.push(args);
  }
  w.gtag = w.gtag || gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);
  const g = document.createElement("script");
  g.async = true;
  g.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(g);
}

export function AnalyticsTracker() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const search = useRouterState({ select: (s) => s.location.searchStr });

  useEffect(() => {
    const start = () => loadThirdParty();
    const ric = (window as any).requestIdleCallback as
      | ((cb: () => void, o?: { timeout: number }) => number)
      | undefined;
    const id = ric ? ric(start, { timeout: 4000 }) : window.setTimeout(start, 2500);
    const events = ["pointerdown", "keydown", "scroll"] as const;
    events.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }));
    initAnalytics();
    return () => {
      events.forEach((e) => window.removeEventListener(e, start));
      if (!ric) window.clearTimeout(id as number);
    };
  }, []);


  useEffect(() => {
    // Defer to next tick so document.title reflects the new route.
    const t = setTimeout(() => trackPageview(pathname + (search || "")), 0);
    return () => clearTimeout(t);
  }, [pathname, search]);

  return null;
}
