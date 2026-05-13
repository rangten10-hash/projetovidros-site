import GalleryPageLayout from "@/components/GalleryPageLayout";
import espelho1 from "@/assets/espelho-1.webp";
import espelho2 from "@/assets/espelho-2.webp";
import espelho3 from "@/assets/espelho-3.webp";
import espelho4 from "@/assets/espelho-4.webp";
import espelho5 from "@/assets/espelho-5.webp";
import espelho6 from "@/assets/espelho-6.webp";
import espelho7 from "@/assets/espelho-7.webp";
import espelho8 from "@/assets/espelho-8.webp";
import { Phone } from "lucide-react";
import { useSeo } from "@/lib/seo";

const espelhoImages = [espelho1, espelho2, espelho3, espelho4, espelho5, espelho6, espelho7, espelho8];

const WHATSAPP_URL = "https://wa.me/5511915485945?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20espelhos%20sob%20medida.";

const Espelhos = () => {
  useSeo({
    title: "Espelhos Decorativos Sob Medida em São Paulo | Projeto Vidros",
    description:
      "Espelhos decorativos sob medida em SP: bisotê, lapidados, para banheiro e parede inteira. Cristais Guardian e Cebrace com instalação especializada.",
    path: "/espelhos",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Espelhos Decorativos Sob Medida",
      description: "Espelhos sob medida com cristais Guardian e Cebrace, acabamento lapidado ou bisotê.",
      brand: { "@type": "Brand", name: "Projeto Vidros" },
      category: "Espelhos",
    },
  });
  return (
  <GalleryPageLayout
    title="Espelhos Decorativos Sob Medida em São Paulo"
    subtitle="Transforme seu Ambiente com Amplitude e Elegância"
    images={espelhoImages}
  >
    <div className="space-y-6 text-muted-foreground leading-relaxed">
      <p>
        Os espelhos são peças-chave na decoração moderna. Além de sua funcionalidade, eles têm o poder de ampliar espaços pequenos e refletir a iluminação natural, trazendo mais vida para sua casa ou escritório. Na <strong className="text-foreground">Projeto Vidros</strong>, fabricamos espelhos sob medida com acabamento impecável em lapidação ou bisotê.
      </p>
      <ul className="space-y-3 list-none">
        <li><strong className="text-foreground">Espelhos para Banheiro:</strong> Modelos resistentes à umidade com instalação segura.</li>
        <li><strong className="text-foreground">Espelhos de Parede Inteira:</strong> Ideal para salas de jantar, quartos e academias.</li>
        <li><strong className="text-foreground">Acabamentos Exclusivos:</strong> Lapidação reta, bisotê (bordas chanfradas) e colagem com silicone neutro que não mancha a prata do espelho.</li>
      </ul>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1ebe5a] transition-colors shadow-lg"
      >
        <Phone className="w-4 h-4" />
        Peça seu orçamento de espelho sob medida agora!
      </a>
    </div>
  </GalleryPageLayout>
  );
};

export default Espelhos;
