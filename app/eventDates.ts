export type DatedEvent = {
  date: string;
  title: string;
  location: string;
  description: string;
  startDate?: string;
  endDate?: string;
  href?: string;
  image?: string;
};

function parseIsoDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);

  if (!year || !month || !day) {
    return null;
  }

  return new Date(year, month - 1, day);
}

function startOfToday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

function getEventEndDate(event: DatedEvent) {
  return event.endDate ? parseIsoDate(event.endDate) : null;
}

function isPastEvent(event: DatedEvent, today = startOfToday()) {
  const endDate = getEventEndDate(event);
  return endDate ? endDate < today : false;
}

function sortUpcomingEvents(events: readonly DatedEvent[]) {
  return [...events].sort((first, second) => {
    const firstDate = first.startDate ? parseIsoDate(first.startDate)?.getTime() : 0;
    const secondDate = second.startDate ? parseIsoDate(second.startDate)?.getTime() : 0;
    return (firstDate ?? 0) - (secondDate ?? 0);
  });
}

function sortPastEvents(events: readonly DatedEvent[]) {
  return [...events].sort((first, second) => {
    const firstDate = getEventEndDate(first)?.getTime() ?? 0;
    const secondDate = getEventEndDate(second)?.getTime() ?? 0;
    return secondDate - firstDate;
  });
}

export function getCurrentEventGroups({
  events,
  pastEvents,
  today = startOfToday()
}: {
  events: readonly DatedEvent[];
  pastEvents: readonly DatedEvent[];
  today?: Date;
}) {
  const allEvents = [...events, ...pastEvents];

  return {
    upcomingEvents: sortUpcomingEvents(
      allEvents.filter((event) => !isPastEvent(event, today))
    ),
    pastEvents: sortPastEvents(allEvents.filter((event) => isPastEvent(event, today)))
  };
}

export function getTodayKey() {
  const today = startOfToday();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function parseLocalDateKey(value: string) {
  return parseIsoDate(value) ?? startOfToday();
}
