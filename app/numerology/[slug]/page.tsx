import {
  createDetailMetadata,
  generateDetailStaticParams,
  renderDetailPage
} from "../../detailPages";
import {
  getNumerologyDetail,
  numerologyDetails
} from "../numerologyDetails";
import { NumerologyDetailClient } from "./NumerologyDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return generateDetailStaticParams(numerologyDetails);
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  return createDetailMetadata({
    params,
    getDetail: getNumerologyDetail,
    fallback: {
      title: "Numerology Guidance",
      description:
        "Explore life path numbers, name numerology, personal year cycles, relationship numbers, and timing for meaningful decisions.",
      path: "/numerology"
    },
    pathPrefix: "/numerology",
    title: (detail) => `${detail.title} Numerology`
  });
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  return renderDetailPage({
    params,
    getDetail: getNumerologyDetail,
    render: (detail) => <NumerologyDetailClient detail={detail} />
  });
}
