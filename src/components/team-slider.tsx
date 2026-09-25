import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { LoopSlider } from "@/components/loop-slider";
import { LinkedInBadge } from "@/components/linkedin-badge";
import { TEAM, type TeamMember } from "@/lib/team";

/** One team card. Portraits are grayscale only on devices that can hover. */
export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group w-[min(78vw,300px)] shrink-0 overflow-hidden rounded-2xl border border-border bg-background transition duration-300 hover:shadow-xl sm:w-[320px] dark:border-white/10 dark:bg-white/[0.03]">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        {member.profile && (
          <Link
            to={member.profile}
            draggable={false}
            aria-label={`View ${member.name}'s profile page`}
            className="absolute right-3 top-3 z-10 inline-flex min-h-8 items-center gap-1 rounded-full border border-white/40 bg-white/85 px-3 py-1 text-xs font-semibold text-neutral-900 shadow-[var(--elev-2)] backdrop-blur-md transition hover:bg-white dark:border-white/15 dark:bg-black/60 dark:text-white dark:hover:bg-black/80"
          >
            View profile
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        )}
        <img
          loading="lazy"
          decoding="async"
          src={member.img}
          alt={`Portrait of ${member.name}, ${member.role} at Pixel2Tech`}
          draggable={false}
          className="pointer-events-none h-full w-full object-cover transition duration-500 [@media(hover:hover)]:grayscale [@media(hover:hover)]:group-hover:grayscale-0"
        />
      </div>
      <div className="p-4 md:p-5">
        <h3 className="flex items-center gap-2 text-sm font-bold tracking-tight text-foreground sm:text-base">
          {member.name}
          {member.linkedin && <LinkedInBadge name={member.name} url={member.linkedin} />}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">{member.role}</p>
      </div>
    </article>
  );
}

/** Draggable looping row of every team member (Home and About). */
export function TeamSlider({ className = "mt-10 sm:mt-14" }: { className?: string }) {
  return (
    <LoopSlider
      items={TEAM}
      keyFor={(m, i) => `${m.name}-${i}`}
      direction="ltr"
      speed={40}
      autoplay
      pauseOnHover
      gapClassName="gap-4 md:gap-6"
      className={className}
      ariaLabel="Pixel2Tech team"
      pauseControlLabel="team carousel"
      renderItem={(m) => <TeamCard member={m} />}
    />
  );
}
