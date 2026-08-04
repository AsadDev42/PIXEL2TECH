import { lazy, type ComponentType } from "react";

const RELOAD_FLAG = "p2t-chunk-reloaded";

/** True for the browser errors that mean "this JS chunk URL is gone/unreachable". */
export function isChunkLoadError(error: unknown): boolean {
  const message = error instanceof Error ? `${error.name}: ${error.message}` : String(error ?? "");
  return /Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed|ChunkLoadError|Loading chunk .* failed|Loading CSS chunk/i.test(
    message,
  );
}

/**
 * React.lazy that survives a stale-deploy chunk 404: retries once after a short
 * delay, then (once per session) reloads the page to pick up fresh asset hashes.
 * Without this, scrolling to a lazily-mounted section on an old tab throws into
 * the root error boundary and the user sees "This page didn't load".
 */
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
        if (typeof window !== "undefined" && !sessionStorage.getItem(RELOAD_FLAG)) {
          sessionStorage.setItem(RELOAD_FLAG, "1");
          window.location.reload();
          // Keep the promise pending while the reload happens.
          return await new Promise<{ default: T }>(() => {});
        }
        throw retryError;
      }
    }
  });
}
