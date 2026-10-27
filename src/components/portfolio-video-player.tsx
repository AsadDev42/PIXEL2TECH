import { useCallback, useEffect, useId, useRef, useState, type RefObject } from "react";
import { ArrowLeft, ArrowRight, RotateCcw, RotateCw, Maximize2, Volume2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { claimVideoSound, onVideoSoundClaimed, PROTECTED_VIDEO_PROPS } from "@/lib/video-sound";

export type PlayerVideo = {
  title: string;
  src: string;
  poster?: string;
  embed?: string;
  orientation?: "vertical" | "landscape";
};

/** One full player for every portfolio collection, including externally hosted long edits. */
export function PortfolioVideoPlayer({
  videos,
  index,
  onSelect,
  onClose,
  returnFocus,
}: {
  videos: PlayerVideo[];
  index: number | null;
  onSelect: (index: number) => void;
  onClose: () => void;
  returnFocus?: RefObject<HTMLElement | null>;
}) {
  const owner = useId();
  const player = useRef<HTMLVideoElement>(null);
  const volume = useRef({ level: 1, muted: false });
  const [failed, setFailed] = useState(false);
  const [retry, setRetry] = useState(0);
  const [level, setLevel] = useState(100);
  const active = index === null ? undefined : videos[index];
  const source = useRef(active?.src ?? "");
  source.current = active?.src ?? "";
  const attachPlayer = useCallback((element: HTMLVideoElement | null) => {
    const previous = player.current;
    if (previous && previous !== element) {
      previous.pause();
      previous.removeAttribute("src");
      previous.load();
    }
    player.current = element;
    if (element) {
      if (!element.getAttribute("src") && source.current) element.src = source.current;
      element.volume = volume.current.level;
      element.muted = volume.current.muted;
    }
  }, []);

  useEffect(() => setFailed(false), [index]);

  useEffect(() => {
    if (index !== null) claimVideoSound(owner);
    return onVideoSoundClaimed((other) => {
      if (other !== owner) player.current?.pause();
    });
  }, [index, owner]);

  const select = (direction: number) => {
    if (index === null) return;
    setFailed(false);
    onSelect((index + direction + videos.length) % videos.length);
  };

  const skip = (seconds: number) => {
    const video = player.current;
    if (video && Number.isFinite(video.duration)) {
      video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + seconds));
    }
  };

  return (
    <Dialog
      open={Boolean(active)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      {active && (
        <DialogContent
          className="max-h-[calc(100dvh-1rem)] w-[calc(100%-1rem)] max-w-6xl gap-0 overflow-y-auto rounded-2xl border-white/15 bg-slate-950 p-0 text-white [&>button]:right-3 [&>button]:top-3 [&>button]:grid [&>button]:h-10 [&>button]:w-10 [&>button]:place-items-center [&>button]:rounded-full [&>button]:text-white"
          onCloseAutoFocus={(event) => {
            if (returnFocus?.current) {
              event.preventDefault();
              returnFocus.current.focus();
            }
          }}
          onKeyDown={(event) => {
            if ((event.target as HTMLElement).closest("video,input,textarea,iframe")) return;
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              select(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
        >
          <header className="border-b border-white/10 px-5 py-5 pr-14 sm:px-8 sm:pr-14">
            <DialogTitle className="text-base font-semibold leading-snug sm:text-xl">
              {active.title}
            </DialogTitle>
            <DialogDescription className="mt-2 text-xs text-slate-300">
              Video {index! + 1} of {videos.length} · Volume, timeline and fullscreen controls are
              in the player.
            </DialogDescription>
          </header>
          <div className="relative flex min-h-48 items-center justify-center bg-black px-12 sm:px-16">
            {active.embed ? (
              <iframe
                key={active.embed}
                src={active.embed}
                title={active.title}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-presentation"
                className="aspect-video max-h-[65dvh] w-full"
              />
            ) : (
              <video
                title={active.title}
                key={`${active.src}:${retry}`}
                ref={attachPlayer}
                src={active.src}
                poster={active.poster}
                controls
                autoPlay
                playsInline
                preload="auto"
                aria-label={active.title}
                {...PROTECTED_VIDEO_PROPS}
                onPlay={() => claimVideoSound(owner)}
                onVolumeChange={(event) => {
                  volume.current = {
                    level: event.currentTarget.volume,
                    muted: event.currentTarget.muted,
                  };
                  setLevel(
                    event.currentTarget.muted ? 0 : Math.round(event.currentTarget.volume * 100),
                  );
                }}
                onError={() => setFailed(true)}
                className={`block max-h-[65dvh] w-full object-contain ${active.orientation === "vertical" ? "aspect-[9/16]" : "aspect-video"}`}
              />
            )}
            {videos.length > 1 &&
              [-1, 1].map((direction) => (
                <button
                  key={direction}
                  type="button"
                  onClick={() => select(direction)}
                  aria-label={direction < 0 ? "Previous video" : "Next video"}
                  className={`absolute top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-slate-900 text-white transition hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${direction < 0 ? "left-1 sm:left-3" : "right-1 sm:right-3"}`}
                >
                  {direction < 0 ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </button>
              ))}
          </div>
          {!active.embed && (
            <div className="flex flex-wrap items-center justify-center gap-4 border-t border-white/10 px-5 py-3 text-slate-200">
              <button
                type="button"
                onClick={() => skip(-10)}
                aria-label="Back 10 seconds"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                <RotateCcw size={17} />
                10s
              </button>
              <button
                type="button"
                onClick={() => skip(10)}
                aria-label="Forward 10 seconds"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                10s
                <RotateCw size={17} />
              </button>
              <label className="inline-flex min-h-11 items-center gap-2 text-xs">
                <Volume2 size={17} aria-hidden="true" />
                <span className="sr-only">Volume</span>
                <input
                  aria-label="Volume"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={level}
                  onChange={(event) => {
                    const next = Number(event.target.value);
                    volume.current = { level: next / 100, muted: false };
                    setLevel(next);
                    const video = player.current;
                    if (video) {
                      video.muted = false;
                      video.volume = next / 100;
                    }
                  }}
                  className="w-24 accent-blue-400"
                />
                <span className="w-8 tabular-nums">{level}%</span>
              </label>
              <button
                type="button"
                aria-label="Fullscreen video"
                onClick={() => {
                  const video = player.current as
                    | (HTMLVideoElement & { webkitEnterFullscreen?: () => void })
                    | null;
                  if (video?.requestFullscreen)
                    void video.requestFullscreen().catch(() => video.webkitEnterFullscreen?.());
                  else video?.webkitEnterFullscreen?.();
                }}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                <Maximize2 size={17} />
                Fullscreen
              </button>
            </div>
          )}
          <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-4 text-xs text-slate-300 sm:px-8">
            <span aria-live="polite">
              {index! + 1} / {videos.length} ·{" "}
              {active.orientation === "vertical" ? "Vertical" : "Landscape"}
            </span>
            {active.embed && (
              <a
                href={active.embed.replace(/\/preview(?:\?.*)?$/, "/view")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-blue-300 underline underline-offset-4"
              >
                Open hosted video if the embedded player is unavailable
              </a>
            )}
            {failed ? (
              <span>
                Video could not load.{" "}
                <button
                  type="button"
                  className="font-semibold text-blue-300 underline"
                  onClick={() => {
                    setFailed(false);
                    setRetry((value) => value + 1);
                  }}
                >
                  Try again
                </button>
              </span>
            ) : (
              <span>Close to return to the collection.</span>
            )}
          </footer>
        </DialogContent>
      )}
    </Dialog>
  );
}
