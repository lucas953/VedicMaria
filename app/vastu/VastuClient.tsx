"use client";

import { CTA } from "../components/CTA";
import { Hero } from "../components/Hero";
import { ServiceCards } from "../components/ServiceCards";
import { cardsFromTuples, copy, useLanguage } from "../i18n";
import { vastuDetails } from "./vastuDetails";

const vastuCardImages = [
  'linear-gradient(rgba(50, 76, 53, 0.08), rgba(50, 76, 53, 0.08)), url("/vastu-card-1.jpg")',
  'linear-gradient(rgba(50, 76, 53, 0.08), rgba(50, 76, 53, 0.08)), url("/vastu-card-2.jpg")',
  'linear-gradient(rgba(50, 76, 53, 0.08), rgba(50, 76, 53, 0.08)), url("/vastu-card-3.jpg")',
  'linear-gradient(rgba(50, 76, 53, 0.08), rgba(50, 76, 53, 0.08)), url("/vastu-card-4.jpg")',
  'linear-gradient(rgba(50, 76, 53, 0.08), rgba(50, 76, 53, 0.08)), url("/vastu-card-5.jpg")'
] as const;

export default function VastuPage() {
  const { t } = useLanguage();
  const page = t.pages.vastu;
  const intro = "intro" in page ? page.intro : copy.en.pages.vastu.intro;
  const services = cardsFromTuples(page.cards).map((service, index) => ({
    ...service,
    href: `/vastu/${vastuDetails[index].slug}`,
    image: vastuCardImages[index % vastuCardImages.length],
    imagePosition: "center",
    imageSize: "cover",
    ctaLabel: t.common.learnMore
  }));

  return (
    <>
      <Hero
        compact
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={{ label: page.hero.primary, href: "/contact" }}
        visual="vastu"
        theme="vastu"
      />
      <section className="section page-intro" aria-label="About Vastu Shastra">
        <div className="page-intro-content">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section className="section" aria-labelledby="vastu-services">
        <div className="section-heading">
          <p className="eyebrow">{page.heading.eyebrow}</p>
          <h2 id="vastu-services">{page.heading.title}</h2>
          <p>{page.heading.text}</p>
        </div>
        <ServiceCards services={services} />
      </section>
      <CTA
        title={page.cta.title}
        text={page.cta.text}
        buttonLabel={page.cta.button}
        href="/contact"
      />
    </>
  );
}
