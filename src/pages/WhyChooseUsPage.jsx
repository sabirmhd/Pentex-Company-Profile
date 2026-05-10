import PageHero from "../components/PageHero";
import WhyChooseUs from "../components/WhyChooseUs";
import whyHeroImage from "../assets/whyus.png";
import PageLayout from "./PageLayout";

export default function WhyChooseUsPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="Why Choose Us"
          breadcrumb="Home - Why Choose Us"
          backgroundImage={whyHeroImage}
        />
      }
    >
      <WhyChooseUs />
    </PageLayout>
  );
}
