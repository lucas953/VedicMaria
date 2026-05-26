import type { Metadata } from "next";

export const siteUrl = "https://astrovedalife.com";
export const siteName = "Astro Veda Life";
export const defaultDescription =
  "Vedic astrology consultations with Ayurveda, Vastu, spiritual travel, events, and personal guidance.";
export const defaultOgImage = "/og-image.jpg";

type SeoMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultOgImage
}: SeoMetadata): Metadata {
  const canonicalPath = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  const url = new URL(canonicalPath, siteUrl);
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteName
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}
