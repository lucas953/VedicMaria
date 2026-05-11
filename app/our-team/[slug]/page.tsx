import { notFound } from "next/navigation";
import { resolveTeamSlug, routableTeamSlugs } from "../../teamSlugs";
import { TeamMemberClient } from "./TeamMemberClient";

export function generateStaticParams() {
  return routableTeamSlugs.map((slug) => ({ slug }));
}

export default async function TeamMemberPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resolvedSlug = resolveTeamSlug(slug);

  if (!resolvedSlug) {
    notFound();
  }

  return <TeamMemberClient slug={resolvedSlug} />;
}
