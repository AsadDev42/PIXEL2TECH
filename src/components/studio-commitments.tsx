import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ClipboardCheck, PackageCheck, Route, Users } from "lucide-react";
import { BookCallButton } from "@/components/book-call-button";
import { MediaImage } from "@/components/media-image";
import { TEAM } from "@/lib/team";

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
    <section aria-labelledby="home-commitments-title" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-8 rounded-[2rem] bg-primary/5 p-6 sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-12">
          <div className="min-w-0 lg:col-span-5">
            <h2
              id="home-commitments-title"
              className="text-3xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              What you can expect from us
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              From the first conversation to the final handover, you work with the people doing the
              work.
            </p>
            <ul aria-label="The Pixel2Tech team" className="mt-6 flex -space-x-3">
              {TEAM.map((person) => (
                <li key={person.name}>
                  <MediaImage
                    src={person.img}
                    alt={person.name}
                    title={`${person.name}, ${person.role}`}
                    width={56}
                    height={56}
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-12 rounded-full object-cover ring-4 ring-background sm:h-14 sm:w-14"
                  />
                </li>
              ))}
            </ul>
            <BookCallButton
              source="home-commitments"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Let's talk about your project <ArrowUpRight size={18} aria-hidden="true" />
            </BookCallButton>
            <p className="mt-3 text-sm text-muted-foreground">
              A 30-minute call. We reply within one business day.
            </p>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {commitments.map((item) => (
                <li key={item.title} className="rounded-3xl bg-background p-6 shadow-sm">
                  <item.icon
                    size={24}
                    strokeWidth={1.75}
                    className="text-primary"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Payment, revisions and ownership are covered in our{" "}
              <Link
                to="/terms-and-conditions"
                className="font-semibold text-foreground underline underline-offset-4"
              >
                terms and conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
