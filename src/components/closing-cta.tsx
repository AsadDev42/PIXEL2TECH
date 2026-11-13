import { MediaImage } from "@/components/media-image";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { BookCallButton } from "@/components/book-call-button";
import { STATS } from "@/lib/site-config";
import { TEAM } from "@/lib/team";

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
  /** Words appended to the title. */
  highlight?: string;
  body: string;
  /** Analytics source for the booking button. */
  source: string;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-[#0A0D1F] text-white">
      <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:p-16">
        <div>
          <h2
            id={id}
            className="text-3xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            {title}
            {highlight ? ` ${highlight}` : null}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookCallButton
              source={source}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#ffffff] px-6 text-sm font-medium text-[#0A0D1F] transition hover:bg-[#e8f1ff]"
            />
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/10"
            >
              Send a project brief
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 p-6 sm:p-8">
          <ul className="flex -space-x-3" aria-label="The Pixel2Tech team">
            {TEAM.map((m) => (
              <li key={m.name}>
                <MediaImage
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
          <p className="mt-5 text-lg font-medium">One team, all in-house</p>
          <p className="mt-1 text-sm text-white/65">
            Design, web development, video and automation.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Link
              to="/reviews"
              className="rounded-2xl bg-white/5 p-4 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              <p className="mt-2 text-xl font-semibold">{STATS.rating}</p>
              <p className="text-xs text-white/60">Client rating</p>
            </Link>
            <div className="rounded-2xl bg-white/5 p-4">
              <TrendingUp className="h-5 w-5 text-[#4DA3FF]" aria-hidden="true" />
              <p className="mt-2 text-xl font-semibold">{STATS.projects}</p>
              <p className="text-xs text-white/60">Projects shipped</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
