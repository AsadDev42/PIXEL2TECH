import { Link } from "@tanstack/react-router";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { BookCallButton } from "@/components/book-call-button";
import { STATS } from "@/lib/site-config";
import { TEAM, TEAM_SIZE } from "@/lib/team";

/**
 * Closing call to action used at the end of About, Services and each service
 * page. Always dark, so it reads the same in light and dark mode. The team
 * avatars and two trust facts come from site-config/team (no invented numbers).
 */
export function ClosingCta({
  id,
  title,
  highlight,
  body,
  source,
}: {
  id: string;
  title: string;
  /** Words appended to the title in brand blue. */
  highlight?: string;
  body: string;
  /** Analytics source for the booking button. */
  source: string;
}) {
  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#0A0D1F] text-white">
      {/* Decorative glow and grid */}
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full bg-[#1E90FF]/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-16 -z-10 h-72 w-72 rounded-full bg-[#1E90FF]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.06)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
      />

      <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:p-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400" />
            Let&apos;s work together
          </p>
          <h2
            id={id}
            className="mt-6 text-3xl font-bold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            {title}
            {highlight ? <span className="text-[#4DA3FF]"> {highlight}</span> : null}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookCallButton
              source={source}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ffffff] px-6 text-sm font-semibold text-[#0A0D1F] transition hover:bg-[#e8f1ff]"
            />
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
            >
              Send a project brief
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
          <ul className="flex -space-x-3" aria-label={`The ${TEAM_SIZE}-person team`}>
            {TEAM.map((m) => (
              <li key={m.name}>
                <img
                  src={m.img}
                  alt={m.name}
                  title={`${m.name}, ${m.role}`}
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-12 rounded-full object-cover ring-4 ring-[#0A0D1F] sm:h-14 sm:w-14"
                />
              </li>
            ))}
          </ul>
          <p className="mt-5 text-lg font-semibold">{TEAM_SIZE} people, all in-house</p>
          <p className="mt-1 text-sm text-white/65">
            Design, web development, video and automation under one roof.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/5 p-4">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              <p className="mt-2 text-xl font-bold">{STATS.rating}</p>
              <p className="text-xs text-white/60">Client rating</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <TrendingUp className="h-5 w-5 text-[#4DA3FF]" aria-hidden="true" />
              <p className="mt-2 text-xl font-bold">{STATS.projects}</p>
              <p className="text-xs text-white/60">Projects shipped</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
