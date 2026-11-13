import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile, readdir } from "node:fs/promises";
import { getBlogArchive, parseBlogSearch } from "../src/lib/blog-archive.ts";
import { getDefaultPostLinks } from "../src/lib/blog-service-links.ts";

const posts = Array.from({ length: 29 }, (_, index) => ({
  slug: `article-${index}`,
  title: index % 2 ? "Shopify store design" : "Brand identity guide",
  excerpt: index < 5 ? "A guide for independent shops" : "A guide for agencies",
  tag: index % 2 ? "Shopify" : "Branding",
}));

test("every article remains reachable exactly once through paginated archives", () => {
  const first = getBlogArchive(posts, {});
  const reached = Array.from({ length: first.pages }, (_, index) =>
    getBlogArchive(posts, { page: index + 1 }),
  ).flatMap((archive) => archive.posts.map((post) => post.slug));
  assert.deepEqual(
    reached,
    posts.map((post) => post.slug),
  );
  assert.equal(new Set(reached).size, posts.length);
  assert.equal(first.path, "/blog");
  assert.equal(getBlogArchive(posts, { page: 2 }).path, "/blog?page=2");
});

test("search combines all words and topic while preserving filters in page URLs", () => {
  const archive = getBlogArchive(posts, { q: "store shops", topic: "Shopify", page: 2 });
  assert.deepEqual(
    archive.posts.map((post) => post.slug),
    ["article-1", "article-3"],
  );
  assert.equal(archive.page, 1);
  assert.equal(archive.search.q, "store shops");
  assert.equal(archive.path, "/blog?topic=Shopify&q=store+shops");
});

test("malformed and stale page inputs lead to a valid archive and empty searches are usable", () => {
  for (const page of ["NaN", "Infinity", "-1", "1.5", {}, []]) {
    assert.equal(parseBlogSearch({ page }).page, undefined);
  }
  const stale = getBlogArchive(posts, parseBlogSearch({ page: "9999" }));
  assert.equal(stale.page, stale.pages);
  assert.equal(stale.posts.at(-1).slug, "article-28");
  const empty = getBlogArchive(posts, { q: "no matching words" });
  assert.equal(empty.posts.length, 0);
  assert.equal(empty.pages, 1);
  assert.equal(parseBlogSearch({ q: "x".repeat(1000) }).q.length, 120);
});

test("fallback article links lead to the relevant dedicated buyer page", () => {
  assert.equal(
    getDefaultPostLinks({ title: "Design systems for small teams", tag: "Design" })[0].to,
    "/services/design-systems",
  );
  assert.equal(
    getDefaultPostLinks({ title: "Shopify developer rates", tag: "Shopify" })[0].to,
    "/shopify-development-agency",
  );
  assert.equal(
    getDefaultPostLinks({ title: "White-label web development", tag: "Web" })[0].to,
    "/white-label-web-development",
  );
});

test("blog manifest includes every article body so development pages can render", async () => {
  const manifest = await readFile(new URL("../src/lib/blog-index.ts", import.meta.url), "utf8");
  const slugs = [...manifest.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
  const files = await readdir(new URL("../src/lib/posts/", import.meta.url));
  const bodies = files.filter((file) => file.endsWith(".ts")).map((file) => file.slice(0, -3));
  assert.deepEqual([...slugs].sort(), bodies.sort());
});
