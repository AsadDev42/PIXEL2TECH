// Records the real length of every self-hosted video so watch pages can state it
// in VideoObject `duration`. Run after adding videos: node scripts/video-durations.mjs
// Needs ffprobe on PATH. Writes src/lib/video-durations.json ({ "/path.mp4": seconds }).
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const pub = path.join(root, "public");
const out = path.join(root, "src/lib/video-durations.json");

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === "previews" ? [] : walk(full);
    return entry.name.toLowerCase().endsWith(".mp4") ? [full] : [];
  });
}

const durations = {};
for (const file of walk(pub).sort()) {
  const url = "/" + path.relative(pub, file).split(path.sep).join("/");
  try {
    const seconds = Number(
      execFileSync(
        "ffprobe",
        ["-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", file],
        { encoding: "utf8" },
      ).trim(),
    );
    if (Number.isFinite(seconds) && seconds > 0) durations[url] = Math.round(seconds);
  } catch {
    console.warn(`skipped ${url}`);
  }
}
fs.writeFileSync(out, JSON.stringify(durations, null, 1) + "\n");
console.log(`${Object.keys(durations).length} durations -> ${path.relative(root, out)}`);
