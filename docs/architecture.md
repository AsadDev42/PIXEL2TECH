# Architecture and ownership

## Application entry points

`src/routes/__root.tsx` owns the document shell, global metadata and error boundaries.
`src/router.tsx` constructs the router. TanStack generates `src/routeTree.gen.ts`;
edit route files, then let the framework regenerate the tree.

`src/server.ts` wraps SSR. `vite.config.ts` registers TanStack Start, React, Tailwind
and the production Nitro plugins. The standalone server is built into `.output/`.

## Where to make changes

| Feature                            | Primary sources                                                                     | Presentation                                      |
| ---------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------- |
| Business facts and contact details | `src/lib/site-config.ts`, `src/lib/people.ts`, `src/lib/team.ts`                    | Shared chrome, contact and team components        |
| Portfolio                          | `src/lib/portfolio-data.ts`, `portfolio-copy.ts`, `portfolio-detail.ts`             | `portfolio-*` components and portfolio routes     |
| Stores and automation              | `src/content/stores/`, `src/content/automations/`, corresponding project registries | `store-showcase.tsx`, `automation-showcase.tsx`   |
| Blog                               | `src/lib/posts/`, `blog-index.ts`, `blog-posts.ts`, `blog-seo.ts`                   | Blog routes, reading and content-block components |
| Services and industries            | Service and industry registries in `src/lib/`                                       | Business landing and service components           |
| Booking                            | `booking-slots.ts`, `booking.functions.ts`, `src/server/google-calendar.server.ts`  | Booking modal and calendar                        |
| Contact and newsletter             | Contact schemas/functions and `src/server/db/`                                      | Contact and newsletter forms                      |
| Email                              | `src/lib/email-templates/`                                                          | Rendered on the server                            |
| SEO and URL compatibility          | Sitemap modules, page metadata and `legacy-urls.ts`                                 | Route head declarations and HTTP endpoints        |
| Media                              | `src/assets/`, `public/media/`, `public/portfolio/`, media manifests                | `media-image.tsx`, video components               |

## Dependency boundaries

Routes assemble feature components and content. Feature components may depend on UI
primitives and shared helpers. Keep integrations, database calls and private environment
access in server functions, `*.server.ts` modules or `src/server/`.

The Vite import-protection configuration rejects server code in the client bundle.
Only explicitly public `VITE_*` settings belong in browser code.

## Video delivery

1. Portfolio registries provide the poster, small preview URL and full playback URL.
2. The video wall loads nearby short clips; visible clips play muted and respect reduced motion.
3. Opening the controlled player uses the selected full video source.
4. `portfolio-video-host.json` defines GitHub release-hosted collections and local stream names.
5. CI generates 30 FPS silent previews, builds the app, then omits redundant release-hosted
   source copies from the deployment artifact.
6. Nitro serves byte ranges for local video; this is required for seeking and mobile playback.

Preview files are generated outputs. Preserve the full originals and poster filenames,
and keep release assets available before changing playback mappings.

## Deployment and database

The root and `deploy/prisma` are separate dependency scopes. Bun owns the application
lockfile; `npm ci` installs the deployment package from its own lockfile.

Prisma Composer declares the service and database. Its contracts and migrations are
part of the deployed schema history; do not remove them as generated-file cleanup.
See [DEPLOY.md](../DEPLOY.md) before changing infrastructure.

## Organization conventions

Keep routes in the framework's expected location and UI primitives in `src/components/ui`.
Use existing feature prefixes and content registries before adding another global helper.
Put current operational documentation in `docs/`, reusable tooling in `scripts/`, and
transient reports under the ignored `output/` directory.

The existing script paths stay stable because deployment, documentation and local
commands already depend on them. Their responsibilities are grouped in the script catalog
and exposed through named npm commands.
