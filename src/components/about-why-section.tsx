import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Layers, Sparkles, Target, TrendingUp } from "lucide-react";
import { TEAM } from "@/lib/team";
import { SITE } from "@/lib/site-config";

const REASONS = [
  {
    title: "One team, one shared brief",
    body: "Brand, web, video and automation work from the same project context. Your goals and approved direction stay visible across the disciplines involved.",
    detail: "Connected from the start",
    Icon: Sparkles,
  },
  {
    title: "Design and development in step",
    body: "Designers and developers review the practical details together, so layouts, interactions and content are considered before the build is handed over.",
    detail: "A considered handover",
    Icon: Layers,
  },
  {
    title: "Decisions with a clear purpose",
    body: "We agree what the project needs to achieve and use that brief to guide the work, the review points and the checks before delivery.",
    detail: "A shared definition of done",
    Icon: Target,
  },
  {
    title: "Plan the next phase",
    body: "We discuss how your team will update the work, which dependencies need an owner and what future improvements belong in a separate phase.",
    detail: "Useful beyond launch",
    Icon: TrendingUp,
  },
];

export function AboutWhySection() {
  return (
    <section
      aria-labelledby="about-values-title"
      className="border-y border-border bg-muted/40 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why Pixel2Tech
            </p>
            <h2
              id="about-values-title"
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Why work with us?
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            A project moves through people, decisions and handovers. We bring the disciplines
            together around one brief and a clear plan for the work.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.85fr_1.25fr]">
          <div className="relative flex flex-col overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-blue-300/15"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-blue-300/10"
            />
            <p className="relative text-xs font-semibold uppercase tracking-widest text-blue-300">
              One studio. One team.
            </p>
            <h3 className="relative mt-6 max-w-sm text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Your project.
              <br />
              <span className="text-blue-300">Our shared focus.</span>
            </h3>
            <p className="relative mt-5 max-w-sm text-sm leading-relaxed text-slate-300">
              Designers, developers and editors working together in {SITE.location}, with a shared
              view of what your project needs next.
            </p>
            <div
              className="relative mt-6 grid grid-cols-4 gap-1 rounded-2xl border border-white/15 bg-white/5 p-3"
              aria-label="From brief to delivery"
            >
              {["Brief", "Create", "Review", "Deliver"].map((label, index) => (
                <span
                  key={label}
                  className="flex items-center justify-between gap-1 text-[10px] font-medium text-slate-200 sm:text-xs"
                >
                  {label}
                  {index < 3 && (
                    <ArrowRight size={12} className="shrink-0 text-blue-300" aria-hidden="true" />
                  )}
                </span>
              ))}
            </div>
            <div className="relative mt-8 grid grid-cols-2 gap-3">
              {TEAM.filter((person) => person.founder).map((person) => (
                <Link
                  key={person.name}
                  to={person.profile!}
                  className="group overflow-hidden rounded-2xl border border-white/15 bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-800">
                    <img
                      src={person.img}
                      alt={person.name}
                      loading="lazy"
                      width={400}
                      height={300}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="px-3 py-3">
                    <span className="flex items-center justify-between gap-1 text-xs font-semibold">
                      {person.name}
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </span>
                    <span className="mt-1 block text-[10px] leading-relaxed text-slate-300">
                      {person.role}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <a
              href="#about-team-title"
              className="relative mt-5 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-blue-200 hover:text-white"
            >
              Meet the whole team <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {REASONS.map(({ title, body, detail, Icon }, index) => (
              <article
                key={title}
                className="flex flex-col rounded-[2rem] border border-border bg-background p-6 sm:p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    aria-hidden="true"
                    className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary"
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-xs font-semibold tracking-widest text-muted-foreground"
                  >
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-snug tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <div className="mt-auto pt-6">
                  <p className="border-t border-border pt-4 text-xs font-medium text-primary">
                    {detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-between gap-4 rounded-2xl border border-border bg-background px-6 py-5 sm:flex-row sm:items-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Bring a focused brief. We will help connect the right people and disciplines.
          </p>
          <Link
            to="/services"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
          >
            Explore our services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
