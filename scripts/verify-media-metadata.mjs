import assert from "node:assert/strict";

const base = process.env.VERIFY_BASE_URL ?? "http://localhost:4173";
const discovery = await (await fetch(`${base}/llms.txt`)).text();
const pagesMap = await (await fetch(`${base}/pages-sitemap.xml`)).text();
const paths = new Set(["/", "/blog", "/portfolio", "/about", "/services"]);
for (const match of `${discovery}\n${pagesMap}`.matchAll(/https:\/\/pixel2tech\.com([^\s<)]+)/g)) {
  paths.add(match[1].replace(/&amp;/g, "&"));
}
const issues = [];
let images = 0;
let videos = 0;
let checked = 0;
const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1]?.trim();
const pathsList = [...paths];
for (let offset = 0; offset < pathsList.length; offset += 6) {
  await Promise.all(
    pathsList.slice(offset, offset + 6).map(async (path) => {
      const response = await fetch(`${base}${path}`);
      if (!response.ok) {
        issues.push(`${path}: HTTP ${response.status}`);
        return;
      }
      const html = await response.text();
      for (const match of html.matchAll(/<img\b[^>]*>/g)) {
        images++;
        const alt = attr(match[0], "alt");
        const title = attr(match[0], "title");
        if (
          !alt ||
          !title ||
          /Pixel2Tech project artwork|\.(?:webp|jpg|png|mp4|avif)(?:$|\?)/i.test(alt)
        ) {
          issues.push(`${path}: incomplete image metadata: ${attr(match[0], "src")} (${alt})`);
        }
      }
      for (const match of html.matchAll(/<(?:video|iframe)\b[^>]*>/g)) {
        videos++;
        if (!attr(match[0], "title")) issues.push(`${path}: media player has no title`);
      }
      if (
        /Open video: (?:Animated explainer video|Talking-head video|Long-form video|Short-form social video) \d/.test(
          html,
        )
      ) {
        issues.push(`${path}: numbered placeholder video title`);
      }
      checked++;
    }),
  );
}
console.log(
  JSON.stringify({ pages: checked, images, players: videos, issues: issues.slice(0, 20) }, null, 2),
);
assert.equal(issues.length, 0, `${issues.length} media metadata issues`);
