import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site-chrome";
import {
  CONTACT_SENTENCE,
  LegalBody,
  POSTAL_ADDRESS,
  legalPageHead,
  type LegalSection,
  type LegalSummary,
} from "@/components/legal-page";
import { SITE } from "@/lib/site-config";

const DESCRIPTION = `How ${SITE.name} collects, uses, shares and protects personal information, which cookies and analytics tools pixel2tech.com uses, and how to exercise your privacy rights.`;
const UPDATED = "September 27, 2026";
const UPDATED_ISO = "2026-09-27";

const DOMAIN = SITE.url.replace(/^https?:\/\//, "");
const TERMS_URL = `${SITE.url}/terms-and-conditions`;

const SUMMARY: LegalSummary = {
  points: [
    "We collect the details you send us (contact form, newsletter sign-up, call bookings, emails and messages) and usage data from Google Analytics and Microsoft Clarity.",
    "We use this information to reply to you, prepare proposals, deliver and bill for our services, keep the site secure and improve it.",
    "We do not sell personal information. Service providers such as our hosting, email, scheduling and analytics providers process data for us, sometimes outside your country.",
    `You can ask to access, correct or delete your information, or object to its use, by emailing ${SITE.email}.`,
  ],
  note: "This summary is for convenience only. The full policy below applies.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Who we are and what this policy covers",
    body: [
      `${SITE.shortDescription} In this policy, “${SITE.name}”, “we”, “us” and “our” mean ${SITE.name}, and “you” means anyone whose personal information we handle as described below.`,
      `For the purposes of data protection laws such as the EU General Data Protection Regulation (GDPR) and the UK GDPR, ${SITE.name} is the controller of the personal information described in this policy, except where we process information on behalf of our clients (see “Client data we process for our clients” below).`,
      `Contact details: ${POSTAL_ADDRESS}. Email: ${SITE.email}. Phone: ${SITE.phoneDisplay}.`,
      "This policy covers:",
      {
        list: [
          `our website, ${DOMAIN}, including its contact form, newsletter sign-up and call booking window;`,
          "communications with us by email, phone, WhatsApp, social media and video call;",
          "information about clients, prospective clients, suppliers and other business contacts; and",
          "people who apply to work with us.",
        ],
      },
      "It does not cover third-party websites or services, even when our site links to them, or websites, stores and apps we build for our clients. Those have their own privacy notices.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      { subheading: "Information you give us" },
      {
        list: [
          "**Contact form.** Your first name, last name, email address, phone number (optional) and message, together with the page you sent it from and the date and time.",
          "**Newsletter sign-up.** Your email address.",
          "**Call bookings.** When you book a call through the booking window, you enter your details (such as your name, email address and any answers to booking questions) directly into Calendly, our scheduling provider. Calendly shares the booking details with us so we can hold the call.",
          "**Communications.** Your name, contact details and the content of emails, phone calls, WhatsApp or social media messages and video calls with us, including files you send.",
          "**Client and project information.** If you become a client: your name, job title, company, billing and tax details, payment records, and the content, files, brand materials and account access you give us so we can do the work.",
          "**Job and freelance applications.** Your CV, portfolio, contact details and anything else you choose to send us.",
        ],
      },
      "Please do not send payment card numbers, passwords, government identification numbers, health information or other sensitive information through our website forms. If we need access to one of your accounts for a project, we will agree a suitable way to arrange it with you.",
      { subheading: "Information collected automatically" },
      {
        list: [
          "**Usage and device information.** On the live site, Google Analytics and Microsoft Clarity record information such as the pages you view, the site that referred you, the date and time of your visit, how long you stay, your device type, operating system, browser, screen size and language, and your approximate location (such as city or country) derived from your IP address. They use cookies and similar identifiers to recognize repeat visits.",
          "**Interaction events.** We record events such as submitting a form, opening the booking window, completing a booking, filtering or opening portfolio projects, and clicking our email, phone or WhatsApp links. These events record that the action happened, not what you typed.",
          "**Session recordings and heatmaps.** Microsoft Clarity records how visitors interact with pages, including clicks, taps, scrolling and mouse movement, and uses this to create session replays and heatmaps. Clarity offers masking features designed to hide sensitive text, such as what you type into form fields, and we do not use Clarity to collect the content of our forms.",
          "**Server and security logs.** Our hosting provider receives technical information when your browser requests a page, such as your IP address, the page requested, the time, your browser and the referring page, and may use it to provide us with visit statistics. Our forms also use your IP address and email address for a short time to limit repeated submissions and block spam.",
        ],
      },
      { subheading: "Information from other sources" },
      {
        list: [
          "Booking details from Calendly when you schedule a call.",
          "Details from people who refer you to us.",
          "Business contact details that are publicly available, for example on company websites, LinkedIn or freelance marketplaces, when we contact potential clients or partners.",
        ],
      },
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use personal information to:",
      {
        list: [
          "reply to your inquiry, answer questions and prepare quotes and proposals;",
          "schedule and hold calls and meetings;",
          "carry out projects, provide services and support, and manage our relationship with you;",
          "send invoices, take payments, keep accounting and tax records, and recover amounts owed;",
          "send you our newsletter and, where the law allows, information about our services (see “Marketing emails and unsubscribing”);",
          "understand how visitors use the site, fix problems and improve our content and services;",
          "keep the site, our systems and our business secure, and prevent spam, fraud and misuse;",
          "comply with legal obligations and respond to lawful requests; and",
          "establish, exercise or defend legal claims and enforce our agreements, including our Terms and Conditions.",
        ],
      },
      "We do not make decisions about you based solely on automated processing that have legal or similarly significant effects on you.",
    ],
  },
  {
    heading: "Legal bases for processing (EEA and UK)",
    body: [
      "If you are in the European Economic Area or the United Kingdom, we rely on the following legal bases:",
      {
        list: [
          "**Contract.** To take steps you ask for before entering into a contract (such as preparing a proposal) and to perform our contract with you.",
          "**Legitimate interests.** To run, promote and improve our business, understand how our site is used, keep it secure, communicate with business contacts, get paid and protect our legal rights. We only rely on this basis where our interests are not overridden by your rights and interests.",
          "**Consent.** Where the law requires your consent, for example for certain marketing emails or, in some countries, for analytics cookies. You can withdraw consent at any time; this does not affect processing that took place before you withdrew it.",
          "**Legal obligation.** To keep accounting and tax records and comply with other legal requirements.",
        ],
      },
      "Where we rely on legitimate interests, you can object to the processing at any time (see “Your privacy rights”).",
    ],
  },
  {
    heading: "Cookies and similar technologies",
    body: [
      `Cookies are small files stored on your device. Similar technologies include local storage and scripts that collect information about your visit. Google Analytics and Microsoft Clarity only load on the live site (${DOMAIN}), a few seconds after the page loads or when you first interact with it.`,
      { subheading: "What we use" },
      {
        list: [
          "**Google Analytics (Google).** Measures visits, traffic sources and events so we can see which pages are useful. Sets cookies such as _ga and _ga_<ID>. Learn more at https://policies.google.com/technologies/partner-sites.",
          "**Microsoft Clarity (Microsoft).** Produces session replays, heatmaps and usage insights. Sets cookies such as _clck and _clsk, and Microsoft may set cookies on its own domains. Learn more in the Microsoft Privacy Statement at https://www.microsoft.com/privacy/privacystatement.",
          "**Theme preference (local storage).** Remembers whether you chose the light or dark theme. It stays on your device until you clear your browser data.",
          "**Technical session storage.** Records when the page last reloaded itself after a site update, to prevent reload loops. It is cleared when you close the tab.",
        ],
      },
      { subheading: "Third-party content on our pages" },
      "Some pages load content from other companies, which receive your IP address and browser information when that content loads and may set their own cookies under their own policies:",
      {
        list: [
          "fonts from Google Fonts;",
          "the Calendly booking window, when you open it;",
          "YouTube videos in some blog posts, and Google Drive videos in some portfolio pages;",
          "a Google Maps map on our contact page; and",
          "images and videos served from third-party content networks.",
        ],
      },
      { subheading: "Your choices" },
      {
        list: [
          "You can block or delete cookies and site data in your browser settings. The site still works without them, although some embedded content may not load.",
          "You can opt out of Google Analytics on all websites with Google's browser add-on: https://tools.google.com/dlpage/gaoptout.",
          "Browser tracking protection and content blockers can stop Google Analytics and Microsoft Clarity from loading.",
          "There is no common industry standard for “Do Not Track” browser signals, so the site does not currently change its behavior when it receives one.",
        ],
      },
    ],
  },
  {
    heading: "How we share information",
    body: [
      "We share personal information only as described below.",
      { subheading: "Service providers" },
      "We use service providers who process personal information on our behalf to run our website and business, including:",
      {
        list: [
          "**Lovable**, which hosts our website and provides the database that stores form submissions (Lovable Cloud, which runs on Supabase) and the service that sends our form notification emails;",
          "**Google** (Google Analytics, Google Fonts, Google Maps and Google Meet) and **Microsoft** (Microsoft Clarity);",
          "**Calendly**, for scheduling calls; and",
          "providers of business email, file storage, project management, communication, accounting, invoicing and payment services, and freelancers or subcontractors who help us deliver projects.",
        ],
      },
      `These providers may only use the information to provide their services to us or as their own terms and privacy policies allow. You can ask for more information about our current providers at ${SITE.email}.`,
      { subheading: "Other disclosures" },
      {
        list: [
          "**Professional advisers**, such as lawyers and accountants, where needed.",
          "**Banks, payment platforms and, if an invoice remains unpaid, debt collection agencies or legal counsel.**",
          "**Legal requirements.** Where we believe disclosure is required by law, court order or a lawful request from a public authority, or is needed to protect the rights, property or safety of our business, our clients or others.",
          "**Business transfers.** In connection with a merger, acquisition, restructuring or sale of all or part of our business, subject to appropriate confidentiality protections.",
          "**With your consent or at your direction**, for example when you ask us to connect a third-party platform or introduce you to a partner.",
        ],
      },
      { subheading: "No sale of personal information" },
      "We do not sell personal information, and we do not share it for cross-context behavioral advertising, as those terms are used in California privacy law. We do not currently use advertising pixels on this website.",
    ],
  },
  {
    heading: "International data transfers",
    body: [
      "We are based in Pakistan, so information you send us is transferred to and processed in Pakistan. Our service providers may process information in the United States, the European Union and other countries. Data protection laws in these countries may differ from the laws where you live.",
      "Where the law requires a transfer safeguard, we rely on a lawful transfer mechanism, such as the European Commission's standard contractual clauses or the UK equivalent, in our agreements with clients and service providers as appropriate. You can contact us for more information about the safeguards that apply to your information.",
    ],
  },
  {
    heading: "How long we keep information",
    body: [
      "We keep personal information only for as long as we reasonably need it for the purposes described in this policy. In general:",
      {
        list: [
          "**Inquiries** that do not lead to a project are generally kept for up to two years after our last contact, so we can pick up the conversation if you come back to us.",
          "**Client and project records**, including contracts, invoices and correspondence, are kept for the length of the engagement and afterwards for as long as needed for accounting, tax and legal purposes and to establish or defend legal claims.",
          "**Newsletter sign-ups** are kept until you unsubscribe. We may keep a record of your email address after that so we do not email you again.",
          "**Analytics data** is kept according to the retention settings of Google Analytics and Microsoft Clarity.",
          "**Server and security logs** are kept by our hosting provider for limited periods under its own policies.",
        ],
      },
      "We may keep information for longer where the law requires it or where it is needed to resolve disputes or enforce our agreements. When we no longer need information, we delete it or make it anonymous.",
    ],
  },
  {
    heading: "How we protect information",
    body: [
      `We use reasonable technical and organizational measures designed to protect personal information. For example, ${DOMAIN} is served over HTTPS, our website database lets the public site add new form submissions but not read them, and access to our email accounts, systems and project files is limited to team members and contractors who need it.`,
      "No method of transmitting or storing information is completely secure, and we cannot guarantee the security of information. Please use strong, unique passwords for any accounts you share with us for a project, and change them when the project ends.",
      `If you believe your information has been exposed, contact us right away at ${SITE.email}. If a security incident affects your personal information, we will notify you and the relevant authorities where the law requires us to.`,
    ],
  },
  {
    heading: "Your privacy rights",
    body: [
      { subheading: "EEA and UK residents" },
      "Subject to conditions and exceptions set by law, you have the right to:",
      {
        list: [
          "access the personal information we hold about you and receive a copy;",
          "have inaccurate information corrected and incomplete information completed;",
          "have your information erased;",
          "restrict how we use your information;",
          "receive information you gave us in a portable format;",
          "object to processing based on our legitimate interests, and object at any time to direct marketing; and",
          "withdraw consent where we rely on consent.",
        ],
      },
      "You also have the right to complain to a data protection supervisory authority. In the UK this is the Information Commissioner's Office (https://ico.org.uk). In the EEA it is the authority in the country where you live or work, or where the issue occurred. We would appreciate the chance to address your concerns first.",
      { subheading: "United States residents" },
      "Depending on the state you live in, and where the law applies to us, you may have the right to:",
      {
        list: [
          "know what personal information we collect, use and disclose, and access a copy of it;",
          "correct inaccurate personal information;",
          "delete personal information;",
          "opt out of the sale or sharing of personal information, targeted advertising and certain profiling (we do not do these); and",
          "not be discriminated against for exercising your rights.",
        ],
      },
      "In the past 12 months we have collected the following categories of personal information, for the purposes and from the sources described above: identifiers (such as name, email address, phone number and IP address); customer records (such as billing details); commercial information (such as services purchased); internet and network activity (such as pages viewed and interactions); approximate location; and professional information (such as job title and company). Where a client gives us account login details so we can do their project, we use them only to provide the services. We do not use sensitive personal information to infer characteristics about you.",
      "You may use an authorized agent to make a request where the law allows. If we decline your request, you can appeal by replying to our decision. If you are not satisfied with the outcome of your appeal, you may contact your state attorney general.",
      { subheading: "Everyone else" },
      "Wherever you live, you can contact us to ask about, correct or delete your information, and we will consider your request in line with the law that applies to you.",
      { subheading: "How to make a request" },
      `Email ${SITE.email} with the subject line “Privacy request” and tell us what you would like us to do. We may need to verify your identity before acting on a request, for example by asking you to reply from the email address we have on file. We aim to respond within one month. If the law allows us more time, for example for complex requests, we will tell you. We do not charge a fee unless a request is clearly unfounded or excessive and the law allows a fee.`,
    ],
  },
  {
    heading: "Marketing emails and unsubscribing",
    body: [
      "If you sign up for our newsletter, we may send you articles, studio news and information about our services. If you are a client or have contacted us about our services, we may also send you relevant updates where the law allows.",
      `You can unsubscribe at any time by using the unsubscribe link in an email where one is included, by replying “unsubscribe”, or by emailing ${SITE.email}. After you unsubscribe, we will still send messages needed for an ongoing project or account, such as invoices and project updates.`,
    ],
  },
  {
    heading: "Client data we process for our clients",
    body: [
      "When we build or maintain websites, online stores, apps, CRMs, automations or AI tools, or run email, social media or advertising work for a client, we may have access to personal information about that client's customers, users or staff.",
      "In that case the client is the controller of that information and we act as its processor (or service provider). We process it only to provide the services and in line with the client's documented instructions, keep it confidential, and use subcontractors and platforms only as needed to deliver the work. At the end of the engagement we return or delete it as agreed with the client, unless the law requires us to keep it.",
      `A data processing agreement (DPA) is available on request. Where we have signed a DPA with a client, the DPA governs that processing. If you are a customer or user of one of our clients, please contact that client with any privacy request. If you contact us instead, we will pass your request to the client where appropriate.`,
      "When we use AI tools in client work, we aim to limit the personal information we enter into them to what the task requires and what our agreement with the client permits.",
    ],
  },
  {
    heading: "Accounts for AI assistant connections",
    body: [
      "Our site offers a read-only tools endpoint that AI assistants can connect to in order to read public information about our services, portfolio and blog. If connecting requires you to sign in, our database provider handles the sign-in and stores your email address and basic login records. We use this only to authenticate the connection and keep it secure. You can ask us to delete your login account at any time.",
    ],
  },
  {
    heading: "Children",
    body: [
      `Our website and services are intended for businesses and adults. They are not directed to children under 16, and we do not knowingly collect personal information from children under 16. If you believe a child has given us personal information, contact us at ${SITE.email} and we will delete it.`,
    ],
  },
  {
    heading: "Links and third-party services",
    body: [
      "Our site links to other websites and services, including WhatsApp, our social media profiles, Calendly and sharing links for social networks. If you click a WhatsApp link, WhatsApp (owned by Meta) processes your information under its own terms and privacy policy. Share buttons are plain links; they do not send information to the social network until you click them.",
      "We are not responsible for the privacy practices of other websites or services. Please read their privacy policies before giving them your information.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy from time to time, for example when our services, providers or legal requirements change. The “Last updated” date at the top of this page shows when it last changed. If we make a significant change, we will take reasonable steps to let you know, such as a notice on the site or an email where we have your address.",
      `Our Terms and Conditions (${TERMS_URL}) explain the terms that apply to using this site and working with us.`,
    ],
  },
  {
    heading: "Contact us",
    body: [`Questions or requests about privacy? ${CONTACT_SENTENCE}`],
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
      <LegalBody updated={UPDATED} sections={SECTIONS} summary={SUMMARY} numbered />
    </PageShell>
  );
}
