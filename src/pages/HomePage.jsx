import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <Footer />
    </div>
  );
}

export default HomePage;
