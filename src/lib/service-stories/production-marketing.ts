import type { ServiceStory } from "./types";

export const PRODUCTION_MARKETING_STORIES: Record<string, ServiceStory> = {
  "motion-design": {
    keyword: "motion graphics services",
    problem:
      "A product can be difficult to explain with a static image, while filming every feature may be impractical. Motion design turns the important steps into a visual sequence that customers can follow.",
    approach:
      "We start with the audience, message and placements, then agree the script before developing a storyboard and styleframes. Animation follows the approved sequence, with typography, product screens or illustrations chosen for the explanation. Voiceover, music and additional formats are included when specified in the proposal.",
    handover:
      "You review the animation against the approved script, timing and format list. Delivery includes the agreed exports; editable project files and licensed assets follow the proposal.",
    process: [
      {
        title: "Agree the message and script",
        desc: "Share the audience, product references and intended placements. We define the key explanation, agree the script and list the lengths and formats to produce.",
      },
      {
        title: "Review storyboard and styleframes",
        desc: "We map the scenes and show the visual direction through selected frames. You approve the sequence and look before the full animation is developed.",
      },
      {
        title: "Animate and review the sequence",
        desc: "We animate the approved scenes, add agreed sound elements and share a draft. Feedback addresses message clarity, pacing and the details within the agreed scope.",
      },
      {
        title: "Check and export each format",
        desc: "We check the final timing, readable text and agreed aspect ratios, then prepare the exports and any project files listed in your proposal.",
      },
    ],
  },
  "email-design": {
    keyword: "email design services",
    problem:
      "Newsletters, campaign emails and automated flows can gradually lose a consistent look. A template that is awkward to edit or difficult to read on a phone makes each new send harder to prepare.",
    approach:
      "We review your existing emails, sending platform and content needs, then design a master template from reusable blocks. The agreed layouts become editor templates or HTML for your platform. Phone and desktop checks help identify rendering differences before the remaining campaigns or flow emails are prepared.",
    handover:
      "You receive the agreed templates in your platform, design files and any coded HTML, with editing notes. Review covers content blocks, mobile layout and the agreed email apps.",
    process: [
      {
        title: "Review emails and platform needs",
        desc: "We look at recent sends, brand files and your platform, then agree the templates, flow emails and email apps included in the project.",
      },
      {
        title: "Design the reusable master",
        desc: "We arrange headers, stories, product rows, buttons and footers into reusable blocks. You approve the master layout before the rest of the set follows.",
      },
      {
        title: "Build and check the templates",
        desc: "We build the agreed templates in your platform or HTML, then check reading order, links and layouts across the agreed devices and email apps.",
      },
      {
        title: "Prepare your team to edit",
        desc: "We save the final templates and explain which blocks to change for each send, including known rendering differences and the checks to repeat before sending.",
      },
    ],
  },
  "design-systems": {
    keyword: "design system agency",
    problem:
      "When screens are designed separately, small differences in buttons, forms and spacing accumulate. Designers and developers then spend time deciding which version to use instead of building from a shared set of interface parts.",
    approach:
      "We inventory the interface already in use, identify repeated patterns and agree a practical starting library. Named tokens connect color, typography and spacing choices to Figma components. Where included, matching React components follow your existing stack, supported by usage notes and a process for reviewing future changes.",
    handover:
      "You receive the agreed Figma library, tokens, documentation and scoped component code. Review checks matching states, naming and examples, with ownership of future library updates made clear.",
    process: [
      {
        title: "Audit the interface patterns",
        desc: "We review live screens and design files, recording repeated components and conflicting styles. Together we choose the core patterns worth standardizing first for your team.",
      },
      {
        title: "Define tokens and components",
        desc: "We name the shared visual values and build Figma components with their variants and states, using real screens to check the library fits your product.",
      },
      {
        title: "Align design with implementation",
        desc: "When code is included, we build the agreed React components for your stack and compare their states with Figma, documenting usage and accessibility requirements.",
      },
      {
        title: "Document and hand over the library",
        desc: "We provide the library, tokens and agreed code with usage examples, then agree how your team proposes, reviews and releases changes as the product develops.",
      },
    ],
  },
  "ui-ux-design": {
    keyword: "UI/UX design services",
    problem:
      "An app can contain all the planned features while still making an ordinary task confusing. Designing the user journey before the finished screens helps expose missing steps and difficult decisions before development begins.",
    approach:
      "We define the main users and tasks, map the relevant flows and agree screen structure through wireframes. A clickable Figma prototype makes the sequence reviewable before visual design is finalized. The scoped screens then include important empty, loading and error states, with notes your developers can implement.",
    handover:
      "You receive the agreed flows, prototype, annotated Figma screens and exported assets. A developer walkthrough reviews interactions and states; app development requires its own agreed scope.",
    process: [
      {
        title: "Map the essential user tasks",
        desc: "We agree who uses the product, what they need to complete and which flows belong in the project, including any existing screens that need review.",
      },
      {
        title: "Review structure through wireframes",
        desc: "We outline the screens, content and decisions in each flow. You review the structure before visual styling makes changes more involved for the team.",
      },
      {
        title: "Prototype and refine the interface",
        desc: "We connect key screens in Figma, review the task sequence and refine the agreed UI, including the empty, loading and error states users may encounter.",
      },
      {
        title: "Prepare the developer handoff",
        desc: "We annotate the final screens, organize assets and walk your developers through interactions and component notes, making the boundary between design and development clear.",
      },
    ],
  },
  copywriting: {
    keyword: "website copywriting services",
    problem:
      "A page can describe every service without answering why a customer should enquire. Copywriting brings the offer, buyer questions and supporting evidence together so readers understand what is relevant and what to do next.",
    approach:
      "We work from your offer, customer questions and the evidence you can support, then agree the purpose and structure of each asset. A writer develops and edits the copy in your voice. Where search planning is included, titles, headings and descriptions follow the page's intended search intent.",
    handover:
      "You review the draft for accuracy, tone and its intended next step. Final delivery contains the agreed pages or assets, with metadata and source notes where included.",
    process: [
      {
        title: "Clarify the offer and reader",
        desc: "We collect your existing copy, buyer questions and proof points, then agree who each asset addresses and the action it should help them take.",
      },
      {
        title: "Agree the message and outline",
        desc: "We organize the offer, objections and supporting information into an outline, agreeing tone and any search intent before writing the full draft for review.",
      },
      {
        title: "Write and review the draft",
        desc: "A writer develops the copy and checks claims against supplied evidence. You review accuracy and voice, with revisions handled within the agreed list of assets.",
      },
      {
        title: "Finalize the publication copy",
        desc: "We edit the approved wording for clarity and consistency, then provide the agreed copy, metadata and relevant source notes for your team to publish.",
      },
    ],
  },
  "ai-creative": {
    keyword: "AI creative agency",
    problem:
      "A campaign may need fresh visual variations while a new shoot is outside its scope. AI creative can help explore scenes and formats, but inaccurate products or implausible details still need a designer's attention.",
    approach:
      "We begin with your real product references, brand rules and the idea to test. A designer directs image or video generation, selects useful outputs and corrects visible errors in standard production tools. The agreed assets are finished for their placements, with tool-use and disclosure considerations recorded for your review.",
    handover:
      "You review product details, branding and the agreed formats before delivery. Final assets come with the scoped usage notes; generated presenters must not be presented as genuine customer testimonials.",
    process: [
      {
        title: "Agree the concept and references",
        desc: "We review the current ad or brief, real product images and brand requirements, then agree which visual variations and placements the project will cover.",
      },
      {
        title: "Explore and select the direction",
        desc: "A designer develops prompts and concept outputs, checking them against the references. You review the direction before we finish the agreed image or video set.",
      },
      {
        title: "Retouch and edit the assets",
        desc: "We correct selected outputs, review product details and branding, and assemble agreed captions, shots or end cards rather than deliver unreviewed generated media as finished work.",
      },
      {
        title: "Review formats and usage notes",
        desc: "We check the final asset list and formats with you, record the tools used and flag the disclosure or commercial-use questions relevant to the agreed placements.",
      },
    ],
  },
  "ai-consulting": {
    keyword: "AI consulting services",
    problem:
      "Buying AI tools before choosing a useful task can leave a team with more subscriptions and no clear workflow. Consulting starts with the work people repeat and the decisions they still need to control.",
    approach:
      "We map a selected process, review example inputs and outputs, and compare suitable tools against the task and its data requirements. A scoped pilot tests the proposed approach on agreed examples. Findings inform a phased roadmap, review responsibilities and practical training rather than an automatic rollout across the business.",
    handover:
      "You receive the agreed roadmap, pilot and training guides, including observed limitations and review steps. Pilot results help you decide whether to continue, revise the approach or stop.",
    process: [
      {
        title: "Review one repeated process",
        desc: "We talk with the people doing the work, map its inputs and decisions, and identify which steps are useful candidates for a limited AI trial.",
      },
      {
        title: "Choose tools and pilot criteria",
        desc: "We compare suitable tools, discuss their pricing and data terms, and agree the examples, output checks and human review responsibilities for the proposed pilot.",
      },
      {
        title: "Test the scoped use case",
        desc: "We run the agreed pilot against representative examples, note errors and practical limitations, and review whether the outputs are useful for the intended task.",
      },
      {
        title: "Hand over findings and next steps",
        desc: "We explain the results, provide the agreed guides and training, and outline a phased next step with named review responsibilities rather than assuming a wider rollout.",
      },
    ],
  },
  "campaign-strategy": {
    keyword: "campaign strategy and planning",
    problem:
      "When ads, emails and landing pages are planned separately, the same campaign can tell several different stories. A shared strategy connects the audience, offer and message before the team commits to individual assets.",
    approach:
      "We agree the campaign goal, intended audience, offer and supporting proof, then define the role of each selected channel. That becomes a messaging plan, creative brief and content calendar. The measurement plan identifies what the team will review, while market differences and production responsibilities are recorded before execution.",
    handover:
      "You receive the agreed strategy, creative brief, calendar and measurement plan. Review confirms owners, dates and channel roles; creative production, media spend and implementation follow the written scope.",
    process: [
      {
        title: "Define the audience and offer",
        desc: "We review the promotion, intended buyers and available evidence, then agree the campaign goal, core offer and objections the messaging needs to address clearly.",
      },
      {
        title: "Set messages and channel roles",
        desc: "We develop the main message and supporting angles, then decide what each selected channel contributes, including the market differences your team needs to confirm.",
      },
      {
        title: "Brief the content and schedule",
        desc: "We turn the direction into a creative brief and calendar, listing the agreed assets, formats and deadlines so writers, designers and editors work from one plan.",
      },
      {
        title: "Agree measurement and handover",
        desc: "We document the signals to review, tracking requirements and review dates, then hand over the plan with production responsibilities and any separate implementation work made clear.",
      },
    ],
  },
};
