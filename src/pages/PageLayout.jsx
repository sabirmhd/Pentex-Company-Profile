import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function PageLayout({ children, hero }) {
  return (
    <>
      <Navbar />
      {hero}
      <main>{children}</main>
      <Footer />
    </>
  );
}
