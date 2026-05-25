import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";
import { canonicalTeamSlugs } from "./teamSlugs";

const staticRoutes = [
  "/",
  "/vedic-astrology/",
  "/numerology/",
  "/consultation/",
  "/vastu/",
  "/ayurveda/",
  "/trips/",
  "/upcoming-events/",
  "/our-team/",
  "/contact/"
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const teamRoutes = canonicalTeamSlugs.map((slug) => `/our-team/${slug}/`);

  return [...staticRoutes, ...teamRoutes].map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/our-team/") ? 0.6 : 0.8
  }));
}
