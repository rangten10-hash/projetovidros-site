import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-projectovidros.png";

const navItems = [
  { label: "Box de Banheiro", path: "/box-de-banheiro" },
  { label: "Portas de Vidro", path: "/portas-de-vidro" },
  { label: "Espelhos", path: "/espelhos" },
  { label: "Espelhos LED", path: "/espelhos-led" },
  { label: "Projetos", path: "/projetos" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-24">
        <Link to="/" className="flex items-center py-1">
          <img src={logo} alt="Projecto Vidros" className="h-28 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-foreground/70 hover:text-accent transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5511967652289"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-copper-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            Orçamento
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-foreground/70 hover:text-accent transition-colors py-2 text-sm font-medium tracking-wide uppercase"
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
