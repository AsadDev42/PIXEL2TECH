import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const manifest = JSON.parse(
  await fs.readFile(path.join(root, "src/lib/portfolio-video-host.json"), "utf8"),
);

// These videos are published as immutable GitHub release assets. Keep the
// source copies and all poster images; omit only the redundant deployment
// copies so the Prisma Compute artifact stays below its 256 MiB limit.
for (const [slug, count] of Object.entries(manifest.collections)) {
  if (!/^[a-z0-9-]+$/.test(slug) || !Number.isSafeInteger(count) || count < 1) {
    throw new Error(`Invalid hosted video collection: ${slug}`);
  }
  for (let n = 1; n <= count; n++) {
    await fs.rm(path.join(root, ".output/public/portfolio", slug, `${n}.mp4`), { force: true });
  }
}
console.log("Prepared deployment: hosted portfolio videos use GitHub release assets.");
