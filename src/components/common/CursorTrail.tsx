import { useEffect, useRef } from "react";

const pawSvg = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="#d6a06e"><ellipse cx="7.4" cy="11.2" rx="3.5" ry="4.4"/><ellipse cx="14.1" cy="6.5" rx="3.7" ry="4.6"/><ellipse cx="21.5" cy="7.2" rx="3.7" ry="4.6"/><ellipse cx="27" cy="13" rx="3.5" ry="4.3"/><path d="M16 13.3c-2.3 0-3.6 2.3-5.6 3.7-2.1 1.5-5.5 3.7-5.5 7.1 0 3.7 3.4 5.7 7.4 4.8 1.6-.4 2.6-1.1 4.2-1.1s2.6.7 4.2 1.1c4 .9 7.4-1.1 7.4-4.8 0-3.4-3.4-5.6-5.5-7.1-2-1.4-3.3-3.7-5.6-3.7z"/></g></svg>';

export default function CursorTrail() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    let previous: { x: number; y: number } | null = null;
    const timers = new Set<number>();
    const spacing = 32;

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const current = { x: event.clientX, y: event.clientY };
      if (!previous) {
        previous = current;
        return;
      }

      const dx = current.x - previous.x;
      const dy = current.y - previous.y;
      const distance = Math.hypot(dx, dy);
      const count = Math.floor(distance / spacing);
      if (!count) return;

      const angle = Math.atan2(dy, dx) * 180 / Math.PI + 90;
      for (let index = 1; index <= count; index += 1) {
        const fraction = Math.min(1, (index * spacing) / distance);
        const paw = document.createElement("span");
        paw.className = "cursor-trail__paw";
        paw.setAttribute("aria-hidden", "true");
        paw.style.left = `${previous.x + dx * fraction}px`;
        paw.style.top = `${previous.y + dy * fraction}px`;
        paw.style.setProperty("--paw-angle", `${angle}deg`);
        paw.innerHTML = pawSvg;
        layer.appendChild(paw);
        const timer = window.setTimeout(() => {
          paw.remove();
          timers.delete(timer);
        }, 3000);
        timers.add(timer);
      }
      previous = current;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      timers.forEach((timer) => window.clearTimeout(timer));
      layer.replaceChildren();
    };
  }, []);

  return <div ref={layerRef} className="cursor-trail" aria-hidden="true" />;
}
