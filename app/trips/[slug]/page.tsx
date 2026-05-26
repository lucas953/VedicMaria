import { notFound } from "next/navigation";
import { createPageMetadata } from "../../seo";
import { getTripDetail, tripDetails } from "../tripDetails";
import { TripDetailClient } from "./TripDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return tripDetails.map((detail) => ({ slug: detail.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getTripDetail(slug);

  if (!detail) {
    return createPageMetadata({
      title: "Spiritual and Wellness Trips",
      description:
        "Explore pilgrimage journeys, retreats, cultural tours, Ayurveda wellness trips, and custom spiritual travel experiences.",
      path: "/trips"
    });
  }

  return createPageMetadata({
    title: detail.title,
    description: detail.description,
    path: `/trips/${detail.slug}`
  });
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getTripDetail(slug);

  if (!detail) {
    notFound();
  }

  return <TripDetailClient detail={detail} />;
}
