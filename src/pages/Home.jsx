import About from "../components/About";
import Branches from "../components/Branches";
import Contact from "../components/Contact";
import HomeHero from "../components/HomeHero";
import Markets from "../components/Markets";
import Services from "../components/Services";
import VisionMission from "../components/VisionMission";
import WhyChooseUs from "../components/WhyChooseUs";
import PageLayout from "./PageLayout";

export default function Home() {
  return (
    <PageLayout hero={<HomeHero />}>
      <About />
      <VisionMission />
      <Markets />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Branches />
    </PageLayout>
  );
}
