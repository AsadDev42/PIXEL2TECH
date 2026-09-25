import { lazy, type ComponentType } from "react";

/** sessionStorage key holding the time (ms) of the last automatic reload. */
const RELOAD_AT_KEY = "p2t-chunk-reload-at";
/** Old flag ("1", never cleared). Removed so it can't block recovery. */
const LEGACY_RELOAD_KEY = "p2t-chunk-reloaded";
/**
 * Allow another automatic reload once this long has passed since the last
 * one. Long enough to stop a reload loop when a chunk is really missing, short
 * enough that a tab left open across two deploys still recovers.
 */
const RELOAD_COOLDOWN_MS = 30_000;

/** True for the browser errors that mean "this JS chunk URL is gone/unreachable". */
export function isChunkLoadError(error: unknown): boolean {
  const message = error instanceof Error ? `${error.name}: ${error.message}` : String(error ?? "");
  return /Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed|ChunkLoadError|Loading chunk .* failed|Loading CSS chunk/i.test(
    message,
  );
}

/**
 * Reloads the page so a stale tab picks up the new asset hashes after a
 * deploy, at most once per RELOAD_COOLDOWN_MS.
 *
 * Returns true when a reload has started (keep showing a neutral screen), or
 * false when the caller should show an error with a manual "Reload" button:
 * we reloaded moments ago, or storage is blocked and a loop can't be ruled out.
 */
export function reloadForStaleChunk(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const last = Number(window.sessionStorage.getItem(RELOAD_AT_KEY) ?? 0);
    if (Number.isFinite(last) && Date.now() - last < RELOAD_COOLDOWN_MS) return false;
    window.sessionStorage.setItem(RELOAD_AT_KEY, String(Date.now()));
    window.sessionStorage.removeItem(LEGACY_RELOAD_KEY);
  } catch {
    return false;
  }
  window.location.reload();
  return true;
}

/**
 * React.lazy that survives a stale-deploy chunk 404: retries once after a short
 * delay, then reloads the page to pick up fresh asset hashes (see
 * reloadForStaleChunk). If a reload isn't allowed, the error reaches the root
 * error boundary, which offers a manual reload.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- matches React.lazy's own constraint
export function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
) {
  return lazy(async () => {
    try {
      return await factory();
    } catch (error) {
      if (!isChunkLoadError(error)) throw error;

      await new Promise((r) => setTimeout(r, 600));
      try {
        return await factory();
      } catch (retryError) {
        if (reloadForStaleChunk()) {
          // Keep the promise pending while the reload happens.
          return await new Promise<{ default: T }>(() => {});
        }
        throw retryError;
      }
    }
  });
}
