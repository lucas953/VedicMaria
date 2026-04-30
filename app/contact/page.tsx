"use client";

import { ContactForm } from "../components/ContactForm";
import { Hero } from "../components/Hero";
import { useLanguage } from "../i18n";

export default function ContactPage() {
  const { t } = useLanguage();
  const page = t.pages.contact;
  const contact = t.contact;

  return (
    <>
      <Hero
        compact
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
      />
      <section className="section two-column" aria-labelledby="contact-form">
        <div>
          <p className="eyebrow">{page.heading.eyebrow}</p>
          <h2 id="contact-form">{page.heading.title}</h2>
          <div className="contact-details">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a>
            <a
              className="button secondary whatsapp"
              href={`https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`}
            >
              WhatsApp
            </a>
          </div>
          <div className="location-panel">
            <h3>{page.heading.location}</h3>
            <p>{contact.location}</p>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
