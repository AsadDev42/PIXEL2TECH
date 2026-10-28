import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

import { classifyLegacyPath } from "@/lib/legacy-urls";
import { getWatchVideo, watchPageHead } from "@/lib/watch-videos";
import { VideoWatchPage } from "@/components/video-watch-page";

/**
 * Dedicated watch pages share the existing catch-all route. Every valid video
 * renders its primary player and metadata on the server; other unknown URLs
 * retain the site's legacy redirects, gone responses and genuine 404 behavior.
 */
export const Route = createFileRoute("/$")({
  beforeLoad: ({ params, location }) => {
    const path = (params as { _splat?: string })._splat ?? "";
    if (path.startsWith("watch/")) {
      if (!getWatchVideo(path)) throw notFound();
      return;
    }
    const verdict = classifyLegacyPath(path);
    if (verdict?.type === "redirect") {
      throw redirect({ to: verdict.target, statusCode: 301, reloadDocument: false });
    }
    if (verdict?.type === "gone" && typeof window !== "undefined") {
      window.location.assign(location.href);
      return;
    }
    throw notFound();
  },
  loader: ({ params }) => {
    const video = getWatchVideo((params as { _splat?: string })._splat ?? "");
    if (!video) throw notFound();
    return video;
  },
  head: ({ loaderData }) =>
    loaderData ? watchPageHead(loaderData) : { meta: [{ name: "robots", content: "noindex" }] },
  component: WatchRoute,
});

function WatchRoute() {
  return <VideoWatchPage video={Route.useLoaderData()} />;
}
