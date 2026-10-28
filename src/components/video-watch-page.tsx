import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site-chrome";
import { VideoShareControls } from "@/components/video-share-controls";
import { PROTECTED_VIDEO_PROPS, claimVideoSound } from "@/lib/video-sound";
import { WATCH_VIDEOS, type WatchVideo } from "@/lib/watch-videos";

export function VideoWatchPage({ video }: { video: WatchVideo }) {
  const collection = WATCH_VIDEOS.filter((item) => item.collectionSlug === video.collectionSlug);
  const index = collection.findIndex((item) => item.id === video.id);
  const previous = collection[index - 1];
  const next = collection[index + 1];

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
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{video.description}</p>
          <nav
            aria-label="More videos in this collection"
            className="mt-8 flex justify-between gap-4"
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
        </div>
      </article>
    </PageShell>
  );
}
