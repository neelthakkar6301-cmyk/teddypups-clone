import { useEffect, useRef, type CSSProperties } from "react";
import { findPuppy } from "../../hooks/usePuppies";
import { mediaUrl } from "../../utils/images";
import { defaultWhatsappUrl } from "../../utils/whatsapp";
import Button from "../common/Button";
import PupStop from "../mascot/PupStop";

const max = findPuppy("maltipoo-max-male");

/** "Ready to meet your new best friend?": a lit front door at night that opens onto Max. */
export default function HomeCTA() {
  const houseRef = useRef<HTMLDivElement>(null);

  // Open the front door once the house is well into view.
  useEffect(() => {
    const house = houseRef.current;
    if (!house || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([e]) => {
      house.dataset.open = String(e.isIntersecting);
    }, { threshold: 0.6 });
    observer.observe(house);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="scene home-cta" data-tone="dark" aria-labelledby="cta-title" style={{ "--sky-top": "#2f1a10", "--sky-bottom": "#24130b" } as CSSProperties}>
      <div className="home-cta__copy gutter">
        <h2 id="cta-title" className="text-huge">Ready to meet your new best friend?</h2>
        <p className="home-cta__lede">Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.</p>
      </div>
      <div ref={houseRef} className="house" data-open="false">
        <span className="house__plant house__plant--left" aria-hidden="true" />
        <span className="house__lamp" aria-hidden="true" />
        <div className="house__doorway">
          <span className="house__inside">
            {max && <img src={mediaUrl(max.images[0], 384)} alt="Max, waiting inside" loading="lazy" width="184" height="298" style={{ objectPosition: "53.8% 44.3%" }} />}
          </span>
          <span className="house__door" aria-hidden="true"><span className="house__peep" /><span className="house__knob" /></span>
        </div>
        <span className="house__plant house__plant--right" aria-hidden="true" />
        <span className="house__mat font-scrawl">welcome home</span>
        <PupStop className="house__teddy" />
      </div>
      <div className="home-cta__actions gutter">
        <Button href={defaultWhatsappUrl} variant="whatsapp">Enquire on WhatsApp</Button>
        <Button to="/contact" variant="secondary">Visit &amp; contact</Button>
      </div>
    </section>
  );
}
