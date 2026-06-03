"use client";

import Link from "next/link";
import type { HeroTheme } from "../heroThemes";
import { useLanguage } from "../i18n";
import { localizePath } from "../localePaths";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  compact?: boolean;
  visual?: "mandala" | "goddess" | "vastu" | "ayurveda";
  theme?: HeroTheme;
};

function HeroLink({
  cta,
  className,
  lang
}: {
  cta: { label: string; href: string; external?: boolean };
  className: string;
  lang: "en" | "bg";
}) {
  if (cta.external) {
    return (
      <a className={className} href={cta.href} target="_blank" rel="noreferrer">
        {cta.label}
      </a>
    );
  }

  return (
    <Link className={className} href={localizePath(cta.href, lang)}>
      {cta.label}
    </Link>
  );
}

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  compact = false,
  visual = "mandala",
  theme = "home"
}: HeroProps) {
  const { lang } = useLanguage();
  const hasImageVisual = visual === "goddess" || visual === "vastu" || visual === "ayurveda";
  const className = [
    "hero",
    compact ? "compact" : "",
    hasImageVisual ? "goddess-hero" : "",
    hasImageVisual ? `hero-theme-${theme}` : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={className}>
      <div className="hero-content">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p>{description}</p>
        {(primaryCta || secondaryCta) && (
          <div className="button-row">
            {primaryCta ? (
              <HeroLink cta={primaryCta} className="button primary" lang={lang} />
            ) : null}
            {secondaryCta ? (
              <HeroLink cta={secondaryCta} className="button secondary" lang={lang} />
            ) : null}
          </div>
        )}
      </div>
      {visual === "mandala" ? (
        <div className="hero-visual" aria-hidden="true">
          <span className="sun-disc" />
          <span className="mandala-ring" />
        </div>
      ) : (
        <div className={`hero-visual ${visual}-visual`} aria-hidden="true" />
      )}
    </section>
  );
}
