import assert from "node:assert/strict";

const base = process.env.VERIFY_BASE_URL ?? "http://localhost:4173";
async function page(path) {
  const response = await fetch(`${base}${path}`, { redirect: "manual" });
  assert.equal(response.status, 200, `${path} must return 200`);
  if (response.headers.get("content-type")?.startsWith("text/html")) {
    assert.equal(
      response.headers.get("cache-control"),
      "no-cache",
      `${path}: HTML revalidates after deployment`,
    );
  }
  return response.text();
}
function schemas(html) {
  return [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(
    (match) => JSON.parse(match[1]),
  );
}
const home = await page("/");
assert.equal((home.match(/<h1[\s>]/g) ?? []).length, 1, "Home has one H1");
const homeSchemas = schemas(home);
assert(
  homeSchemas.some((item) => item["@type"] === "WebSite"),
  "WebSite schema exists",
);
assert(
  homeSchemas.some((item) => item["@type"] === "BreadcrumbList"),
  "Home breadcrumb exists",
);
assert.equal(homeSchemas.find((item) => item["@type"] === "FAQPage")?.mainEntity.length, 6);
assert(home.includes('id="home-work-title"'), "Home selected work exists");
assert(home.includes("One studio. One team. 50+ projects."));
assert(home.indexOf("What clients say") < home.indexOf("One team. Every detail connected."));
assert(!/calendly/i.test(home));
assert(!home.includes("cdn.coverr.co"), "Stock testimonial videos are absent");
assert(!home.includes("Phone(optional)"));
assert(
  !home.includes('id="footer-services" class="text-xs') ||
    !home.includes('<h2 id="footer-services"'),
);

const paths = [
  "/portfolio?category=video-editing",
  "/for-agencies",
  "/industries",
  "/industries/beauty-and-ecommerce",
  "/industries/professional-services",
  "/industries/healthcare",
  "/careers",
  "/results",
  "/press",
  "/resources/shopify-store-checklist",
];
for (const path of paths) {
  const html = await page(path);
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1, `${path} has one H1`);
  assert(html.includes('rel="canonical"'), `${path} has a canonical`);
  schemas(html);
}
assert((await page("/portfolio?category=video-editing")).includes("Sharper edits."));
assert((await page("/resources/shopify-store-review-checklist.md")).includes("Measurement plan"));
const llms = await page("/llms.txt");
assert.equal(
  (await fetch(`${base}/jobs`, { redirect: "manual" })).status,
  410,
  "Retired demo jobs remain gone",
);
const articlePaths = [...llms.matchAll(/https:\/\/pixel2tech\.com(\/blog\/[^)\s]+)/g)].map(
  (match) => match[1],
);
const workPaths = [...llms.matchAll(/https:\/\/pixel2tech\.com(\/portfolio\/[^)\s]+)/g)].map(
  (match) => match[1],
);
assert(articlePaths.length >= 96, "Complete article discovery index");
assert.equal(workPaths.length, 132, "Complete work discovery index");
let checked = 0;
for (let i = 0; i < articlePaths.length; i += 6) {
  await Promise.all(
    articlePaths.slice(i, i + 6).map(async (path) => {
      const html = await page(path);
      assert(!/<meta[^>]+name="keywords"/.test(html), `${path}: no keywords meta tag`);
      assert(html.includes('name="twitter:image"'), `${path}: Twitter image`);
      const data = schemas(html);
      const article = data.find((item) => item["@type"] === "BlogPosting");
      assert.equal(article?.author["@type"], "Person", `${path}: person author`);
      assert(article.author.name, `${path}: named byline`);
      if (
        html.includes('id="faqs"') ||
        html.includes('id="faq-title"') ||
        html.includes('id="article-faq-title"')
      ) {
        assert(
          data.some((item) => item["@type"] === "FAQPage"),
          `${path}: FAQ schema`,
        );
      }
      checked++;
    }),
  );
}
const sitemap = await page("/pages-sitemap.xml");
for (const path of paths.filter((path) => !path.includes("?"))) {
  assert(sitemap.includes(`https://pixel2tech.com${path}</loc>`), `${path}: sitemap inclusion`);
}
console.log(
  `Verified homepage, ${paths.length} landing/filter pages, ${checked} article schemas/bylines, ${workPaths.length} work links, sitemap and downloadable checklist.`,
);
