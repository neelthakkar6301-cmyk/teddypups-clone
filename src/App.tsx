import { Suspense, lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import ScrollToTop from "./components/common/ScrollToTop";
import Loading from "./components/common/Loading";
import CursorTrail from "./components/common/CursorTrail";
import Curtain from "./components/layout/Curtain";
import { useScrollPulse } from "./hooks/useScrollPulse";

const Home = lazy(() => import("./pages/Home"));
const Puppies = lazy(() => import("./pages/Puppies"));
const PuppyDetails = lazy(() => import("./pages/PuppyDetails"));
const GoneHome = lazy(() => import("./pages/GoneHome"));
const HappyFamilies = lazy(() => import("./pages/HappyFamilies"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function SiteLayout() {
  useScrollPulse();
  return (
    <>
      <CursorTrail />
      <Curtain />
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="puppies" element={<Puppies />} />
        <Route path="puppies/:slug" element={<PuppyDetails />} />
        <Route path="gone-home" element={<GoneHome />} />
        <Route path="happy-families" element={<HappyFamilies />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
