import promoDesktop from "@/assets/promo-box-incolor-desktop.webp";
import promoMobile from "@/assets/promo-box-incolor-mobile.webp";
import { gtagReportConversion } from "@/lib/gtag";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20vi%20a%20oferta%20do%20Box%20Incolor%2012x%20R$79,00%20e%20gostaria%20de%20garantir!";

const ALT =
  "Promoção Box de vidro incolor 8mm temperado com alumínio fosco, 12x de R$ 79,00 já instalado";

const PromoBanner = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#0d0d0d]">
      {/* Desktop */}
      <img
        src={promoDesktop}
        alt={ALT}
        width={1920}
        height={800}
        loading="lazy"
        decoding="async"
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-center z-[1]"
      />
      {/* Mobile */}
      <img
        src={promoMobile}
        alt={ALT}
        width={900}
        height={1612}
        loading="lazy"
        decoding="async"
        className="block md:hidden absolute inset-x-0 top-0 w-full h-[calc(100%-7rem)] object-contain object-top z-[1]"
      />


      {/* CTA WhatsApp sobre o banner */}
      <div className="absolute inset-x-0 bottom-12 md:bottom-10 z-10 flex justify-center px-6">

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            gtagReportConversion(WHATSAPP_URL, undefined, "banner_promo_box_incolor");
          }}
          className="inline-block bg-[#25D366] hover:bg-[#1ebe5a] text-white px-4 md:px-8 py-2.5 md:py-4 rounded-sm text-[11px] sm:text-xs md:text-base font-bold uppercase tracking-wide shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-colors active:scale-[0.97]"
        >
          Garantir Oferta no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;
