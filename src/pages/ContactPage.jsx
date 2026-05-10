import Contact from "../components/Contact";
import PageHero from "../components/PageHero";
import contactHeroImage from "../assets/Logistics.png";
import PageLayout from "./PageLayout";

export default function ContactPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="Contact"
          breadcrumb="Home - Contact Us"
          backgroundImage={contactHeroImage}
        />
      }
    >
      <Contact />
    </PageLayout>
  );
}
