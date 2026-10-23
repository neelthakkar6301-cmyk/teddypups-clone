import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { journeySteps } from "../../data/howItWorks";
import { breedChips } from "../../data/navigation";
import { showroomPhotos, showroomVideo } from "../../data/media";
import { focusOf, LOGO_URL, mediaFileUrl, mediaUrl } from "../../utils/images";
import { DEFAULT_MESSAGE, defaultWhatsappUrl } from "../../utils/whatsapp";
import Button from "../common/Button";
import PupStop from "../mascot/PupStop";
import { DeliveryRoute } from "./Illustrations";

const STEP_QUERY = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

/** Play / pause toggle for the little showroom clip inside the chat. */
function ChatClip() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { void v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };
  return (
    <div className="chat-clip">
      <video ref={ref} src={mediaFileUrl(showroomVideo.path)} poster={mediaUrl(showroomPhotos[0].path, 384)} aria-label={showroomVideo.label}
        muted loop playsInline preload="none" onEnded={() => setPlaying(false)} />
      <button type="button" className="chat-clip__play" aria-label={playing ? "Pause video" : "Play video"} aria-pressed={playing} onClick={toggle}>
        <svg viewBox="0 0 24 24" aria-hidden="true">{playing ? <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" /> : <path d="M8 5.5v13l10.5-6.5z" />}</svg>
      </button>
    </div>
  );
}

/** "Your puppy journey": three steps beside a WhatsApp chat that fills in as each step becomes active. */
export default function PuppyJourney() {
  const stepsRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const [stepping, setStepping] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const list = stepsRef.current;
    if (!list) return;
    const mq = window.matchMedia(STEP_QUERY);
    let frame = 0;
    let shown = 0;
    let typingTimer = 0;
    const update = () => {
      frame = 0;
      const items = [...list.querySelectorAll<HTMLElement>(".chat-step")];
      const line = window.innerHeight * 0.55;
      let current = 0;
      items.forEach((el, i) => { if (el.getBoundingClientRect().top < line) current = i; });
      if (current === shown) return;
      shown = current;
      setActive(current);
      // A short "typing…" bubble whenever a new step's messages arrive.
      setTyping(true);
      window.clearTimeout(typingTimer);
      typingTimer = window.setTimeout(() => setTyping(false), 650);
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    const sync = () => { setStepping(mq.matches); schedule(); };
    window.addEventListener("scroll", schedule, { passive: true });
    mq.addEventListener("change", sync);
    sync();
    return () => {
      window.removeEventListener("scroll", schedule);
      mq.removeEventListener("change", sync);
      window.clearTimeout(typingTimer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const shown = (group: number) => !stepping || (group <= active && !(typing && group === active && group > 0));

  return (
    <section className="scene chat" aria-labelledby="journey-title" style={{ "--sky-top": "#f7d18d", "--sky-bottom": "#f0b866" } as CSSProperties}>
      <div className="chat__grid gutter">
        <div className="chat__story">
          <h2 id="journey-title" className="text-huge">Your puppy journey</h2>
          <p className="text-lede ink-soft chat__lede">A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.</p>
          <ol ref={stepsRef} className="chat__steps">
            {journeySteps.map((s, i) => (
              <li key={s.title} className="chat-step" data-active={stepping && i === active ? "" : undefined} data-done={stepping && i < active ? "" : undefined}>
                <span className="chat-step__num font-plush" aria-hidden="true">{i + 1}</span>
                <h3 className="chat-step__title">{s.title}</h3>
                <p className="chat-step__text">{s.text}</p>
              </li>
            ))}
          </ol>
          <Button to="/how-it-works" variant="secondary" className="chat__cta">How it works</Button>
        </div>

        <div className="chat__side">
          <div className="phone" role="group" aria-label="A WhatsApp conversation with TeddyPups U.A.E.">
            <div className="phone__bar">
              <img className="phone__avatar" src={LOGO_URL} alt="" width="40" height="40" />
              <span><span className="phone__name">TeddyPups U.A.E.</span><span className="phone__status">online</span></span>
            </div>
            <div className="phone__screen">
              <p className="msg msg--me">{DEFAULT_MESSAGE}</p>
              {shown(0) && (
                <div className="msg-group">
                  <div className="msg msg--them">
                    <p>{journeySteps[0].text}</p>
                    <ul className="chips" aria-label="Breeds we have now">
                      {breedChips.map((b) => <li key={b.key}><Link to={`/puppies?breed=${b.key}`}>{b.label}</Link></li>)}
                    </ul>
                  </div>
                </div>
              )}
              {shown(1) && (
                <div className="msg-group">
                  <div className="msg msg--them msg--media">
                    <div className="snaps">
                      {showroomPhotos.map((ph) => (
                        <span key={ph.path} className="snaps__one"><img src={mediaUrl(ph.path, 256)} alt={ph.alt} loading="lazy" width="90" height="90" style={{ objectPosition: focusOf(ph.path) }} /></span>
                      ))}
                    </div>
                  </div>
                  <div className="msg msg--them msg--media"><ChatClip /></div>
                  <p className="msg msg--them">{journeySteps[1].text}</p>
                </div>
              )}
              {shown(2) && (
                <div className="msg-group">
                  <div className="msg msg--them">
                    <p>{journeySteps[2].text}</p>
                    <DeliveryRoute className="route" />
                  </div>
                </div>
              )}
              {stepping && typing && active > 0 && <p className="typing" aria-hidden="true"><span /><span /><span /></p>}
            </div>
            <a className="phone__compose" href={defaultWhatsappUrl} target="_blank" rel="noopener noreferrer">
              <span>Say hello on WhatsApp</span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.4 20.4 21 12 3.4 3.6 3.4 10.2 15 12 3.4 13.8z" /></svg>
            </a>
          </div>
          <PupStop className="chat__teddy" />
        </div>
      </div>
    </section>
  );
}
