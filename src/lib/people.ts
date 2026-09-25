import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Clapperboard,
  Handshake,
  Layers,
  LineChart,
  Megaphone,
  Palette,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import teamUsama from "@/assets/team-usama.webp.asset.json";
import teamAsad from "@/assets/team-asad.webp.asset.json";
import founderPortrait from "@/assets/opt-founder-portrait-1080.webp.asset.json";
import { faqJsonLd, type FaqItem } from "@/components/faq";
import { SITE } from "@/lib/site-config";
import { TEAM } from "@/lib/team";

/**
 * Content for the founder profile pages (/usama-farooq, /asad-farooq).
 * Both pages render <PersonProfile /> from one of these objects, so layout
 * fixes happen once. Facts here (dates, employers, figures) come from the
 * founders themselves; do not edit them without checking with the owner.
 */

export type ProfilePath = "/usama-farooq" | "/asad-farooq";

export type PersonProfileData = {
  path: ProfilePath;
  name: string;
  givenName: string;
  familyName: string;
  /** Job title, taken from TEAM so cards and profile pages always match. */
  role: string;
  seo: { title: string; description: string };
  portrait: { src: string; alt: string; width: number; height: number };
  /** Higher-resolution photo for Person structured data. */
  schemaImage: string;
  /** Contact email in Person structured data (the shared sales inbox). */
  email?: string;
  linkedin?: string;
  alumniOf: string;
  knowsAbout: string[];
  intro: string;
  /** Second line under the location in the hero. */
  reach: string;
  stats: { value: string; label: string }[];
  bio: { heading: string; paragraphs: string[] };
  expertise: {
    eyebrow: string;
    heading: string;
    items: { icon: LucideIcon; title: string; desc: string }[];
  };
  timeline: { role: string; org: string; period: string; place: string; desc: string }[];
  skills: { heading: string; groups: { heading: string; items: string[] }[] };
  highlights: {
    eyebrow: string;
    heading: string;
    items: { title: string; result: string; slug?: string }[];
  };
  leadership: { heading: string; paragraphs: string[] };
  credentials: {
    heading: string;
    items: string[];
    note: { label: string; text: string };
  };
  testimonials: { quote: string; author: string }[];
  faqs: FaqItem[];
  closing: { heading: string; body: string };
};

function teamMember(path: ProfilePath) {
  const member = TEAM.find((m) => m.profile === path);
  if (!member) throw new Error(`No TEAM entry has profile ${path}`);
  return member;
}

const usama = teamMember("/usama-farooq");
const asad = teamMember("/asad-farooq");

export const USAMA_FAROOQ: PersonProfileData = {
  path: "/usama-farooq",
  name: usama.name,
  givenName: "Usama",
  familyName: "Farooq",
  role: usama.role,
  seo: {
    title: "Usama Farooq | CEO & Founder | Pixel2Tech",
    description:
      "Usama Farooq is CEO and founder of Pixel2Tech. He helps B2B, SaaS and e-commerce brands win leads and revenue through SEO, paid ads and outbound.",
  },
  portrait: {
    src: teamUsama.url,
    alt: "Usama Farooq, CEO and founder of Pixel2Tech",
    width: 247,
    height: 317,
  },
  schemaImage: `${SITE.url}${teamUsama.url}`,
  linkedin: usama.linkedin,
  alumniOf: "Government College University, Faisalabad",
  knowsAbout: [
    "Business Strategy",
    "Go-to-Market Strategy",
    "Lead Generation",
    "SEO",
    "Paid Advertising",
    "Brand Development",
    "Sales Management",
    "AI-Driven Growth",
  ],
  intro:
    "Growth strategist and founder helping businesses generate leads and revenue with AI, SEO and paid ads. €1M+ in client revenue driven, 710% growth delivered, and a track record of turning creative work into measurable pipeline.",
  reach: "Serving clients in the US, EU & Gulf",
  stats: [
    { value: "€1M+", label: "Client revenue driven" },
    { value: "710%", label: "Peak growth delivered" },
    { value: "$300K+", label: "New business closed in year one" },
    { value: "6+", label: "Years in growth & business development" },
  ],
  bio: {
    heading: "Growth is a system, not a campaign",
    paragraphs: [
      "Most businesses do not have a marketing problem. They have a system problem: leads arrive inconsistently, follow-up is manual, and nobody can say which activity produced revenue. Fixing that gap is the work Usama has built his career on.",
      "He started as a computer science lecturer, moved into business analysis and outbound at Programmers Force, then into growth leadership at Aquila360 and Ethisol, where he closed $300K+ in new business in his first year and secured a Fortune 500 partnership. Along the way he scaled a marketplace profile from $1K to $100K in under a year and built complete outbound email infrastructures from scratch.",
      "In 2024 he founded Pixel2Tech to bring strategy, design, development and automation under one senior team, so clients no longer have to stitch together three vendors to launch a single idea.",
      "As CEO he owns strategy, partnerships and growth, and stays personally involved in every major client relationship, from the first discovery call to long-term account planning.",
    ],
  },
  expertise: {
    eyebrow: "Growth and strategy expertise",
    heading: "What Usama leads on",
    items: [
      {
        icon: Target,
        title: "Go-to-market strategy",
        desc: "Positioning, offer design and channel selection so a service or product reaches the right buyers with a clear reason to say yes.",
      },
      {
        icon: TrendingUp,
        title: "Lead generation & outbound",
        desc: "Cold email infrastructure, LinkedIn prospecting and marketplace bidding built into a predictable, measurable pipeline.",
      },
      {
        icon: Search,
        title: "SEO & organic growth",
        desc: "Technical, on-page and off-page SEO paired with content and link building that compounds into long-term inbound demand.",
      },
      {
        icon: LineChart,
        title: "Paid media & performance",
        desc: "Meta and Google campaigns run against pipeline and revenue targets, not vanity metrics.",
      },
      {
        icon: Handshake,
        title: "Client partnerships",
        desc: "Enterprise conversations, proposals and long-term account relationships, from first call to renewal.",
      },
      {
        icon: Users,
        title: "Team building & leadership",
        desc: "Hiring, onboarding, KPI design and coaching for sales, outreach and delivery teams.",
      },
    ],
  },
  timeline: [
    {
      role: "CEO & Founder",
      org: "Pixel2Tech",
      period: "Aug 2024 — Present",
      place: "Lahore, Pakistan",
      desc: "Leads company strategy, client partnerships and growth. Built Pixel2Tech into a creative and web studio serving founders across the US, Europe and the Gulf.",
    },
    {
      role: "Business & Project Manager",
      org: "Megasight",
      period: "Jan 2026 — Present",
      place: "Lahore, Pakistan",
      desc: "Owns lead nurturing through to close, scaled the Upwork profile from $1K to $100K in under a year, and coordinates cross-functional delivery teams.",
    },
    {
      role: "Business & Project Manager",
      org: "Ethisol",
      period: "Jun 2023 — Present",
      place: "United States (Remote)",
      desc: "Closed $300K+ in new business in the first year and secured a Fortune 500 partnership. Owns the full sales cycle from prospecting to close, plus post-sale delivery management.",
    },
    {
      role: "Head of New Business",
      org: "Proximate Solutions",
      period: "Jan 2025 — Mar 2026",
      place: "Lahore, Pakistan",
      desc: "Built and led the new business team, set KPIs across sales and outreach, and built the outbound email infrastructure from scratch using Instantly and SalesHandy.",
    },
    {
      role: "Business Development Manager",
      org: "Geeky Bugs",
      period: "Mar 2024 — Jan 2025",
      place: "Lahore, Pakistan",
      desc: "Drove new client acquisition for a software development company, generating qualified leads across international markets.",
    },
    {
      role: "Digital Marketing Expert",
      org: "Mauka",
      period: "Dec 2023 — Nov 2024",
      place: "Lahore, Pakistan",
      desc: "Owned end-to-end SEO for Mauka.com.pk (on-page, off-page and technical) alongside Meta and Google ads, content publishing and link building.",
    },
    {
      role: "Growth Manager",
      org: "Aquila360",
      period: "Feb 2023 — Nov 2024",
      place: "Lahore, Pakistan",
      desc: "Managed and coached a growth team, ran recruitment and onboarding, and executed campaigns across HubSpot, Apollo, Sales Navigator and Mailchimp.",
    },
    {
      role: "Business Analyst",
      org: "Programmers Force",
      period: "Jun 2022 — Jan 2023",
      place: "Lahore, Pakistan",
      desc: "Market research, prospect qualification and CRM-driven pipeline management across multiple outreach platforms.",
    },
    {
      role: "Lecturer in Computer Science",
      org: "Government Degree College Rajana",
      period: "Nov 2020 — Apr 2021",
      place: "Toba Tek Singh, Pakistan",
      desc: "Taught BSc and FSc computer science students, designed course material and ran practical sessions.",
    },
  ],
  skills: {
    heading: "Skills, stack & industries",
    groups: [
      {
        heading: "Skills",
        items: [
          "Business strategy",
          "Go-to-market strategy",
          "Brand development",
          "Lead generation",
          "Appointment setting",
          "Sales management",
          "SEO strategy",
          "Paid advertising",
          "CRM & pipeline management",
          "Email marketing",
          "Team leadership",
          "Client relationship management",
          "Market research",
          "AI-driven growth",
        ],
      },
      {
        heading: "Growth stack & tools",
        items: [
          "HubSpot",
          "Apollo",
          "LinkedIn Sales Navigator",
          "Instantly",
          "SalesHandy",
          "Mailchimp",
          "Semrush",
          "Google Analytics",
          "Google Search Console",
          "Meta Ads Manager",
          "Google Ads",
          "Upwork",
          "ClickUp",
          "Notion",
        ],
      },
      {
        heading: "Industries served",
        items: [
          "SaaS & software",
          "E-commerce & DTC",
          "Agencies & studios",
          "Technology services",
          "Healthcare",
          "Finance",
          "Education",
          "Real estate",
          "Manufacturing",
          "Professional services",
        ],
      },
    ],
  },
  highlights: {
    eyebrow: "Highlights",
    heading: "Results that moved the number",
    items: [
      {
        title: "$1K → $100K marketplace growth",
        result:
          "Rebuilt profile positioning, proposals and response workflows to scale an Upwork account from $1K to $100K in under a year.",
      },
      {
        title: "$300K+ new business in year one",
        result:
          "Owned the full sales cycle end to end for a US software client and secured a strategic Fortune 500 partnership.",
      },
      {
        title: "SEO-led inbound for Mauka",
        result:
          "Technical, on-page and off-page SEO plus content and link building to grow organic visibility and qualified inbound leads.",
      },
    ],
  },
  leadership: {
    heading: "Running a studio built around outcomes",
    paragraphs: [
      "As CEO, Usama sets the standard for how Pixel2Tech scopes work: clear objectives, honest timelines, fixed proposals, and no work that cannot be tied back to a business result.",
      "He leads client partnerships personally, coaches the sales and outreach team on KPIs, and works alongside the creative and engineering leads so strategy, design and delivery stay pointed at the same goal.",
    ],
  },
  credentials: {
    heading: "Certifications & education",
    items: [
      "Fundamentals of Digital Marketing — Google",
      "Bachelor of Science, Computational Science — GCU Faisalabad (2016–2020)",
    ],
    note: { label: "Languages", text: "Urdu (native), English (full professional)." },
  },
  testimonials: [
    {
      quote:
        "Usama treats growth like an engineering problem. He mapped our pipeline, fixed the leaks and had qualified calls booked within weeks.",
      author: "Founder, B2B software company",
    },
    {
      quote:
        "He is the rare business leader who understands both the numbers and the creative. Our proposals finally matched the quality of our work.",
      author: "Director, e-commerce brand",
    },
    {
      quote:
        "Clear communication, realistic timelines and no overselling. That is why we kept working with his team.",
      author: "Operations lead, US client",
    },
  ],
  faqs: [
    {
      q: "Who is Usama Farooq?",
      a: "Usama Farooq is the CEO and founder of Pixel2Tech, a creative and web studio in Lahore, Pakistan. He is a growth strategist specializing in lead generation, go-to-market strategy, SEO and paid media for B2B, SaaS and e-commerce brands.",
    },
    {
      q: "What does the CEO of Pixel2Tech do day to day?",
      a: "He sets company strategy, leads client partnerships and new business, and makes sure every engagement is scoped around measurable business outcomes rather than deliverables alone.",
    },
    {
      q: "What results has he delivered?",
      a: "Over €1M in client revenue influenced, 710% growth on a key account, $300K+ closed in new business within a single year, and an Upwork profile scaled from $1K to $100K in under twelve months.",
    },
    {
      q: "What kind of businesses does he work with?",
      a: "Mostly B2B and SaaS companies, e-commerce and DTC brands, agencies and growing service businesses across the United States, Europe, the Gulf and Pakistan.",
    },
    {
      q: "How do you start a project with Usama and the Pixel2Tech team?",
      a: "Book a short discovery call. You share your goals, current traction and timelines, and Pixel2Tech returns a clear scope, approach and fixed proposal before any work begins.",
    },
  ],
  closing: {
    heading: "Tell Usama where your pipeline stands",
    body: "Share where you are today and where you want to be. You will get a clear scope, a realistic timeline and a fixed proposal before any work starts.",
  },
};

export const ASAD_FAROOQ: PersonProfileData = {
  path: "/asad-farooq",
  name: asad.name,
  givenName: "Asad",
  familyName: "Farooq",
  role: asad.role,
  seo: {
    title: "Asad Farooq | Co-Founder & Creative Director | Pixel2Tech",
    description:
      "Asad Farooq is Co-Founder and Creative Director at Pixel2Tech, leading branding, design systems, video and ad creative for B2B, SaaS and e-commerce brands.",
  },
  portrait: {
    src: teamAsad.url,
    alt: "Asad Farooq, Co-Founder and Creative Director at Pixel2Tech",
    width: 247,
    height: 317,
  },
  schemaImage: `${SITE.url}${founderPortrait.url}`,
  email: SITE.email,
  linkedin: asad.linkedin,
  alumniOf: "Government College University, Faisalabad",
  knowsAbout: [
    "Creative Direction",
    "Brand Identity",
    "UI Design",
    "Motion Graphics",
    "Video Editing",
    "Performance Creative",
    "AI Creative Systems",
    "Marketing Strategy",
  ],
  intro:
    "Creative director, designer and video editor building creative systems that help B2B, SaaS and e-commerce brands grow. 5+ years, 100+ founders, and creative work that is measured by business outcomes, not just how it looks.",
  reach: "Working globally, remote-first",
  stats: [
    { value: "5+", label: "Years in creative direction" },
    { value: "100+", label: "Founders & brands served" },
    { value: "€1M+", label: "Revenue influenced by creative" },
    { value: "12+", label: "Industries worked across" },
  ],
  bio: {
    heading: "Creative that is built to perform",
    paragraphs: [
      "Most businesses publish content every day, but very few build creative systems that actually attract clients and compound over time. That gap is the work Asad has spent his career closing.",
      "He started in 2021 as a graphic designer in Lahore, moved into motion and video, and then into full creative direction, leading teams at agencies serving Shopify Plus brands, B2B software companies and international groups across Canada, Germany and Belgium. In 2024 he co-founded Pixel2Tech to bring design, video, development and automation under one senior team.",
      "His approach pairs creative craft with marketing strategy: positioning first, then messaging, then design. Every asset (a logo, a landing page, a 15-second reel) is judged on whether it moves a business metric, not only on whether it looks good in a portfolio.",
      "Today he leads creative direction at Pixel2Tech, mentors the studio's designers and editors, and works directly with founders who need senior creative thinking without building an in-house team from scratch.",
    ],
  },
  expertise: {
    eyebrow: "Creative direction expertise",
    heading: "What Asad leads on",
    items: [
      {
        icon: Palette,
        title: "Brand identity & design systems",
        desc: "Logos, wordmarks, color, typography and component libraries that stay consistent as a brand scales.",
      },
      {
        icon: Megaphone,
        title: "Performance creative",
        desc: "Meta, TikTok and Google ad creative built around hooks, testing and measurable conversion outcomes.",
      },
      {
        icon: Clapperboard,
        title: "Video & motion",
        desc: "Short-form reels, long-form edits, podcast cuts, motion graphics, color grading and sound design.",
      },
      {
        icon: Layers,
        title: "Social & content systems",
        desc: "Content pillars, monthly calendars and repeatable templates so brands ship consistently, not sporadically.",
      },
      {
        icon: Brain,
        title: "AI creative workflows",
        desc: "AI image, video and copy tooling wired into real production pipelines to compress turnaround times.",
      },
      {
        icon: Sparkles,
        title: "Creative direction & strategy",
        desc: "Positioning, messaging and art direction that ties every asset back to a clear business objective.",
      },
    ],
  },
  timeline: [
    {
      role: "Co-Founder & Creative Director",
      org: "Pixel2Tech",
      period: "Aug 2024 — Present",
      place: "Lahore, Pakistan",
      desc: "Leading creative direction across branding, web, social and video for global clients. Building the creative systems and quality standards the whole studio runs on.",
    },
    {
      role: "Lead Designer & Marketing Strategist",
      org: "VA Hub PRO",
      period: "Sep 2024 — Present",
      place: "Alberta, Canada (Remote)",
      desc: "Campaign creative direction, scalable content and design systems, aligning creative output with marketing and revenue goals.",
    },
    {
      role: "Creative Director",
      org: "Ethisol",
      period: "May 2023 — Present",
      place: "Lahore, Pakistan",
      desc: "Creative direction and brand strategy, managing design teams and keeping visual quality consistent across every touchpoint.",
    },
    {
      role: "Creative Director",
      org: "Niostgroup International",
      period: "Sep 2025 — Jan 2026",
      place: "Brussels, Belgium",
      desc: "Creative strategy, branding and visual execution across digital platforms for an international group.",
    },
    {
      role: "Lead Designer",
      org: "Nimis Tech",
      period: "Sep 2025 — Feb 2026",
      place: "Berlin, Germany",
      desc: "Visual design, branding and creative execution for digital products and marketing assets.",
    },
    {
      role: "Creative Director",
      org: "SwishTag (Shopify Plus Agency)",
      period: "Nov 2024 — May 2025",
      place: "Lahore, Pakistan",
      desc: "Led branding and conversion-focused creative for Shopify Plus brands; previously Lead Motion & Graphic Designer driving high-performing ad creative.",
    },
    {
      role: "Senior Creative Designer",
      org: "PixelForge",
      period: "Jul 2024 — Jan 2026",
      place: "Lahore, Pakistan",
      desc: "Advanced visual design, branding systems and high-quality creatives for digital campaigns.",
    },
    {
      role: "Graphic Designer",
      org: "ibex. Pakistan",
      period: "Jun 2022 — Apr 2023",
      place: "Lahore, Pakistan",
      desc: "Designed digital and marketing assets at enterprise scale while maintaining strict brand consistency.",
    },
  ],
  skills: {
    heading: "Skills, tech stack & industries",
    groups: [
      {
        heading: "Skills",
        items: [
          "Creative direction",
          "Brand identity",
          "UI design",
          "Art direction",
          "Motion graphics",
          "Video editing",
          "Short-form content",
          "Ad creative",
          "Copywriting",
          "Marketing strategy",
          "Design systems",
          "Business strategy",
          "Team leadership",
          "Startup development",
        ],
      },
      {
        heading: "Tech stack & tools",
        items: [
          "Figma",
          "Photoshop",
          "Illustrator",
          "After Effects",
          "Premiere Pro",
          "DaVinci Resolve",
          "CapCut",
          "Midjourney",
          "Runway ML",
          "Higgsfield AI",
          "Magnific AI",
          "Claude AI",
          "Artlist",
          "ClickUp",
        ],
      },
      {
        heading: "Industries served",
        items: [
          "SaaS & software",
          "E-commerce & DTC",
          "Agencies & studios",
          "Beauty & cosmetics",
          "Health & wellness",
          "Real estate",
          "Education",
          "Finance",
          "Hospitality",
          "Professional services",
        ],
      },
    ],
  },
  highlights: {
    eyebrow: "Featured work",
    heading: "Selected case studies",
    items: [
      {
        title: "MADLUVV: social media & Meta ads",
        result:
          "Full social handling plus Meta, LinkedIn and TikTok ad creative for a beauty brand: a repeatable creative system instead of one-off posts.",
        slug: "madluvv-social-media-meta-ads",
      },
      {
        title: "Shopify Plus brand creative",
        result:
          "Conversion-led ad creative and brand consistency across a portfolio of e-commerce brands as Creative Director at SwishTag.",
      },
      {
        title: "B2B agency creative systems",
        result:
          "Design systems, pitch collateral and campaign creative that helped service businesses look enterprise-grade and win larger accounts.",
      },
    ],
  },
  leadership: {
    heading: "Building the studio, not just the deliverables",
    paragraphs: [
      "As Co-Founder, Asad shapes how Pixel2Tech works: how briefs are written, how creative is reviewed, and how design, video and development stay aligned on a single direction.",
      "He runs creative reviews with the design and editing team, mentors junior designers into senior craft, and stays hands-on with the most demanding client work: brand launches, campaign systems and high-stakes ad creative.",
    ],
  },
  credentials: {
    heading: "Certifications",
    items: [
      "Adobe Firefly Essential Training (2024)",
      "Figma Fundamentals",
      "Video Editing Techniques for Impactful Content",
      "Conversations in Video Editing",
      "Entrepreneurship Foundations",
      "Graphics Design — Digi Skills (LMS)",
    ],
    note: {
      label: "Education",
      text: "Associate Degree, Information Technology — Government College University, Faisalabad (2021–2023).",
    },
  },
  testimonials: [
    {
      quote:
        "Asad does not just deliver files. He questions the brief, sharpens the positioning, and then designs. Our brand finally looks like the company we want to be.",
      author: "Founder, B2B SaaS",
    },
    {
      quote:
        "Our ad creative went from generic to genuinely stop-scroll. The biggest difference was having one person owning direction across every channel.",
      author: "Marketing lead, e-commerce brand",
    },
    {
      quote:
        "Fast, senior, and calm under deadlines. He built a system our in-house team can keep running without him.",
      author: "Operations director, agency client",
    },
  ],
  faqs: [
    {
      q: "What does Asad Farooq do at Pixel2Tech?",
      a: "Asad is Co-Founder and Creative Director at Pixel2Tech. He owns creative direction across branding, web design, social content, video and ad creative, and sets the quality standards the studio's designers and editors work to.",
    },
    {
      q: "How much experience does Asad Farooq have?",
      a: "Over 5 years across creative direction, graphic design, motion and video, working with 100+ founders and brands in Pakistan, the Gulf, Europe and North America.",
    },
    {
      q: "What kind of clients does he work with?",
      a: "Mostly B2B and SaaS companies, e-commerce and DTC brands, agencies, and funded or bootstrapped startups that need senior creative direction without hiring a full in-house team.",
    },
    {
      q: "Does he work with international clients remotely?",
      a: "Yes. He has led creative for teams in Canada, Germany, Belgium, the United States and across the Gulf, working remotely with async handoffs and scheduled review calls.",
    },
    {
      q: "How do you start a project with Asad and the Pixel2Tech team?",
      a: "Start with a short discovery call. You share goals, current creative and timelines; Pixel2Tech comes back with scope, approach and a fixed proposal before any work begins.",
    },
  ],
  closing: {
    heading: "Need senior creative direction on your next project?",
    body: "Tell Asad and the Pixel2Tech team what you are building. You will get a clear scope, a realistic timeline and a fixed proposal before any work starts.",
  },
};

/**
 * Site-wide 1200x640 JPG share card. The founders' own photos are small
 * portrait WebP files, which social scrapers crop badly or skip, so the
 * profile pages share this card until dedicated founder cards exist.
 */
const SHARE_IMAGE = `${SITE.url}/__l5e/assets-v1/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg`;

/** Route `head()` for a founder profile: meta, canonical and JSON-LD. */
export function personProfileHead(person: PersonProfileData) {
  const canonical = `${SITE.url}${person.path}`;
  const { title, description } = person.seo;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: SHARE_IMAGE },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:alt", content: `${SITE.name}: ${SITE.positioning}` },
      { property: "profile:first_name", content: person.givenName },
      { property: "profile:last_name", content: person.familyName },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SHARE_IMAGE },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": `${canonical}#person`,
              name: person.name,
              givenName: person.givenName,
              familyName: person.familyName,
              url: canonical,
              image: person.schemaImage,
              jobTitle: person.role,
              description,
              ...(person.email ? { email: `mailto:${person.email}` } : {}),
              telephone: SITE.phoneE164,
              address: {
                "@type": "PostalAddress",
                addressLocality: SITE.address.addressLocality,
                addressRegion: SITE.address.addressRegion,
                addressCountry: SITE.address.addressCountry,
              },
              worksFor: {
                "@type": "Organization",
                "@id": `${SITE.url}/#organization`,
                name: SITE.name,
                url: SITE.url,
              },
              alumniOf: [{ "@type": "CollegeOrUniversity", name: person.alumniOf }],
              knowsAbout: person.knowsAbout,
              sameAs: [person.linkedin, SITE.url].filter(Boolean),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
                { "@type": "ListItem", position: 2, name: "About", item: `${SITE.url}/about` },
                { "@type": "ListItem", position: 3, name: person.name, item: canonical },
              ],
            },
          ],
        }),
      },
      faqJsonLd(person.faqs),
    ],
  };
}
