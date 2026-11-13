import type { PostMeta } from "@/lib/blog-types";

export type BlogSearch = { page?: number; topic?: string; q?: string };
export const BLOG_PAGE_SIZE = 12;

export function parseBlogSearch(search: Record<string, unknown>): BlogSearch {
  const page = Number(search.page);
  const topic = typeof search.topic === "string" ? search.topic.trim().slice(0, 80) : "";
  const q = typeof search.q === "string" ? search.q.trim().slice(0, 120) : "";
  return {
    ...(Number.isSafeInteger(page) && page > 1 ? { page } : {}),
    ...(topic ? { topic } : {}),
    ...(q ? { q } : {}),
  };
}

export function getBlogArchive(posts: readonly PostMeta[], search: BlogSearch) {
  const terms = (search.q ?? "").toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const filtered = posts.filter((post) => {
    const haystack = `${post.title} ${post.excerpt} ${post.tag}`.toLocaleLowerCase();
    return (
      (!search.topic || post.tag === search.topic) && terms.every((term) => haystack.includes(term))
    );
  });
  const pages = Math.max(1, Math.ceil(filtered.length / BLOG_PAGE_SIZE));
  const page = Math.min(pages, Math.max(1, Math.floor(search.page ?? 1)));
  const offset = (page - 1) * BLOG_PAGE_SIZE;
  const normalized: BlogSearch = { ...search, ...(page > 1 ? { page } : {}) };
  if (page === 1) delete normalized.page;
  const params = new URLSearchParams();
  if (search.topic) params.set("topic", search.topic);
  if (search.q) params.set("q", search.q);
  if (page > 1) params.set("page", String(page));
  return {
    posts: filtered.slice(offset, offset + BLOG_PAGE_SIZE),
    total: filtered.length,
    pages,
    page,
    offset,
    search: normalized,
    path: `/blog${params.size ? `?${params}` : ""}`,
  };
}
