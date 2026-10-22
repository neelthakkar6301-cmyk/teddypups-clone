import { availablePuppies } from "../../data/puppies";
import { mediaUrl } from "../../utils/images";
import { defaultWhatsappUrl } from "../../utils/whatsapp";
import Button from "../common/Button";
import PageContainer from "../layout/PageContainer";

const max = availablePuppies[0];

export default function HomeCTA() {
  return (
    <section className="section cta" aria-labelledby="cta-title">
      <PageContainer className="cta__inner">
        <div className="cta__copy">
          <h2 id="cta-title">Ready to meet your new best friend?</h2>
          <p>Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.</p>
          <div className="hero__cta">
            <Button href={defaultWhatsappUrl} variant="whatsapp">Enquire on WhatsApp</Button>
            <Button to="/contact" variant="secondary">Visit & contact</Button>
          </div>
        </div>
        <figure className="cta__photo">
          <img src={mediaUrl(max.images[0], 640)} alt="Max, waiting inside" loading="lazy" width="320" height="400" />
          <figcaption>welcome home</figcaption>
        </figure>
      </PageContainer>
    </section>
  );
}
