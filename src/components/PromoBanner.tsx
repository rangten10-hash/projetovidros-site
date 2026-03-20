import bannerBg from "@/assets/banner-box-incolor.png";
import { gtagReportConversion } from "@/lib/gtag";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20vi%20a%20oferta%20do%20Box%20Incolor%2012x%20R$89%20e%20gostaria%20de%20garantir!";

const PromoBanner = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src={bannerBg}
        alt="Box de vidro incolor 8mm temperado instalado em banheiro"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <p className="text-accent text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-4">
          🚿 Oferta Especial
        </p>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 leading-tight">
          Box de Vidro Incolor
        </h2>
        <p className="text-primary-foreground/80 text-lg md:text-2xl font-light mb-2">
          Apenas{" "}
          <span className="text-accent font-bold text-2xl md:text-4xl">
            12x de R$ 89,00
          </span>{" "}
          já instalado!
        </p>
        <p className="text-primary-foreground/60 text-sm md:text-base mb-10">
          Vidro temperado 8mm com alumínio fosco (medidas até 0,80m × 1,85m)
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            gtagReportConversion(WHATSAPP_URL);
          }}
          className="inline-block bg-accent text-accent-foreground px-10 py-4 rounded-md text-sm font-semibold tracking-wide uppercase hover:bg-copper-light transition-colors active:scale-[0.97]"
        >
          Garantir Oferta via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;
