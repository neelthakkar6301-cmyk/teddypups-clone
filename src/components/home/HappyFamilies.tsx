import { useRef, useState, type CSSProperties } from "react";
import { familyPhotos, featuredTestimonial, homeFamilyPhotos } from "../../data/testimonials";
import { useReveal } from "../../hooks/useReveal";
import Button from "../common/Button";
import PhotoViewer from "../common/PhotoViewer";
import Polaroid from "../common/Polaroid";
import PupStop from "../mascot/PupStop";

/** Order the prints drop onto the wall (ms), so they don't fall in reading order. */
const DROP_DELAYS = [330, 0, 550, 110, 660, 220, 770, 440];
const [author, ...place] = featuredTestimonial.author.split(", ");
/** The viewer opens on the captioned prints first, then the rest of the wall (as on the reference). */
const viewerPhotos = [...homeFamilyPhotos, ...familyPhotos.filter((p) => !homeFamilyPhotos.includes(p))];

/** "Happy families & puppies": dusk falls on a wooden facade hung with polaroids. */
export default function HappyFamilies() {
  const wallRef = useRef<HTMLUListElement>(null);
  const [viewing, setViewing] = useState<number | null>(null);
  useReveal(wallRef, "li");

  return (
    <section className="scene dusk" data-tone="dark" aria-labelledby="dusk-title" style={{ "--sky-top": "#a65a30", "--sky-bottom": "#4d2b19" } as CSSProperties}>
      <div className="dusk__sky gutter">
        <div>
          <h2 id="dusk-title" className="text-huge">Happy families &amp; puppies</h2>
          <p className="text-lede ink-soft dusk__lede">We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts.</p>
        </div>
        <figure className="dusk__note">
          <blockquote className="font-plush-text">“{featuredTestimonial.quote}”</blockquote>
          <figcaption className="font-scrawl">{author}{place.length > 0 && `, ${place.join(", ")}`}</figcaption>
        </figure>
      </div>

      <div className="photowall">
        <div className="photowall__wall">
          <ul ref={wallRef} className="photowall__prints" aria-label="Photos from TeddyPups families">
            {homeFamilyPhotos.map((photo, i) => (
              <li key={photo.path} style={{ "--d": `${DROP_DELAYS[i % DROP_DELAYS.length]}ms` } as CSSProperties}>
                <Polaroid photo={photo} look={i} onOpen={() => setViewing(i)}
                  label={`Open photo ${i + 1} of ${viewerPhotos.length}: ${photo.caption ?? "a TeddyPups family"}`} />
              </li>
            ))}
          </ul>
          <div className="facade__ground">
            <span className="facade__door" aria-hidden="true" />
            <span className="lamp" aria-hidden="true"><span className="lamp__light" /></span>
            <Button to="/happy-families" className="facade__cta">See every happy family</Button>
            <PupStop className="dusk__teddy" />
          </div>
        </div>
        <div className="pavement" aria-hidden="true" />
      </div>
      <PhotoViewer photos={viewerPhotos} index={viewing} onChange={setViewing} />
    </section>
  );
}
