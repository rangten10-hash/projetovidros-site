import GalleryPageLayout from "@/components/GalleryPageLayout";
import { Phone } from "lucide-react";
import { useSeo } from "@/lib/seo";

const WHATSAPP_URL = "https://wa.me/5511915485945?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20espelho%20LED.";

const EspelhosLed = () => {
  useSeo({
    title: "Espelhos com LED em São Paulo | Projeto Vidros",
    description:
      "Espelhos com LED sob medida em SP: iluminação frontal ou retroiluminada, acionamento touch e baixo consumo. Ideal para banheiro e camarim.",
    path: "/espelhos-led",
  });
  return (
  <GalleryPageLayout
    title="Espelhos com LED em São Paulo: Tecnologia e Sofisticação"
    subtitle="A Iluminação Perfeita para seu Banheiro ou Camarim"
    comingSoon
  >
    <div className="space-y-6 text-muted-foreground leading-relaxed">
      <p>
        O Espelho com LED é a tendência número um em projetos de interiores de alto padrão. Combinando a clareza do cristal com a tecnologia de iluminação embutida, ele oferece a luz perfeita para maquiagem, barba e cuidados diários, sem sombras indesejadas.
      </p>
      <ul className="space-y-3 list-none">
        <li><strong className="text-foreground">Iluminação Frontal ou Retroiluminada:</strong> Escolha o efeito que mais combina com seu estilo.</li>
        <li><strong className="text-foreground">Acionamento Touch ou Sensor:</strong> Praticidade e modernidade ao toque dos dedos.</li>
        <li><strong className="text-foreground">Baixo Consumo:</strong> Fitas de LED de alta durabilidade e economia de energia.</li>
      </ul>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1ebe5a] transition-colors shadow-lg"
      >
        <Phone className="w-4 h-4" />
        Transforme seu banheiro com um espelho LED exclusivo. Fale conosco!
      </a>
    </div>
  </GalleryPageLayout>
  );
};

export default EspelhosLed;
