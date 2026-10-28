import type { PostBody } from "@/lib/blog-types";

const post = {
  metaTitle: "Why Designers Struggle With Creativity: A Working Reset",
  metaDescription:
    "Improve creative work by clarifying the problem, changing reference habits, exploring distinct concepts and giving feedback tied to the brief.",
  keyTakeaways: [
    "A vague problem can make exploration feel directionless.",
    "Separate idea generation from polishing and evaluation.",
    "Use feedback that explains what the work needs to achieve.",
  ],
  content: [
    {
      heading: "A creative block can start with an unclear problem",
      body: [
        "When a brief asks for something modern, premium and different, almost any attractive layout can appear to qualify. That freedom can make decisions harder. A designer can spend hours changing colours without learning which direction is more appropriate.",
        "Translate adjectives into a situation. Who will see the design? What should they understand or do? Which competing messages surround it? A useful brief for a dessert launch might ask customers to notice a new evening offer and recognise the shop from previous packaging. That gives exploration a purpose and makes rejection more informative.",
      ],
    },
    {
      heading: "References can become a ceiling instead of an input",
      body: [
        "Looking only at work from the same category can narrow the range of ideas before sketching begins. If every reference uses the same typeface, gradient and layout, the next concept may inherit all three without a deliberate decision.",
        "Build a reference board around separate questions. Study one source for hierarchy, another for material or photography and another for tone. Add observations from the real business: how products are used, what customers ask and which details make the experience distinctive. Describe what you learned from a reference rather than copying its finished arrangement.",
      ],
    },
    {
      heading: "Stop polishing the first plausible answer",
      body: [
        "Early polish creates attachment. Once a designer has spent hours perfecting shadows, spacing and a presentation mockup, changing the central idea becomes expensive. A weak concept can survive because it already looks finished.",
        "Use rough sketches or plain layouts to explore several directions first. Make the differences structural: one direction might lead with product detail, another with a customer problem and another with a bold verbal idea. Then compare them against the brief. Choose a direction for a reason before investing in detailed execution.",
      ],
      callout: {
        title: "A practical exercise",
        body: "Set a short exploration session and draw six rough layouts without using brand colours or stock photography. Select two different ideas and explain, in one sentence each, how they solve the communication problem.",
      },
    },
    {
      heading: "Make feedback describe a problem rather than a taste",
      body: [
        "Feedback such as make it pop leaves the designer to guess. Replace it with an observation: the offer disappears at mobile size, the hierarchy makes the wrong item look important, or the visual tone feels too formal for the intended audience.",
        "Keep the initial review focused on concept and hierarchy. Review craft after choosing a direction. When several people comment, ask one decision-maker to resolve conflicting instructions. A consistent review process gives the designer usable information and reduces revisions that move the work back and forth without improving it.",
      ],
    },
    {
      heading: "Treat AI output as material to judge",
      body: [
        "Generating many variations can help exploration, but volume is not the same as variety. A hundred images built from the same visual assumptions may repeat the same idea. Define what should change between rounds: the metaphor, composition, visual emphasis or point of view.",
        "After generating or collecting references, close the tools and write down the argument for each direction. If the only explanation is that it looks good, return to the brief. A useful creative process allows tools to suggest possibilities while keeping the purpose and final judgement visible.",
      ],
    },
    {
      heading: "Build a repeatable reset into the next project",
      body: [
        "Start with a short brief, a small set of varied references and a deliberate exploration stage. Reserve time for walking away from the first idea and returning with a fresh reading of the message. Keep successful experiments in a library with notes about where they worked.",
        "Evaluate the process after delivery. Which question unlocked the concept? Which feedback arrived too late? Which reference led to an unhelpful imitation? These observations make the next project easier to start. Creative consistency comes from improving the conditions for useful ideas, alongside improving visual craft.",
      ],
    },
  ],
  faqs: [
    {
      q: "Should every project look completely different?",
      a: "No. Brand consistency can be a useful constraint. Aim for a fresh solution to the communication problem while preserving the elements customers should recognise.",
    },
    {
      q: "How can a client help a designer produce better concepts?",
      a: "Provide a clear audience, objective, essential content, real examples and a single decision-maker. Explain the reasons behind preferences and objections.",
    },
  ],
  internalLinks: [
    {
      label: "Brand identity process",
      to: "/blog/brand-identity-process-for-startups",
    },
    {
      label: "See design work",
      to: "/portfolio",
    },
  ],
  cta: {
    title: "Start the next design project with a clearer brief",
    body: "We can help translate your business objective into a focused creative direction and a practical review process.",
  },
} satisfies PostBody;

export default post;
