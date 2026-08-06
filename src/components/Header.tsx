import { useState } from "react";
import { Link } from "react-router-dom";
import SmartLink from "./SmartLink";
import { Menu, X, Phone, ChevronDown, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-projectovidros.webp";
import logoBoxSeguro from "@/assets/logo-box-seguro.webp";
import { gtagReportConversion } from "@/lib/gtag";

const WHATSAPP_URL = "https://wa.me/5511915485945?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20box%20de%20segurança.";

const navItemsLeft = [
  { label: "Box de Banheiro", path: "/box-de-banheiro" },
  
  { label: "Portas de Vidro", path: "/portas-de-vidro" },
  { label: "Envidraçamento de Sacada", path: "/envidracamento-de-sacada" },
];

const navItemsRight = [
  { label: "Projetos", path: "/projetos" },
  { label: "Blog", path: "/blog" },
];

const espelhosItems = [
  { label: "Espelhos Decorativos", path: "/espelhos" },
  { label: "Espelhos com LED", path: "/espelhos-led" },
];

const linkClass =
  "text-foreground hover:text-accent transition-colors text-[13px] xl:text-sm font-medium tracking-wide uppercase";

const handleWhatsAppClick = (e: React.MouseEvent) => {
  e.preventDefault();
  gtagReportConversion(WHATSAPP_URL);
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mirrorsOpen, setMirrorsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 flex items-center justify-between gap-2 sm:gap-3 h-24">
        <Link to="/" className="flex items-center py-1 shrink-0" aria-label="Projeto Vidros - Início">
          <img src={logo} alt="Projeto Vidros" width={224} height={112} className="h-16 sm:h-20 xl:h-24 w-auto" decoding="async" />
        </Link>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {navItemsLeft.map((item) => (
            <SmartLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </SmartLink>
          ))}
          <SmartLink to="/box-seguro" className="hover:opacity-80 transition-opacity shrink-0" aria-label="Box +Seguro">
            <img src={logoBoxSeguro} alt="Box +Seguro" width={224} height={112} className="h-20 xl:h-24 w-auto" decoding="async" loading="lazy" />
          </SmartLink>

          {/* Dropdown Espelhos */}
          <div
            className="relative"
            onMouseEnter={() => setMirrorsOpen(true)}
            onMouseLeave={() => setMirrorsOpen(false)}
          >
            <button
              type="button"
              className={`${linkClass} inline-flex items-center gap-1`}
              aria-expanded={mirrorsOpen}
              aria-haspopup="true"
              onClick={() => setMirrorsOpen((v) => !v)}
            >
              Espelhos
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {mirrorsOpen && (
              <div className="absolute left-0 top-full pt-3">
                <div className="min-w-[220px] rounded-md border border-border bg-white shadow-lg py-2">
                  {espelhosItems.map((item) => (
                    <SmartLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setMirrorsOpen(false)}
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors"
                    >
                      {item.label}
                    </SmartLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navItemsRight.map((item) => (
            <SmartLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </SmartLink>
          ))}
        </nav>

        {/* Botão WhatsApp mobile centralizado entre logo e menu */}
        <div className="flex lg:hidden flex-1 justify-center min-w-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-2.5 sm:px-3 py-2 text-white shadow-md transition-all hover:bg-[#1ebe5a] hover:shadow-lg active:scale-95"
            aria-label="Falar pelo WhatsApp com a Projeto Vidros"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" strokeWidth={2.5} />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em]">WhatsApp e Orçamento</span>
              <span className="text-sm sm:text-base font-bold whitespace-nowrap">(11) 91548-5945</span>
            </div>
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="hidden lg:inline-flex flex-col items-start rounded-md bg-[#25D366] px-4 py-2.5 text-white shadow-sm transition-colors hover:bg-[#1ebe5a]"
          >
            <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em]">
              <Phone className="h-3.5 w-3.5" />
              WhatsApp e orçamento
            </span>
            <span className="text-sm xl:text-base font-bold leading-tight">(11) 91548-5945</span>
          </a>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground p-2 shrink-0" aria-label="Menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border max-h-[calc(100vh-6rem)] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItemsLeft.map((item) => (
              <SmartLink key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="text-foreground hover:text-accent transition-colors py-2 text-sm font-medium tracking-wide uppercase">
                {item.label}
              </SmartLink>
            ))}
            <SmartLink to="/box-seguro" onClick={() => setIsOpen(false)} className="py-2">
              <img src={logoBoxSeguro} alt="Box +Seguro" className="h-10 w-auto" loading="lazy" decoding="async" />
            </SmartLink>

            <button
              type="button"
              onClick={() => setMirrorsOpen((v) => !v)}
              className="flex items-center justify-between text-foreground hover:text-accent transition-colors py-2 text-sm font-medium tracking-wide uppercase"
              aria-expanded={mirrorsOpen}
            >
              Espelhos
              <ChevronDown className={`w-4 h-4 transition-transform ${mirrorsOpen ? "rotate-180" : ""}`} />
            </button>
            {mirrorsOpen && (
              <div className="flex flex-col gap-2 pl-4 border-l border-border">
                {espelhosItems.map((item) => (
                  <SmartLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-accent transition-colors py-1.5 text-sm"
                  >
                    {item.label}
                  </SmartLink>
                ))}
              </div>
            )}

            {navItemsRight.map((item) => (
              <SmartLink key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="text-foreground hover:text-accent transition-colors py-2 text-sm font-medium tracking-wide uppercase">
                {item.label}
              </SmartLink>
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
