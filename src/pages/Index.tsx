import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import VideosSection from "@/components/VideosSection";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SplashScreen from "@/components/SplashScreen";

const Index = () => (
  <SplashScreen>
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <VideosSection />
      <MapSection />
      <ContactSection />
      <Footer />
      <FloatingActions />
    </div>
  </SplashScreen>
);

export default Index;
