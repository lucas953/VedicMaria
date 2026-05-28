"use client";

import Link from "next/link";
import { useLanguage } from "../i18n";
import { localizePath } from "../localePaths";

type Service = {
  title: string;
  description: string;
  href?: string;
  image?: string;
  imagePosition?: string;
  imageSize?: string;
  ctaLabel?: string;
};

export function ServiceCards({ services }: { services: readonly Service[] }) {
  const { lang } = useLanguage();

  return (
    <div className="card-grid">
      {services.map((service) => {
        const content = (
          <>
            <div
              className="card-image"
              style={
                service.image
                  ? {
                      backgroundImage: service.image,
                      backgroundPosition: service.imagePosition ?? "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: service.imageSize ?? "cover"
                    }
                  : undefined
              }
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
          <Link
            className="service-card interactive"
            href={localizePath(service.href, lang)}
            key={service.title}
          >
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
