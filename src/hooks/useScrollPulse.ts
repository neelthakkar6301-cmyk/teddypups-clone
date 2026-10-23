import { useEffect } from "react";

/** Sets `data-scrolling` on <html> while the page is scrolling, so Teddy can trot along on every page. */
export function useScrollPulse() {
  useEffect(() => {
    const root = document.documentElement;
    let timer = 0;
    const onScroll = () => {
      root.dataset.scrolling = "";
      window.clearTimeout(timer);
      timer = window.setTimeout(() => { delete root.dataset.scrolling; }, 220);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
      delete root.dataset.scrolling;
    };
  }, []);
}
