import type { AutomationShowcaseData } from "@/lib/automation-projects";
import { VideoWall } from "@/components/video-wall";

/**
 * Presents an automation build: each screenshot (workflow canvas, chat or call
 * demo, output) full width with a caption, then any demo videos.
 */
export function AutomationShowcase({ data, name }: { data: AutomationShowcaseData; name: string }) {
  return (
    <div className="space-y-12 md:space-y-16">
      <ol className="space-y-12 md:space-y-16">
        {data.shots.map((shot, i) => (
          <li key={shot.src}>
            <figure>
              <div className="overflow-hidden rounded-2xl border border-border bg-muted shadow-xl shadow-black/5">
                <img
                  src={shot.src}
                  alt={`${name}: ${shot.caption}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  data-protect=""
                  className="mx-auto block h-auto max-h-[880px] w-auto max-w-full object-contain"
                />
              </div>
              <figcaption className="mt-4 flex gap-3 text-[15px] text-muted-foreground">
                <span className="font-semibold text-foreground">{i + 1}.</span>
                <span>{shot.caption}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ol>

      {data.videos.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-foreground">Demo</h3>
          <p className="mt-2 text-[15px] text-muted-foreground">
            Recorded runs of the build. Tap a video to play it with sound.
          </p>
          <div className="mt-6">
            <VideoWall videos={data.videos} label={`${name}: demo videos`} />
          </div>
        </div>
      )}
    </div>
  );
}
