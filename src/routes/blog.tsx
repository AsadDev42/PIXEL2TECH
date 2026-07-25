import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog — Pixel2Tech" },
      { name: "description", content: "Tips, trends and thought leadership on branding, AI and modern web from the Pixel2Tech team." },
      { property: "og:title", content: "Blog — Pixel2Tech" },
      { property: "og:description", content: "Insights on branding, AI and modern web." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

const posts = [
  { tag: "AI", date: "June 22, 2026", title: "How AI is Changing Modern Branding", excerpt: "The tools have changed. The principles haven't. Here's how we blend both.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&fm=webp&q=70" },
  { tag: "Web", date: "April 5, 2026", title: "Why Every Business Needs a Modern Website in 2026", excerpt: "A 10-point audit to figure out if your website is helping or hurting.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&fm=webp&q=70" },
  { tag: "Brand", date: "April 5, 2026", title: "The Power of Good Branding for Business Growth", excerpt: "Why a strong brand system compounds every marketing dollar you spend.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&fm=webp&q=70" },
  { tag: "Growth", date: "March 12, 2026", title: "Rebrand vs. Refresh: A Founder's Decision Framework", excerpt: "Not sure whether to rebrand? Answer these five questions first.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&fm=webp&q=70" },
  { tag: "AI", date: "February 24, 2026", title: "Why Modern Brands Need an AI Ops Layer", excerpt: "The teams that win in the next 5 years will run on AI-native workflows.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop&fm=webp&q=70" },
  { tag: "Design", date: "January 30, 2026", title: "Design Systems for Small Teams", excerpt: "You don't need Google's budget to have Google's consistency.", img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&auto=format&fit=crop&fm=webp&q=70" },
];

function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <PageShell>
      <PageHeader
        eyebrow="LATEST INSIGHTS"
        title="Ideas, essays &"
        highlight="case studies"
        subtitle="Tips, trends, and thought leadership from the Pixel2Tech team."
      />

      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 sm:pb-12">
        <div className="grid gap-6 rounded-2xl bg-muted p-5 sm:gap-8 sm:rounded-3xl sm:p-6 md:grid-cols-2 md:p-8">
          <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-300">
            <img loading="lazy" decoding="async" src={featured.img} alt={featured.title} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:gap-4">
              <span className="rounded-full bg-[#1E90FF]/10 px-2.5 py-1 font-semibold text-[#1E90FF]">
                {featured.tag}
              </span>
              <span>{featured.date}</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:mt-4 sm:text-3xl lg:text-[36px]">
              {featured.title}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">{featured.excerpt}</p>
            <a href="#" className="mt-5 inline-flex min-h-11 w-fit items-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90 sm:mt-6">
              Read Article
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <a key={p.title} href="#" className="block rounded-3xl bg-muted p-3 transition hover:bg-neutral-200/60 sm:p-4">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-300">
                <img loading="lazy" decoding="async" src={p.img} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:mt-5 sm:gap-4">
                <span>{p.tag}</span><span>{p.date}</span>
              </div>
              <div className="mt-3 text-base font-semibold leading-snug text-foreground sm:text-lg">{p.title}</div>
              <div className="mt-2 pb-3 text-sm text-muted-foreground">{p.excerpt}</div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

