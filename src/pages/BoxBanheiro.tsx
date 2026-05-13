import ProductPageLayout from "@/components/ProductPageLayout";
import boxCerto from "@/assets/box-certo.webp";
import boxFlex from "@/assets/box-flex.webp";
import boxElegance from "@/assets/box-elegance.webp";
import boxReto from "@/assets/box-reto.webp";
import boxNobre from "@/assets/box-nobre.webp";
import boxDuo from "@/assets/box-duo.webp";
import boxTransfer from "@/assets/box-transfer.webp";
import boxTradicional from "@/assets/box-tradicional.webp";
import { Phone } from "lucide-react";
import { useSeo } from "@/lib/seo";

const WHATSAPP_URL = "https://wa.me/5511915485945?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20box%20de%20banheiro.";

const products = [
  {
    name: "Box Certo",
    image: boxCerto,
    description: "Praticidade e funcionalidade com porta de abertura 180°.",
    fullDescription: `Para aprimorar o espaço do seu banheiro desenvolvemos o Box Certo, trazendo praticidade e funcionalidade para seu dia-a-dia.

A porta do box possui uma abertura de 180°, tanto para dentro como para fora, com três paradas de 90°. Isso ajuda a otimizar o aproveitamento do espaço do ambiente. Além disso, possui um sistema especial que faz a porta se fechar sozinha com um simples toque.

O Box Certo pode ser montado em cantos, espaços frontais, sobre banheiras ou até mesmo como porta bipartida. É totalmente acessível e seguro, perfeito para hotéis e residências. Possui várias cores de acabamento; Branco, Preto, Fosco e Brilhante.

Você pode adquirir o Box Certo com toda a tranquilidade e segurança.`,
  },
  {
    name: "Box Flex",
    image: boxFlex,
    description: "Solução para banheiros pequenos com abertura articulada.",
    fullDescription: `A sua solução para banheiros pequenos.

Por ter a abertura articulada, tem um aproveitamento melhor do cômodo e você ganha até 90% de passagem livre no vão.

Seu design é sofisticado, sem trilhos na parte superior, o que deixa o ambiente clean, discreto e funcional. As dobradiças são de metais nobres com alta resistência, podendo também ser montado de canto. O sistema flexível do box é muito fácil de se manusear.

Produto com garantia de fábrica. Temos várias cores de acabamento: branco, dourado, preto, cromado e rose.

Conhecido popularmente como box camarão, box articulado, box pantográfico, box flexível… O original é o BOX FLEX, fabricado pela Ideia Glass.`,
  },
  {
    name: "Box Elegance",
    image: boxElegance,
    description: "Roldanas aparentes com metais nobres e design contemporâneo.",
    fullDescription: `Transforme o seu box de banheiro em um espaço aconchegante e sofisticado com o Box Elegance. A opção do Tubo Oblongo deixa o ambiente moderno e foi criado especialmente para manter uma padronização de todas linhas com roldanas aparentes, sendo usado no Elegance, Due e Encanto.

Cada detalhe do Box Elegance foi pensado para combinar com as tendências da decoração contemporânea. As roldanas aparentes deslizam com leveza sobre o trilho deixando o box de banheiro muito mais Elegante.

Fabricado em diferentes cores de acabamento, ele pode se adaptar ao seu projeto com facilidade. A Ideia Glass fornece todas as peças para fazer projetos com vidros especiais, também temos uma consultoria especializada que te ajuda em todos os detalhes.

As roldanas aparentes do Box Elegance são produzidas com metais nobres que passam por um processo especial de tratamento. Por isso, a Ideia Glass dá uma garantia de fábrica.

O Box Elegance é a melhor solução para quem valoriza modernidade e sofisticação com alta durabilidade.`,
  },
  {
    name: "Box Reto",
    image: boxReto,
    description: "Perfil retangular com capa de acabamento que esconde as ferragens.",
    fullDescription: `O Box Reto possui o perfil superior retangular com uma capa de acabamento que esconde as ferragens do box, deixando o espaço mais harmonizado e com destaque para o vidro e a área de banho.

Com esse modelo, é possível fazer boxes até o teto no estilo sauna ou na medida que você desejar.

Possui um sistema de funcionamento leve para abrir e fechar, sendo possível ser feito em vãos de até 2,50 metros de largura.`,
  },
  {
    name: "Box Nobre",
    image: boxNobre,
    description: "Sistema de amortecimento no fechamento e abertura das portas.",
    fullDescription: `O Box Nobre foi projetado e fabricado pela Ideia Glass para aumentar a segurança no box de banheiro, você pode colocar o amortecedor ao abrir e fechar a porta do box.

Linha que como o nome já diz NOBRE, perfeita para fazer fechamentos de área de banho em todos os formatos, Box Frontal (f1), box em L (C1 / canto), box frontal (f2), box com 2 portas centralizadas(F3), porém também pode ser usado como fechamentos de áreas externas e até mesmo porta de correr para dividir ambientes.

Mais resistência e qualidade:

Todos os perfis do box são fabricados de Alumínio com ligas especiais reforçadas. As espessuras das paredes do alumínio da linha Nobre são mais robustas que os box tradicionais de mercado. Deixando o box Nobre com mais resistência e um acabamento premium.

Amortecimento quando abre e quando fecha:

O grande diferencial do Box Nobre é o sistema de amortecimento no fechamento e abertura das portas que impede que o movimento brusco ao abrir e fechar a porta possa quebrar acidentalmente o vidro.`,
  },
  {
    name: "Duo Safe",
    image: boxDuo,
    description: "Alta segurança com pinças de pressão e duas folhas de correr.",
    fullDescription: `O Box Duo Safe da Tec-Vidro é um sistema de envidraçamento para banheiros focado em alta segurança, projetado para utilizar tanto vidro temperado quanto laminado, sem a necessidade de furos na peça de vidro. Sua principal característica é o uso de pinças de pressão e a ausência de vidros fixos, com duas folhas de correr.`,
  },
  {
    name: "Transfer",
    image: boxTransfer,
    description: "Alta acessibilidade com abertura de 2/3 do vão total.",
    fullDescription: `O Box Transfer é um sistema de fechamento para banheiros projetado para oferecer alta acessibilidade e otimização de espaço, sendo ideal para vãos pequenos. A principal característica é a movimentação simultânea das folhas, permitindo uma abertura de 2/3 do vão total.`,
  },
  {
    name: "Box Tradicional",
    image: boxTradicional,
    description: "Solução clássica com ótimo custo-benefício e durabilidade.",
    fullDescription: `O Box Tradicional de Vidro (frequentemente referido como modelo padrão ou frontal ou de Canto) é a solução mais clássica, segura e funcional para banheiros brasileiros. Ele combina a robustez de perfis de alumínio com a transparência e resistência do vidro temperado, sendo ideal para quem busca ótimo custo-benefício e durabilidade.`,
  },
];

const BoxBanheiro = () => (
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

export default BoxBanheiro;
