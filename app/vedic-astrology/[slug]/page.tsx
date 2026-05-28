import {
  createDetailMetadata,
  generateDetailStaticParams,
  renderDetailPage
} from "../../detailPages";
import {
  astrologyDetails,
  getAstrologyDetail
} from "../astrologyDetails";
import { AstrologyDetailClient } from "./AstrologyDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return generateDetailStaticParams(astrologyDetails);
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  return createDetailMetadata({
    params,
    getDetail: getAstrologyDetail,
    fallback: {
      title: "Vedic Astrology Readings",
      description:
        "Receive Vedic astrology insight into your birth chart, planetary timing, relationships, life purpose, and practical remedies.",
      path: "/vedic-astrology"
    },
    pathPrefix: "/vedic-astrology"
  });
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  return renderDetailPage({
    params,
    getDetail: getAstrologyDetail,
    render: (detail) => <AstrologyDetailClient detail={detail} />
  });
}
