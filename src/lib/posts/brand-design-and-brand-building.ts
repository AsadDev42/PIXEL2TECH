import type { PostBody } from "@/lib/blog-types";

const post = {
  metaTitle: "Brand Design and Brand Building: A Rollout Roadmap",
  metaDescription:
    "Connect your logo, colours, typography and templates to a practical brand rollout across packaging, web, sales material and customer communications.",
  keyTakeaways: [
    "Design the identity around actual applications before approving it.",
    "Give the team usable files, examples and clear ownership.",
    "A rollout needs priorities, maintenance and review after launch.",
  ],
  content: [
    {
      heading: "Give the identity a practical destination",
      body: [
        "Brand design creates the visual choices that identify the business: the mark, type, colour, imagery and composition rules. Brand building includes the repeated use of those choices alongside the offer, messaging and customer experience. A set of files starts the process, but people need to know how and where to use them.",
        "Before designing, list the applications the business actually needs. A restaurant might prioritise signage, menus, delivery packaging and social templates. A software company might prioritise its website, product interface, sales deck and documentation. The required applications influence the identity from the beginning.",
      ],
    },
    {
      heading: "Approve a system across difficult applications",
      body: [
        "A presentation can make a mark look attractive on a large, well-lit surface. Also test the less forgiving placements: a small avatar, dense menu, monochrome document and mobile screen. Make sure essential information remains clear when space, print quality or colour options are limited.",
        "Present several applications together during review. Ask what remains recognisable across them and which elements are allowed to change. The aim is a coherent family of work with enough flexibility for real communication. Repeating one layout everywhere can make the system difficult to use as content changes.",
      ],
    },
    {
      heading: "Specify the handover before the last design round",
      body: [
        "Agree the editable files, export formats, font records, colour values and example templates before delivery. For each asset, identify who will update it and which tools they use. A marketing team cannot reliably maintain a template it cannot open or understand.",
        "Include examples of correct use and common mistakes. Show spacing, small-size use, background choices and a typical content hierarchy. For templates, make the editable parts obvious. A practical handover allows someone outside the original design conversation to produce the next item with confidence.",
      ],
      bullets: [
        "Keep a master folder separate from campaign exports.",
        "Record asset licences and font requirements.",
        "Include light, dark and single-colour logo versions where appropriate.",
      ],
    },
    {
      heading: "Roll out in an order customers will notice",
      body: [
        "Start with the places that establish or contradict the new identity most visibly. Depending on the business, these may include the website header, social profiles, storefront, primary packaging and proposal documents. Update connected touchpoints together when inconsistency would confuse customers.",
        "Create a rollout checklist with an owner and approval status for each item. Distinguish launch-critical changes from work that can follow later. Do not discard usable stock or replace every minor document without a business reason. A staged rollout can remain coherent if the priorities and temporary exceptions are clear.",
      ],
    },
    {
      heading: "Build recognition through repetition with a purpose",
      body: [
        "Repeated exposure can help an audience associate particular visual cues with the business, but consistency needs more than a logo in the corner. Use stable message structures, recognisable photography choices and a dependable way to present offers and information.",
        "For a hypothetical dessert brand, the pink-and-blue identity might appear on a dark bag, cup, menu and launch post. Each item still needs its own hierarchy: the menu helps people choose, the packaging identifies the shop and the launch post explains the offer. Let the function of each application guide its layout.",
      ],
    },
    {
      heading: "Assign ownership after launch",
      body: [
        "Choose who maintains the master assets, approves exceptions and updates templates when new needs appear. Keep a short change log so the team knows which version is current. Review a sample of recent material periodically for usability and consistency.",
        "Listen for recurring production problems. If every designer has to invent a new treatment for a common content type, expand the system with a useful example. If a rule makes an essential message hard to read, refine it. Brand building works better when the identity is maintained as a working tool rather than treated as a finished presentation.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is brand building the same as redesigning the logo?",
      a: "No. A logo redesign can be one part of the work. Brand building also involves positioning, messaging, repeated applications and the experience customers receive.",
    },
    {
      q: "How detailed should the guidelines be?",
      a: "Detailed enough for the people using them. Start with clear rules and realistic examples for the applications the business produces most often.",
    },
  ],
  internalLinks: [
    {
      label: "Branding beyond the logo",
      to: "/blog/branding-beyond-the-logo",
    },
    {
      label: "Sweet Temptation identity presentation",
      to: "/portfolio/sweet-temptation-logo-menu-design",
    },
  ],
  cta: {
    title: "Build an identity your team can use",
    body: "We can help define the visual system, prepare practical applications and organise the handover and rollout.",
  },
} satisfies PostBody;

export default post;
