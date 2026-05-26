import { notFound } from "next/navigation";
import { createPageMetadata } from "../../seo";
import { resolveTeamSlug, routableTeamSlugs } from "../../teamSlugs";
import { TeamMemberClient } from "./TeamMemberClient";
import { SiteChrome } from "../../components/SiteChrome";

export const dynamicParams = false;

const teamMetadata: Record<string, { name: string; intro: string; image: string }> = {
  maria: {
    name: "Maria",
    intro:
      "Meet Maria, founder of Astro Veda Life, blending clinical psychology with Vedic astrology and spiritual guidance.",
    image: "/Maria.jpg"
  },
  "paritosh-banerjee": {
    name: "Prof. Paritosh Banerjee",
    intro:
      "Meet Prof. Paritosh Banerjee, a Vedic numerology and Vastu specialist with international teaching and consulting experience.",
    image: "/team-paritosh.png"
  },
  "venu-sasikumar": {
    name: "Dr. Venu Sasikumar",
    intro:
      "Meet Dr. Venu Sasikumar, an Ayurveda practitioner and lecturer specializing in holistic healing, Panchakarma, and wellness education.",
    image: "/team-venu.jpg"
  },
  "arjun-chakraborty": {
    name: "Arjun Chakraborty",
    intro:
      "Meet Arjun Chakraborty, a Vedic astrologer from Kolkata with decades of teaching and Jyotish practice.",
    image: "/team-arjun.jpg"
  }
};

export function generateStaticParams() {
  return routableTeamSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resolvedSlug = resolveTeamSlug(slug);
  const member = resolvedSlug ? teamMetadata[resolvedSlug] : null;

  if (!resolvedSlug || !member) {
    return createPageMetadata({
      title: "Team Member",
      description:
        "Meet the Astro Veda Life team supporting Vedic astrology, Ayurveda, Vastu, education, and community events.",
      path: "/our-team"
    });
  }

  return createPageMetadata({
    title: member.name,
    description: member.intro,
    path: `/our-team/${resolvedSlug}`
  });
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

  return (
    <SiteChrome>
      <TeamMemberClient slug={resolvedSlug} />
    </SiteChrome>
  );
}
