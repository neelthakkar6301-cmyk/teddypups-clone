import { ArrowRight, Plane } from "lucide-react";
import { showroomPhotos } from "../../data/media";
import { mediaUrl } from "../../utils/images";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";
import PageContainer from "../layout/PageContainer";

export default function WaysToMeet() {
  return (
    <section className="section section--tint" aria-labelledby="ways-title">
      <PageContainer>
        <SectionHeading id="ways-title" title="Two ways to meet your puppy" align="center" />
        <div className="ways">
          <article className="way-card">
            <h3 className="way-card__title">Puppies in Dubai</h3>
            <img src={mediaUrl(showroomPhotos[0].path, 1080)} alt={showroomPhotos[0].alt} loading="lazy" width="600" height="450" />
            <div className="way-card__body">
              <p className="way-card__label">In our showroom</p>
              <p>See them, love them, take them home. Come meet our locally available puppies before you decide.</p>
              <Button to="/puppies?origin=local" variant="secondary">Meet local puppies <ArrowRight size={16} aria-hidden="true" /></Button>
            </div>
          </article>
          <article className="way-card way-card--import">
            <h3 className="way-card__title">Imported for you</h3>
            <div className="way-card__route" aria-label="Korea to Dubai"><span>Korea</span><Plane size={22} aria-hidden="true" /><span>Dubai</span></div>
            <div className="way-card__body">
              <p>Exclusive Korean teacup puppies, delivered. Order from the world's most reputable breeders and let us handle the import.</p>
              <Button to="/puppies?origin=imported" variant="secondary">See imported puppies <ArrowRight size={16} aria-hidden="true" /></Button>
            </div>
          </article>
        </div>
      </PageContainer>
    </section>
  );
}
