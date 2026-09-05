"use client";

import { useLanguage } from "../i18n";
import { localizePath } from "../localePaths";
import type { DatedEvent } from "../eventDates";

export function EventCards({
  events,
  buttonLabel = "Register Interest",
  showButton = true,
  emptyMessage
}: {
  events: readonly DatedEvent[];
  buttonLabel?: string;
  showButton?: boolean;
  emptyMessage?: {
    date: string;
    title: string;
    location: string;
    description: string;
  };
}) {
  const { lang } = useLanguage();

  if (events.length === 0 && emptyMessage) {
    return (
      <div className="event-grid">
        <article className="event-card">
          <time>{emptyMessage.date}</time>
          <h3>{emptyMessage.title}</h3>
          <p className="location">{emptyMessage.location}</p>
          <p>{emptyMessage.description}</p>
        </article>
      </div>
    );
  }

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
            <a
              className="button secondary"
              href={
                event.href
                  ? localizePath(event.href, lang)
                  : localizePath("/contact", lang)
              }
            >
              {buttonLabel}
            </a>
          ) : null}
        </article>
      ))}
    </div>
  );
}
