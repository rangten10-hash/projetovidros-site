import ProductPageLayout from "@/components/ProductPageLayout";
import boxCerto from "@/assets/box-certo.webp";
import boxFlex from "@/assets/box-flex.webp";
import boxElegance from "@/assets/box-elegance.webp";
import boxReto from "@/assets/box-reto.webp";
import boxNobre from "@/assets/box-nobre.webp";
import boxDuo from "@/assets/box-duo.webp";
import boxTransfer from "@/assets/box-transfer-3-folhas/card-cover.png";
import boxTradicional from "@/assets/box-tradicional.webp";
import boxPisoTetoReto from "@/assets/box-piso-teto/card-cover.png";
import boxTradicionalKitReto from "@/assets/box-tradicional-kit-reto/card-cover.png";
import boxCantoKitReto from "@/assets/box-canto-kit-reto/card-cover.png";
import boxAbrirPequenoVao from "@/assets/box-abrir-pequeno-vao/card-cover.png";
import { Phone } from "lucide-react";
import { useSeo } from "@/lib/seo";

const WHATSAPP_URL = "https://wa.me/5511915485945?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20box%20de%20banheiro.";

const placeholderImg = "/placeholder.svg";

const products = [
  {
    name: "Box Flex",
    image: boxFlex,
    description: "Ganho de espaço em banheiros pequenos com abertura articulada (até 90% de vão livre).",
    to: "/box-flex",
  },
  {
    name: "Box Piso Teto Kit Reto",
    image: boxPisoTetoReto,
    imageContain: true,
    description: "Luxo, efeito sauna e perfis minimalistas quadrados do piso ao teto.",
    to: "/box-piso-teto-kit-reto",
    fullDescription: `O Box Piso Teto Kit Reto leva o banho a um novo patamar de sofisticação. Com perfis minimalistas de linhas quadradas e instalação do piso ao teto, cria o desejado efeito sauna — reduzindo respingos, mantendo o calor e elevando o padrão estético do banheiro.

Ideal para suítes de alto padrão que buscam um visual clean, contemporâneo e com acabamento premium.

Em breve mais detalhes técnicos e fotos deste modelo.`,
  },
  {
    name: "Box Tradicional Kit Reto",
    image: boxTradicionalKitReto,
    imageContain: true,
    description: "O clássico de correr atualizado com ferragens quadradas modernas.",
    to: "/box-tradicional-kit-reto",
  },
  {
    name: "Box Canto Kit Reto",
    image: boxCantoKitReto,
    imageContain: true,
    description: "Abertura em L para cantos, com kit reto minimalista.",
    to: "/box-de-canto-kit-reto",
  },
  {
    name: "Box Elegance",
    image: boxElegance,
    description: "Roldanas aparentes de alto padrão em metais nobres.",
    fullDescription: `Transforme o seu box de banheiro em um espaço aconchegante e sofisticado com o Box Elegance. A opção do Tubo Oblongo deixa o ambiente moderno e foi criado especialmente para manter uma padronização de todas linhas com roldanas aparentes, sendo usado no Elegance, Due e Encanto.

Cada detalhe do Box Elegance foi pensado para combinar com as tendências da decoração contemporânea. As roldanas aparentes deslizam com leveza sobre o trilho deixando o box de banheiro muito mais Elegante.

As roldanas aparentes do Box Elegance são produzidas com metais nobres que passam por um processo especial de tratamento, garantindo alta durabilidade.`,
  },
  {
    name: "Box Nobre",
    image: boxNobre,
    description: "Sistema robusto com perfil estrutural diferenciado e amortecimento.",
    fullDescription: `O Box Nobre foi projetado e fabricado para aumentar a segurança no box de banheiro, com amortecedor ao abrir e fechar a porta.

Linha NOBRE, perfeita para fazer fechamentos de área de banho em todos os formatos: Box Frontal (F1), Box em L (C1 / canto), Box Frontal (F2), Box com 2 portas centralizadas (F3), também usado em fechamentos de áreas externas e como porta de correr para dividir ambientes.

Todos os perfis são fabricados em alumínio com ligas especiais reforçadas, com paredes mais robustas que os box tradicionais — entregando resistência e acabamento premium.`,
  },
  {
    name: "Box Transfer 3 Folhas",
    image: boxTransfer,
    imageContain: true,
    description: "Sistema inteligente: duas folhas correm juntas, liberando até 66% do vão.",
    to: "/box-transfer-3-folhas",
  },
  {
    name: "Box de Abrir para Pequenos Vãos",
    image: boxAbrirPequenoVao,
    imageContain: true,
    description: "1 fixo + 1 porta de giro com abertura para dentro. Ideal para banheiros compactos.",
    to: "/box-de-abrir-pequeno-vao",
  },
  {
    name: "Box Duo Safe",
    image: boxDuo,
    description: "Segurança reforçada com pinças de pressão e película protetora especial.",
    fullDescription: `O Box Duo Safe é um sistema de envidraçamento para banheiros focado em alta segurança, projetado para utilizar tanto vidro temperado quanto laminado, sem a necessidade de furos na peça de vidro.

Sua principal característica é o uso de pinças de pressão e a ausência de vidros fixos, com duas folhas de correr — somando à película protetora especial uma camada extra de segurança.`,
  },
  {
    name: "Box Certo",
    image: boxCerto,
    description: "Abertura total de portas 180° para dentro ou para fora.",
    fullDescription: `Para aprimorar o espaço do seu banheiro desenvolvemos o Box Certo, trazendo praticidade e funcionalidade para o seu dia a dia.

A porta possui abertura de 180°, tanto para dentro como para fora, com três paradas de 90°, otimizando o aproveitamento do ambiente. Possui ainda um sistema especial que faz a porta se fechar sozinha com um simples toque.

O Box Certo pode ser montado em cantos, espaços frontais, sobre banheiras ou como porta bipartida. Totalmente acessível e seguro, perfeito para hotéis e residências. Várias cores de acabamento: Branco, Preto, Fosco e Brilhante.`,
  },
];

const BoxBanheiro = () => {
  useSeo({
    title: "Box de Banheiro em São Paulo | Projeto Vidros",
    description:
      "Box de banheiro sob medida em SP com película anti-estilhaço, vidro temperado e instalação profissional. Conheça nossa linha completa.",
    path: "/box-de-banheiro",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Box de Banheiro Projeto Vidros",
      description:
        "Linha completa de box de banheiro em vidro temperado com película anti-estilhaço.",
      brand: { "@type": "Brand", name: "Projeto Vidros" },
      category: "Box de Banheiro",
    },
  });
  return (
  <ProductPageLayout
    title="Box de Banheiro em São Paulo: Segurança e Elegância Sob Medida"
    subtitle="Conheça nossa linha completa de box para banheiro com tecnologia antiestilhaço e design sofisticado."
    products={products}
  >
    <div className="space-y-8 text-muted-foreground leading-relaxed">
      <p>
        O banheiro é um dos ambientes mais importantes da casa, e a escolha do box ideal faz toda a diferença no conforto e na valorização do seu imóvel. Na <strong className="text-foreground">Projeto Vidros</strong>, somos especialistas em transformar banheiros comuns em espaços modernos e seguros, oferecendo soluções completas desde o projeto até a instalação final.
      </p>

      <div>
        <h2 className="font-display text-2xl text-foreground mb-4">Nosso Diferencial: Box de Vidro com Película Anti-estilhaço</h2>
        <p className="mb-4">
          A segurança da sua família é nossa prioridade número um. Por isso, somos referência em box de vidro com película anti-estilhaço. Diferente do vidro temperado comum, que pode se estilhaçar em pequenos pedaços em caso de quebra, nossa tecnologia garante que os fragmentos fiquem presos à película, evitando acidentes graves.
        </p>
        <ul className="space-y-2 list-none">
          <li><strong className="text-foreground">Proteção Total:</strong> Ideal para casas com crianças, idosos e pets.</li>
          <li><strong className="text-foreground">Durabilidade:</strong> Vidros de alta resistência (8mm e 10mm).</li>
          <li><strong className="text-foreground">Acabamento Premium:</strong> Roldanas aparentes, perfis coloridos e design moderno.</li>
        </ul>
      </div>

      <div>
        <h2 className="font-display text-2xl text-foreground mb-4">Modelos de Box para Todos os Espaços</h2>
        <p className="mb-4">Atendemos todas as necessidades, desde banheiros compactos em apartamentos até suítes de alto padrão:</p>
        <ul className="space-y-2 list-none">
          <li><strong className="text-foreground">Box de Canto (L):</strong> Perfeito para otimizar espaços reduzidos.</li>
          <li><strong className="text-foreground">Box Frontal (Correr):</strong> O clássico que nunca sai de moda, com trilhos deslizantes suaves.</li>
          <li><strong className="text-foreground">Box de Abrir (Giro):</strong> Elegância clássica para vãos maiores.</li>
          <li><strong className="text-foreground">Box Elegance e Flex:</strong> Linhas exclusivas para quem busca um toque de luxo e sofisticação.</li>
        </ul>
      </div>

      <div>
        <h2 className="font-display text-2xl text-foreground mb-4">Atendimento em Toda a Grande São Paulo</h2>
        <p>
          Com sede na Zona Norte, a Projeto Vidros leva qualidade e rapidez para todas as regiões: Zona Sul, Zona Leste, Zona Oeste e Centro. Também atendemos com exclusividade condomínios em Alphaville, Barueri e Santana de Parnaíba.
        </p>
      </div>

      <div className="bg-background border border-border rounded-xl p-6 text-center">
        <p className="text-foreground font-display text-xl mb-4">Não feche seu orçamento sem falar conosco!</p>
        <p className="mb-6">Garantimos preço de fábrica, instalação limpa e garantia técnica em todos os nossos serviços.</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1ebe5a] transition-colors shadow-lg"
        >
          <Phone className="w-4 h-4" />
          Pedir Orçamento pelo WhatsApp
        </a>
      </div>
    </div>
  </ProductPageLayout>
  );
};

export default BoxBanheiro;
