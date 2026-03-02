import ProductPageLayout from "@/components/ProductPageLayout";
import portaVision from "@/assets/porta-vision.jpg";
import portaNobre from "@/assets/porta-nobre.jpg";
import portaCerto from "@/assets/porta-certo.jpg";
import portaFlex from "@/assets/porta-flex.jpg";
import portaAbrir from "@/assets/porta-abrir.jpg";
import portaCorrer from "@/assets/porta-correr.jpg";
import portaVersatik from "@/assets/porta-versatik.jpg";

const products = [
  {
    name: "Porta Vision",
    image: portaVision,
    description: "Porta de vidro de correr com sistema deslizante e roldanas aparentes.",
    fullDescription: `Porta de vidro de correr com sistema deslizante, roldanas aparentes e acabamento de primeira linha. Fabricada com o sistema de roldanas aparentes Elegance, a Porta Vision é uma porta de vidro perfeita para fazer divisão de ambientes.

O trilho é fixado na parede pelo sistema de fixação invisível, desenvolvido pela Ideia Glass que não expõe os suportes do trilho e passa a impressão de estar flutuando no ar. Os rolamentos utilizados no sistema Vision são de alta qualidade, por isso o manuseio da porta é muito leve.

Utilize a criatividade na decoração. Porta Vision é um sistema muito versátil que se adapta ao ambiente, está disponível em várias cores de acabamento: Branco, Preto, Cromado, Dourado, Rose. Entre em contato com nossa equipe para fazer projetos especiais.`,
  },
  {
    name: "Porta Nobre",
    image: portaNobre,
    description: "Segurança e sofisticação com amortecedores e acabamento premium.",
    fullDescription: `A Porta Nobre da Ideia Glass é uma excelente opção para quem busca segurança e sofisticação em portas de vidro. Projetada e fabricada com materiais de alta qualidade, é uma porta elegante e resistente que oferece um nível elevado de segurança.

Uma das principais características da Porta Nobre é a presença de amortecedores que auxiliam na abertura e fechamento suave e seguro, evitando que a porta bata ou quebre. Além disso, há a possibilidade de se utilizar vidro laminado de 8mm, que proporciona maior resistência e segurança em relação ao vidro comum.

Com um design imponente e acabamento premium, a Porta Nobre é uma excelente opção para quem busca uma porta elegante e resistente para uso em ambientes residenciais ou comerciais. A porta é 100% personalizável, podendo ser adaptada às necessidades e preferências do cliente.

Além de sua funcionalidade e segurança, a Porta Nobre é fácil de instalar e pode ser utilizada em diferentes tipos de ambientes, tais como: salas de estar, salas de jantar, quartos, escritórios, lojas, entre outros. Com a Porta Nobre, você terá a garantia de uma porta elegante e segura que proporcionará a você, sua família ou clientes, maior tranquilidade e conforto.`,
  },
  {
    name: "Porta Certo",
    image: portaCerto,
    description: "Sistema inovador de fechamento semi automático, sem mola de piso.",
    fullDescription: `A Porta Certa é perfeita para otimização de espaço, é um sistema inovador que vai facilitar sua vida. Chega de dor de cabeça para fazer a fixação de molas de piso, furar tetos de gesso ou paredes de dry wall, substitui as ferragens tradicionais que desregulam com o tempo e vivem dando problema.

A Porta Certa é perfeita para dividir passagens de hotéis, residências e casas com pessoas com necessidades especiais, idosos e cadeirantes pois possui um sistema exclusivo de fechamento semi automático que faz a porta fechar sem a necessidade de uma mola de piso.

Além disso a Porta Certa pode ser utilizada em vários tipos de ambientes como: Portas de vestiários, Portas de escritórios, Porta de balcão, porta de guarda roupa, porta de vidro para evitar a entrada de animais de estimação. Monte porta de vidro grande com 3m de altura, o sistema é 100% personalizável.

A Porta Certa pode ser montada com puxadores e maçanetas especiais. Temos 4 cores de acabamento: Branco, Preto, Fosco, Brilhante. Personalize o vidro com adesivos especiais ou até mesmo utilizando espelhos para dar um acabamento diferente. Sem perfil superior e inferior o ambiente fica muito mais clean.`,
  },
  {
    name: "Porta Flex",
    image: portaFlex,
    description: "A porta de vidro que aumenta sua área de passagem com mais de 90% de abertura.",
    fullDescription: `Porta pequena? A Porta Flex é a porta de vidro que aumenta sua área de passagem.

Quer ganhar mais espaço? A Porta Flex dá mais de 90% de abertura. Imagine uma porta de 80 cm de largura, você terá 70 cm de passagem livre. Utilize a Porta Flex para dividir espaços como cozinha, sala, quartos e até banheiros.

A Porta Flex não utiliza trilho na parte inferior, isso deixa a passagem livre. Todas as peças da Porta Flex têm garantia de fábrica da Ideia Glass. As dobradiças são super resistentes e permitem fazer a montagem das portas com medidas especiais.

Temos várias cores de acabamento: Branco, Dourado, Preto, Cromado, Rose.

O sistema flexível da Porta Flex é muito leve de manusear e não requer manutenção constante. Também conhecida como Porta camarão, Porta articulada, Porta pantográfica e Porta flexível, a Porta Flex é fabricada pela Ideia Glass e é a solução para portas pequenas.`,
  },
  {
    name: "Porta de Abrir",
    image: portaAbrir,
    description: "Elegância e transparência com vidro temperado de alta resistência.",
    fullDescription: `Transforme seu ambiente com a elegância e a transparência da nossa Porta de Abrir de Vidro Temperado. Ideal para residências, escritórios e áreas comerciais que buscam sofisticação, luminosidade natural e integração de espaços. Com um design limpo e funcional, esta porta de giro é a solução clássica que nunca sai de moda.

Principais Benefícios:

• Segurança Reforçada: Fabricada com vidro temperado de alta resistência (8mm ou 10mm), oferecendo até 5 vezes mais rigidez que o vidro comum.

• Segurança no Uso: Em caso de quebra, estilhaça em pequenos fragmentos arredondados, minimizando riscos de acidentes.

• Sofisticação e Luz: Proporciona ampla iluminação natural, tornando o ambiente mais amplo e aconchegante.

• Durabilidade: Alta resistência a impactos e variações de temperatura.

• Versatilidade: Perfeita para entradas, cozinhas, lavanderias, salas de reuniões e divisórias internas.`,
  },
  {
    name: "Porta de Correr",
    image: portaCorrer,
    description: "Funcionalidade e design moderno com deslizamento suave.",
    fullDescription: `Transforme seu espaço com a funcionalidade da nossa Porta de Vidro de Correr. Desenvolvida para integrar salas, varandas, cozinhas e áreas comerciais, ela oferece uma abertura suave e otimiza o espaço, dispensando áreas de giro. Fabricada com vidro temperado de alta resistência, garante durabilidade e segurança para sua família. O design moderno e Clean valoriza a iluminação natural e traz um toque contemporâneo à decoração.

Destaques:

• Vidro Temperado de Segurança (8mm/10mm): Até 5x mais resistente que o vidro comum.

• Aproveitamento de Espaço: Ideal para vãos de circulação.

• Deslizamento Suave: Roldanas de alta performance.`,
  },
  {
    name: "Porta Versatik",
    image: portaVersatik,
    description: "Sistema inovador de correr com abertura de até 2/3 do vão.",
    fullDescription: `Transforme seu ambiente com a Porta de Correr Versatik, a solução definitiva em sofisticação e funcionalidade. Com seu inovador sistema de correr, onde os vidros se recolhem atrás de um painel fixo, você obtém uma abertura muito maior (até 2/3 do vão) em comparação às portas de correr tradicionais. Fabricada com vidro temperado de alta segurança, é ideal para dividir ambientes, varandas, cozinhas e áreas de lazer, garantindo luminosidade e um design moderno.

• Aproveitamento Máximo do Vão: Diferente das portas convencionais, o sistema Versatik utiliza folhas que deslizam sobre o mesmo trilho, acumulando-se e proporcionando uma abertura superior para passagem.

• Segurança Reforçada: Vidro temperado de alta resistência (8mm ou 10mm), que é até 5 vezes mais forte que o vidro comum e, se quebrado, estilhaça em pequenos fragmentos não cortantes.

• Design "Mão Amiga": Sistema inteligente onde ao empurrar a folha principal, as outras acompanham automaticamente, facilitando o manuseio.

• Versatilidade de Aplicação: Perfeita para fechar áreas gourmet, integrar salas e varandas, ou criar divisórias sofisticadas em escritórios.

• Conforto Acústico e Luminosidade: Aumenta a iluminação natural enquanto proporciona uma barreira contra ruídos e vento.`,
  },
];

const PortasVidro = () => (
  <ProductPageLayout
    title="Portas de Vidro"
    subtitle="Portas de vidro temperado e laminado com design moderno e alta durabilidade."
    products={products}
  />
);

export default PortasVidro;
