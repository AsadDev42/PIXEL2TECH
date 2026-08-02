import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site-chrome";
import { LegalBody, type LegalSection } from "@/components/legal-page";

const TITLE = "Privacy Policy | Pixel2Tech";
const DESCRIPTION =
  "How Pixel2Tech collects, uses, stores and protects personal information submitted through pixel2tech.com, and how you can request access or deletion.";
const OG_IMAGE = "https://pixel2tech.com/__l5e/assets-v1/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg";
const UPDATED = "August 2, 2026";

const SECTIONS: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      "Pixel2Tech is a full-service creative agency offering branding, web design, UI/UX, social media, video and custom software. Our office is at Office 12, Main Boulevard, Gulberg III, Lahore, Punjab 54000, Pakistan.",
      "This policy explains how we handle personal information on pixel2tech.com. It is maintained by Pixel2Tech and describes our own practices; it is not a certification or an independent audit.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "Information you give us: when you submit our contact form or book a call, we collect your first name, last name, email address, phone number and the message you write.",
      "Information collected automatically: like most websites, our analytics records anonymous usage data such as pages viewed, referring page, approximate region, device type and browser. We do not use this data to identify you personally.",
      "We do not ask for and do not want sensitive information such as payment card numbers, government identifiers or health data through this website.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use the details you submit to reply to your enquiry, prepare proposals, schedule meetings and deliver the services you ask for.",
      "We use aggregated analytics to understand which pages are useful and to improve the site's content and performance.",
      "We do not sell your personal information, and we do not share it for third-party advertising.",
    ],
  },
  {
    heading: "Service providers we rely on",
    body: [
      "Our website and its database are hosted on Lovable Cloud infrastructure, which stores contact form submissions and serves the site.",
      "We use Google Analytics for website analytics, Calendly for meeting scheduling, and an email delivery provider to send notifications about your enquiry from notify.pixel2tech.com.",
      "These providers process data only to deliver their service to us. If you would like the current list of providers in writing, email sales@pixel2tech.com.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "We use a small number of cookies and similar storage: one to remember your light or dark theme preference, and analytics cookies that measure site usage.",
      "You can block or delete cookies in your browser settings. Blocking analytics cookies does not affect your ability to browse the site or contact us.",
    ],
  },
  {
    heading: "How long we keep information",
    body: [
      "Contact enquiries are kept while we are in conversation with you and for a reasonable period afterwards so we can pick up the thread if you come back to us.",
      "Project records for active clients are kept for the duration of the engagement and afterwards where we need them for accounting or contractual reasons.",
      "You can ask us to delete your enquiry sooner at any time.",
    ],
  },
  {
    heading: "Security",
    body: [
      "Access to our website database and email accounts is restricted to Pixel2Tech team members who need it, and traffic to pixel2tech.com is served over HTTPS.",
      "No website or company can promise absolute security. If you believe your information has been exposed, contact us immediately at sales@pixel2tech.com so we can investigate.",
    ],
  },
  {
    heading: "Your choices and rights",
    body: [
      "You can ask us for a copy of the personal information we hold about you, ask us to correct it, or ask us to delete it.",
      "You can also unsubscribe from any marketing message we send, or ask us to stop contacting you altogether.",
      "Send requests to sales@pixel2tech.com and we will respond as quickly as we reasonably can. We may ask you to confirm your identity before acting on a request.",
    ],
  },
  {
    heading: "Children",
    body: [
      "Our services are aimed at businesses. We do not knowingly collect personal information from children. If you believe a child has sent us information, email us and we will remove it.",
    ],
  },
  {
    heading: "Links to other sites",
    body: [
      "Our site links to third-party sites such as social profiles and scheduling tools. Those sites have their own privacy policies and we are not responsible for their practices.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy as our services or providers change. The date at the top of this page always reflects the current version.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      "Questions about privacy? Email sales@pixel2tech.com, call +92 317 7475233, or write to Pixel2Tech, Office 12, Main Boulevard, Gulberg III, Lahore, Punjab 54000, Pakistan.",
    ],
  },
];

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel2tech.com/privacy-policy" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://pixel2tech.com/privacy-policy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy",
          url: "https://pixel2tech.com/privacy-policy",
          description: DESCRIPTION,
          dateModified: "2026-08-02",
          isPartOf: { "@type": "WebSite", name: "Pixel2Tech", url: "https://pixel2tech.com" },
          publisher: {
            "@type": "Organization",
            "@id": "https://pixel2tech.com/#organization",
            name: "Pixel2Tech",
            url: "https://pixel2tech.com",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://pixel2tech.com/" },
            { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://pixel2tech.com/privacy-policy" },
          ],
        }),
      },
    ],
  }),
});

function PrivacyPolicyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="LEGAL"
        title="Privacy"
        highlight="Policy"
        subtitle="How Pixel2Tech collects, uses and protects the information you share with us."
      />
      <LegalBody updated={UPDATED} sections={SECTIONS} />
    </PageShell>
  );
}
