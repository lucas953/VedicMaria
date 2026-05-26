import { notFound } from "next/navigation";
import { createPageMetadata } from "../../seo";
import { getVastuDetail, vastuDetails } from "../vastuDetails";
import { VastuDetailClient } from "./VastuDetailClient";
import { SiteChrome } from "../../components/SiteChrome";

export const dynamicParams = false;

export function generateStaticParams() {
  return vastuDetails.map((detail) => ({ slug: detail.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getVastuDetail(slug);

  if (!detail) {
    return createPageMetadata({
      title: "Vastu Shastra Services",
      description:
        "Bring harmony to homes, offices, land, and interiors with traditional Vastu Shastra insight and practical remedies.",
      path: "/vastu"
    });
  }

  return createPageMetadata({
    title: detail.title,
    description: detail.description,
    path: `/vastu/${detail.slug}`
  });
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getVastuDetail(slug);

  if (!detail) {
    notFound();
  }

  return (
    <SiteChrome>
      <VastuDetailClient detail={detail} />
    </SiteChrome>
  );
}
