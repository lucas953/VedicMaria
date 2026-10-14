"use client";

import Image from "next/image";
import Link from "next/link";
import { Hero } from "../components/Hero";
import { useLanguage } from "../i18n";
import { localizePath } from "../localePaths";

export default function OurTeamPage() {
  const { lang, t } = useLanguage();
  const page = t.pages.team;

  return (
    <>
      <Hero
        compact
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={{ label: t.home.cta.button, href: "/consultation" }}
        visual="goddess"
        theme="team"
      />
      <section className="section" aria-labelledby="team-members">
        <div className="section-heading">
          <p className="eyebrow">{page.heading.eyebrow}</p>
          <h2 id="team-members">{page.heading.title}</h2>
          <p>{page.heading.text}</p>
        </div>
        <div className="team-grid">
          {page.members.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-photo">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="164px"
                />
              </div>
              <div className="team-content">
                <p className="team-role">{member.role}</p>
                <h3>{member.name}</h3>
                <p>{member.slug === "palani" ? <strong>{member.intro}</strong> : member.intro}</p>
                <Link className="button secondary" href={localizePath(`/our-team/${member.slug}`, lang)}>
                  {t.common.learnMore}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
