import { MessageCircle } from "lucide-react";
import { gtagReportConversion } from "@/lib/gtag";

const WHATSAPP_URL = "https://wa.me/5511915485945?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20box%20de%20segurança.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        gtagReportConversion(WHATSAPP_URL);
      }}
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 bg-[hsl(142,72%,29%)] hover:bg-[hsl(142,72%,24%)] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[hsl(142,72%,29%)]"
      aria-label="Falar pelo WhatsApp com a Projeto Vidros"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
