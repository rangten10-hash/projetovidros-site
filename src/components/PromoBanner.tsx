import promoDesktop from "@/assets/banner-desktop-oferta.webp";
import promoMobile from "@/assets/banner-mobile-oferta.webp";
import { gtagReportConversion } from "@/lib/gtag";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20vi%20a%20oferta%20do%20Box%20Incolor%2012x%20R$89%20e%20gostaria%20de%20garantir!";

const PromoBanner = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#1a1a1a] lg:pt-24">
      {/* Desktop image */}
      <img
        src={promoDesktop}
        alt="Oferta Box de vidro incolor 8mm temperado - 12x de R$89 instalado"
        loading="lazy"
        decoding="async"
        className="hidden md:block absolute inset-0 lg:top-24 w-full h-[calc(100%-0px)] lg:h-[calc(100%-6rem)] object-contain object-center z-[1]"
      />
      {/* Mobile image */}
      <img
        src={promoMobile}
        alt="Oferta Box de vidro incolor 8mm temperado - 12x de R$89 instalado"
        loading="lazy"
        decoding="async"
        className="md:hidden absolute inset-0 w-full h-full object-contain object-center z-[1]"
      />

      <div className="absolute inset-x-0 bottom-12 md:bottom-32 z-10 flex justify-center px-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            gtagReportConversion(WHATSAPP_URL);
          }}
          className="inline-block bg-[#25D366] text-white px-8 md:px-10 py-3 md:py-4 rounded-md text-sm font-semibold tracking-wide uppercase hover:bg-[#1ebe5a] transition-colors active:scale-[0.97] shadow-[0_8px_24px_rgba(0,0,0,0.45)] drop-shadow-lg"
        >
          Garantir Oferta via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;
