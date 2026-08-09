import { Link } from "react-router-dom";
import heroDesktop from "@/assets/hero-box-seguro-desktop.webp";
import heroMobile from "@/assets/hero-box-seguro-mobile.webp";

const ALT =
  "Comparativo: box de banheiro perfeito à esquerda e box com vidro trincado que não se solta graças à película de segurança Box + Seguro";

const Hero = () => {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#1a1a1a]">
      {/* Imagem desktop (widescreen) */}
      <img
        src={heroDesktop}
        alt={ALT}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-center z-[1]"
      />
      {/* Imagem mobile (vertical) */}
      <img
        src={heroMobile}
        alt={ALT}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="block md:hidden absolute inset-0 w-full h-full object-contain object-top z-[1]"
      />

      {/* CTA desktop */}
      <div className="hidden md:flex absolute inset-x-0 bottom-[18%] z-10 justify-center px-6">
        <Link
          to="/box-seguro"
          className="inline-block bg-[#25D366] hover:bg-[#1ebe5a] text-white px-10 py-4 rounded-md text-base font-bold uppercase tracking-wide shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-colors"
        >
          Conhecer Linha Box + Seguro
        </Link>
      </div>

      {/* CTA mobile (logo abaixo do escudo central) */}
      <div className="md:hidden absolute inset-x-0 top-[58%] z-10 flex justify-center px-6">
        <Link
          to="/box-seguro"
          className="inline-block bg-[#25D366] hover:bg-[#1ebe5a] text-white px-4 py-2.5 rounded-md text-[11px] font-bold uppercase tracking-wide shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-colors"
        >
          Conhecer Linha Box + Seguro
        </Link>
      </div>
    </section>
  );
};

export default Hero;
