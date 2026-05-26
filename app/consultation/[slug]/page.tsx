import { notFound } from "next/navigation";
import { createPageMetadata } from "../../seo";
import {
  consultationDetails,
  getConsultationDetail
} from "../consultationDetails";
import { ConsultationDetailClient } from "./ConsultationDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return consultationDetails.map((detail) => ({ slug: detail.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getConsultationDetail(slug);

  if (!detail) {
    return createPageMetadata({
      title: "Book a Consultation",
      description:
        "Book an online or in-person consultation for Vedic astrology, Vastu, Ayurveda lifestyle guidance, or spiritual coaching.",
      path: "/consultation"
    });
  }

  return createPageMetadata({
    title: detail.title,
    description: detail.description,
    path: `/consultation/${detail.slug}`
  });
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getConsultationDetail(slug);

  if (!detail) {
    notFound();
  }

  return <ConsultationDetailClient detail={detail} />;
}
