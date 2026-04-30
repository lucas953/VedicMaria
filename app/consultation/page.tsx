"use client";

import { ContactForm } from "../components/ContactForm";
import { Hero } from "../components/Hero";
import { ServiceCards } from "../components/ServiceCards";
import { cardsFromTuples, useLanguage } from "../i18n";

export default function ConsultationPage() {
  const { t } = useLanguage();
  const page = t.pages.consultation;

  return (
    <>
      <Hero
        compact
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
      />
      <section className="section" aria-labelledby="consultation-types">
        <div className="section-heading">
          <p className="eyebrow">{page.heading.eyebrow}</p>
          <h2 id="consultation-types">{page.heading.title}</h2>
          <p>{page.heading.text}</p>
        </div>
        <ServiceCards services={cardsFromTuples(page.cards)} />
      </section>
      <section className="section alt two-column" aria-labelledby="booking-form">
        <div>
          <p className="eyebrow">{page.form.eyebrow}</p>
          <h2 id="booking-form">{page.form.title}</h2>
          <p>{page.form.text}</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
