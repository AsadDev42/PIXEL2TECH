# Script catalog

Run commands from the repository root. Use Node.js 24 to match GitHub Actions.
Scripts retain stable filenames; npm command namespaces provide a common entry point.

## Development and quality

| Command                | What it does                                                 | External side effects |
| ---------------------- | ------------------------------------------------------------ | --------------------- |
| `npm run typecheck`    | Check application TypeScript without emitting files          | None                  |
| `npm run lint`         | Lint maintained source files                                 | None                  |
| `npm test`             | Run booking, Calendar and compression tests with mocked requests | None                  |
| `npm run check`        | Run the three checks above                                   | None                  |
| `npm run format:check` | Report formatting differences                                | None                  |
| `npm run format`       | Format maintained files in place                             | Local writes          |

## HTTP verification

Start the built site separately, or set `VERIFY_BASE_URL` to the intended target.
Both HTTP verification scripts default to `http://localhost:4173`.

| Command                | Script                      | Coverage                                                               |
| ---------------------- | --------------------------- | ---------------------------------------------------------------------- |
| `npm run verify:site`  | `verify-site-refresh.mjs`   | Landing pages, content, metadata, links, sitemaps and response headers |
| `npm run verify:media` | `verify-media-metadata.mjs` | Image and video metadata across published pages                        |

These commands read the target website. They do not submit contact forms or book meetings.
Local unit tests are separate from these HTTP checks.

## Build and media

| Command                  | Script                               | Prerequisites and output                                                                     |
| ------------------------ | ------------------------------------ | -------------------------------------------------------------------------------------------- |
| `npm run build`          | Vite plus `prepare-deploy-media.mjs` | Root and deployment dependencies; writes `.output/`                                          |
| `npm run media:previews` | `create-video-previews.py`           | Python 3 and FFmpeg; writes `public/portfolio/previews/`                                     |
| `npm run media:variants` | `generate-media-variants.mjs`        | A local `sharp` installation via `SHARP_PATH`; writes AVIF/WebP files and the media manifest |

For preview generation, either install FFmpeg on PATH or set `P2T_FFMPEG` to its executable.
CI installs the pinned `imageio-ffmpeg` package and obtains its bundled executable.
On Windows, a configured `python3` command is needed for the npm shortcut; otherwise
invoke the same script with your installed Python executable.

`prepare-deploy-media.mjs` is called automatically by `postbuild`. It removes redundant
release-hosted videos from the deployment output, not the source media.

## Integrations

`npm run calendar:connect -- C:/path/to/oauth-client.json` runs
`connect-google-calendar.mjs`. It performs a real Google OAuth connection and writes
local credentials. Follow [the booking guide](../docs/google-calendar-booking.md);
do not run it as part of linting or routine CI.

## Historical generator

`generate-editorial-covers.py` is the Windows/Pillow generator for the October 24 diagram
covers. It is retained for provenance, is not part of CI, and can overwrite covers that
have since been replaced with photo artwork. Do not use it for the current cover style.
