import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "AI Content Review: A Human Checklist Before Anything Goes Live",
  metaTitle: "AI Content Review: Human Checklist Before Publishing",
  metaDescription: "AI can draft content fast, but it can also invent facts, flatten your voice, and miss the point. A short human checklist that catches those problems before anything goes live.",
  ogTitle: "AI Content Review: A Human Checklist Before Anything Goes Live",
  ogDescription: "AI can draft content fast, but it can also invent facts, flatten your voice, and miss the point. A short human checklist that catches those problems before anything goes live.",
  keywords: [
    "AI content review checklist",
    "human review AI content",
    "review AI drafts before publishing",
    "AI content quality check",
    "Pixel2Tech AI solutions"
  ],
  keyTakeaways: [
    "Decide in advance what AI may draft and what it may not, and write the rule down.",
    "Check facts before style. A well written sentence with a wrong fact is worse than a rough one that is true.",
    "Read the draft as the customer would, and cut anything that sounds generic or unprovable.",
    "Keep one short human checklist and use it on every piece, so the review takes minutes, not hours.",
    "Record what the review catches, and use it to improve the prompt for next time."
  ],
  faqs: [
    {
      q: "Does AI content need a disclaimer?",
      a: "It depends on the platform and the content. Some platforms ask for disclosure of AI generated material, and some clients expect it. When in doubt, say so plainly. Honesty about how content was made builds more trust than it costs.",
    },
    {
      q: "How long should a human review take?",
      a: "Five to fifteen minutes for a typical blog post or page, once the checklist is routine. If a review regularly takes longer, the prompt or the brief needs work, because the draft is arriving too rough.",
    },
    {
      q: "Who should review AI drafted content?",
      a: "Someone who knows the business and the customer. A subject expert catches wrong facts. A salesperson catches the wrong tone. The best reviewer is often the person who would have written the piece without AI.",
    },
    {
      q: "What if AI keeps making the same mistake?",
      a: "Fix the prompt, not the draft. Add the correction as a rule in the prompt, with an example of the mistake and the fix. If the same mistake appears three times after that, the topic may not suit AI drafting at all.",
    },
  ],
  internalLinks: [
    {
      label: "AI Tools for Small Business Content: Where They Save Time and Where They Create Rework",
      to: "/blog/ai-tools-small-business-content-time-rework",
    },
    {
      label: "How to Get Cited by AI Search: A Practical Guide for Service Websites",
      to: "/blog/get-cited-ai-search-service-websites",
    },
  ],
  cta: {
    title: "Use AI speed with a human quality check",
    body: "Pixel2Tech helps service businesses use AI practically, from drafting to review, so the speed is real and the quality stays human. If your team publishes AI drafts and worries about what slips through, a content review setup is a practical place to start.",
  },
  content: [
    {
      heading: "Decide what AI may draft and what it may not",
      body: [
        "AI drafts are fast, and that speed is tempting. But a draft that goes live without a human check can carry invented facts, a tone that sounds like every other business, and claims the business cannot stand behind. The fix is not to stop using AI. It is a short, consistent review that every AI drafted piece passes through before it is published. This guide sets out that checklist.",
        "Not every piece of content suits AI drafting. Routine product descriptions, first drafts of blog posts, and summaries of existing material are good candidates. Pricing pages, legal wording, client specific claims, and anything that states a result are not. Write the split down, so the team does not have to decide it fresh for every piece.",
        "The rule should name the person who decides when a piece is borderline. If the answer is unclear, the human writes it. That simple rule prevents the most common problem: AI content that looks finished and gets published without anyone owning the facts in it. For a wider view on where AI helps and where it creates rework, read [AI Tools for Small Business Content](/blog/ai-tools-small-business-content-time-rework)."
      ],
    },
    {
      heading: "Check facts before style",
      body: [
        "The first check is always facts. Read every number, date, name, and claim in the draft, and verify each one against a source the business trusts. AI tools invent plausible sounding details with confidence, and those inventions are hardest to spot in a draft that otherwise reads well. A wrong price, a wrong date, or a service the business does not offer will damage trust far more than a clumsy sentence.",
        "Keep a short list of facts that appear often, such as prices, service names, locations, and team details, and check the draft against it. If a fact cannot be verified in a minute, remove it or mark it for the person who can verify it. A draft with one unverified claim should not go live while that claim is still open."
      ],
    },
    {
      heading: "Read it as the customer would",
      body: [
        "After the facts, read the draft as a customer. Does it answer the question the customer actually asked? Does it sound like this business, or like any business? AI drafts tend to drift toward safe, generic language: \"cutting edge solutions\", \"unmatched quality\", \"a commitment to excellence\". None of those phrases tell a customer anything they can check.",
        "Cut every sentence that only praises the business, and replace it with a fact where one exists. Check that the examples are real, the steps are in the right order, and the call to action matches the page. If the draft reads like it could belong to a competitor, it needs a human rewrite of the opening and the examples, not just a polish."
      ],
    },
    {
      heading: "Keep a short human checklist on every piece",
      body: [
        "A checklist works only if it is short enough to use every time. Five items are enough: facts verified, voice matches the brand, claims are provable, the customer question is answered, and the next step is clear. Print it, pin it, or put it in the publishing tool, so the reviewer sees it before pressing publish.",
        "Assign one reviewer per piece, and make the review a named step, not an optional favour. The reviewer should be someone who knows the business, not just someone who can spell. A five minute review by the right person catches more than an hour of editing by someone who does not know what the business actually does."
      ],
    },
    {
      heading: "Record what the review caught, and improve the prompt",
      body: [
        "Every review catches something. Write it down: the invented fact, the generic phrase, the missing detail. After a few weeks, the list shows a pattern, and that pattern tells you what to fix in the prompt. If the AI keeps inventing prices, the prompt should say never to state prices. If it keeps using the same tired phrases, the prompt should list them as banned.",
        "This is how the review gets faster over time. Better prompts mean fewer corrections, and fewer corrections mean the human check takes minutes. The goal is not to review harder. It is to make the first draft better, so the review has less to catch."
      ],
    },
  ],
};

export default post satisfies PostBody;
