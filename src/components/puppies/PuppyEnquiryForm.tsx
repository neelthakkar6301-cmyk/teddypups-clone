import { MessageCircle } from "lucide-react";
import { useEnquiryForm } from "../../hooks/useEnquiryForm";
import type { Puppy } from "../../types/puppy";
import { puppySubtitle } from "../../utils/formatters";
import Button from "../common/Button";

export default function PuppyEnquiryForm({ puppy }: { puppy: Puppy }) {
  const label = puppy.name !== puppy.breed ? `${puppy.name} (${puppy.breed})` : puppy.breed;
  const { values, errors, opened, onChange, onSubmit } = useEnquiryForm(`Hi! I'd love to know more about ${label}.`, () => `${label} — ${puppySubtitle(puppy)}`);
  const id = (f: string) => `${puppy.slug}-${f}`;

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <div className="field">
          <label htmlFor={id("name")}>Your name <span aria-hidden="true">*</span></label>
          <input id={id("name")} name="name" value={values.name} onChange={onChange} autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? id("name-err") : undefined} />
          {errors.name && <p className="field__error" id={id("name-err")} role="alert">{errors.name}</p>}
        </div>
        <div className="field">
          <label htmlFor={id("phone")}>Phone or WhatsApp <span aria-hidden="true">*</span></label>
          <input id={id("phone")} name="phone" type="tel" inputMode="tel" placeholder="With country code, e.g. +971 50 123 4567" value={values.phone} onChange={onChange} autoComplete="tel" required aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? id("phone-err") : undefined} />
          {errors.phone && <p className="field__error" id={id("phone-err")} role="alert">{errors.phone}</p>}
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor={id("email")}>Email (optional)</label>
          <input id={id("email")} name="email" type="email" value={values.email} onChange={onChange} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? id("email-err") : undefined} />
          {errors.email && <p className="field__error" id={id("email-err")} role="alert">{errors.email}</p>}
        </div>
        <div className="field">
          <label htmlFor={id("area")}>Your area (optional)</label>
          <input id={id("area")} name="area" placeholder="e.g. Dubai Marina" value={values.area} onChange={onChange} />
        </div>
      </div>
      <div className="field">
        <label htmlFor={id("message")}>Message (optional)</label>
        <textarea id={id("message")} name="message" rows={4} value={values.message} onChange={onChange} />
      </div>
      <Button type="submit" variant="whatsapp"><MessageCircle size={18} aria-hidden="true" /> Send enquiry</Button>
      <p className="form__note" role="status">
        {opened
          ? "WhatsApp should have opened with your message ready. Nothing is sent until you press send there."
          : "This opens WhatsApp with your details pre-filled — you finish sending the message there."}
      </p>
    </form>
  );
}
