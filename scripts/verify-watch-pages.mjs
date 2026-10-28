import assert from "node:assert/strict";

const base = process.env.VERIFY_BASE_URL || "http://localhost:4173";
let sitemap = "";
for (let attempt = 0; attempt < 12; attempt++) {
  const response = await fetch(`${base}/portfolio-sitemap.xml`);
  sitemap = await response.text();
  if (response.ok && sitemap.includes("<video:video>")) break;
  if (attempt < 11) await new Promise((resolve) => setTimeout(resolve, 5000));
}
const blocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)]
  .map((match) => match[1])
  .filter((block) => block.includes("<video:video>"));
assert(blocks.length > 0, "Watch pages are discoverable through the video sitemap");
const urls = blocks.map((block) => block.match(/<loc>([^<]+)<\/loc>/)?.[1]);
assert(urls.every(Boolean), "Every video sitemap item has a watch URL");
assert.equal(new Set(urls).size, urls.length, "Watch URLs are unique");
const collections = new Map();
for (const url of urls) {
  const path = new URL(url).pathname;
  assert.match(path, /^\/watch\/[^/]+\/v-[a-z0-9]+$/);
  collections.set(path.split("/")[2], path);
}
const samples = [...collections.values()];
for (let offset = 0; offset < samples.length; offset += 6) {
  await Promise.all(
    samples.slice(offset, offset + 6).map(async (path) => {
      const response = await fetch(`${base}${path}`);
      assert.equal(response.status, 200, `${path}: watch page returns 200`);
      const html = await response.text();
      assert(html.includes(`href="https://pixel2tech.com${path}"`), `${path}: self canonical`);
      assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1, `${path}: one H1`);
      assert.equal(
        (html.match(/<(?:video|iframe)\b/g) ?? []).length,
        1,
        `${path}: one main player`,
      );
      const pattern = /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs;
      const data = [...html.matchAll(pattern)].map((match) => JSON.parse(match[1]));
      const video = data.find((item) => item["@type"] === "VideoObject");
      assert(
        video?.name && video.description && video.thumbnailUrl?.length,
        `${path}: video metadata`,
      );
      assert(Number.isFinite(Date.parse(video.uploadDate)), `${path}: recorded publication date`);
      assert(video.contentUrl || video.embedUrl, `${path}: crawlable playback URL`);
    }),
  );
}
const missing = await fetch(`${base}/watch/not-a-collection/v-abc`, { redirect: "manual" });
assert.equal(missing.status, 404, "Unknown watch videos remain real 404s");

const legacy = [
  ["/our-team/", 301, "/about"],
  ["/career/", 301, "/careers"],
  ["/home/", 301, "/"],
  ["/portfolio/creative-social-media-product-launch-campaign", 301, "/portfolio"],
  ["/portfolio/branding/", 301, "/portfolio"],
  ["/your-brand-for-impact-with-deep-market-insights/", 301, "/services"],
  ["/wp-content/plugins/*", 410],
  ["/home-3-onepage/", 410],
  ["/home-1-onepage/", 410],
  ["/product/solar-karma-street-tee/", 410],
  ["/product-tag/digital/", 410],
  ["/wishlist/", 410],
  ["/footer/footer-style-4/", 410],
];
for (const [path, status, target] of legacy) {
  const response = await fetch(`${base}${path}`, { redirect: "manual" });
  assert.equal(response.status, status, `${path}: correct retired URL status`);
  if (target) assert.equal(new URL(response.headers.get("location"), base).pathname, target);
}
console.log(
  `Verified ${blocks.length} sitemap videos, ${samples.length} watch pages and ${legacy.length} legacy URLs.`,
);
