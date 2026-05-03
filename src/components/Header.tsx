import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-projectovidros.webp";
import logoBoxSeguro from "@/assets/logo-box-seguro.webp";
import { gtagReportConversion } from "@/lib/gtag";

const WHATSAPP_URL = "https://wa.me/5511915485945?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20box%20de%20segurança.";

const navItemsLeft = [
  { label: "Box de Banheiro", path: "/box-de-banheiro" },
  { label: "Portas de Vidro", path: "/portas-de-vidro" },
];

const navItemsRight = [
  { label: "Espelhos", path: "/espelhos" },
  { label: "Espelhos LED", path: "/espelhos-led" },
  { label: "Projetos", path: "/projetos" },
  { label: "Blog", path: "/blog" },
];

const handleWhatsAppClick = (e: React.MouseEvent) => {
  e.preventDefault();
  gtagReportConversion(WHATSAPP_URL);
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-24">
        <Link to="/" className="flex items-center py-1" aria-label="Projeto Vidros - Início">
          <img src={logo} alt="Projeto Vidros" width={224} height={112} className="h-28 w-auto" fetchPriority="high" decoding="async" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItemsLeft.map((item) => (
            <Link key={item.path} to={item.path} className="text-foreground hover:text-accent transition-colors text-sm font-medium tracking-wide uppercase">
              {item.label}
            </Link>
          ))}
          <Link to="/box-seguro" className="mx-2 hover:opacity-80 transition-opacity" aria-label="Box +Seguro">
            <img src={logoBoxSeguro} alt="Box +Seguro" width={224} height={112} className="h-28 w-auto" decoding="async" loading="lazy" />
          </Link>
          {navItemsRight.map((item) => (
            <Link key={item.path} to={item.path} className="text-foreground hover:text-accent transition-colors text-sm font-medium tracking-wide uppercase">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="hidden sm:inline-flex flex-col items-start rounded-md bg-[#25D366] px-5 py-3 text-white shadow-sm transition-colors hover:bg-[#1ebe5a]"
          >
            <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]">
              <Phone className="h-4 w-4" />
              WhatsApp e orçamento
            </span>
            <span className="text-base font-bold leading-tight">(11) 91548-5945</span>
          </a>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground p-2" aria-label="Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItemsLeft.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="text-foreground hover:text-accent transition-colors py-2 text-sm font-medium tracking-wide uppercase">
                {item.label}
              </Link>
            ))}
            <Link to="/box-seguro" onClick={() => setIsOpen(false)} className="py-2">
              <img src={logoBoxSeguro} alt="Box +Seguro" className="h-10 w-auto" />
            </Link>
            {navItemsRight.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="text-foreground hover:text-accent transition-colors py-2 text-sm font-medium tracking-wide uppercase">
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-md text-sm font-semibold w-fit mt-2 hover:bg-[#1ebe5a] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
