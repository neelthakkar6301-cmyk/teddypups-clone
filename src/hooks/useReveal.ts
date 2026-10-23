import { useEffect, type RefObject } from "react";

/**
 * Marks children matching `selector` as armed (hidden) and reveals each one as it
 * scrolls into view. Without IntersectionObserver or with reduced motion, nothing is hidden.
 */
export function useReveal(container: RefObject<HTMLElement | null>, selector: string, refreshKey?: unknown) {
  useEffect(() => {
    const root = container.current;
    if (!root || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = [...root.querySelectorAll<HTMLElement>(selector)];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        (e.target as HTMLElement).dataset.revealed = "";
        observer.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.15 });
    items.forEach((el) => {
      if ("revealed" in el.dataset) return;
      el.dataset.armed = "";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [container, selector, refreshKey]);
}
