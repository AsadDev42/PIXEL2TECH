/** Authored demonstrations, not client projects or claims of measured results. */
export type ServiceExample = {
  title: string;
  scenario: string;
  rows: { label: string; value: string }[];
  acceptance: string;
};

export const SERVICE_EXAMPLES: Record<string, ServiceExample> = {
  "custom-platforms-and-apps": {
    title: "A client approval queue",
    scenario:
      "Example brief: a studio needs clients to review a draft without seeing another client's files.",
    rows: [
      {
        label: "Roles",
        value:
          "Client: review their own project. Editor: upload a new version. Project lead: manage access and mark work approved.",
      },
      {
        label: "Workflow",
        value:
          "Draft uploaded → client invited → feedback submitted → revision uploaded → client approves that version.",
      },
      {
        label: "Acceptance check",
        value:
          "A client opening another project's URL receives an access-denied response. Approval records the reviewer, version and time.",
      },
      {
        label: "Handover",
        value:
          "Role matrix, clickable flow, versioned data model and a working approval journey with test cases.",
      },
    ],
    acceptance:
      "The first release is accepted against the agreed workflow and permissions, rather than a list of screens alone.",
  },
  "seo-and-search-growth": {
    title: "One service page, one search intent",
    scenario:
      "Example brief: a fictional accounting practice wants a page for monthly bookkeeping, separate from its tax-return service.",
    rows: [
      {
        label: "Page title",
        value: "Monthly bookkeeping for independent shops | Example Practice",
      },
      {
        label: "Main heading",
        value: "Monthly bookkeeping that keeps your shop's records in order",
      },
      {
        label: "Buyer questions",
        value:
          "What's included? Which records do I send? How are reconciliations checked? How is the monthly scope quoted?",
      },
      {
        label: "Technical checks",
        value:
          "Confirm a 200 response, index eligibility, a matching canonical and a contextual link from the service overview. Use Search Console to check Google's decision.",
      },
    ],
    acceptance:
      "This is a proposed page structure, not evidence of ranking gains. Baselines and later results must come from the client's actual search data.",
  },
  "presentation-design": {
    title: "A three-slide sales story",
    scenario:
      "Example brief: a fictional appointment-software company needs a short introduction for service-business owners.",
    rows: [
      {
        label: "Slide 1 · The problem",
        value:
          "Headline: Every missed appointment leaves a gap. Show the current booking journey and where customers lose the next step.",
      },
      {
        label: "Slide 2 · The product",
        value:
          "Headline: Book, remind, reschedule. Use one annotated product screen to explain the three actions, rather than a wall of feature text.",
      },
      {
        label: "Slide 3 · The next step",
        value:
          "Headline: See your booking flow in a demo. Show the agreed demo steps and one contact action. Add customer evidence only when it is verified.",
      },
      {
        label: "Editable handover",
        value:
          "Master layouts, type styles, image credits and editable charts. Speaker notes carry detail that does not belong on the slide.",
      },
    ],
    acceptance:
      "A reviewer can follow the story without the presenter, and the client can edit the delivered deck without rebuilding the layout.",
  },
  "illustration-design": {
    title: "A consistent delivery illustration set",
    scenario:
      "Example brief: a fictional shop needs three small illustrations for order received, packed and dispatched.",
    rows: [
      {
        label: "Visual direction",
        value:
          "One parcel shape across all three scenes, rounded line ends and a limited blue-and-ink palette. Color is decorative; each status also has a text label.",
      },
      {
        label: "Scene changes",
        value:
          "Received: parcel with a checklist. Packed: parcel sealed with tape. Dispatched: parcel beside a route marker.",
      },
      {
        label: "Review sizes",
        value:
          "Check the shapes at 48px for a status row and 240px for an onboarding panel. Remove detail that disappears at the smaller size.",
      },
      {
        label: "Delivery files",
        value:
          "Editable vector source and transparent web exports, with naming, color values and a usage sheet agreed in the brief.",
      },
    ],
    acceptance:
      "The sample below illustrates the line style only; a commissioned set would be developed and reviewed against the client's own brief.",
  },
  "email-design": {
    title: "A focused welcome email",
    scenario:
      "Example brief: a fictional stationery shop welcomes someone who requested its notebook care guide.",
    rows: [
      { label: "Subject", value: "Your notebook care guide is here" },
      {
        label: "Preheader",
        value: "A few small habits to keep your pages and cover in good shape.",
      },
      {
        label: "Body",
        value:
          "Thanks for joining us. Start with the care guide you asked for, then reply if you have a question about your notebook. We'd be glad to help.",
      },
      {
        label: "Primary action",
        value:
          "Read the care guide. One prominent text-and-button destination, followed by the sender's details and a visible unsubscribe option.",
      },
    ],
    acceptance:
      "Review desktop/mobile layout, image-off readability and actual links in the chosen email platform. No open-rate or sales uplift is claimed by this demonstration.",
  },
  "design-systems": {
    title: "A button with reusable rules",
    scenario:
      "Example brief: a fictional client portal needs its primary action to behave consistently in Figma and code.",
    rows: [
      {
        label: "Tokens",
        value:
          "Action blue #0066CC; text white #FFFFFF; focus ink #101828; 8px spacing unit; 48px minimum button height.",
      },
      {
        label: "Default and focus",
        value:
          "A verb-led label explains the action. Keyboard focus uses a visible outline with an offset, so it is not communicated by color alone.",
      },
      {
        label: "Loading and disabled",
        value:
          "Loading preserves the button width and announces progress. Disabled prevents submission and keeps a nearby explanation when the reason is not obvious.",
      },
      {
        label: "Acceptance check",
        value:
          "Design component and coded component use the same token names and states; review keyboard, contrast and touch target behavior.",
      },
    ],
    acceptance:
      "This is a small component specification, not a claim that a full client design system has been delivered.",
  },
  "ui-ux-design": {
    title: "Request a quote without losing your work",
    scenario:
      "Example brief: a fictional repair service wants customers to request a quote from a phone.",
    rows: [
      {
        label: "Journey",
        value:
          "Choose the repair → describe the issue → add contact details → review → submit → see the next step.",
      },
      {
        label: "Error state",
        value:
          "If the email is invalid, keep the other fields and show a specific inline message linked to that input. Move focus to the first error after submission.",
      },
      {
        label: "Recovery state",
        value:
          "If the connection fails, explain that the request was not sent and allow a retry without re-entering the brief.",
      },
      {
        label: "Prototype review",
        value:
          "Ask someone to complete the quote request without guidance. Record where they hesitate and revise the flow before development.",
      },
    ],
    acceptance:
      "Handover includes the happy path, error/recovery states and annotated interactions, not just polished static screens.",
  },
  copywriting: {
    title: "From a vague promise to a useful service introduction",
    scenario:
      "Example brief: a fictional office-cleaning business needs its page to explain the offer before asking for a quote.",
    rows: [
      {
        label: "Before",
        value: "We deliver innovative, world-class solutions for all your needs. Contact us today.",
      },
      { label: "After · Headline", value: "Office cleaning planned around your working day" },
      {
        label: "After · Introduction",
        value:
          "Tell us the size of your office, the areas you need cleaned and the hours we can work. We'll agree the tasks, visit schedule and quote before the first clean.",
      },
      {
        label: "Next step",
        value:
          "Request a cleaning quote. The form asks for the location, office size and preferred schedule so the next conversation starts with a useful brief.",
      },
    ],
    acceptance:
      "The rewrite replaces generic claims with buyer information. Its effect on inquiries would need measurement after publication.",
  },
};

export const VIDEO_EDITING_PROCESS = [
  {
    title: "Brief and footage handoff",
    desc: "Agree the audience, reference style, formats, deadline and revision scope. Share the footage, brand assets and any licensed music or usage restrictions.",
  },
  {
    title: "Assembly and first cut",
    desc: "We select the story, build the sequence and prepare the first cut with the captions, graphics and audio work included in your brief.",
  },
  {
    title: "Timestamped review",
    desc: "Review the cut and send consolidated notes with timestamps. We make the agreed revisions and check the sequence, sound, color and text together.",
  },
  {
    title: "Final checks and exports",
    desc: "Approve the final cut, then receive the agreed aspect ratios and delivery files. Source/project files and further versions follow the written scope.",
  },
];
