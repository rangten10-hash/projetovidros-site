import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-box-seguro.png";

const Footer = () => {
  return (
    <footer className="bg-petrol border-t border-copper/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Box + Seguro" className="w-12 h-12 rounded-full" />
              <span className="font-display text-xl text-primary-foreground">Box + Seguro</span>
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
              <a href="tel:+5500000000000" className="flex items-center gap-3 text-primary-foreground/50 hover:text-copper-light text-sm transition-colors">
                <Phone className="w-4 h-4 text-copper" />
                (00) 0000-0000
              </a>
              <a href="mailto:contato@boxseguro.com.br" className="flex items-center gap-3 text-primary-foreground/50 hover:text-copper-light text-sm transition-colors">
                <Mail className="w-4 h-4 text-copper" />
                contato@boxseguro.com.br
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/50 text-sm">
                <MapPin className="w-4 h-4 text-copper mt-0.5" />
                Sua Cidade - Estado
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-copper/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/30 text-xs">
            © {new Date().getFullYear()} Box + Seguro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
