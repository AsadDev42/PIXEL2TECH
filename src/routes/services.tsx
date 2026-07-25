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
  {
    title: "Branding & Design",
    emoji: "🎨",
    accent: "bg-violet-500/15 text-violet-600",
    desc: "Logo, color palette, typography, and brand guidelines that make your business look professional and stand out from day one.",
    tags: ["Logo", "Brand Guide", "UI / UX"],
  },
  {
    title: "Website Development",
    emoji: "🌐",
    accent: "bg-blue-500/15 text-blue-600",
    desc: "Fast, modern, mobile-ready websites that convert visitors into customers — from landing pages to full business sites.",
    tags: ["React", "Next.js", "Custom Code"],
  },
  {
    title: "WordPress & Shopify",
    emoji: "🟢",
    accent: "bg-emerald-500/15 text-emerald-600",
    desc: "Custom WordPress sites and Shopify stores built to sell — with themes, plugins, product pages, and payment flows all set up for you.",
    tags: ["WordPress", "Shopify", "WooCommerce"],
  },
  {
    title: "Custom Platforms & Apps",
    emoji: "🧱",
    accent: "bg-orange-500/15 text-orange-600",
    desc: "Mobile apps, SaaS products, client portals, and dashboards built from scratch to match your exact business needs.",
    tags: ["SaaS", "Mobile App", "Portals"],
  },
  {
    title: "Automation & CRM",
    emoji: "⚙️",
    accent: "bg-cyan-500/15 text-cyan-600",
    desc: "Workflow automation, CRM systems, and third-party integrations that eliminate manual work and keep your business running on its own.",
    tags: ["n8n", "Make", "Zapier", "Custom CRM"],
  },
  {
    title: "AI Solutions",
    emoji: "🧠",
    accent: "bg-fuchsia-500/15 text-fuchsia-600",
    desc: "AI chatbots, voice agents, and RAG systems that automate customer interactions and make your product smarter without extra headcount.",
    tags: ["Chatbots", "RAG", "Voice Agents"],
  },
  {
    title: "SEO & Search Growth",
    emoji: "🔍",
    accent: "bg-green-500/15 text-green-600",
    desc: "On-page SEO, technical audits, and keyword strategy that gets your business ranking on Google and driving consistent organic traffic.",
    tags: ["On-Page SEO", "Technical SEO", "Local SEO"],
  },
  {
    title: "Social Media & Email",
    emoji: "📣",
    accent: "bg-pink-500/15 text-pink-600",
    desc: "Content creation, ad campaigns, email sequences, and newsletter management across all major platforms — handled end to end.",
    tags: ["Instagram", "Facebook Ads", "Mailchimp"],
  },
  {
    title: "Video Editing & Ads",
    emoji: "🎬",
    accent: "bg-red-500/15 text-red-600",
    desc: "Reels, brand videos, YouTube content, and paid ad creatives edited to grab attention and convert across every platform.",
    tags: ["Reels", "YouTube", "Paid Ads"],
  },
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
        <div className="mb-12 text-center">
          <h2 className="text-[40px] font-bold tracking-tight text-black">Our Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-600">
            Everything your business needs to grow online — design, development, marketing, automation, and SEO under one roof.
          </p>
        </div>
        <div className="rounded-3xl bg-neutral-50 p-4 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-6 border border-neutral-200/70">
                <div className="flex items-center gap-3">
                  <div className={`grid h-10 w-10 place-items-center rounded-lg text-lg ${s.accent}`}>{s.emoji}</div>
                  <h3 className="text-lg font-bold text-black">{s.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs text-neutral-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
