import { MediaImage } from "@/components/media-image";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Layers, Sparkles, Target, TrendingUp } from "lucide-react";
import { TEAM } from "@/lib/team";

/** The CEO card; empty while that profile is hidden. */
const CEO = TEAM.filter((person) => person.profile === "/usama-farooq");

const REASONS = [
  {
    title: "One brief for every discipline",
    body: "Brand, web, video and automation work from the same brief, so everyone involved can see your goals and approved direction.",
    Icon: Sparkles,
  },
  {
    title: "Designers and developers review together",
    body: "They go through layouts, interactions and content together before the build is handed over.",
    Icon: Layers,
  },
  {
    title: "Goals agreed before the work starts",
    body: "We agree what the project needs to achieve and use that brief to guide the work, the review points and the checks before delivery.",
    Icon: Target,
  },
  {
    title: "Plan the next phase",
    body: "We discuss how your team will update the work, which dependencies need an owner and what future improvements belong in a separate phase.",
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
            We work from one brief and a clear plan, across every discipline your project needs.
          </p>
        </div>
        <div className={`mt-10 grid gap-5 ${CEO.length ? "lg:grid-cols-[0.85fr_1.25fr]" : ""}`}>
          {CEO.length ? (
            <div className="grid" aria-label="Pixel2Tech CEO">
              {CEO.map((person) => (
                <Link
                  key={person.name}
                  to={person.profile!}
                  className="group relative isolate block aspect-[4/5] min-h-64 overflow-hidden rounded-[2rem] bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 lg:aspect-auto"
                >
                  <MediaImage
                    src={person.img}
                    alt={person.name}
                    width={600}
                    height={450}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-[center_25%] transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                      <p className="mt-2 text-sm text-white/80">{person.role}</p>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/30 text-white">
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
          <div className={`grid gap-5 sm:grid-cols-2${CEO.length ? "" : " lg:grid-cols-4"}`}>
            {REASONS.map(({ title, body, Icon }, index) => (
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
              </article>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-between gap-4 rounded-2xl border border-border bg-background px-6 py-5 sm:flex-row sm:items-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Bring a focused brief, and we will match it with the right people.
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
