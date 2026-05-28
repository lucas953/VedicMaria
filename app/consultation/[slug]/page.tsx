import {
  createDetailMetadata,
  generateDetailStaticParams,
  renderDetailPage
} from "../../detailPages";
import {
  consultationDetails,
  getConsultationDetail
} from "../consultationDetails";
import { ConsultationDetailClient } from "./ConsultationDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return generateDetailStaticParams(consultationDetails);
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  return createDetailMetadata({
    params,
    getDetail: getConsultationDetail,
    fallback: {
      title: "Book a Consultation",
      description:
        "Book an online or in-person consultation for Vedic astrology, Vastu, Ayurveda lifestyle guidance, or spiritual coaching.",
      path: "/consultation"
    },
    pathPrefix: "/consultation"
  });
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  return renderDetailPage({
    params,
    getDetail: getConsultationDetail,
    render: (detail) => <ConsultationDetailClient detail={detail} />
  });
}
