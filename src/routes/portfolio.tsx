import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio — Pixel2Tech" },
      { name: "description", content: "Selected work from Pixel2Tech across branding, web design, UI UX and AI." },
      { property: "og:title", content: "Portfolio — Pixel2Tech" },
      { property: "og:description", content: "Selected work that helps brands grow." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
});

const work = [
  { title: "Web design and development", tag: "Website", img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "UI UX designing", tag: "Product", img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "Logo and branding", tag: "Brand", img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "Concept creation", tag: "Campaign", img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "Mobile app design", tag: "Product", img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "AI content workflow", tag: "AI", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "Motion & reels", tag: "Video", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&auto=format&fit=crop&fm=webp&q=70" },
  { title: "E-commerce launch", tag: "Website", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&auto=format&fit=crop&fm=webp&q=70" },
];

function PortfolioPage() {
  return (
    <PageShell>
      <PageHeader
        title="Work That Helps"
        highlight="Brands Grow"
        subtitle="A selection of recent projects across branding, web, product and AI."
      />
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((w) => (
            <div key={w.title} className="group cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 sm:rounded-3xl">
              <div className="relative aspect-[4/5]">
                <img loading="lazy" decoding="async" src={w.img} alt={w.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6">
                  <div className="text-[11px] uppercase tracking-widest opacity-70 sm:text-xs">{w.tag}</div>
                  <div className="mt-1 text-base font-semibold sm:text-lg">{w.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-muted p-6 text-center sm:mt-16 sm:rounded-3xl sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[32px]">Want your project featured next?</h2>
          <p className="mt-2 text-sm text-muted-foreground">Let's build something worth sharing.</p>
          <Link to="/contact" className="mt-5 inline-flex min-h-11 items-center rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background hover:opacity-90 sm:mt-6">
            Start a Project
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

