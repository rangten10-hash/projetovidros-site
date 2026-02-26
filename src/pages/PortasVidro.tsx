import ProductPageLayout from "@/components/ProductPageLayout";
import portaVision from "@/assets/porta-vision.jpg";
import portaNobre from "@/assets/porta-nobre.jpg";
import portaCerto from "@/assets/porta-certo.jpg";
import portaFlex from "@/assets/porta-flex.jpg";
import portaAbrir from "@/assets/porta-abrir.jpg";
import portaCorrer from "@/assets/porta-correr.jpg";
import portaVersatik from "@/assets/porta-versatik.jpg";

const products = [
  { name: "Porta Vision", image: portaVision, description: "Design moderno com vidro temperado e perfil em alumínio preto. Visão ampla e elegância." },
  { name: "Porta Nobre", image: portaNobre, description: "Acabamento premium com perfil em bronze escovado. Sofisticação para ambientes nobres." },
  { name: "Porta Certo", image: portaCerto, description: "Funcionalidade e design limpo. A porta certa para ambientes corporativos e residenciais." },
  { name: "Porta Flex", image: portaFlex, description: "Sistema flexível de abertura. Ideal para integrar ambientes internos e externos." },
  { name: "Porta de Abrir", image: portaAbrir, description: "Modelo clássico de abertura com dobradiças. Robustez e praticidade." },
  { name: "Porta de Correr", image: portaCorrer, description: "Deslize suave sobre trilhos. Economia de espaço com estilo." },
  { name: "Porta Versatik", image: portaVersatik, description: "Sistema multipainel versátil. Abra totalmente ou parcialmente conforme sua necessidade." },
];

const PortasVidro = () => (
  <ProductPageLayout
    title="Portas de Vidro"
    subtitle="Portas de vidro temperado e laminado com design moderno e alta durabilidade."
    products={products}
  />
);

export default PortasVidro;
