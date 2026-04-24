import bannerBg from "@/assets/banner-box-incolor.png";
import { gtagReportConversion } from "@/lib/gtag";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20vi%20a%20oferta%20do%20Box%20Incolor%2012x%20R$89%20e%20gostaria%20de%20garantir!";

const PromoBanner = () => {
  return (
    <section className="relative h-screen flex items-end justify-center overflow-hidden bg-background">
      <img
        src={bannerBg}
        alt="Oferta Box de vidro incolor 8mm temperado - 12x de R$89 instalado"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="relative z-10 mb-24 md:mb-32">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            gtagReportConversion(WHATSAPP_URL);
          }}
          className="inline-block bg-[#25D366] text-white px-10 py-4 rounded-md text-sm font-semibold tracking-wide uppercase hover:bg-[#1ebe5a] transition-colors active:scale-[0.97] shadow-lg"
        >
          Garantir Oferta via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;
