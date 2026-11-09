import { ALL_ITEMS, absoluteImageUrl, type PortfolioVideo } from "@/lib/portfolio-data";
import { getProjectCopy } from "@/lib/portfolio-copy";
import { PROJECT_VIDEOS } from "@/lib/project-videos";
import { SITE } from "@/lib/site-config";
import DURATIONS from "@/lib/video-durations.json";
import { videoId } from "@/lib/video-sharing";

/** Real lengths of the repo's video files, from scripts/video-durations.mjs. */
const SECONDS: Record<string, number> = DURATIONS;

/**
 * The repo path a video was measured at. Videos served from jsDelivr or a
 * GitHub release keep their source copy at /portfolio/<slug>/<n>.mp4.
 */
function measuredPath(src: string): string {
  const cdn = /\/public(\/portfolio\/[a-z0-9-]+\/\d+\.mp4)$/.exec(src);
  if (cdn) return cdn[1]!;
  const release = /\/releases\/download\/[^/]+\/([a-z0-9-]+)-(\d+)\.mp4$/.exec(src);
  if (release) return `/portfolio/${release[1]}/${release[2]}.mp4`;
  return src;
}

/** ISO 8601 duration for VideoObject, e.g. 95 -> "PT1M35S". */
export function isoDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `PT${m ? `${m}M` : ""}${s || !m ? `${s}S` : ""}`;
}

/** Human length for the page, e.g. 95 -> "1:35". */
export function clockDuration(seconds: number): string {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

// First public collection commits in this repository, rather than request-time dates.
const FIRST_PUBLISHED: Record<string, string> = {
  "animated-explainer-videos": "2026-10-23T23:14:46Z",
  "long-form-video-and-podcast-production": "2026-10-23T23:14:46Z",
  "performance-marketing-video-ads": "2026-10-23T23:14:46Z",
  "short-form-social-media-videos": "2026-10-23T23:14:46Z",
  "long-form-video-editing": "2026-10-11T19:04:46Z",
  "ugc-video-ads": "2026-09-29T00:44:11Z",
  "cash-cow-youtube-videos": "2026-09-29T00:44:11Z",
  "vip-talking-head-videos": "2026-09-29T00:44:11Z",
};

export type WatchVideo = PortfolioVideo & {
  id: string;
  path: string;
  collectionSlug: string;
  collectionTitle: string;
  description: string;
  thumbnail: string;
  uploadDate: string;
  /** Length in seconds, when the file is self-hosted and was measured. */
  seconds?: number;
  /** 1-based position and size of its collection, for "Video 3 of 12". */
  position: number;
  total: number;
};

type SourceVideo = Omit<PortfolioVideo, "poster"> & { poster?: string; uploadDate?: string };

export const WATCH_VIDEOS: WatchVideo[] = ALL_ITEMS.flatMap((item) => {
  const videos: SourceVideo[] = [
    ...(item.videos ?? []),
    ...(item.automation?.videos ?? []),
    ...(PROJECT_VIDEOS[item.slug] ?? []).map((video) => ({
      ...video,
      orientation: "vertical" as const,
    })),
  ];
  const seen = new Set<string>();
  const unique = videos.filter((video) => {
    const id = videoId(video);
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
  const summary = getProjectCopy(item).summary;
  return unique.map((video, index) => {
    const id = videoId(video);
    const seconds = video.embed ? undefined : SECONDS[measuredPath(video.src)];
    const shape = video.orientation === "vertical" ? "Vertical (9:16)" : "Horizontal (16:9)";
    return {
      ...video,
      id,
      path: `/watch/${item.slug}/${id}`,
      poster: video.poster || item.img,
      collectionSlug: item.slug,
      collectionTitle: item.title,
      description: `${video.title}: ${shape.toLowerCase()} video ${index + 1} of ${unique.length} from ${item.title}, edited by ${SITE.name}. ${summary}`,
      thumbnail: absoluteImageUrl(video.poster || item.img),
      uploadDate: video.uploadDate || FIRST_PUBLISHED[item.slug] || "2026-10-11T19:33:28Z",
      seconds,
      position: index + 1,
      total: unique.length,
    };
  });
});

const BY_PATH = new Map(WATCH_VIDEOS.map((video) => [video.path, video]));

export function getWatchVideo(path: string): WatchVideo | undefined {
  return BY_PATH.get(`/${path.replace(/^\/+|\/+$/g, "")}`);
}

export function videoSchema(video: WatchVideo) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: [video.thumbnail],
    uploadDate: video.uploadDate,
    ...(video.seconds ? { duration: isoDuration(video.seconds) } : {}),
    url: `${SITE.url}${video.path}`,
    ...(video.embed ? { embedUrl: video.embed } : { contentUrl: absoluteImageUrl(video.src) }),
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };
}

export function watchPageHead(video: WatchVideo) {
  const url = `${SITE.url}${video.path}`;
  const title = `${video.title} | ${video.collectionTitle} | ${SITE.name}`;
  return {
    meta: [
      { title },
      { name: "description", content: video.description },
      { name: "robots", content: "index, follow, max-video-preview:-1" },
      { property: "og:title", content: title },
      { property: "og:description", content: video.description },
      { property: "og:url", content: url },
      { property: "og:type", content: "video.other" },
      { property: "og:image", content: video.thumbnail },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: video.description },
      { name: "twitter:image", content: video.thumbnail },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(videoSchema(video)).replace(/</g, "\\u003c"),
      },
    ],
  };
}
