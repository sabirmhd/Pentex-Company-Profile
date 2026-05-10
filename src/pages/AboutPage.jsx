import About from "../components/About";
import PageHero from "../components/PageHero";
import aboutHeroImage from "../assets/const5.jpeg";
import PageLayout from "./PageLayout";

export default function AboutPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="About Us"
          breadcrumb="Home - About Us"
          backgroundImage={aboutHeroImage}
        />
      }
    >
      <About />
    </PageLayout>
  );
}
