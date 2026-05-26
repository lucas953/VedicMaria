import { notFound } from "next/navigation";
import { createPageMetadata } from "../../seo";
import {
  getNumerologyDetail,
  numerologyDetails
} from "../numerologyDetails";
import { NumerologyDetailClient } from "./NumerologyDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return numerologyDetails.map((detail) => ({ slug: detail.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getNumerologyDetail(slug);

  if (!detail) {
    return createPageMetadata({
      title: "Numerology Guidance",
      description:
        "Explore life path numbers, name numerology, personal year cycles, relationship numbers, and timing for meaningful decisions.",
      path: "/numerology"
    });
  }

  return createPageMetadata({
    title: `${detail.title} Numerology`,
    description: detail.description,
    path: `/numerology/${detail.slug}`
  });
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getNumerologyDetail(slug);

  if (!detail) {
    notFound();
  }

  return <NumerologyDetailClient detail={detail} />;
}
