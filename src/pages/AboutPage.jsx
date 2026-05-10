import About from "../components/About";
import PageHero from "../components/PageHero";
import aboutHeroImage from "../assets/const5.jpeg";
import PageLayout from "./PageLayout";

export default function AboutPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="About"
          breadcrumb="Home - About"
          backgroundImage={aboutHeroImage}
        />
      }
    >
      <About />
    </PageLayout>
  );
}
