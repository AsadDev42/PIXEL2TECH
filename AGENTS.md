# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project

Pixel2Tech agency website (pixel2tech.com). TanStack Start (file-based routes), React 19,
Tailwind CSS v4, Vite 8, Nitro 3. Hosted on Prisma Compute; data lives in Prisma Postgres
(Prisma ORM). Source of truth is GitHub: `AsadDev42/PIXEL2TECH`, branch `main`.

## Commands

- Install: `bun install` (lockfile is `bun.lock`; do not commit a regenerated `package-lock.json`)
- Dev server: `npm run dev` (http://localhost:5173)
- Production build: `npm run build` (standalone Node server in `.output/`, run with
  `node .output/server/index.mjs`)
- Type check: `npx tsc --noEmit -p .`
- Lint: `npm run lint`
- Format: `npm run format` (Prettier: 100 columns, double quotes, trailing commas)

## Deployment

A push to `main` triggers `.github/workflows/prisma-deploy.yml`, which builds the site and deploys
it to Prisma Compute from `deploy/prisma`. Anything merged to `main` goes live, so keep `main`
building. Do not force-push or rewrite published history. Details are in `DEPLOY.md`.

## Layout

- `src/routes/` - file-based routes. `src/routeTree.gen.ts` is generated; never edit it by hand.
- `src/routes/__root.tsx` - document shell, global head tags, 404 and error pages.
- `src/server.ts` - server entry (wired via `tanstackStart({ server: { entry: "server" } })` in
  `vite.config.ts`); wraps SSR with an HTML error page.
- `src/components/` - UI; `src/components/ui/` holds shadcn/ui components (see `components.json`).
- `src/lib/` - site config, content, analytics, server functions.
- `deploy/prisma/` - Prisma Compute deployment config (separate package with its own
  `node_modules`).

## Conventions

- Use the `@/` alias for imports from `src`.
- Server-only code goes in `*.server.ts` files or under a `server/` folder. The build fails if
  such code is imported from the client. Do not use the Next.js `server-only` package.
- Secrets are read from `process.env` on the server only. Only `VITE_*` variables reach the
  browser, so never put secrets in them, and never hard-code secrets or API keys.
- Spacing utilities must follow the approved 8px scale; the custom ESLint rule in
  `eslint-rules/no-unapproved-spacing.js` enforces this.
- Keep the existing visual design. Do not invent facts (clients, numbers, awards) in site copy.
- Do not add a second copy of a Vite plugin that `vite.config.ts` already registers.
