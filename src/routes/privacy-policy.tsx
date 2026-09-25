import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site-chrome";
import {
  CONTACT_SENTENCE,
  LegalBody,
  POSTAL_ADDRESS,
  legalPageHead,
  type LegalSection,
} from "@/components/legal-page";
import { SITE } from "@/lib/site-config";

const DESCRIPTION = `How ${SITE.name} collects, uses and protects personal information on pixel2tech.com, which analytics tools we use, and how to opt out or ask for your data to be deleted.`;
const UPDATED = "September 24, 2026";
const UPDATED_ISO = "2026-09-24";

const SECTIONS: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      `${SITE.shortDescription} Our office is at ${POSTAL_ADDRESS}.`,
      "This policy explains how we handle personal information on pixel2tech.com.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "Information you give us: when you send a project brief through our contact form, we collect your first name, last name, email address, phone number and the message you write. When you book a call, the details you enter in the booking form go to Calendly (see below).",
      "Information collected automatically: when you browse the site, the analytics tools described below record how the site is used, such as pages viewed, the page that referred you, approximate location based on your IP address, device type, browser and how you interact with pages.",
      "We do not ask for, and do not want, sensitive information such as payment card numbers, government identifiers or health data through this website.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use the details you send us to reply to your inquiry, prepare proposals, schedule meetings and deliver the services you ask for.",
      "We use analytics to understand which pages are useful, find parts of the site that are confusing or broken, and improve content and performance. We use it to study how the site is used, not to identify individual visitors.",
      "We do not sell your personal information, and we do not share it for third-party advertising.",
    ],
  },
  {
    heading: "Analytics tools we use",
    body: [
      "Google Analytics (Google). Measures visits: pages viewed, referring sites, approximate location, device and browser, and events such as button clicks. It sets cookies such as _ga to tell visits apart. You can opt out with Google's Analytics opt-out browser add-on (tools.google.com/dlpage/gaoptout) or by blocking cookies for this site.",
      "Microsoft Clarity (Microsoft). Records how visitors interact with pages, including clicks, scrolling and mouse movement, and uses this to produce session recordings and heatmaps. By default, Clarity masks text typed into form fields. It sets cookies such as _clck and _clsk. You can opt out by blocking cookies for this site or by using your browser's tracking protection or a content blocker. Microsoft describes its handling of this data in the Microsoft Privacy Statement.",
      "Hosting analytics (Lovable). Our hosting platform, Lovable, runs its own analytics script and keeps standard request logs to serve the site and report visit statistics. This can include the page requested, your IP address, browser and referring page. A content blocker can stop the analytics script; request logs are part of serving the site and cannot be switched off.",
      "Blocking any of these tools does not affect your ability to browse the site or contact us.",
    ],
  },
  {
    heading: "Other service providers",
    body: [
      "Our website and its database run on Lovable Cloud infrastructure, which stores contact form submissions and serves the site.",
      "We use Calendly to schedule calls. When you book through the booking window, Calendly receives the details you enter under its own privacy policy.",
      "We use an email delivery provider to send notifications about your inquiry from notify.pixel2tech.com.",
      `These providers process data to deliver their service to us. For the current list of providers in writing, email ${SITE.email}.`,
    ],
  },
  {
    heading: "Cookies and browser storage",
    body: [
      "We store your light or dark theme choice in your browser's local storage so the site remembers it. The analytics tools above set their own cookies.",
      "You can block or delete cookies and site data in your browser settings at any time. The site keeps working without them.",
    ],
  },
  {
    heading: "How long we keep information",
    body: [
      "Contact inquiries are kept while we are in conversation with you and for a reasonable period afterward, so we can pick up the thread if you come back to us.",
      "Project records for active clients are kept for the length of the engagement, and afterward where we need them for accounting or contractual reasons.",
      "Analytics data is kept according to each provider's retention settings.",
      "You can ask us to delete your inquiry sooner at any time.",
    ],
  },
  {
    heading: "Security",
    body: [
      `Access to our website database and email accounts is limited to ${SITE.name} team members who need it, and pixel2tech.com is served over HTTPS.`,
      `No website or company can promise absolute security. If you believe your information has been exposed, contact us right away at ${SITE.email} so we can investigate.`,
    ],
  },
  {
    heading: "Your choices and rights",
    body: [
      "You can ask us for a copy of the personal information we hold about you, ask us to correct it, or ask us to delete it.",
      "You can also unsubscribe from any marketing message we send, or ask us to stop contacting you altogether.",
      `Send requests to ${SITE.email} and we will respond as quickly as we reasonably can. We may ask you to confirm your identity before acting on a request.`,
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
      "Our site links to third-party sites such as social profiles and scheduling tools. Those sites have their own privacy policies, and we are not responsible for their practices.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy when our services or providers change. The date at the top of this page always shows the current version.",
    ],
  },
  {
    heading: "Contact us",
    body: [`Questions about privacy? ${CONTACT_SENTENCE}`],
  },
];

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () =>
    legalPageHead({
      path: "/privacy-policy",
      name: "Privacy policy",
      description: DESCRIPTION,
      dateModified: UPDATED_ISO,
    }),
});

function PrivacyPolicyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Legal"
        title="Privacy"
        highlight="policy"
        subtitle={`How ${SITE.name} collects, uses and protects the information you share with us.`}
      />
      <LegalBody updated={UPDATED} sections={SECTIONS} />
    </PageShell>
  );
}
