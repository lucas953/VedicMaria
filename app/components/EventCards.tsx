type Event = {
  date: string;
  title: string;
  location: string;
  description: string;
};

export function EventCards({
  events,
  buttonLabel = "Register Interest"
}: {
  events: readonly Event[];
  buttonLabel?: string;
}) {
  return (
    <div className="event-grid">
      {events.map((event) => (
        <article className="event-card" key={event.title}>
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
  );
}
