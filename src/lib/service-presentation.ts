import type { ServiceTitle } from "@/lib/service-pages";

type ServicePresentation = {
  bestFor: string;
  deliverables: string[];
  image?: string;
  alt?: string;
  caption: string;
  project?: string;
  illustration?: "platform" | "search";
};

/** Published work is identified explicitly; diagrams are service illustrations, not case studies. */
export const SERVICE_PRESENTATION: Record<ServiceTitle, ServicePresentation> = {
  "Branding & Design": {
    bestFor: "A new identity or a brand that needs to look consistent.",
    deliverables: [
      "Logo, colour and typography system",
      "Brand guidelines and reusable templates",
      "Website, social and print applications",
    ],
    image: "/portfolio/brand-identity-design-collection/1.webp",
    alt: "ChelaPrints identity applied to clothing, stationery and branded merchandise",
    caption: "From our brand identity collection",
    project: "brand-identity-design-collection",
  },
  "Website Development": {
    bestFor: "A business website that explains your offer and makes enquiries straightforward.",
    deliverables: [
      "Page structure and responsive UI design",
      "Website build and enquiry forms",
      "Content editing and launch checks",
    ],
    image: "/portfolio/cargo-health-wordpress-website/desktop-home.webp",
    alt: "carGO Health medical courier website with service information and demo request",
    caption: "carGO Health website · agency partner work",
    project: "cargo-health-wordpress-website",
  },
  "WordPress & Shopify": {
    bestFor: "A store or content site your own team can keep up to date.",
    deliverables: [
      "Theme and page-template development",
      "Product, collection and content layouts",
      "Agreed integrations and shopping checks",
    ],
    image: "/portfolio/histreet-shopify-store/desktop-home.webp",
    alt: "Hi Street Shopify footwear store with style-based product navigation",
    caption: "Hi Street Shopify storefront",
    project: "histreet-shopify-store",
  },
  "Custom Platforms & Apps": {
    bestFor: "A business workflow that needs its own interface, permissions or data model.",
    deliverables: [
      "User journeys and interface design",
      "Application, data and integration build",
      "Acceptance checks and technical handover",
    ],
    caption: "Illustration · a connected client portal",
    illustration: "platform",
  },
  "Automation & CRM": {
    bestFor: "A team spending too much time moving information between tools.",
    deliverables: [
      "Workflow mapping and field definitions",
      "CRM connections and routing rules",
      "Error alerts and recovery guidance",
    ],
    image: "/portfolio/inquiry-to-invoice-automation/cover.webp",
    alt: "Inquiry-to-invoice workflow connecting lead intake, proposals and invoicing",
    caption: "Inquiry-to-invoice automation workflow",
    project: "inquiry-to-invoice-automation",
  },
  "AI Solutions": {
    bestFor: "A defined task that can benefit from document search or an AI assistant.",
    deliverables: [
      "Use-case and knowledge-source review",
      "Assistant, retrieval and tool connections",
      "Evaluation cases and human handover",
    ],
    image: "/portfolio/rag-document-assistant/1.webp",
    alt: "Document assistant workflow connecting document ingestion, a vector store and chat",
    caption: "RAG document assistant for logistics",
    project: "rag-document-assistant",
  },
  "SEO & Search Growth": {
    bestFor: "A website that needs clearer search visibility and a prioritised improvement plan.",
    deliverables: [
      "Technical and on-page review",
      "Search intent and content planning",
      "Agreed fixes and measurement setup",
    ],
    caption: "Illustration · review, prioritise and measure",
    illustration: "search",
  },
  "Social Media & Email": {
    bestFor: "A brand that needs consistent campaign content and customer communication.",
    deliverables: [
      "Content direction and creative production",
      "Social, ad and email assets",
      "Campaign setup and agreed reporting",
    ],
    image: "/media/5029b141-c991-4ba8-9909-25e972eb8692/madluvv-cover.png",
    alt: "MADLUVV beauty product creative from the social media and Meta ads collection",
    caption: "MADLUVV social and Meta ad creative",
    project: "madluvv-social-media-meta-ads",
  },
  "Video Editing & Ads": {
    bestFor: "A product, message or conversation that needs a clear visual story.",
    deliverables: [
      "Story selection, structure and editing",
      "Motion, captions and sound treatment",
      "Exports for the agreed placements",
    ],
    image: "/portfolio/animated-explainer-videos/9.jpg",
    alt: "Motion-design frame from the animated explainer video collection",
    caption: "From our animated explainer video collection",
    project: "animated-explainer-videos",
  },
};
