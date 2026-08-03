import { useEffect } from "react";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryCards from "@/components/CategoryCards";
import SafetySection from "@/components/SafetySection";
import SeoSection from "@/components/SeoSection";
import BoxFinishSelector from "@/components/BoxFinishSelector";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useSeo } from "@/lib/seo";
import { schedulePrefetch } from "@/lib/routePrefetch";
import promoDesktop from "@/assets/banner-desktop-oferta.webp";
import promoMobile from "@/assets/banner-mobile-oferta.webp";

const Index = () => {
  useSeo({
    title: "Vidraçaria Zona Norte SP | Box de Banheiro e Espelhos – Projeto Vidros",
    description:
      "Vidraçaria especializada em box de banheiro, espelhos e portas de vidro na Zona Norte de SP. Vidro temperado com película anti-estilhaço. Orçamento grátis pelo WhatsApp!",
    path: "/",
  });

  // After the page is idle (post-LCP), warm the most-likely next-route
  // chunks and the promo carousel images so navigation feels instant
  // without competing with the hero for bandwidth.
  useEffect(() => {
    schedulePrefetch(
      [
        "/box-de-banheiro",
        "/portas-de-vidro",
        "/espelhos",
        "/projetos",
        "/box-seguro",
      ],
      [promoDesktop, promoMobile]
    );
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" role="main">
        <HeroCarousel />
        <section className="bg-background py-10 md:py-14 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-['Playfair_Display',serif] text-2xl md:text-4xl lg:text-5xl font-bold text-[#002B36] leading-tight">
              Vidraçaria na Zona Norte de SP: Especialista em Box de Banheiro e Vidros de Segurança
            </h1>
            <h2 className="mt-4 font-['Raleway',sans-serif] text-base md:text-lg lg:text-xl text-[#002B36]/80 leading-snug">
              Soluções sob medida com tecnologia anti-estilhaço e instalação profissional em toda a Grande São Paulo.
            </h2>
          </div>
        </section>
        <CategoryCards />
        <SocialProof />
        <SafetySection />
        <SeoSection />
        <BoxFinishSelector />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
