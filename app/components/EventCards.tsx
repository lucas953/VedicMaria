"use client";

import { useLanguage } from "../i18n";
import { localizePath } from "../localePaths";

type Event = {
  date: string;
  title: string;
  location: string;
  description: string;
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
          <time>{event.date}</time>
          <h3>{event.title}</h3>
          <p className="location">{event.location}</p>
          <p>{event.description}</p>
          {showButton ? (
            <a className="button secondary" href={localizePath("/contact", lang)}>
              {buttonLabel}
            </a>
          ) : null}
        </article>
      ))}
    </div>
  );
}
