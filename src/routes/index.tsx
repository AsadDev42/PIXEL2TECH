import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Cpu,
  LineChart,
  Rocket,
  Search,
  PenTool,
  Code2,
  Send,
  Star,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Pixel2Tech — AI-Powered Systems for Growing Businesses" },
      {
        name: "description",
        content:
          "Pixel2Tech builds AI-forward technology, branding, and websites that help modern businesses design, develop and grow.",
      },
      { property: "og:title", content: "Pixel2Tech — Design. Develop. Grow." },
      {
        property: "og:description",
        content:
          "Technology partners focused on business growth. AI systems, branding, and web that scale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const ACCENT = "text-[#1E90FF]";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-8 w-8 rotate-45 bg-[#1E90FF]">
        <div className="absolute inset-1 bg-background" />
        <div className="absolute inset-2 bg-[#1E90FF]" />
      </div>
      <div className="leading-none">
        <div className="text-lg font-extrabold tracking-tight text-foreground">
          PIXEL<span className={ACCENT}>2</span>TECH
        </div>
        <div className="text-[9px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Design · Develop · Grow
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#work" className="hover:text-foreground">Work</a>
          <a href="#process" className="hover:text-foreground">Process</a>
          <a href="#insights" className="hover:text-foreground">Insights</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90 md:inline-block"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-24">
      <div className="max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3 w-3 text-[#1E90FF]" /> AI-Forward Studio · Est. 2024
        </div>
        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl">
          Growing Businesses Don't Need More Tools. They Need{" "}
          <span className={ACCENT}>AI-Powered Systems</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          We partner with ambitious teams to design brand identities, ship
          production websites, and integrate intelligent systems that compound
          growth — not complexity.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background hover:opacity-90"
          >
            Start a Project <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted"
          >
            See Our Work
          </a>
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-sm font-semibold text-foreground">
          Brands That Trust Pixel2Tech
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Startups, agencies, and product teams building the next generation.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-xl font-bold tracking-tight text-muted-foreground/70">
          <span>OVAL</span>
          <span className="italic">Nimbus</span>
          <span>◆ Kite</span>
          <span>NORTH/</span>
          <span>lumen.</span>
          <span>QUARK</span>
        </div>
      </div>
    </section>
  );
}

function PartnerBand() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="relative overflow-hidden rounded-2xl bg-[#0B0B0B] px-8 py-14 text-white md:px-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Technology
              <br />
              Partners
              <br />
              Focused on
              <br />
              <span className={ACCENT}>Business Growth</span>
            </h2>
            <p className="mt-6 max-w-md text-sm text-white/70">
              We work as an embedded partner — not a vendor. From strategy to
              launch, our team ships measurable outcomes for founders and
              marketing leaders.
            </p>
            <div className="mt-6 text-xs uppercase tracking-widest text-white/50">
              — Arjun Mehta, Founder
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -top-4 right-4 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black shadow-lg">
              <div className="text-[10px] font-medium text-muted-foreground">
                AVAILABLE FOR
              </div>
              Q1 Projects
            </div>
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-[#1E90FF] text-6xl font-black text-white">
              AM
            </div>
            <div className="absolute bottom-2 right-8 rounded-md bg-white px-3 py-2 text-xs font-semibold text-black shadow-lg">
              Book a Call →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: PenTool,
    title: "Brand & Identity",
    desc: "Distinctive visual systems, logotypes, and guidelines that scale from pitch deck to product.",
  },
  {
    icon: Code2,
    title: "Website & Product",
    desc: "Production-grade websites and web apps built with modern stacks and conversion in mind.",
  },
  {
    icon: Cpu,
    title: "AI Systems",
    desc: "Custom automations, agents, and integrations that eliminate busywork across your stack.",
  },
];

const outcomes = [
  {
    stat: "Higher Conversions",
    desc: "Landing systems engineered around one goal: qualified pipeline.",
  },
  {
    stat: "Faster Ship Cycles",
    desc: "Design and engineering under one roof — no handoff tax.",
  },
  {
    stat: "Owned IP",
    desc: "You own every asset, every repo, every model prompt we deliver.",
  },
];

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-28">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Everything You Need to <span className={ACCENT}>Build & Grow</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          One team. Three disciplines. Zero silos.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-border p-8 transition hover:border-foreground/30 hover:shadow-lg"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E90FF]/10">
              <s.icon className="h-6 w-6 text-[#1E90FF]" />
            </div>
            <h3 className="text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 grid gap-8 border-t border-border pt-16 md:grid-cols-3">
        {outcomes.map((o) => (
          <div key={o.stat} className="text-center">
            <div className="text-sm font-bold uppercase tracking-widest text-foreground">
              {o.stat}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{o.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const works = [
  { name: "Nimbus Cloud", tag: "SaaS · Rebrand", color: "bg-gradient-to-br from-blue-500 to-indigo-700" },
  { name: "Oval Wellness", tag: "DTC · Website", color: "bg-gradient-to-br from-emerald-400 to-teal-700" },
  { name: "Kite Finance", tag: "Fintech · Product", color: "bg-gradient-to-br from-orange-400 to-rose-600" },
  { name: "North Labs", tag: "AI · System", color: "bg-gradient-to-br from-slate-700 to-slate-900" },
];

function Work() {
  return (
    <section id="work" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Work That Helps <span className={ACCENT}>Brands Grow</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            A selection of recent partnerships and product launches.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {works.map((w) => (
            <div key={w.name} className="group cursor-pointer overflow-hidden rounded-2xl bg-background shadow-sm">
              <div className={`h-64 ${w.color} transition group-hover:scale-[1.02]`} />
              <div className="flex items-center justify-between p-5">
                <div>
                  <div className="font-bold">{w.name}</div>
                  <div className="text-xs text-muted-foreground">{w.tag}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: Search, title: "Discover", desc: "Deep-dive audit into your brand, tech and audience." },
  { icon: PenTool, title: "Design", desc: "Systems and prototypes that solve real problems." },
  { icon: Code2, title: "Build", desc: "Ship fast, ship polished — with weekly demos." },
  { icon: Rocket, title: "Launch & Grow", desc: "Iterate with analytics, AI, and honest data." },
];

function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">How We Work</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A tight four-step process. No mystery, no scope creep.
        </p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.title} className="rounded-xl border border-border p-6 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
              <s.icon className="h-4 w-4" />
            </div>
            <div className="text-xs font-semibold text-muted-foreground">STEP {i + 1}</div>
            <div className="mt-1 font-bold">{s.title}</div>
            <p className="mt-2 text-xs text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Pixel2Tech shipped our rebrand and new site in six weeks. Pipeline doubled the following quarter.",
    name: "Priya Shah",
    role: "CMO, Nimbus",
  },
  {
    quote:
      "The AI workflows they built save my ops team roughly 20 hours a week. It paid for itself in month one.",
    name: "Daniel Cho",
    role: "COO, Kite Finance",
  },
  {
    quote:
      "A true partner. Sharp taste, sharper engineering. Feels like an in-house team without the overhead.",
    name: "Maya Fernandes",
    role: "Founder, Oval",
  },
];

function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          What Our Clients Say
        </h2>
        <a
          href="#contact"
          className="hidden rounded-md bg-foreground px-4 py-2 text-xs font-semibold text-background md:inline-block"
        >
          Become a Client
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl border border-border bg-muted/30 p-6">
            <div className="flex gap-1 text-[#1E90FF]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground">"{t.quote}"</p>
            <div className="mt-6 text-sm font-semibold">{t.name}</div>
            <div className="text-xs text-muted-foreground">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExpertsBand() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 rounded-2xl bg-background p-10 shadow-sm md:grid-cols-2 md:p-14">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Experts in Technology, AI & Digital Innovation
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Follow along for essays, teardowns and case studies from the
              Pixel2Tech team.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-muted"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["AI Trends", "Web Craft", "Brand Studio", "Case Study"].map((t) => (
              <div key={t} className="rounded-xl bg-[#0B0B0B] p-5 text-white">
                <div className="text-xs uppercase tracking-widest text-white/60">Series</div>
                <div className="mt-2 font-bold">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const insights = [
  {
    date: "Mar 12, 2025",
    title: "Why Modern Brands Need an AI Ops Layer",
  },
  {
    date: "Feb 24, 2025",
    title: "Rebrand vs. Refresh: A Founder's Decision Framework",
  },
  {
    date: "Feb 03, 2025",
    title: "Shipping Websites That Convert — A 10-Point Audit",
  },
];

function Insights() {
  return (
    <section id="insights" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Latest Insights</h2>
        <a
          href="#"
          className="rounded-md border border-border px-4 py-2 text-xs font-semibold hover:bg-muted"
        >
          View All
        </a>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {insights.map((p) => (
          <a
            key={p.title}
            href="#"
            className="group rounded-xl border border-border bg-muted/30 p-6 transition hover:border-foreground/30"
          >
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              {p.date}
            </div>
            <div className="mt-3 text-base font-semibold group-hover:text-[#1E90FF]">
              {p.title}
            </div>
            <div className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-foreground">
              Read <ArrowRight className="h-3 w-3" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-2xl border border-border bg-muted/30 p-8 md:p-12">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Ready to <span className={ACCENT}>Grow Your Brand?</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Tell us about your project. We'll get back within one business day.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid gap-4 md:grid-cols-2"
        >
          <input
            placeholder="Your name"
            className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
          />
          <input
            placeholder="Email address"
            className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
          />
          <textarea
            rows={4}
            placeholder="What are you building?"
            className="md:col-span-2 rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground"
          />
          <button
            type="submit"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background hover:opacity-90"
          >
            Send Message <Send className="h-4 w-4" />
          </button>
        </form>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          Ready to Get Started?
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Book a free 30-minute strategy call with our founder.
        </p>
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#1E90FF] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          Schedule Call <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            An independent studio building brands, websites and AI systems for
            modern businesses.
          </p>
        </div>
        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-widest">Services</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Brand Identity</li>
            <li>Websites</li>
            <li>AI Systems</li>
            <li>Consulting</li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-widest">Company</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>About</li>
            <li>Work</li>
            <li>Insights</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs font-bold uppercase tracking-widest">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-3 w-3" /> hello@pixel2tech.com</li>
            <li className="flex items-center gap-2"><Phone className="h-3 w-3" /> +1 (415) 555-0142</li>
            <li className="flex items-center gap-2"><MapPin className="h-3 w-3" /> Remote · Worldwide</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Pixel2Tech. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <LineChart className="h-3 w-3 text-[#1E90FF]" />
            Branding & Identity · Website
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <PartnerBand />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <ExpertsBand />
      <Insights />
      <ContactForm />
      <Footer />
    </div>
  );
}
