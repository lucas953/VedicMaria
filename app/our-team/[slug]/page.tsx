"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "../../components/Hero";
import { useLanguage } from "../../i18n";

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const { t } = useLanguage();
  const member = t.pages.team.members.find((item) => item.slug === params.slug);

  if (!member) {
    notFound();
  }

  return (
    <>
      <Hero
        compact
        eyebrow={member.role}
        title={member.name}
        description={member.intro}
        primaryCta={{ label: t.common.backToTeam, href: "/our-team" }}
      />
      <section className="section team-bio-section" aria-labelledby="team-bio-title">
        <div className="team-bio-photo">
          <Image src={member.image} alt={member.name} fill sizes="(max-width: 900px) 100vw, 34vw" />
        </div>
        <article className="team-bio-content">
          <p className="eyebrow">{member.role}</p>
          <h2 id="team-bio-title">{member.name}</h2>
          {member.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link className="button secondary" href="/our-team">
            {t.common.backToTeam}
          </Link>
        </article>
      </section>
    </>
  );
}
