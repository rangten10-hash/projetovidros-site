import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryCards from "@/components/CategoryCards";
import SafetySection from "@/components/SafetySection";
import SeoSection from "@/components/SeoSection";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <CategoryCards />
      <SocialProof />
      <SafetySection />
      <SeoSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
