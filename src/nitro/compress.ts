/**
 * Nitro runtime plugin (production server only, registered in vite.config.ts).
 *
 * Gzip for responses the app renders itself (HTML pages, sitemaps, server
 * function JSON). Static files are pre-compressed at build time instead
 * (`compressPublicAssets` in vite.config.ts), so Nitro serves the .br/.gz
 * copy and this plugin leaves them alone because they already carry a
 * Content-Encoding.
 *
 * On Lovable, Cloudflare compressed every response. With Cloudflare's proxy
 * off (DNS only), nothing in front of the app is known to do it, so the app
 * does it. If the hosting edge also compresses, it sees Content-Encoding and
 * skips the response, so nothing is compressed twice.
 */
import type { NitroAppPlugin } from "nitro/types";

/** Text types worth compressing. Images, video and fonts are already compressed. */
const COMPRESSIBLE =
  /^(text\/|application\/(json|javascript|xml|rss\+xml|atom\+xml|manifest\+json|ld\+json)|image\/svg\+xml)/i;

/** Below this size gzip saves too little to be worth the CPU. */
const MIN_BYTES = 1024;

function acceptsGzip(header: string | null): boolean {
  if (!header) return false;
  return header.split(",").some((part) => {
    const [name, ...params] = part.trim().toLowerCase().split(";");
    if (name !== "gzip" && name !== "*") return false;
    const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
    return !q || Number(q.slice(2)) > 0;
  });
}

function shouldCompress(req: Request, res: Response): boolean {
  if (req.method === "HEAD" || !res.body) return false;
  if (res.status !== 200) return false;
  if (res.headers.has("content-encoding")) return false;
  if (!COMPRESSIBLE.test(res.headers.get("content-type") ?? "")) return false;
  if (/\bno-transform\b/i.test(res.headers.get("cache-control") ?? "")) return false;
  const length = res.headers.get("content-length");
  if (length !== null && Number(length) < MIN_BYTES) return false;
  return acceptsGzip(req.headers.get("accept-encoding"));
}

function addVary(headers: Headers) {
  const vary = headers.get("vary");
  if (!vary) headers.set("vary", "Accept-Encoding");
  else if (!/\baccept-encoding\b|\*/i.test(vary)) headers.set("vary", `${vary}, Accept-Encoding`);
}

function compress(req: Request, res: Response): Response {
  if (!shouldCompress(req, res)) return res;
  const headers = new Headers(res.headers);
  headers.delete("content-length");
  headers.set("content-encoding", "gzip");
  addVary(headers);
  // A strong ETag names the uncompressed bytes; mark it weak for the gzip copy.
  const etag = headers.get("etag");
  if (etag && !etag.startsWith("W/")) headers.set("etag", `W/${etag}`);
  const body = (res.body as ReadableStream<Uint8Array>).pipeThrough(
    new CompressionStream("gzip") as unknown as ReadableWritablePair<Uint8Array, Uint8Array>,
  );
  return new Response(body, { status: res.status, statusText: res.statusText, headers });
}

const compressPlugin: NitroAppPlugin = (nitroApp) => {
  const next = nitroApp.fetch;
  nitroApp.fetch = (req: Request) => {
    const result = next(req);
    return result instanceof Promise
      ? result.then((res) => compress(req, res))
      : compress(req, result as Response);
  };
};

export default compressPlugin;
