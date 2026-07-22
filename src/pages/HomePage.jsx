import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import Engagement from "../components/sections/Engagement";
import HowItWorks from "../components/sections/HowItWorks";
import Temoignages from "../components/sections/Temoignages";
import FAQ from "../components/sections/FAQ";
import CTAPartenaire from "../components/sections/CTAPartenaire";

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <section id="impact">
        <Engagement />
      </section>
      <section id="processus">
        <HowItWorks />
      </section>
      <section id="partenaires">
        <CTAPartenaire />
      </section>
      <section id="temoignages">
        <Temoignages />
      </section>
      <FAQ />
      <Footer />
    </div>
  );
}

export default HomePage;
