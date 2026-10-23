import { useEffect, useRef } from "react";
import { PAW_PATH, TeddySide } from "./TeddyArt";

/** Share of each stop-to-stop scroll segment spent resting before / after walking. */
const SET_OFF = 0.28;
const ARRIVE = 0.8;
const STRIDE = 48;
const SIDE_RATIO = 190 / 240;
/** How quickly the drawn Teddy catches up with where he should be (higher = snappier). */
const FOLLOW = 7;
/** Speed (px/s) above which Teddy counts as walking. */
const WALK_SPEED = 28;

interface Stop { el: HTMLElement; x: number; feet: number; w: number; still: boolean; facing: 1 | -1; act?: string; visible: boolean }

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const clamp01 = (v: number) => clamp(v, 0, 1);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

function readStop(el: HTMLElement): Stop {
  const r = el.getBoundingClientRect();
  return {
    el, x: r.left, feet: r.bottom + window.scrollY, w: r.width,
    still: el.dataset.pupStop === "still",
    facing: el.dataset.facing === "left" ? -1 : 1,
    act: el.dataset.act,
    visible: r.width > 0,
  };
}

/** On phones the drawn stops are hidden, so a stop is placed by the scene that holds it. */
function sceneFeet(el: HTMLElement): number {
  const scene = el.closest("section") ?? el.parentElement;
  const r = (scene ?? el).getBoundingClientRect();
  return r.top + window.scrollY + r.height * 0.55;
}

/**
 * Teddy walks from stop to stop as the homepage scrolls, leaving paw prints.
 * He eases after his target instead of jumping, keeps inside a lane on screen, turns to face where
 * he is going and walks on the spot through the pinned hallway. On phones he peeks in from the
 * bottom corners and trots across the bottom of the screen between scenes.
 */
export default function PupActor() {
  const actorRef = useRef<HTMLDivElement>(null);
  const flipRef = useRef<HTMLDivElement>(null);
  const printsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const actor = actorRef.current;
    const flip = flipRef.current;
    const prints = printsRef.current;
    if (!actor || !flip || !prints) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const phone = window.matchMedia("(max-width: 767px)");
    const root = document.documentElement;
    let frame = 0;
    let lastTime = 0;
    let lastScrollY = window.scrollY;
    let scrolledAt = 0;
    /** 1 while scrolling down, -1 while scrolling up. */
    let scrollDir = 1;
    let travelled = 0;
    let side = 1;
    let facing = 1;
    let cur: { x: number; y: number; w: number } | null = null;

    const dropPrint = (x: number, feet: number, dir: number) => {
      const host = prints.getBoundingClientRect();
      const paw = document.createElement("span");
      paw.className = "pup-print";
      paw.style.left = `${x - host.left}px`;
      paw.style.top = `${feet - host.top + side * 7}px`;
      paw.style.rotate = `${dir > 0 ? 90 : -90}deg`;
      paw.innerHTML = `<svg viewBox="0 0 64 64"><path d="${PAW_PATH}"/></svg>`;
      prints.appendChild(paw);
      side = -side;
      window.setTimeout(() => paw.remove(), 2400);
    };

    /** Where Teddy should be right now (viewport coordinates), or null when he should be hidden. */
    const target = () => {
      const mobile = phone.matches;
      const all = [...document.querySelectorAll<HTMLElement>("[data-pup-stop]")].map(readStop);
      const stops = mobile
        ? all.map((s) => (s.visible ? s : { ...s, feet: sceneFeet(s.el) }))
        : all.filter((s) => s.visible);
      if (stops.length === 0) return null;
      stops.sort((a, b) => a.feet - b.feet);

      const vw = root.clientWidth;
      const vh = window.innerHeight;
      const focus = window.scrollY + vh * 0.9;
      let k = -1;
      stops.forEach((s, i) => { if (s.feet <= focus) k = i; });
      const fromI = clamp(k, 0, stops.length - 1);
      const toI = k >= 0 && k < stops.length - 1 ? k + 1 : fromI;
      const from = stops[fromI];
      const to = stops[toI];
      const t = to === from ? 0 : (focus - from.feet) / (to.feet - from.feet);
      const walk = to === from ? 0 : easeInOut(clamp01((t - SET_OFF) / (ARRIVE - SET_OFF)));
      const restingAt = walk === 0 ? from : walk === 1 ? to : null;

      // A still stop (the hero teddy) shows its own drawing while Teddy is there.
      // Still stops (hero quilt, footer basket) show their own drawing once Teddy has walked into them.
      stops.forEach((s) => { if (s.still && s !== restingAt) s.el.dataset.away = "true"; });
      if (restingAt?.still && restingAt.visible) {
        const w = restingAt.w;
        const y = restingAt.feet - window.scrollY - w * SIDE_RATIO;
        return { hidden: false as const, restingAt, x: restingAt.x, y, w, rest: 1, settle: restingAt.el };
      }
      if (restingAt?.still) return { hidden: true as const, restingAt };

      if (mobile) {
        // Bottom lane: alternate between peeking in from the left and from the right corner.
        const w = Math.min(150, vw * 0.38);
        const h = w * SIDE_RATIO;
        const bar = document.querySelector<HTMLElement>(".action-bar")?.getBoundingClientRect();
        const floor = (bar && bar.height > 0 ? bar.top : vh) - 4;
        const spot = (i: number) => (i % 2 === 0 ? -w * 0.36 : vw - w * 0.64);
        return { hidden: false as const, restingAt, x: lerp(spot(fromI), spot(toI), walk), y: floor - h, w, rest: restingAt ? (spot(restingAt === from ? fromI : toI) < vw / 2 ? 1 : -1) : 0, settle: undefined };
      }

      const x = lerp(from.x, to.x, walk);
      const feet = lerp(from.feet, to.feet, walk) - window.scrollY;
      const w = lerp(from.w, to.w, walk);
      const h = w * SIDE_RATIO;
      let y = feet - h;
      // Sitting at a stop that is on screen: stay right on it. Otherwise keep to a lane in view.
      const stopInView = restingAt && feet - h > 0 && feet < vh;
      if (!stopInView) y = clamp(y, vh * 0.55, vh - h - 12);
      return { hidden: false as const, restingAt, x, y, w, rest: restingAt ? restingAt.facing : 0, settle: undefined };
    };

    const tick = (time: number) => {
      frame = 0;
      const dt = lastTime ? Math.min(0.05, (time - lastTime) / 1000) : 1 / 60;
      lastTime = time;
      const live = !reduced.matches;
      root.classList.toggle("pup-live", live);
      actor.dataset.mode = phone.matches ? "lane" : "scene";
      const goal = live ? target() : null;
      if (!goal || goal.hidden) {
        actor.dataset.show = "false";
        actor.dataset.walking = "false";
        cur = null;
        return;
      }

      if (!cur) cur = { x: goal.x, y: goal.y, w: goal.w };
      const k = 1 - Math.exp(-dt * FOLLOW);
      const prev = cur;
      cur = { x: lerp(prev.x, goal.x, k), y: lerp(prev.y, goal.y, k), w: lerp(prev.w, goal.w, k) };
      const vx = (cur.x - prev.x) / dt;
      const speed = Math.hypot(vx, (cur.y - prev.y) / dt);

      // Face where he is going; when resting, face the way the stop asks.
      const scrolling = time - scrolledAt < 220;
      const treadmill = goal.restingAt?.act === "treadmill" && scrolling;

      // In the hallway he walks on the spot: forward (right) when scrolling down, back (left) when scrolling up.
      if (treadmill) facing = scrollDir;
      else if (Math.abs(vx) > WALK_SPEED) facing = vx > 0 ? 1 : -1;
      else if (goal.rest && goal.restingAt?.act !== "treadmill") facing = goal.rest;
      const walking = speed > WALK_SPEED || treadmill;

      // Arrived at a still stop: hand over to its own drawing (Teddy settles into the basket).
      if (goal.settle) {
        const arrived = Math.hypot(goal.x - cur.x, goal.y - cur.y) < 6;
        goal.settle.dataset.away = String(!arrived);
        if (arrived) {
          actor.dataset.show = "false";
          actor.dataset.walking = "false";
          if (scrolling) frame = window.requestAnimationFrame(tick);
          else lastTime = 0;
          return;
        }
      }

      actor.dataset.show = "true";
      actor.dataset.walking = String(walking);
      actor.style.width = `${cur.w}px`;
      actor.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
      flip.style.transform = `scaleX(${facing})`;

      if (walking && !phone.matches) {
        travelled += speed * dt;
        if (travelled > STRIDE) {
          travelled = 0;
          if (!treadmill) dropPrint(cur.x + cur.w * 0.5, cur.y + cur.w * SIDE_RATIO - 4, facing);
        }
      }

      // Keep animating until Teddy has caught up and the page is still.
      const settled = Math.abs(goal.x - cur.x) < 0.3 && Math.abs(goal.y - cur.y) < 0.3 && !scrolling;
      if (!settled) frame = window.requestAnimationFrame(tick);
      else lastTime = 0;
    };

    const wake = () => { if (!frame) frame = window.requestAnimationFrame(tick); };
    const onScroll = () => {
      if (window.scrollY !== lastScrollY) {
        scrolledAt = performance.now();
        scrollDir = window.scrollY > lastScrollY ? 1 : -1;
      }
      lastScrollY = window.scrollY;
      wake();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", wake);
    reduced.addEventListener("change", wake);
    phone.addEventListener("change", wake);
    // Images and fonts shift stops after first paint.
    const settle = window.setInterval(wake, 500);
    window.setTimeout(() => window.clearInterval(settle), 4000);
    wake();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", wake);
      reduced.removeEventListener("change", wake);
      phone.removeEventListener("change", wake);
      window.clearInterval(settle);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("pup-live");
      prints.replaceChildren();
    };
  }, []);

  return (
    <>
      <div className="pup-prints" ref={printsRef} aria-hidden="true" />
      <div className="pup-layer" aria-hidden="true">
        <div className="pup-actor" ref={actorRef} data-show="false">
          <div className="pup-actor__flip" ref={flipRef}><TeddySide /></div>
        </div>
      </div>
    </>
  );
}
