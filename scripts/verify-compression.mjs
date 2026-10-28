import { test } from "node:test";
import assert from "node:assert/strict";
import compression from "../src/nitro/compress.ts";

function handler() {
  const app = {
    fetch: () =>
      new Response("Page content. ".repeat(200), {
        headers: { "content-type": "text/html", etag: '"page"' },
      }),
  };
  compression(app);
  return (encoding) =>
    app.fetch(
      new Request("http://localhost/", {
        headers: { "accept-encoding": encoding },
      }),
    );
}

test("explicit gzip rejection takes precedence over a wildcard", async () => {
  const response = await handler()("gzip;q=0, *;q=1");
  assert.equal(response.headers.get("content-encoding"), null);
});

test("identity responses vary by encoding for shared caches", async () => {
  const response = await handler()("identity");
  assert.match(response.headers.get("vary") ?? "", /Accept-Encoding/i);
  assert.equal(response.headers.get("cache-control"), "no-cache");
});

test("gzip responses decode to the original content and use a weak etag", async () => {
  const response = await handler()("gzip");
  assert.equal(response.headers.get("content-encoding"), "gzip");
  assert.equal(response.headers.get("etag"), 'W/"page"');
  assert.equal(
    await new Response(response.body.pipeThrough(new DecompressionStream("gzip"))).text(),
    "Page content. ".repeat(200),
  );
});
