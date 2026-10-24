import type { PostBody } from "@/lib/blog-types";

const post: PostBody = {
  metaTitle: "Website Project Brief for a Service Business: A Guide",
  metaDescription:
    "Write a website project brief that explains your services, customers, content and enquiry process. Get a practical scope and launch checklist for your agency.",
  keyTakeaways: [
    "Describe the customer task and enquiry workflow before asking for a page count.",
    "Separate business facts, content production, design, development and integrations in the brief.",
    "Agree launch checks and ownership so the proposal covers a usable website and a workable handover.",
  ],
  content: [
    {
      heading: "What belongs in a website project brief?",
      body: [
        "A website project brief explains who the business serves, what visitors need to understand and what should happen when they enquire. It gives an agency enough context to propose pages, content, functionality and delivery responsibilities. A list of favourite websites can help communicate taste, but it cannot replace those decisions.",
        "For a service business, start with a real customer journey. Someone discovers a problem, checks whether you handle it, looks for reasons to trust you and decides whether to contact the team. Your brief should explain how the website supports each step. If you already have a site, identify where that journey becomes unclear rather than declaring that every page needs replacing.",
        "This guide is for founders and marketing teams preparing a build or redesign. It focuses on the information an agency needs before production. Use our [guide to comparing website proposals](/blog/compare-website-development-quotes) when those proposals arrive, and keep this brief as the shared reference for scope discussions.",
      ],
    },
    {
      heading: "Describe the offer in terms a customer would use",
      body: [
        "Write a short description of each service, who it is for and when someone needs it. Add the boundaries too. A commercial cleaning company might serve offices within a defined area but exclude residential jobs. Stating that distinction helps the agency organise navigation, write useful forms and avoid attracting enquiries the business cannot fulfil.",
        "Record the questions prospects ask before agreeing to a conversation. They might ask about location, project size, turnaround, qualifications, process or the information needed for a quote. Give the team approved answers and identify anything that needs internal review. ‘We provide end-to-end solutions’ is difficult to design around because it does not tell a visitor what will actually happen.",
        "Separate facts from ambitions. An expansion into a new market does not establish a local office there. A service you plan to launch should not appear as currently available without approval. If a page needs specialist claims, certifications or client permissions, name the person who confirms them. This avoids a design review quietly turning into a debate over the business offer.",
      ],
    },
    {
      heading: "Choose the primary enquiry and define its handover",
      body: [
        "Decide which action represents a useful next step: a project form, a consultation booking, a phone call or a request for specific documents. You can offer alternatives, but the main action should reflect how the team actually sells. A prominent booking button is unhelpful if there is no calendar owner or nobody monitors the resulting meetings.",
        "Map what happens after submission. State which inbox or CRM receives the enquiry, which details are required, who owns the response and what the visitor sees. If the form must create a CRM record, assign a salesperson or attach a document, those are integration requirements. They need a defined scope and acceptance checks, not an assumption that ‘contact form’ includes every downstream action.",
        "Collect enough information to route the enquiry without turning the first contact into an application process. Ask why each required field is necessary. Avoid requesting sensitive information through a general form when a separate controlled process is more appropriate. Our [contact form to CRM guide](/blog/contact-form-crm-integration-brief) explains the technical handover and failure checks in more detail.",
      ],
    },
    {
      heading: "Build a content inventory before agreeing the page count",
      body: [
        "List existing pages, their purpose, what should be kept and who owns the information. Identify service descriptions, project examples, team profiles, policies, images and downloadable documents. Mark each item as ready, needs editing, needs creating or awaiting permission. A proposal becomes much clearer when the agency can distinguish designing a page from researching and writing it.",
        "Group content by visitor need rather than the company organisation chart. Two departments may contribute to one useful service page. Equally, a single internal service category may contain several customer needs that deserve separate explanations. The sitemap should emerge from those distinctions and available substance, rather than a fixed page package that leaves important questions unanswered.",
        "Provide the strongest available evidence for the work: approved project images, a description of what was delivered, the business problem and your role. If a project was completed for an agency partner, say so. Do not invent client quotes or performance results to fill a template. Our [project outcomes page](/results) separates observable delivery from claims that would require measured commercial evidence.",
      ],
    },
    {
      heading: "Make design references useful to the designer",
      body: [
        "Share a few references and explain the specific feature you value: clear service navigation, calm typography, readable project details or an effective contact sequence. Also provide your brand files, approved colours, fonts, image rights and existing guidelines. Asking for a site ‘like this one’ leaves the designer guessing whether you mean the layout, animation, tone or entire brand.",
        "Describe any practical constraints. Your team may need to publish new case studies without developer help, manage multiple locations or reuse service sections. Those requirements affect the content system and components. Include accessibility expectations and the devices important to your audience. Design review should cover mobile navigation and form states as well as the desktop homepage.",
        "Agree who consolidates feedback. Conflicting comments from several reviewers can delay a project even when everyone responds quickly. A useful process collects feedback against the brief: is the service understandable, is the evidence accurate and does the next step make sense? Personal preferences still matter, but they are easier to resolve when the business purpose is already shared.",
      ],
    },
    {
      heading: "Identify the existing systems and search dependencies",
      body: [
        "Tell the agency where the domain is registered, where the site is hosted and which platform manages content. List form tools, analytics, booking systems and CRM connections. Share access through appropriate user roles when required; a brief should contain system names and owners, not passwords. State whether the project includes migration or only changes within the current setup.",
        "For a redesign, preserve a list of current URLs and identify pages that already receive relevant visits or enquiries. If URLs change, include a mapping and redirect plan. Google’s [site-move documentation](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) describes that preparation. A new visual design does not require renaming every working service URL.",
        "Name the measurement owner and agree which actions matter. A form-button click, a successfully received enquiry and a qualified opportunity are different events. Establish what can be checked at launch and what needs sales-team follow-up later. If your current website receives visits but little useful contact, our [lead-generation website guide](/blog/website-not-generating-leads) helps frame the investigation before a rebuild.",
      ],
    },
    {
      heading: "Agree what finished means before development starts",
      body: [
        "Acceptance criteria turn a broad request into checks both teams can understand. For a service page, that may mean approved copy and imagery, clear mobile layout and working related links. For an enquiry form, it means validation, a confirmed destination, useful errors and a receipt state that reflects what the system actually did. Include the relevant unsuccessful paths too.",
        "Plan the handover alongside launch. The business should know how to update service copy, publish a project and manage the relevant accounts. Identify recurring hosting or software dependencies and who handles them. Our [website ownership checklist](/blog/website-ownership-checklist) can help organise that discussion. Do not assume a screen recording alone resolves access, content ownership or ongoing responsibilities.",
        "Separate defects against the agreed scope from future improvements. A broken agreed form route is different from adding a new qualification workflow after launch. Ask the proposal to explain the review period, support arrangement and change process in the terms actually offered. The brief should help you obtain a clear agreement rather than imply commitments that have never been discussed.",
      ],
    },
    {
      heading: "Resolve dependencies before choosing a launch date",
      body: [
        "A target date becomes more credible when the work needed to reach it is visible. Identify who supplies final service copy, approves photographs, reviews project permissions and provides account access. A team can design a structure using draft material, but publishing accurate pages still depends on approved inputs. Mark those dependencies in the brief rather than treating them as an informal promise to send content later.",
        "Ask the proposal to show review milestones and what each decision unlocks. Sitemap approval allows page planning; content approval supports final layout; design approval supports implementation. Some work can overlap, but overlapping everything makes rework more likely when the offer or page structure changes. Tell the agency about internal approval dates and periods when key reviewers are unavailable.",
        "If a fixed event or campaign drives the date, discuss a focused first release. The essential service explanation and working enquiry journey may deserve priority over a large resource library. Record what belongs in that first phase and what follows, so a practical launch decision does not become a quiet reduction of the agreed scope.",
      ],
    },
    {
      heading: "A sample brief for a service-business website",
      body: [
        "Here is a hypothetical starting point: ‘We provide commercial property maintenance for regional offices. Prospects need to understand our service coverage and request a site assessment. Our current site mixes residential and commercial information, and enquiries arrive without a location or service category. We need a clearer service structure, approved project examples and a short form that routes enquiries to our operations inbox.’",
        "Continue with the constraints: ‘We will supply service facts, photographs and final approvals. Please propose the sitemap, content-editing responsibilities, mobile layouts and form checks. Keep current useful URLs where possible and identify any required redirects. Our office manager needs to update project examples after handover. We will nominate one person to consolidate feedback.’ Attach the inventory and current site URL.",
        "Pixel2Tech can help turn that brief into website structure, design, development and agreed integrations. You do not need every discipline on every project. Start with the visitor task and the existing setup, then discuss what the first phase should deliver. Our [professional-services page](/industries/professional-services) shows how those parts connect, with relevant portfolio examples you can inspect.",
      ],
    },
  ],
  internalLinks: [
    { label: "Website and design services", to: "/services" },
    { label: "Project outcomes", to: "/results" },
    { label: "Send your website brief", to: "/contact" },
  ],
  sources: [
    {
      label: "Google Search Central: site moves with URL changes",
      href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes",
    },
  ],
  cta: {
    title: "Bring the brief. We will help define the work.",
    body: "Send your current website, the customers you serve and the enquiry you want to receive. We can discuss page structure, content, design and integration responsibilities.",
  },
};
export default post;
