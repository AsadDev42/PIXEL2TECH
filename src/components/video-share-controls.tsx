import { useState } from "react";
import { Link2, Share2 } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { videoSharePath } from "@/lib/video-sharing";

export function VideoShareControls({
  video,
  sharePath,
}: {
  video: { title: string; src: string; poster?: string; embed?: string };
  sharePath?: string;
}) {
  const [status, setStatus] = useState("");
  const [manualLink, setManualLink] = useState("");

  const link = () =>
    `${SITE.url}${videoSharePath(sharePath ?? window.location.pathname, video)}`;

  const copy = async () => {
    const url = link();
    try {
      await navigator.clipboard.writeText(url);
      setManualLink("");
      setStatus("Video link copied.");
    } catch {
      setManualLink(url);
      setStatus("Select and copy this video link.");
    }
  };

  const share = async () => {
    if (!navigator.share) {
      await copy();
      return;
    }
    try {
      await navigator.share({ title: video.title, url: link() });
      setStatus("Video shared.");
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return;
      await copy();
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => void share()}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/25 px-4 py-2 text-xs text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          <Share2 size={16} aria-hidden="true" />
          Share video
        </button>
        <button
          type="button"
          onClick={() => void copy()}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/25 px-4 py-2 text-xs text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          <Link2 size={16} aria-hidden="true" />
          Copy video link
        </button>
      </div>
      <p role="status" className="text-xs text-slate-300">
        {status}
      </p>
      {manualLink && (
        <input
          readOnly
          aria-label="Video share link"
          value={manualLink}
          onFocus={(event) => event.currentTarget.select()}
          className="w-full rounded-lg border border-white/25 bg-slate-900 px-4 py-2 text-sm text-white"
        />
      )}
    </div>
  );
}
