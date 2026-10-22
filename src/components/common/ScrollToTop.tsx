import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MAX_WAIT_MS = 3000;

/**
 * Scrolls to the top on route change, or to the #hash target when one is present.
 * Pages are lazy-loaded, so a hash target may not exist yet: wait for it to appear.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    const started = Date.now();
    let timer: number | undefined;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      } else if (Date.now() - started < MAX_WAIT_MS) {
        timer = window.setTimeout(tryScroll, 50);
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };
    tryScroll();
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
