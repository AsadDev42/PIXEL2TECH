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
  { tag: "AI", date: "June 22, 2026", title: "How AI is Changing Modern Branding", excerpt: "The tools have changed. The principles haven't. Here's how we blend both.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop" },
  { tag: "Web", date: "April 5, 2026", title: "Why Every Business Needs a Modern Website in 2026", excerpt: "A 10-point audit to figure out if your website is helping or hurting.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop" },
  { tag: "Brand", date: "April 5, 2026", title: "The Power of Good Branding for Business Growth", excerpt: "Why a strong brand system compounds every marketing dollar you spend.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop" },
  { tag: "Growth", date: "March 12, 2026", title: "Rebrand vs. Refresh: A Founder's Decision Framework", excerpt: "Not sure whether to rebrand? Answer these five questions first.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop" },
  { tag: "AI", date: "February 24, 2026", title: "Why Modern Brands Need an AI Ops Layer", excerpt: "The teams that win in the next 5 years will run on AI-native workflows.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop" },
  { tag: "Design", date: "January 30, 2026", title: "Design Systems for Small Teams", excerpt: "You don't need Google's budget to have Google's consistency.", img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&auto=format&fit=crop" },
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

      <section className="mx-auto max-w-7xl px-8 pb-12">
        <div className="grid gap-8 rounded-3xl bg-neutral-100 p-6 md:grid-cols-2 md:p-8">
          <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-300">
            <img src={featured.img} alt={featured.title} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 text-xs text-neutral-500">
              <span className="rounded-full bg-[#1E90FF]/10 px-2.5 py-1 font-semibold text-[#1E90FF]">
                {featured.tag}
              </span>
              <span>{featured.date}</span>
            </div>
            <h2 className="mt-4 text-[36px] font-bold leading-tight tracking-tight text-black">
              {featured.title}
            </h2>
            <p className="mt-3 text-sm text-neutral-600">{featured.excerpt}</p>
            <a href="#" className="mt-6 inline-flex w-fit rounded-full bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90">
              Read Article
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {rest.map((p) => (
            <a key={p.title} href="#" className="rounded-3xl bg-neutral-100 p-4 transition hover:bg-neutral-200/60">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-300">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="mt-5 flex items-center gap-4 text-xs text-neutral-500">
                <span>{p.tag}</span><span>{p.date}</span>
              </div>
              <div className="mt-3 text-lg font-semibold leading-snug text-black">{p.title}</div>
              <div className="mt-2 pb-3 text-sm text-neutral-600">{p.excerpt}</div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
