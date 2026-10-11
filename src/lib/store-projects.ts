/**
 * Client stores (Shopify / WordPress) shown in the "WordPress & Shopify" practice.
 *
 * Each store is one JSON file in src/content/stores/<slug>.json; its
 * screenshots live in public/portfolio/<slug>/ (captured from the live store).
 * Adding a store = adding those two things. Portfolio items, page copy and
 * detail sections are all generated from this data.
 */
import type { LiveStore } from "@/components/store-showcase";

export type StoreProject = {
  /** Portfolio slug, e.g. "skin-deep-shopify-store". Also the screenshot folder name. */
  slug: string;
  client: string;
  url: string;
  platform: "Shopify" | "WordPress";
  /** Display order inside the category (lower first). */
  order: number;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  results: { label: string; value: string }[];
  deliverables: string[];
  process: { title: string; body: string }[];
  technologies: string[];
  whyItMatters: string;
  faqs: { q: string; a: string }[];
  /** Which screenshots exist in public/portfolio/<slug>/ (file names without extension). */
  shots: {
    desktop: string[];
    fullPage?: string;
    mobile: string[];
    /** Card image; defaults to the first mobile shot. */
    cover?: string;
  };
};

const files = import.meta.glob<StoreProject>("../content/stores/*.json", {
  eager: true,
  import: "default",
});

export const STORE_PROJECTS: StoreProject[] = Object.values(files).sort(
  (a, b) => a.order - b.order || a.client.localeCompare(b.client),
);

const shot = (p: StoreProject, name: string) => `/portfolio/${p.slug}/${name}.webp`;

export function storeOf(p: StoreProject): LiveStore {
  return {
    url: p.url,
    desktop: p.shots.desktop.map((n) => shot(p, n)),
    fullPage: p.shots.fullPage ? shot(p, p.shots.fullPage) : undefined,
    mobile: p.shots.mobile.map((n) => shot(p, n)),
  };
}

export function storeCover(p: StoreProject): string {
  return shot(p, p.shots.cover ?? p.shots.mobile[0] ?? p.shots.desktop[0]!);
}
