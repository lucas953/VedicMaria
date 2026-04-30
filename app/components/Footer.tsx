"use client";

import Link from "next/link";
import { useLanguage } from "../i18n";

export function Footer() {
  const { t } = useLanguage();
  const contact = t.contact;

  return (
    <footer className="site-footer">
      <div>
        <Link className="footer-brand" href="/">
          {t.brand.name}
        </Link>
        <p>{t.footer.text}</p>
      </div>
      <div>
        <h2>{t.footer.quickLinks}</h2>
        <ul>
          {t.nav.slice(1).map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>{t.footer.contact}</h2>
        <address>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a>
          <span>{contact.location}</span>
        </address>
      </div>
    </footer>
  );
}
