import type { ComponentProps } from "react";

/** Preserve decorative images; use informative descriptions as default titles. */
export function MediaImage({ alt, title, ...props }: ComponentProps<"img">) {
  const description = (alt ?? title ?? "Pixel2Tech project artwork").replace(/\s+/g, " ").trim();
  return (
    <img {...props} alt={description} title={description ? title || description : undefined} />
  );
}
