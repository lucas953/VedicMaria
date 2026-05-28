import {
  createDetailMetadata,
  generateDetailStaticParams,
  renderDetailPage
} from "../../detailPages";
import { getTripDetail, tripDetails } from "../tripDetails";
import { TripDetailClient } from "./TripDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return generateDetailStaticParams(tripDetails);
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  return createDetailMetadata({
    params,
    getDetail: getTripDetail,
    fallback: {
      title: "Spiritual and Wellness Trips",
      description:
        "Explore pilgrimage journeys, retreats, cultural tours, Ayurveda wellness trips, and custom spiritual travel experiences.",
      path: "/trips"
    },
    pathPrefix: "/trips"
  });
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  return renderDetailPage({
    params,
    getDetail: getTripDetail,
    render: (detail) => <TripDetailClient detail={detail} />
  });
}
