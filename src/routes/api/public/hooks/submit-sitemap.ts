import { createFileRoute } from "@tanstack/react-router";

const SITE_URL = "https://pixel2tech.com";
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";

type SiteEntry = { siteUrl: string; permissionLevel?: string };

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
async function submitToGoogle() {
  const lovableApiKey = process.env.LOVABLE_API_KEY;
  const connectionApiKey = process.env.GOOGLE_SEARCH_CONSOLE_API_KEY;
  if (!lovableApiKey || !connectionApiKey) {
    return { ok: false, skipped: true, reason: "Search Console connection not configured" };
  }

  const headers = {
    Authorization: `Bearer ${lovableApiKey}`,
    "X-Connection-Api-Key": connectionApiKey,
  };

  const listRes = await fetch(`${GATEWAY}/webmasters/v3/sites`, { headers });
  if (!listRes.ok) {
    const body = await listRes.text();
    console.error(`GSC site list failed [${listRes.status}]: ${body}`);
    return { ok: false, status: listRes.status, error: body };
  }

  const { siteEntry = [] } = (await listRes.json()) as { siteEntry?: SiteEntry[] };
  const target = new URL(SITE_URL);
  const matches = siteEntry.filter(
    (e) => e.permissionLevel !== "siteUnverifiedUser" && coversTarget(e.siteUrl, target),
  );
  if (matches.length === 0) {
    return { ok: false, skipped: true, reason: "No verified Search Console property covers this site" };
  }

  const results = [];
  for (const match of matches) {
    const url = `${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(match.siteUrl)}/sitemaps/${encodeURIComponent(SITEMAP_URL)}`;
    const res = await fetch(url, { method: "PUT", headers });
    const body = res.ok ? "" : await res.text();
    if (!res.ok) console.error(`GSC sitemap submit failed [${res.status}] for ${match.siteUrl}: ${body}`);
    results.push({ property: match.siteUrl, ok: res.ok, status: res.status, ...(body ? { error: body } : {}) });
  }

  return { ok: results.every((r) => r.ok), properties: results };
}

/** Submit the sitemap to Bing Webmaster Tools (also feeds Yahoo + DuckDuckGo). */
async function submitToBing() {
  const apiKey = process.env.BING_WEBMASTER_API_KEY;
  if (!apiKey) {
    return { ok: false, skipped: true, reason: "BING_WEBMASTER_API_KEY not configured" };
  }

  const res = await fetch(
    `https://ssl.bing.com/webmaster/api.svc/json/SubmitFeed?apikey=${encodeURIComponent(apiKey)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ siteUrl: SITE_URL, feedUrl: SITEMAP_URL }),
    },
  );

  const body = await res.text();
  if (!res.ok) {
    console.error(`Bing sitemap submit failed [${res.status}]: ${body}`);
    return { ok: false, status: res.status, error: body };
  }
  return { ok: true, status: res.status, response: body.slice(0, 500) };
}

async function runSubmission() {
  const [google, bing] = await Promise.all([
    submitToGoogle().catch((e) => ({ ok: false, error: String(e) })),
    submitToBing().catch((e) => ({ ok: false, error: String(e) })),
  ]);

  const payload = {
    sitemap: SITEMAP_URL,
    submittedAt: new Date().toISOString(),
    google,
    bing,
  };
  console.log("Sitemap submission result:", JSON.stringify(payload));

  return new Response(JSON.stringify(payload), {
    status: google.ok || bing.ok ? 200 : 502,
    headers: { "Content-Type": "application/json" },
  });
}

export const Route = createFileRoute("/api/public/hooks/submit-sitemap")({
  server: {
    handlers: {
      POST: async () => runSubmission(),
      GET: async () => runSubmission(),
    },
  },
});
