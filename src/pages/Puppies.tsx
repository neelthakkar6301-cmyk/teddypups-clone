import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../components/common/Button";
import PupStop from "../components/mascot/PupStop";
import PuppyFilters from "../components/puppies/PuppyFilters";
import PuppyGrid from "../components/puppies/PuppyGrid";
import { filtersFromParams, usePuppies } from "../hooks/usePuppies";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";
import PageContainer from "../components/layout/PageContainer";
import { defaultWhatsappUrl } from "../utils/whatsapp";

export default function Puppies() {
  useDocumentTitle("Available puppies | TeddyPups U.A.E.");
  const [params] = useSearchParams();
  const filters = filtersFromParams(params);
  const { available, goneHome } = usePuppies(filters);
  const filtered = Object.values(filters).some(Boolean);
  const listRef = useRef<HTMLUListElement>(null);
  const stripRef = useRef<HTMLUListElement>(null);
  useReveal(listRef, ".sketch", params.toString());
  useReveal(stripRef, ".sketch");

  const count = filtered
    ? `${available.length} ${available.length === 1 ? "puppy" : "puppies"} match`
    : `${available.length} puppies looking for a home`;

  return (
    <>
      <section className="sketchbook" aria-labelledby="pups-title">
        <PageContainer>
          <div className="sketchbook__head">
            <div className="sketchbook__words">
              <p className="page-kicker font-scrawl">from Teddy's sketchbook</p>
              <h1 id="pups-title" className="text-giant sketchbook__title">
                Available puppies
                <svg className="sketchbook__underline" viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden="true"><path d="M4 14 C80 6 160 20 240 12 S360 8 396 12" /></svg>
              </h1>
              <p className="text-lede sketchbook__lede">Every listing shows real photos of the actual puppy. Open a profile to see them all, then ask us about them on WhatsApp.</p>
            </div>
            <div className="sketchbook__self">
              <PupStop still className="sketchbook__teddy" />
              <span className="sketchbook__caption font-scrawl">self-portrait</span>
            </div>
          </div>

          <div className="sketchbook__body">
            <PuppyFilters filters={filters} />
            <p className="sketchbook__count font-scrawl" aria-live="polite">{count}</p>
            {available.length > 0 ? (
              <PuppyGrid key={params.toString()} listRef={listRef} puppies={available} />
            ) : (
              <div className="sketch-empty">
                <p className="font-plush-text sketch-empty__title">No puppies match just now.</p>
                <p>Tell us what you're hoping for and we'll let you know what's in our showroom or what we can bring in for you.</p>
                <div className="sketch-empty__actions">
                  <Button href={defaultWhatsappUrl} variant="whatsapp">Ask on WhatsApp</Button>
                  <Button to="/puppies" variant="secondary">Show all puppies</Button>
                </div>
              </div>
            )}
          </div>
        </PageContainer>
      </section>

      <section className="gone-strip" aria-labelledby="gone-title">
        <div className="gone-strip__inner gutter">
          <div className="gone-strip__words">
            <h2 id="gone-title" className="text-big">Already gone home</h2>
            <p className="ink-soft">These puppies have found their families.</p>
            <Button to="/gone-home" className="gone-strip__cta">See the puppies who've gone home</Button>
          </div>
          <PuppyGrid listRef={stripRef} puppies={goneHome.slice(0, 5)} small className="gone-strip__row" label="Some puppies who have gone home" />
        </div>
      </section>
    </>
  );
}
