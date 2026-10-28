import { ALL_ITEMS, absoluteImageUrl, type PortfolioVideo } from "@/lib/portfolio-data";
import { PROJECT_VIDEOS } from "@/lib/project-videos";
import { SITE } from "@/lib/site-config";
import { videoId } from "@/lib/video-sharing";

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
  return videos.flatMap((video) => {
    const id = videoId(video);
    if (seen.has(id)) return [];
    seen.add(id);
    const thumbnail = absoluteImageUrl(video.poster || item.img);
    return [
      {
        ...video,
        id,
        path: `/watch/${item.slug}/${id}`,
        poster: video.poster || item.img,
        collectionSlug: item.slug,
        collectionTitle: item.title,
        description: `${video.title}. Video work from ${item.title} by ${SITE.name}.`,
        thumbnail,
        uploadDate: video.uploadDate || FIRST_PUBLISHED[item.slug] || "2026-10-11T19:33:28Z",
      },
    ];
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
