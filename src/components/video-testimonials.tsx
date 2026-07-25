import { useRef, useState } from "react";
import { Play, Pause, Quote } from "lucide-react";
import { LoopSlider } from "@/components/loop-slider";

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
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&fm=webp&q=70",
  },
  {
    name: "Dora Pelosi",
    role: "Creative Director, Nimbus",
    quote:
      "We hired Pixel2Tech for white label work. Their quality and communication are excellent. It feels like having an in house creative team.",
    video: "https://cdn.coverr.co/videos/coverr-a-woman-working-on-a-laptop-2633/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&fm=webp&q=70",
  },
  {
    name: "Choisy Catherine",
    role: "Head of Growth, Oval",
    quote:
      "Our social media engagement improved within weeks. Their strategy is smart and practical, not just random posting.",
    video: "https://cdn.coverr.co/videos/coverr-a-young-woman-typing-on-a-laptop-9269/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&fm=webp&q=70",
  },
  {
    name: "Marco Bianchi",
    role: "CEO, Northline Studio",
    quote:
      "From branding to launch, Pixel2Tech delivered on every promise. They feel like a true growth partner, not just a vendor.",
    video: "https://cdn.coverr.co/videos/coverr-a-man-working-on-a-laptop-2634/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&auto=format&fit=crop&fm=webp&q=70",
  },
  {
    name: "Aisha Rahman",
    role: "Product Lead, Kite",
    quote:
      "Their AI workflow automations saved our team days every week. Real, measurable impact from day one.",
    video: "https://cdn.coverr.co/videos/coverr-a-woman-typing-on-a-laptop-9270/1080p.mp4",
    poster:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop&fm=webp&q=70",
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
    <article className="w-[280px] shrink-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:w-[340px] sm:rounded-3xl lg:w-[380px]">
      <div className="relative aspect-[4/5] bg-black">
        <video
          ref={ref}
          src={item.video}
          poster={item.poster}
          playsInline
          loop
          muted
          preload="none"
          aria-label={`Testimonial from ${item.name}`}
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          className="pointer-events-none h-full w-full object-cover"
        />
        <button
          onClick={toggle}
          type="button"
          aria-label={playing ? `Pause ${item.name}'s testimonial` : `Play ${item.name}'s testimonial`}
          className="absolute inset-0 flex items-center justify-center bg-linear-to-t from-black/45 via-transparent to-transparent transition hover:bg-black/10"
        >
          <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground text-primary shadow-xl ring-1 ring-border/40 backdrop-blur-md transition-transform duration-300 hover:scale-105 dark:bg-black dark:text-white dark:ring-white/10 sm:h-16 sm:w-16">
            {playing ? <Pause className="h-5 w-5 sm:h-6 sm:w-6" /> : <Play className="ml-1 h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" />}
          </span>
        </button>
      </div>
      <div className="p-5 sm:p-6">
        <Quote className="h-5 w-5 text-muted-foreground/45 sm:h-6 sm:w-6" aria-hidden="true" />
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.quote}</p>
        <div className="mt-5 flex items-center gap-3 sm:mt-6">
          <img
            decoding="async"
            src={item.poster}
            alt=""
            loading="lazy"
            draggable={false}
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
          <div className="min-w-0">
            <div className="truncate text-sm font-bold text-card-foreground">{item.name}</div>
            <div className="truncate text-xs text-muted-foreground">{item.role}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function VideoTestimonials() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:gap-6">
          <div className="min-w-0">
            <div aria-hidden="true" className="mb-3 inline-flex h-5 w-5 items-center justify-center rounded-full border border-foreground">
              <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[44px]">
              What Our Clients Say
            </h2>
            <p className="mt-2 max-w-xl text-[14px] text-muted-foreground sm:text-[15px]">
              Real founders, real results. Hear it directly from the teams
              we've helped grow. Drag to explore.
            </p>
          </div>
          <a
            href="/contact"
            className="hidden shrink-0 items-center whitespace-nowrap rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 sm:inline-flex"
          >
            Let's Build Your Success Story
          </a>
        </div>
      </div>

      <LoopSlider
        items={items}
        keyFor={(t, i) => `${t.name}-${i}`}
        direction="rtl"
        speed={40}
        gapClassName="gap-4 pr-4 sm:gap-6 sm:pr-6"
        className="mt-10 sm:mt-12"
        ariaLabel="Client testimonials"
        renderItem={(t) => <VideoCard item={t} />}
      />
    </section>
  );
}
