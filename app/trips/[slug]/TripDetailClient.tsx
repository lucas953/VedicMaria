"use client";

import { CTA } from "../../components/CTA";
import { Hero } from "../../components/Hero";
import { useLanguage } from "../../i18n";
import type { TripDetail } from "../tripDetails";

export function TripDetailClient({ detail }: { detail: TripDetail }) {
  const { t } = useLanguage();

  return (
    <>
      <Hero
        compact
        eyebrow={t.pages.trips.hero.eyebrow}
        title={detail.title}
        description={detail.description}
        primaryCta={{ label: t.pages.trips.hero.primary, href: "/contact" }}
        secondaryCta={{ label: t.common.backToTrips, href: "/trips" }}
      />
      <section className="section page-intro" aria-labelledby="trip-detail-title">
        <div className="page-intro-content">
          <p className="eyebrow">{t.pages.trips.heading.eyebrow}</p>
          <h2 id="trip-detail-title">{detail.title}</h2>
          <p>{detail.description}</p>
        </div>
      </section>
      <CTA
        title={t.pages.trips.cta.title}
        text={t.pages.trips.cta.text}
        buttonLabel={t.pages.trips.cta.button}
        href="/contact"
      />
    </>
  );
}
