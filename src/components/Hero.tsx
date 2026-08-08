import { gtagReportConversion } from "@/lib/gtag";

const heroDesktop = "/hero/desktop.webp";
const heroMobile = "/hero/mobile.webp";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá!%20Vi%20o%20Box+%20Seguro%20no%20site%20e%20gostaria%20de%20um%20orçamento.";

const Hero = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#1a1a1a] flex flex-col">
      {/* Single <picture>: browser downloads only the matching source (no double fetch) */}
      <div className="relative flex-1 min-h-0">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroDesktop} type="image/webp" />
          <source media="(max-width: 767px)" srcSet={heroMobile} type="image/webp" />
          <img
            src={heroMobile}
            alt="Box+ Seguro: a beleza que você quer e a segurança que sua família precisa"
            loading="eager"
            fetchPriority="high"
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
          className="animate-pulse-cta bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold uppercase tracking-wide text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-full transition-colors text-center shadow-[0_8px_24px_rgba(0,0,0,0.45)] drop-shadow-lg"
        >
          Quer mais proteção em seu box?
        </a>
      </div>
    </section>
  );

};

export default Hero;
