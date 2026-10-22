import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { featuredTestimonial, homeFamilyPhotos } from "../../data/testimonials";
import { mediaUrl } from "../../utils/images";
import SectionHeading from "../common/SectionHeading";
import PageContainer from "../layout/PageContainer";

export default function HappyFamilies() {
  return (
    <section className="section" aria-labelledby="families-title">
      <PageContainer>
        <SectionHeading id="families-title" title="Happy families & puppies" align="center"
          subtitle="We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts." />
        <figure className="quote">
          <blockquote><p>“{featuredTestimonial.quote}”</p></blockquote>
          <figcaption>{featuredTestimonial.author}</figcaption>
        </figure>
        <ul className="polaroid-wall">
          {homeFamilyPhotos.map((f) => (
            <li key={f.path}>
              <figure>
                <img src={mediaUrl(f.path, 640)} alt="A happy TeddyPups family with their new puppy" loading="lazy" width="320" height="320" />
                <figcaption>{f.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="center"><Link className="link-arrow" to="/happy-families">See every happy family <ArrowRight size={16} aria-hidden="true" /></Link></p>
      </PageContainer>
    </section>
  );
}
