import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Captions, Maximize2, X } from "lucide-react";
import { claimVideoSound, onVideoSoundClaimed, PROTECTED_VIDEO_PROPS } from "@/lib/video-sound";
import type { TestimonialVideo } from "@/lib/testimonial-videos";

/** A single inline player; native controls retain seeking, audio and playback speed. */
export function InlineTestimonialPlayer({
  item,
  onPlayingChange,
  onClose,
}: {
  item: TestimonialVideo;
  onPlayingChange: (playing: boolean) => void;
  onClose: () => void;
}) {
  const owner = useId();
  const player = useRef<HTMLVideoElement>(null);
  const callbacks = useRef(onPlayingChange);
  callbacks.current = onPlayingChange;
  const [captionsOn, setCaptionsOn] = useState(true);
  const [failed, setFailed] = useState(false);

  const attach = useCallback((element: HTMLVideoElement | null) => {
    player.current = element;
    if (element) void element.play().catch(() => callbacks.current(false));
  }, []);

  useEffect(() => {
    const element = player.current;
    const stopListening = onVideoSoundClaimed((other) => {
      if (other !== owner) element?.pause();
    });
    return () => {
      stopListening();
      element?.pause();
    };
  }, [owner]);

  const updateCaptions = useCallback(() => {
    const tracks = player.current?.textTracks;
    if (!tracks) return;
    for (const track of Array.from(tracks)) {
      if (track.kind === "captions") track.mode = captionsOn ? "showing" : "disabled";
    }
  }, [captionsOn]);

  useEffect(updateCaptions, [updateCaptions]);

  return (
    <div className="relative" data-loop-no-drag="">
      <video
        ref={attach}
        src={item.src}
        poster={item.poster}
        title={item.title}
        aria-label={`${item.title} player`}
        controls
        autoPlay
        playsInline
        preload="auto"
        {...PROTECTED_VIDEO_PROPS}
        controlsList="nodownload noremoteplayback"
        disablePictureInPicture={false}
        onPlay={() => {
          claimVideoSound(owner);
          callbacks.current(true);
        }}
        onPause={() => callbacks.current(false)}
        onEnded={() => callbacks.current(false)}
        onLoadedMetadata={updateCaptions}
        onError={() => {
          setFailed(true);
          callbacks.current(false);
        }}
        className="block aspect-[9/16] w-full bg-black object-contain [&::cue]:bg-black/80 [&::cue]:text-white"
      >
        <track
          kind="captions"
          src={item.captions}
          srcLang="en"
          label="English (auto-generated)"
          default
          onLoad={updateCaptions}
        />
      </video>
      <button
        type="button"
        onClick={onClose}
        aria-label={`Close ${item.title.toLowerCase()}`}
        className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-black/75 text-white hover:bg-black focus-visible:ring-2 focus-visible:ring-blue-300"
      >
        <X size={18} />
      </button>
      <div className="flex items-center justify-between gap-2 bg-slate-950 px-3 py-2 text-white">
        <button
          type="button"
          onClick={() => setCaptionsOn((value) => !value)}
          aria-label={`Turn ${captionsOn ? "off" : "on"} captions for ${item.title.toLowerCase()}`}
          aria-pressed={captionsOn}
          title="English (auto-generated)"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          <Captions size={18} /> CC
        </button>
        <button
          type="button"
          aria-label={`Fullscreen ${item.title.toLowerCase()}`}
          onClick={() => {
            const element = player.current as
              | (HTMLVideoElement & { webkitEnterFullscreen?: () => void })
              | null;
            if (element?.requestFullscreen)
              void element.requestFullscreen().catch(() => element.webkitEnterFullscreen?.());
            else element?.webkitEnterFullscreen?.();
          }}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          <Maximize2 size={16} /> Fullscreen
        </button>
      </div>
      {failed && (
        <p role="status" className="bg-slate-950 px-4 pb-4 text-sm text-white">
          Video could not load. Close this player and try again.
        </p>
      )}
    </div>
  );
}
