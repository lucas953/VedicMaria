"use client";

import Link from "next/link";
import { useLanguage } from "../i18n";
import { localizePath } from "../localePaths";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  compact?: boolean;
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
  compact = false
}: HeroProps) {
  const { lang } = useLanguage();

  return (
    <section className={compact ? "hero compact" : "hero"}>
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
      <div className="hero-visual" aria-hidden="true">
        <span className="sun-disc" />
        <span className="mandala-ring" />
      </div>
    </section>
  );
}
