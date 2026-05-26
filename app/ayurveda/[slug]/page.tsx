import { notFound } from "next/navigation";
import { createPageMetadata } from "../../seo";
import { ayurvedaDetails, getAyurvedaDetail } from "../ayurvedaDetails";
import { AyurvedaDetailClient } from "./AyurvedaDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return ayurvedaDetails.map((detail) => ({ slug: detail.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getAyurvedaDetail(slug);

  if (!detail) {
    return createPageMetadata({
      title: "Ayurveda Wellness Guidance",
      description:
        "Support balance through Ayurveda lifestyle guidance, dosha awareness, food choices, daily rhythm, and seasonal care.",
      path: "/ayurveda"
    });
  }

  return createPageMetadata({
    title: detail.title,
    description: detail.description,
    path: `/ayurveda/${detail.slug}`
  });
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getAyurvedaDetail(slug);

  if (!detail) {
    notFound();
  }

  return <AyurvedaDetailClient detail={detail} />;
}
