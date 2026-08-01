import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/zz-410-test")({
  beforeLoad: () => {
    throw new Response("Gone", { status: 410, headers: { "Content-Type": "text/plain" } });
  },
  component: () => null,
});
