import { useEffect, useRef, useState } from "react";
import { Play, Pause, Quote } from "lucide-react";

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
    <div className="w-[280px] shrink-0 overflow-hidden rounded-2xl bg-neutral-100 shadow-sm sm:w-[340px] sm:rounded-3xl lg:w-[380px]">
      <div className="relative aspect-[4/5] bg-black">
        <video
          ref={ref}
          src={item.video}
          poster={item.poster}
          playsInline
          loop
          muted
          preload="metadata"
          aria-label={`Testimonial from ${item.name}`}
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          className="h-full w-full object-cover"
        />
        <button
          onClick={toggle}
          type="button"
          aria-label={playing ? `Pause ${item.name}'s testimonial` : `Play ${item.name}'s testimonial`}
          className="absolute inset-0 flex items-center justify-center bg-linear-to-t from-black/50 via-transparent to-transparent transition hover:bg-black/20"
        >
          <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-xl backdrop-blur sm:h-16 sm:w-16">
            {playing ? <Pause className="h-5 w-5 sm:h-6 sm:w-6" /> : <Play className="ml-1 h-5 w-5 sm:h-6 sm:w-6" />}
          </span>
        </button>
      </div>
      <div className="p-5 sm:p-6">
        <Quote className="h-5 w-5 text-neutral-300 sm:h-6 sm:w-6" aria-hidden="true" />
        <p className="mt-2 text-sm leading-relaxed text-neutral-700">{item.quote}</p>
        <div className="mt-5 flex items-center gap-3 sm:mt-6">
          <img decoding="async"
            src={item.poster}
            alt=""
            loading="lazy"
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
          <div className="min-w-0">
            <div className="truncate text-sm font-bold text-black">{item.name}</div>
            <div className="truncate text-xs text-neutral-500">{item.role}</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export function VideoTestimonials() {
  const loop = [...items, ...items];
  const trackRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    x: 0,
    halfWidth: 0,
    dragging: false,
    startX: 0,
    startPosX: 0,
    lastMoveX: 0,
    lastMoveT: 0,
    velocity: 0,
    pointerId: null as number | null,
    moved: 0,
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      stateRef.current.halfWidth = track.scrollWidth / 2;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    const SPEED = 40;
    let last = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const s = stateRef.current;
      if (!s.dragging) {
        s.x -= SPEED * dt;
        if (Math.abs(s.velocity) > 1) {
          s.x += s.velocity * dt;
          s.velocity *= Math.pow(0.001, dt);
        }
      }
      if (s.halfWidth > 0) {
        while (s.x <= -s.halfWidth) s.x += s.halfWidth;
        while (s.x > 0) s.x -= s.halfWidth;
      }
      track.style.transform = `translate3d(${s.x}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onDown = (e: PointerEvent) => {
      const s = stateRef.current;
      s.dragging = true;
      s.startX = e.clientX;
      s.startPosX = s.x;
      s.lastMoveX = e.clientX;
      s.lastMoveT = performance.now();
      s.velocity = 0;
      s.moved = 0;
      s.pointerId = e.pointerId;
      try { track.setPointerCapture(e.pointerId); } catch {}
      track.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      const s = stateRef.current;
      if (!s.dragging) return;
      const dx = e.clientX - s.startX;
      s.moved = Math.max(s.moved, Math.abs(dx));
      s.x = s.startPosX + dx;
      const now = performance.now();
      const dt = (now - s.lastMoveT) / 1000;
      if (dt > 0) s.velocity = (e.clientX - s.lastMoveX) / dt;
      s.lastMoveX = e.clientX;
      s.lastMoveT = now;
    };
    const onUp = () => {
      const s = stateRef.current;
      if (!s.dragging) return;
      s.dragging = false;
      if (s.pointerId !== null) {
        try { track.releasePointerCapture(s.pointerId); } catch {}
      }
      s.pointerId = null;
      track.style.cursor = "grab";
    };
    const onClickCapture = (e: MouseEvent) => {
      if (stateRef.current.moved > 5) {
        e.preventDefault();
        e.stopPropagation();
        stateRef.current.moved = 0;
      }
    };

    track.addEventListener("pointerdown", onDown);
    track.addEventListener("pointermove", onMove);
    track.addEventListener("pointerup", onUp);
    track.addEventListener("pointercancel", onUp);
    track.addEventListener("click", onClickCapture, true);
    track.style.cursor = "grab";

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      track.removeEventListener("pointerdown", onDown);
      track.removeEventListener("pointermove", onMove);
      track.removeEventListener("pointerup", onUp);
      track.removeEventListener("pointercancel", onUp);
      track.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:gap-6">
          <div className="min-w-0">
            <div aria-hidden="true" className="mb-3 inline-flex h-5 w-5 items-center justify-center rounded-full border border-black">
              <div className="h-1.5 w-1.5 rounded-full bg-black" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-[44px]">
              What Our Clients Say
            </h2>
            <p className="mt-2 max-w-xl text-[14px] text-neutral-600 sm:text-[15px]">
              Real founders, real results. Hear it directly from the teams
              we've helped grow.
            </p>
          </div>
          <a
            href="/contact"
            className="hidden shrink-0 items-center whitespace-nowrap rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 sm:inline-flex"
          >
            Let's Build Your Success Story
          </a>
        </div>
      </div>

      <div className="edge-fade-x mt-10 overflow-hidden sm:mt-12">
        <div
          ref={trackRef}
          className="flex w-max touch-pan-y select-none gap-4 pr-4 sm:gap-6 sm:pr-6"
          style={{ willChange: "transform" }}
        >
          {loop.map((t, i) => (
            <VideoCard key={`${t.name}-${i}`} item={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

