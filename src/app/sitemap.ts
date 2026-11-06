import type { MetadataRoute } from "next";
import { profile } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${profile.siteUrl}/archive`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
