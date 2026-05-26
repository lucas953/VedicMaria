import type { Language } from "./i18n";

function hasProtocolOrSpecialTarget(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  );
}

export function withoutLocalePrefix(path: string) {
  if (path === "/bg") {
    return "/";
  }

  return path.startsWith("/bg/") ? path.slice(3) : path;
}

export function localizePath(href: string, lang: Language) {
  if (hasProtocolOrSpecialTarget(href)) {
    return href;
  }

  const normalized = href.startsWith("/") ? href : `/${href}`;
  const withoutLocale = withoutLocalePrefix(normalized);

  if (lang === "bg") {
    return withoutLocale === "/" ? "/bg" : `/bg${withoutLocale}`;
  }

  return withoutLocale;
}
