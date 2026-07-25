import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site-chrome";
import { VideoTestimonials } from "@/components/video-testimonials";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Pixel2Tech" },
      { name: "description", content: "Branding, web development, digital marketing, motion, social media and AI solutions." },
      { property: "og:title", content: "Services — Pixel2Tech" },
      { property: "og:description", content: "Everything you need to build and grow your brand." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  { title: "Branding & Design", emoji: "🏆", desc: "Logo design, brand style, colors, guidelines. We help you look professional and stand out.", bullets: ["Logo & wordmark", "Brand guidelines", "Color & typography systems", "Print collateral"] },
  { title: "Website Development", emoji: "🌐", desc: "Modern, fast, and mobile-friendly websites that convert visitors into customers.", bullets: ["Marketing sites", "E-commerce", "Web apps", "CMS integrations"] },
  { title: "Digital Marketing", emoji: "📈", desc: "Clean and simple designs that improve user experience and increase sales.", bullets: ["SEO", "Paid media", "Landing pages", "Analytics & reporting"] },
  { title: "Social Media & Content", emoji: "📣", desc: "Creative posts, content ideas, and strategies that build authority and attract leads.", bullets: ["Content strategy", "Post design", "Copywriting", "Community management"] },
  { title: "Motion & Video", emoji: "🎬", desc: "Reels, ads, and brand videos that grab attention.", bullets: ["Reels & shorts", "Brand films", "Ads & promos", "Motion graphics"] },
  { title: "AI Solutions", emoji: "🤖", desc: "Smart tools and automation to save time and improve business performance.", bullets: ["Custom agents", "Workflow automation", "Integrations", "Chat & assistants"] },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="WHAT WE DO"
        title="Everything You Need to"
        highlight="Build & Grow"
        subtitle="One team. All your creative and digital needs."
      />

      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-3xl border border-neutral-200 p-10">
              <div className="text-5xl">{s.emoji}</div>
              <h3 className="mt-6 text-2xl font-bold text-black">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{s.desc}</p>
              <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-neutral-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1E90FF]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <VideoTestimonials />

      <section className="mx-auto max-w-4xl px-8 pb-24 text-center">
        <h2 className="text-[36px] font-bold tracking-tight text-black">Have a project in mind?</h2>
        <p className="mt-3 text-sm text-neutral-600">Tell us what you're working on. We'll get back within one business day.</p>
        <Link to="/contact" className="mt-6 inline-block rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90">
          Start a Project
        </Link>
      </section>
    </PageShell>
  );
}
