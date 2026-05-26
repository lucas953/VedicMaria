import type { Language } from "../i18n";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LanguageProvider } from "../i18n";

export function SiteChrome({
  children,
  initialLanguage = "en"
}: {
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <Header />
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
