import { STORE_PROJECTS } from "@/lib/store-projects";

/**
 * Counts of website and store projects, read from src/content/stores so the
 * numbers on landing pages stay true as projects are added or removed.
 */
const whiteLabel = STORE_PROJECTS.filter((p) => p.engagement === "white-label");

export const PORTFOLIO_STATS = {
  shopify: STORE_PROJECTS.filter((p) => p.platform === "Shopify").length,
  shopifyDirect: STORE_PROJECTS.filter(
    (p) => p.platform === "Shopify" && p.engagement !== "white-label",
  ).length,
  whiteLabel: whiteLabel.length,
  whiteLabelShopify: whiteLabel.filter((p) => p.platform === "Shopify").length,
  whiteLabelWordPress: whiteLabel.filter((p) => p.platform === "WordPress").length,
  whiteLabelOther: whiteLabel.filter((p) => p.platform !== "Shopify" && p.platform !== "WordPress")
    .length,
} as const;
