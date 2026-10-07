import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site-chrome";
import {
  CONTACT_SENTENCE,
  LegalBody,
  legalPageHead,
  type LegalSection,
  type LegalSummary,
} from "@/components/legal-page";
import { TERMS_UPDATED } from "@/lib/legal-dates";
import { SERVICES, SITE } from "@/lib/site-config";

const DESCRIPTION = `The terms that apply when you use pixel2tech.com or hire ${SITE.name} for branding, websites, apps, automation, AI, SEO, social media or video work, including payment, ownership and liability.`;
const UPDATED = TERMS_UPDATED.label;
const UPDATED_ISO = TERMS_UPDATED.iso;

const PRIVACY_URL = `${SITE.url}/privacy-policy`;

const SUMMARY: LegalSummary = {
  points: [
    "These terms apply to our website and to every project, unless a signed agreement with us says otherwise.",
    "Work starts after you accept a proposal and pay the deposit (usually 50%, non-refundable, unless your proposal says otherwise).",
    "Final files, launch and ownership of the deliverables pass to you only after full payment.",
    "Timelines depend on your content, feedback and approvals. We do not guarantee rankings, sales, leads or other business results.",
    "Our liability is limited, and disputes are governed by the laws of Pakistan and handled by the courts of Lahore.",
  ],
  note: "This summary is for convenience only. The full terms below apply.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "Agreement to these terms",
    body: [
      `These Terms and Conditions (“Terms”) are an agreement between ${SITE.name} (“${SITE.name}”, “we”, “us” or “our”) and you. They apply to your use of our website, ${SITE.url} (the “Site”), and to all services we provide to you.`,
      "You accept these Terms when you use the Site, send us an inquiry, or accept a Proposal. You accept a Proposal when you sign it, confirm it by email or message, pay a deposit or invoice for it, or ask us to start the work, whichever happens first.",
      "If you accept these Terms on behalf of a company or other organization, you confirm that you have authority to bind it, and “you” and “Client” mean that organization.",
      "Our services are intended for businesses and professionals. By engaging us, you confirm that you are acting for business purposes. If you do not agree to these Terms, please do not use the Site or our services.",
    ],
  },
  {
    heading: "Definitions",
    body: [
      "In these Terms:",
      {
        list: [
          "**Agreement** means the Proposal you accepted, these Terms and any other document the Proposal says forms part of it (such as a data processing agreement or non-disclosure agreement).",
          "**Proposal** means any quote, proposal, statement of work, estimate, order or invoice from us that describes services, deliverables, fees or timelines.",
          "**Services** means the work we agree to perform for you under a Proposal.",
          "**Deliverables** means the final items we create specifically for you and hand over under a Proposal, such as designs, websites, code, content and videos.",
          "**Client Materials** means content, data, logos, images, text, credentials and other materials you or people acting for you provide to us.",
          "**Pre-existing Materials** means materials we created or obtained before or independently of your project, including our code libraries, components, frameworks, templates, tools, workflows, automations, prompts, methods and know-how.",
          "**Third-Party Materials** means items owned by others, such as fonts, stock photos, video and music, themes, plugins, apps, software, platforms, APIs and AI models.",
          "**Fees** means the amounts payable to us under the Agreement.",
          "**Business day** means Monday to Friday, excluding public holidays in Pakistan.",
          "**In writing** includes email.",
        ],
      },
    ],
  },
  {
    heading: "Using our website",
    body: [
      "You may view and use the Site for your own information and to contact us. You must not:",
      {
        list: [
          "use the Site in a way that breaks any law or infringes anyone's rights;",
          "try to gain unauthorized access to the Site, its servers or any connected system, or interfere with its security or operation;",
          "introduce viruses or other harmful code, or overload the Site with requests;",
          "send spam, false information or content that is abusive, defamatory or unlawful through our forms;",
          "impersonate another person or misrepresent your connection with anyone;",
          "copy large parts of the Site with automated tools, except as permitted by our robots.txt file; or",
          "copy, reproduce or resell our content, designs, code or branding for commercial purposes without our written permission.",
        ],
      },
      "The Site and its content, including text, graphics, design, code and our name and logo, belong to us or our licensors. Client names, logos and project work shown on the Site belong to their respective owners.",
      "We may change, suspend or withdraw any part of the Site at any time, and we may restrict access to anyone who breaches these Terms.",
    ],
  },
  {
    heading: "Information on the site is general",
    body: [
      "Our blog posts, guides, service pages, case studies, prices, timelines, statistics and other content are for general information only. They are not legal, financial, tax, technical or other professional advice for your situation, and you should not rely on them as such.",
      "Content may be incomplete or out of date, and platform features, prices and rules change often. Prices and timelines on the Site are indicative only and are not an offer. Results described in case studies depend on each client's circumstances and do not predict the results of your project.",
      "To the fullest extent permitted by applicable law, we make no warranty that the Site or its content is accurate, complete, available or free of errors or viruses.",
    ],
  },
  {
    heading: "Our services and proposals",
    body: [
      `We provide creative, web and marketing services, including ${SERVICES.join(", ")}.`,
      "Each engagement is described in a Proposal. The Services include only what the Proposal lists. Anything not listed is out of scope and can be added as a change request (see “Scope, changes and revisions”).",
      "Unless a Proposal says otherwise, quotes are valid for 30 days from the date they are issued. We may revise a quote if the scope changes or if you accept it after it expires. We may decline any project.",
      { subheading: "Order of precedence" },
      "If documents conflict, they apply in this order: (1) a Proposal or other agreement signed or expressly accepted by both of us, but only for the terms it expressly changes; (2) these Terms; (3) content on the Site and in our marketing materials. Your own purchase orders or standard terms do not apply unless we agree to them in a document signed by us.",
      { subheading: "Work through marketplaces" },
      "If you hire us through a third-party marketplace or freelance platform, that platform's terms, including its payment and dispute rules, apply where they conflict with these Terms. These Terms apply to everything else.",
    ],
  },
  {
    heading: "Fees and payment",
    body: [
      { subheading: "Deposit" },
      "Unless your Proposal says otherwise, a deposit of 50% of the project fee is due before we schedule or start any work. The deposit reserves our team's time and covers initial planning and work, and it is non-refundable. We start work once the deposit has reached our account.",
      { subheading: "Milestones and final payment" },
      "The balance is payable as set out in the Proposal. If the Proposal does not set milestones, the balance is due when the work is complete and before final delivery.",
      "We release final files, launch or publish websites and apps, hand over source or working files (where included), and transfer domains, hosting, accounts, code repositories or admin ownership only after all amounts due have been paid in full. Previews, staging links and watermarked or low-resolution files are for review only.",
      { subheading: "Invoices" },
      {
        list: [
          "Invoices are due within 7 days of the invoice date unless the invoice or Proposal states a different period.",
          "Payments must be made in the currency on the invoice (usually US dollars) using a payment method listed on the invoice.",
          "You pay all bank charges, intermediary bank fees, currency conversion costs and payment platform fees, so that we receive the full invoiced amount. If we receive less, we may invoice the difference.",
          "Our Fees do not include taxes. You are responsible for any sales, use, value added, goods and services, withholding or similar taxes, except taxes on our own income. If the law requires you to withhold tax from a payment, you will increase the payment so that we receive the amount we would have received without the withholding, unless we agree otherwise in writing.",
          "To the extent permitted by law, you may not withhold, deduct or set off any amount you believe we owe you against our invoices.",
        ],
      },
      { subheading: "Third-party costs" },
      "Unless the Proposal says they are included, you pay for third-party costs such as domains, hosting, premium themes, plugins and apps, fonts, stock media, music licenses, software subscriptions, API and AI usage fees, email or SMS sending fees and advertising spend. We may ask you to pay these in advance or directly to the provider. Once purchased, these costs are non-refundable except under the provider's own policies.",
      { subheading: "Late payment" },
      "If you do not pay an amount when it is due, we may do any or all of the following, to the extent permitted by applicable law:",
      {
        list: [
          "charge a late fee of 1.5% per month on the overdue amount, or the highest rate the law allows if that is lower, from the due date until payment;",
          "pause work after notifying you in writing. Deadlines move by at least the length of the pause, and restarting depends on our team's availability;",
          "withhold deliverables, files, credentials and handover until all overdue amounts are paid;",
          "after giving you at least 7 days' written notice, suspend hosting, maintenance, automations, licenses and other services that we manage or that run under our accounts. We will not delete your data solely because of late payment without giving you further notice;",
          "recover our reasonable costs of collecting overdue amounts, including collection agency and legal fees; and",
          "treat any discount that depended on timely payment as withdrawn.",
        ],
      },
      { subheading: "Invoice questions, chargebacks and payment reversals" },
      "If you disagree with an invoice, tell us in writing within 7 days of the invoice date and explain why. You must pay any part of the invoice that is not in dispute by the due date. We will work with you in good faith to resolve the issue.",
      "You agree not to start a chargeback, payment reversal or payment dispute with your bank, card issuer or payment platform for Services that have been delivered or are in progress without first raising the issue with us in writing and giving us at least 14 days to resolve it. An unjustified chargeback or reversal is a breach of the Agreement. In that case you must repay the reversed amount and any fees and reasonable costs we incur, we may suspend the Services, and no rights in the Deliverables covered by the reversed payment pass to you.",
      { subheading: "Rate changes" },
      "For ongoing services, we may change our rates by giving you at least 30 days' written notice. Fees agreed in an accepted Proposal for a fixed-scope project do not change unless the scope changes.",
    ],
  },
  {
    heading: "Retainers and ongoing services",
    body: [
      {
        list: [
          "Monthly retainers and ongoing services, such as maintenance, SEO, social media, advertising management and support, are billed monthly in advance and are due before the start of each month.",
          "Each month includes the hours or deliverables stated in the Proposal. Unused hours or deliverables do not roll over to the next month and are not refunded, unless the Proposal says otherwise. Extra work is billed at the rate stated in the Proposal or, if none is stated, at our then-current rates.",
          "Retainers run for any minimum term stated in the Proposal and then continue month to month until either of us cancels with at least 30 days' written notice. Fees for the notice period remain payable, and we do not refund partial months.",
          "Advertising spend is separate from our fees and is paid by you, usually directly to the advertising platform.",
        ],
      },
    ],
  },
  {
    heading: "Refunds",
    body: [
      "Deposits, fees for work already performed, fees for time already reserved, and third-party costs already committed are non-refundable.",
      "Differences of creative taste are handled through the revision rounds in your Proposal and are not grounds for a refund. Any refund is at our discretion or where the law requires it. Where we agree to a refund, we pay it by the original payment method where possible, less any non-recoverable fees.",
    ],
  },
  {
    heading: "Scope, changes and revisions",
    body: [
      "Your Proposal states how many revision rounds are included. If it does not say, two revision rounds are included for each deliverable. A revision round is one consolidated set of feedback on a deliverable. Revisions refine the agreed direction; they do not include new concepts, new features, new pages or a change of brief.",
      "Requests outside the agreed scope, extra revision rounds, and changes to work you have already approved are change requests. We will tell you the cost and timeline impact before starting, and we will only do the work once you approve it in writing. Change requests are billed at the rate stated in the Proposal or, if none is stated, at our then-current rates.",
    ],
  },
  {
    heading: "Your responsibilities",
    body: [
      "To keep your project on track, you agree to:",
      {
        list: [
          "provide content, brand assets, information, access and feedback when we ask for them, and give approvals within 5 business days of our request unless we agree otherwise;",
          "name one contact person who can give feedback and approvals for your organization;",
          "give us the access we need to your accounts, hosting, platforms and tools, and keep ownership of your own accounts where possible;",
          "make sure the information and Client Materials you provide are accurate, lawful and yours to use, or that you hold the licenses needed for us to use them;",
          "review and proofread all content, prices, product details, claims and legal text before you approve them;",
          "keep your own backups of your website, data and files before and during our work;",
          "follow the rules of the platforms you use, such as advertising, marketplace and app store policies;",
          "keep your account credentials secure and change passwords you shared with us when the project ends; and",
          "tell us about any legal or industry-specific requirements that apply to your business or content.",
        ],
      },
    ],
  },
  {
    heading: "Timelines, delays and paused projects",
    body: [
      "Timelines in Proposals and messages are good-faith estimates, not guarantees. We are not responsible for delays caused by you, third parties or events beyond our reasonable control.",
      "If you are late providing content, feedback, approvals, access or payment, the schedule moves by at least the length of the delay. We may also need to reschedule the remaining work around other projects.",
      "If a project is inactive for 30 or more consecutive days because we are waiting on you, we may put it on hold and invoice you for all work completed to date. If it remains inactive after we notify you in writing, we may close the project. Restarting a paused or closed project may require a restart fee, a new schedule and an updated quote.",
    ],
  },
  {
    heading: "Approvals and acceptance",
    body: [
      "When we deliver a deliverable or milestone for review, you have 7 days to review it and tell us in writing about any material defect, meaning a failure to meet the specifications in the Proposal. We will fix material defects that are within scope at no extra cost.",
      "A deliverable is accepted at the earliest of: (a) your approval in writing; (b) 7 days after delivery, if you have not reported a material defect in writing; or (c) when you or anyone acting for you uses it live or commercially, for example by publishing, launching, printing, sending or advertising with it.",
      "You may not withhold acceptance because of subjective preferences, requests outside the scope, or minor issues that do not prevent normal use. We will fix minor issues within a reasonable time. Once you approve a stage, we move on to the next, and later changes to the approved stage are change requests.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      { subheading: "Your materials" },
      "You keep ownership of your Client Materials. You give us a non-exclusive license to use, copy and modify them as needed to perform the Services and as described in “Portfolio and publicity”.",
      { subheading: "Deliverables" },
      "When we receive full payment of all Fees due under the relevant Proposal, we assign to you our rights in the final, approved Deliverables created specifically for you, excluding Pre-existing Materials and Third-Party Materials. Until then, we keep all rights in the Deliverables and you may use them only to review the work.",
      "If we agree to launch or hand over work before full payment, you receive a limited, revocable license to use the Deliverables until payment is complete. If payment is not made when due, that license ends.",
      { subheading: "Our pre-existing materials" },
      "We keep all rights in our Pre-existing Materials, including anything we use to build the Deliverables. After full payment, we grant you a non-exclusive, perpetual, worldwide, royalty-free license to use the Pre-existing Materials included in the Deliverables as part of those Deliverables. You may transfer this license only together with the Deliverables. We may continue to use our Pre-existing Materials, general know-how and non-client-specific components in other work.",
      { subheading: "Third-party and open-source materials" },
      "Third-Party Materials are licensed under their owners' terms, not by us. You are responsible for complying with those terms and paying any license or subscription fees, and we buy licenses in your name wherever possible. Open-source components are provided under their own licenses, and nothing in these Terms limits your rights under those licenses. We make no promises about Third-Party Materials.",
      { subheading: "Concepts and working files" },
      "Unused concepts, drafts, alternative designs and rejected options remain ours. Source and working files, such as layered design files, project files and raw footage, are not included unless the Proposal lists them.",
      { subheading: "AI-assisted work" },
      "Some Deliverables may be created with the help of AI tools. In some countries, material generated by AI may have limited or no copyright protection. We transfer whatever rights we hold in such material under this section, but we do not promise that it is protected by copyright, registrable or unique.",
      { subheading: "Names, logos and trademarks" },
      "We do not carry out trademark searches or legal clearance of names, logos, slogans or domain names unless the Proposal expressly includes it. You are responsible for checking that they are available for your use and for registering them. We do not guarantee that a name or logo can be registered or that it will be free of third-party claims.",
    ],
  },
  {
    heading: "Portfolio and publicity",
    body: [
      "Unless you have a non-disclosure agreement with us or ask us in writing not to, we may show completed work that has been made public, together with your name, logo and a description of our services, in our portfolio, on the Site, in case studies, on social media and in proposals.",
      "If you ask us to remove your project, we will take it down from our own channels within a reasonable time, but we cannot recall materials already printed or shared by others. We will not disclose your confidential information in our portfolio.",
      "We may include a small credit link to us in the footer of websites we build. You can ask us to leave it out. We publish testimonials and reviews from you only with your permission.",
    ],
  },
  {
    heading: "Confidentiality",
    body: [
      "Each of us will keep the other's confidential information private and use it only for the project. Confidential information means non-public business, technical or financial information shared in connection with the Agreement, including account credentials.",
      "This does not apply to information that is or becomes public through no fault of the receiving party, was already known to it, is independently developed, or is lawfully received from someone else without a duty of confidentiality. Either of us may share confidential information with staff, contractors and professional advisers who need it and are bound by confidentiality, and may disclose it where the law requires, giving notice to the other where lawful.",
      "These obligations continue for two years after the Agreement ends, and for as long as information remains a trade secret. On request, we will return or delete your confidential information, except copies we must keep by law or that remain in routine backups until they are overwritten. A signed non-disclosure agreement between us takes priority over this section.",
    ],
  },
  {
    heading: "Data protection",
    body: [
      "Each of us will comply with the data protection laws that apply to us. Where we process personal data on your behalf, we act as your processor or service provider, and you are responsible for having a lawful basis, giving the required privacy notices and obtaining any consents needed for that data.",
      "Do not send us sensitive personal data, such as health, financial account or children's data, unless we have agreed in writing in advance how it will be handled. A data processing agreement is available on request, and where we sign one it governs that processing.",
      `Our Privacy Policy (${PRIVACY_URL}) explains how we handle personal information for our own purposes.`,
    ],
  },
  {
    heading: "Third-party platforms and services",
    body: [
      "Our work often depends on services we do not control, such as Shopify, WordPress, hosting and domain providers, Google, Meta and other social and advertising platforms, payment gateways, CRMs, email platforms, APIs and AI providers.",
      "We are not responsible for their outages, errors, security incidents, data loss, changes to features, APIs, pricing or policies, account suspensions or bans, or rejected ads, apps or listings. If a third-party change affects your project after delivery, work to adapt to it is new work unless it is covered by a maintenance plan.",
      "Accounts for your business should be registered in your name. If we open an account in our name for convenience, we will transfer it to you on request after full payment, where the provider allows.",
    ],
  },
  {
    heading: "No guarantee of results",
    body: [
      "We perform the Services with reasonable care and skill, in line with generally accepted industry practice. However, many results depend on factors outside our control, such as search engines, advertising platforms, algorithms, competitors, your market, your products and your budget.",
      "We therefore do not guarantee any particular outcome, including:",
      {
        list: [
          "search rankings, indexing, traffic or visibility in search or AI answers;",
          "leads, conversions, sales, revenue, return on ad spend (ROAS) or return on investment;",
          "advertising costs, reach or performance;",
          "followers, engagement, views or virality;",
          "email deliverability, open rates or click rates;",
          "approval by app stores, marketplaces, advertising platforms or other third parties; or",
          "the accuracy, completeness or suitability of AI-generated output.",
        ],
      },
      "Any forecasts or estimates we give are good-faith opinions, not promises.",
      { subheading: "SEO" },
      "Search engines decide rankings using criteria they do not fully disclose and change often. SEO results usually take time and can change after algorithm updates.",
      { subheading: "Advertising" },
      "Advertising platforms control ad approval, delivery and costs. Ad spend is spent whether or not a campaign reaches its goals. You approve budgets and are responsible for ad spend incurred under settings you approved.",
      { subheading: "AI solutions and automation" },
      "AI output can be inaccurate, incomplete, biased or unexpected. You are responsible for reviewing AI output before relying on it, especially for legal, medical, financial or safety matters, and for keeping appropriate human oversight of AI tools and automations used in your business. Automations depend on third-party services and should be monitored. You are responsible for making sure that your emails, messages and calls, including automated ones, comply with anti-spam, telemarketing and consent laws, and that you have permission to contact the people on your lists.",
    ],
  },
  {
    heading: "Your legal compliance",
    body: [
      "You are responsible for making sure your business, website, store, app, content and marketing comply with the laws that apply to you, including:",
      {
        list: [
          "privacy notices, cookie consent, terms of sale, refund policies and disclaimers;",
          "accessibility requirements, such as the Americans with Disabilities Act (ADA) or the European Accessibility Act, unless the Proposal expressly includes an accessibility audit or a named conformance level;",
          "consumer protection, advertising, endorsement and product claim rules;",
          "rules for regulated industries, such as health, finance, legal services, alcohol or supplements;",
          "sales tax and other obligations related to your sales; and",
          "clearance of trademarks and other intellectual property.",
        ],
      },
      "We may point out issues we notice or provide template text, but we do not provide legal advice. You should have your own lawyer review legal text before you use it.",
    ],
  },
  {
    heading: "Hosting, maintenance and support",
    body: [
      "If we provide hosting, maintenance or support, the plan in your Proposal describes what is included. We rely on third-party hosting and infrastructure providers and do not guarantee any level of uptime unless the Proposal expressly states one.",
      "Any backups we keep are a convenience; you remain responsible for keeping your own copies of your website, data and files. We are not responsible for security incidents caused by third-party vulnerabilities, weak or shared passwords, or changes made by you or others.",
      "Unless your Proposal states a different period, we fix defects in our own work that you report within 14 days after launch or acceptance, at no extra cost. This does not cover new features, changes made by you or others, third-party updates, misuse, or hosting problems.",
      "Domain and SSL certificate renewals are your responsibility unless your maintenance plan includes them.",
    ],
  },
  {
    heading: "Warranty disclaimer",
    body: [
      "Except as expressly stated in these Terms or your Proposal, the Site and the Services are provided “as is” and “as available”. To the fullest extent permitted by applicable law, we disclaim all other warranties and conditions, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose and non-infringement.",
      "We do not warrant that Deliverables will be error-free, uninterrupted, secure, free of vulnerabilities or compatible with every device, browser or third-party service. Your sole remedy for a breach of the care and skill commitment in “No guarantee of results” is for us to re-perform the affected Services or, if we cannot, to refund the Fees paid for the affected part of the Services.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or any other liability that cannot be limited or excluded under applicable law.",
      "Subject to that, and to the fullest extent permitted by applicable law:",
      {
        list: [
          "we are not liable for any indirect, incidental, special, consequential or punitive loss or damage, or for any loss of profits, revenue, sales, business, contracts, goodwill, anticipated savings or data, or for business interruption, whether direct or indirect, even if we were told such loss was possible;",
          "our total liability arising out of or in connection with the Agreement, whether in contract, tort (including negligence), breach of statutory duty or otherwise, is limited to the Fees you actually paid us for the specific Services giving rise to the claim. For one-off projects, this means the Fees paid under that project's Proposal. For retainers and other recurring services, it means the Fees paid for those services in the three months before the event giving rise to the claim;",
          "we are not liable for problems caused by your delays, instructions or Client Materials, by third-party platforms or Third-Party Materials, or by changes made to the Deliverables by you or others; and",
          "any claim against us must be brought within one year after the cause of action arose.",
        ],
      },
      "Claims may be brought only against us as a business, not against our individual owners, employees or contractors, to the extent permitted by law.",
    ],
  },
  {
    heading: "Your indemnity",
    body: [
      "You will indemnify and hold harmless us, our owners, employees and contractors from and against any claims, losses, damages, fines, penalties, costs and expenses (including reasonable legal fees) arising out of or related to:",
      {
        list: [
          "Client Materials, including any claim that they infringe someone's rights or are unlawful or defamatory;",
          "your products, services, business, content, advertising and claims;",
          "your breach of the Agreement or of any law, including data protection, anti-spam, consumer protection and advertising laws;",
          "our following your instructions; or",
          "the Deliverables after handover, including any changes made by you or others.",
        ],
      },
      "We will tell you promptly about any claim covered by this section and give you reasonable cooperation at your expense.",
    ],
  },
  {
    heading: "Non-solicitation",
    body: [
      "While we work together and for 12 months after our last project or service for you ends, you will not directly or indirectly hire or engage any of our employees or contractors who worked on your projects without our written consent. General job advertisements not aimed at our team are allowed.",
      "If you breach this section, you agree to pay us a recruitment fee equal to 30% of the first-year compensation offered to that person, as a reasonable estimate of our loss of their services and the cost of replacing them.",
    ],
  },
  {
    heading: "Termination",
    body: [
      "Either of us may end the Agreement by giving the other 14 days' written notice, or 30 days' notice for retainers, as described in “Retainers and ongoing services”.",
      "Either of us may end the Agreement immediately by written notice if the other materially breaches it and does not fix the breach within 14 days after being notified, or becomes insolvent or stops doing business. We may also end the Agreement or pause the Services immediately if you do not pay after notice, ask us to do something unlawful or unethical, or are abusive or harassing toward our team.",
      "When the Agreement ends for any reason:",
      {
        list: [
          "you must pay for all work performed up to the end date (the Fees for completed milestones plus work in progress, charged pro rata or at our then-current hourly rates), any third-party costs we have committed to, and any Fees for the notice period;",
          "deposits and amounts already paid are non-refundable, except as required by law;",
          "we will hand over completed work that has been paid for in full, in line with “Intellectual property”; and",
          "each of us will return or delete the other's confidential information as described in “Confidentiality”.",
        ],
      },
      "Sections that by their nature should continue after the Agreement ends, including those on payment, intellectual property, confidentiality, warranty disclaimer, limitation of liability, indemnity, non-solicitation and governing law, will continue.",
    ],
  },
  {
    heading: "Force majeure",
    body: [
      "Neither of us is responsible for a delay or failure to perform caused by events beyond our reasonable control. These include natural disasters, floods and extreme weather, epidemics, war, terrorism, civil unrest, strikes, government action or restrictions, sanctions, internet or telecommunications outages or shutdowns, power outages, cyberattacks, and outages or failures of third-party platforms, hosting or cloud providers.",
      "This does not excuse payment for work already performed. If such an event continues for more than 30 days, either of us may end the Agreement by written notice, and you will pay for work performed up to that date.",
    ],
  },
  {
    heading: "Our relationship and subcontractors",
    body: [
      "We are an independent contractor. Nothing in the Agreement creates a partnership, joint venture, employment or agency relationship between us.",
      "We decide how the Services are performed, which tools we use and which team members work on your project, and we may change team members. We may use employees, freelancers and subcontractors to perform the Services. They are bound by confidentiality, and we remain responsible for their work under the Agreement.",
    ],
  },
  {
    heading: "Communications and electronic acceptance",
    body: [
      "We communicate by email, project management tools, video calls and messaging apps such as WhatsApp. Feedback, approvals and change requests may be given through any of these channels.",
      `Formal notices, such as notices of termination, breach, invoice disputes or legal claims, must be sent by email: to us at ${SITE.email}, and to you at the email address in your Proposal or the address you use to communicate with us. A notice is treated as received on the next business day after it is sent, unless the sender receives a delivery failure message.`,
      "Electronic signatures, acceptance by email or message, and payment of an invoice are as binding as a signed paper document. Our business hours are in Pakistan time, and we do not guarantee responses outside business hours unless the Proposal says otherwise.",
    ],
  },
  {
    heading: "Governing law and disputes",
    body: [
      "If a dispute arises, either of us may send the other a written notice describing it. We will both try in good faith to resolve it through discussion within 30 days of that notice. We may also agree in writing to try mediation.",
      "These Terms and the Agreement, and any dispute or claim arising out of or in connection with them, are governed by the laws of Pakistan, without regard to conflict of law rules. The courts of Lahore, Pakistan, have exclusive jurisdiction.",
      "However, nothing prevents us from bringing proceedings to recover unpaid amounts, or from seeking urgent injunctive relief, in any court that has jurisdiction over you.",
    ],
  },
  {
    heading: "General",
    body: [
      {
        list: [
          "**Assignment.** You may not assign or transfer the Agreement without our written consent. We may assign it to a successor to our business, and we may assign our right to receive payment.",
          "**Severability.** If any part of these Terms is found invalid or unenforceable, it will be applied to the maximum extent permitted, and the rest of the Terms will remain in effect.",
          "**Entire agreement.** The Agreement is the entire agreement between us about its subject matter and replaces earlier discussions and proposals. You have not relied on any statement that is not set out in the Agreement. This does not limit liability for fraud.",
          "**No waiver.** If we do not enforce a right, or delay in enforcing it, we have not waived it.",
          "**Third-party rights.** No one other than you and us has any right to enforce the Agreement.",
          "**Interpretation.** Headings are for convenience only. Words such as “including” and “for example” do not limit the words before them.",
          "**Language.** These Terms are written in English. If they are translated, the English version prevails.",
        ],
      },
    ],
  },
  {
    heading: "Your statutory rights",
    body: [
      "Our services are designed for businesses. If you are a consumer, nothing in these Terms limits or excludes any rights you have under consumer protection laws that cannot be limited or excluded by contract.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these Terms from time to time. The “Last updated” date at the top of this page shows when they last changed. Updated Terms apply to use of the Site from the time they are posted and to Proposals accepted after that date.",
      "Projects already underway continue under the version in force when you accepted the Proposal, unless we both agree otherwise. For retainers and other ongoing services, updated Terms apply 30 days after we notify you of them.",
    ],
  },
  {
    heading: "Contact us",
    body: [`Questions about these Terms? ${CONTACT_SENTENCE}`],
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
      <LegalBody updated={UPDATED} sections={SECTIONS} summary={SUMMARY} numbered />
    </PageShell>
  );
}
