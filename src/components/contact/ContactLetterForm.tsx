import { Mail } from "lucide-react";
import { availablePuppies } from "../../data/puppies";
import { useEnquiryForm } from "../../hooks/useEnquiryForm";
import { useState } from "react";
import Button from "../common/Button";

const ANY = "any";

/** The "Dear TeddyPups, my name is …" letter-style form from the reference contact page. */
export default function ContactLetterForm() {
  const [selected, setSelected] = useState(ANY);
  const puppy = availablePuppies.find((p) => p.slug === selected);
  const label = puppy ? `${puppy.name}${puppy.name !== puppy.breed ? ` (${puppy.breed}, ${puppy.gender.toLowerCase()})` : ` (${puppy.gender.toLowerCase()})`}` : undefined;
  const { values, errors, opened, onChange, onSubmit } = useEnquiryForm("", () => label);

  return (
    <form className="letter" onSubmit={onSubmit} noValidate>
      <p className="letter__salutation">Dear TeddyPups,</p>
      <p className="letter__line">
        <label htmlFor="c-name">my name is</label>
        <input id="c-name" name="name" placeholder="your name" value={values.name} onChange={onChange} autoComplete="name" required aria-invalid={Boolean(errors.name)} />
        <span>, and you can reach me on</span>
        <label className="sr-only" htmlFor="c-phone">Phone or WhatsApp</label>
        <input id="c-phone" name="phone" type="tel" inputMode="tel" placeholder="+971 50 123 4567" value={values.phone} onChange={onChange} autoComplete="tel" required aria-invalid={Boolean(errors.phone)} />
        <span>or by email at</span>
        <label className="sr-only" htmlFor="c-email">Email (optional)</label>
        <input id="c-email" name="email" type="email" placeholder="email (optional)" value={values.email} onChange={onChange} autoComplete="email" aria-invalid={Boolean(errors.email)} />.
      </p>
      {(errors.name || errors.phone || errors.email) && (
        <ul className="letter__errors" role="alert">
          {[errors.name, errors.phone, errors.email].filter(Boolean).map((e) => <li key={e}>{e}</li>)}
        </ul>
      )}
      <p className="letter__line">
        <label htmlFor="c-area">I live in</label>
        <input id="c-area" name="area" placeholder="your area (optional)" value={values.area} onChange={onChange} />
        <span>, and I'm curious about</span>
        <label className="sr-only" htmlFor="c-puppy">Puppy you're interested in (optional)</label>
        <select id="c-puppy" value={selected} onChange={(e) => setSelected(e.target.value)}>
          <option value={ANY}>any puppy (not sure yet)</option>
          {availablePuppies.map((p) => (
            <option key={p.id} value={p.slug}>
              {p.name}{p.name !== p.breed ? ` (${p.breed}, ${p.gender.toLowerCase()})` : ` (${p.gender.toLowerCase()})`}
            </option>
          ))}
        </select>.
      </p>
      <div className="field">
        <label htmlFor="c-message">Your message (optional)</label>
        <textarea id="c-message" name="message" rows={4} value={values.message} onChange={onChange} />
      </div>
      <p className="letter__sign">with love, a future puppy parent</p>
      <Button type="submit" variant="primary"><Mail size={18} aria-hidden="true" /> Post my letter</Button>
      <p className="form__note" role="status">
        {opened ? "WhatsApp should have opened with your letter ready. Nothing is sent until you press send there." : "Posting opens WhatsApp with your letter pre-filled — you finish sending it there."}
      </p>
    </form>
  );
}
