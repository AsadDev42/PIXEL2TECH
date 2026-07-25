import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site-chrome";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Pixel2Tech" },
      { name: "description", content: "Meet the Pixel2Tech team. An AI-powered creative agency helping businesses design, develop and grow." },
      { property: "og:title", content: "About — Pixel2Tech" },
      { property: "og:description", content: "Meet the team behind Pixel2Tech." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const team = [
  { name: "Usama Farooq", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&fm=webp&q=70" },
  { name: "Asad Farooq", role: "Co Founder & Creative Director", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&fm=webp&q=70" },
  { name: "Gul E Zahra", role: "Creative Brand Designer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&fm=webp&q=70" },
  { name: "Saad", role: "Creative Video Editor", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&fm=webp&q=70" },
];

const values = [
  { title: "Craft over quantity", desc: "Every pixel, every line of code is intentional." },
  { title: "Outcome over output", desc: "We measure success in the growth of your business." },
  { title: "Partner, not vendor", desc: "We embed with your team and think long term." },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="ABOUT US"
        title="Building brands and technology that"
        highlight="actually grow"
        subtitle="Pixel2Tech is an AI-powered creative agency from Pakistan, serving founders and marketing leaders worldwide."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:gap-10 sm:px-8 sm:py-16 md:grid-cols-2 md:items-center">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 sm:rounded-3xl">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&fm=webp&q=70" alt="Pixel2Tech team at work" className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl lg:text-[36px]">Our story</h2>
          <p className="mt-4 text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]">
            We started Pixel2Tech with a simple belief: growing businesses don't
            need more tools, they need better systems. Since then we've partnered
            with dozens of teams to design brand identities, ship production
            websites, and integrate AI workflows.
          </p>
          <p className="mt-4 text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]">
            Today we're a small, senior team of designers, engineers and
            strategists — with clients across four continents.
          </p>
        </div>
      </section>

      <section className="bg-neutral-100 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-[36px]">What we stand for</h2>
          <div className="mt-6 grid gap-5 sm:mt-8 sm:gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-6 sm:p-8">
                <div className="text-lg font-bold text-black">{v.title}</div>
                <p className="mt-2 text-sm text-neutral-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
          OUR CREATIVE TEAM
        </div>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-[44px]">
          Meet the people behind the work
        </h2>
        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl bg-neutral-100 p-3 sm:p-4">
              <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <img src={m.img} alt={`${m.name} — ${m.role}`} className="h-full w-full object-cover grayscale" />
              </div>
              <div className="mt-3 text-base font-bold text-black sm:mt-4 sm:text-lg">{m.name}</div>
              <div className="text-xs text-neutral-500 sm:text-sm">{m.role}</div>
              <div className="mt-3 flex gap-2">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Linkedin, label: "LinkedIn" },
                ].map(({ Icon, label }) => (
                  <span
                    key={label}
                    aria-label={`${m.name} on ${label}`}
                    role="img"
                    className="flex h-8 w-8 items-center justify-center rounded-md bg-white shadow ring-1 ring-neutral-200"
                  >
                    <Icon className="h-3.5 w-3.5 text-black" aria-hidden="true" />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center sm:mt-12">
          <Link to="/contact" className="inline-flex min-h-11 items-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90">
            Work with us
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

