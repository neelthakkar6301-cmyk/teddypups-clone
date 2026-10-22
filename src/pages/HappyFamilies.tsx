import PageContainer from "../components/layout/PageContainer";
import SectionHeading from "../components/common/SectionHeading";
import { featuredTestimonial, familyPhotos } from "../data/testimonials";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { mediaUrl } from "../utils/images";

export default function HappyFamilies() {
  useDocumentTitle("Happy families | TeddyPups U.A.E.");
  return (
    <>
      <section className="page-head">
        <PageContainer>
          <SectionHeading as="h1" eyebrow="our wall of happy endings" title="Happy families"
            subtitle="Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients after welcoming their furry friends." />
          <p className="counter">{familyPhotos.length} moments and counting</p>
        </PageContainer>
      </section>
      <section className="section section--flush">
        <PageContainer>
          <figure className="quote">
            <blockquote><p>“{featuredTestimonial.quote}”</p></blockquote>
            <figcaption>{featuredTestimonial.author}</figcaption>
          </figure>
          <ul className="masonry">
            {familyPhotos.map((f, i) => (
              <li key={f.path}>
                <figure>
                  <img src={mediaUrl(f.path, 640)} alt="A happy TeddyPups family with their new puppy" loading="lazy" width="320" height="320" fetchPriority={i < 4 ? "high" : "auto"} />
                  {f.caption && <figcaption>{f.caption}</figcaption>}
                </figure>
              </li>
            ))}
          </ul>
          <p className="center motto">every one of them was a Teddy Pup once</p>
        </PageContainer>
      </section>
    </>
  );
}
