export type BlogPost = {
  slug: string;
  tag: string;
  date: string;
  time: string;
  author: string;
  title: string;
  excerpt: string;
  img: string;
  content: { heading: string; body: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "how-ai-is-changing-modern-branding",
    tag: "AI",
    date: "June 22, 2026",
    time: "10:15 am",
    author: "itsahsanmushtaq@gmail.com",
    title: "How AI is Changing Modern Branding",
    excerpt: "The tools have changed. The principles haven't. Here's how we blend both.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop&fm=webp&q=70",
    content: [
      { heading: "Introduction", body: [
        "AI is reshaping how brands research, design, and communicate — but the fundamentals of clarity and consistency still decide who wins.",
        "The teams that lean into AI as a creative partner ship faster and iterate more confidently.",
      ]},
      { heading: "Where AI Actually Helps", body: [
        "Ideation, moodboarding, copy variations, and asset resizing are areas where AI genuinely accelerates the workflow.",
        "It frees your team to focus on strategy, judgement, and craft — the things that still separate great brands from average ones.",
      ]},
      { heading: "Final Thoughts", body: [
        "Blend AI with human taste. That combination is what modern branding looks like in 2026.",
      ]},
    ],
  },
  {
    slug: "why-every-business-needs-a-modern-website-in-2026",
    tag: "Web",
    date: "April 5, 2026",
    time: "9:12 am",
    author: "itsahsanmushtaq@gmail.com",
    title: "Why Every Business Needs a Modern Website in 2026",
    excerpt: "A 10-point audit to figure out if your website is helping or hurting.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&fm=webp&q=70",
    content: [
      { heading: "Introduction", body: [
        "Your website is your storefront, your salesperson, and your credibility check — all before a human ever replies.",
      ]},
      { heading: "The 10-Point Audit", body: [
        "Speed, clarity, mobile UX, trust signals, SEO basics, analytics, accessibility, content freshness, conversion paths, and brand consistency.",
        "If any of these are weak, they're leaking revenue every day.",
      ]},
      { heading: "Final Thoughts", body: [
        "A modern site pays for itself. Treat it as infrastructure, not decoration.",
      ]},
    ],
  },
  {
    slug: "the-power-of-good-branding-for-business-growth",
    tag: "Creative",
    date: "February 24, 2026",
    time: "9:36 pm",
    author: "itsahsanmushtaq@gmail.com",
    title: "The Power of Good Branding for Business Growth",
    excerpt: "Why a strong brand system compounds every marketing dollar you spend.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&auto=format&fit=crop&fm=webp&q=70",
    content: [
      { heading: "Introduction", body: [
        "Branding is more than just a logo. It is the overall identity of your business and how customers perceive your company.",
        "Strong branding builds recognition, trust, and emotional connection with your audience.",
      ]},
      { heading: "Building Trust With Customers", body: [
        "Consistent visuals, tone, and experience make your business feel reliable — and reliability is what customers pay a premium for.",
      ]},
      { heading: "Final Thoughts", body: [
        "Invest in your brand system early. Every marketing dollar afterward works harder.",
      ]},
    ],
  },
  {
    slug: "rebrand-vs-refresh-a-founders-decision-framework",
    tag: "Growth",
    date: "March 12, 2026",
    time: "2:40 pm",
    author: "itsahsanmushtaq@gmail.com",
    title: "Rebrand vs. Refresh: A Founder's Decision Framework",
    excerpt: "Not sure whether to rebrand? Answer these five questions first.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&auto=format&fit=crop&fm=webp&q=70",
    content: [
      { heading: "Introduction", body: [
        "A full rebrand is expensive and risky. A refresh is often enough. Here's how to tell them apart.",
      ]},
      { heading: "The Five Questions", body: [
        "Has your audience shifted? Has your offering shifted? Is the brand blocking growth? Does the team believe in it? Can you commit for 3 years?",
      ]},
      { heading: "Final Thoughts", body: [
        "Choose the smallest change that unlocks the next stage of growth.",
      ]},
    ],
  },
  {
    slug: "why-modern-brands-need-an-ai-ops-layer",
    tag: "AI",
    date: "February 24, 2026",
    time: "11:20 am",
    author: "itsahsanmushtaq@gmail.com",
    title: "Why Modern Brands Need an AI Ops Layer",
    excerpt: "The teams that win in the next 5 years will run on AI-native workflows.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&auto=format&fit=crop&fm=webp&q=70",
    content: [
      { heading: "Introduction", body: [
        "AI Ops is the connective tissue between your tools, your data, and your team.",
      ]},
      { heading: "What To Build First", body: [
        "Start with content workflows, support triage, and reporting — the highest-volume, lowest-risk surfaces.",
      ]},
      { heading: "Final Thoughts", body: [
        "Small, boring automations compound. Build the layer now.",
      ]},
    ],
  },
  {
    slug: "design-systems-for-small-teams",
    tag: "Design",
    date: "January 30, 2026",
    time: "4:05 pm",
    author: "itsahsanmushtaq@gmail.com",
    title: "Design Systems for Small Teams",
    excerpt: "You don't need Google's budget to have Google's consistency.",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&auto=format&fit=crop&fm=webp&q=70",
    content: [
      { heading: "Introduction", body: [
        "A design system for a small team is really just a shared vocabulary — tokens, components, and patterns everyone agrees on.",
      ]},
      { heading: "Start Small", body: [
        "Colors, spacing, typography, and 6-8 core components. That's 80% of the value.",
      ]},
      { heading: "Final Thoughts", body: [
        "Ship the smallest useful system. Grow it as pain appears.",
      ]},
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
