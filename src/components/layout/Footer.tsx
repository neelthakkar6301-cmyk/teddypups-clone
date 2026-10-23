import { Link } from "react-router-dom";
import { footerExplore, socialLinks } from "../../data/navigation";
import { LOGO_URL } from "../../utils/images";
import { CONTACT_EMAIL, PHONE_DISPLAY, defaultWhatsappUrl } from "../../utils/whatsapp";
import Twinkles, { type Star } from "../common/Twinkles";
import { Basket } from "../home/Illustrations";
import PupStop from "../mascot/PupStop";

const YEAR = new Date().getFullYear();
const STARS: Star[] = [
  { left: "6%", top: "18%", size: 12.6 }, { left: "14%", top: "42%", size: 8.4 }, { left: "23%", top: "12%", size: 9.8 },
  { left: "31%", top: "30%", size: 7 }, { left: "44%", top: "9%", size: 11.2 }, { left: "52%", top: "36%", size: 7.7 },
  { left: "63%", top: "15%", size: 10.5 }, { left: "71%", top: "40%", size: 7 }, { left: "92%", top: "33%", size: 8.4 },
];

export default function Footer() {
  return (
    <footer className="footer">
      <svg className="footer__hill" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40 C180 4 360 4 560 26 C760 48 900 52 1080 30 C1240 10 1360 14 1440 22 V80 H0Z" />
      </svg>
      <div className="footer__sky" aria-hidden="true">
        <Twinkles stars={STARS} />
        <span className="moon" />
      </div>

      <div className="footer__grid gutter">
        <div className="footer__about">
          <p className="footer__tagline font-plush text-big">Home, at last.</p>
          <p className="footer__blurb">TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.</p>
        </div>
        <div className="footer__basket" aria-hidden="true">
          <div className="basket">
            <Basket part="back" />
            <PupStop still pose="front" className="basket__pup" />
            <Basket part="front" />
          </div>
        </div>
        <nav className="footer__explore" aria-label="Footer">
          <h2 className="footer__heading font-scrawl">Explore</h2>
          <ul className="footer__links">
            {footerExplore.map((l) => <li key={l.label}><Link to={l.to}>{l.label}</Link></li>)}
          </ul>
        </nav>
        <div className="footer__hello">
          <h2 className="footer__heading font-scrawl">Say hello</h2>
          <ul className="footer__contact">
            <li><a className="footer__wa" href={defaultWhatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp {PHONE_DISPLAY}</a></li>
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            <li>Downtown Dubai, United Arab Emirates</li>
          </ul>
          <ul className="footer__social" aria-label="Social media">
            {socialLinks.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}
          </ul>
        </div>
      </div>

      <div className="footer__bottom gutter">
        <span className="footer__brand"><img src={LOGO_URL} alt="" width="36" height="36" /> © {YEAR} TeddyPups U.A.E.</span>
        <span className="footer__motto font-scrawl">every puppy is family</span>
      </div>
    </footer>
  );
}
