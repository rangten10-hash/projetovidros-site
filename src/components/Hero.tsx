import { Link } from "react-router-dom";
import heroDesktop from "@/assets/hero-box-seguro-desktop.webp";
import heroMobile from "@/assets/hero-box-seguro-mobile.webp";
import logoBoxSeguro from "@/assets/logo-box-seguro.webp";

const ALT =
  "Box de banheiro com porta de vidro totalmente trincada, mas inteira e presa no lugar pela película de segurança Box + Seguro";

const Hero = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#1a1a1a]">
      <picture>
        <source media="(min-width: 768px)" srcSet={heroDesktop} type="image/webp" />
        <source media="(max-width: 767px)" srcSet={heroMobile} type="image/webp" />
        <img
          src={heroMobile}
          alt={ALT}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center z-[1]"
        />
      </picture>

      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 z-[2] bg-black/45" />

      {/* Logotipo discreto no canto superior direito */}
      <img
        src={logoBoxSeguro}
        alt="Selo Box + Seguro"
        loading="lazy"
        decoding="async"
        className="absolute top-3 right-3 md:top-6 md:right-8 z-20 w-20 md:w-32 opacity-90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pb-20 md:pb-24">
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-white leading-tight max-w-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          Linha Box + Seguro
        </h2>
        <p className="mt-3 md:mt-5 text-white/90 text-sm sm:text-base md:text-xl max-w-2xl leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
          Mesmo trincado, o vidro não cai: película de segurança que protege sua família.
        </p>
        <Link
          to="/box-seguro"
          className="mt-6 md:mt-8 inline-block bg-[#25D366] hover:bg-[#1ebe5a] text-white px-6 md:px-10 py-3 md:py-4 rounded-sm text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-colors"
        >
          Conhecer Linha Premium
        </Link>
      </div>
    </section>
  );
};

export default Hero;
