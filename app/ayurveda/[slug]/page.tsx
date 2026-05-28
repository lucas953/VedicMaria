import {
  createDetailMetadata,
  generateDetailStaticParams,
  renderDetailPage
} from "../../detailPages";
import { ayurvedaDetails, getAyurvedaDetail } from "../ayurvedaDetails";
import { AyurvedaDetailClient } from "./AyurvedaDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return generateDetailStaticParams(ayurvedaDetails);
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  return createDetailMetadata({
    params,
    getDetail: getAyurvedaDetail,
    fallback: {
      title: "Ayurveda Wellness Guidance",
      description:
        "Support balance through Ayurveda lifestyle guidance, dosha awareness, food choices, daily rhythm, and seasonal care.",
      path: "/ayurveda"
    },
    pathPrefix: "/ayurveda"
  });
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  return renderDetailPage({
    params,
    getDetail: getAyurvedaDetail,
    render: (detail) => <AyurvedaDetailClient detail={detail} />
  });
}
