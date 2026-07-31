import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://owais4077.github.io/OWAIS-AHMAD-Portfolio";

  return [
    {
      url: base,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
