import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

type Item = {
  name: string;
  role: string;
  quote: string;
  video: string;
  poster: string;
};

const items: Item[] = [
  {
    name: "Daniel Brooks",
    role: "Founder, LaunchGrid",
    quote:
      "The UI UX work was clean, modern, and focused on conversions. Our product now looks premium and investor ready.",
    video: "https://cdn.coverr.co/videos/coverr-a-man-in-a-suit-in-the-office-2760/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop",
  },
  {
    name: "Dora Pelosi",
    role: "Creative Director, Nimbus",
    quote:
      "We hired Pixel2Tech for white label work. Their quality and communication are excellent. It feels like having an in house creative team.",
    video: "https://cdn.coverr.co/videos/coverr-a-woman-working-on-a-laptop-2633/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop",
  },
  {
    name: "Choisy Catherine",
    role: "Head of Growth, Oval",
    quote:
      "Our social media engagement improved within weeks. Their strategy is smart and practical, not just random posting.",
    video: "https://cdn.coverr.co/videos/coverr-a-young-woman-typing-on-a-laptop-9269/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop",
  },
];

function VideoCard({ item }: { item: Item }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };
  return (
    <div className="overflow-hidden rounded-3xl bg-neutral-100">
      <div className="relative aspect-[4/5] bg-black">
        <video
          ref={ref}
          src={item.video}
          poster={item.poster}
          playsInline
          loop
          muted
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          className="h-full w-full object-cover"
        />
        <button
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 via-transparent to-transparent transition hover:bg-black/20"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-xl backdrop-blur">
            {playing ? <Pause className="h-6 w-6" /> : <Play className="ml-1 h-6 w-6" />}
          </span>
        </button>
      </div>
      <div className="p-6">
        <div className="text-3xl font-black text-black">"</div>
        <p className="mt-2 text-sm leading-relaxed text-neutral-700">{item.quote}</p>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-black">{item.name}</div>
            <div className="text-xs text-neutral-500">{item.role}</div>
          </div>
          <span className="rounded-full bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
            Video
          </span>
        </div>
      </div>
    </div>
  );
}

export function VideoTestimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-3 inline-flex h-5 w-5 items-center justify-center rounded-full border border-black">
              <div className="h-1.5 w-1.5 rounded-full bg-black" />
            </div>
            <h2 className="text-[44px] font-bold tracking-tight text-black">
              What Our Clients Say
            </h2>
            <p className="mt-2 max-w-xl text-[15px] text-neutral-600">
              Real founders, real results. Hear it directly from the teams we've
              helped grow.
            </p>
          </div>
          <a
            href="/contact"
            className="rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90"
          >
            Let's Build Your Success Story
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <VideoCard key={t.name} item={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
