import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { navItems } from "../../data/navigation";
import { LOGO_URL } from "../../utils/images";
import { PHONE_DISPLAY, PHONE_TEL, defaultWhatsappUrl } from "../../utils/whatsapp";
import PageContainer from "./PageContainer";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    let previousY = window.scrollY;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        setScrolled(currentY > 4);
        if (currentY < 80) setHidden(false);
        else if (Math.abs(currentY - previousY) > 4) setHidden(currentY > previousY);
        previousY = currentY;
        frame = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) => `nav__link${isActive ? " is-active" : ""}`;

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`nav${hidden ? " nav--hidden" : ""}${scrolled ? " nav--scrolled" : ""}`}>
        <PageContainer className="nav__inner container--wide">
          <Link to="/" className="nav__brand" aria-label="TeddyPups home" onClick={close}>
            <img src={LOGO_URL} alt="" width="64" height="64" />
            <span>TeddyPups</span>
          </Link>
          <nav className="nav__links" aria-label="Main">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end} className={linkClass}>{n.label}</NavLink>
            ))}
          </nav>
          <a className="btn btn--whatsapp nav__cta" href={defaultWhatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp us
          </a>
          <button className="nav__menu" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}>
            <Menu size={20} aria-hidden="true" /> Menu
          </button>
        </PageContainer>
      </header>

      <div id="mobile-menu" className={`drawer${open ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu" aria-hidden={!open}>
        <div className="drawer__backdrop" onClick={close} />
        <div className="drawer__panel">
          <div className="drawer__head">
            <span className="drawer__title">where to, friend?</span>
            <button type="button" className="drawer__close" onClick={close} aria-label="Close menu" tabIndex={open ? 0 : -1}>
              <X size={20} aria-hidden="true" /> Close
            </button>
          </div>
          <nav aria-label="Mobile">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end} className={(s) => `drawer__link${s.isActive ? " is-active" : ""}`} onClick={close} tabIndex={open ? 0 : -1}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <a className="btn btn--whatsapp drawer__cta" href={defaultWhatsappUrl} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
            WhatsApp us
          </a>
          <a className="drawer__phone" href={PHONE_TEL} tabIndex={open ? 0 : -1}><Phone size={16} aria-hidden="true" /> {PHONE_DISPLAY}</a>
        </div>
      </div>
    </>
  );
}
