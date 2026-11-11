import { clearAnalyticsCookies, hasAnalyticsConsent } from "@/lib/consent";

/**
 * Analytics in one place: IDs, the gtag queue, script loading and events.
 * Nothing here runs until the visitor accepts analytics cookies in the consent
 * banner (src/lib/consent.ts). AnalyticsTracker
 * (src/components/analytics-tracker.tsx) decides *when* the third-party scripts
 * load once consent is given; everything else lives here.
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
 * Tags only run on the public domain. Preview deployments and localhost would
 * otherwise send owner/test sessions to GA and Clarity, and Clarity cannot load
 * the preview's stylesheets on replay, so those recordings show unstyled pages.
 */
let lastPagePath: string | null = null;

const PRODUCTION_HOSTS = new Set(["pixel2tech.com", "www.pixel2tech.com"]);

function isProductionHost() {
  return typeof window !== "undefined" && PRODUCTION_HOSTS.has(window.location.hostname);
}

/** Production host and the visitor has accepted analytics cookies. */
function analyticsAllowed() {
  return isProductionHost() && hasAnalyticsConsent();
}

/**
 * Creates the gtag command queue without any network request. Page views and
 * events sent before gtag.js arrives wait in `dataLayer` and are sent when it
 * loads, so nothing is lost by loading the script late.
 *
 * `send_page_view: false`: page views are sent by trackPageview on every route
 * (including the first), so GA's automatic one would double-count.
 */
export function initAnalytics() {
  if (!analyticsAllowed() || !GA_ID) return;
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = false;
  if (window.gtag) {
    window.gtag("consent", "update", { analytics_storage: "granted" });
    return;
  }
  window.dataLayer = window.dataLayer || [];
  // gtag.js only understands the `arguments` object, not a rest-param array.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  // Consent Mode v2: analytics was accepted; the site runs no ads, so ad
  // storage and ad personalization stay denied.
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { send_page_view: false });
}

/**
 * Stops analytics after the visitor withdraws consent: tells GA and Clarity,
 * blocks further GA hits for this page load and deletes their cookies.
 */
export function revokeAnalytics() {
  if (typeof window === "undefined") return;
  if (GA_ID) (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = true;
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
  window.clarity?.("consentv2", { ad_Storage: "denied", analytics_Storage: "denied" });
  window.clarity?.("consent", false);
  clearAnalyticsCookies();
  lastPagePath = null;
}

function appendScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

/** Fetches gtag.js and Microsoft Clarity, once per page load. */
export function loadAnalyticsScripts() {
  if (!analyticsAllowed() || window.__p2tTagsLoaded) return;
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
    window.clarity("consentv2", { ad_Storage: "denied", analytics_Storage: "granted" });
    appendScript(`https://www.clarity.ms/tag/${CLARITY_ID}`);
  }
}

export function trackPageview(path: string, title?: string) {
  if (typeof window === "undefined" || !window.gtag || path === lastPagePath) return;
  if (!hasAnalyticsConsent()) return;
  lastPagePath = path;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title ?? document.title,
    page_location: window.location.href,
  });
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !window.gtag || !hasAnalyticsConsent()) return;
  window.gtag("event", name, params);
}
