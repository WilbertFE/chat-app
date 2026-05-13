import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import FeaturesGrid from "./components/features-grid";
import MarqueeStrip from "./components/marquee-strip";
import Footer from "@/components/footer";

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: "#fffdf5", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <MarqueeStrip />
      </main>
      <Footer />
    </div>
  );
}
