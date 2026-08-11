import type { MetadataRoute } from "next";

import { siteConfig } from "@/utils/meta/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Block app routes only — never block /_next, JS or CSS (Google needs them to render)
      disallow: ["/api/"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
