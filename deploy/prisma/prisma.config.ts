import { defineConfig as composer } from "@prisma/composer/config";
import { nodeBuild } from "@prisma/composer/node/control";
import { prismaCloud, prismaState } from "@prisma/composer-prisma-cloud/control";
import { defineConfig as orm } from "@prisma/orm-postgres/config";
import { definePrismaConfig } from "prisma/config";

// One config for both halves of Prisma:
// - composer: how `prisma deploy module.ts` deploys. us-west-1 matches the region of
//   the Prisma project created in the Console. (Composer 0.26 no longer reads
//   prisma-composer.config.ts; this section replaces it.)
// - orm: where the data contract and migrations live. `prisma deploy` reads it
//   (by path, from module.ts) and applies migrations/ before the new code goes
//   live. No connection string here: the deployed URL is injected by Composer,
//   and local commands take one with --db.
export default definePrismaConfig({
  composer: composer({
    extensions: [prismaCloud({ region: "us-west-1" }), nodeBuild()],
    state: prismaState(),
  }),
  orm: orm({ contract: "./contract.prisma" }),
});
