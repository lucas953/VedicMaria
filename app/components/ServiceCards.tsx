import Link from "next/link";

type Service = {
  title: string;
  description: string;
  href?: string;
  image?: string;
  ctaLabel?: string;
};

export function ServiceCards({ services }: { services: readonly Service[] }) {
  return (
    <div className="card-grid">
      {services.map((service) => {
        const content = (
          <>
            <div
              className="card-image"
              style={service.image ? { background: service.image } : undefined}
              aria-hidden="true"
            />
            <div className="card-body">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.href ? <span>{service.ctaLabel ?? "Learn more"}</span> : null}
            </div>
          </>
        );

        return service.href ? (
          <Link className="service-card interactive" href={service.href} key={service.title}>
            {content}
          </Link>
        ) : (
          <article className="service-card" key={service.title}>
            {content}
          </article>
        );
      })}
    </div>
  );
}
