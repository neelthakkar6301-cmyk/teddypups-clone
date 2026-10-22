import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import PageContainer from "../components/layout/PageContainer";
import PuppyGallery from "../components/puppies/PuppyGallery";
import PuppyEnquiryForm from "../components/puppies/PuppyEnquiryForm";
import Button from "../components/common/Button";
import NotFound from "./NotFound";
import { abroadSteps } from "../data/howItWorks";
import { findPuppy, getNeighbours } from "../hooks/usePuppies";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { categoryLabel } from "../utils/formatters";
import { mediaUrl } from "../utils/images";
import { defaultWhatsappUrl, puppyWhatsappUrl } from "../utils/whatsapp";

export default function PuppyDetails() {
  const { slug } = useParams();
  const puppy = findPuppy(slug);
  useDocumentTitle(puppy ? `${puppy.name}, ${puppy.breed} puppy | TeddyPups U.A.E.` : "Puppy not found | TeddyPups U.A.E.");
  if (!puppy) return <NotFound kind="puppy" />;

  const sold = puppy.status === "sold";
  const named = puppy.name !== puppy.breed;
  const where = categoryLabel(puppy);
  const { prev, next } = getNeighbours(puppy);
  const pageUrl = `${window.location.origin}/puppies/${puppy.slug}`;
  const facts: [string, string | undefined][] = [
    ["Breed", puppy.breed], ["Boy or girl", puppy.gender], ["Age", puppy.age], ["Where", where],
  ];
  const listLabel = sold ? "Gone home" : "Available puppies";
  const listTo = sold ? "/gone-home" : "/puppies";

  return (
    <PageContainer className="detail">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to={listTo}>{listLabel}</Link> / <span aria-current="page">{puppy.name}</span>
      </nav>

      <section className="detail__top" aria-labelledby="pup-title">
        <div>
          <p className="step-label"><span>1</span> hello, it's me</p>
          <PuppyGallery images={puppy.images} alt={`${puppy.name}, ${puppy.gender.toLowerCase()} ${puppy.breed} puppy`} hasVideo={puppy.videoAvailable} />
        </div>
        <div className="detail__info">
          <span className={`tag ${sold ? "tag--sold" : "tag--available"}`}>{sold ? "gone home ♥" : "Available"}</span>
          <h1 id="pup-title">{puppy.name}</h1>
          {named && <p className="detail__breed">{puppy.breed}</p>}
          <dl className="facts">
            {facts.filter((f): f is [string, string] => Boolean(f[1])).map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
          {puppy.description && <p className="detail__note">{puppy.description}</p>}
          {sold ? (
            <>
              <p className="detail__note">{puppy.name} has already joined a loving family. Looking for one just like {named ? "them" : "this puppy"}? Tell us — we'll help you find your match.</p>
              <div className="hero__cta">
                <Button to="/puppies">See available puppies</Button>
                <Button href={defaultWhatsappUrl} variant="whatsapp"><MessageCircle size={18} aria-hidden="true" /> Ask us on WhatsApp</Button>
              </div>
            </>
          ) : (
            <div className="hero__cta">
              <Button href={puppyWhatsappUrl(puppy, pageUrl)} variant="whatsapp"><MessageCircle size={18} aria-hidden="true" /> {named ? `Ask about ${puppy.name} on WhatsApp` : "Ask about this puppy on WhatsApp"}</Button>
              <Button href={`#enquire-${puppy.slug}`} variant="secondary" onClick={() => document.getElementById(`enquire-${puppy.slug}`)?.scrollIntoView({ behavior: "smooth" })}>Send an enquiry</Button>
            </div>
          )}
        </div>
      </section>

      {!sold && (
        <>
          <section className="detail__section" aria-labelledby="comes-title">
            <p className="step-label"><span>2</span> what comes with {named ? puppy.name : "this " + puppy.breed}</p>
            <h2 id="comes-title">Every Teddy Pup comes</h2>
            <ul className="checks">{puppy.healthDetails.map((h) => <li key={h}>{h}</li>)}</ul>
          </section>

          {puppy.category === "imported" && (
            <section className="detail__section" aria-labelledby="home-title">
              <p className="step-label"><span>3</span> the way home</p>
              <h2 id="home-title">Coming home from abroad</h2>
              <ol className="steps">
                {abroadSteps.map((s, i) => (
                  <li key={s.title}><span className="steps__num" aria-hidden="true">{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p></li>
                ))}
              </ol>
            </section>
          )}

          <section className="detail__section detail__enquire" id={`enquire-${puppy.slug}`} aria-labelledby="ask-title">
            <p className="step-label"><span>{puppy.category === "imported" ? 4 : 3}</span> dear TeddyPups…</p>
            <h2 id="ask-title">{named ? `Ask about ${puppy.name}` : "Ask about this puppy"}</h2>
            <p>Leave your details and our team will get back to you promptly — or message us on WhatsApp for the quickest reply.</p>
            <PuppyEnquiryForm puppy={puppy} />
          </section>
        </>
      )}

      <nav className="pager" aria-label="More puppies">
        {[{ p: prev, label: "Previous pup", Icon: ChevronLeft }, { p: next, label: "Next pup", Icon: ChevronRight }].map(({ p, label, Icon }) => (
          <Link key={label} to={`/puppies/${p.slug}`} className={`pager__item pager__item--${label.startsWith("Prev") ? "prev" : "next"}`}>
            <img src={mediaUrl(p.images[0], 256)} alt="" width="64" height="80" loading="lazy" />
            <span><small>{label}</small>{p.name}</span>
            <Icon size={18} aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </PageContainer>
  );
}
