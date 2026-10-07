// Starts a local Prisma Postgres for development (Composer's `prisma dev` is
// not supported on Windows). Data persists between runs.
//
//   node deploy/prisma/scripts/local-db.mjs
//
// Then, in another terminal:
//   cd deploy/prisma && npx prisma db migrate --db "<printed url>"
// and put the printed url in the repo root .env.local as
//   COMPOSER_DATABASE_URL=<printed url>
// Stop with Ctrl+C.
import { startPrismaDevServer } from "@prisma/dev";

const server = await startPrismaDevServer({ name: "pixel2tech", persistenceMode: "stateful" });
console.log(`Local Prisma Postgres ready:\n${server.database.connectionString}`);

const stop = async () => {
  await server.close?.();
  process.exit(0);
};
process.on("SIGINT", stop);
process.on("SIGTERM", stop);
setInterval(() => {}, 1 << 30);
