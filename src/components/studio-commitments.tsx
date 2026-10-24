import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ClipboardCheck, Layers3, Rocket, Users } from "lucide-react";
import { BookCallButton } from "@/components/book-call-button";

const commitments = [
  {
    icon: Users,
    title: "One team, working together",
    text: "Designers, developers and editors working from the same brief. You know who's making your project.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear scope from day one",
    text: "Deliverables, milestones and a written quote. A shared plan before production begins.",
  },
  {
    icon: Layers3,
    title: "Every discipline connected",
    text: "Brand, website, video and automation, with one direction running through the work.",
  },
  {
    icon: Rocket,
    title: "A considered handover",
    text: "We review the work against your brief and agree delivery and support in writing.",
  },
];

export function StudioCommitments() {
  return (
    <section aria-labelledby="home-commitments-title" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            The Pixel2Tech way
          </p>
          <h2
            id="home-commitments-title"
            className="mt-3 text-3xl font-bold tracking-tight md:text-5xl"
          >
            One team. Every detail connected.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From the first conversation to the final handover, you work with the people making it
            happen.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.4fr]">
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white md:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-xs text-blue-200">
                <Users size={15} aria-hidden="true" /> Built around your project
              </span>
              <h3 className="mt-8 max-w-sm text-3xl font-semibold leading-tight md:text-4xl">
                A clear plan.
                <br />
                People you can reach.
                <br />
                <span className="text-blue-300">Work you can see.</span>
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-300">
                Tell us what you're building. We'll talk through the brief, the people and the next
                step.
              </p>
            </div>
            <div className="relative mt-10">
              <BookCallButton
                source="home-commitments"
                className="inline-flex min-h-12 items-center gap-5 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition-colors hover:bg-blue-100"
              >
                Let's talk about your project <ArrowUpRight size={18} aria-hidden="true" />
              </BookCallButton>
              <p className="mt-4 text-xs text-slate-400">
                30 minutes · No hard sell · One clear next step
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {commitments.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-border bg-muted/30 p-6 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <item.icon size={21} aria-hidden="true" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-xs font-medium tabular-nums text-muted-foreground/60"
                  >
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>A person replies within one business day.</p>
          <div className="flex gap-5">
            <Link to="/terms-and-conditions" className="underline underline-offset-4">
              Terms
            </Link>
            <Link to="/privacy-policy" className="underline underline-offset-4">
              Privacy
            </Link>
            <Link to="/for-agencies" className="underline underline-offset-4">
              For agencies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
