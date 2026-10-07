#!/usr/bin/env node
/**
 * Writes resized AVIF + WebP copies of the self-hosted blog images in
 * public/media/ and records them in src/lib/media-variants.json, which
 * src/lib/blog-images.ts turns into <picture> srcsets.
 *
 * The old Lovable CDN resized and re-encoded these on request; the site now
 * serves files as they are, so the small versions are made once, here.
 *
 * Which images: every /media/ raster image the blog uses (asset.json imports
 * and literal /media/ paths in src/lib/blog-index.ts, src/lib/posts/*.ts and
 * src/components/video-testimonials.tsx). Variants sit next to the original:
 *   /media/<uuid>/<name>-<width>.avif and .webp
 * Widths wider than the original are replaced by one copy at the original
 * width. Existing variant files are kept.
 *
 * sharp is not a project dependency. Run from the repo root with sharp
 * installed anywhere, for example:
 *   npm i --prefix ../sharp-tmp sharp
 *   SHARP_PATH=../sharp-tmp/node_modules/sharp/lib/index.js node scripts/generate-media-variants.mjs
 * Then commit the new files under public/media/ and src/lib/media-variants.json.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const WIDTHS = [480, 800, 1200, 1600];
const root = process.cwd();
const manifestPath = path.join(root, "src/lib/media-variants.json");

const sharpPath = process.env.SHARP_PATH;
const sharp = (await import(sharpPath ? pathToFileURL(path.resolve(sharpPath)).href : "sharp"))
  .default;

function sourceFiles() {
  const posts = fs
    .readdirSync(path.join(root, "src/lib/posts"))
    .filter((f) => f.endsWith(".ts"))
    .map((f) => `src/lib/posts/${f}`);
  return ["src/lib/blog-index.ts", "src/components/video-testimonials.tsx", ...posts];
}

function collectUrls() {
  const urls = new Set();
  for (const file of sourceFiles()) {
    const text = fs.readFileSync(path.join(root, file), "utf8");
    for (const m of text.matchAll(/from "@\/assets\/([^"]+\.asset\.json)"/g)) {
      const meta = JSON.parse(fs.readFileSync(path.join(root, "src/assets", m[1]), "utf8"));
      urls.add(meta.url);
    }
    for (const m of text.matchAll(/["'`](\/media\/[^"'`\s]+)["'`]/g)) urls.add(m[1]);
  }
  return [...urls].filter((u) => /^\/media\/[^/]+\/[^/]+\.(png|jpe?g|webp)$/i.test(u)).sort();
}

const manifest = fs.existsSync(manifestPath)
  ? JSON.parse(fs.readFileSync(manifestPath, "utf8"))
  : {};

for (const url of collectUrls()) {
  const file = path.join(root, "public", url);
  if (!fs.existsSync(file)) {
    console.warn(`missing: ${url}`);
    continue;
  }
  const { width } = await sharp(file).metadata();
  // Every standard width below the original, plus the original width itself
  // (capped at the largest standard width) so large screens never get an upscale.
  const widths = [...new Set([...WIDTHS.filter((w) => w < width), Math.min(width, WIDTHS.at(-1))])];
  const base = file.replace(/\.[^.]+$/, "");
  for (const w of widths) {
    for (const format of ["avif", "webp"]) {
      const out = `${base}-${w}.${format}`;
      if (fs.existsSync(out)) continue;
      const img = sharp(file).resize({ width: w, withoutEnlargement: true });
      await (
        format === "avif" ? img.avif({ quality: 50, effort: 6 }) : img.webp({ quality: 72 })
      ).toFile(out);
    }
  }
  manifest[url] = widths;
  console.log(`${url}: ${widths.join(", ")}`);
}

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(manifestPath, `${JSON.stringify(sorted, null, 2)}\n`);
console.log(`wrote ${path.relative(root, manifestPath)}`);
