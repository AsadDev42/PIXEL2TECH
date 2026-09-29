/**
 * Page-wide "one video with sound" rule. A player that starts playing with
 * sound calls claimVideoSound(id); every other player listening through
 * onVideoSoundClaimed() drops back to its muted preview.
 */

const EVENT = "p2t:video-sound";

export function claimVideoSound(owner: string): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<string>(EVENT, { detail: owner }));
}

/** Calls `cb` with the new owner's id whenever any player claims sound. */
export function onVideoSoundClaimed(cb: (owner: string) => void): () => void {
  if (typeof window === "undefined") return () => undefined;
  const listener = (e: Event) => cb((e as CustomEvent<string>).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}

/** True when the visitor asked the OS for reduced motion. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Media attributes that hide the browser's download, speed and cast/PiP options. */
export const PROTECTED_VIDEO_PROPS = {
  controlsList: "nodownload noplaybackrate noremoteplayback",
  disablePictureInPicture: true,
  disableRemotePlayback: true,
  "data-protect": "",
} as const;
