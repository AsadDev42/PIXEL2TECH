import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { initAnalytics, trackPageview } from "@/lib/analytics";

export function AnalyticsTracker() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const search = useRouterState({ select: (s) => s.location.searchStr });

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    // Defer to next tick so document.title reflects the new route.
    const t = setTimeout(() => trackPageview(pathname + (search || "")), 0);
    return () => clearTimeout(t);
  }, [pathname, search]);

  return null;
}
