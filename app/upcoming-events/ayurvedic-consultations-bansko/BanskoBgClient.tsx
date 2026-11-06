"use client";

import Link from "next/link";
import { Hero } from "../../components/Hero";

export function BanskoBgClient() {
  return (
    <>
      <Hero
        compact
        eyebrow="Минало събитие · 29 юни – 10 юли 2026 г."
        title="Аюрведични консултации в Банско"
        description="Индивидуални аюрведични консултации с д-р Вену Сасикумар в Pirin Sense, Банско. Това събитие е приключило."
        primaryCta={{ label: "Към предстоящите събития", href: "/upcoming-events" }}
        visual="image"
        imageSrc="/images/events/ayurveda-bansko-hero.jpg"
        theme="ayurveda"
      />
      <section className="section alt two-column" aria-labelledby="bansko-consultations">
        <div>
          <p className="eyebrow">За консултациите</p>
          <h2 id="bansko-consultations">Индивидуални насоки за повече баланс</h2>
          <p>
            Аюрведичната консултация разглежда индивидуалната конституция, начина на
            живот, храносмилането, съня, стреса и енергията. Препоръките се съобразяват
            с особеностите на тялото и ежедневието на всеки човек.
          </p>
          <p>
            Срещите са подходящи както за хора, които вече познават Аюрведа, така и
            за начинаещи, търсещи практическа подкрепа за своето благополучие.
          </p>
        </div>
        <div className="event-step-list">
          {[
            "Оценка на индивидуалната аюрведична конституция",
            "Разговор за начина на живот и ежедневния режим",
            "Обсъждане на храносмилането, съня, стреса и енергията",
            "Индивидуални препоръки, съобразени с тялото и начина на живот"
          ].map((step, index) => (
            <article className="event-step" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section two-column" aria-labelledby="bansko-practitioner">
        <div>
          <p className="eyebrow">За специалиста</p>
          <h2 id="bansko-practitioner">Д-р Вену Сасикумар</h2>
          <p>
            Аюрведичен лекар с опит в традиционната аюрведична оценка,
            индивидуалните препоръки и насоките за начин на живот.
            Подходът му е спокоен и практичен, с внимание към потребностите на всеки човек.
          </p>
          <Link className="button secondary" href="/bg/our-team/venu-sasikumar/">
            Повече за д-р Вену
          </Link>
        </div>
        <div className="event-mini-card">
          <p className="eyebrow">Дати и място</p>
          <h3>29 юни – 10 юли 2026 г.</h3>
          <p>Pirin Sense, Банско</p>
          <p>Събитието е приключило. Записването е затворено.</p>
        </div>
      </section>
      <section className="event-final-cta" aria-labelledby="bansko-archive">
        <div>
          <h2 id="bansko-archive">Това събитие е приключило</h2>
          <p>Нови дати за консултации и срещи ще бъдат публикувани сред предстоящите събития.</p>
        </div>
        <Link className="button secondary" href="/bg/upcoming-events/">
          Към предстоящите събития
        </Link>
      </section>
    </>
  );
}
