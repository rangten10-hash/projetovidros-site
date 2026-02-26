import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import SafetySection from "@/components/SafetySection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CategoryCards />
      <SafetySection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
