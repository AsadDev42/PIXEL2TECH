import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ResponsiveImage } from "@/components/responsive-image";
import { PageShell } from "@/components/site-chrome";
import { Calendar, Clock, User, Folder, ChevronRight, RefreshCw } from "lucide-react";
import {
  getAdjacentPosts,
  getPost,
  getReadingMinutes,
  getRelatedPosts,
  posts,
  SITE_LINKS,
  type BlogSection,
} from "@/lib/blog-posts";
import { buildBlogSeo } from "@/lib/blog-seo";
import { BlogCta } from "@/components/blog-cta";
import { NewsletterForm } from "@/components/newsletter-form";
import {
  ArticleSection,
  
  InternalLinks,
  KeyTakeaways,
  PrevNextNav,
  ReadingProgress,
  ShareBar,
  SourceList,
  TableOfContents,
} from "@/components/blog-reading";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    // A slug that does not exist is a genuine 404. Redirecting every unknown
    // slug to /blog would be a soft 404, which Google reports as
    // "Crawled - currently not indexed" instead of dropping the URL.
    if (!post) throw notFound();


    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Pixel2Tech" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    // SEO title, meta description, keywords and schema are auto-generated from
    // the post content whenever the article does not author them explicitly.
    const seo = buildBlogSeo(post);
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { name: "keywords", content: seo.keywords.join(", ") },
        { name: "author", content: post.author },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        { property: "og:site_name", content: "Pixel2Tech" },
        { property: "og:title", content: seo.ogTitle },
        { property: "og:description", content: seo.ogDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: seo.url },
        { property: "og:image", content: seo.image },
        { property: "og:image:alt", content: post.imgAlt ?? post.title },
        { property: "article:author", content: post.author },
        { property: "article:published_time", content: post.date },
        { property: "article:modified_time", content: post.updated ?? post.date },
        { property: "article:section", content: post.tag },
        ...seo.keywords.slice(0, 6).map((k) => ({ property: "article:tag", content: k })),
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: seo.image },
        { name: "twitter:title", content: seo.ogTitle },
        { name: "twitter:description", content: seo.ogDescription },
      ],
      links: [{ rel: "canonical", href: seo.url }],
      scripts: seo.schemas.map((schema) => ({
        type: "application/ld+json",
        children: JSON.stringify(schema),
      })),
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
  const { previous, next } = getAdjacentPosts(post);
  const shareUrl = `https://pixel2tech.com/blog/${post.slug}`;
  const readingMinutes = getReadingMinutes(post);
  const internalLinks = post.internalLinks?.length ? post.internalLinks : SITE_LINKS;


  return (
    <PageShell>
      <ReadingProgress />
      <section className="bg-muted/40 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          {/* Breadcrumb */}
          <div>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <Link to="/blog" className="hover:text-foreground">Blog</Link>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span className="text-foreground">{post.title}</span>
            </nav>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
            {/* Main */}
            <article className="min-w-0 lg:order-1">

              <div>
                <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {post.h1 ?? post.title}
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2"><User className="h-4 w-4" aria-hidden="true" />{post.author}</span>
                  <span className="inline-flex items-center gap-2"><Folder className="h-4 w-4" aria-hidden="true" />{post.tag}</span>
                  <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" aria-hidden="true" />{post.date}</span>
                  <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" aria-hidden="true" />{readingMinutes} min read</span>
                  <span className="inline-flex items-center gap-2"><RefreshCw className="h-4 w-4" aria-hidden="true" />Updated {post.updated ?? post.date}</span>
                </div>

                <div className="mt-6 lg:hidden">
                  <ShareBar url={shareUrl} title={post.title} />
                </div>



                <div className="mt-8 aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
                  <ResponsiveImage
                    src={post.img}
                    alt={post.imgAlt ?? post.title}
                    width={1600}
                    height={900}
                    sizes="(min-width: 1024px) 66vw, 92vw"
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>

              </div>

              <div className="mt-10 space-y-10">
                {post.keyTakeaways?.length ? (
                  <div>
                    <KeyTakeaways items={post.keyTakeaways} />
                  </div>
                ) : null}
                
                {post.quickVerdict ? (
                  <div 
                    className="relative overflow-hidden rounded-3xl border border-border bg-background/50 p-6 backdrop-blur-sm sm:p-10"
                  >
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1E90FF]/5 blur-3xl" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1E90FF] text-white shadow-lg shadow-[#1E90FF]/20">
                          <ChevronRight className="h-7 w-7" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold tracking-tight text-foreground">{post.quickVerdict.title}</h2>
                          <p className="text-sm font-medium text-[#1E90FF]">Premium Strategic Audit</p>
                        </div>
                      </div>
                      <div className="mt-6 text-[16px] leading-relaxed text-muted-foreground sm:text-lg">
                        {post.quickVerdict.body}
                      </div>
                      {post.quickVerdict.winner ? (
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                          <div className="flex items-center gap-3 rounded-2xl border border-[#1E90FF]/20 bg-[#1E90FF]/10 px-5 py-3">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#1E90FF]">Top Pick 2026</span>
                            <span className="text-[15px] font-bold text-foreground">{post.quickVerdict.winner}</span>
                          </div>
                          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#1E90FF] hover:underline">
                            Request your own tech audit
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : null}



                <div>
                  <div className="lg:hidden">
                    <TableOfContents sections={post.content} hasFaqs={Boolean(post.faqs?.length)} />
                  </div>
                </div>

                {post.content.map((section: BlogSection, i: number) => (
                  <div key={section.heading}>
                    <ArticleSection section={section} />
                  </div>
                ))}

                {post.sources?.length ? (
                  <div>
                    <SourceList sources={post.sources} />
                  </div>
                ) : null}

                {post.faqs?.length ? (
                  <div>
                    <section id="faqs" className="scroll-mt-28">
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
                  </div>
                ) : null}




                <div>
                  <BlogCta {...(post.cta ?? {})} />
                </div>

                <div>
                  <InternalLinks links={internalLinks} />
                </div>

                <div>
                  <PrevNextNav previous={previous} next={next} />
                </div>




                <div>
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
                </div>
              </div>
            </article>



            {/* Sidebar */}
            <aside className="min-w-0 lg:order-2 lg:sticky lg:top-24 lg:self-start">
              <div>
                <div className="hidden lg:block">
                  <TableOfContents sections={post.content} hasFaqs={Boolean(post.faqs?.length)} />
                </div>
                <div className="mt-6 rounded-3xl border border-border bg-background p-6 shadow-sm sm:p-7">
                  {/* Share */}
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Share this article</h3>
                    <div className="mt-4">
                      <ShareBar url={shareUrl} title={post.title} />
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
                    <NewsletterForm />

                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
