"use client";

import Link from "next/link";
import { Hero } from "../../components/Hero";
import { useLanguage } from "../../i18n";
import { localizePath } from "../../localePaths";
import { lectureCopy, registrationEmail } from "./eventCopy";
import styles from "./lectures.module.css";

export function LecturesClient() {
  const { lang } = useLanguage();
  const page = lectureCopy[lang];
  const emailLink = (subject: string) =>
    `mailto:${registrationEmail}?subject=${encodeURIComponent(subject)}`;

  return (
    <>
      <Hero
        compact
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.introduction}
        primaryCta={{ label: page.programme, href: "#programme" }}
        secondaryCta={{ label: page.register, href: "#registration" }}
        visual="mandala"
        theme="astrology"
      />
      <section className={`section ${styles.programme}`} id="programme" aria-label={page.programme}>
        {page.lectures.map((lecture, index) => (
          <article className={styles.lecture} id={lecture.id} key={lecture.id} aria-labelledby={`${lecture.id}-title`}>
            <header className={styles.heading}>
              <p className="eyebrow">{String(index + 1).padStart(2, "0")} · <time dateTime={lecture.isoDate}>{lecture.date}</time></p>
              <h2 id={`${lecture.id}-title`}>{lecture.title}</h2>
            </header>
            <div className={styles.content}>
              <p className={styles.question}>{lecture.question}</p>
              {lecture.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {lecture.topics.length > 0 && (
                <>
                  <p>{lecture.topicsIntro}</p>
                  <ul className="event-inclusion-list">
                    {lecture.topics.map((topic) => <li key={topic}>{topic}</li>)}
                  </ul>
                </>
              )}
            </div>
            <aside className={styles.details} aria-label={`${lecture.title} — ${page.dateLabel}, ${page.timeLabel}`}>
              <dl>
                <div><dt>{page.dateLabel}</dt><dd><time dateTime={lecture.isoDate}>{lecture.date}</time></dd></div>
                <div><dt>{page.timeLabel}</dt><dd>{page.time}</dd></div>
                <div><dt>{page.priceLabel}</dt><dd className={styles.price}>{page.price}</dd></div>
                <div><dt>{page.venueLabel}</dt><dd>{page.address}</dd></div>
              </dl>
              <a className="button primary" href={emailLink(`${lecture.title} — ${lecture.date}`)}>{page.register}</a>
            </aside>
          </article>
        ))}
      </section>
      <section className={`section alt ${styles.registration}`} id="registration" aria-labelledby="registration-title">
        <div>
          <p className="eyebrow">{page.register}</p>
          <h2 id="registration-title">{page.registrationTitle}</h2>
          <p>{page.registrationText}</p>
          <a className={styles.email} href={emailLink(`${page.title} — 14–15.11.2026`)}>{registrationEmail}</a>
        </div>
        <Link className="button secondary" href={localizePath("/upcoming-events", lang)}>{page.back}</Link>
      </section>
    </>
  );
}
