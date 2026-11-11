/**
 * Cookie consent: the visitor's choice, where it is stored, and how other code
 * hears about changes. Analytics (Google Analytics, Microsoft Clarity) load
 * only after the visitor allows them; nothing optional runs by default.
 *
 * The choice lives in one first-party, strictly necessary cookie. Bump
 * CONSENT_VERSION when the cookie categories change, so everyone is asked again.
 */
export const CONSENT_COOKIE = "p2t_consent";
const CONSENT_VERSION = 1;
/** About six months, within the 13 months EU regulators accept for consent. */
const CONSENT_MAX_AGE_DAYS = 180;
const CHANGE_EVENT = "p2t:consent-change";
const OPEN_EVENT = "p2t:open-cookie-settings";

export type Consent = { analytics: boolean; updatedAt: string };

function readCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const prefix = `${name}=`;
  return document.cookie
    .split("; ")
    .find((part) => part.startsWith(prefix))
    ?.slice(prefix.length);
}

/** The stored choice, or null when the visitor has not chosen yet. */
export function readConsent(): Consent | null {
  const raw = readCookie(CONSENT_COOKIE);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(raw)) as Partial<Consent> & { v?: number };
    if (parsed.v !== CONSENT_VERSION || typeof parsed.analytics !== "boolean") return null;
    return { analytics: parsed.analytics, updatedAt: String(parsed.updatedAt ?? "") };
  } catch {
    return null;
  }
}

export function hasAnalyticsConsent(): boolean {
  return readConsent()?.analytics === true;
}

/** Saves the choice and tells listeners (the analytics loader, the banner). */
export function saveConsent(analytics: boolean) {
  const consent: Consent = { analytics, updatedAt: new Date().toISOString() };
  const value = encodeURIComponent(JSON.stringify({ v: CONSENT_VERSION, ...consent }));
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=${CONSENT_MAX_AGE_DAYS * 86400}; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent<Consent>(CHANGE_EVENT, { detail: consent }));
}

export function onConsentChange(listener: (consent: Consent) => void) {
  const handler = (event: Event) => listener((event as CustomEvent<Consent>).detail);
  window.addEventListener(CHANGE_EVENT, handler);
  return () => window.removeEventListener(CHANGE_EVENT, handler);
}

/** Opens the cookie preferences dialog, e.g. from the footer link. */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onOpenCookieSettings(listener: () => void) {
  window.addEventListener(OPEN_EVENT, listener);
  return () => window.removeEventListener(OPEN_EVENT, listener);
}

/**
 * Removes analytics cookies after consent is withdrawn. GA and Clarity set
 * them on the site's own domain and its parent (.pixel2tech.com).
 */
export function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host.replace(/^www\./, "")}`];
  for (const part of document.cookie.split("; ")) {
    const name = part.split("=")[0] ?? "";
    if (!/^(_ga|_gid|_gat|_clck|_clsk|CLID|MUID)/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/${domain ? `; Domain=${domain}` : ""}`;
    }
  }
}
