import { Globe2, Headset, Plane, ShieldCheck } from "lucide-react";
import { trustPoints } from "../../data/howItWorks";
import SectionHeading from "../common/SectionHeading";
import PageContainer from "../layout/PageContainer";

const icons = [ShieldCheck, Plane, Headset, Globe2];

export default function TrustSection() {
  return (
    <section className="section section--tint" aria-labelledby="trust-title">
      <PageContainer>
        <SectionHeading id="trust-title" eyebrow="puppy passport" title="Why families trust TeddyPups" align="center" />
        <ul className="trust">
          {trustPoints.map((t, i) => {
            const Icon = icons[i];
            return (
              <li key={t.title} className="trust__item">
                <span className="trust__icon"><Icon size={24} aria-hidden="true" /></span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </li>
            );
          })}
        </ul>
      </PageContainer>
    </section>
  );
}
