"use client";

import { useLanguage } from "../i18n";

type ContactFormProps = {
  showServiceFields?: boolean;
};

const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const web3FormsEndpoint = "https://api.web3forms.com/submit";

export function ContactForm({ showServiceFields = true }: ContactFormProps) {
  const { t } = useLanguage();
  const form = t.form;
  const isConfigured = web3FormsAccessKey.length > 0;

  return (
    <form
      className="contact-form"
      action={web3FormsEndpoint}
      method="POST"
      aria-describedby="contact-form-note"
    >
      <input type="hidden" name="access_key" value={web3FormsAccessKey} />
      <input type="hidden" name="subject" value="New message from astrovedalife.com" />
      <input type="hidden" name="from_name" value="Astro Veda Life Website" />
      <p className="form-note" id="contact-form-note">
        {isConfigured
          ? "Your message will be sent securely through Web3Forms."
          : "This form needs a Web3Forms access key before it can send messages."}
      </p>
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
      <button className="button primary" type="submit" disabled={!isConfigured}>
        {form.submit}
      </button>
    </form>
  );
}
