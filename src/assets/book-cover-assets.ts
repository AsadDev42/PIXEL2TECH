import bookPrivateBank from "@/assets/private-bank-cover.jpg.asset.json";
import bookWealth from "@/assets/wealth-without-wall-street.jpg.asset.json";
import bookInflation from "@/assets/inflation-nation.jpg.asset.json";
import bookTaxSaleGears from "@/assets/tax-sale-secrets-gears.jpg.asset.json";
import bookTaxSaleHouse from "@/assets/tax-sale-secrets-house.jpg.asset.json";
import bookMultifamily from "@/assets/multifamily-money-machine.jpg.asset.json";
import bookVaHubChess from "@/assets/va-hub-pro-handbook-chess.jpg.asset.json";
import bookVaHubCircuit from "@/assets/va-hub-pro-handbook-circuit.jpg.asset.json";
import bookInflationV2 from "@/assets/inflation-nation-v2.jpg.asset.json";
import bookInflationV3 from "@/assets/inflation-nation-v3.jpg.asset.json";
import bookUnshackled from "@/assets/unshackled-retirement.jpg.asset.json";
import bookHookedV2 from "@/assets/hooked-on-cash-flow-v2.jpg.asset.json";
import bookGoalRocket from "@/assets/goal-achiever-rocket.jpg.asset.json";
import bookGoalHead from "@/assets/goal-achiever-head.jpg.asset.json";
import bookDeceived from "@/assets/deceived-scams.jpg.asset.json";

/** One cover in the book-cover case study. `title` doubles as its alt text. */
export type BookCover = { src: string; title: string };

const items: BookCover[] = [
  { src: bookPrivateBank.url, title: "How to Start Your Own Private Bank" },
  { src: bookWealth.url, title: "Wealth Without Wall Street" },
  { src: bookInflation.url, title: "Inflation Nation" },
  { src: bookTaxSaleGears.url, title: "Tax Sale Secrets (gears version)" },
  { src: bookTaxSaleHouse.url, title: "Tax Sale Secrets (house version)" },
  { src: bookMultifamily.url, title: "Multifamily Money Machine" },
  { src: bookVaHubChess.url, title: "The VA Hub Pro Client Handbook (chess version)" },
  { src: bookVaHubCircuit.url, title: "The VA Hub Pro Client Handbook (circuit version)" },
  { src: bookInflationV2.url, title: "Inflation Nation (second version)" },
  { src: bookInflationV3.url, title: "Inflation Nation (third version)" },
  { src: bookUnshackled.url, title: "Unshackled" },
  { src: bookHookedV2.url, title: "Hooked on Cash Flow" },
  { src: bookGoalRocket.url, title: "The Goal Achiever (rocket version)" },
  { src: bookGoalHead.url, title: "The Goal Achiever (head version)" },
  { src: bookDeceived.url, title: "Deceived" },
];

export const bookCoverAssets = {
  /** Covers with their titles, in display order. */
  items,
  /** Cover image URLs only, in the same order (used as the project gallery). */
  covers: items.map((item) => item.src),
};
