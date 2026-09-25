import { useEffect, useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { ResponsiveImage } from "@/components/responsive-image";

type Item = {
  name: string;
  role: string;
  quote: string;
  video: string;
  poster: string;
  /** WebVTT captions file. Required once a clip contains speech (WCAG 1.2.2). */
  captions?: string;
  /** The clip has spoken audio: it then plays with sound after the visitor presses play. */
  hasAudio?: boolean;
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

/** Card widths, shared by the list items and the poster `sizes` hint. */
const CARD_WIDTH = "w-[78vw] max-w-[340px] sm:w-[340px] lg:w-[380px] lg:max-w-[380px]";
const CARD_SIZES = "(min-width: 1024px) 380px, (min-width: 640px) 340px, 78vw";

function VideoCard({ item }: { item: Item }) {
  const ref = useRef<HTMLVideoElement>(null);
  // The <video> is only created on the first press, so nothing downloads before then.
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (started) void ref.current?.play().catch(() => setPlaying(false));
  }, [started]);

  const toggle = () => {
    const video = ref.current;
    if (!started || !video) {
      setStarted(true);
      return;
    }
    if (video.paused) void video.play().catch(() => undefined);
    else video.pause();
  };

  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:rounded-3xl">
      <div className="relative aspect-[4/5] bg-muted">
        <ResponsiveImage
          src={item.poster}
          alt=""
          sizes={CARD_SIZES}
          width={800}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {started ? (
          <video
            ref={ref}
            src={item.video}
            poster={item.poster}
            playsInline
            loop
            muted={!item.hasAudio}
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="absolute inset-0 h-full w-full object-cover"
          >
            {item.captions ? (
              <track kind="captions" src={item.captions} srcLang="en" label="English" default />
            ) : null}
          </video>
        ) : null}
        <button
          type="button"
          onClick={toggle}
          aria-label={`${playing ? "Pause" : "Play"} video from ${item.name}`}
          className="group absolute inset-0 flex items-center justify-center bg-linear-to-t from-black/40 via-transparent to-transparent"
        >
          <span
            aria-hidden="true"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-background text-foreground shadow-lg ring-1 ring-border transition-transform group-hover:scale-105 sm:h-16 sm:w-16"
          >
            {playing ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="ml-1 h-6 w-6" fill="currentColor" />
            )}
          </span>
        </button>
      </div>
      <blockquote className="flex-1 px-5 pt-5 sm:px-6 sm:pt-6">
        <p className="text-sm leading-relaxed text-muted-foreground">“{item.quote}”</p>
      </blockquote>
      <figcaption className="flex items-center gap-3 p-5 sm:p-6">
        <ResponsiveImage
          src={item.poster}
          alt=""
          sizes="40px"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-card-foreground">
            {item.name}
          </span>
          <span className="block truncate text-xs text-muted-foreground">{item.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Client video testimonials as a swipeable row: native scroll with snap
 * points, previous/next buttons, and arrow keys when the row has focus.
 * Nothing moves on its own.
 */
export function VideoTestimonials({ className = "bg-background" }: { className?: string }) {
  const headingId = useId();
  const rowId = useId();
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const row = rowRef.current;
    const card = row?.querySelector("li");
    const list = row?.firstElementChild;
    if (!row || !card || !list) return;
    const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    row.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const arrowClass =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted";

  return (
    <section aria-labelledby={headingId} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="min-w-0 max-w-2xl">
            <h2
              id={headingId}
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              What clients say
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A few words from people we&apos;ve worked with. Press play to watch a clip.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-controls={rowId}
              aria-label="Previous testimonial"
              className={arrowClass}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-controls={rowId}
              aria-label="Next testimonial"
              className={arrowClass}
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={rowRef}
          id={rowId}
          role="region"
          aria-label="Client testimonials"
          tabIndex={0}
          className="-mx-5 mt-8 snap-x snap-mandatory scroll-px-5 overflow-x-auto overscroll-x-contain px-5 pb-4 focus-visible:-outline-offset-2 md:-mx-10 md:scroll-px-10 md:px-10"
        >
          <ul className="flex w-max gap-4 sm:gap-6">
            {items.map((item) => (
              <li key={item.name} className={`${CARD_WIDTH} shrink-0 snap-start`}>
                <VideoCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
