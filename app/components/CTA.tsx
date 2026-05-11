import Link from "next/link";

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
  if (variant === "newsletter") {
    return (
      <section className="cta community-cta" aria-labelledby="community-title">
        <div>
          <h2 id="community-title">{title}</h2>
          <p>{text}</p>
        </div>
        <form className="community-form" action="#" method="post">
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
          <button className="button primary" type="submit">
            {buttonLabel}
          </button>
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
      <Link className="button primary" href={href}>
        {buttonLabel}
      </Link>
    </section>
  );
}
