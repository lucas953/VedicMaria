"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage, type Language } from "../i18n";
import { localizePath, withoutLocalePrefix } from "../localePaths";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const activePathname = withoutLocalePrefix(pathname);

  return (
    <header className={isOpen ? "site-header menu-open" : "site-header"}>
      <Link className="brand" href={localizePath("/", lang)} onClick={() => setIsOpen(false)}>
        <span className="brand-mark" aria-hidden="true" />
        <span>
          <strong>{t.brand.name}</strong>
          <small>{t.brand.tagline}</small>
        </span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="main-navigation"
        className={isOpen ? "main-nav open" : "main-nav"}
        aria-label="Main navigation"
      >
        {t.nav.map((item) => {
          const active =
            item.href === "/"
              ? activePathname === "/"
              : activePathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={localizePath(item.href, lang)}
              className={active ? "active" : ""}
              aria-current={active ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
        <div className="language-switch" aria-label="Language selector">
          {(["en", "bg"] as Language[]).map((option) => (
            <Link
              key={option}
              href={localizePath(pathname, option)}
              className={lang === option ? "active" : ""}
              aria-pressed={lang === option}
              onClick={() => {
                setLang(option);
                setIsOpen(false);
              }}
            >
              {option.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
