import { countWords, getReadingMinutes, postTimestamps, type BlogPost } from "@/lib/blog-types";
import { SITE } from "@/lib/site-config";
import { TEAM } from "@/lib/team";

export const SITE_URL = SITE.url;
const BRAND = SITE.name;
const ORG_ID = `${SITE_URL}/#organization`;
const TITLE_SUFFIX = ` | ${BRAND}`;
const LOGO =
  "https://pixel2tech.com/media/ae4a7ff7-7a55-46ec-a545-ecb94ff2d14b/pixel2tech-logo.png";

/** Google shows roughly this many characters of a title or description. */
const TITLE_MAX = 60;
const DESCRIPTION_MAX = 160;

/**
 * <title>: the hand-written metaTitle when there is one, else "Title | Pixel2Tech".
 * When that is too long the brand suffix is dropped. Titles are never cut
 * mid-sentence; a long title is left whole for Google to shorten.
 */
function pageTitle(post: BlogPost): string {
  const authored = post.metaTitle?.trim();
  const full = authored || `${post.title}${TITLE_SUFFIX}`;
  if (full.length <= TITLE_MAX || !full.endsWith(TITLE_SUFFIX)) return full;
  return full.slice(0, -TITLE_SUFFIX.length);
}

/**
 * Meta description: the hand-written one when there is one. Otherwise the
 * excerpt, trimmed to whole sentences that fit. No "…" and no cut words.
 */
function pageDescription(post: BlogPost): string {
  const authored = post.metaDescription?.trim();
  if (authored) return authored;
  const text = post.excerpt.replace(/\s+/g, " ").trim();
  if (text.length <= DESCRIPTION_MAX) return text;
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) ?? [text];
  let out = "";
  for (const s of sentences) {
    if ((out + s).trim().length > DESCRIPTION_MAX) break;
    out += s;
  }
  return (out || sentences[0]).trim();
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

/**
 * The team member behind a byline, when they have a profile page. Posts
 * credited to "Pixel2Tech Team" (or similar) return undefined.
 */
export function authorProfile(author: string) {
  const member = TEAM.find((m) => m.name === author);
  if (!member?.profile) return undefined;
  return {
    name: member.name,
    role: member.role,
    path: member.profile,
    url: `${SITE_URL}${member.profile}`,
    linkedin: member.linkedin,
  };
}

/** True for bylines that credit the studio rather than a person. */
function isStudioByline(author: string) {
  return author.toLowerCase().startsWith(BRAND.toLowerCase());
}

/** Schema.org author: the studio as the Organization, people as a Person. */
function authorSchema(post: BlogPost) {
  const profile = authorProfile(post.author);
  if (profile) {
    return {
      "@type": "Person",
      "@id": `${profile.url}#person`,
      name: profile.name,
      jobTitle: profile.role,
      url: profile.url,
      ...(profile.linkedin ? { sameAs: [profile.linkedin] } : {}),
      worksFor: { "@id": ORG_ID },
    };
  }
  if (isStudioByline(post.author)) {
    return { "@type": "Organization", "@id": ORG_ID, name: BRAND, url: SITE_URL };
  }
  return {
    "@type": "Person",
    name: post.author,
    ...(post.authorRole ? { jobTitle: post.authorRole } : {}),
    worksFor: { "@id": ORG_ID },
  };
}

/** Everything the blog route needs for head tags, derived when not authored. */
export function buildBlogSeo(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = post.img.startsWith("http") ? post.img : `${SITE_URL}${post.img}`;
  const title = pageTitle(post);
  const description = pageDescription(post);
  const ogTitle = post.ogTitle ?? post.title;
  const ogDescription = post.ogDescription ?? description;
  const keywords = post.keywords?.length ? post.keywords : deriveKeywords(post);
  const { published, modified } = postTimestamps(post);
  const profile = authorProfile(post.author);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.h1 ?? post.title,
    description,
    image: [image],
    inLanguage: "en",
    wordCount: countWords(post),
    timeRequired: `PT${getReadingMinutes(post)}M`,
    keywords: keywords.join(", "),
    articleSection: post.tag,
    ...(published ? { datePublished: published } : {}),
    ...(modified ? { dateModified: modified } : {}),
    author: authorSchema(post),
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: BRAND,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: LOGO },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(post.keyTakeaways?.length ? { abstract: post.keyTakeaways.join(" ") } : {}),
    ...(post.sources?.length
      ? {
          citation: post.sources.map((s) => ({
            "@type": "CreativeWork",
            name: s.label,
            url: s.href,
          })),
        }
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
    /** ISO 8601, e.g. "2026-08-03T09:00:00+05:00", for article:* meta tags. */
    published,
    modified,
    /** Profile URL for article:author, or the byline when there is no profile. */
    authorRef: profile?.url ?? post.author,
    schemas: [articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])],
  };
}
