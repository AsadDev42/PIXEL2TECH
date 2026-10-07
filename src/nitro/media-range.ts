/**
 * Nitro runtime plugin (production server only, registered in vite.config.ts).
 *
 * Nitro's built-in static handler always answers with the whole file (200) and
 * ignores `Range`. Safari on iPhone/iPad refuses to play an MP4 unless the
 * server answers byte-range requests with 206 Partial Content, so self-hosted
 * videos would not play there.
 *
 * This wraps the app's fetch handler: a GET/HEAD for a video file anywhere in
 * the public folder (/media/..., /portfolio/..., ...) that carries a single
 * `bytes=` Range is served here from .output/public; every other request goes
 * to Nitro unchanged. Vite's dev server already handles ranges, so this is not
 * needed in dev.
 */
import { createReadStream, promises as fs } from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";
import type { NitroAppPlugin } from "nitro/types";

const VIDEO_TYPES: Record<string, string> = {
  ".mp4": "video/mp4",
  ".m4v": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime",
};

/**
 * Cache policy, matching the routeRules in vite.config.ts. Files under /media/
 * sit in one UUID folder per upload and never change. Other public files keep
 * their names when their content changes, so they get a shorter lifetime.
 */
function cacheControl(pathname: string): string {
  return pathname.startsWith("/media/")
    ? "public, max-age=31536000, immutable"
    : "public, max-age=604800, stale-while-revalidate=86400";
}

function publicRoot(): string | null {
  const main = (globalThis as { __nitro_main__?: string }).__nitro_main__;
  if (!main) return null;
  // .output/server/index.mjs -> .output/public
  return path.resolve(path.dirname(fileURLToPath(main)), "../public");
}

/** Parses a single "bytes=a-b" / "bytes=a-" / "bytes=-n" range. Null = not satisfiable. */
function parseRange(header: string, size: number): { start: number; end: number } | null {
  const m = /^bytes=(\d*)-(\d*)$/.exec(header.trim());
  if (!m || (m[1] === "" && m[2] === "")) return null;
  let start: number;
  let end: number;
  if (m[1] === "") {
    const suffix = Number(m[2]);
    if (suffix === 0) return null;
    start = Math.max(0, size - suffix);
    end = size - 1;
  } else {
    start = Number(m[1]);
    end = m[2] === "" ? size - 1 : Math.min(Number(m[2]), size - 1);
  }
  if (start > end || start >= size) return null;
  return { start, end };
}

async function serveRange(req: Request, root: string): Promise<Response | null> {
  const url = new URL(req.url);
  let rel: string;
  try {
    rel = decodeURIComponent(url.pathname).replace(/^\/+/, "");
  } catch {
    return null;
  }
  const type = VIDEO_TYPES[path.extname(rel).toLowerCase()];
  if (!type) return null;

  // Never serve anything outside the public folder ("..", absolute paths, NUL).
  if (rel.includes("\0")) return null;
  const file = path.resolve(root, rel);
  if (!file.startsWith(root + path.sep)) return null;

  let size: number;
  let lastModified: string;
  try {
    const stat = await fs.stat(file);
    if (!stat.isFile()) return null;
    size = stat.size;
    lastModified = stat.mtime.toUTCString();
  } catch {
    return null; // let Nitro answer (404)
  }

  // If-Range: only answer with a part when the client's copy is still current
  // (compared by date, the validator we send). Otherwise Nitro sends the whole file.
  const ifRange = req.headers.get("if-range");
  if (ifRange && ifRange.trim() !== lastModified) return null;

  const rangeHeader = req.headers.get("range") ?? "";
  const range = parseRange(rangeHeader, size);
  if (!range) {
    // A multi-range or malformed header falls back to the full file; an
    // out-of-bounds single range is answered with 416.
    if (/^bytes=\d*-\d*$/.test(rangeHeader.trim())) {
      return new Response(null, {
        status: 416,
        headers: { "Content-Range": `bytes */${size}`, "Accept-Ranges": "bytes" },
      });
    }
    return null;
  }

  const headers = new Headers({
    "Content-Type": type,
    "Content-Length": String(range.end - range.start + 1),
    "Content-Range": `bytes ${range.start}-${range.end}/${size}`,
    "Accept-Ranges": "bytes",
    "Cache-Control": cacheControl(url.pathname),
    "Last-Modified": lastModified,
  });
  if (req.method === "HEAD") return new Response(null, { status: 206, headers });

  const stream = createReadStream(file, { start: range.start, end: range.end });
  return new Response(Readable.toWeb(stream) as ReadableStream, { status: 206, headers });
}

const mediaRangePlugin: NitroAppPlugin = (nitroApp) => {
  const root = publicRoot();
  if (!root) return;
  const next = nitroApp.fetch;
  nitroApp.fetch = (req: Request) => {
    if (
      (req.method === "GET" || req.method === "HEAD") &&
      req.headers.has("range") &&
      /\.(mp4|m4v|webm|mov)$/i.test(new URL(req.url).pathname)
    ) {
      return serveRange(req, root).then((res) => res ?? next(req));
    }
    return next(req);
  };
};

export default mediaRangePlugin;
