import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://owais4077.github.io/OWAIS-AHMAD-Portfolio/sitemap.xml"
  };
}
