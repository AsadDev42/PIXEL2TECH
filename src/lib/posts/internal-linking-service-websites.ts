import type { PostBody } from "@/lib/blog-types";

const post = {
  h1: "Internal Linking for Service Websites: A Simple Structure That Helps Visitors and Google",
  metaTitle: "Internal Linking for Service Websites",
  metaDescription: "Internal links guide visitors to the next useful page and help Google understand your services. A simple hub structure for service websites, with practical rules and common mistakes.",
  ogTitle: "Internal Linking for Service Websites: A Simple Structure That Helps Visitors and Google",
  ogDescription: "Internal links guide visitors to the next useful page and help Google understand your services. A simple hub structure for service websites, with practical rules and common mistakes.",
  keywords: ["internal linking", "service websites", "SEO", "site structure", "internal links"],
  keyTakeaways: [
    "Build a hub structure around each main service page, with supporting pages linking to it and to each other",
    "Place links inside the main text, using descriptive link text that explains the destination",
    "Fix orphan pages, repeated links to the same page and broken links, and do not rely on navigation alone",
    "Make internal linking part of every new publish, linking each new post to a relevant service page and a related post",
    "Measure whether visitors from blog posts reach service pages more often, and move or rewrite links that send almost no visitors to their hub",
  ],
  internalLinks: [
    { label: "The Biggest SEO Mistakes Businesses Still Make in 2026", to: "/blog/biggest-seo-mistakes-businesses-make-2026" },
    { label: "The AI SEO Mistakes Stopping Your Content From Ranking in 2026", to: "/blog/ai-seo-mistakes" },
  ],
  cta: {
    title: "Start with a hub structure",
    body: "Pixel2Tech helps service businesses grow search visibility with practical SEO work, including site structure, internal linking and content that supports the services you actually sell. If your pages feel disconnected, a hub structure is a sensible place to start.",
  },
  content: [
    {
      heading: "What internal linking actually does",
      body: [
        "Internal links are the links between pages on your own website. They do two jobs at once. For visitors, they answer the next question: what should I read or do now? For Google, they show how your pages relate to each other and which pages matter most.",
        "Many service websites fail at both jobs. Pages sit alone, with no clear path forward. A visitor reads a blog post, finds nothing relevant to click, and leaves. Google sees a flat collection of pages instead of a clear structure. Fixing internal links is one of the cheapest SEO improvements a service business can make, because it uses content you already have.",
      ],
    },
    {
      heading: "Think in hubs, not in a list of pages",
      body: [
        "A useful way to organise a service website is by hubs. Each main service gets a hub page, and related pages link to it and to each other.",
        "For example, a web design service page could be the hub. Around it sit supporting pages: a pricing guide, a project brief template, case studies, and blog posts about design topics. Each supporting page links back to the hub, and the hub links out to the most useful supporting pages.",
        "This structure helps a visitor who lands on any page in the group. They can move to the service page when they are ready to enquire, or to a case study when they want proof. It also helps Google understand that the service page is the central page for that topic.",
      ],
    },
    {
      heading: "Link from the words people actually read",
      body: [
        "The best internal links sit inside the main text of a page, where a reader is already engaged. A link in a sentence that explains why the next page is useful will be clicked far more often than a link buried in a footer list.",
        "Use link text that describes the destination. Read our guide to writing a website brief tells the reader what they will get. Click here tells them nothing, and it tells Google nothing either. You do not need to force keywords into every link. Clear, honest descriptions work better and read better.",
        "Add links where they help, not where they fill a quota. A short page may need only two or three internal links. A long guide may need more. The test is simple: would a real reader want this link at this point? If the answer is no, leave it out.",
      ],
    },
    {
      heading: "Fix the common mistakes",
      body: [
        "Several internal linking mistakes appear on service websites again and again:",
        "Orphan pages. Pages with no internal links pointing to them. They are hard for visitors to find and hard for Google to value. Every important page should be reachable from at least one other page.",
        "Links to the same page too often. Repeating the same link many times on one page adds little value. One clear link is usually enough.",
        "Broken links. Links to pages that no longer exist frustrate visitors and waste the value of the linking page. Check links when you rename, move or delete pages, and set up redirects for pages that have moved.",
        "Navigation only. Relying on the main menu alone is not enough. Menus show the main sections, but they do not show the relationship between a blog post and the service it supports.",
      ],
    },
    {
      heading: "A practical routine for existing sites",
      body: [
        "You do not need to rebuild your site to improve internal linking. Start with your most visited pages and your most important service pages.",
        "First, list your main service pages. These are your hubs. Next, for each hub, list the blog posts, case studies and guides that relate to it. Then add links in both directions: from each supporting page to its hub, and from the hub to the strongest supporting pages.",
        "After that, check for orphan pages. Your website tools or a simple site crawl can show pages with no incoming internal links. Give each useful orphan page a link from a relevant page, or decide that the page should be removed or merged.",
        "Finally, make internal linking part of publishing. Every new blog post should link to at least one relevant service page and one related post. Every new service page should link to its best supporting content. This habit keeps the structure strong as the site grows.",
      ],
    },
    {
      heading: "Measure what changed",
      body: [
        "Internal linking improvements take time to show in search results, but visitor behaviour changes sooner. Watch whether visitors from blog posts reach service pages more often, and whether they spend longer on the site. If a supporting page sends almost no visitors to its hub, the link may be in the wrong place, or the link text may not explain why the hub is worth visiting.",
        "Good internal linking is not a trick. It is good organisation, made visible. When visitors can move easily from a question to an answer to an enquiry, both they and Google understand your business better.",
      ],
    },
  ],
} satisfies PostBody;

export default post;
