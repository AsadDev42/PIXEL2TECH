import web from "../../../deploy/prisma/service.ts";

/**
 * The typed Prisma ORM client for the site's Prisma Postgres database.
 *
 * Deployed on Prisma Compute, Composer injects the connection at boot.
 * Locally, put COMPOSER_DATABASE_URL in .env.local (vite.config copies it into
 * process.env). Never read DATABASE_URL: Prisma Cloud reserves that name and
 * sets it to a placeholder.
 *
 * Throws when no connection is configured. The client itself is created on
 * first use and connects lazily, so importing this module never opens a socket.
 * Server-only: import it from server-function handlers or server routes.
 */
export function getDb() {
  return web.load().database.client;
}
