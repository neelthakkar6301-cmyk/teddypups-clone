import { Link } from "react-router-dom";
import { ExternalLink, MapPin, MessageCircle, Mail } from "lucide-react";
import { footerExplore, socialLinks } from "../../data/navigation";
import { LOGO_URL } from "../../utils/images";
import { CONTACT_EMAIL, PHONE_DISPLAY, defaultWhatsappUrl } from "../../utils/whatsapp";
import PageContainer from "./PageContainer";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <PageContainer>
        <div className="footer__grid">
          <div className="footer__about">
            <h2 className="footer__tagline">Home, at last.</h2>
            <p>TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.</p>
          </div>
          <nav aria-label="Explore">
            <h3 className="footer__heading">Explore</h3>
            <ul>
              {footerExplore.map((l) => (
                <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="footer__heading">Say hello</h3>
            <ul>
              <li><a href={defaultWhatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} aria-hidden="true" /> WhatsApp {PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`}><Mail size={16} aria-hidden="true" /> {CONTACT_EMAIL}</a></li>
              <li><span><MapPin size={16} aria-hidden="true" /> Downtown Dubai, United Arab Emirates</span></li>
            </ul>
            <ul className="footer__social">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label} <ExternalLink size={14} aria-hidden="true" /></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span className="footer__brand"><img src={LOGO_URL} alt="" width="28" height="28" /> © {YEAR} TeddyPups U.A.E.</span>
          <span className="footer__motto">every puppy is family</span>
        </div>
      </PageContainer>
    </footer>
  );
}
