import promoDesktop from "@/assets/promo-box-incolor-desktop.webp";
import promoMobile from "@/assets/promo-box-incolor-mobile.webp";
import { gtagReportConversion } from "@/lib/gtag";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20vi%20a%20oferta%20do%20Box%20Incolor%2012x%20R$79,90%20e%20gostaria%20de%20garantir!";

const ALT = "Box de vidro incolor 8mm temperado instalado em banheiro claro";

const PromoBanner = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#1a1a1a]">
      <picture>
        <source media="(min-width: 768px)" srcSet={promoDesktop} type="image/webp" />
        <source media="(max-width: 767px)" srcSet={promoMobile} type="image/webp" />
        <img
          src={promoMobile}
          alt={ALT}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center z-[1]"
        />
      </picture>

      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 z-[2] bg-black/40" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pb-20 md:pb-24">
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-white leading-tight max-w-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          Box de Vidro Incolor 8mm Temperado
        </h2>
        <p className="mt-3 md:mt-5 text-white/90 text-sm sm:text-base md:text-xl max-w-2xl leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          Promoção Imperdível a partir de 12x de R$ 79,90 já instalado!
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            gtagReportConversion(WHATSAPP_URL);
          }}
          className="mt-6 md:mt-8 inline-block bg-[#25D366] hover:bg-[#1ebe5a] text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-colors active:scale-[0.97]"
        >
          Garantir Oferta no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;
