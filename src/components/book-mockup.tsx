/**
 * CSS-only book mockup: a cover image with a spine, page edges and a soft
 * shadow. Pure markup, so it renders identically on the server and client.
 */
export function BookMockup({
  src,
  alt,
  className = "",
  loading = "lazy",
}: {
  src: string;
  /** Describe the specific book, e.g. "Book cover for Inflation Nation". */
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  return (
    <div className={`group relative ${className}`} style={{ perspective: "1500px" }}>
      <div
        aria-hidden="true"
        className="absolute -bottom-6 left-1/2 h-4 w-[90%] -translate-x-1/2 rounded-full bg-black/30 blur-xl"
      />

      <div
        className="relative aspect-[2/3] w-full transform-gpu transition-transform duration-500 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Spine */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[8%] origin-left border-r border-white/10 bg-neutral-800"
          style={{ transform: "rotateY(-90deg)", transformStyle: "preserve-3d" }}
        />

        {/* Front cover */}
        <div className="relative h-full w-full overflow-hidden rounded-r-sm border-l border-white/20 shadow-2xl">
          <img
            src={src}
            alt={alt}
            loading={loading}
            decoding="async"
            draggable={false}
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/10"
          />
        </div>

        {/* Page edges */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-[7%] origin-right bg-white/90"
          style={{
            transform: "rotateY(90deg) translateZ(-1px)",
            backgroundImage: "linear-gradient(to right, #eee 1px, transparent 1px)",
            backgroundSize: "2px 100%",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[7%] origin-top bg-white/90"
          style={{
            transform: "rotateX(90deg) translateZ(-1px)",
            backgroundImage: "linear-gradient(to bottom, #eee 1px, transparent 1px)",
            backgroundSize: "100% 2px",
          }}
        />
      </div>
    </div>
  );
}
