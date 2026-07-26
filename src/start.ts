import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { attachSupabaseAuth } from "@/integrations/supabase/auth-attacher";

const errorMiddleware = createMiddleware().server(async ({ request, next }) => {
  if (new URL(request.url).pathname.startsWith("/lovable/")) {
    return next();
  }
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Force HTTPS + apply hardened security response headers to every request.
const securityMiddleware = createMiddleware().server(async ({ request, next }) => {
  const url = new URL(request.url);
  if (url.pathname.startsWith("/lovable/")) {
    return next();
  }
  const xfProto = request.headers.get("x-forwarded-proto");
  const isLocal = url.hostname === "localhost" || url.hostname === "127.0.0.1";
  const isHttp = url.protocol === "http:" || xfProto === "http";
  if (!isLocal && isHttp) {
    url.protocol = "https:";
    return new Response(null, { status: 301, headers: { location: url.toString() } });
  }

  const result = await next();
  const response =
    result instanceof Response
      ? result
      : (result as { response: Response }).response;
  const h = response.headers;
  // Content Security Policy — tuned for the current app (Google Fonts, Unsplash,
  // Supabase, Lovable preview assets, Calendly booking modal, YouTube/Vimeo videos).
  h.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com",
      "connect-src 'self' https: wss:",
      "media-src 'self' https: blob:",
      "frame-src 'self' https://calendly.com https://*.calendly.com https://www.youtube.com https://player.vimeo.com https://www.google.com https://maps.google.com https://drive.google.com",
      "worker-src 'self' blob:",
      "manifest-src 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  );
  h.set("X-Frame-Options", "DENY");
  h.set("X-Content-Type-Options", "nosniff");
  h.set("Referrer-Policy", "strict-origin-when-cross-origin");
  h.set(
    "Permissions-Policy",
    "accelerometer=(), autoplay=(self), camera=(), display-capture=(), geolocation=(), gyroscope=(), microphone=(), payment=(), usb=(), fullscreen=(self)",
  );
  h.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  h.set("Cross-Origin-Opener-Policy", "same-origin");
  return response;
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

export const startInstance = createStart(() => ({
  functionMiddleware: [attachSupabaseAuth],
  requestMiddleware: [securityMiddleware, errorMiddleware, csrfMiddleware],
}));

