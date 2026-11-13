import type { ServiceStory } from "./types";

export const CORE_SERVICE_STORIES: Record<string, ServiceStory> = {
  "branding-and-design": {
    keyword: "branding and design agency",
    problem:
      "Your website, packaging and social posts use different versions of the same logo. Each new supplier makes another interpretation, and your team spends approvals explaining what the brand should look like instead of reviewing the message.",
    approach:
      "As your branding and design agency, we start with the customers you serve and the materials you actually use. We develop an agreed visual direction, then test the logo, colors and type across relevant applications before documenting the rules and preparing the templates in scope.",
    handover:
      "Review the identity in the agreed applications before sign-off. Your proposal identifies the final artwork, templates, guidelines and working files included at handover.",
    process: [
      {
        title: "Collect the brand decisions",
        desc: "Share your audience, existing artwork, competitors and upcoming uses. We agree whether the work needs a new identity or a focused refresh before quoting deliverables.",
      },
      {
        title: "Choose a visual direction",
        desc: "Review the proposed logo direction, palette and typography together. Feedback goes through your nominated reviewer so the selected direction has a clear approval owner.",
      },
      {
        title: "Apply it to real materials",
        desc: "We develop the agreed website, social, packaging or print applications. Reviewing these examples shows how the identity behaves beyond a logo on an empty page.",
      },
      {
        title: "Package the approved identity",
        desc: "We check the agreed exports, explain the usage rules and organize the final files. Templates and editable sources are supplied where your proposal includes them.",
      },
    ],
  },
  "website-development": {
    keyword: "website design agency",
    problem:
      "People land on your website but cannot quickly find the service, proof or next step that fits them. Meanwhile, changing a simple page means asking a developer, and the mobile experience no longer matches how customers browse.",
    approach:
      "Our website design agency plans pages around the questions a buyer needs answered before making an enquiry. We agree the navigation, content responsibilities and conversion paths, review responsive designs, and build the approved scope with editable content and the forms or integrations your business needs.",
    handover:
      "Approve the agreed pages and enquiry journeys on staging before release. Handover covers the accounts, editing guidance, code and support arrangements listed in your proposal.",
    process: [
      {
        title: "Map the buyer journey",
        desc: "We review your current site, priority services and enquiry routes. Together we define the page list, content owner and actions each important page should support.",
      },
      {
        title: "Review layouts and content",
        desc: "You review the structure and responsive page designs before development. We identify missing copy, images and proof early, with responsibility for supplying each item agreed.",
      },
      {
        title: "Build and check on staging",
        desc: "We build the approved templates and integrations, then check navigation, mobile layouts and agreed forms. Your reviewer tests the relevant customer journeys before release.",
      },
      {
        title: "Release with an ownership checklist",
        desc: "After approval and the agreed payment steps, we coordinate launch and account handover. Editing instructions and any separately scoped maintenance make the next responsibilities clear.",
      },
    ],
  },
  "wordpress-and-shopify": {
    keyword: "Shopify and WordPress development",
    problem:
      "Your store needs a better product page, or your WordPress site needs an update, but nobody knows which theme changes or plugins it depends on. A routine fix risks disturbing checkout, content editing or a layout elsewhere.",
    approach:
      "Our Shopify and WordPress development starts with the existing theme, content and app or plugin setup. We separate configuration changes from custom work, agree the affected templates and integrations, and review changes on a development copy before an approved update or migration reaches the live site.",
    handover:
      "Check the agreed browsing, editing and purchase or enquiry flows before approval. We document the changed templates, account ownership and third-party subscriptions included in the scope.",
    process: [
      {
        title: "Inspect the platform and dependencies",
        desc: "Share the site, theme, required changes and relevant app or plugin list. We review access needs and identify dependencies that could affect the quote or implementation.",
      },
      {
        title: "Define templates and migration scope",
        desc: "We agree which pages, products, integrations and data are involved. For migrations, the proposal identifies what moves, what stays behind and which URLs need redirects.",
      },
      {
        title: "Develop away from the live site",
        desc: "Theme changes and integrations are prepared on an appropriate development copy. We check the agreed page layouts, editing controls and store functions before requesting your review.",
      },
      {
        title: "Approve the update and handover",
        desc: "You review the agreed customer and administrator journeys before release. We explain the changes, subscriptions and ongoing responsibilities so your team knows what it owns.",
      },
    ],
  },
  "custom-platforms-and-apps": {
    keyword: "custom web app development",
    problem:
      "A customer request moves between an inbox, a spreadsheet and several people before anyone knows its status. You need a shared workflow with the right permissions, but a long feature wish list makes the first version difficult to define.",
    approach:
      "We scope custom web app development around one useful journey and the people responsible for it. Screens, data, permissions and integration requirements are reviewed together, then the agreed first version is built and tested against written acceptance checks before broader features are considered.",
    handover:
      "Acceptance follows the agreed user journeys and permission checks. The proposal defines code delivery, hosting, documentation and support, including ownership of ongoing service costs.",
    process: [
      {
        title: "Define a complete first workflow",
        desc: "We identify the users, starting event and finished result. Required features are separated from later ideas so the first version has an understandable boundary.",
      },
      {
        title: "Review screens, data and access",
        desc: "A prototype helps your team check the journey before development. We agree the records, user roles and external connections needed to make that journey work.",
      },
      {
        title: "Build and test the agreed journeys",
        desc: "We implement the interface, application logic and scoped integrations. Reviews cover normal tasks, permission boundaries and relevant failure states using the acceptance checks agreed with you.",
      },
      {
        title: "Deploy and transfer operating knowledge",
        desc: "After acceptance, we coordinate deployment and the agreed documentation. Hosting access, code handover and any ongoing maintenance are handled according to the proposal and payment terms.",
      },
    ],
  },
  "automation-and-crm": {
    keyword: "workflow automation and CRM setup",
    problem:
      "Enquiries arrive through different channels, contact details get copied into a CRM, and follow-up depends on someone remembering. Duplicate records and missed handovers make it difficult to tell which customer needs a response or who should act next.",
    approach:
      "For workflow automation and CRM setup, we trace one process from its trigger to its final handover. We agree which system owns each field, where people approve decisions and how errors surface, then build the scoped connections with checks for duplicate or incomplete records.",
    handover:
      "Review representative records and failure cases before switching on the workflow. Your handover identifies the owner, access requirements, alerts and steps for pausing or correcting it.",
    process: [
      {
        title: "Trace the manual handovers",
        desc: "We follow a real enquiry or task through your existing tools. The review identifies repeated entry, approval decisions and the person responsible at each handover.",
      },
      {
        title: "Agree the records and rules",
        desc: "We define triggers, required fields and the source of truth for each record. Duplicate handling, consent requirements and human approvals are included where the workflow needs them.",
      },
      {
        title: "Connect and test realistic cases",
        desc: "We build the agreed CRM connections and automated steps, then test valid, missing and repeated inputs. Failures need a visible route to the person responsible.",
      },
      {
        title: "Activate with an operating guide",
        desc: "Your reviewer approves the test results before activation. We explain the workflow, access dependencies and recovery steps, with monitoring or ongoing changes scoped separately where needed.",
      },
    ],
  },
  "ai-solutions": {
    keyword: "AI chatbot and voice agent development",
    problem:
      "Customers ask the same questions across chat and phone, but a wrong answer about a policy or booking can create more work than it saves. Your team needs help with routine conversations while keeping control of sensitive decisions.",
    approach:
      "Our AI chatbot and voice agent development begins with approved information and a defined set of tasks. We agree what the assistant may answer, what it must decline and when it passes to a person, then test representative conversations and scoped integrations before release.",
    handover:
      "Review answers, fallback behavior and human handoffs against the agreed examples. Handover explains content updates, channel access, provider usage costs and the responsibility for reviewing conversations.",
    process: [
      {
        title: "Choose the assistant's boundaries",
        desc: "We select the questions and tasks worth supporting, alongside your approved policies. Sensitive decisions, unsupported requests and escalation routes are defined before building the assistant.",
      },
      {
        title: "Prepare knowledge and connections",
        desc: "We organize the agreed source material and connect the channels or business tools in scope. Access permissions and required customer information are reviewed with your team.",
      },
      {
        title: "Test answers and human handoffs",
        desc: "Your reviewers try representative questions, unclear requests and out-of-scope conversations. We check source use, fallback responses and the route to a person before approval.",
      },
      {
        title: "Release with review responsibilities",
        desc: "We agree how approved content changes and conversation issues will be reviewed. Channel ownership, provider costs and any ongoing improvements are documented within the agreed scope.",
      },
    ],
  },
  "seo-and-search-growth": {
    keyword: "SEO agency",
    problem:
      "Your service pages are published, but you cannot tell which searches bring qualified enquiries or which pages Google can index. Publishing more articles will not settle whether the problem is technical access, unclear page intent or missing evidence.",
    approach:
      "Our SEO agency starts with your priority services, target market and available search data. We review crawlability, indexing signals, page intent, content and internal links, then separate measured findings from hypotheses and agree which fixes, page improvements and reporting belong in the scope.",
    handover:
      "Review a prioritized action list with evidence, owners and acceptance checks. Reporting uses the agreed search and enquiry measures; future ranking changes remain something to monitor.",
    process: [
      {
        title: "Establish the search baseline",
        desc: "Share priority services, markets and available Search Console or analytics access. We record the current evidence and note gaps before deciding which pages need attention.",
      },
      {
        title: "Audit pages and search intent",
        desc: "We review technical access, metadata, content coverage and internal links on the agreed URLs. Each important page gets a defined buyer intent rather than another interchangeable keyword list.",
      },
      {
        title: "Implement the prioritized changes",
        desc: "Approved technical fixes and content improvements are handled within the agreed scope. We check the resulting pages and record what changed so later comparisons have context.",
      },
      {
        title: "Review evidence and next actions",
        desc: "We compare the available search and enquiry signals with the baseline. Findings guide the next scoped changes, with indexing delays and missing data explained in the review.",
      },
    ],
  },
  "social-media-and-email": {
    keyword: "social media and email marketing",
    problem:
      "Social posts are made when someone finds time, while email campaigns start again from a blank draft. Product launches, useful customer questions and follow-up messages compete for attention, and nobody owns the complete approval or publishing calendar.",
    approach:
      "We plan social media and email marketing around your offers, audience questions and available source material. The agreed calendar connects post formats, campaign messages and email sequences, with clear responsibilities for copy, design, approvals, publishing and the account data needed to review results.",
    handover:
      "Approve the agreed assets, audiences and scheduling details before publication. Review uses the available channel and enquiry data, with ongoing production and testing defined in your scope.",
    process: [
      {
        title: "Review channels and customer moments",
        desc: "We review your accounts, offers, audience and existing assets. Relevant launches, repeat questions and customer follow-up needs become the starting points for the content plan.",
      },
      {
        title: "Agree the calendar and approvals",
        desc: "We define channels, deliverable formats, email audiences and a review owner. Your plan identifies who supplies product details, checks claims and approves each item before publishing.",
      },
      {
        title: "Produce and prepare the campaigns",
        desc: "Copy and creative are developed for the agreed placements. We prepare the scoped emails or schedules, checking links and supplied audience permissions before requesting approval.",
      },
      {
        title: "Publish and review the response",
        desc: "Approved content is published through the agreed accounts and process. We review available engagement, email and enquiry signals to inform the next planned batch or test.",
      },
    ],
  },
  "video-editing-and-ads": {
    keyword: "video editing agency",
    problem:
      "Your footage is ready, but the team still needs to choose the opening, explain the offer and prepare versions for different placements. Feedback arrives in separate messages, and nobody has agreed which cut or export is final.",
    approach:
      "As your video editing agency, we turn the supplied footage and brief into an agreed story, pacing and format plan. The edit covers the captions, sound, motion graphics and variations in scope, with timestamped feedback and approval before final exports are prepared for the chosen channels.",
    handover:
      "Approve the final cuts and agreed formats before delivery. Revision rounds, source files, asset rights and any required participant consent are confirmed through your brief and proposal.",
    process: [
      {
        title: "Check footage, brief and permissions",
        desc: "Share footage, references, audience and delivery placements. We confirm the supplied material, required permissions and asset rights, then agree outputs, review rounds and scope in writing.",
      },
      {
        title: "Build the story and first cut",
        desc: "We select the sequence, opening and pacing around your message. Captions, sound treatment and motion graphics follow the agreed scope before the first cut reaches your reviewer.",
      },
      {
        title: "Resolve timestamped feedback",
        desc: "Your nominated reviewer collects notes against the relevant moments in the cut. We make the agreed revisions; additional versions or scope changes are quoted before work starts.",
      },
      {
        title: "Approve and export each placement",
        desc: "You approve the final cut before the agreed aspect ratios and file formats are delivered. Editable project files and ongoing editing are included only where the proposal specifies.",
      },
    ],
  },
};
