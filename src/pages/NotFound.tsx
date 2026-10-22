import PageContainer from "../components/layout/PageContainer";
import Button from "../components/common/Button";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { defaultWhatsappUrl } from "../utils/whatsapp";

export default function NotFound({ kind = "page" }: { kind?: "page" | "puppy" }) {
  useDocumentTitle("Not found | TeddyPups U.A.E.");
  return (
    <PageContainer narrow className="notfound">
      <p className="eyebrow">404</p>
      <h1>{kind === "puppy" ? "We couldn't find that puppy" : "This page wandered off"}</h1>
      <p>{kind === "puppy"
        ? "That puppy may have found their family already, or the link is a little off. Have a look at who's available now."
        : "The page you're looking for doesn't exist. Let's get you back to the pups."}</p>
      <div className="hero__cta">
        <Button to="/puppies">See available puppies</Button>
        <Button to="/" variant="secondary">Back home</Button>
        <Button href={defaultWhatsappUrl} variant="whatsapp">Ask on WhatsApp</Button>
      </div>
    </PageContainer>
  );
}
