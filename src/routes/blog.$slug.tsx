import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ResponsiveImage } from "@/components/responsive-image";
import { PageShell } from "@/components/site-chrome";
import { FadeIn } from "@/components/motion";
import { Calendar, Clock, User, Folder, ChevronRight, Facebook, Twitter, Linkedin } from "lucide-react";
import { getPost, getRelatedPosts, posts, type BlogPost } from "@/lib/blog-posts";

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
    const image = post.img.startsWith("http") ? post.img : `https://pixel2tech.com${post.img}`;
    const title = post.metaTitle ?? `${post.title} — Pixel2Tech`;
    const description = post.metaDescription ?? post.excerpt;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        ...(post.keywords?.length ? [{ name: "keywords", content: post.keywords.join(", ") }] : []),
        { property: "og:title", content: post.title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { property: "article:author", content: post.author },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.tag },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: image },
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
            image,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Organization",
              "@id": "https://pixel2tech.com/#organization",
              name: "Pixel2Tech",
              url: "https://pixel2tech.com",
              logo: { "@type": "ImageObject", url: "https://pixel2tech.com/__l5e/assets-v1/ae4a7ff7-7a55-46ec-a545-ecb94ff2d14b/pixel2tech-logo.png" },
            },
            publisher: {
              "@type": "Organization",
              name: "Pixel2Tech",
              url: "https://pixel2tech.com",
              logo: { "@type": "ImageObject", url: "https://pixel2tech.com/__l5e/assets-v1/ae4a7ff7-7a55-46ec-a545-ecb94ff2d14b/pixel2tech-logo.png" },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            articleSection: post.tag,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://pixel2tech.com/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://pixel2tech.com/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
        ...(post.faqs?.length
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: post.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                }),
              },
            ]
          : []),
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
  const related = getRelatedPosts(post, 4);
  const shareUrl = `https://pixel2tech.com/blog/${post.slug}`;
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
                  <ResponsiveImage
                    src={post.img}
                    alt={post.title}
                    width={1600}
                    height={900}
                    sizes="(min-width: 1024px) 66vw, 92vw"
                    className="h-full w-full object-cover"
                    priority
                  />
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

                {post.faqs?.length ? (
                  <FadeIn>
                    <section>
                      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Frequently Asked Questions</h2>
                      <div className="mt-6 space-y-4">
                        {post.faqs.map((f: { q: string; a: string }) => (
                          <div key={f.q} className="rounded-2xl border border-border bg-background p-5 sm:p-6">
                            <h3 className="text-base font-semibold text-foreground sm:text-lg">{f.q}</h3>
                            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground sm:text-base">{f.a}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </FadeIn>
                ) : null}

                <FadeIn>
                  <BlogCta {...(post.cta ?? {})} />
                </FadeIn>


                <FadeIn>
                  <section aria-labelledby="related-articles">
                    <h2 id="related-articles" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      Related Articles
                    </h2>
                    <p className="mt-2 text-[15px] text-muted-foreground sm:text-base">
                      More reading on AI, automation, and building better business systems.
                    </p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {related.map((r) => (
                        <Link
                          key={r.slug}
                          to="/blog/$slug"
                          params={{ slug: r.slug }}
                          className="group flex gap-4 rounded-2xl border border-border bg-background p-4 transition hover:bg-muted"
                        >
                          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-muted">
                            <ResponsiveImage
                              src={r.img}
                              alt={r.title}
                              width={480}
                              height={480}
                              sizes="120px"
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs text-muted-foreground">{r.tag} · {r.time}</div>
                            <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-foreground group-hover:text-[#1E90FF] sm:text-base">
                              {r.title}
                            </h3>
                            <p className="mt-1 line-clamp-2 text-xs text-muted-foreground sm:text-sm">{r.excerpt}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                </FadeIn>
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
                      {related.slice(0, 3).map((r) => (
                        <li key={r.slug}>
                          <Link to="/blog/$slug" params={{ slug: r.slug }} className="group flex gap-3">
                            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-muted">
                              <ResponsiveImage
                                src={r.img}
                                alt={r.title}
                                width={480}
                                height={480}
                                sizes="96px"
                                className="h-full w-full object-cover"
                              />
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
