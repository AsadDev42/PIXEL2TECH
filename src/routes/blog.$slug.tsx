import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { FadeIn } from "@/components/motion";
import { Calendar, Clock, User, Folder, ChevronRight, Facebook, Twitter, Linkedin } from "lucide-react";
import { getPost, posts, type BlogPost } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Pixel2Tech" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    const url = `https://pixel2tech.com/blog/${post.slug}`;
    return {
      meta: [
        { title: `${post.title} — Pixel2Tech` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: post.img },
        { property: "article:author", content: post.author },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.tag },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: post.img },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.img,
            datePublished: post.date,
            author: { "@type": "Person", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "Pixel2Tech",
              logo: { "@type": "ImageObject", url: "https://pixel2tech.com/__l5e/assets-v1/ae4a7ff7-7a55-46ec-a545-ecb94ff2d14b/pixel2tech-logo.png" },
            },
            mainEntityOfPage: url,
            articleSection: post.tag,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Article not found</h1>
        <p className="mt-3 text-muted-foreground">The post you're looking for doesn't exist.</p>
        <Link to="/blog" className="mt-6 inline-flex items-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background">Back to blog</Link>
      </div>
    </PageShell>
  ),
  errorComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Something went wrong</h1>
        <Link to="/blog" className="mt-6 inline-flex items-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background">Back to blog</Link>
      </div>
    </PageShell>
  ),
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const shareUrl = typeof window !== "undefined" ? window.location.href : `/blog/${post.slug}`;
  const socials = [
    { Icon: Facebook, label: "Facebook", href: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { Icon: Twitter, label: "X", href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}` },
    { Icon: Linkedin, label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
  ];

  return (
    <PageShell>
      <section className="bg-muted/40 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          {/* Breadcrumb */}
          <FadeIn>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <Link to="/blog" className="hover:text-foreground">Blog</Link>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span className="text-foreground">{post.title}</span>
            </nav>
          </FadeIn>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
            {/* Main */}
            <article>
              <FadeIn>
                <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {post.title}
                </h1>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2"><User className="h-4 w-4" aria-hidden="true" />{post.author}</span>
                  <span className="inline-flex items-center gap-2"><Folder className="h-4 w-4" aria-hidden="true" />{post.tag}</span>
                  <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" aria-hidden="true" />{post.date}</span>
                  <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" aria-hidden="true" />{post.time}</span>
                </div>

                <div className="mt-8 aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
                  <img src={post.img} alt={post.title} className="h-full w-full object-cover" loading="eager" decoding="async" />
                </div>
              </FadeIn>

              <div className="mt-10 space-y-10">
                {post.content.map((section: BlogPost["content"][number], i: number) => (
                  <FadeIn key={section.heading} delay={0.05 * (i + 1)}>
                    <section>
                      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{section.heading}</h2>
                      <div className="mt-4 space-y-4">
                        {section.body.map((p: string, idx: number) => (
                          <p key={idx} className="text-[15px] leading-relaxed text-muted-foreground sm:text-base">{p}</p>
                        ))}
                      </div>
                    </section>
                  </FadeIn>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <FadeIn delay={0.15}>
                <div className="rounded-3xl border border-border bg-background p-6 shadow-sm sm:p-7">
                  {/* Share */}
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Share on Social Media</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {socials.map(({ Icon, label, href }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Share on ${label}`}
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition hover:bg-muted"
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <hr className="my-6 border-border" />

                  {/* Tags */}
                  <div>
                    <h3 className="text-base font-semibold text-foreground">All Tags</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {Array.from(new Set(posts.map((p) => p.tag))).map((t) => (
                        <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">{t}</span>
                      ))}
                    </div>
                  </div>

                  <hr className="my-6 border-border" />

                  {/* Related */}
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Related Blogs</h3>
                    <ul className="mt-4 space-y-4">
                      {related.map((r) => (
                        <li key={r.slug}>
                          <Link to="/blog/$slug" params={{ slug: r.slug }} className="group flex gap-3">
                            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-muted">
                              <img src={r.img} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs text-muted-foreground">{r.date}</div>
                              <div className="line-clamp-2 text-sm font-semibold text-foreground group-hover:text-[#1E90FF]">{r.title}</div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <hr className="my-6 border-border" />

                  {/* Newsletter */}
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Join Our Newsletter</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Get expert insights on business strategy, growth frameworks, leadership, and performance delivered to your inbox.
                    </p>
                    <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <label htmlFor="newsletter-email" className="mb-1.5 block text-xs font-medium text-foreground">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="newsletter-email"
                          type="email"
                          required
                          placeholder="example@yourmail.com"
                          className="min-h-11 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <button type="submit" className="min-h-11 w-full rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition hover:opacity-90">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
