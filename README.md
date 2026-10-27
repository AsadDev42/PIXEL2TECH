# Pixel2Tech

Source for [pixel2tech.com](https://pixel2tech.com), the Pixel2Tech agency website.
GitHub `main` is the production source of truth. Changes pushed to it automatically deploy.

## Start here

- [Documentation index](docs/README.md): architecture, deployment, booking and maintenance.
- [Project architecture](docs/architecture.md): where each feature and its content belong.
- [Script catalog](scripts/README.md): development, verification and media commands.
- [Repository review](docs/repository-review.md): checks performed and remaining limitations.
- [Agent conventions](AGENTS.md): implementation rules for coding assistants.

## Stack

TanStack Start, React 19, TypeScript, Tailwind CSS v4, Vite 8 and Nitro.
Prisma Compute hosts the Node server; Prisma Postgres stores application data.

## Local setup

Use Node.js 24 (matching CI) and Bun. The root uses `bun.lock`; the isolated
`deploy/prisma` package uses its own `package-lock.json`.

```sh
bun install
npm ci --prefix deploy/prisma
npm run dev
```

Open http://localhost:5173. Vite selects another port if it is occupied.
Copy `.env.example` to `.env.local` for optional email, booking and database integration.
See [booking configuration](docs/google-calendar-booking.md) before enabling Calendar calls.
Private settings stay in server code and local environment files.

## Daily commands

| Command                | Purpose                                                       |
| ---------------------- | ------------------------------------------------------------- |
| `npm run dev`          | Develop with hot reload                                       |
| `npm run check`        | Type check, lint, and run booking tests                       |
| `npm run build`        | Build the production Node server and prepare deployment media |
| `npm run preview`      | Preview the production build                                  |
| `npm run format`       | Format maintained project files                               |
| `npm run format:check` | Check formatting without modifying files                      |

The [script catalog](scripts/README.md) covers individual checks, HTTP verification,
media generation, prerequisites and commands that contact external services.

## Repository layout

| Path                 | Responsibility                                                               |
| -------------------- | ---------------------------------------------------------------------------- |
| `src/routes/`        | File-based pages, HTTP endpoints, metadata and loaders                       |
| `src/components/`    | Site features and shared presentation; `ui/` holds primitives                |
| `src/lib/`           | Business facts, content registries, validation, server functions and helpers |
| `src/content/`       | Structured store and automation project content                              |
| `src/assets/`        | Asset metadata and imported build assets                                     |
| `src/server/`        | Server integrations and database access                                      |
| `src/nitro/`         | Production response compression and video range support                      |
| `public/`            | Public media and files served without bundling                               |
| `scripts/`           | Maintained tooling and verification entry points                             |
| `deploy/prisma/`     | Isolated deployment package, database contract and migrations                |
| `docs/`              | Architecture, operations, review and historical project notes                |
| `.github/workflows/` | Quality checks and production deployment                                     |

Keep public media URLs stable. Do not move the generated route tree, database migrations,
or asset metadata merely to change folder appearance.

## Production

```sh
npm run build
node .output/server/index.mjs
```

The server reads `PORT` (default 3000). CI generates the separate silent video previews
before building, then deploys `.output/` through the existing Prisma workflow.
Quality checks run for pull requests and pushes to `main`.

[DEPLOY.md](DEPLOY.md) remains the authoritative production setup and recovery guide.
Build output, local reports, generated video previews and personal environment files
are not source files to upload manually.
