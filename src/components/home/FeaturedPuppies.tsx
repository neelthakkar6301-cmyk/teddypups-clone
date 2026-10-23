import { useEffect, useRef, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { availablePuppies } from "../../data/puppies";
import Button from "../common/Button";
import PupStop from "../mascot/PupStop";
import PuppyDoor from "../puppies/PuppyDoor";

const PIN_QUERY = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";
/** Scroll distance per pixel of hallway travel (the reference pins for 80% of the overflow). */
const SCROLL_PER_PX = 0.8;

/**
 * "Meet the pups": a hallway of doors. On laptops and up the section pins and the
 * hallway slides past Teddy as you scroll; each door opens once Teddy reaches it.
 * Below 1024px it is a grid and doors open as they scroll into view.
 */
export default function FeaturedPuppies() {
  const sceneRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const track = trackRef.current;
    if (!scene || !track) return;
    const pin = window.matchMedia(PIN_QUERY);
    const doors = () => [...track.querySelectorAll<HTMLElement>(".door")];
    let travel = 0;
    let frame = 0;
    let observer: IntersectionObserver | null = null;

    const update = () => {
      frame = 0;
      if (!pin.matches) return;
      const top = scene.getBoundingClientRect().top;
      const progress = travel === 0 ? 0 : Math.min(1, Math.max(0, -top / (travel * SCROLL_PER_PX)));
      scene.style.setProperty("--track-x", `${-travel * progress}px`);
      scene.style.setProperty("--floor-x", `${-travel * progress * 0.6}px`);
      const teddy = scene.querySelector<HTMLElement>(".meet__teddy")?.getBoundingClientRect();
      const reach = teddy ? teddy.left + teddy.width * 0.7 : window.innerWidth * 0.3;
      doors().forEach((d) => {
        const r = d.getBoundingClientRect();
        d.dataset.open = String(r.left + r.width * 0.35 < reach);
      });
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };

    const setup = () => {
      observer?.disconnect();
      observer = null;
      if (pin.matches) {
        scene.dataset.pinned = "";
        travel = Math.max(0, track.scrollWidth - window.innerWidth);
        scene.style.height = `${window.innerHeight + Math.round(travel * SCROLL_PER_PX)}px`;
        schedule();
      } else {
        delete scene.dataset.pinned;
        scene.style.removeProperty("height");
        scene.style.removeProperty("--track-x");
        observer = new IntersectionObserver((entries) => entries.forEach((e) => {
          if (e.isIntersecting) (e.target as HTMLElement).dataset.open = "true";
        }), { rootMargin: "0px 0px -35% 0px", threshold: 0.5 });
        doors().forEach((d) => observer?.observe(d));
      }
    };

    const resize = new ResizeObserver(setup);
    resize.observe(track);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", setup);
    pin.addEventListener("change", setup);
    setup();

    return () => {
      resize.disconnect();
      observer?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", setup);
      pin.removeEventListener("change", setup);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sceneRef} className="scene meet" aria-labelledby="meet-title" style={{ "--sky-top": "#fff1d8", "--sky-bottom": "#fbe3b4" } as CSSProperties}>
      <div className="meet__stage">
        <header className="meet__head gutter">
          <div>
            <h2 id="meet-title" className="text-huge">Meet the pups</h2>
            <p className="text-lede ink-soft meet__lede">Real puppies, real photos, looking for their families right now.</p>
          </div>
          <Button to="/puppies">See all available puppies</Button>
        </header>
        <div className="meet__hall">
          <ol ref={trackRef} className="meet__track" aria-label="Puppies looking for a family">
            {availablePuppies.map((p, i) => <PuppyDoor key={p.id} puppy={p} index={i} />)}
            <li className="door door--all">
              <Link className="door__link" to="/puppies">
                <span className="door__frame door__frame--all"><span className="door__all font-plush">Meet them all</span></span>
              </Link>
            </li>
          </ol>
          <div className="meet__floor" aria-hidden="true" />
          <PupStop className="meet__teddy" act="treadmill" />
        </div>
      </div>
    </section>
  );
}
