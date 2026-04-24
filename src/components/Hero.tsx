import { gtagReportConversion } from "@/lib/gtag";
import heroBoxSeguro from "@/assets/hero-box-seguro.webp";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá!%20Vi%20o%20Box+%20Seguro%20no%20site%20e%20gostaria%20de%20um%20orçamento.";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <img
        src={heroBoxSeguro}
        alt="Box+ Seguro: a beleza que você quer e a segurança que sua família precisa"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-contain md:object-cover object-center"
      />

      {/* CTA centralizado abaixo do logo BOX+ SEGURO da imagem */}
      <div className="absolute inset-x-0 bottom-24 md:bottom-28 z-10 flex justify-center px-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            gtagReportConversion(WHATSAPP_URL);
          }}
          className="animate-pulse-cta bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold uppercase tracking-wide text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-full shadow-xl transition-colors text-center"
        >
          Quer mais proteção em seu box?
        </a>
      </div>
    </section>
  );
};

export default Hero;
