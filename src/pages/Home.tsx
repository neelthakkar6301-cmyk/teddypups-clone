import Hero from "../components/home/Hero";
import FeaturedPuppies from "../components/home/FeaturedPuppies";
import WaysToMeet from "../components/home/WaysToMeet";
import PuppyJourney from "../components/home/PuppyJourney";
import TrustSection from "../components/home/TrustSection";
import HappyFamilies from "../components/home/HappyFamilies";
import FAQSection from "../components/home/FAQSection";
import HomeCTA from "../components/home/HomeCTA";
import PupActor from "../components/mascot/PupActor";
import { homeFaqIds } from "../data/faqs";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

/** The homepage is one long day: morning hero to a night-time front door. */
export default function Home() {
  useDocumentTitle("TeddyPups U.A.E. — Premium teacup puppies in Dubai");
  return (
    <div className="home">
      <Hero />
      <FeaturedPuppies />
      <WaysToMeet />
      <PuppyJourney />
      <TrustSection />
      <HappyFamilies />
      <FAQSection ids={homeFaqIds} />
      <HomeCTA />
      <PupActor />
    </div>
  );
}
