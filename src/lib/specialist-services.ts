import type { LucideIcon } from "lucide-react";
import {
  SERVICE_PAGES,
  type ServicePage,
  type ServicePageCopy,
  type ServiceTitle,
} from "@/lib/service-pages";
import { CREATIVE_SERVICES_A } from "@/lib/specialist-services/creative-a";
import { CREATIVE_SERVICES_B } from "@/lib/specialist-services/creative-b";
import { PRODUCTION_SERVICES } from "@/lib/specialist-services/production";
import { AI_MARKETING_SERVICES } from "@/lib/specialist-services/ai-marketing";

/**
 * Specialist service pages at /services/<slug>. They use the same page template
 * and truth rules as the nine core services in service-pages.ts, and each one
 * names the core service it belongs to (`parent`) for its fallback visual.
 */
export type SpecialistServiceCopy = ServicePageCopy & {
  slug: string;
  /** Short name used in menus, the footer and breadcrumbs, e.g. "Presentation design". */
  title: string;
  parent: ServiceTitle;
  icon: LucideIcon;
  /** Menu line under the title, 45 characters or fewer. */
  menuDescription: string;
  /** "A good fit for" line in the hero. */
  bestFor: string;
  /** Shown instead of case studies when `work` is empty. */
  firstPhase: { heading: string; body: string; inputs: [string, string, string] };
};

export const SPECIALIST_PAGES: SpecialistServiceCopy[] = [
  ...CREATIVE_SERVICES_A,
  ...CREATIVE_SERVICES_B,
  ...PRODUCTION_SERVICES,
  ...AI_MARKETING_SERVICES,
];

export type AnyServicePage =
  | { kind: "core"; page: ServicePage }
  | { kind: "specialist"; page: SpecialistServiceCopy };

export function getAnyServicePage(slug: string): AnyServicePage | undefined {
  const core = SERVICE_PAGES.find((p) => p.slug === slug);
  if (core) return { kind: "core", page: core };
  const specialist = SPECIALIST_PAGES.find((p) => p.slug === slug);
  return specialist ? { kind: "specialist", page: specialist } : undefined;
}

export type ServiceGroupKey = "creative" | "production" | "ai" | "marketing";

export type ServiceGroup = {
  key: ServiceGroupKey;
  title: string;
  /** Anchor of the group section on /services. */
  anchor: string;
  description: string;
  /** Every entry is a /services/<slug> page; `label` overrides the page title in menus. */
  items: { slug: string; label?: string }[];
};

/** The four service families, in the order used by the menu, footer and /services. */
export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    key: "creative",
    title: "Creative design services",
    anchor: "creative-design-services",
    description: "Brand, campaign and print design, made in-house by our designers.",
    items: [
      { slug: "ad-creative-design" },
      { slug: "social-media-design" },
      { slug: "presentation-design" },
      { slug: "illustration-design" },
      { slug: "branding-and-design", label: "Branding services" },
      { slug: "ebook-and-report-design" },
      { slug: "concept-creation" },
      { slug: "print-design" },
      { slug: "packaging-design" },
    ],
  },
  {
    key: "production",
    title: "Specialized production services",
    anchor: "specialized-production-services",
    description: "Video, motion, web, product and copy, produced to an agreed spec.",
    items: [
      { slug: "video-editing-and-ads", label: "Video production & editing" },
      { slug: "motion-design" },
      { slug: "email-design" },
      { slug: "website-development", label: "Web design" },
      { slug: "wordpress-and-shopify", label: "WordPress & Shopify" },
      { slug: "design-systems" },
      { slug: "ui-ux-design" },
      { slug: "custom-platforms-and-apps", label: "Custom platforms & apps" },
      { slug: "copywriting" },
    ],
  },
  {
    key: "ai",
    title: "AI services",
    anchor: "ai-services",
    description: "AI creative, consulting, assistants and automation with human review.",
    items: [
      { slug: "ai-creative" },
      { slug: "ai-consulting" },
      { slug: "ai-solutions", label: "AI chatbots & agents" },
      { slug: "automation-and-crm", label: "Automation & CRM" },
    ],
  },
  {
    key: "marketing",
    title: "Marketing services",
    anchor: "marketing-services",
    description: "Campaign planning, search growth and the content that runs it.",
    items: [
      { slug: "campaign-strategy" },
      { slug: "seo-and-search-growth", label: "SEO & search growth" },
      { slug: "social-media-and-email", label: "Social media & email marketing" },
    ],
  },
];

/** Menu label for a /services/<slug> page. */
export function serviceLabel(slug: string, label?: string): string {
  if (label) return label;
  return getAnyServicePage(slug)?.page.title ?? slug;
}

/** The group a service page belongs to. */
export function groupOf(slug: string): ServiceGroup | undefined {
  return SERVICE_GROUPS.find((g) => g.items.some((i) => i.slug === slug));
}
