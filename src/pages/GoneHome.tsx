import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import { goneHomePuppies } from "../data/puppies";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { mediaUrl } from "../utils/images";

export default function GoneHome() {
  useDocumentTitle("Gone home | TeddyPups U.A.E.");
  return (
    <>
      <section className="page-head">
        <PageContainer>
          <SectionHeading as="h1" eyebrow="tickets home" title="Gone home" subtitle="Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we'll help you find your match." />
          <Button to="/puppies">See available puppies</Button>
        </PageContainer>
      </section>
      <section className="section section--flush">
        <PageContainer>
          <ul className="tickets">
            {goneHomePuppies.map((p) => (
              <li key={p.id}>
                <Link to={`/puppies/${p.slug}`} className="ticket">
                  <img src={mediaUrl(p.images[0], 640)} alt={`${p.name}, ${p.gender.toLowerCase()} ${p.breed} puppy`} loading="lazy" width="320" height="400" />
                  <div className="ticket__body">
                    <span className="ticket__kicker">one ticket home</span>
                    <strong>{p.name}</strong>
                    <span>{p.breed}, {p.gender.toLowerCase()}</span>
                    <span className="ticket__where">{p.category === "dubai" ? "Dubai showroom" : "TeddyPups"}</span>
                    <span className="ticket__stamp">home ♥ <em>admit one</em></span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>
    </>
  );
}
