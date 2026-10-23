import { useState, type CSSProperties } from "react";
import { availablePuppies } from "../../data/puppies";
import { useEnquiryForm } from "../../hooks/useEnquiryForm";
import type { Puppy } from "../../types/puppy";
import Button from "../common/Button";
import { PawPrint } from "../mascot/TeddyArt";

const ANY = "any";
const optionLabel = (p: Puppy) => `${p.name} (${p.name !== p.breed ? `${p.breed}, ` : ""}${p.gender.toLowerCase()})`;
const blank = (size: string) => ({ "--size": size }) as CSSProperties;

/** The "Dear TeddyPups, my name is …" letter from the reference contact page. Posting opens WhatsApp. */
export default function ContactLetterForm() {
  const [selected, setSelected] = useState(ANY);
  const puppy = availablePuppies.find((p) => p.slug === selected);
  const { values, errors, opened, onChange, onSubmit } = useEnquiryForm("", () => (puppy ? optionLabel(puppy) : undefined));
  const problems = [errors.name, errors.phone, errors.email].filter(Boolean);

  return (
    <form className="letterform" onSubmit={onSubmit} noValidate>
      <span className="letter__stamp" aria-hidden="true"><PawPrint className="letterform__paw" /></span>
      <p className="letterform__greeting font-scrawl">Dear TeddyPups,</p>
      <p className="letterform__line">
        my name is{" "}
        <span className="blank" style={blank("16ch")}><input aria-label="Your name (required)" name="name" value={values.name} onChange={onChange} autoComplete="name" required aria-invalid={Boolean(errors.name)} /></span>
        , and you can reach me on{" "}
        <span className="blank" style={blank("15ch")}><input aria-label="Phone or WhatsApp number with country code (required)" type="tel" inputMode="tel" placeholder="+971 50 123 4567" name="phone" value={values.phone} onChange={onChange} autoComplete="tel" required aria-invalid={Boolean(errors.phone)} /></span>
        {" "}or by email at{" "}
        <span className="blank" style={blank("20ch")}><input aria-label="Email (optional)" type="email" placeholder="optional" name="email" value={values.email} onChange={onChange} autoComplete="email" aria-invalid={Boolean(errors.email)} /></span>.
      </p>
      <p className="letterform__line">
        I live in{" "}
        <span className="blank" style={blank("13ch")}><input aria-label="Your area (optional)" placeholder="e.g. Dubai Marina" name="area" value={values.area} onChange={onChange} /></span>
        , and I'm curious about{" "}
        <span className="blank blank--select">
          <label className="sr-only" htmlFor="letter-puppy">Puppy you're interested in (optional)</label>
          <select id="letter-puppy" name="puppyId" value={selected} onChange={(e) => setSelected(e.target.value)}>
            <option value={ANY}>any puppy (not sure yet)</option>
            {availablePuppies.map((p) => <option key={p.id} value={p.slug}>{optionLabel(p)}</option>)}
          </select>
        </span>.
      </p>
      <label className="sr-only" htmlFor="letter-message">Your message (optional)</label>
      <textarea id="letter-message" name="message" rows={4} className="letterform__note" placeholder="Anything else you'd like to tell us…" value={values.message} onChange={onChange} />
      {problems.length > 0 && (
        <div className="letterform__alert" role="alert">
          <strong>Almost there — please check:</strong>
          <ul>{problems.map((e) => <li key={e}>{e}</li>)}</ul>
        </div>
      )}
      <div className="letterform__sign">
        <p className="font-scrawl">with love, a future puppy parent</p>
        <Button type="submit">Post my letter</Button>
      </div>
      <p className="form__note" role="status">
        {opened ? "WhatsApp should have opened with your letter ready. Nothing is sent until you press send there." : "Posting opens WhatsApp with your letter filled in — you finish sending it there."}
      </p>
    </form>
  );
}
