import type { CSSProperties } from "react";
import { showroomPhotos } from "../../data/media";
import { availablePuppies } from "../../data/puppies";
import { mediaUrl } from "../../utils/images";
import Button from "../common/Button";
import PupStop from "../mascot/PupStop";
import { DubaiSkyline, FlightPath } from "./Illustrations";

const showroom = showroomPhotos[0];
const traveller = availablePuppies.find((p) => p.slug === "korean-teacup-maltipoo-female") ?? availablePuppies[0];

/** "Two ways to meet your puppy": a signpost forking to the showroom and to an import flight. */
export default function WaysToMeet() {
  return (
    <section className="scene paths" aria-labelledby="paths-title" style={{ "--sky-top": "#fbe3b4", "--sky-bottom": "#f7d18d" } as CSSProperties}>
      <div className="gutter paths__inner">
        <h2 id="paths-title" className="paths__title text-huge">Two ways to meet your puppy</h2>
        <div className="fork">
          <div className="fork__post" aria-hidden="true" />
          <article className="way way--left" aria-labelledby="way-local">
            <h3 id="way-local" className="sign sign--left">Puppies in Dubai</h3>
            <div className="way__scene">
              <DubaiSkyline className="way__skyline" />
              <figure className="shop-window">
                <span className="shop-window__glass">
                  <img src={mediaUrl(showroom.path, 384)} alt={showroom.alt} loading="lazy" width="192" height="220" style={{ objectPosition: "54.3% 48.3%" }} />
                </span>
                <figcaption className="font-scrawl">In our showroom</figcaption>
              </figure>
            </div>
            <p className="way__text">See them, love them, take them home. Come meet our locally available puppies before you decide.</p>
            <Button to="/puppies?origin=local">Meet local puppies</Button>
          </article>
          <article className="way way--right" aria-labelledby="way-imported">
            <h3 id="way-imported" className="sign sign--right">Imported for you</h3>
            <div className="way__scene">
              <FlightPath className="flight" photo={mediaUrl(traveller.images[0], 256)}
                label={`A plane bringing a ${traveller.breed} puppy from Korea to Dubai`} />
            </div>
            <p className="way__text">Exclusive Korean teacup puppies, delivered. Order from the world's most reputable breeders and let us handle the import.</p>
            <Button to="/puppies?origin=imported">See imported puppies</Button>
          </article>
          <PupStop className="fork__teddy" />
        </div>
      </div>
    </section>
  );
}
