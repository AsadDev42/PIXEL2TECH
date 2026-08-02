import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getSortedPosts, getPost } from "@/lib/blog-posts";
import { SITE_URL } from "../catalog";

export const listBlogPosts = defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description:
    "List Pixel2Tech blog articles (newest first) with slug, title, excerpt, tag, author, date and URL. Optionally filter by keyword.",
  inputSchema: {
    query: z.string().optional().describe("Case-insensitive keyword filter on title, excerpt or tag."),
    limit: z.number().int().min(1).max(50).optional().describe("Max posts to return. Default 10."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, limit }) => {
    const q = query?.toLowerCase().trim();
    const rows = getSortedPosts()
      .filter((p) =>
        !q ? true : `${p.title} ${p.excerpt} ${p.tag} ${(p.keywords ?? []).join(" ")}`.toLowerCase().includes(q),
      )
      .slice(0, limit ?? 10)
      .map((p) => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        tag: p.tag,
        author: p.author,
        date: p.date,
        readingTime: p.time,
        url: `${SITE_URL}/blog/${p.slug}`,
      }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify(rows, null, 2) }],
      structuredContent: { posts: rows, count: rows.length },
    };
  },
});

export const getBlogPost = defineTool({
  name: "get_blog_post",
  title: "Get blog post",
  description: "Get the full text of one Pixel2Tech blog article by its slug, including sections and FAQs.",
  inputSchema: { slug: z.string().min(1).describe("Post slug, e.g. 'ai-seo-mistakes'.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const post = getPost(slug.trim().replace(/^\/?blog\//, ""));
    if (!post) {
      return { content: [{ type: "text" as const, text: `No blog post found for slug "${slug}".` }], isError: true };
    }
    const body = post.content.map((s) => `## ${s.heading}\n\n${s.body.join("\n\n")}`).join("\n\n");
    const faqs = post.faqs?.length
      ? `\n\n## FAQs\n\n${post.faqs.map((f) => `**${f.q}**\n${f.a}`).join("\n\n")}`
      : "";
    const text = `# ${post.title}\n\n${post.excerpt}\n\nBy ${post.author} · ${post.date} · ${post.time}\n${SITE_URL}/blog/${post.slug}\n\n${body}${faqs}`;
    return {
      content: [{ type: "text" as const, text }],
      structuredContent: {
        slug: post.slug,
        title: post.title,
        url: `${SITE_URL}/blog/${post.slug}`,
        tag: post.tag,
        date: post.date,
        keywords: post.keywords ?? [],
      },
    };
  },
});

export default listBlogPosts;
