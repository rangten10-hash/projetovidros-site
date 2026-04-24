import { gtagReportConversion } from "@/lib/gtag";
import heroBoxSeguro from "@/assets/hero-box-seguro.webp";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá!%20Vi%20o%20Box+%20Seguro%20no%20site%20e%20gostaria%20de%20um%20orçamento.";

const Hero = () => {
  return (
    <section
      className="relative h-full w-full overflow-hidden px-5 md:px-0"
      style={{
        background:
          "linear-gradient(180deg, #d9cfc2 0%, #c8bbab 18%, #a89684 35%, #6b4a3a 60%, #4a1a1a 85%, #3a1010 100%), linear-gradient(90deg, #c8bbab 0%, #a89684 50%, #5a1414 100%)",
        backgroundBlendMode: "normal",
      }}
    >
      {/* Camada de gradiente horizontal complementar (laterais no desktop) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #c8bbab 0%, #a89684 35%, #7a3a2a 70%, #4a1414 100%)",
        }}
        aria-hidden="true"
      />
      <img
        src={heroBoxSeguro}
        alt="Box+ Seguro: a beleza que você quer e a segurança que sua família precisa"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-contain object-center z-[1]"
      />

      {/* CTA — no mobile fica logo acima das bolinhas do carrossel */}
      <div className="absolute inset-x-0 bottom-12 md:bottom-28 z-10 flex justify-center px-4">
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
