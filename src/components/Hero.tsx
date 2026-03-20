import { Link } from "react-router-dom";
import { gtagReportConversion } from "@/lib/gtag";

const WHATSAPP_URL = "https://wa.me/5511915485945?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20box%20de%20segurança.";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-petrol/25" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
          A segurança da sua família{" "}
          <span className="text-gradient-copper">não é opcional.</span>
        </h1>
        <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Box com tecnologia antiestilhaço e vidros laminados de alta resistência.
          Mais de 30 anos de experiência protegendo lares.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { e.preventDefault(); gtagReportConversion(WHATSAPP_URL); }}
            className="bg-accent text-accent-foreground px-8 py-4 rounded-md text-sm font-semibold tracking-wide uppercase hover:bg-copper-light transition-colors"
          >
            Solicitar Orçamento
          </a>
          <Link
            to="/box-de-banheiro"
            className="border border-copper/40 text-primary-foreground px-8 py-4 rounded-md text-sm font-semibold tracking-wide uppercase hover:bg-primary-foreground/5 transition-colors"
          >
            Conheça Nossos Produtos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
