import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { SiteChrome } from "./components/SiteChrome";
import { createPageMetadata } from "./seo";

type DetailBase = {
  slug: string;
  title: string;
  description: string;
};

type DetailParams = {
  params: Promise<{ slug: string }>;
};

type FallbackMetadata = {
  title: string;
  description: string;
  path: string;
};

export function generateDetailStaticParams<T extends DetailBase>(
  details: readonly T[]
) {
  return details.map((detail) => ({ slug: detail.slug }));
}

export async function createDetailMetadata<T extends DetailBase>({
  params,
  getDetail,
  fallback,
  pathPrefix,
  title
}: DetailParams & {
  getDetail: (slug: string) => T | undefined;
  fallback: FallbackMetadata;
  pathPrefix: string;
  title?: (detail: T) => string;
}) {
  const { slug } = await params;
  const detail = getDetail(slug);

  if (!detail) {
    return createPageMetadata(fallback);
  }

  return createPageMetadata({
    title: title ? title(detail) : detail.title,
    description: detail.description,
    path: `${pathPrefix}/${detail.slug}`
  });
}

export async function renderDetailPage<T extends DetailBase>({
  params,
  getDetail,
  render
}: DetailParams & {
  getDetail: (slug: string) => T | undefined;
  render: (detail: T) => ReactNode;
}) {
  const { slug } = await params;
  const detail = getDetail(slug);

  if (!detail) {
    notFound();
  }

  return <SiteChrome>{render(detail)}</SiteChrome>;
}
