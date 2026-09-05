"use client";

import { useEffect, useState } from "react";
import type { DatedEvent } from "../eventDates";
import { useLanguage } from "../i18n";
import { localizePath } from "../localePaths";

export function EventCarousel({
  events,
  buttonLabel,
  emptyMessage
}: {
  events: readonly DatedEvent[];
  buttonLabel: string;
  emptyMessage: {
    date: string;
    title: string;
    location: string;
    description: string;
  };
}) {
  const { lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const totalEvents = events.length;
  const visibleIndex = totalEvents === 0 ? 0 : activeIndex % totalEvents;

  useEffect(() => {
    if (totalEvents < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % totalEvents);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [totalEvents]);

  const moveSlide = (direction: "previous" | "next") => {
    if (totalEvents === 0) {
      return;
    }

    setActiveIndex((index) => {
      if (direction === "next") {
        return (index + 1) % totalEvents;
      }

      return (index - 1 + totalEvents) % totalEvents;
    });
  };

  if (totalEvents === 0) {
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
    <div className="event-carousel">
      <div className="carousel-controls" aria-label="Event carousel controls">
        <button type="button" aria-label="Previous event" onClick={() => moveSlide("previous")}>
          <span aria-hidden="true">{"<"}</span>
        </button>
        <button type="button" aria-label="Next event" onClick={() => moveSlide("next")}>
          <span aria-hidden="true">{">"}</span>
        </button>
      </div>
      <div className="event-carousel-viewport">
        <div
          className="event-carousel-track"
          style={{ transform: `translateX(-${visibleIndex * 100}%)` }}
        >
          {events.map((event, index) => (
            <article
              className="event-card carousel-card"
              key={event.title}
              aria-hidden={index !== visibleIndex}
            >
              <time>{event.date}</time>
              <h3>{event.title}</h3>
              <p className="location">{event.location}</p>
              <p>{event.description}</p>
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
            </article>
          ))}
        </div>
      </div>
      <div className="carousel-dots" aria-label="Choose event">
        {events.map((event, index) => (
          <button
            key={event.title}
            type="button"
            className={index === visibleIndex ? "active" : ""}
            aria-label={`Show ${event.title}`}
            aria-current={index === visibleIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
