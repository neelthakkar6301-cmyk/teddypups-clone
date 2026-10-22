import PageContainer from "../components/layout/PageContainer";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import { delivery, importSteps, localSteps, promise, whyUs, type Step } from "../data/howItWorks";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { defaultWhatsappUrl } from "../utils/whatsapp";

const toc = [
  { id: "two-ways", label: "Two ways home" },
  { id: "promise", label: "Our premium puppy promise" },
  { id: "delivery", label: "Delivery & collection" },
  { id: "why", label: "Why choose us" },
];

function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="steps">
      {steps.map((s, i) => (
        <li key={s.title}><span className="steps__num" aria-hidden="true">Step {i + 1}</span><h4>{s.title}</h4><p>{s.text}</p></li>
      ))}
    </ol>
  );
}

export default function HowItWorks() {
  useDocumentTitle("How it works | TeddyPups U.A.E.");
  return (
    <>
      <section className="page-head">
        <PageContainer>
          <SectionHeading as="h1" title="How it works" subtitle="Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable." />
          <ol className="toc">
            {toc.map((t, i) => <li key={t.id}><a href={`#${t.id}`}><span>{i + 1}</span> {t.label}</a></li>)}
          </ol>
        </PageContainer>
      </section>

      <section className="section section--flush" id="two-ways" aria-labelledby="ways-h">
        <PageContainer>
          <SectionHeading id="ways-h" eyebrow="choose your way" title="Two ways home" />
          <div className="two-col">
            <article className="panel">
              <p className="chip">In Dubai · meet in person</p>
              <h3>Meet your puppy in person</h3>
              <p>Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they're raised with care, proper nutrition, and veterinary checks.</p>
              <p className="panel__place">Downtown Dubai</p>
              <StepList steps={localSteps} />
            </article>
            <article className="panel">
              <p className="chip">Imported · order upon request</p>
              <h3>Order upon request</h3>
              <p>Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the world's most sought-after teacup breeds — ethically sourced from the most reputable, certified breeders across Europe, Korea, and beyond.</p>
              <p>From Korean teacup poodles to rare Maltese, Pom, and Yorkie lines, we bring the world's finest puppies to Dubai, just for you.</p>
              <p className="panel__place">Europe · Korea → Dubai</p>
              <StepList steps={importSteps} />
            </article>
          </div>
        </PageContainer>
      </section>

      <section className="section section--tint" id="promise" aria-labelledby="promise-h">
        <PageContainer>
          <SectionHeading id="promise-h" eyebrow="puppy passport" title="Our premium puppy promise" />
          <ul className="feature-grid feature-grid--3">
            {promise.map((f) => <li key={f.title}><h3>{f.title}</h3><p>{f.text}</p></li>)}
          </ul>
        </PageContainer>
      </section>

      <section className="section" id="delivery" aria-labelledby="delivery-h">
        <PageContainer>
          <SectionHeading id="delivery-h" title="Delivery & collection" subtitle="From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels comfortably and arrives safely." />
          <ul className="feature-grid feature-grid--4">
            {delivery.map((f) => <li key={f.title}><h3>{f.title}</h3><p>{f.text}</p></li>)}
          </ul>
          <p className="route-line" aria-label="Korea to Dubai">Korea → Dubai</p>
        </PageContainer>
      </section>

      <section className="section section--tint" id="why" aria-labelledby="why-h">
        <PageContainer>
          <SectionHeading id="why-h" title="Why choose us" subtitle="We're here to help you find a new family member. From the moment you visit our site to the joyful day your puppy arrives at your door, we're with you every step of the way. Our mission is to make the entire adoption process smooth, transparent, and full of love." />
          <ul className="feature-grid feature-grid--3">
            {whyUs.map((f) => <li key={f.title}><h3>{f.title}</h3><p>{f.text}</p></li>)}
          </ul>
          <div className="panel panel--center">
            <h3>Unique and high quality puppies</h3>
            <p>When you choose TeddyPups, you can trust that you're getting a puppy of the highest quality. We also provide guidance and support to new pet owners, offering advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.</p>
            <div className="hero__cta hero__cta--center">
              <Button href={defaultWhatsappUrl} variant="whatsapp">Ask us on WhatsApp</Button>
              <Button to="/puppies" variant="secondary">See available puppies</Button>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
