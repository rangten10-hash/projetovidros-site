import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { gtagReportConversion } from "@/lib/gtag";
import promoBoxBg from "@/assets/promo-box-incolor-bg.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20box%20de%20segurança.";

const WHATSAPP_PROMO_URL =
  "https://wa.me/5511915485945?text=Olá,%20vi%20a%20oferta%20do%20Box%20Incolor%2012x%20de%20R%24%2089%20e%20gostaria%20de%20saber%20mais!";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative h-screen overflow-hidden">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {/* Slide 1 — Hero original */}
          <div className="relative min-w-0 shrink-0 grow-0 basis-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-petrol/25" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center max-w-4xl mx-auto px-4">
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
                  A segurança da sua família{" "}
                  <span className="text-gradient-copper">não é opcional.</span>
                </h1>
                <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                  Box com tecnologia antiestilhaço e vidros laminados de alta
                  resistência. Mais de 30 anos de experiência protegendo lares.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      gtagReportConversion(WHATSAPP_URL);
                    }}
                    className="bg-accent text-accent-foreground px-8 py-4 rounded-md text-sm font-semibold tracking-wide uppercase hover:bg-copper-light transition-colors"
                  >
                    Solicitar Orçamento
                  </a>
                  <Link
                    to="/box-de-banheiro"
                    className="border border-copper/40 text-primary-foreground px-8 py-4 rounded-md text-sm font-semibold tracking-wide uppercase hover:bg-primary-foreground/5 transition-colors"
                  >
                    Conheça Nossos Produtos
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 — Promo Box Incolor */}
          <div className="relative min-w-0 shrink-0 grow-0 basis-full h-full">
            <img
              src={promoBoxBg}
              alt="Banheiro moderno com box de vidro incolor"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
            <div className="relative z-10 flex items-center h-full">
              <div className="max-w-3xl mx-auto px-6 md:px-12 lg:pl-24 text-left">
                {/* Badge */}
                <span className="inline-block bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                  🔥 Melhor Oferta
                </span>

                <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 leading-[1.1]">
                  Oferta Especial:{" "}
                  <span className="text-gradient-copper">
                    Box de Vidro Incolor 🚿
                  </span>
                </h2>

                <div className="mb-6">
                  <p className="text-primary-foreground text-2xl md:text-4xl font-bold">
                    Apenas{" "}
                    <span className="text-gradient-copper text-3xl md:text-5xl">
                      12x de R$ 89,00
                    </span>
                  </p>
                  <p className="text-primary-foreground/80 text-base md:text-lg mt-1 font-light">
                    já instalado!
                  </p>
                </div>

                <ul className="text-primary-foreground/70 text-sm md:text-base space-y-1 mb-8 font-light">
                  <li>✓ Vidro temperado 8mm de alta resistência</li>
                  <li>✓ Alumínio fosco — acabamento premium</li>
                  <li>✓ Medidas até 0,80m (larg) × 1,85m (alt)</li>
                  <li>✓ Instalação inclusa</li>
                </ul>

                <a
                  href={WHATSAPP_PROMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    gtagReportConversion(WHATSAPP_PROMO_URL);
                  }}
                  className="inline-block bg-accent text-accent-foreground px-10 py-4 rounded-md text-sm md:text-base font-bold tracking-wide uppercase hover:bg-copper-light transition-colors active:scale-[0.97]"
                >
                  Garantir Oferta via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              selectedIndex === i
                ? "bg-accent scale-110"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
