"use client";

import { useRef } from "react";

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
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "previous" | "next") => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const distance = Math.min(track.clientWidth * 0.86, 520);
    track.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth"
    });
  };

  return (
    <div className="event-carousel">
      <div className="carousel-controls" aria-label="Event carousel controls">
        <button type="button" aria-label="Previous event" onClick={() => scrollByCard("previous")}>
          ←
        </button>
        <button type="button" aria-label="Next event" onClick={() => scrollByCard("next")}>
          →
        </button>
      </div>
      <div className="event-carousel-track" ref={trackRef}>
        {events.map((event) => (
          <article className="event-card carousel-card" key={event.title}>
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
  );
}
