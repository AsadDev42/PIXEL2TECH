# Repository review - October 27, 2026

## Scope

Reviewed repository layout, scripts, package-manager boundaries, generated files,
configuration, deployment wiring and existing automated checks. This is a maintenance
review, not a claim that every visual page, integration or business rule was exhaustively tested.

## Organization changes

- Added a documentation index and architecture guide linking features to their source files.
- Moved the tracked artwork provenance record into `docs/` and removed the empty root scratch file.
- Grouped development, verification, media and integration tasks behind documented npm commands.
- Added `npm run check` and a read-only quality workflow for pull requests and pushes to `main`.
- Added a placeholder-only environment example for local setup.
- Excluded generated previews, local reports, root npm lockfiles and Python caches from new commits.
- Kept the deployment package's npm lockfile, database contracts and migration history intact.
- Kept runtime routes, public URLs, source media, UI design and established script paths stable.

## Baseline findings

The full ESLint pass covered 281 TypeScript/TSX files: zero errors and ten warnings.
All ten warnings are `react-refresh/only-export-components`, in shared components, UI
primitives and server-rendered email templates. They concern development refresh boundaries,
not demonstrated production failures. They have not been hidden by disabling the rule.

`generate-editorial-covers.py` depends on Windows Arial fonts and represents an older
cover design. Its limitations and overwrite risk are now documented in the script catalog.

The repository intentionally stores many media files and asset descriptors. They were not
deleted using a filename-only unused-file heuristic: dynamic content and public URLs also
reference them. A media migration needs its own URL/reference audit.

## Validation

Completed locally for this maintenance change:

- `npm run check`: passed TypeScript, full lint (zero errors, ten existing warnings),
  and all nine booking tests.
- `npm run build`: passed production build and deployment-media preparation.
- Targeted Prettier check and `git diff --check`: passed.
  The quality workflow runs type checking, full linting and the existing mocked booking tests.
  Production builds remain in the deployment workflow, which also generates preview clips.

HTTP verification commands require a reachable running site. See the script catalog for
how to select a target. Publishing a build does not by itself prove every live integration.
