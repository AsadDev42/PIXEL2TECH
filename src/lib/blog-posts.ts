/**
 * Full articles (metadata + body) for server-side code such as sitemaps and
 * feeds.
 *
 * This module eagerly imports EVERY article body. Do not import it from a
 * page or component, or all article text ships in that page's JavaScript.
 * Pages use "@/lib/blog-index" (metadata only, one lazy body per article).
 */
import { POST_INDEX } from "@/lib/blog-index";
import type { BlogPost, PostBody } from "@/lib/blog-types";

export { SITE_LINKS } from "@/lib/blog-index";
export { getReadingMinutes, headingId, stock } from "@/lib/blog-types";
export type { BlogPost, BlogSection, BlogTable, PostMeta, PostSummary } from "@/lib/blog-types";

const BODIES = import.meta.glob<PostBody>("./posts/*.ts", { eager: true, import: "default" });

/** Every post, newest first. */
export const posts: BlogPost[] = POST_INDEX.flatMap((meta) => {
  const body = BODIES[`./posts/${meta.slug}.ts`];
  return body ? [{ ...meta, ...body }] : [];
});

const BY_SLUG = new Map(posts.map((p) => [p.slug, p]));

export function getPost(slug: string): BlogPost | undefined {
  return BY_SLUG.get(slug);
}

/** Posts sorted newest-first (date, then time). */
export function getSortedPosts(): BlogPost[] {
  return [...posts];
}

/**
 * Related articles for a post: explicit `related` slugs first, then same-tag
 * posts, then the most recent remaining posts.
 */
export function getRelatedPosts(post: BlogPost, limit = 4): BlogPost[] {
  const picked: BlogPost[] = [];
  const push = (p?: BlogPost) => {
    if (p && p.slug !== post.slug && !picked.includes(p)) picked.push(p);
  };
  post.related?.forEach((slug) => push(getPost(slug)));
  posts.filter((p) => p.tag === post.tag).forEach(push);
  posts.forEach(push);
  return picked.slice(0, limit);
}

/** Previous (newer) and next (older) article in the newest-first ordering. */
export function getAdjacentPosts(post: BlogPost) {
  const i = posts.findIndex((p) => p.slug === post.slug);
  return {
    previous: i > 0 ? posts[i - 1] : undefined,
    next: i >= 0 && i < posts.length - 1 ? posts[i + 1] : undefined,
  };
}
