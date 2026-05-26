"use client";

import { Hero } from "../../components/Hero";
import { consultationBookingUrl } from "../../booking";
import { useLanguage } from "../../i18n";
import type { ConsultationDetail } from "../consultationDetails";

export function ConsultationDetailClient({
  detail
}: {
  detail: ConsultationDetail;
}) {
  const { t } = useLanguage();
  const page = t.pages.consultation;

  return (
    <>
      <Hero
        compact
        eyebrow={page.hero.eyebrow}
        title={detail.title}
        description={detail.description}
        primaryCta={{
          label: t.common.bookMeeting,
          href: consultationBookingUrl,
          external: true
        }}
        secondaryCta={{ label: t.common.backToConsultation, href: "/consultation" }}
      />
      <section className="section page-intro" aria-labelledby="consultation-detail-title">
        <div className="page-intro-content">
          <p className="eyebrow">{page.heading.eyebrow}</p>
          <h2 id="consultation-detail-title">{detail.title}</h2>
          <p>{detail.description}</p>
        </div>
      </section>
      <section className="section alt two-column" aria-labelledby="consultation-booking">
        <div>
          <p className="eyebrow">{page.form.eyebrow}</p>
          <h2 id="consultation-booking">{page.hero.title}</h2>
          <p>{page.form.text}</p>
          <div className="button-row">
            <a
              className="button primary"
              href={consultationBookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t.common.bookMeeting}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
