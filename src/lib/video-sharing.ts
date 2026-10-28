type VideoIdentity = { src: string; poster?: string; embed?: string; id?: string };

/** Stable across playlist reordering and temporary media query parameters. */
export function videoId(video: VideoIdentity): string {
  if (video.id && /^v-[a-z0-9]{1,7}$/.test(video.id)) return video.id;
  const identity = (video.poster || video.embed || video.src).split(/[?#]/)[0];
  let hash = 2166136261;
  for (let index = 0; index < identity.length; index++) {
    hash = Math.imul(hash ^ identity.charCodeAt(index), 16777619);
  }
  return `v-${(hash >>> 0).toString(36)}`;
}

export function videoIdFromHash(hash: string): string | null {
  const id = new URLSearchParams(hash.replace(/^#/, "")).get("video");
  return id && /^v-[a-z0-9]{1,7}$/.test(id) ? id : null;
}

/** Shares a website page, never a direct MP4 or external media URL. */
export function videoSharePath(pathname: string, video: VideoIdentity): string {
  const collection = /^\/(?:portfolio|watch)\/([^/#?]+)/.exec(pathname)?.[1];
  return collection
    ? `/watch/${collection}/${videoId(video)}`
    : `${pathname}#video=${videoId(video)}`;
}
