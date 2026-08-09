import { Link } from "react-router-dom";
import { ShieldCheck, Link2, BadgeCheck } from "lucide-react";
import heroDesktop from "@/assets/hero-box-seguro-desktop.webp";
import heroMobile from "@/assets/hero-box-seguro-mobile.webp";

const ALT =
  "Comparativo: box de banheiro perfeito à esquerda e box com vidro trincado que não se solta graças à película de segurança Box + Seguro";

const features = [
  { Icon: ShieldCheck, label: "Película de Segurança PS4 - Máxima Proteção" },
  { Icon: Link2, label: "Vidro Quebrado, Nada Se Solta" },
  { Icon: BadgeCheck, label: "Tecnologia e Qualidade Comprovada" },
];

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

      {/* Títulos laterais (desktop) */}
      <div className="hidden md:grid absolute inset-x-0 top-[14%] z-10 grid-cols-2 gap-3 px-10">
        <h2 className="font-display uppercase font-bold text-white text-center leading-tight text-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          A beleza que você quer
        </h2>
        <h2 className="font-display uppercase font-bold text-white text-center leading-tight text-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          A segurança que sua família precisa
        </h2>
      </div>

      {/* Título mobile centralizado no topo */}
      <div className="md:hidden absolute inset-x-0 top-3 z-10 flex justify-center px-4">
        <h2 className="font-display uppercase font-bold text-white text-center leading-tight text-[13px] bg-black/45 rounded-sm px-3 py-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          A segurança que sua família precisa
        </h2>
      </div>

      {/* CTA — mobile: acima do rodapé de diferenciais; desktop: centralizado */}
      <div className="absolute inset-x-0 bottom-[6.5rem] md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-10 flex justify-center px-6">
        <Link
          to="/box-seguro"
          className="inline-block bg-[#25D366] hover:bg-[#1ebe5a] text-white px-4 md:px-10 py-2.5 md:py-4 rounded-sm text-[11px] sm:text-xs md:text-base font-bold uppercase tracking-wide shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-colors"
        >
          Conhecer Linha Box + Seguro
        </Link>
      </div>


      {/* Rodapé com diferenciais (acima dos dots do carrossel no mobile) */}
      <div className="absolute inset-x-0 bottom-14 md:bottom-0 z-10 bg-black/60 backdrop-blur-[2px] px-3 py-2 md:py-3 md:pr-20">
        <ul className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-5 md:gap-10">
          {features.map(({ Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-white text-[10px] sm:text-xs md:text-sm">
              <Icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#25D366] shrink-0" aria-hidden="true" />
              <span className="leading-tight">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

  );
};

export default Hero;
