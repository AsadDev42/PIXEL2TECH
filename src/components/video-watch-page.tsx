import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { MediaImage } from "@/components/media-image";
import { VideoShareControls } from "@/components/video-share-controls";
import { getProjectCopy } from "@/lib/portfolio-copy";
import { getItemBySlug } from "@/lib/portfolio-data";
import { PROTECTED_VIDEO_PROPS, claimVideoSound } from "@/lib/video-sound";
import { WATCH_VIDEOS, clockDuration, type WatchVideo } from "@/lib/watch-videos";

/** How many other videos from the same collection to link below the player. */
const MORE_COUNT = 6;

export function VideoWatchPage({ video }: { video: WatchVideo }) {
  const collection = WATCH_VIDEOS.filter((item) => item.collectionSlug === video.collectionSlug);
  const index = collection.findIndex((item) => item.id === video.id);
  const previous = collection[index - 1];
  const next = collection[index + 1];
  // The videos right after this one, wrapping round, so every video links to different neighbours.
  const more = Array.from(
    { length: Math.min(MORE_COUNT, collection.length - 1) },
    (_, i) => collection[(index + 1 + i) % collection.length]!,
  );
  const project = getItemBySlug(video.collectionSlug);
  const copy = project ? getProjectCopy(project) : undefined;
  const facts = [
    `Video ${video.position} of ${video.total}`,
    video.orientation === "vertical" ? "Vertical 9:16" : "Horizontal 16:9",
    video.seconds ? `Length ${clockDuration(video.seconds)}` : undefined,
  ].filter(Boolean);

  return (
    <PageShell>
      <article className="bg-background px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <a
            href={`/portfolio/${video.collectionSlug}`}
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {video.collectionTitle}
          </a>
          <h1 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">{video.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{facts.join(" · ")}</p>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-black">
            {video.embed ? (
              <iframe
                src={video.embed}
                title={video.title}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-presentation"
                className="aspect-video max-h-[70dvh] w-full"
              />
            ) : (
              <video
                src={video.src}
                poster={video.poster}
                title={video.title}
                aria-label={video.title}
                controls
                playsInline
                preload="metadata"
                onPlay={() => claimVideoSound("watch-player")}
                {...PROTECTED_VIDEO_PROPS}
                className={`block max-h-[70dvh] w-full object-contain ${video.orientation === "vertical" ? "aspect-[9/16]" : "aspect-video"}`}
              />
            )}
            <div className="border-t border-white/15 p-4 sm:p-6">
              <VideoShareControls video={video} sharePath={`/portfolio/${video.collectionSlug}`} />
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-muted-foreground">{video.description}</p>

          <nav
            aria-label="More videos in this collection"
            className="mt-6 flex justify-between gap-4"
          >
            {previous ? (
              <a
                href={previous.path}
                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Previous video
              </a>
            ) : (
              <span />
            )}
            {next && (
              <a
                href={next.path}
                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary"
              >
                Next video
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            )}
          </nav>

          {copy && (
            <section aria-labelledby="watch-project" className="mt-12 grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 id="watch-project" className="text-xl font-bold tracking-tight">
                  About {video.collectionTitle}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{copy.overview}</p>
                <h3 className="mt-6 font-semibold">How we edit this kind of video</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{copy.approach}</p>
              </div>
              <div className="rounded-2xl border border-border p-6">
                {copy.deliverables && copy.deliverables.length > 0 && (
                  <>
                    <h3 className="font-semibold">What this work includes</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {copy.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                <div className="mt-6 flex flex-col gap-3 text-sm font-semibold">
                  <a href={`/portfolio/${video.collectionSlug}`} className="text-primary">
                    See the full project
                  </a>
                  {video.collectionSlug === "wedding-video-and-reel-editing" ? (
                    <a href="/wedding-video-editing-services" className="text-primary">
                      Wedding video editing services
                    </a>
                  ) : (
                    <a href="/services/video-editing-and-ads" className="text-primary">
                      Video editing and ad services
                    </a>
                  )}
                  <a href="/outsource-video-editing" className="text-primary">
                    Outsource your video editing
                  </a>
                </div>
              </div>
            </section>
          )}

          {more.length > 0 && (
            <section aria-labelledby="watch-more" className="mt-12">
              <h2 id="watch-more" className="text-xl font-bold tracking-tight">
                More from {video.collectionTitle}
              </h2>
              <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {more.map((item) => (
                  <li key={item.id}>
                    <a href={item.path} className="group block">
                      <div className="aspect-video overflow-hidden rounded-xl bg-muted">
                        <MediaImage
                          src={item.poster}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-2 text-sm font-medium leading-snug group-hover:text-primary">
                        {item.title}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>
    </PageShell>
  );
}
