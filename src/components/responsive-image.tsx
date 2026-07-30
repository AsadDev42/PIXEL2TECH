import { getFallbackSrc, getImageSources } from "@/lib/blog-images";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  /** CSS `sizes` — tells the browser how wide the image renders so it can pick the right file. */
  sizes: string;
  width: number;
  height: number;
  className?: string;
  /** Above-the-fold images load eagerly with high priority; everything else lazy-loads. */
  priority?: boolean;
};

/**
 * Blog image with AVIF -> WebP -> original fallback and width-based srcset.
 * Explicit width/height keep the layout stable (no CLS) while the image loads.
 */
export function ResponsiveImage({
  src,
  alt,
  sizes,
  width,
  height,
  className,
  priority = false,
}: ResponsiveImageProps) {
  const { avif, webp } = getImageSources(src);

  return (
    <picture>
      {avif ? <source type="image/avif" srcSet={avif} sizes={sizes} /> : null}
      {webp ? <source type="image/webp" srcSet={webp} sizes={sizes} /> : null}
      <img
        src={getFallbackSrc(src)}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
