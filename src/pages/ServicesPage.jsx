import PageHero from "../components/PageHero";
import Services from "../components/Services";
import servicesHeroImage from "../assets/IndustrySupply.png";
import PageLayout from "./PageLayout";

export default function ServicesPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="Services"
          breadcrumb="Home - Services"
          backgroundImage={servicesHeroImage}
        />
      }
    >
      <Services />
    </PageLayout>
  );
}
