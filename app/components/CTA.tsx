import Link from "next/link";

type CTAProps = {
  title: string;
  text: string;
  buttonLabel: string;
  href: string;
};

export function CTA({ title, text, buttonLabel, href }: CTAProps) {
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
