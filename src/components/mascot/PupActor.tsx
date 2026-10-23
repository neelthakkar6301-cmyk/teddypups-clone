import { useEffect, useRef } from "react";
import { PAW_PATH, TeddySide } from "./TeddyArt";

/** Share of each stop-to-stop scroll segment spent resting before / after walking. */
const SET_OFF = 0.28;
const ARRIVE = 0.8;
const STRIDE = 48;
const SIDE_RATIO = 190 / 240;

interface Stop { el: HTMLElement; x: number; feet: number; w: number; still: boolean; facing: 1 | -1 }

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

function readStop(el: HTMLElement): Stop {
  const r = el.getBoundingClientRect();
  return {
    el, x: r.left, feet: r.bottom + window.scrollY, w: r.width,
    still: el.dataset.pupStop === "still",
    facing: el.dataset.facing === "left" ? -1 : 1,
  };
}

/**
 * Teddy walks from stop to stop as the page scrolls (homepage only), leaving paw prints.
 * Disabled on small screens and for reduced motion; stops then show their own drawing.
 */
export default function PupActor() {
  const actorRef = useRef<HTMLDivElement>(null);
  const printsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const actor = actorRef.current;
    const prints = printsRef.current;
    if (!actor || !prints) return;
    const off = window.matchMedia("(max-width: 767px), (prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    let frame = 0;
    let idleTimer = 0;
    let last: { x: number; feet: number } | null = null;
    let travelled = 0;
    let side = 1;

    const dropPrint = (x: number, feet: number, facing: number) => {
      const host = prints.getBoundingClientRect();
      const paw = document.createElement("span");
      paw.className = "pup-print";
      paw.style.left = `${x - host.left - window.scrollX}px`;
      paw.style.top = `${feet - (host.top + window.scrollY) + side * 7}px`;
      paw.style.rotate = `${facing > 0 ? 90 : -90}deg`;
      paw.innerHTML = `<svg viewBox="0 0 64 64"><path d="${PAW_PATH}"/></svg>`;
      prints.appendChild(paw);
      side = -side;
      window.setTimeout(() => paw.remove(), 2400);
    };

    const update = () => {
      frame = 0;
      const live = !off.matches;
      root.classList.toggle("pup-live", live);
      const stops = live ? [...document.querySelectorAll<HTMLElement>("[data-pup-stop]")].map(readStop).filter((s) => s.w > 0) : [];
      if (stops.length === 0) {
        actor.dataset.show = "false";
        return;
      }
      stops.sort((a, b) => a.feet - b.feet);

      const focus = window.scrollY + window.innerHeight * 0.66;
      let k = -1;
      stops.forEach((s, i) => { if (s.feet <= focus) k = i; });
      const from = stops[Math.max(0, Math.min(k, stops.length - 1))];
      const to = k >= 0 && k < stops.length - 1 ? stops[k + 1] : from;
      const t = to === from ? 0 : (focus - from.feet) / (to.feet - from.feet);
      const walk = to === from ? 0 : easeInOut(clamp01((t - SET_OFF) / (ARRIVE - SET_OFF)));
      const restingAt = walk === 0 ? from : walk === 1 ? to : null;

      // A still stop (the hero teddy) shows its own drawing while Teddy is there.
      stops.forEach((s) => { if (s.still) s.el.dataset.away = String(restingAt !== s); });
      const hidden = restingAt?.still ?? false;

      const x = lerp(from.x, to.x, walk);
      const feet = lerp(from.feet, to.feet, walk);
      const w = lerp(from.w, to.w, walk);
      const facing = restingAt ? restingAt.facing : Math.sign(to.x - from.x) || from.facing;

      actor.dataset.show = String(!hidden);
      actor.dataset.facing = facing > 0 ? "right" : "left";
      actor.style.width = `${w}px`;
      actor.style.transform = `translate3d(${x}px, ${feet - window.scrollY - w * SIDE_RATIO}px, 0)`;

      const moved = last ? Math.hypot(x - last.x, feet - last.feet) : 0;
      if (moved > 0.5 && !restingAt && !hidden) {
        actor.dataset.walking = "true";
        window.clearTimeout(idleTimer);
        idleTimer = window.setTimeout(() => { actor.dataset.walking = "false"; }, 160);
        travelled += moved;
        if (travelled > STRIDE) {
          travelled = 0;
          dropPrint(x + w * 0.5, feet - 4, facing);
        }
      }
      last = { x, feet };
    };

    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    off.addEventListener("change", schedule);
    // Images and fonts shift stops after first paint.
    const settle = window.setInterval(schedule, 500);
    window.setTimeout(() => window.clearInterval(settle), 4000);
    schedule();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      off.removeEventListener("change", schedule);
      window.clearInterval(settle);
      window.clearTimeout(idleTimer);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("pup-live");
      prints.replaceChildren();
    };
  }, []);

  return (
    <>
      <div className="pup-prints" ref={printsRef} aria-hidden="true" />
      <div className="pup-layer" aria-hidden="true">
        <div className="pup-actor" ref={actorRef} data-show="false" data-facing="right">
          <TeddySide />
        </div>
      </div>
    </>
  );
}
