"use client";

import Link from "next/link";
import { useLanguage } from "../i18n";
import { localizePath } from "../localePaths";

type CTAProps = {
  title: string;
  text: string;
  buttonLabel: string;
  href?: string;
  emailPlaceholder?: string;
  variant?: "link" | "newsletter";
};

export function CTA({
  title,
  text,
  buttonLabel,
  href = "/contact",
  emailPlaceholder = "Enter your email",
  variant = "link"
}: CTAProps) {
  const { lang } = useLanguage();

  if (variant === "newsletter") {
    return (
      <section className="cta community-cta" aria-labelledby="community-title">
        <div>
          <h2 id="community-title">{title}</h2>
          <p>{text}</p>
        </div>
        <form className="community-form" aria-describedby="community-form-static-note">
          <label>
            <span className="sr-only">{emailPlaceholder}</span>
            <input
              name="community-email"
              type="email"
              placeholder={emailPlaceholder}
              autoComplete="email"
              required
            />
          </label>
          <button className="button primary" type="button" disabled>
            {buttonLabel}
          </button>
          <p className="form-note community-note" id="community-form-static-note">
            Newsletter signup is not connected yet.
          </p>
        </form>
      </section>
    );
  }

  return (
    <section className="cta">
      <div>
        <p className="eyebrow">Begin with clarity</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Link className="button primary" href={localizePath(href, lang)}>
        {buttonLabel}
      </Link>
    </section>
  );
}
