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
  // A sentence ends at . ! or ? followed by a space, so "pixel2tech.com" is not a break.
  const sentences = clean.split(/(?<=[.!?])\s+/);
  let out = "";
  for (const s of sentences) {
    const next = out ? `${out} ${s}` : s;
    if (next.length > max) {
      // A short result reads thin in search. Take the next sentence up to its
      // last comma that fits, ended with a full stop, so it is still whole.
      if (out && out.length < 110) {
        const room = max - out.length - 1;
        const cut = s.slice(0, room).lastIndexOf(",");
        if (cut >= 40) out = `${out} ${s.slice(0, cut)}.`;
      }
      break;
    }
    out = next;
  }
  return out || sentences[0]!;
}

/** Join title parts with " | ", dropping middle parts until it fits. */
export function fitTitle(parts: string[], max = TITLE_MAX): string {
  const kept = [...parts];
  while (kept.length > 2 && kept.join(" | ").length > max) kept.splice(kept.length - 2, 1);
  return kept.join(" | ");
}
