import { ArrowUpRight, ClipboardCheck, PackageCheck, Route, Users } from "lucide-react";
import { BookCallButton } from "@/components/book-call-button";

const commitments = [
  {
    icon: Users,
    title: "You know who's doing the work",
    text: "Designers, developers and editors work from the same brief.",
  },
  {
    icon: ClipboardCheck,
    title: "The scope is in writing",
    text: "Deliverables, milestones and a written quote before production begins.",
  },
  {
    icon: Route,
    title: "One direction across the work",
    text: "Brand, website, video and automation follow the same plan.",
  },
  {
    icon: PackageCheck,
    title: "Delivery and support are agreed",
    text: "We review the work against your brief and agree both in writing.",
  },
];

export function StudioCommitments() {
  return (
    <section aria-labelledby="home-commitments-title" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <h2
            id="home-commitments-title"
            className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:col-span-7"
          >
            What you can expect from us
          </h2>
          <div className="min-w-0 lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              From the first conversation to the final handover, you work with the people doing the
              work.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <BookCallButton
                source="home-commitments"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Let's talk <ArrowUpRight size={18} aria-hidden="true" />
              </BookCallButton>
              <p className="text-sm text-muted-foreground">We reply within one business day.</p>
            </div>
          </div>
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {commitments.map((item) => (
            <li key={item.title} className="min-w-0 border-t border-border pt-8">
              <item.icon size={28} strokeWidth={1.5} className="text-primary" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
