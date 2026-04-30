import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  compact = false
}: HeroProps) {
  return (
    <section className={compact ? "hero compact" : "hero"}>
      <div className="hero-content">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p>{description}</p>
        {(primaryCta || secondaryCta) && (
          <div className="button-row">
            {primaryCta ? (
              <Link className="button primary" href={primaryCta.href}>
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link className="button secondary" href={secondaryCta.href}>
                {secondaryCta.label}
              </Link>
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
