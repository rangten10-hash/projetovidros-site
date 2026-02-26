import ProductPageLayout from "@/components/ProductPageLayout";
import boxSeguro from "@/assets/box-seguro.jpg";
import boxCerto from "@/assets/box-certo.jpg";
import boxFlex from "@/assets/box-flex.jpg";
import boxElegance from "@/assets/box-elegance.jpg";
import boxReto from "@/assets/box-reto.jpg";
import boxNobre from "@/assets/box-nobre.jpg";
import boxDuo from "@/assets/box-duo.jpg";
import boxTransfer from "@/assets/box-transfer.jpg";
import boxTradicional from "@/assets/box-tradicional.jpg";

const products = [
  { name: "Box + Seguro", image: boxSeguro, description: "Nosso modelo premium com tecnologia antiestilhaço e vidros laminados de alta resistência. Máxima segurança para sua família." },
  { name: "Box Certo", image: boxCerto, description: "Design clean com acabamento impecável. A escolha certa para quem busca elegância e funcionalidade." },
  { name: "Box Flex", image: boxFlex, description: "Sistema flexível que se adapta a qualquer espaço. Ideal para banheiros compactos." },
  { name: "Box Elegance", image: boxElegance, description: "Sofisticação em cada detalhe. Ferragens premium e acabamento dourado." },
  { name: "Box Reto", image: boxReto, description: "Linhas retas e minimalistas. Design contemporâneo para banheiros modernos." },
  { name: "Box Nobre", image: boxNobre, description: "Acabamento nobre com ferragens pretas. O toque de luxo que seu banheiro merece." },
  { name: "Duo Safe", image: boxDuo, description: "Sistema duplo com portas amplas. Conforto e praticidade para banheiros espaçosos." },
  { name: "Transfer", image: boxTransfer, description: "Modelo com acessibilidade. Barras de apoio integradas ao design." },
  { name: "Box Tradicional", image: boxTradicional, description: "O clássico que nunca sai de moda. Qualidade comprovada por décadas." },
];

const BoxBanheiro = () => (
  <ProductPageLayout
    title="Box de Banheiro"
    subtitle="Conheça nossa linha completa de box para banheiro com tecnologia antiestilhaço e design sofisticado."
    products={products}
  />
);

export default BoxBanheiro;
