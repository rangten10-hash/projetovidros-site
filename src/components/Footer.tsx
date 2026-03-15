import { Link } from "react-router-dom";
import { Phone, MapPin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-petrol border-t border-copper/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <h3 className="text-primary-foreground font-display text-xl font-semibold">Projeto Vidros</h3>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Desde 1991, pioneiros em segurança para vidros. Tecnologia antiestilhaço e vidros laminados de alta resistência.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-copper font-semibold text-sm tracking-widest uppercase mb-4">Produtos</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Box de Banheiro", path: "/box-de-banheiro" },
                { label: "Portas de Vidro", path: "/portas-de-vidro" },
                { label: "Espelhos", path: "/espelhos" },
                { label: "Espelhos LED", path: "/espelhos-led" },
                { label: "Projetos", path: "/projetos" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-primary-foreground/50 hover:text-copper-light transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-copper font-semibold text-sm tracking-widest uppercase mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="https://wa.me/5511967652289?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20box%20de%20segurança." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/50 hover:text-copper-light text-sm transition-colors">
                <Phone className="w-4 h-4 text-copper" />
                (11) 96765-2289
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/50 text-sm">
                <MapPin className="w-4 h-4 text-copper mt-0.5" />
                São Paulo - SP
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-copper/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-copper transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-copper transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-copper transition-colors" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
          <p className="text-primary-foreground/30 text-xs">
            © {new Date().getFullYear()} Projeto Vidros. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/30 text-xs pr-16">
            Desenvolvido por <a href="https://agenciarangten.com.br" target="_blank" rel="noopener noreferrer" className="text-copper/60 hover:text-copper transition-colors">Agência Rangten</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
