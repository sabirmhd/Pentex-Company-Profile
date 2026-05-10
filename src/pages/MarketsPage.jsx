import Markets from "../components/Markets";
import PageHero from "../components/PageHero";
import marketsHeroImage from "../assets/Commercial.png";
import PageLayout from "./PageLayout";

export default function MarketsPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="Markets"
          breadcrumb="Home - Markets"
          backgroundImage={marketsHeroImage}
        />
      }
    >
      <Markets />
    </PageLayout>
  );
}
