import { SiteChrome } from "../../components/SiteChrome";
import { createPageMetadata } from "../../seo";
import { LecturesClient } from "./LecturesClient";
import { lectureCopy, lecturePath } from "./eventCopy";

export const metadata = createPageMetadata({
  title: lectureCopy.en.title,
  description: lectureCopy.en.description,
  path: lecturePath
});

export default function LecturesPage() {
  return <SiteChrome><LecturesClient /></SiteChrome>;
}
