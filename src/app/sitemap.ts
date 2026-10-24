import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sistemanow.com.br";

  return [
    {
      url: base,
      lastModified: "2026-10-24",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
