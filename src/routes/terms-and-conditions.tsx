import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site-chrome";
import {
  CONTACT_SENTENCE,
  LegalBody,
  legalPageHead,
  type LegalSection,
} from "@/components/legal-page";
import { SERVICES, SITE } from "@/lib/site-config";

const DESCRIPTION = `The terms that apply when you use pixel2tech.com or hire ${SITE.name} for branding, web design, video or automation work.`;
const UPDATED = "September 24, 2026";
const UPDATED_ISO = "2026-09-24";

const SECTIONS: LegalSection[] = [
  {
    heading: "Agreement to these terms",
    body: [
      "These terms apply to your use of pixel2tech.com and to inquiries you send us through the site. By browsing the site or submitting a form, you accept them.",
      "If we take on a project for you, that work is governed by a separate written proposal or contract. Where those documents and this page disagree, the signed project document wins.",
    ],
  },
  {
    heading: "About our services",
    body: [
      `${SITE.name} is a creative and web studio. Our services are: ${SERVICES.join(", ")}.`,
      "Anything shown on this website, including portfolio work, service descriptions, timelines and blog content, is for information. It is not a quotation or an offer to contract until we confirm scope and pricing in writing.",
    ],
  },
  {
    heading: "Inquiries and quotations",
    body: [
      "When you contact us, we may reply with questions, a proposal or a meeting invitation. Prices quoted are valid for the period stated in the proposal.",
      "A project starts once you accept a proposal in writing and any agreed deposit is received.",
    ],
  },
  {
    heading: "Client responsibilities",
    body: [
      "To keep a project on schedule, you agree to provide the content, brand assets, access credentials, approvals and feedback we ask for within reasonable timeframes.",
      "You confirm that any material you supply, such as logos, text, photography, fonts or video, is yours to use, or that you hold the necessary licenses.",
      "Delays in feedback or missing material can move delivery dates. We will tell you when that happens.",
    ],
  },
  {
    heading: "Payment",
    body: [
      "Fees, milestones, currency and invoicing schedule are set out in each proposal. Unless stated otherwise, invoices are due within the period shown on the invoice.",
      "We may pause work on overdue accounts after giving you notice. Third-party costs such as hosting, domains, stock assets and paid tools are billed separately unless we say they are included.",
    ],
  },
  {
    heading: "Revisions and scope",
    body: [
      "Each proposal states how many revision rounds are included at each stage. Requests that go beyond the agreed scope are quoted as additional work before we start on them.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "Final deliverables transfer to you once the project has been paid in full, as described in your proposal.",
      "We keep ownership of our own pre-existing tools, frameworks, internal templates and know-how, plus any working files or unused concepts, unless your proposal says otherwise.",
      "Third-party assets such as fonts, stock imagery, plugins and platform subscriptions remain licensed on their own terms, which pass to you where the license allows.",
    ],
  },
  {
    heading: "Portfolio and confidentiality",
    body: [
      "Unless you ask us not to, we may show completed work in our portfolio, case studies and social channels after launch. Tell us in writing if a project must stay private and we will keep it out.",
      "We treat non-public business information you share with us as confidential and use it only to deliver your project.",
    ],
  },
  {
    heading: "Third-party platforms",
    body: [
      "Projects often depend on services we do not control, such as hosting providers, payment gateways, CMS platforms, AI providers, analytics and social networks.",
      "We are not responsible for outages, pricing changes, policy changes or feature removals on those platforms, but we will help you work around them.",
    ],
  },
  {
    heading: "Warranty and support",
    body: [
      "We fix defects in work we delivered when they are reported within the support period stated in your proposal.",
      "That support does not cover new features, changes you or another party make after handover, or issues caused by third-party platform changes. Those are quoted as new work.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "The website and its content are provided as-is. To the extent permitted by law, our liability for any claim connected to a project is limited to the fees you paid us for that project.",
      "We are not liable for indirect or consequential losses such as lost profit, lost revenue or lost data.",
    ],
  },
  {
    heading: "Cancellation",
    body: [
      "Either side may end an engagement in writing. You pay for work completed and costs committed up to that date, and we hand over the materials covered by payments already made.",
    ],
  },
  {
    heading: "Privacy",
    body: [
      "Information you submit through this site is handled as described in our privacy policy.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these terms as our services change. The date at the top of this page shows the current version, and the version in force when you signed a proposal continues to apply to that project.",
    ],
  },
  {
    heading: "Governing law and contact",
    body: [
      "These terms are governed by the laws of Pakistan, and the courts of Lahore have jurisdiction over any dispute, unless your signed contract states otherwise.",
      `Questions? ${CONTACT_SENTENCE}`,
    ],
  },
];

export const Route = createFileRoute("/terms-and-conditions")({
  component: TermsPage,
  head: () =>
    legalPageHead({
      path: "/terms-and-conditions",
      name: "Terms and conditions",
      description: DESCRIPTION,
      dateModified: UPDATED_ISO,
    }),
});

function TermsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Legal"
        title="Terms and"
        highlight="conditions"
        subtitle={`The terms that apply when you use our website or work with ${SITE.name}.`}
      />
      <LegalBody updated={UPDATED} sections={SECTIONS} />
    </PageShell>
  );
}
