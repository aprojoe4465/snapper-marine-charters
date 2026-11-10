import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = ["/", "/trips", "/about", "/contact", "/privacy", "/book"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
