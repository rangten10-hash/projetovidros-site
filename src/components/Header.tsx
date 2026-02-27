import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-box-seguro.png";

const navItems = [
  { label: "Box de Banheiro", path: "/box-de-banheiro" },
  { label: "Portas de Vidro", path: "/portas-de-vidro" },
  { label: "Espelhos", path: "/espelhos" },
  { label: "Espelhos LED", path: "/espelhos-led" },
  { label: "Projetos", path: "/projetos" },
  { label: "Simulador", path: "/simulador" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-petrol/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Box + Seguro" className="h-14 w-14 rounded-full" />
          <span className="font-display text-xl text-primary-foreground hidden sm:block">
            Box + Seguro
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-primary-foreground/80 hover:text-copper-light transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-copper-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            Orçamento
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground p-2"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-petrol border-t border-petrol-light/20">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/80 hover:text-copper-light transition-colors py-2 text-sm font-medium tracking-wide uppercase"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-semibold w-fit mt-2"
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
