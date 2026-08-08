import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

export type CarouselVideo = {
  src: string;
  title: string;
};

function VideoSlide({ video }: { video: CarouselVideo }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  };

  return (
    <article className="w-[240px] shrink-0 snap-center overflow-hidden rounded-2xl border border-border bg-card dark:border-white/10 sm:w-[280px] sm:rounded-3xl lg:w-[300px]">
      <div className="relative aspect-[9/16] bg-black">
        <video
          ref={ref}
          src={video.src}
          playsInline
          loop
          preload="metadata"
          aria-label={video.title}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="h-full w-full object-cover"
        />
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? `Pause ${video.title}` : `Play ${video.title}`}
          className="absolute inset-0 flex items-center justify-center transition hover:bg-black/10"
        >
          <span
            aria-hidden="true"
            className={`flex h-14 w-14 items-center justify-center rounded-full bg-background/90 text-foreground shadow-xl ring-1 ring-border/40 backdrop-blur-md transition ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
          >
            {playing ? <Pause className="h-5 w-5" /> : <Play className="ml-1 h-5 w-5" fill="currentColor" />}
          </span>
        </button>
      </div>
      <div className="p-4 sm:p-5">
        <p className="text-sm font-semibold leading-snug text-card-foreground">{video.title}</p>
      </div>
    </article>
  );
}

export function VideoCarousel({ videos }: { videos: CarouselVideo[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 sm:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {videos.map((v) => (
          <VideoSlide key={v.src} video={v} />
        ))}
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous videos"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next videos"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
