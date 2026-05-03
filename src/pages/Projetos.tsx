import GalleryPageLayout from "@/components/GalleryPageLayout";
import projeto1 from "@/assets/projeto-1.webp";
import projeto2 from "@/assets/projeto-2.webp";
import projeto3 from "@/assets/projeto-3.webp";
import projeto4 from "@/assets/projeto-4.webp";
import projeto5 from "@/assets/projeto-5.webp";
import projeto6 from "@/assets/projeto-6.webp";
import projeto7 from "@/assets/projeto-7.webp";
import projeto8 from "@/assets/projeto-8.webp";
import { Phone } from "lucide-react";

const projetoImages = [projeto1, projeto2, projeto3, projeto4, projeto5, projeto6, projeto7, projeto8];

const WHATSAPP_URL = "https://wa.me/5511915485945?text=Olá,%20vi%20o%20portfólio%20e%20gostaria%20de%20um%20orçamento.";

const Projetos = () => (
  <GalleryPageLayout
    title="Nossos Projetos: Referência em Vidraçaria em São Paulo"
    subtitle="Portfólio de Instalações Residenciais e Comerciais"
    images={projetoImages}
  >
    <div className="space-y-6 text-muted-foreground leading-relaxed">
      <p>
        A <strong className="text-foreground">Projeto Vidros</strong> se orgulha de cada instalação realizada. Atendemos desde pequenos reparos até grandes obras em condomínios de alto padrão em Alphaville, Barueri e em toda a capital de SP. Confira alguns de nossos trabalhos recentes em box de banheiro, fechamento de sacadas e espelhos decorativos.
      </p>
      <ul className="space-y-3 list-none">
        <li><strong className="text-foreground">Qualidade Garantida:</strong> Materiais de primeira linha e acabamento detalhista.</li>
        <li><strong className="text-foreground">Instalação Limpa:</strong> Respeito à sua casa e prazos rigorosos.</li>
        <li><strong className="text-foreground">Garantia Técnica:</strong> Suporte pós-venda especializado.</li>
      </ul>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1ebe5a] transition-colors shadow-lg"
      >
        <Phone className="w-4 h-4" />
        Inspire-se em nossos projetos e peça o seu orçamento personalizado!
      </a>
    </div>
  </GalleryPageLayout>
);

export default Projetos;
