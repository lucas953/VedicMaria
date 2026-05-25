import { createPageMetadata } from "../seo";
import VedicAstrologyPage from "./VedicAstrologyClient";

export const metadata = createPageMetadata({
  title: "Vedic Astrology Readings",
  description:
    "Receive Vedic astrology insight into your birth chart, planetary timing, relationships, life purpose, and practical remedies.",
  path: "/vedic-astrology"
});

export default function Page() {
  return <VedicAstrologyPage />;
}
