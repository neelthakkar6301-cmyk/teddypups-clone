import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems } from "../../data/navigation";
import { LOGO_URL } from "../../utils/images";
import { PHONE_DISPLAY, PHONE_TEL, defaultWhatsappUrl } from "../../utils/whatsapp";
import { PawPrint } from "../mascot/TeddyArt";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const home = pathname === "/";
  const close = () => setOpen(false);
  // ScrollToTop only fires on a route change, so a link to the current page scrolls back up here.
  const onNavigate = (to: string) => {
    close();
    if (to === pathname) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let previousY = window.scrollY;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 8);
        if (y < 120) setHidden(false);
        else if (Math.abs(y - previousY) > 6) setHidden(y > previousY);
        previousY = y;
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
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
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
      <header className="nav" data-hidden={hidden && !open} data-scrolled={scrolled} data-home={home || undefined}>
        <div className="nav__bar gutter">
          <Link to="/" className="nav__brand" aria-label="TeddyPups U.A.E. — home" onClick={() => onNavigate("/")}>
            <img className="nav__logo" src={LOGO_URL} alt="" width="48" height="48" />
            <span className="nav__name font-plush">TeddyPups</span>
          </Link>
          <nav className="nav__links" aria-label="Main">
            <ul>
              {navItems.map((n) => (
                <li key={n.to}>
                  <NavLink to={n.to} end={n.end} className={linkClass} onClick={() => onNavigate(n.to)}>
                    <span>{n.label}</span>
                    <PawPrint className="nav__paw" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav__end">
            <a className="btn btn--whatsapp nav__wa" href={defaultWhatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
            <button className="nav__menu" type="button" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(true)}>
              <PawPrint className="nav__menu-paw" /> Menu
            </button>
          </div>
        </div>
        <span className="nav__hem" aria-hidden="true" />
      </header>

      <div id="site-menu" className="menu" data-open={open} role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden={!open}>
        <div className="menu__inner gutter">
          <div className="menu__head">
            <span className="font-scrawl menu__title">where to, friend?</span>
            <button type="button" className="menu__close" onClick={close} tabIndex={open ? 0 : -1}>Close</button>
          </div>
          <nav aria-label="Mobile" className="menu__nav">
            <ul>
              {navItems.map((n) => (
                <li key={n.to}>
                  <NavLink to={n.to} end={n.end} className={(s) => `menu__link font-plush${s.isActive ? " is-active" : ""}`} onClick={() => onNavigate(n.to)} tabIndex={open ? 0 : -1}>
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="menu__foot">
            <a className="btn btn--whatsapp menu__wa" href={defaultWhatsappUrl} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>WhatsApp us</a>
            <a className="menu__phone" href={PHONE_TEL} tabIndex={open ? 0 : -1}>{PHONE_DISPLAY}</a>
          </div>
        </div>
      </div>
    </>
  );
}
