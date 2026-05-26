import type { MetadataRoute } from "next";
import { ayurvedaDetails } from "./ayurveda/ayurvedaDetails";
import { numerologyDetails } from "./numerology/numerologyDetails";
import { siteUrl } from "./seo";
import { canonicalTeamSlugs } from "./teamSlugs";
import { tripDetails } from "./trips/tripDetails";
import { vastuDetails } from "./vastu/vastuDetails";
import { astrologyDetails } from "./vedic-astrology/astrologyDetails";

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
  const numerologyRoutes = numerologyDetails.map(
    (detail) => `/numerology/${detail.slug}/`
  );
  const vastuRoutes = vastuDetails.map((detail) => `/vastu/${detail.slug}/`);
  const ayurvedaRoutes = ayurvedaDetails.map(
    (detail) => `/ayurveda/${detail.slug}/`
  );
  const tripRoutes = tripDetails.map((detail) => `/trips/${detail.slug}/`);
  const astrologyRoutes = astrologyDetails.map(
    (detail) => `/vedic-astrology/${detail.slug}/`
  );

  return [
    ...staticRoutes,
    ...astrologyRoutes,
    ...numerologyRoutes,
    ...vastuRoutes,
    ...ayurvedaRoutes,
    ...tripRoutes,
    ...teamRoutes
  ].map((route) => ({
      url: new URL(route, siteUrl).toString(),
      lastModified,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : route.startsWith("/our-team/") ? 0.6 : 0.8
    }));
}
