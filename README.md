# Pixel2Tech website

Source code for [pixel2tech.com](https://pixel2tech.com), the Pixel2Tech agency site.

## Stack

- [TanStack Start](https://tanstack.com/start) with file-based routes in `src/routes`
- React 19, Tailwind CSS v4, Vite 8
- [Nitro](https://nitro.build) builds the server; the default target is a standalone Node server
- Hosting: [Prisma Compute](https://www.prisma.io)
- Database: Prisma Postgres via Prisma ORM

## Requirements

- Node.js 22 or newer
- [Bun](https://bun.sh) for installing dependencies (`bun.lock` is the lockfile). npm works for running scripts.

## Local development

```sh
git clone https://github.com/AsadDev42/PIXEL2TECH.git
cd PIXEL2TECH
bun install
npm run dev
```

The dev server runs on http://localhost:5173 (Vite picks the next free port if 5173 is taken).

Server-side environment variables go in `.env` or `.env.local` in the repo root. They are loaded into
`process.env` for server routes and server functions only. Variables prefixed with `VITE_` are also
exposed to the browser as `import.meta.env.VITE_*`, so never put secrets in a `VITE_` variable.
See [DEPLOY.md](./DEPLOY.md) for the variables production needs.

## Scripts

| Command             | What it does                                          |
| ------------------- | ----------------------------------------------------- |
| `npm run dev`       | Start the Vite dev server with hot reload             |
| `npm run build`     | Production build into `.output/`                      |
| `npm run build:dev` | Build in development mode (readable names, dev React) |
| `npm run preview`   | Preview the production build                          |
| `npm run lint`      | Run ESLint                                            |
| `npm run format`    | Format the code base with Prettier                    |

## Build output

`npm run build` produces a self-contained Node server:

```sh
npm run build
node .output/server/index.mjs
```

The server listens on `PORT` (default 3000). To build for a different Nitro target, set
`NITRO_PRESET`, for example `NITRO_PRESET=vercel npm run build`.

## Deployment

Every push to `main` runs the GitHub Actions workflow in
[`.github/workflows/prisma-deploy.yml`](./.github/workflows/prisma-deploy.yml). It installs
dependencies, runs `npm run build`, and deploys `.output/` to Prisma Compute using the config in
[`deploy/prisma`](./deploy/prisma).

Setup steps, secrets, the database, and the domain (pixel2tech.com on Cloudflare DNS) are covered in
[DEPLOY.md](./DEPLOY.md).
