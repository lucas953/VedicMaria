"use client";

import { CTA } from "../../components/CTA";
import { Hero } from "../../components/Hero";
import { useLanguage } from "../../i18n";
import type { VastuDetail } from "../vastuDetails";

export function VastuDetailClient({ detail }: { detail: VastuDetail }) {
  const { t } = useLanguage();

  return (
    <>
      <Hero
        compact
        eyebrow={t.pages.vastu.hero.eyebrow}
        title={detail.title}
        description={detail.description}
        primaryCta={{ label: t.pages.vastu.hero.primary, href: "/contact" }}
        secondaryCta={{ label: t.common.backToVastu, href: "/vastu" }}
      />
      <section className="section page-intro" aria-labelledby="vastu-detail-title">
        <div className="page-intro-content">
          <p className="eyebrow">{t.pages.vastu.heading.eyebrow}</p>
          <h2 id="vastu-detail-title">{detail.title}</h2>
          <p>{detail.description}</p>
        </div>
      </section>
      <CTA
        title={t.pages.vastu.cta.title}
        text={t.pages.vastu.cta.text}
        buttonLabel={t.pages.vastu.cta.button}
        href="/contact"
      />
    </>
  );
}
