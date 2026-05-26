import { createPageMetadata } from "../seo";
import AyurvedaPage from "./AyurvedaClient";
import { SiteChrome } from "../components/SiteChrome";

export const metadata = createPageMetadata({
  title: "Ayurveda Wellness Guidance",
  description:
    "Support balance through Ayurveda lifestyle guidance, dosha awareness, food choices, daily rhythm, and seasonal care.",
  path: "/ayurveda"
});

export default function Page() {
  return (
    <SiteChrome>
      <AyurvedaPage />
    </SiteChrome>
  );
}
