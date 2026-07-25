import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { VideoTestimonials } from "@/components/video-testimonials";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { Plus, TrendingUp, Star } from "lucide-react";


export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Pixel2Tech — Design. Develop. Grow." },
      {
        name: "description",
        content:
          "AI-powered creative agency. Branding, web design, marketing, motion and AI solutions that help businesses grow.",
      },
      { property: "og:title", content: "Pixel2Tech — Design. Develop. Grow." },
      {
        property: "og:description",
        content:
          "AI-powered creative agency for branding, web design, marketing and automation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const heroCols: string[][] = [
  [
    "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550439062-609e1531270e?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop",
  ],
  [
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop",
  ],
  [
    "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop",
  ],
];

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-8 py-16 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-[56px] font-bold leading-[1.05] tracking-tight text-black">
            Growing Businesses Don't Need More Tools. They Need{" "}
            <span className="text-[#1E90FF]">AI-Powered Systems</span>
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-neutral-600">
            We help businesses automate workflows, build scalable software, and
            create seamless digital experiences that improve efficiency,
            customer experience, and growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90"
            >
              Book a Free Strategy Call
            </Link>
            <Link
              to="/portfolio"
              className="rounded-full border border-black bg-white px-6 py-3.5 text-sm font-semibold text-black hover:bg-neutral-50"
            >
              View Our Work
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
          {heroCols.map((col, ci) => {
            const loop = [...col, ...col];
            const dir = ci % 2 === 0 ? "hero-col-up" : "hero-col-down";
            return (
              <div
                key={ci}
                className="relative h-[520px] overflow-hidden"
              >
                <div className={`flex flex-col gap-3 ${dir}`}>
                  {loop.map((src, i) => (
                    <div
                      key={i}
                      className="aspect-[3/4] shrink-0 overflow-hidden rounded-2xl bg-neutral-100"
                    >
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function Brands() {
  const brands = [
    { slug: "google", name: "Google" },
    { slug: "microsoft", name: "Microsoft" },
    { slug: "shopify", name: "Shopify" },
    { slug: "stripe", name: "Stripe" },
    { slug: "airbnb", name: "Airbnb" },
    { slug: "spotify", name: "Spotify" },
    { slug: "slack", name: "Slack" },
    { slug: "notion", name: "Notion" },
    { slug: "figma", name: "Figma" },
    { slug: "netflix", name: "Netflix" },
    { slug: "adobe", name: "Adobe" },
    { slug: "amazon", name: "Amazon" },
    { slug: "uber", name: "Uber" },
    { slug: "linkedin", name: "LinkedIn" },
    { slug: "meta", name: "Meta" },
    { slug: "tesla", name: "Tesla" },
    { slug: "apple", name: "Apple" },
    { slug: "github", name: "GitHub" },
    { slug: "openai", name: "OpenAI" },
    { slug: "x", name: "X" },
  ];
  // Duplicate list so translateX(-50%) creates a seamless right→left loop
  const loop = [...brands, ...brands];
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-black">
          Brands That Trust Pixel2Tech
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[15px] text-neutral-600">
          We work with startups, businesses, and founders who want to grow
          faster. From Pakistan to the world.
        </p>
      </div>
      <div className="marquee-viewport edge-fade-x mt-10 overflow-hidden">
        <div className="marquee-track slow items-center gap-16 pr-16" role="list" aria-label="Brands that trust Pixel2Tech">
          {loop.map((b, i) => {
            const isDup = i >= brands.length;
            return (
              <img
                key={`${b.slug}-${i}`}
                src={`https://cdn.simpleicons.org/${b.slug}/000000`}
                alt={isDup ? "" : `${b.name} logo`}
                aria-hidden={isDup || undefined}
                role={isDup ? "presentation" : "listitem"}
                title={b.name}
                loading="lazy"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  if (!el.dataset.fallback) {
                    el.dataset.fallback = "1";
                    el.src = `https://logo.clearbit.com/${b.slug}.com`;
                  } else {
                    el.style.display = "none";
                  }
                }}
                className="h-9 w-auto shrink-0 object-contain opacity-70 transition hover:opacity-100 sm:h-10"
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

function PartnerBand() {
  return (
    <section className="bg-black">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-8 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-[54px] font-bold leading-[1.05] tracking-tight text-white">
            Technology Partners Focused on Business Growth
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-neutral-400">
            We help businesses grow with smart digital solutions. Our mission is
            to turn ideas into impactful brands and technology that drive real
            results.
          </p>
          <div className="mt-8 text-sm text-neutral-500">— Pixel2Tech Team</div>
        </div>
        <div className="relative mx-auto">
          <div className="absolute -top-2 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-lg">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black">
              <TrendingUp className="h-4 w-4 text-[#1E90FF]" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-black">
                Trusted Technology Partner
              </div>
              <div className="mt-0.5 flex items-center gap-1 text-xs text-neutral-500">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-black">4.9</span> (1520 Reviews)
              </div>
            </div>
          </div>
          <div className="mt-10 h-[360px] w-[360px] overflow-hidden rounded-full bg-[#1E90FF]">
            <img
              src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=800&auto=format&fit=crop"
              alt="Founder"
              className="h-full w-full object-cover mix-blend-luminosity"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { title: "Branding & Design", desc: "Logo design, brand style, colors, guidelines. We help you look professional and stand out.", emoji: "🏆" },
  { title: "Website Development", desc: "Modern, fast, and mobile-friendly websites that convert visitors into customers.", emoji: "🌐" },
  { title: "Digital Marketing", desc: "Clean and simple designs that improve user experience and increase sales.", emoji: "📈" },
  { title: "Social Media & Content", desc: "Creative posts, content ideas, and strategies that build authority and attract leads.", emoji: "📣" },
  { title: "Motion & Video", desc: "Reels, ads, and brand videos that grab attention.", emoji: "🎬" },
  { title: "AI Solutions", desc: "Smart tools and automation to save time and improve business performance.", emoji: "🤖" },
];

function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-[44px] font-bold tracking-tight text-black">
              Everything You Need to{" "}
              <span className="relative text-[#1E90FF]">
                Build &amp; Grow
                <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-[#1E90FF]/30" />
              </span>
            </h2>
            <p className="mt-3 text-[15px] text-neutral-600">
              One team. All your creative and digital needs.
            </p>
          </div>
        </FadeIn>
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <div className="h-full rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-5xl">{s.emoji}</div>
                <h3 className="mt-6 text-lg font-bold text-black">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}

const work = [
  { title: "Web design and development", img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=900&auto=format&fit=crop" },
  { title: "UI UX designing", img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=900&auto=format&fit=crop" },
  { title: "Logo and branding", img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&auto=format&fit=crop" },
  { title: "Concept creation", img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=900&auto=format&fit=crop" },
];

function Work() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <FadeIn>
          <h2 className="text-[44px] font-bold tracking-tight text-black">
            Work That Helps{" "}
            <span className="relative text-[#1E90FF]">
              Brands Grow
              <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-[#1E90FF]/30" />
            </span>
          </h2>
          <p className="mt-2 text-[15px] text-neutral-600">
            One team. All your creative and digital needs.
          </p>
        </FadeIn>
        <Stagger className="mt-10 grid gap-5 md:grid-cols-4">
          {work.map((w) => (
            <StaggerItem key={w.title}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-900 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <img src={w.img} alt={w.title} className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-x-0 top-0 p-5 text-center text-lg font-semibold text-white drop-shadow">
                  {w.title}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}

const team = [
  { name: "Usama Farooq", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop" },
  { name: "Asad Farooq", role: "Co Founder & Creative Director", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop" },
  { name: "Gul E Zahra", role: "Creative Brand Designer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop" },
  { name: "Saad", role: "Creative Video Editor", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop" },
];

function Team() {
  return (
    <section className="bg-neutral-100 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-8 md:grid-cols-2">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            OUR CREATIVE TEAM
          </div>
          <h2 className="mt-4 text-[44px] font-bold leading-tight tracking-tight text-black">
            Experts in Technology, AI &amp; Digital Innovation
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-neutral-600">
            Our team combines expertise in software development, AI, automation, digital products, and customer experience.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
            We work together to solve complex business challenges and build technology solutions that create measurable impact.
          </p>
          <div className="mt-8 flex gap-8">
            <Link to="/contact" className="flex items-center gap-3 text-sm font-semibold text-black">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                <Plus className="h-4 w-4" />
              </span>
              Contact Us
            </Link>
            <Link to="/about" className="flex items-center gap-3 text-sm font-semibold text-black">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                <Plus className="h-4 w-4" />
              </span>
              All Teams
            </Link>
          </div>
          <div className="mt-10 aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-300">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop" alt="Office" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-neutral-200">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover grayscale" />
              </div>
              <div className="mt-4 text-lg font-bold text-black">{m.name}</div>
              <div className="text-sm text-neutral-500">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const posts = [
  { tag: "Creative", date: "June 22, 2026", title: "How AI is Changing Modern Branding", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop" },
  { tag: "Creative", date: "April 5, 2026", title: "Why Every Business Needs a Modern Website in 2026", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop" },
  { tag: "Creative", date: "April 5, 2026", title: "The Power of Good Branding for Business Growth", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop" },
];

function Insights() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-[44px] font-bold tracking-tight text-black">Latest Insights</h2>
            <p className="mt-2 text-[15px] text-neutral-600">Tips, trends, and thought leadership from the Pixel2Tech team.</p>
          </div>
          <Link to="/blog" className="rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90">
            Read Our Articles
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.title} to="/blog" className="rounded-3xl bg-neutral-100 p-4 transition hover:bg-neutral-200/60">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-300">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="mt-5 flex items-center gap-4 text-xs text-neutral-500">
                <span>{p.tag}</span><span>{p.date}</span>
              </div>
              <div className="mt-3 pb-4 text-lg font-semibold leading-snug text-black">{p.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Brands />
      <PartnerBand />
      <Services />
      <Work />
      <VideoTestimonials />
      <Team />
      <Insights />
    </PageShell>
  );
}
