"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { copy } from "./siteCopy";

export { copy } from "./siteCopy";

export type Language = "en" | "bg";

type Copy = (typeof copy)[Language];

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: Copy;
} | null>(null);

export function LanguageProvider({
  children,
  initialLanguage = "en"
}: {
  children: ReactNode;
  initialLanguage?: Language;
}) {
  const [lang, setLangState] = useState<Language>(() => {
    if (initialLanguage) {
      return initialLanguage;
    }

    if (typeof window === "undefined") {
      return "en";
    }

    const stored = window.localStorage.getItem("site-language");
    if (stored === "bg" || stored === "en") {
      return stored;
    }

    return "en";
  });

  const setLang = (nextLang: Language) => {
    setLangState(nextLang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("site-language", nextLang);
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("site-language", lang);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: copy[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

export function cardsFromTuples(cards: readonly (readonly [string, string])[]) {
  return cards.map(([title, description]) => ({ title, description }));
}

