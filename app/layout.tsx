import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LanguageProvider } from "./i18n";

export const metadata: Metadata = {
  title: "Vedic astrology",
  description:
    "Vedic astrology consultations with Ayurveda, Vastu, retreats, and events."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
