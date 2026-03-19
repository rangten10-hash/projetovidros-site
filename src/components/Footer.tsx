import { Link } from "react-router-dom";
import { Phone, MapPin, Instagram, Youtube } from "lucide-react";
import { gtagReportConversion } from "@/lib/gtag";

const WHATSAPP_URL = "https://wa.me/5511915485945?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20box%20de%20segurança.";

const Footer = () => {
  return (
    <footer className="bg-petrol border-t border-copper/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="mb-4">
              <h3 className="text-primary-foreground font-display text-xl font-semibold">Projeto Vidros</h3>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Desde 1991, pioneiros em segurança para vidros. Tecnologia antiestilhaço e vidros laminados de alta resistência.
            </p>
          </div>

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
                <Link key={item.path} to={item.path} className="text-primary-foreground/50 hover:text-copper-light transition-colors text-sm">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-copper font-semibold text-sm tracking-widest uppercase mb-4">Contato</h4>
            <div className="space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); gtagReportConversion(WHATSAPP_URL); }}
                className="group inline-flex flex-col rounded-lg border border-copper/20 bg-primary/10 px-4 py-3 transition-colors hover:border-copper/40 hover:bg-primary/20"
              >
                <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-copper">
                  <Phone className="h-4 w-4" />
                  WhatsApp e orçamento
                </span>
                <span className="mt-1 text-2xl font-semibold text-primary-foreground transition-colors group-hover:text-copper-light">
                  (11) 91548-5945
                </span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/50 text-sm">
                <MapPin className="w-4 h-4 text-copper mt-0.5" />
                São Paulo - SP
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-copper/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-copper/20 text-primary-foreground/60 transition-colors hover:border-copper hover:text-copper" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://www.youtube.com/@ProjetoVidrosVidra%C3%A7aria" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-copper/20 text-primary-foreground/60 transition-colors hover:border-copper hover:text-copper" aria-label="YouTube">
              <Youtube className="h-6 w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-copper/20 text-primary-foreground/60 transition-colors hover:border-copper hover:text-copper" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
          <p className="text-primary-foreground/30 text-xs">
            © {new Date().getFullYear()} Projeto Vidros. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/30 text-xs pr-16">
            Desenvolvido por <a href="https://dizai.app.br" target="_blank" rel="noopener noreferrer" className="text-copper/60 hover:text-copper transition-colors">DIZAI</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
