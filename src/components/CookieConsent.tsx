import { useState, useEffect } from "react";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-4xl bg-petrol border border-copper/20 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
        <p className="text-primary-foreground/70 text-sm text-center sm:text-left">
          Este site utiliza cookies para melhorar sua experiência de navegação.
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleAccept}
            className="bg-accent text-accent-foreground px-5 py-2 rounded-md text-sm font-semibold hover:bg-copper-light transition-colors"
          >
            OK, entendi
          </button>
          <button
            onClick={handleAccept}
            className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors p-1"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
