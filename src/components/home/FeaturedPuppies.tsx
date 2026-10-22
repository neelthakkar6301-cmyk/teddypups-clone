import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { availablePuppies } from "../../data/puppies";
import SectionHeading from "../common/SectionHeading";
import PuppyGrid from "../puppies/PuppyGrid";
import PageContainer from "../layout/PageContainer";

export default function FeaturedPuppies() {
  const sceneRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const track = trackRef.current;
    if (!scene || !track) return;

    let maxTravel = 0;
    let range = 1;
    let frame = 0;
    let previousY = window.scrollY;
    const walker = document.querySelector<HTMLElement>(".home-walker");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 768px)");

    const measure = () => {
      const compact = mobile.matches || reducedMotion.matches;
      maxTravel = compact ? 0 : Math.max(0, track.scrollWidth - window.innerWidth + 48);
      range = Math.max(1, maxTravel);
      scene.style.height = compact ? "auto" : `${window.innerHeight + maxTravel}px`;
      update();
    };

    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const start = scene.getBoundingClientRect().top + window.scrollY;
        const progress = maxTravel === 0 ? 0 : Math.max(0, Math.min(1, (window.scrollY - start) / range));
        scene.style.setProperty("--track-offset", `${maxTravel * progress}px`);
        const scrollingDown = window.scrollY >= previousY;
        const walkerRect = walker?.getBoundingClientRect();
        const walkerCenter = walkerRect ? walkerRect.left + walkerRect.width / 2 : Number.NaN;
        scene.querySelectorAll<HTMLElement>(".puppy-card--door").forEach((door) => {
          const doorRect = door.getBoundingClientRect();
          const distance = Math.abs(doorRect.left + doorRect.width / 2 - walkerCenter);
          const walkerVisible = walker && Number(walker.style.getPropertyValue("--walker-opacity")) > 0;
          const currentlyOpen = Number(door.style.getPropertyValue("--door-open")) || 0;
          const walkerHasReturnedPastDoor = walkerVisible && walkerCenter < doorRect.left + doorRect.width / 2 - 190;
          const open = mobile.matches || reducedMotion.matches
            ? 1
            : scrollingDown
              ? walkerVisible && distance < 190 ? 1 : currentlyOpen
              : currentlyOpen && !walkerHasReturnedPastDoor ? 1 : 0;
          door.style.setProperty("--door-open", `${open}`);
        });
        previousY = window.scrollY;
        frame = 0;
      });
    };

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", update, { passive: true });
    reducedMotion.addEventListener("change", measure);
    mobile.addEventListener("change", measure);
    measure();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", update);
      reducedMotion.removeEventListener("change", measure);
      mobile.removeEventListener("change", measure);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="featured-puppies-scene" aria-labelledby="meet-title" ref={sceneRef}>
      <div className="featured-puppies__sticky">
        <PageContainer className="featured-puppies__content">
          <div className="section__head-row">
            <SectionHeading id="meet-title" title="Meet the pups" subtitle="Real puppies, real photos, looking for their families right now." />
            <Link className="btn btn--primary featured-puppies__all" to="/puppies">See all available puppies</Link>
          </div>
          <div className="featured-puppies__viewport">
            <PuppyGrid
              listRef={trackRef}
              className="puppy-grid--track"
              puppies={availablePuppies}
              doorCards
              trailing={<Link to="/puppies" className="puppy-card puppy-card--more"><span>Meet them all</span><ArrowRight aria-hidden="true" /></Link>}
            />
          </div>
        </PageContainer>
      </div>
    </section>
  );
}
