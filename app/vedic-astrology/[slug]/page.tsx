import { notFound } from "next/navigation";
import { createPageMetadata } from "../../seo";
import {
  astrologyDetails,
  getAstrologyDetail
} from "../astrologyDetails";
import { AstrologyDetailClient } from "./AstrologyDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return astrologyDetails.map((detail) => ({ slug: detail.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getAstrologyDetail(slug);

  if (!detail) {
    return createPageMetadata({
      title: "Vedic Astrology Readings",
      description:
        "Receive Vedic astrology insight into your birth chart, planetary timing, relationships, life purpose, and practical remedies.",
      path: "/vedic-astrology"
    });
  }

  return createPageMetadata({
    title: detail.title,
    description: detail.description,
    path: `/vedic-astrology/${detail.slug}`
  });
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getAstrologyDetail(slug);

  if (!detail) {
    notFound();
  }

  return <AstrologyDetailClient detail={detail} />;
}
