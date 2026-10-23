import { useEffect, useRef, type CSSProperties, type RefObject } from "react";
import { Link, useParams } from "react-router-dom";
import { Check, Mail } from "lucide-react";
import Button from "../components/common/Button";
import { PawPrint, TeddyFront } from "../components/mascot/TeddyArt";
import PuppyEnquiryForm from "../components/puppies/PuppyEnquiryForm";
import PuppyGallery from "../components/puppies/PuppyGallery";
import NotFound from "./NotFound";
import { abroadSteps } from "../data/howItWorks";
import { findPuppy, getNeighbours } from "../hooks/usePuppies";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { categoryLabel } from "../utils/formatters";
import { focusOf, mediaUrl } from "../utils/images";
import PageContainer from "../components/layout/PageContainer";
import { likeThisWhatsappUrl, puppyWhatsappUrl } from "../utils/whatsapp";

function Chapter({ n, children }: { n: number; children: string }) {
  return <p className="chapter"><span className="chapter__n font-plush">{n}</span><span className="font-scrawl">{children}</span></p>;
}

/** Bookmark ribbon down the left edge that grows as you read the page. */
function Ribbon({ target }: { target: RefObject<HTMLElement | null> }) {
  const band = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = target.current;
      if (!el || !band.current) return;
      const r = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0.04, (window.innerHeight * 0.4 - r.top) / Math.max(1, r.height - window.innerHeight * 0.5)));
      band.current.style.transform = `scaleY(${progress})`;
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [target]);
  return <div className="ribbon" aria-hidden="true"><div className="ribbon__track"><span ref={band} className="ribbon__band" /></div></div>;
}

export default function PuppyDetails() {
  const { slug } = useParams();
  const puppy = findPuppy(slug);
  const bookRef = useRef<HTMLElement>(null);
  useDocumentTitle(puppy ? `${puppy.name}, ${puppy.breed} puppy | TeddyPups U.A.E.` : "Puppy not found | TeddyPups U.A.E.");
  if (!puppy) return <NotFound />;

  const sold = puppy.status === "sold";
  const named = puppy.name !== puppy.breed;
  const { prev, next } = getNeighbours(puppy);
  const pageUrl = `${window.location.origin}/puppies/${puppy.slug}`;
  const facts: [string, string | undefined][] = [
    ["Breed", puppy.breed], ["Boy or girl", puppy.gender], ["Age", puppy.age], ["Colour", puppy.colour], ["Where", categoryLabel(puppy)],
  ];
  const steps = puppy.category === "imported" ? abroadSteps : null;
  const enquireId = `enquire-${puppy.slug}`;
  const alt = `${named ? `${puppy.name}, ` : ""}${puppy.gender.toLowerCase()} ${puppy.breed} puppy`;
  let chapter = 2;

  return (
    <article ref={bookRef} className="storybook" key={puppy.slug}>
      <Ribbon target={bookRef} />
      <PageContainer className="storybook__wrap">
        <nav className="storybook__crumbs" aria-label="Breadcrumb">
          <Link className="link-ink" to={sold ? "/gone-home" : "/puppies"}>{sold ? "Gone home" : "Available puppies"}</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">{puppy.name}</span>
        </nav>
        <Chapter n={1}>{sold ? "the day they went home" : "hello, it's me"}</Chapter>

        <div className="storybook__top">
          <div className="storybook__photos">
            <PuppyGallery images={puppy.images} name={puppy.name} alt={alt} videos={puppy.videos} />
          </div>
          <div className="storybook__side">
            <div className="storybook__pin">
              <div className="name-tag">
                <span className="name-tag__ring" aria-hidden="true" />
                <div className="name-tag__teddy" aria-hidden="true"><TeddyFront /></div>
                <span className={`status-chip${sold ? " status-chip--home" : ""}`}><PawPrint className="status-chip__paw" />{sold ? "gone home ♥" : "Available"}</span>
                <h1 className="name-tag__name">{puppy.name}</h1>
                <p className="name-tag__breed">{puppy.breed}</p>
                <dl className="name-tag__facts">
                  {facts.filter((f): f is [string, string] => Boolean(f[1])).map(([k, v]) => (
                    <div key={k}><dt className="font-scrawl">{k}</dt><dd>{v}</dd></div>
                  ))}
                </dl>
                {puppy.description && <p className="name-tag__note">{puppy.description}</p>}
                <div className="name-tag__actions">
                  <Button href={sold ? likeThisWhatsappUrl(puppy, pageUrl) : puppyWhatsappUrl(puppy, pageUrl)} variant="whatsapp">
                    {sold ? "Ask about a puppy like this" : named ? `Ask about ${puppy.name} on WhatsApp` : "Ask about this puppy on WhatsApp"}
                  </Button>
                  <a className="btn btn--secondary" href={`#${enquireId}`}>Send an enquiry</a>
                </div>
              </div>

              <div className="paper">
                <Chapter n={chapter++}>{`what comes with ${puppy.name}`}</Chapter>
                <h2 className="paper__title">Every Teddy Pup comes</h2>
                <ul className="paper__checks">
                  {puppy.healthDetails.map((h) => <li key={h}><Check className="paper__check" aria-hidden="true" />{h}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {!sold && steps && (
          <section className="storybook__section" aria-labelledby={`home-steps-${puppy.slug}`}>
            <Chapter n={chapter++}>the way home</Chapter>
            <h2 id={`home-steps-${puppy.slug}`} className="text-big storybook__h2">Coming home from abroad</h2>
            <ol className="trail trail--row trail--paws">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="trail__num font-plush" aria-hidden="true">{i + 1}</span>
                  <h3 className="font-plush-text trail__title">{s.title}</h3>
                  <p className="trail__text">{s.text}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        <section id={enquireId} className="letter storybook__section" aria-labelledby={`enquire-title-${puppy.slug}`}>
          <span className="letter__stamp" aria-hidden="true"><Mail strokeWidth={2.2} /></span>
          <div className="letter__intro">
            <Chapter n={chapter++}>dear TeddyPups…</Chapter>
            <h2 id={`enquire-title-${puppy.slug}`} className="text-big letter__title">{sold ? "Looking for a puppy like this?" : named ? `Ask about ${puppy.name}` : "Ask about this puppy"}</h2>
            <p className="ink-soft letter__lede">Leave your details and our team will get back to you promptly — or message us on WhatsApp for the quickest reply.</p>
          </div>
          <div className="letter__form"><PuppyEnquiryForm puppy={puppy} /></div>
        </section>

        <nav className="pager" aria-label="More puppies">
          {[{ p: prev, label: "Previous pup", dir: "prev" }, { p: next, label: "Next pup", dir: "next" }].map(({ p, label, dir }) => (
            <Link key={dir} to={`/puppies/${p.slug}`} className={`pager__item pager__item--${dir}`} style={{ "--tilt": dir === "prev" ? "-1deg" : "1deg" } as CSSProperties}>
              <span className="pager__photo"><img src={mediaUrl(p.images[0], 256)} alt={`${p.gender === "Girl" ? "Female" : p.gender === "Boy" ? "Male" : ""} ${p.breed} puppy`.trim()} width="80" height="96" loading="lazy" style={{ objectPosition: focusOf(p.images[0]) }} /></span>
              <span><span className="pager__label font-scrawl">{label}</span><span className="pager__name font-plush">{p.name}</span></span>
            </Link>
          ))}
        </nav>
      </PageContainer>
    </article>
  );
}
