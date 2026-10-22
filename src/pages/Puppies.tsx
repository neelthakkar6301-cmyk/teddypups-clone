import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageContainer from "../components/layout/PageContainer";
import SectionHeading from "../components/common/SectionHeading";
import PuppyGrid from "../components/puppies/PuppyGrid";
import PuppyFilters from "../components/puppies/PuppyFilters";
import Button from "../components/common/Button";
import { parseBreed, parseOrigin, usePuppies } from "../hooks/usePuppies";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { defaultWhatsappUrl } from "../utils/whatsapp";

export default function Puppies() {
  useDocumentTitle("Available puppies | TeddyPups U.A.E.");
  const [params] = useSearchParams();
  const filters = { breed: parseBreed(params.get("breed")), origin: parseOrigin(params.get("origin")) };
  const { available, goneHome } = usePuppies(filters);
  const filtered = Boolean(filters.breed || filters.origin);

  return (
    <>
      <section className="page-head">
        <PageContainer>
          <SectionHeading as="h1" eyebrow="from Teddy's sketchbook" title="Available puppies"
            subtitle="Every listing shows real photos of the actual puppy. Open a profile to see them all, then ask us about them on WhatsApp." />
        </PageContainer>
      </section>
      <section className="section section--flush">
        <PageContainer>
          <PuppyFilters filters={filters} />
          {available.length > 0 ? (
            <PuppyGrid puppies={available} />
          ) : (
            <div className="empty">
              <h2>No puppies match that filter right now</h2>
              <p>Message us on WhatsApp and we'll help you find your match.</p>
              <div className="hero__cta">
                <Button to="/puppies">See all puppies</Button>
                <Button href={defaultWhatsappUrl} variant="whatsapp">Ask on WhatsApp</Button>
              </div>
            </div>
          )}
        </PageContainer>
      </section>
      {(!filtered || goneHome.length > 0) && (
        <section className="section section--tint" aria-labelledby="gone-title">
          <PageContainer>
            <div className="section__head-row">
              <SectionHeading id="gone-title" title="Already gone home" subtitle="These puppies have found their families." />
              <Link className="link-arrow" to="/gone-home">See the puppies who've gone home <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <PuppyGrid puppies={goneHome.slice(0, 5)} compact />
          </PageContainer>
        </section>
      )}
    </>
  );
}
