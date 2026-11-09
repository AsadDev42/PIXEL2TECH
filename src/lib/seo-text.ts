/** Google shows roughly this many characters of a title or description. */
export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 160;

/**
 * A meta description that fits: whole sentences up to DESCRIPTION_MAX. No "…"
 * and no cut words. When even the first sentence is longer, it is kept whole
 * for Google to shorten, since a half sentence reads worse than a long one.
 */
export function fitDescription(text: string, max = DESCRIPTION_MAX): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const sentences = clean.match(/[^.!?]+[.!?]+(\s|$)/g) ?? [clean];
  let out = "";
  for (const s of sentences) {
    if ((out + s).trim().length > max) break;
    out += s;
  }
  return (out || sentences[0]!).trim();
}

/** Join title parts with " | ", dropping middle parts until it fits. */
export function fitTitle(parts: string[], max = TITLE_MAX): string {
  const kept = [...parts];
  while (kept.length > 2 && kept.join(" | ").length > max) kept.splice(kept.length - 2, 1);
  return kept.join(" | ");
}
