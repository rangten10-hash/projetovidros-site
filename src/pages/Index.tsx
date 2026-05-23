import { useEffect } from "react";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryCards from "@/components/CategoryCards";
import SafetySection from "@/components/SafetySection";
import SeoSection from "@/components/SeoSection";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useSeo } from "@/lib/seo";
import { schedulePrefetch } from "@/lib/routePrefetch";
import promoDesktop from "@/assets/banner-desktop-oferta.webp";
import promoMobile from "@/assets/banner-mobile-oferta.webp";

const Index = () => {
  useSeo({
    title: "Projeto Vidros | Box de Banheiro e Espelhos em São Paulo",
    description:
      "Vidraçaria especializada em box de banheiro com película anti-estilhaço, espelhos sob medida e portas de vidro em São Paulo e região.",
    path: "/",
  });
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" role="main">
        <HeroCarousel />
        <CategoryCards />
        <SocialProof />
        <SafetySection />
        <SeoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
