import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster=""
      >
        <source
          src="https://videos.pexels.com/video-files/5529612/5529612-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-petrol/70" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 bg-accent/20 border border-copper/40 rounded-full px-5 py-2 mb-8">
          <Shield className="w-4 h-4 text-copper" />
          <span className="text-copper-light text-sm font-medium tracking-wider uppercase">
            Desde 1991 · Pioneiros em Segurança
          </span>
        </div>

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
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-copper/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-copper rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
