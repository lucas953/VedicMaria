"use client";

import { useMemo, useSyncExternalStore } from "react";
import {
  getCurrentEventGroups,
  getTodayKey,
  parseLocalDateKey,
  type DatedEvent
} from "./eventDates";

const serverTodayKey = "";

function subscribeToDateChange(onStoreChange: () => void) {
  const now = new Date();
  const nextMidnight = new Date(now);
  nextMidnight.setDate(now.getDate() + 1);
  nextMidnight.setHours(0, 0, 1, 0);

  const timer = window.setTimeout(onStoreChange, nextMidnight.getTime() - now.getTime());

  return () => window.clearTimeout(timer);
}

export function useCurrentEventGroups({
  events,
  pastEvents
}: {
  events: readonly DatedEvent[];
  pastEvents: readonly DatedEvent[];
}) {
  const todayKey = useSyncExternalStore(
    subscribeToDateChange,
    getTodayKey,
    () => serverTodayKey
  );

  return useMemo(() => {
    if (!todayKey) {
      return {
        upcomingEvents: events,
        pastEvents
      };
    }

    return getCurrentEventGroups({
      events,
      pastEvents,
      today: parseLocalDateKey(todayKey)
    });
  }, [events, pastEvents, todayKey]);
}
