import { createFileRoute } from "@tanstack/react-router";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Plus,
  TrendingUp,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Pixel2Tech — Design. Develop. Grow." },
      {
        name: "description",
        content:
          "Pixel2Tech is an AI-powered creative agency. Branding, web, marketing, motion and AI solutions.",
      },
      { property: "og:title", content: "Pixel2Tech — Design. Develop. Grow." },
      {
        property: "og:description",
        content:
          "AI-powered creative agency for branding, web design, marketing and automation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const BLUE = "#1E90FF";

// ---------- shared ----------
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex h-9 w-9 items-center justify-center">
        <div className="absolute inset-0 rotate-45 bg-black" />
        <div className="absolute inset-[6px] rotate-45 bg-white" />
        <div className="absolute inset-[10px] rotate-45 bg-[color:var(--p2t-blue)]" />
      </div>
      <div className="leading-none">
        <div className="text-[22px] font-extrabold tracking-tight text-black">
          PIXEL<span className="text-[color:var(--p2t-blue)]">2</span>TECH
        </div>
        <div className="mt-1 text-[9px] font-medium tracking-[0.15em] text-neutral-500">
          Design. Develop. Grow.
        </div>
      </div>
    </div>
  );
}

function Nav() {
  const items = ["Home", "About Us", "Services", "Portfolio", "Blog", "Contact"];
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <Logo />
        <nav className="hidden items-center gap-10 text-[15px] font-medium text-black md:flex">
          {items.map((n, i) => (
            <a
              key={n}
              href="#"
              className={`relative ${i === 0 ? "font-semibold" : ""}`}
            >
              {n}
              {i === 0 && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-black" />
              )}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}

// ---------- hero ----------
const heroImgs = [
  "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=600&auto=format&fit=crop",
];

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-8 py-16 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-[56px] font-bold leading-[1.05] tracking-tight text-black">
            Growing Businesses Don't Need More Tools. They Need{" "}
            <span className="text-[color:var(--p2t-blue)]">AI-Powered Systems</span>
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-neutral-600">
            We help businesses automate workflows, build scalable software, and
            create seamless digital experiences that improve efficiency, customer
            experience, and growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90"
            >
              Book a Free Strategy Call
            </a>
            <a
              href="#work"
              className="rounded-full border border-black bg-white px-6 py-3.5 text-sm font-semibold text-black hover:bg-neutral-50"
            >
              View Our Work
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {heroImgs.map((src, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl bg-neutral-100 ${
                i % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/4] mt-8"
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- brands ----------
function Brands() {
  const brands = ["PUBLISH AND PROSPER", "AchhSoft", "LOCKS & CO", "CA"];
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
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-6 text-xl font-bold tracking-tight text-neutral-400">
          {brands.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- partner band ----------
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
              <TrendingUp className="h-4 w-4 text-[color:var(--p2t-blue)]" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-black">
                Trusted Technology Partner
              </div>
              <div className="mt-0.5 flex items-center gap-1 text-xs text-neutral-500">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-black">4.9</span> (1520
                Reviews)
              </div>
            </div>
          </div>
          <div className="mt-10 h-[360px] w-[360px] overflow-hidden rounded-full bg-[color:var(--p2t-blue)]">
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

// ---------- services ----------
const services = [
  {
    title: "Branding & Design",
    desc: "Logo design, brand style, colors, guidelines. We help you look professional and stand out.",
    emoji: "🏆",
  },
  {
    title: "Website Development",
    desc: "Modern, fast, and mobile-friendly websites that convert visitors into customers.",
    emoji: "🌐",
  },
  {
    title: "Digital Marketing",
    desc: "Clean and simple designs that improve user experience and increase sales.",
    emoji: "📈",
  },
  {
    title: "Social Media & Content",
    desc: "Creative posts, content ideas, and strategies that build authority and attract leads.",
    emoji: "📣",
  },
  {
    title: "Motion & Video",
    desc: "Reels, ads, and brand videos that grab attention.",
    emoji: "🎬",
  },
  {
    title: "AI Solutions",
    desc: "Smart tools and automation to save time and improve business performance.",
    emoji: "🤖",
  },
];

function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <h2 className="text-[44px] font-bold tracking-tight text-black">
            Everything You Need to{" "}
            <span className="relative text-[color:var(--p2t-blue)]">
              Build &amp; Grow
              <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-[color:var(--p2t-blue)]/30" />
            </span>
          </h2>
          <p className="mt-3 text-[15px] text-neutral-600">
            One team. All your creative and digital needs.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition hover:shadow-md"
            >
              <div className="text-5xl">{s.emoji}</div>
              <h3 className="mt-6 text-lg font-bold text-black">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- work ----------
const work = [
  {
    title: "Web design and development",
    img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=900&auto=format&fit=crop",
  },
  {
    title: "UI UX designing",
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=900&auto=format&fit=crop",
  },
  {
    title: "Logo and branding",
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&auto=format&fit=crop",
  },
  {
    title: "Concept creation",
    img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=900&auto=format&fit=crop",
  },
];

function Work() {
  return (
    <section id="work" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="text-[44px] font-bold tracking-tight text-black">
          Work That Helps{" "}
          <span className="relative text-[color:var(--p2t-blue)]">
            Brands Grow
            <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-[color:var(--p2t-blue)]/30" />
          </span>
        </h2>
        <p className="mt-2 text-[15px] text-neutral-600">
          One team. All your creative and digital needs.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {work.map((w) => (
            <div
              key={w.title}
              className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-900"
            >
              <img
                src={w.img}
                alt={w.title}
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-x-0 top-0 p-5 text-center text-lg font-semibold text-white drop-shadow">
                {w.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- testimonials ----------
const testimonials = [
  {
    quote:
      "The UI UX work was clean, modern, and focused on conversions. Our product now looks premium and investor ready.",
    name: "Daniel Brooks",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop",
  },
  {
    quote:
      "We hired Pixel2Tech for white label work. Their quality and communication are excellent. It feels like having an in house creative team.",
    name: "Dora Pelosi",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop",
  },
  {
    quote:
      "Our social media engagement improved within weeks. Their strategy is smart and practical, not just random posting.",
    name: "Choisy Catherine",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop",
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-3 inline-flex h-5 w-5 items-center justify-center rounded-full border border-black">
              <div className="h-1.5 w-1.5 rounded-full bg-black" />
            </div>
            <h2 className="text-[44px] font-bold tracking-tight text-black">
              What Our Clients Say
            </h2>
            <p className="mt-2 text-[15px] text-neutral-600">
              Pixel2Tech helped us completely improve our brand. We started
              getting better clients
            </p>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90"
          >
            Let's Build Your Success Story
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="overflow-hidden rounded-3xl bg-neutral-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-3xl font-black text-black">"</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  {t.quote}
                </p>
                <div className="mt-6 text-right text-sm font-bold text-black">
                  {t.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- team ----------
const team = [
  {
    name: "Usama Farooq",
    role: "CEO & Founder",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop",
  },
  {
    name: "Asad Farooq",
    role: "Co Founder & Creative Director",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop",
  },
  {
    name: "Gul E Zahra",
    role: "Creative Brand Designer",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop",
  },
  {
    name: "Saad",
    role: "Creative Video Editor",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop",
  },
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
            Our team combines expertise in software development, AI, automation,
            digital products, and customer experience.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
            We work together to solve complex business challenges and build
            technology solutions that create measurable impact.
          </p>
          <div className="mt-8 flex gap-8">
            <button className="flex items-center gap-3 text-sm font-semibold text-black">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                <Plus className="h-4 w-4" />
              </span>
              Contact Us
            </button>
            <button className="flex items-center gap-3 text-sm font-semibold text-black">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                <Plus className="h-4 w-4" />
              </span>
              All Teams
            </button>
          </div>
          <div className="mt-10 aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-300">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop"
              alt="Pixel2Tech office"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {team.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-neutral-200">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover grayscale"
                />
              </div>
              <div className="mt-4 text-lg font-bold text-black">{m.name}</div>
              <div className="text-sm text-neutral-500">{m.role}</div>
              <div className="mt-3 flex gap-2">
                {[Facebook, Twitter, Linkedin].map((I, i) => (
                  <span
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-md bg-white shadow ring-1 ring-neutral-200"
                  >
                    <I className="h-3.5 w-3.5 text-black" />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- insights ----------
const posts = [
  {
    tag: "Creative",
    date: "June 22, 2026",
    title: "How AI is Changing Modern Branding",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop",
  },
  {
    tag: "Creative",
    date: "April 5, 2026",
    title: "Why Every Business Needs a Modern Website in 2026",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop",
  },
  {
    tag: "Creative",
    date: "April 5, 2026",
    title: "The Power of Good Branding for Business Growth",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop",
  },
];

function Insights() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-[44px] font-bold tracking-tight text-black">
              Latest Insights
            </h2>
            <p className="mt-2 text-[15px] text-neutral-600">
              Tips, trends, and thought leadership from the Pixel2Tech team.
            </p>
          </div>
          <a
            href="#"
            className="rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90"
          >
            Read Our Articles
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <a
              key={p.title}
              href="#"
              className="rounded-3xl bg-neutral-100 p-4 transition hover:bg-neutral-200/60"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-300">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="mt-5 flex items-center gap-4 text-xs text-neutral-500">
                <span>{p.tag}</span>
                <span>{p.date}</span>
              </div>
              <div className="mt-3 pb-4 text-lg font-semibold leading-snug text-black">
                {p.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- contact ----------
function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="rounded-3xl bg-neutral-100 p-10 md:p-16">
          <h2 className="text-[44px] font-bold tracking-tight text-black">
            Ready to{" "}
            <span className="relative text-[color:var(--p2t-blue)]">
              Grow Your Brand?
              <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-black/10" />
            </span>
          </h2>
          <p className="mt-2 text-[15px] text-neutral-600">
            Tell us about your project and goals. Let's build something great
            together.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 grid gap-6 md:grid-cols-2"
          >
            {[
              ["First Name", "text"],
              ["Last Name", "text"],
              ["Email", "email"],
              ["Phone", "tel"],
            ].map(([label, type]) => (
              <input
                key={label}
                type={type}
                placeholder={label}
                className="border-0 border-b border-neutral-400 bg-transparent px-1 py-3 text-sm text-black placeholder:text-neutral-500 outline-none focus:border-black"
              />
            ))}
            <textarea
              rows={3}
              placeholder="Message"
              className="md:col-span-2 border-0 border-b border-neutral-400 bg-transparent px-1 py-3 text-sm text-black placeholder:text-neutral-500 outline-none focus:border-black"
            />
            <button
              type="submit"
              className="mt-4 w-fit rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white hover:opacity-90"
            >
              Get in Touch
            </button>
          </form>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-[44px] font-bold tracking-tight text-black">
            Ready to Get Started?
          </h3>
          <p className="mt-2 text-[15px] text-neutral-600">
            Contact us today and let's discuss how we can help grow your brand.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-sm text-black">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> sales@pixel2tech.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +92 317 7475233
            </span>
          </div>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white hover:opacity-90"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- footer ----------
function Footer() {
  const quick = ["About", "Services", "Portfolios", "Blog", "Contact"];
  const svc = ["Branding", "Web Design", "UI UX", "Social Media", "AI Solutions"];
  return (
    <footer className="bg-neutral-100">
      <div className="mx-auto max-w-7xl px-8 pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-neutral-600">
              Leading AI-Powered Creative Agency from Pakistan serving clients
              worldwide.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-black hover:bg-white"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-lg font-bold text-black">Quick Links</div>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700">
              {quick.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-lg font-bold text-black">Services</div>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700">
              {svc.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-lg font-bold text-black">Contact</div>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700">
              <li>sales@pixel2tech.com</li>
              <li>Pakistan Based, Serving Worldwide</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-300 pt-6 text-center text-xs text-neutral-600">
          © {new Date().getFullYear()} Pixel2Tech. All rights reserved.
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap bg-neutral-100 pb-6">
        <div className="text-[92px] font-black leading-none tracking-tighter text-neutral-200">
          <span className="text-[color:var(--p2t-blue)]">✳</span> Website Design
          &amp; Development <span className="text-[color:var(--p2t-blue)]">✳</span>{" "}
          Branding &amp; Identity
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div
      className="min-h-screen bg-white text-black"
      style={{ ["--p2t-blue" as string]: BLUE }}
    >
      <Nav />
      <Hero />
      <Brands />
      <PartnerBand />
      <Services />
      <Work />
      <Testimonials />
      <Team />
      <Insights />
      <Contact />
      <Footer />
    </div>
  );
}
