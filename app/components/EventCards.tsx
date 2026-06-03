"use client";

import { useLanguage } from "../i18n";
import { localizePath } from "../localePaths";

type Event = {
  date: string;
  title: string;
  location: string;
  description: string;
  href?: string;
  image?: string;
};

export function EventCards({
  events,
  buttonLabel = "Register Interest",
  showButton = true
}: {
  events: readonly Event[];
  buttonLabel?: string;
  showButton?: boolean;
}) {
  const { lang } = useLanguage();

  return (
    <div className="event-grid">
      {events.map((event) => (
        <article className="event-card" key={event.title}>
          {event.image ? (
            <div
              className="event-card-image"
              style={{ backgroundImage: `url("${event.image}")` }}
              aria-hidden="true"
            />
          ) : null}
          <time>{event.date}</time>
          <h3>{event.title}</h3>
          <p className="location">{event.location}</p>
          <p>{event.description}</p>
          {showButton ? (
            <a className="button secondary" href={event.href ?? localizePath("/contact", lang)}>
              {buttonLabel}
            </a>
          ) : null}
        </article>
      ))}
    </div>
  );
}
