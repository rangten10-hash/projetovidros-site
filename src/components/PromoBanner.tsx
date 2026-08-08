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

      {/* Gradiente lateral: escurece a esquerda e libera a foto à direita */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center text-left px-6 md:px-14 lg:px-20 pb-16 md:pb-20">
        <h2 className="font-display text-lg sm:text-xl md:text-3xl text-white leading-tight max-w-md drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          Box de Vidro Incolor 8mm Temperado
        </h2>

        <div className="mt-3 md:mt-4 inline-flex flex-col bg-black/55 border-l-4 border-[#FFD400] px-4 py-2 md:px-6 md:py-3">
          <span className="text-[#FFD400] font-display font-bold leading-none text-3xl sm:text-4xl md:text-6xl drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]">
            12x R$ 79,90
          </span>
          <span className="mt-1 md:mt-2 text-white/90 text-[11px] sm:text-xs md:text-sm leading-snug">
            Promoção imperdível — já instalado, sem custo extra.
          </span>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            gtagReportConversion(WHATSAPP_URL);
          }}
          className="mt-4 md:mt-6 inline-block bg-[#25D366] hover:bg-[#1ebe5a] text-white px-5 md:px-8 py-3 md:py-4 rounded-sm text-[11px] sm:text-sm md:text-base font-bold uppercase tracking-wide shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-colors active:scale-[0.97]"
        >
          Garantir Oferta no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;
