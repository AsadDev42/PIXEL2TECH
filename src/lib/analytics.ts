// Lightweight GA4 wrapper. The gtag.js script is loaded globally in
// src/routes/__root.tsx so it fires immediately after <head>. This module
// only provides the gtag helper and SPA page-view tracking.
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_ID =
  (import.meta.env.VITE_GA_ID as string | undefined) || "G-K9RD3Z8MGQ";

export function initAnalytics() {
  if (typeof window === "undefined" || !GA_ID) return;
  // The global script in __root.tsx already bootstraps dataLayer and gtag.
  // This function is kept for API compatibility with AnalyticsTracker.
}

export function trackPageview(path: string, title?: string) {
  if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title ?? document.title,
    page_location: window.location.href,
  });
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (window.gtag && GA_ID) window.gtag("event", name, params);
}
