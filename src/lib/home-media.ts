/**
 * Homepage media manifest.
 *
 * Every clip/photo here is pre-resized to the size it actually renders at
 * (hero tiles render ~90-170 CSS px wide), so the browser never downloads
 * 720p source files for thumbnail-sized boxes. Videos carry a poster frame so
 * the tile paints instantly before (or instead of) the clip.
 */
import type { SERVICES } from "@/lib/site-config";

import heroSpiral from "@/assets/opt-hero-spiral-384.mp4.asset.json";
import heroSpiralPoster from "@/assets/opt-hero-spiral-poster.webp.asset.json";
import heroSticky from "@/assets/opt-hero-stickynotes-384.mp4.asset.json";
import heroStickyPoster from "@/assets/opt-hero-stickynotes-poster.webp.asset.json";
import heroDesk from "@/assets/opt-hero-desk-384.mp4.asset.json";
import heroDeskPoster from "@/assets/opt-hero-desk-poster.webp.asset.json";
import heroLaptop from "@/assets/opt-hero-laptopcode-384.mp4.asset.json";
import heroLaptopPoster from "@/assets/opt-hero-laptopcode-poster.webp.asset.json";

import heroCoffee384 from "@/assets/opt-hero-coffeemock-384.webp.asset.json";
import heroCoffee576 from "@/assets/opt-hero-coffeemock-576.webp.asset.json";
import heroRavokafe384 from "@/assets/opt-hero-ravokafe-384.webp.asset.json";
import heroRavokafe576 from "@/assets/opt-hero-ravokafe-576.webp.asset.json";
import heroLovebites384 from "@/assets/opt-hero-lovebites-384.webp.asset.json";
import heroLovebites576 from "@/assets/opt-hero-lovebites-576.webp.asset.json";
import heroLima384 from "@/assets/opt-hero-lima-384.webp.asset.json";
import heroLima576 from "@/assets/opt-hero-lima-576.webp.asset.json";
import heroArmpearl384 from "@/assets/opt-hero-armpearl-384.webp.asset.json";
import heroArmpearl576 from "@/assets/opt-hero-armpearl-576.webp.asset.json";

import workWebPoster from "@/assets/opt-work-web-poster.webp.asset.json";
import workUiuxPoster from "@/assets/opt-work-uiux-poster.webp.asset.json";
import workLogoPoster from "@/assets/opt-work-logo-poster.webp.asset.json";
import workConceptPoster from "@/assets/opt-work-concept-poster.webp.asset.json";
import workWpPoster from "@/assets/opt-work-wordpress-shopify-poster.webp.asset.json";
import workAutomationPoster from "@/assets/opt-work-automation-poster.webp.asset.json";
import workAiPoster from "@/assets/opt-work-ai-solutions-poster.webp.asset.json";
import seoCard from "@/assets/seo-search-growth-card.webp.asset.json";
import workSocialPoster from "@/assets/opt-work-social-new-poster.webp.asset.json";

export type HeroMedia =
  { kind: "video"; src: string; poster: string } | { kind: "image"; src: string; srcSet: string };

type Asset = { url: string };

const srcSet = (small: Asset, large: Asset) => `${small.url} 384w, ${large.url} 576w`;
const img = (small: Asset, large: Asset): HeroMedia => ({
  kind: "image",
  src: small.url,
  srcSet: srcSet(small, large),
});
const vid = (clip: Asset, poster: Asset): HeroMedia => ({
  kind: "video",
  src: clip.url,
  poster: poster.url,
});

/**
 * The image the browser should fetch first. It is the first mobile tile and
 * the top tile of the middle desktop column, so one preload covers both.
 */
export const heroLcpImage = {
  src: heroRavokafe384.url,
  srcSet: srcSet(heroRavokafe384, heroRavokafe576),
};

/** Three vertical hero columns (md and up), each looping independently. */
export const heroColumns: HeroMedia[][] = [
  [
    vid(heroSpiral, heroSpiralPoster),
    vid(heroSticky, heroStickyPoster),
    img(heroCoffee384, heroCoffee576),
  ],
  [
    { kind: "image", ...heroLcpImage },
    img(heroLovebites384, heroLovebites576),
    vid(heroDesk, heroDeskPoster),
  ],
  [
    img(heroLima384, heroLima576),
    vid(heroLaptop, heroLaptopPoster),
    img(heroArmpearl384, heroArmpearl576),
  ],
];

/**
 * Phone hero tiles: still images only (no video, no loop animation) so phones
 * paint the hero immediately instead of streaming four clips.
 * The first tile is the preloaded LCP bitmap.
 */
export const heroMobileTiles: { src: string; srcSet?: string }[] = [
  heroLcpImage,
  { src: heroLovebites384.url, srcSet: srcSet(heroLovebites384, heroLovebites576) },
  { src: heroLima384.url, srcSet: srcSet(heroLima384, heroLima576) },
  { src: heroCoffee384.url, srcSet: srcSet(heroCoffee384, heroCoffee576) },
  { src: heroArmpearl384.url, srcSet: srcSet(heroArmpearl384, heroArmpearl576) },
  { src: heroSpiralPoster.url },
];

export type ServiceName = (typeof SERVICES)[number];

/**
 * One still per canonical service for the home "What we make" cards: first
 * frames of our own reels, plus a Search Console screenshot for SEO. The cards
 * are static on purpose, so the hero is the page's only moving element.
 */
export const serviceImages: Record<ServiceName, string> = {
  "Branding & Design": workLogoPoster.url,
  "Website Development": workWebPoster.url,
  "WordPress & Shopify": workWpPoster.url,
  "Custom Platforms & Apps": workUiuxPoster.url,
  "Automation & CRM": workAutomationPoster.url,
  "AI Solutions": workAiPoster.url,
  "SEO & Search Growth": seoCard.url,
  "Social Media & Email": workSocialPoster.url,
  "Video Editing & Ads": workConceptPoster.url,
};
