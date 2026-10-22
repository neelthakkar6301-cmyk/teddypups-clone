import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findPuppy } from "../../hooks/usePuppies";
import { mediaUrl } from "../../utils/images";
import { defaultWhatsappUrl } from "../../utils/whatsapp";
import type { Puppy } from "../../types/puppy";
import Button from "../common/Button";
import PageContainer from "../layout/PageContainer";
import Mascot from "./Mascot";

/** Left three, mascot, right three — mirrors the arch strip on the reference hero. */
const slugs = ["maltipoo-max-male", "korean-teacup-maltipoo-female", "shitzu-male", "korean-teacup-poodle-female", "pomeranian-female", "copper-male"];
const arches = slugs.map(findPuppy).filter((p): p is Puppy => Boolean(p));
const left = arches.slice(0, 3);
const right = arches.slice(3);

export default function Hero() {
  const [active, setActive] = useState(4);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setActive((a) => (a + 1) % arches.length), 3000);
    return () => window.clearInterval(t);
  }, []);

  const renderArch = (p: Puppy, i: number, slot: string) => (
    <li key={p.id} className={`arch arch--${slot}${active === i ? " is-active" : ""}`} style={{ ["--i" as string]: i }}>
      <Link to={`/puppies/${p.slug}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} aria-label={`${p.name}, ${p.breed}`}>
        <img src={mediaUrl(p.images[0], 640)} alt={`${p.name}, ${p.gender.toLowerCase()} ${p.breed} puppy`} width="240" height="300" loading="eager" />
        <span className="arch__label">{p.name === p.breed ? p.breed : p.name}</span>
      </Link>
    </li>
  );

  return (
    <section className="hero" aria-labelledby="hero-title">
      <PageContainer className="hero__copy">
        <p className="eyebrow">every puppy is family</p>
        <h1 id="hero-title">Premium teacup puppies in Dubai</h1>
        <p className="hero__lead">Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.</p>
        <div className="hero__cta">
          <Button to="/puppies">View available puppies</Button>
          <Button href={defaultWhatsappUrl} variant="secondary">Enquire on WhatsApp</Button>
        </div>
      </PageContainer>

      <div className="hero__stage">
        <ul className="arches" aria-label="Featured puppies">
          {left.map((p, i) => renderArch(p, i, `l${i + 1}`))}
          <li className="arch arch--mascot" aria-hidden="true"><Mascot /></li>
          {right.map((p, i) => renderArch(p, i + 3, `r${i + 1}`))}
        </ul>
        <div className="scallops" aria-hidden="true"><div className="scallops__row" /><div className="scallops__hatch" /></div>
      </div>
    </section>
  );
}
