import { createPageMetadata } from "../seo";
import TripsPage from "./TripsClient";
import { SiteChrome } from "../components/SiteChrome";

export const metadata = createPageMetadata({
  title: "Spiritual and Wellness Trips",
  description:
    "Explore pilgrimage journeys, retreats, cultural tours, Ayurveda wellness trips, and custom spiritual travel experiences.",
  path: "/trips"
});

export default function Page() {
  return (
    <SiteChrome>
      <TripsPage />
    </SiteChrome>
  );
}
