import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const manifest = JSON.parse(
  await fs.readFile(path.join(root, "src/lib/portfolio-video-host.json"), "utf8"),
);

// Prisma Compute refuses an artifact over 256 MiB. Fail the build well before
// that, so a growing site shows up here instead of as a failed deploy.
const LIMIT = 256 * 1024 * 1024;
const WARN_AT = 236 * 1024 * 1024;

function checkCollections(collections, label) {
  for (const [slug, count] of Object.entries(collections)) {
    if (!/^[a-z0-9-]+$/.test(slug) || !Number.isSafeInteger(count) || count < 1) {
      throw new Error(`Invalid ${label} video collection: ${slug}`);
    }
  }
}

// These videos are served from outside the app: GitHub release assets
// (`collections`) or jsDelivr pinned to a commit of this repo (`cdn`). Keep
// the source copies and all poster images; omit only the redundant deployment
// copies so the Prisma Compute artifact stays below its limit.
checkCollections(manifest.collections, "release");
checkCollections(manifest.cdn.collections, "cdn");
for (const [slug, count] of [
  ...Object.entries(manifest.collections),
  ...Object.entries(manifest.cdn.collections),
]) {
  for (let n = 1; n <= count; n++) {
    await fs.rm(path.join(root, ".output/public/portfolio", slug, `${n}.mp4`), { force: true });
  }
}

async function size(dir) {
  let total = 0;
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    total += entry.isDirectory() ? await size(full) : (await fs.stat(full)).size;
  }
  return total;
}

const bytes = await size(path.join(root, ".output"));
const mb = (n) => `${(n / 1048576).toFixed(1)} MB`;
if (bytes >= LIMIT) {
  throw new Error(
    `.output is ${mb(bytes)}, over the 256 MiB Prisma Compute limit. Move more videos to the cdn list in src/lib/portfolio-video-host.json.`,
  );
}
console.log(
  `Prepared deployment: externally hosted videos removed, .output is ${mb(bytes)} of 256 MB.` +
    (bytes >= WARN_AT ? " Warning: close to the limit." : ""),
);
