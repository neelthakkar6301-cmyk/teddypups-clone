import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { BadgeCheck, ClipboardCheck, Eye, Heart, HeartPulse, House, MessageSquareMore, MessagesSquare, PawPrint, Plane, SearchCheck, Truck, type LucideIcon } from "lucide-react";
import Button from "../components/common/Button";
import { DubaiSkyline, FlightPath } from "../components/home/Illustrations";
import PupStop from "../components/mascot/PupStop";
import { availablePuppies } from "../data/puppies";
import { delivery, importSteps, localSteps, promise, whyUs, type Step } from "../data/howItWorks";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { mediaUrl } from "../utils/images";
import PageContainer from "../components/layout/PageContainer";
import { defaultWhatsappUrl } from "../utils/whatsapp";

const toc = [
  { id: "two-ways", label: "Two ways home" },
  { id: "promise", label: "Our premium puppy promise" },
  { id: "delivery", label: "Delivery & collection" },
  { id: "why", label: "Why choose us" },
];
const TINTS = ["#fbe3b4", "#fde6de", "#e3f0fb", "#e6f2df"];

interface Journey { id: "local" | "imported"; label: string; hint: string; title: string; intro: string; note?: string; steps: Step[]; icons: LucideIcon[] }
const journeys: Journey[] = [
  {
    id: "local", label: "In Dubai", hint: "meet in person", title: "Meet your puppy in person", steps: localSteps, icons: [SearchCheck, Heart, PawPrint, Truck],
    intro: "Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they're raised with care, proper nutrition, and veterinary checks.",
  },
  {
    id: "imported", label: "Imported", hint: "order upon request", title: "Order upon request", steps: importSteps, icons: [ClipboardCheck, MessagesSquare, Plane, House],
    intro: "Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the world's most sought-after teacup breeds — ethically sourced from the most reputable, certified breeders across Europe, Korea, and beyond.",
    note: "From Korean teacup poodles to rare Maltese, Pom, and Yorkie lines, we bring the world's finest puppies to Dubai, just for you.",
  },
];
const promiseStamps = [
  { shape: "round", ink: "#a24a1a", tilt: "-8deg", Icon: BadgeCheck },
  { shape: "ticket", ink: "#1f6b45", tilt: "5deg", Icon: Eye },
  { shape: "oval", ink: "#5a3a28", tilt: "-4deg", Icon: Truck },
];
const whyIcons = [Plane, MessageSquareMore, HeartPulse];
const traveller = availablePuppies[1] ?? availablePuppies[0];

/** Postcard illustrations for the two journeys. */
function Postcard({ kind }: { kind: Journey["id"] }) {
  if (kind === "local") {
    return (
      <div className="postcard" aria-hidden="true">
        <span className="postcard__sun" />
        <DubaiSkyline className="postcard__city" />
        <span className="postcard__to postcard__to--left font-scrawl">Downtown Dubai</span>
      </div>
    );
  }
  return (
    <div className="postcard postcard--sky" aria-hidden="true">
      <svg className="postcard__route" viewBox="0 0 320 150"><path d="M14 132 C80 20 230 10 306 118" /></svg>
      <svg className="postcard__plane" viewBox="0 0 64 40"><path fill="currentColor" d="M2 22 C2 18 10 16 22 16 L30 4 H36 L33 16 H50 C58 16 62 19 62 22 C62 25 58 27 50 27 H33 L36 38 H30 L22 27 C10 27 2 26 2 22Z M4 22 L0 14 H5 L10 20Z" /></svg>
      <span className="postcard__from font-scrawl">Europe · Korea</span>
      <span className="postcard__to font-scrawl">Dubai</span>
    </div>
  );
}

export default function HowItWorks() {
  useDocumentTitle("How it works | TeddyPups U.A.E.");
  const [at, setAt] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onTabKey = (e: KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const next = (at + (e.key === "ArrowRight" ? 1 : -1) + journeys.length) % journeys.length;
    setAt(next);
    tabs.current[next]?.focus();
  };

  return (
    <section className="scene how" aria-labelledby="how-title" style={{ "--sky-top": "#fffbf3", "--sky-bottom": "#f6cc85" } as CSSProperties}>
      <PageContainer>
        <header className="how__head">
          <h1 id="how-title" className="text-giant">How it works</h1>
          <p className="text-lede ink-soft">Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable.</p>
        </header>
        <nav className="how__toc" aria-label="On this page">
          {toc.map((t, i) => <a key={t.id} href={`#${t.id}`} className="toc-chip"><span className="font-plush">{i + 1}</span> {t.label}</a>)}
        </nav>

        <section id="two-ways" className="journeys" aria-labelledby="two-ways-title">
          <div className="journeys__top">
            <div>
              <p className="font-scrawl journeys__kicker">choose your way</p>
              <h2 id="two-ways-title" className="text-big">Two ways home</h2>
            </div>
            <div className="journeys__pick">
              <div role="tablist" aria-label="Ways to bring your puppy home" className="switch" style={{ "--at": at, "--n": journeys.length } as CSSProperties} onKeyDown={onTabKey}>
                <span className="switch__thumb" aria-hidden="true" />
                {journeys.map((j, i) => (
                  <button key={j.id} ref={(el) => { tabs.current[i] = el; }} type="button" role="tab" id={`tab-${j.id}`} aria-controls={`panel-${j.id}`} aria-selected={at === i} tabIndex={at === i ? 0 : -1} className="switch__tab" onClick={() => setAt(i)}>
                    <span className="switch__label font-plush">{j.label}</span>
                    <span className="switch__hint">{j.hint}</span>
                  </button>
                ))}
              </div>
              <PupStop still className="journeys__teddy" />
            </div>
          </div>
          {journeys.map((j, i) => (
            <div key={j.id} role="tabpanel" id={`panel-${j.id}`} aria-labelledby={`tab-${j.id}`} className="journey" hidden={at !== i}>
              <div className="journey__head">
                <div>
                  <h3 className="journey__title">{j.title}</h3>
                  <p className="text-lede ink-soft journey__intro">{j.intro}</p>
                  {j.note && <p className="font-scrawl journey__note">{j.note}</p>}
                </div>
                <Postcard kind={j.id} />
              </div>
              <ol className="steps">
                {j.steps.map((s, k) => {
                  const Icon = j.icons[k];
                  return (
                    <li key={s.title} className="step" style={{ "--i": k, "--tint": TINTS[k] } as CSSProperties}>
                      <span className="step__icon"><Icon aria-hidden="true" strokeWidth={1.8} /></span>
                      <span className="step__num font-plush">Step {k + 1}</span>
                      <h4 className="step__title font-plush-text">{s.title}</h4>
                      <p className="step__text">{s.text}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </section>

        <section id="promise" className="promise-paper" aria-labelledby="promise-title">
          <p className="font-scrawl page-kicker">puppy passport</p>
          <h2 id="promise-title" className="text-huge promise-paper__title">Our premium puppy promise</h2>
          <ul className="promise-paper__stamps">
            {promise.map((p, i) => {
              const { shape, ink, tilt, Icon } = promiseStamps[i];
              return (
                <li key={p.title} className="entry" style={{ "--ink-stamp": ink, "--tilt": tilt, "--i": i } as CSSProperties}>
                  <span className={`stamp stamp--${shape}`}><Icon className="stamp__icon" aria-hidden="true" strokeWidth={1.8} /><span className="stamp__title font-plush">{p.title}</span></span>
                  <p className="entry__text">{p.text}</p>
                </li>
              );
            })}
          </ul>
        </section>

        <section id="delivery" className="how-delivery" aria-labelledby="delivery-title">
          <div>
            <h2 id="delivery-title" className="text-huge">Delivery &amp; collection</h2>
            <p className="text-lede ink-soft how-delivery__lede">From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels comfortably and arrives safely.</p>
            <ul className="how-delivery__list">
              {delivery.map((d) => <li key={d.title}><h3 className="font-plush-text">{d.title}</h3><p className="ink-soft">{d.text}</p></li>)}
            </ul>
          </div>
          <div className="how-delivery__art">
            <DubaiSkyline className="how-delivery__city" />
            <FlightPath className="flight" photo={mediaUrl(traveller.images[0], 256)} label="A plane flying puppies from Korea to Dubai" />
          </div>
        </section>

        <section id="why" className="why" aria-labelledby="why-title">
          <div>
            <h2 id="why-title" className="text-huge">Why choose us</h2>
            <p className="text-lede ink-soft why__lede">We're here to help you find a new family member. From the moment you visit our site to the joyful day your puppy arrives at your door, we're with you every step of the way. Our mission is to make the entire adoption process smooth, transparent, and full of love.</p>
          </div>
          <ul className="why__list">
            {whyUs.map((w, i) => {
              const Icon = whyIcons[i];
              return <li key={w.title}><Icon className="why__icon" aria-hidden="true" strokeWidth={1.6} /><div><h3>{w.title}</h3><p className="ink-soft">{w.text}</p></div></li>;
            })}
          </ul>
        </section>

        <section className="care-board" aria-labelledby="care-title">
          <div>
            <h2 id="care-title" className="text-big">Unique and high quality puppies</h2>
            <p className="text-lede ink-soft care-board__text">When you choose TeddyPups, you can trust that you're getting a puppy of the highest quality. We also provide guidance and support to new pet owners, offering advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend.</p>
            <div className="care-board__actions">
              <Button href={defaultWhatsappUrl} variant="whatsapp">Ask us on WhatsApp</Button>
              <Button to="/puppies" variant="secondary">See available puppies</Button>
            </div>
          </div>
          <PupStop still className="care-board__teddy" />
        </section>
      </PageContainer>
    </section>
  );
}
