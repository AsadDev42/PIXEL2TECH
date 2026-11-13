import type { PostMeta } from "@/lib/blog-types";

const SERVICE_LINKS = [
  {
    matches: /shopify|e-?commerce|woocommerce/i,
    label: "Shopify development",
    to: "/shopify-development-agency",
  },
  {
    matches: /white.label|outsourc.*web|agency partner/i,
    label: "White-label web development",
    to: "/white-label-web-development",
  },
  {
    matches: /design system|design token|component librar/i,
    label: "Design systems",
    to: "/services/design-systems",
  },
  {
    matches: /presentation|pitch deck/i,
    label: "Presentation design",
    to: "/services/presentation-design",
  },
  {
    matches: /brand|logo|packaging/i,
    label: "Branding and design",
    to: "/services/branding-and-design",
  },
  {
    matches: /video|editing|reel|youtube/i,
    label: "Outsource video editing",
    to: "/outsource-video-editing",
  },
  {
    matches: /seo|search engine|search growth/i,
    label: "SEO and search growth",
    to: "/services/seo-and-search-growth",
  },
  {
    matches: /automation|crm|workflow/i,
    label: "Automation and CRM",
    to: "/services/automation-and-crm",
  },
  { matches: /\bai\b|chatbot|agent/i, label: "AI solutions", to: "/services/ai-solutions" },
  {
    matches: /email|newsletter|social media/i,
    label: "Social media and email",
    to: "/services/social-media-and-email",
  },
  {
    matches: /web|wordpress|landing page/i,
    label: "Website development",
    to: "/services/website-development",
  },
  {
    matches: /platform|software|\bapp\b/i,
    label: "Custom platforms and apps",
    to: "/services/custom-platforms-and-apps",
  },
];

/** Used only when an article has no hand-selected contextual links. */
export function getDefaultPostLinks(post: Pick<PostMeta, "title" | "tag">) {
  const text = `${post.title} ${post.tag}`;
  const services = SERVICE_LINKS.filter((link) => link.matches.test(text)).slice(0, 2);
  return [
    ...(services.length
      ? services.map(({ label, to }) => ({ label, to }))
      : [{ label: "Explore our services", to: "/services" }]),
    { label: "See our work", to: "/portfolio" },
    { label: "Discuss your project", to: "/contact" },
  ];
}
