import { Link } from "react-router-dom";
import { journeySteps } from "../../data/howItWorks";
import { breedChips } from "../../data/navigation";
import { showroomPhotos } from "../../data/media";
import { LOGO_URL, mediaUrl } from "../../utils/images";
import { DEFAULT_MESSAGE, defaultWhatsappUrl } from "../../utils/whatsapp";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";
import PageContainer from "../layout/PageContainer";

export default function PuppyJourney() {
  const [choose, photos, delivery] = journeySteps;
  return (
    <section className="section" aria-labelledby="journey-title">
      <PageContainer>
        <SectionHeading id="journey-title" title="Your puppy journey" subtitle="A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful." align="center" />
        <div className="journey-layout">
          <div>
            <ol className="journey">
              {journeySteps.map((s, i) => (
                <li key={s.title} className="journey__step">
                  <span className="journey__num" aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Button to="/how-it-works" variant="ghost">How it works</Button>
          </div>
          <div className="chat" aria-label="Example WhatsApp conversation">
            <div className="chat__head"><img src={LOGO_URL} alt="" width="32" height="32" /><span>TeddyPups U.A.E.<small>online</small></span></div>
            <p className="chat__bubble chat__bubble--out">{DEFAULT_MESSAGE}</p>
            <p className="chat__bubble">{choose.text}</p>
            <ul className="chat__chips">
              {breedChips.map((b) => <li key={b.key}><Link to={`/puppies?breed=${b.key}`}>{b.label}</Link></li>)}
            </ul>
            <ul className="journey__photos">
              {showroomPhotos.map((ph) => (
                <li key={ph.path}><img src={mediaUrl(ph.path, 384)} alt={ph.alt} loading="lazy" width="120" height="120" /></li>
              ))}
            </ul>
            <p className="chat__bubble">{photos.text}</p>
            <p className="chat__bubble">{delivery.text}</p>
            <Button href={defaultWhatsappUrl} variant="whatsapp">Say hello on WhatsApp</Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
