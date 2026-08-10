import type { BlogPost } from "@/lib/blog-posts";

export const SITE_URL = "https://pixel2tech.com";
const BRAND = "Pixel2Tech";
const LOGO =
  "https://pixel2tech.com/__l5e/assets-v1/ae4a7ff7-7a55-46ec-a545-ecb94ff2d14b/pixel2tech-logo.png";

/** Cut a string to `max` chars on a word boundary, no dangling punctuation. */
function clamp(text: string, max: number): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const at = cut.lastIndexOf(" ");
  return `${(at > max * 0.6 ? cut.slice(0, at) : cut).replace(/[\s,.;:—-]+$/, "")}…`;
}

const STOP = new Set(
  "the a an and or but for with without your you our we they this that these those is are was were be been being to of in on at by from as it its into more most than then how why what when who which do does not need needs should can will just about over under after before".split(
    " ",
  ),
);

/** Derive keyword phrases from the title, tag and section headings. */
function deriveKeywords(post: BlogPost): string[] {
  const words = `${post.title} ${post.content.map((s) => s.heading).join(" ")}`
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3 && !STOP.has(w));

  const counts = new Map<string, number>();
  for (const w of words) counts.set(w, (counts.get(w) ?? 0) + 1);

  const top = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([w]) => w);

  return [...new Set([post.tag.toLowerCase(), ...top, `${BRAND.toLowerCase()} blog`])];
}

/** Everything the blog route needs for head tags, derived when not authored. */
export function buildBlogSeo(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = post.img.startsWith("http") ? post.img : `${SITE_URL}${post.img}`;

  const rawTitle = post.metaTitle ?? `${post.title} | ${BRAND}`;
  const title = clamp(
    rawTitle.length > 60 ? `${clamp(post.title, 60 - BRAND.length - 3)} | ${BRAND}` : rawTitle,
    60,
  );

  const description = clamp(
    post.metaDescription ??
      post.excerpt ??
      post.keyTakeaways?.join(" ") ??
      post.content[0]?.body?.[0] ??
      `${post.title} — insights from the ${BRAND} team.`,
    158,
  );

  const ogTitle = clamp(post.ogTitle ?? post.title, 70);
  const ogDescription = clamp(post.ogDescription ?? description, 158);
  const keywords = post.keywords?.length ? post.keywords : deriveKeywords(post);

  const wordCount = post.content.reduce(
    (n, s) =>
      n +
      s.body.join(" ").split(/\s+/).filter(Boolean).length +
      (s.subsections?.reduce((m, ss) => m + ss.body.join(" ").split(/\s+/).filter(Boolean).length, 0) ?? 0),
    0,
  );

  const author =
    post.author === "Pixel2Tech Team"
      ? { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: BRAND, url: SITE_URL }
      : {
          "@type": "Person",
          name: post.author,
          jobTitle: post.authorRole,
          worksFor: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: BRAND },
          url: `${SITE_URL}/about`,
        };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: clamp(post.h1 ?? post.title, 110),
    description,
    image: [image],
    inLanguage: "en",
    wordCount,
    timeRequired: `PT${Math.max(1, Math.round(wordCount / 220))}M`,
    keywords: keywords.join(", "),
    articleSection: post.tag,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author,
    publisher: {
      "@type": "Organization",
      name: BRAND,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: LOGO },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(post.keyTakeaways?.length ? { abstract: post.keyTakeaways.join(" ") } : {}),
    ...(post.sources?.length
      ? { citation: post.sources.map((s) => ({ "@type": "CreativeWork", name: s.label, url: s.href })) }
      : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return {
    url,
    image,
    title,
    description,
    ogTitle,
    ogDescription,
    keywords,
    schemas: [articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])],
  };
}
