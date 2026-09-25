import klingBase from "@/assets/kling-o1-ai-video.webp.asset.json";
import kling480w from "@/assets/kling-o1-480.webp.asset.json";
import kling800w from "@/assets/kling-o1-800.webp.asset.json";
import kling1200w from "@/assets/kling-o1-1200.webp.asset.json";
import kling1600w from "@/assets/kling-o1-1600.webp.asset.json";
import kling480a from "@/assets/kling-o1-480.avif.asset.json";
import kling800a from "@/assets/kling-o1-800.avif.asset.json";
import kling1200a from "@/assets/kling-o1-1200.avif.asset.json";
import kling1600a from "@/assets/kling-o1-1600.avif.asset.json";

/** Widths we generate for every blog image. */
export const IMAGE_WIDTHS = [480, 800, 1200, 1600] as const;

type SourceSet = {
  avif?: string;
  webp?: string;
  /** srcset for the <img> itself, when the server picks the format. */
  srcSet?: string;
};

/** Pre-generated variants for images hosted on our own CDN. */
const LOCAL_VARIANTS: Record<string, SourceSet> = {
  [klingBase.url]: {
    avif: [kling480a, kling800a, kling1200a, kling1600a]
      .map((a, i) => `${a.url} ${IMAGE_WIDTHS[i]}w`)
      .join(", "),
    webp: [kling480w, kling800w, kling1200w, kling1600w]
      .map((a, i) => `${a.url} ${IMAGE_WIDTHS[i]}w`)
      .join(", "),
  },
};

function unsplashVariant(src: string, width: number, format: "avif" | "webp"): string {
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("fm", format);
  url.searchParams.set("q", "70");
  url.searchParams.set("auto", "format");
  return url.toString();
}

function isUnsplash(src: string): boolean {
  return src.startsWith("https://images.unsplash.com/");
}

/**
 * Lovable asset CDN (/__l5e/…). It resizes on request with `?w=` and picks
 * AVIF/WebP/JPEG from the Accept header (Vary: Accept, immutable). Checked
 * with curl: a 1.47 MB cover PNG comes back as a 24 KB AVIF at w=800.
 */
function isAssetCdn(src: string): boolean {
  return /^(https:\/\/pixel2tech\.com)?\/__l5e\//.test(src);
}

function cdnVariant(src: string, width: number): string {
  return `${src}${src.includes("?") ? "&" : "?"}w=${width}`;
}

/**
 * Returns srcsets for a blog image.
 * - Unsplash images use their on-the-fly format/width transform params.
 * - Lovable CDN images get a width srcset; the CDN negotiates the format.
 * - Images with pre-generated variants use those.
 * - Anything else falls back to a plain <img> (no sources).
 */
export function getImageSources(src: string): SourceSet {
  if (LOCAL_VARIANTS[src]) return LOCAL_VARIANTS[src];
  if (isUnsplash(src)) {
    return {
      avif: IMAGE_WIDTHS.map((w) => `${unsplashVariant(src, w, "avif")} ${w}w`).join(", "),
      webp: IMAGE_WIDTHS.map((w) => `${unsplashVariant(src, w, "webp")} ${w}w`).join(", "),
    };
  }
  if (isAssetCdn(src)) {
    return { srcSet: IMAGE_WIDTHS.map((w) => `${cdnVariant(src, w)} ${w}w`).join(", ") };
  }
  return {};
}

/** Best default `src` (mid-size variant) so older browsers don't pull the 1600px original. */
export function getFallbackSrc(src: string): string {
  if (isUnsplash(src)) return unsplashVariant(src, 1200, "webp");
  if (isAssetCdn(src)) return cdnVariant(src, 1200);
  return src;
}
