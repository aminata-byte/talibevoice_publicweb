import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import HowItWorks from "../components/sections/HowItWorks";
import CTAPartenaire from "../components/sections/CTAPartenaire";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <HowItWorks />
      <CTAPartenaire />
      <Footer />
    </div>
  );
}

export default HomePage;
