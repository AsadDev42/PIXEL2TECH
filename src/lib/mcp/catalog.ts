/**
 * Static, import-safe content the MCP tools expose.
 * No env reads, no I/O at module scope.
 *
 * Business facts (name, contact details, address, service names) come from
 * src/lib/site-config.ts so AI agents see exactly what the website shows.
 */
import { SERVICES as SERVICE_NAMES, SITE } from "@/lib/site-config";

type ServiceName = (typeof SERVICE_NAMES)[number];

/** Short description and tags per service. Keyed by the canonical name, so a
 * renamed or added service in site-config fails the type check here. */
const SERVICE_DETAILS: Record<ServiceName, { description: string; tags: readonly string[] }> = {
  "Branding & Design": {
    description:
      "Logo, color palette, typography, and brand guidelines that make your business look professional and stand out from day one.",
    tags: ["Logo", "Brand Guide", "UI / UX"],
  },
  "Website Development": {
    description:
      "Fast, modern, mobile-ready websites that convert visitors into customers — from landing pages to full business sites.",
    tags: ["React", "Next.js", "Custom Code"],
  },
  "WordPress & Shopify": {
    description:
      "Custom WordPress sites and Shopify stores built to sell — themes, plugins, product pages, and payment flows set up for you.",
    tags: ["WordPress", "Shopify", "WooCommerce"],
  },
  "Custom Platforms & Apps": {
    description:
      "Mobile apps, SaaS products, client portals, and dashboards built from scratch to match your exact business needs.",
    tags: ["SaaS", "Mobile App", "Portals"],
  },
  "Automation & CRM": {
    description:
      "Workflow automation, CRM systems, and third-party integrations that cut manual work out of your day-to-day operations.",
    tags: ["n8n", "Make", "Zapier", "Custom CRM"],
  },
  "AI Solutions": {
    description:
      "AI chatbots, voice agents, and RAG systems that handle routine customer questions and add useful features to your product.",
    tags: ["Chatbots", "RAG", "Voice Agents"],
  },
  "SEO & Search Growth": {
    description:
      "On-page SEO, technical audits, and keyword strategy that help your business rank on Google and grow organic traffic.",
    tags: ["On-Page SEO", "Technical SEO", "Local SEO"],
  },
  "Social Media & Email": {
    description:
      "Content creation, ad campaigns, email sequences, and newsletter management across the major platforms.",
    tags: ["Instagram", "Facebook Ads"],
  },
  "Video Editing & Ads": {
    description:
      "Reels, brand videos, YouTube content, and paid ad creatives edited to grab attention on each platform.",
    tags: ["Reels", "YouTube", "Paid Ads"],
  },
};

export const SERVICES = SERVICE_NAMES.map((title) => ({ title, ...SERVICE_DETAILS[title] }));

const { streetAddress, addressLocality, addressRegion, postalCode } = SITE.address;

export const AGENCY = {
  name: SITE.name,
  positioning: SITE.positioning,
  summary: SITE.shortDescription,
  website: SITE.url,
  email: SITE.email,
  phone: SITE.phoneDisplay,
  whatsapp: SITE.whatsappUrl,
  address: `${streetAddress}, ${addressLocality} ${postalCode}, ${addressRegion}, Pakistan`,
  hours: SITE.hours.map((h) => `${h.days}: ${h.time}`),
  process: ["Discovery", "Strategize", "Build & Implement", "Optimize & Scale"],
} as const;

export const SITE_URL = SITE.url;
