import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { findPuppy } from "../../hooks/usePuppies";
import { mediaUrl } from "../../utils/images";
import { defaultWhatsappUrl } from "../../utils/whatsapp";
import type { Puppy } from "../../types/puppy";
import Button from "../common/Button";
import PupStop from "../mascot/PupStop";

/** Seat layout of the puppies peeking over the quilt (x position, width, how much shows, tilt). */
const seats = [
  { slug: "maltipoo-max-male", x: "9%", w: "8.6rem", peek: 0.62, tilt: "-5deg", focus: "53.8% 44.3%" },
  { slug: "korean-teacup-maltipoo-female", x: "22.5%", w: "10.4rem", peek: 0.8, tilt: "3deg", focus: "52.5% 42.6%" },
  { slug: "korean-teacup-poodle-female", x: "35%", w: "9.2rem", peek: 0.7, tilt: "-2deg", focus: "54.5% 45.7%" },
  { slug: "maltipoo-cavapoo-male", x: "65%", w: "9.4rem", peek: 0.74, tilt: "3deg", focus: "44.7% 29.5%" },
  { slug: "toy-poodle-male-female", x: "77.5%", w: "10.6rem", peek: 0.82, tilt: "-3deg", focus: "65.4% 44.7%" },
  { slug: "maltipoo-female-2", x: "91%", w: "8.4rem", peek: 0.6, tilt: "4deg", focus: "64.6% 42.3%" },
].flatMap((s) => {
  const puppy = findPuppy(s.slug);
  return puppy ? [{ ...s, puppy }] : [];
});

const altFor = (p: Puppy) => `${p.name === p.breed ? "" : `${p.name}, `}${p.gender.toLowerCase()} ${p.breed} puppy`;

export default function Hero() {
  const [tag, setTag] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setTag((i) => (i + 1) % seats.length), 2600);
    return () => window.clearInterval(t);
  }, []);

  return (
    <section className="scene hero" aria-labelledby="hero-title" style={{ "--sky-top": "#fffdf8", "--sky-bottom": "#fff1d8", "--quilt": "#fff1d8" } as CSSProperties}>
      <span className="hero__sun" aria-hidden="true" />
      <div className="hero__copy gutter">
        <p className="eyebrow">every puppy is family</p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__line">Premium teacup</span> <span className="hero__line">puppies in Dubai</span>
        </h1>
        <p className="hero__lede">Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.</p>
        <div className="hero__actions">
          <Button to="/puppies">View available puppies</Button>
          <Button href={defaultWhatsappUrl} variant="secondary">Enquire on WhatsApp</Button>
        </div>
      </div>

      <div className="hero__stage">
        <ul className="lineup" aria-label="Some of the puppies in our showroom">
          {seats.map((s, i) => (
            <li key={s.slug} className="lineup__seat" data-tag={tag === i ? "show" : undefined}
              style={{ "--x": s.x, "--w": s.w, "--peek": s.peek, "--tilt": s.tilt, "--i": i } as CSSProperties}>
              <Link className="lineup__pup" to={`/puppies/${s.puppy.slug}`} aria-label={`Meet ${s.puppy.name}, ${s.puppy.breed}`}
                onMouseEnter={() => setTag(i)} onFocus={() => setTag(i)}>
                <span className="lineup__photo">
                  <img src={mediaUrl(s.puppy.images[0], 384)} alt={altFor(s.puppy)} style={{ objectPosition: s.focus }} width="176" height="220" />
                </span>
                <span className="lineup__name font-scrawl" aria-hidden="true">{s.puppy.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <PupStop still pose="front" className="hero__teddy" />
        <div className="quilt" aria-hidden="true" />
      </div>
    </section>
  );
}
