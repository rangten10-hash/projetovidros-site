import promoDesktop from "@/assets/banner-desktop-oferta.webp";
import promoMobile from "@/assets/banner-mobile-oferta.webp";
import { gtagReportConversion } from "@/lib/gtag";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20vi%20a%20oferta%20do%20Box%20Incolor%2012x%20R$79,90%20e%20gostaria%20de%20garantir!";

const ALT = "Oferta Box de vidro incolor 8mm temperado - 12x de R$79,90 já instalado";

const PromoBanner = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#1a1a1a] flex flex-col">
      <div className="relative flex-1 min-h-0">
        <picture>
          <source media="(min-width: 768px)" srcSet={promoDesktop} type="image/webp" />
          <source media="(max-width: 767px)" srcSet={promoMobile} type="image/webp" />
          <img
            src={promoDesktop}
            alt={ALT}
            loading="lazy"
            fetchPriority="low"
            decoding="async"
            className="absolute inset-0 w-full h-full object-contain object-center z-[1]"
          />
        </picture>
      </div>

      <div className="shrink-0 z-10 flex justify-center px-4 py-3 md:py-5">
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
