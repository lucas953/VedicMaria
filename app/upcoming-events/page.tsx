import { createPageMetadata } from "../seo";
import UpcomingEventsPage from "./UpcomingEventsClient";

export const metadata = createPageMetadata({
  title: "Upcoming Events",
  description:
    "Join Astro Veda Life workshops, meditation circles, astrology gatherings, Ayurveda sessions, and Vastu learning events.",
  path: "/upcoming-events"
});

export default function Page() {
  return <UpcomingEventsPage />;
}
