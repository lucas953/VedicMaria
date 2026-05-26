import type { Language } from "./i18n";

export type DetailWithBg = {
  title: string;
  description: string;
  bg: {
    title: string;
    description: string;
  };
};

export function getLocalizedDetail<T extends DetailWithBg>(
  detail: T,
  lang: Language
) {
  return lang === "bg" ? detail.bg : detail;
}
