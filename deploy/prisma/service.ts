import node from "@prisma/composer/node";
import { compute } from "@prisma/composer-prisma-cloud";
import { postgres } from "@prisma/composer-prisma-cloud/orm";
import { siteData } from "./data.ts";

// The site itself is built from the repo root with `NITRO_PRESET=node-server
// npm run build`, which writes Nitro's standalone server to ../../.output.
//
// `database` is the site's Prisma Postgres. The app reads it with
// `web.load().database` (see src/server/db/prisma.server.ts); Composer injects the
// connection at boot. Locally, set COMPOSER_DATABASE_URL in .env.local.
// Other runtime settings come from the Prisma project's environment
// variables, read via process.env.
export default compute({
  name: "web",
  deps: { database: postgres(siteData) },
  build: node({ module: import.meta.url, dir: "../../.output", entry: "server/index.mjs" }),
});
