/**
 * Single source of truth for business facts shown across the site, JSON-LD,
 * legal pages, emails and the MCP catalog. Change a value here, not in pages.
 */

export const SITE = {
  name: "Pixel2Tech",
  url: "https://pixel2tech.com",
  /** One positioning line, used word for word in titles, footer and schema. */
  positioning: "Branding, web design, video and automation studio in Lahore, Pakistan",
  shortDescription:
    "Pixel2Tech is a creative and web studio in Lahore, Pakistan. We design brands, build websites and apps, produce video and automate busywork for clients worldwide.",
  email: "sales@pixel2tech.com",
  phoneDisplay: "+92 317 7475233",
  phoneE164: "+923177475233",
  whatsappUrl:
    "https://api.whatsapp.com/send/?phone=923177475233&text&type=phone_number&app_absent=0",
  location: "Lahore, Pakistan",
  locationLine: "Based in Lahore, working with clients worldwide",
  address: {
    streetAddress: "Office 12, Main Boulevard, Gulberg III",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    postalCode: "54000",
    addressCountry: "PK",
  },
  /** Machine-readable hours (JSON-LD). Keep in sync with `hours` below. */
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    { days: ["Saturday"], opens: "10:00", closes: "16:00" },
  ],
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { days: "Saturday", time: "10:00 AM – 4:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
} as const;

/** Trust figures. Keep every page in sync by importing these. */
export const STATS = {
  clients: "15+",
  projects: "50+",
  rating: "4.9",
  foundingYear: "2023",
  years: "3",
} as const;

export const PRIMARY_CTA_LABEL = "Book a free strategy call";

/** Anchor id of a service card on /services, e.g. "branding-and-design". */
export function serviceAnchor(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Canonical service names, in the order used on /services. */
export const SERVICES = [
  "Branding & Design",
  "Website Development",
  "WordPress & Shopify",
  "Custom Platforms & Apps",
  "Automation & CRM",
  "AI Solutions",
  "SEO & Search Growth",
  "Social Media & Email",
  "Video Editing & Ads",
] as const;
