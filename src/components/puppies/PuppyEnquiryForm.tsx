import { useEnquiryForm } from "../../hooks/useEnquiryForm";
import type { Puppy } from "../../types/puppy";
import { puppySubtitle } from "../../utils/formatters";
import Button from "../common/Button";

/** Enquiry form for one puppy. Submitting opens WhatsApp with the details filled in. */
export default function PuppyEnquiryForm({ puppy }: { puppy: Puppy }) {
  const label = puppy.name !== puppy.breed ? `${puppy.name} (${puppy.breed})` : puppy.breed;
  const sold = puppy.status === "sold";
  const greeting = sold ? `Hi! I'd love a puppy like ${label}.` : `Hi! I'd love to know more about ${label}.`;
  const { values, errors, opened, onChange, onSubmit } = useEnquiryForm(greeting, () => `${label} — ${puppySubtitle(puppy)}${sold ? " (gone home)" : ""}`);
  const id = (f: string) => `${puppy.slug}-${f}`;
  const describedBy = (f: string, hint?: boolean) => [hint ? id(`${f}-hint`) : "", errors[f as keyof typeof errors] ? id(`${f}-err`) : ""].filter(Boolean).join(" ") || undefined;

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <div className="field">
          <label htmlFor={id("name")}>Your name <span className="field__req" aria-hidden="true">*</span></label>
          <input id={id("name")} name="name" value={values.name} onChange={onChange} autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={describedBy("name")} />
          {errors.name && <p className="field__error" id={id("name-err")} role="alert">{errors.name}</p>}
        </div>
        <div className="field">
          <label htmlFor={id("phone")}>Phone or WhatsApp <span className="field__req" aria-hidden="true">*</span></label>
          <input id={id("phone")} name="phone" type="tel" inputMode="tel" value={values.phone} onChange={onChange} autoComplete="tel" required aria-invalid={Boolean(errors.phone)} aria-describedby={describedBy("phone", true)} />
          <p className="field__hint" id={id("phone-hint")}>With country code, e.g. +971 50 123 4567</p>
          {errors.phone && <p className="field__error" id={id("phone-err")} role="alert">{errors.phone}</p>}
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor={id("email")}>Email <span className="optional">(optional)</span></label>
          <input id={id("email")} name="email" type="email" value={values.email} onChange={onChange} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={describedBy("email")} />
          {errors.email && <p className="field__error" id={id("email-err")} role="alert">{errors.email}</p>}
        </div>
        <div className="field">
          <label htmlFor={id("area")}>Your area <span className="optional">(optional)</span></label>
          <input id={id("area")} name="area" value={values.area} onChange={onChange} aria-describedby={id("area-hint")} />
          <p className="field__hint" id={id("area-hint")}>e.g. Dubai Marina</p>
        </div>
      </div>
      <div className="field">
        <label htmlFor={id("message")}>Message <span className="optional">(optional)</span></label>
        <textarea id={id("message")} name="message" rows={4} value={values.message} onChange={onChange} />
      </div>
      <Button type="submit">Send enquiry</Button>
      <p className="form__note" role="status">
        {opened
          ? "WhatsApp should have opened with your message ready. Nothing is sent until you press send there."
          : "Sending opens WhatsApp with your details filled in — you finish sending the message there."}
      </p>
    </form>
  );
}
