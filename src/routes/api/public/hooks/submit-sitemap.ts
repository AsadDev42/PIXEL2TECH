import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site-config";

const SITEMAP_URL = `${SITE.url}/sitemap.xml`;
const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";

type SiteEntry = { siteUrl: string; permissionLevel?: string };
/** Full detail stays in the server logs; callers only ever see `ok`. */
type SubmissionResult = { ok: boolean; detail: unknown };

function coversTarget(siteUrl: string, target: URL) {
  if (siteUrl.startsWith("sc-domain:")) {
    const domain = siteUrl.slice("sc-domain:".length).toLowerCase();
    const host = target.hostname.toLowerCase();
    return host === domain || host.endsWith(`.${domain}`);
  }
  try {
    return target.href.startsWith(new URL(siteUrl).href);
  } catch {
    return false;
  }
}

/** Submit (re-submit) the sitemap to Google Search Console. */
async function submitToGoogle(): Promise<SubmissionResult> {
  const lovableApiKey = process.env.LOVABLE_API_KEY;
  const connectionApiKey = process.env.GOOGLE_SEARCH_CONSOLE_API_KEY;
  if (!lovableApiKey || !connectionApiKey) {
    return { ok: false, detail: "Search Console connection not configured" };
  }

  const headers = {
    Authorization: `Bearer ${lovableApiKey}`,
    "X-Connection-Api-Key": connectionApiKey,
  };

  const listRes = await fetch(`${GATEWAY}/webmasters/v3/sites`, { headers });
  if (!listRes.ok) {
    return { ok: false, detail: { status: listRes.status, body: await listRes.text() } };
  }

  const { siteEntry = [] } = (await listRes.json()) as { siteEntry?: SiteEntry[] };
  const target = new URL(SITE.url);
  const matches = siteEntry.filter(
    (e) => e.permissionLevel !== "siteUnverifiedUser" && coversTarget(e.siteUrl, target),
  );
  if (matches.length === 0) {
    return { ok: false, detail: "No verified Search Console property covers this site" };
  }

  const properties = [];
  for (const match of matches) {
    const url = `${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(match.siteUrl)}/sitemaps/${encodeURIComponent(SITEMAP_URL)}`;
    const res = await fetch(url, { method: "PUT", headers });
    properties.push({
      property: match.siteUrl,
      ok: res.ok,
      status: res.status,
      ...(res.ok ? {} : { body: await res.text() }),
    });
  }

  return { ok: properties.every((p) => p.ok), detail: properties };
}

/** Submit the sitemap to Bing Webmaster Tools (also feeds Yahoo + DuckDuckGo). */
async function submitToBing(): Promise<SubmissionResult> {
  const apiKey = process.env.BING_WEBMASTER_API_KEY;
  if (!apiKey) {
    return { ok: false, detail: "BING_WEBMASTER_API_KEY not configured" };
  }

  const res = await fetch(
    `https://ssl.bing.com/webmaster/api.svc/json/SubmitFeed?apikey=${encodeURIComponent(apiKey)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ siteUrl: SITE.url, feedUrl: SITEMAP_URL }),
    },
  );
  const body = await res.text();
  return { ok: res.ok, detail: { status: res.status, body: body.slice(0, 500) } };
}

async function runSubmission() {
  const failed = (e: unknown): SubmissionResult => ({ ok: false, detail: String(e) });
  const [google, bing] = await Promise.all([
    submitToGoogle().catch(failed),
    submitToBing().catch(failed),
  ]);

  // Upstream error bodies and configuration state are for the owner's logs
  // only. This endpoint is public, so the response carries nothing but flags.
  const log = google.ok && bing.ok ? console.log : console.error;
  log("Sitemap submission result:", JSON.stringify({ sitemap: SITEMAP_URL, google, bing }));

  return Response.json(
    { ok: google.ok || bing.ok, google: google.ok, bing: bing.ok },
    { status: google.ok || bing.ok ? 200 : 502, headers: { "cache-control": "no-store" } },
  );
}

export const Route = createFileRoute("/api/public/hooks/submit-sitemap")({
  server: {
    handlers: {
      POST: async () => runSubmission(),
      GET: async () => runSubmission(),
    },
  },
});
