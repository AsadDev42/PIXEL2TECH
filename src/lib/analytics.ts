/**
 * Analytics in one place: IDs, the gtag queue, script loading and events.
 * AnalyticsTracker (src/components/analytics-tracker.tsx) decides *when* the
 * third-party scripts load; everything else lives here.
 */
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: { (...args: unknown[]): void; q?: unknown[] };
    __p2tTagsLoaded?: boolean;
  }
}

export const GA_ID: string = (import.meta.env.VITE_GA_ID as string | undefined) || "G-K9RD3Z8MGQ";
export const CLARITY_ID = "xwm4fwtyip";

/**
 * Creates the gtag command queue without any network request. Page views and
 * events sent before gtag.js arrives wait in `dataLayer` and are sent when it
 * loads, so nothing is lost by loading the script late.
 *
 * `send_page_view: false`: page views are sent by trackPageview on every route
 * (including the first), so GA's automatic one would double-count.
 */
export function initAnalytics() {
  if (typeof window === "undefined" || !GA_ID || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  // gtag.js only understands the `arguments` object, not a rest-param array.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { send_page_view: false });
}

function appendScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

/** Fetches gtag.js and Microsoft Clarity, once per page load. */
export function loadAnalyticsScripts() {
  if (typeof window === "undefined" || window.__p2tTagsLoaded) return;
  window.__p2tTagsLoaded = true;

  if (GA_ID) {
    initAnalytics();
    appendScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`);
  }

  if (CLARITY_ID) {
    if (!window.clarity) {
      const queue: unknown[] = [];
      const clarity = function clarity() {
        // eslint-disable-next-line prefer-rest-params
        queue.push(arguments);
      } as NonNullable<Window["clarity"]>;
      clarity.q = queue;
      window.clarity = clarity;
    }
    appendScript(`https://www.clarity.ms/tag/${CLARITY_ID}`);
  }
}

let lastPagePath: string | null = null;

export function trackPageview(path: string, title?: string) {
  if (typeof window === "undefined" || !window.gtag || path === lastPagePath) return;
  lastPagePath = path;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title ?? document.title,
    page_location: window.location.href,
  });
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}
