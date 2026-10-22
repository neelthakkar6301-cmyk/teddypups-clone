import { useEffect } from "react";
import Hero from "../components/home/Hero";
import MascotWalker from "../components/home/MascotWalker";
import FeaturedPuppies from "../components/home/FeaturedPuppies";
import WaysToMeet from "../components/home/WaysToMeet";
import PuppyJourney from "../components/home/PuppyJourney";
import TrustSection from "../components/home/TrustSection";
import HappyFamilies from "../components/home/HappyFamilies";
import FAQSection from "../components/home/FAQSection";
import HomeCTA from "../components/home/HomeCTA";
import { homeFaqIds } from "../data/faqs";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle("TeddyPups U.A.E. — Premium teacup puppies in Dubai");
  useEffect(() => {
    const walker = document.querySelector<HTMLElement>(".home-walker");
    const footprintLayer = document.querySelector<HTMLElement>(".home-footprints");
    const hero = document.querySelector<HTMLElement>(".hero");
    const featured = document.querySelector<HTMLElement>(".featured-puppies-scene");
    const centerMascot = document.querySelector<HTMLElement>(".hero .arch--mascot");
    if (!walker || !footprintLayer || !hero || !featured || !centerMascot || window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let walkingTimer = 0;
    let lastFootprintY = 0;
    let lastFootprintDirection = 0;
    let footprintCount = 0;
    const footprintTimers = new Set<number>();
    let previousY = window.scrollY;
    const mascotRect = centerMascot.getBoundingClientRect();
    const startScrollY = hero.offsetTop + hero.offsetHeight * 0.38;
    const startX = mascotRect.left + mascotRect.width / 2 - walker.offsetWidth / 2;
    const startY = mascotRect.top + window.scrollY - startScrollY;
    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const moving = scrollY > startScrollY;
        const featureTop = featured.getBoundingClientRect().top + window.scrollY;
        const arrival = Math.max(0, Math.min(1, (scrollY - startScrollY) / Math.max(1, featureTop - startScrollY)));
        const sectionTravel = Math.max(1, featured.offsetHeight - window.innerHeight);
        const sectionProgress = Math.max(0, Math.min(1, (scrollY - featureTop) / sectionTravel));
        const scrollingDown = scrollY >= previousY;
        const faceRight = scrollY < featureTop ? !scrollingDown : scrollingDown;
        const leftX = window.innerWidth * 0.16;
        const x = scrollY < featureTop
          ? startX + (leftX - startX) * arrival
          : leftX + (window.innerWidth * 0.34 * sectionProgress);
        const y = scrollY < featureTop
          ? startY + arrival * (window.innerHeight * 0.72 - startY)
          : window.innerHeight * 0.74;
        centerMascot.classList.toggle("is-transforming", moving);
        walker.classList.toggle("home-walker--walking", scrollY !== previousY);
        walker.classList.toggle("home-walker--face-right", faceRight);
        walker.classList.toggle("home-walker--face-left", !faceRight);
        walker.style.setProperty("--walker-x", `${x}px`);
        walker.style.setProperty("--walker-y", `${y}px`);
        walker.style.setProperty("--walker-opacity", moving ? "1" : "0");
        const travelDirection = scrollY > previousY ? 1 : scrollY < previousY ? -1 : 0;
        if (travelDirection && scrollY >= startScrollY && scrollY < featureTop) {
          if (travelDirection !== lastFootprintDirection) {
            if (lastFootprintDirection !== 0) {
              footprintLayer.querySelectorAll<HTMLElement>(".home-footprint").forEach((print) => print.classList.add("home-footprint--fade-fast"));
            }
            lastFootprintY = previousY;
          }
          if (Math.abs(scrollY - lastFootprintY) >= 64) {
            const paw = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><ellipse cx="16" cy="21" rx="6" ry="7"/><ellipse cx="7.5" cy="12" rx="3.2" ry="4.2"/><ellipse cx="14.5" cy="8" rx="3.2" ry="4.2"/><ellipse cx="21.5" cy="8.5" rx="3.2" ry="4.2"/><ellipse cx="26" cy="13" rx="3.2" ry="4.2"/></svg>';
            for (let pawIndex = 0; pawIndex < 4; pawIndex += 1) {
              const alternateStep = pawIndex % 2 === 1;
              const print = document.createElement("span");
              print.className = `home-footprint home-footprint--${travelDirection > 0 ? "down" : "up"}`;
              print.setAttribute("aria-hidden", "true");
              const row = Math.floor(pawIndex / 2);
              const travelOffset = travelDirection > 0 ? row * 50 : (1 - row) * 50;
              print.style.left = `${x + walker.offsetWidth * 0.54 + (alternateStep ? 40 : -40)}px`;
              print.style.top = `${y + walker.offsetHeight * 0.91 + travelOffset}px`;
              if (alternateStep) print.classList.add("home-footprint--alternate");
              print.innerHTML = paw;
              footprintLayer.appendChild(print);
              footprintCount += 1;
              const timer = window.setTimeout(() => {
                print.remove();
                footprintTimers.delete(timer);
              }, 1000);
              footprintTimers.add(timer);
            }
            lastFootprintY = scrollY;
          }
          lastFootprintDirection = travelDirection;
        } else {
          lastFootprintY = 0;
          lastFootprintDirection = 0;
        }
        previousY = scrollY;
        frame = 0;
      });
    };
    const onScroll = () => {
      update();
      window.clearTimeout(walkingTimer);
      walkingTimer = window.setTimeout(() => walker.classList.remove("home-walker--walking"), 140);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      window.clearTimeout(walkingTimer);
      footprintTimers.forEach((timer) => window.clearTimeout(timer));
      footprintTimers.clear();
      footprintLayer.replaceChildren();
      centerMascot.classList.remove("is-transforming");
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="home-footprints" aria-hidden="true" />
      <MascotWalker />
      <Hero />
      <FeaturedPuppies />
      <WaysToMeet />
      <PuppyJourney />
      <TrustSection />
      <HappyFamilies />
      <FAQSection ids={homeFaqIds} />
      <HomeCTA />
    </>
  );
}
