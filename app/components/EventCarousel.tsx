"use client";

import { useEffect, useState } from "react";

type Event = {
  date: string;
  title: string;
  location: string;
  description: string;
};

export function EventCarousel({
  events,
  buttonLabel
}: {
  events: readonly Event[];
  buttonLabel: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalEvents = events.length;

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
    setActiveIndex((index) => {
      if (direction === "next") {
        return (index + 1) % totalEvents;
      }

      return (index - 1 + totalEvents) % totalEvents;
    });
  };

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
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {events.map((event, index) => (
            <article
              className="event-card carousel-card"
              key={event.title}
              aria-hidden={index !== activeIndex}
            >
              <time>{event.date}</time>
              <h3>{event.title}</h3>
              <p className="location">{event.location}</p>
              <p>{event.description}</p>
              <a className="button secondary" href="/contact">
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
            className={index === activeIndex ? "active" : ""}
            aria-label={`Show ${event.title}`}
            aria-current={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
