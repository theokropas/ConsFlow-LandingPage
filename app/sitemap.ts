import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/contact"].map((path) => ({
    url: new URL(path, siteConfig.url).href,
    lastModified: new Date("2026-07-26"),
    changeFrequency: path === "/" ? "weekly" as const : "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
