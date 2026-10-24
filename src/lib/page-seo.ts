import { SITE } from "@/lib/site-config";

export function businessHead(path: string, title: string, description: string) {
  const image = `${SITE.url}/media/3498a579-8ac4-4a89-a464-1e37e768b3d0/og-image.jpg`;
  return {
    meta: [
      { title: `${title} | Pixel2Tech` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.url}${path}` },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}${path}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
            { "@type": "ListItem", position: 2, name: title, item: `${SITE.url}${path}` },
          ],
        }),
      },
    ],
  };
}
