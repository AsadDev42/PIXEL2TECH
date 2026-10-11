/**
 * AI automation builds shown in the "AI Automation" practice.
 *
 * Client workflows built by the Pixel2Tech automation team. Clients stay
 * anonymous (described by industry only), and pages make no result claims.
 *
 * Each build is one JSON file in src/content/automations/<slug>.json; its
 * screenshots live in public/portfolio/<slug>/<file>.webp.
 */
import type { PortfolioVideo } from "@/lib/portfolio-data";

export const AUTOMATION_SUBCATEGORIES = [
  "Voice Agents",
  "Lead Generation & CRM",
  "AI Agents & Chatbots",
  "Content & Operations",
] as const;
export type AutomationSubcategory = (typeof AUTOMATION_SUBCATEGORIES)[number];

export type AutomationProject = {
  /** Portfolio slug, also the screenshot folder name. */
  slug: string;
  /** Card and page title, e.g. "AI voice receptionist with live booking". No client names. */
  title: string;
  subcategory: AutomationSubcategory;
  /** Display order inside the subcategory (lower first). */
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
  /** Screenshots in display order: file name without extension, and a caption. */
  shots: { file: string; caption: string }[];
  /** Card image (a file from `shots`); defaults to the first shot. */
  cover?: string;
  /** Optional demo videos: <file>.mp4 with a <file>.jpg poster in the same folder. */
  videos?: { file: string; title: string; orientation: "landscape" | "vertical" }[];
};

/** What the detail page needs to present a build. */
export type AutomationShowcaseData = {
  shots: { src: string; caption: string }[];
  videos: PortfolioVideo[];
};

const files = import.meta.glob<AutomationProject>("../content/automations/*.json", {
  eager: true,
  import: "default",
});

export const AUTOMATION_PROJECTS: AutomationProject[] = Object.values(files).sort(
  (a, b) => a.order - b.order || a.title.localeCompare(b.title),
);

const asset = (p: AutomationProject, name: string, ext: string) =>
  `/portfolio/${p.slug}/${name}.${ext}`;

export function automationShowcase(p: AutomationProject): AutomationShowcaseData {
  return {
    shots: p.shots.map((s) => ({ src: asset(p, s.file, "webp"), caption: s.caption })),
    videos: (p.videos ?? []).map((v) => ({
      src: asset(p, v.file, "mp4"),
      poster: asset(p, v.file, "jpg"),
      title: v.title,
      orientation: v.orientation,
    })),
  };
}

export function automationCover(p: AutomationProject): string {
  return asset(p, p.cover ?? p.shots[0]!.file, "webp");
}
