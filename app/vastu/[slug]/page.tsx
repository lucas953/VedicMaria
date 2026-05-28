import {
  createDetailMetadata,
  generateDetailStaticParams,
  renderDetailPage
} from "../../detailPages";
import { getVastuDetail, vastuDetails } from "../vastuDetails";
import { VastuDetailClient } from "./VastuDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return generateDetailStaticParams(vastuDetails);
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  return createDetailMetadata({
    params,
    getDetail: getVastuDetail,
    fallback: {
      title: "Vastu Shastra Services",
      description:
        "Bring harmony to homes, offices, land, and interiors with traditional Vastu Shastra insight and practical remedies.",
      path: "/vastu"
    },
    pathPrefix: "/vastu"
  });
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  return renderDetailPage({
    params,
    getDetail: getVastuDetail,
    render: (detail) => <VastuDetailClient detail={detail} />
  });
}
