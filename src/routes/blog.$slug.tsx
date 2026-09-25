import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, ChevronRight, Clock, Folder, RefreshCw, User } from "lucide-react";
import { ResponsiveImage } from "@/components/responsive-image";
import { PageShell } from "@/components/site-chrome";
import { BlogCta } from "@/components/blog-cta";
import { Faq } from "@/components/faq";
import { NewsletterForm } from "@/components/newsletter-form";
import {
  ArticleSection,
  AuthorCard,
  Disclosure,
  InternalLinks,
  KeyTakeaways,
  PrevNextNav,
  QuickVerdict,
  ReadingProgress,
  RelatedArticles,
  ShareBar,
  SourceList,
  TableOfContents,
} from "@/components/blog-reading";
import {
  getAdjacentPostSummaries,
  getRelatedPostSummaries,
  loadPost,
  SITE_LINKS,
} from "@/lib/blog-index";
import { authorProfile, buildBlogSeo } from "@/lib/blog-seo";
import { getReadingMinutes, toISODate } from "@/lib/blog-types";

export const Route = createFileRoute("/blog/$slug")({
  // Only this article's body is downloaded (each post is its own chunk).
  loader: async ({ params }) => {
    const post = await loadPost(params.slug);
    // A slug that does not exist is a genuine 404. Redirecting every unknown
    // slug to /blog would be a soft 404, which Google reports as
    // "Crawled - currently not indexed" instead of dropping the URL.
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found | Pixel2Tech" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const seo = buildBlogSeo(post);
    const optional = (property: string, content: string | undefined) =>
      content ? [{ property, content }] : [];
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
        { property: "article:author", content: seo.authorRef },
        ...optional("article:published_time", seo.published),
        ...optional("article:modified_time", seo.modified),
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
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Article not found</h1>
        <p className="mt-3 text-muted-foreground">
          This article doesn't exist or has moved. The blog lists everything we've published.
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-flex min-h-11 items-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
        >
          Back to the blog
        </Link>
      </div>
    </PageShell>
  ),
  errorComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">This article didn't load</h1>
        <p className="mt-3 text-muted-foreground">Please refresh the page or try again shortly.</p>
        <Link
          to="/blog"
          className="mt-6 inline-flex min-h-11 items-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
        >
          Back to the blog
        </Link>
      </div>
    </PageShell>
  ),
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = getRelatedPostSummaries(post.slug, 4);
  const { previous, next } = getAdjacentPostSummaries(post.slug);
  const shareUrl = `https://pixel2tech.com/blog/${post.slug}`;
  const readingMinutes = getReadingMinutes(post);
  const internalLinks = post.internalLinks?.length ? post.internalLinks : SITE_LINKS;
  const profile = authorProfile(post.author);
  const hasFaqs = Boolean(post.faqs?.length);
  const wasUpdated = Boolean(post.updated && post.updated !== post.date);

  return (
    <PageShell>
      <ReadingProgress />
      <div className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="inline-flex min-h-6 items-center hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-4 w-4" />
              </li>
              <li>
                <Link to="/blog" className="inline-flex min-h-6 items-center hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-4 w-4" />
              </li>
              <li aria-current="page" className="min-w-0 max-w-full truncate text-foreground">
                {post.title}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_320px]">
            <article className="min-w-0">
              <header>
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {post.h1 ?? post.title}
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <li className="inline-flex items-center gap-2">
                    <User className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Written by </span>
                    {profile ? (
                      <Link
                        to={profile.path}
                        rel="author"
                        className="font-medium text-foreground underline-offset-4 hover:underline"
                      >
                        {post.author}
                      </Link>
                    ) : (
                      post.author
                    )}
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <Folder className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Topic: </span>
                    {post.tag}
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Published </span>
                    <time dateTime={toISODate(post.date)}>{post.date}</time>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {readingMinutes} min read
                  </li>
                  {wasUpdated && post.updated ? (
                    <li className="inline-flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" aria-hidden="true" />
                      Updated <time dateTime={toISODate(post.updated)}>{post.updated}</time>
                    </li>
                  ) : null}
                </ul>

                <div className="mt-6 lg:hidden">
                  <ShareBar url={shareUrl} title={post.title} />
                </div>

                <div className="mt-8 aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
                  <ResponsiveImage
                    src={post.img}
                    alt={post.imgAlt ?? ""}
                    width={1600}
                    height={1000}
                    sizes="(min-width: 1280px) 820px, (min-width: 1024px) 66vw, 92vw"
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </header>

              <div className="mt-10 space-y-10">
                {post.disclosure ? <Disclosure>{post.disclosure}</Disclosure> : null}

                {post.keyTakeaways?.length ? <KeyTakeaways items={post.keyTakeaways} /> : null}

                {post.quickVerdict ? <QuickVerdict verdict={post.quickVerdict} /> : null}

                <div className="lg:hidden">
                  <TableOfContents
                    sections={post.content}
                    hasFaqs={hasFaqs}
                    variant="collapsible"
                  />
                </div>

                {post.content.map((section) => (
                  <ArticleSection key={section.heading} section={section} />
                ))}

                {post.sources?.length ? <SourceList sources={post.sources} /> : null}

                {post.faqs?.length ? (
                  <section id="faqs" aria-labelledby="faqs-heading" className="scroll-mt-28">
                    <h2
                      id="faqs-heading"
                      className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                    >
                      Frequently asked questions
                    </h2>
                    <Faq items={post.faqs} className="mt-6" />
                  </section>
                ) : null}

                <AuthorCard
                  author={post.author}
                  role={profile?.role ?? post.authorRole}
                  bio={post.authorBio}
                  profilePath={profile?.path}
                />

                <BlogCta title={post.cta?.title} body={post.cta?.body} source="blog_post" />

                <RelatedArticles posts={related} />

                <InternalLinks links={internalLinks} />

                <section
                  aria-labelledby="newsletter-heading"
                  className="rounded-2xl border border-border bg-background p-5 sm:p-6"
                >
                  <h2
                    id="newsletter-heading"
                    className="text-lg font-bold tracking-tight text-foreground"
                  >
                    Get new articles by email
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Leave your email and we'll send new posts when they're published.
                  </p>
                  <div className="max-w-md">
                    <NewsletterForm />
                  </div>
                </section>

                <PrevNextNav previous={previous} next={next} />
              </div>
            </article>

            {/* Desktop sidebar: only the outline and share links, kept within
                the viewport so every item stays reachable on laptop screens. */}
            <aside className="hidden min-w-0 lg:block" aria-label="Article tools">
              <div className="sticky top-24 max-h-[calc(100dvh-7rem)] space-y-6 overflow-y-auto overscroll-contain pb-2">
                <TableOfContents sections={post.content} hasFaqs={hasFaqs} />
                <section
                  aria-labelledby="share-heading"
                  className="rounded-2xl border border-border bg-background p-5"
                >
                  <h2
                    id="share-heading"
                    className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    Share this article
                  </h2>
                  <div className="mt-3">
                    <ShareBar url={shareUrl} title={post.title} />
                  </div>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
