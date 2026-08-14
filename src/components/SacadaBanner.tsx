import sacadaDesktop from "@/assets/sacada-hero-desktop.webp";
import sacadaMobile from "@/assets/sacada-hero-mobile.webp";

const ALT =
  "Sacada envidraçada com cortina de vidro e vista panorâmica da cidade de São Paulo";

const SacadaBanner = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#1a1a1a] lg:pt-24">
      <picture>
        <source media="(min-width: 768px)" srcSet={sacadaDesktop} type="image/webp" />
        <source media="(max-width: 767px)" srcSet={sacadaMobile} type="image/webp" />
        <img
          src={sacadaMobile}
          alt={ALT}
          width={900}
          height={1350}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center z-[1]"
        />

      </picture>

      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 z-[2] bg-black/40" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-white leading-tight max-w-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          Transforme sua Sacada em um Espaço Único e Protegido
        </h2>
        <p className="mt-3 md:mt-5 text-white/90 text-sm sm:text-base md:text-xl max-w-2xl leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          Envidraçamento de Sacadas e Cortina de Vidro sob medida com máxima vedação e isolamento.
        </p>
        <span className="mt-6 md:mt-8 inline-block bg-[#25D366] text-white px-6 md:px-10 py-3 md:py-4 rounded-sm text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
          Conhecer Envidraçamento de Sacadas
        </span>
      </div>
    </section>
  );
};

export default SacadaBanner;
