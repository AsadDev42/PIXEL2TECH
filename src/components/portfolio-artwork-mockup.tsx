import { MediaImage } from "@/components/media-image";

/** Studio presentation using the supplied artwork, also available in the gallery. */
export function PortfolioArtworkMockup({
  title,
  images,
  tone = "blue",
}: {
  title: string;
  images: string[];
  tone?: "blue" | "red";
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border">
      <div
        className={`relative flex min-h-80 items-center justify-center gap-4 overflow-hidden px-8 py-16 sm:gap-8 sm:px-16 ${tone === "red" ? "bg-gradient-to-br from-rose-50 via-stone-100 to-rose-200" : "bg-gradient-to-br from-sky-50 via-slate-100 to-blue-200"}`}
      >
        {images.slice(0, 3).map((src, index) => (
          <div
            key={src}
            className={`relative w-1/3 max-w-64 overflow-hidden rounded-lg border border-white/80 bg-white p-2 shadow-2xl ${index === 0 ? "-rotate-6 translate-y-4" : index === 1 ? "z-10 -translate-y-4" : "rotate-6 translate-y-4"}`}
          >
            <MediaImage
              src={src}
              alt={`${title}, original artwork in studio mockup ${index + 1}`}
              className="aspect-[4/5] w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
      <figcaption className="border-t border-border bg-card px-6 py-4 text-sm text-muted-foreground">
        {title} / Artwork presentation
      </figcaption>
    </figure>
  );
}
