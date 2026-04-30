"use client";

import { useLanguage } from "../i18n";

type ContactFormProps = {
  showServiceFields?: boolean;
};

export function ContactForm({ showServiceFields = true }: ContactFormProps) {
  const { t } = useLanguage();
  const form = t.form;

  return (
    <form className="contact-form" action="#" method="post">
      <div className="form-row">
        <label>
          {form.name}
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          {form.email}
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          {form.phone}
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        {showServiceFields ? (
          <label>
            {form.preferredService}
            <select name="service" defaultValue="">
              <option value="" disabled>
                {form.selectService}
              </option>
              {form.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        ) : null}
      </div>
      {showServiceFields ? (
        <label>
          {form.preferredDate}
          <input name="preferred-date" type="date" />
        </label>
      ) : null}
      <label>
        {form.message}
        <textarea name="message" rows={6} required />
      </label>
      <button className="button primary" type="submit">
        {form.submit}
      </button>
    </form>
  );
}
