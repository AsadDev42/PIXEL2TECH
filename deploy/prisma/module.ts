import { module } from "@prisma/composer";
import { postgres } from "@prisma/composer-prisma-cloud/orm";
import { siteData } from "./data.ts";
import web from "./service.ts";

// One Prisma Postgres database plus the web service that uses it. `prisma
// deploy module.ts` applies the committed migrations/ to the database before
// the new web build goes live.
// Provision id "database" (not "db"): Prisma Cloud rejects names under 3 characters.
export default module("pixel2tech", ({ provision }) => {
  const database = provision(
    postgres({ name: "database", contract: siteData, config: "./prisma.config.ts" }),
    { id: "database" },
  );
  provision(web, { deps: { database } });
});
