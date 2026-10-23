import { useRef, useState, type CSSProperties } from "react";
import { Heart } from "lucide-react";
import PhotoViewer from "../components/common/PhotoViewer";
import Polaroid from "../components/common/Polaroid";
import PupStop from "../components/mascot/PupStop";
import { featuredTestimonial, familyPhotos } from "../data/testimonials";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import PageContainer from "../components/layout/PageContainer";
import { useReveal } from "../hooks/useReveal";

export default function HappyFamilies() {
  useDocumentTitle("Happy families | TeddyPups U.A.E.");
  const wallRef = useRef<HTMLUListElement>(null);
  const [viewing, setViewing] = useState<number | null>(null);
  useReveal(wallRef, ".wall__item");

  return (
    <section className="memories" aria-labelledby="families-title">
      <PageContainer>
        <div className="memories__head">
          <div>
            <p className="page-kicker font-scrawl">our wall of happy endings</p>
            <h1 id="families-title" className="text-giant memories__title">Happy families<Heart className="memories__heart" aria-hidden="true" strokeWidth={2.4} /></h1>
            <p className="text-lede ink-soft memories__lede">Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients after welcoming their furry friends.</p>
            <p className="page-kicker font-scrawl memories__count">{familyPhotos.length} moments and counting</p>
          </div>
          <figure className="memories__note">
            <span className="tape tape--center" style={{ "--tape": "#cfe5f6" } as CSSProperties} aria-hidden="true" />
            <blockquote className="font-plush-text">“{featuredTestimonial.quote}”</blockquote>
            <figcaption className="font-scrawl">{featuredTestimonial.author}</figcaption>
          </figure>
        </div>

        <ul ref={wallRef} className="wall" aria-label="Photos from TeddyPups families">
          {familyPhotos.map((photo, i) => (
            <li key={photo.path} className="wall__item" style={{ "--d": `${(i % 4) * 60}ms` } as CSSProperties}>
              <Polaroid photo={photo} look={i} paw onOpen={() => setViewing(i)}
                label={`Open photo ${i + 1} of ${familyPhotos.length}${photo.caption ? `: ${photo.caption}` : ""}`} />
            </li>
          ))}
        </ul>

        <div className="memories__foot">
          <PupStop still className="memories__teddy" />
          <p className="font-scrawl memories__motto">every one of them was a Teddy Pup once</p>
        </div>
      </PageContainer>
      <PhotoViewer photos={familyPhotos} index={viewing} onChange={setViewing} />
    </section>
  );
}
