import { useRef, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import Button from "../components/common/Button";
import PupStop from "../components/mascot/PupStop";
import { goneHomePuppies } from "../data/puppies";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";
import PageContainer from "../components/layout/PageContainer";
import { focusOf, mediaUrl } from "../utils/images";

const TILTS = [-1.4, 1.1, -0.6, 0.9, -1, 0.5];

export default function GoneHome() {
  useDocumentTitle("Gone home | TeddyPups U.A.E.");
  const listRef = useRef<HTMLUListElement>(null);
  useReveal(listRef, ".ticket");

  return (
    <PageContainer className="gone-page">
      <header className="booth-head">
        <div className="booth-head__words">
          <h1 className="text-giant">Gone home <Heart className="booth-head__heart" aria-hidden="true" strokeWidth={2.4} /></h1>
          <p className="text-lede ink-soft booth-head__lede">Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we'll help you find your match.</p>
          <Button to="/puppies" className="booth-head__cta">See available puppies</Button>
        </div>
        <div className="booth" aria-hidden="true">
          <PupStop still pose="front" className="booth__teddy" />
          <div className="booth__counter"><span className="font-plush">tickets home</span></div>
        </div>
      </header>

      <ul ref={listRef} className="tickets" aria-label="Puppies who have gone home">
        {goneHomePuppies.map((p, i) => (
          <li key={p.id} className="ticket" style={{ "--tilt": `${TILTS[i % TILTS.length]}deg`, "--i": i % 6 } as CSSProperties}>
            <Link className="ticket__link" to={`/puppies/${p.slug}`}>
              <span className="ticket__main">
                <span className="ticket__photo">
                  <img src={mediaUrl(p.images[0], 256)} alt={`${p.name === p.breed ? "" : `${p.name}, `}${p.gender === "Girl" ? "female" : "male"} ${p.breed} puppy`} loading="lazy" width="106" height="106" style={{ objectPosition: focusOf(p.images[0]) }} />
                </span>
                <span className="ticket__body">
                  <span className="ticket__kicker font-scrawl">one ticket home</span>
                  <span className="ticket__name font-plush">{p.name}</span>
                  <span className="ticket__meta">{p.name === p.breed ? p.gender : `${p.breed}, ${p.gender.toLowerCase()}`}</span>
                  <span className="ticket__route">
                    <span>{p.category === "dubai" ? "Dubai showroom" : "TeddyPups"}</span>
                    <svg viewBox="0 0 60 12" aria-hidden="true"><path d="M2 6 H50" /><path d="M46 2 L52 6 L46 10" /></svg>
                    <span>home ♥</span>
                  </span>
                </span>
              </span>
              <span className="ticket__stub" aria-hidden="true"><span className="font-plush">admit one</span></span>
            </Link>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}
