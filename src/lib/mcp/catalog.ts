/**
 * Static, import-safe content the MCP tools expose.
 * No env reads, no I/O at module scope.
 */

export const SERVICES = [
  {
    title: "Branding & Design",
    description:
      "Logo, color palette, typography, and brand guidelines that make your business look professional and stand out from day one.",
    tags: ["Logo", "Brand Guide", "UI / UX"],
  },
  {
    title: "Website Development",
    description:
      "Fast, modern, mobile-ready websites that convert visitors into customers — from landing pages to full business sites.",
    tags: ["React", "Next.js", "Custom Code"],
  },
  {
    title: "WordPress & Shopify",
    description:
      "Custom WordPress sites and Shopify stores built to sell — themes, plugins, product pages, and payment flows set up for you.",
    tags: ["WordPress", "Shopify", "WooCommerce"],
  },
  {
    title: "Custom Platforms & Apps",
    description:
      "Mobile apps, SaaS products, client portals, and dashboards built from scratch to match your exact business needs.",
    tags: ["SaaS", "Mobile App", "Portals"],
  },
  {
    title: "Automation & CRM",
    description:
      "Workflow automation, CRM systems, and third-party integrations that eliminate manual work and keep your business running on its own.",
    tags: ["n8n", "Make", "Zapier", "Custom CRM"],
  },
  {
    title: "AI Solutions",
    description:
      "AI chatbots, voice agents, and RAG systems that automate customer interactions and make your product smarter without extra headcount.",
    tags: ["Chatbots", "RAG", "Voice Agents"],
  },
  {
    title: "SEO & Search Growth",
    description:
      "On-page SEO, technical audits, and keyword strategy that gets your business ranking on Google and driving consistent organic traffic.",
    tags: ["On-Page SEO", "Technical SEO", "Local SEO"],
  },
  {
    title: "Social Media & Email",
    description:
      "Content creation, ad campaigns, email sequences, and newsletter management across all major platforms — handled end to end.",
    tags: ["Instagram", "Facebook Ads"],
  },
  {
    title: "Video Editing & Ads",
    description:
      "Reels, brand videos, YouTube content, and paid ad creatives edited to grab attention and convert across every platform.",
    tags: ["Reels", "YouTube", "Paid Ads"],
  },
] as const;

export const AGENCY = {
  name: "Pixel2Tech",
  tagline: "One Creative Agency. Not Ten Freelancers.",
  summary:
    "Pixel2Tech is a full-service creative agency covering branding, web design and development, custom platforms, automation, AI, SEO, social, and video — handled in-house by one team.",
  website: "https://pixel2tech.com",
  email: "sale@pixel2tech.com",
  phone: "+92 317 7475233",
  address: "Office 12, Main Boulevard, Gulberg III, Lahore 54000, Punjab, Pakistan",
  process: ["Discovery", "Strategize", "Build & Implement", "Optimize & Scale"],
} as const;

export const SITE_URL = AGENCY.website;
