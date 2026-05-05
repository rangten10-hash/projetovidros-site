import bannerBoxSeguro from "@/assets/banner-mobile-seguranca.webp";
import boxAteTeto from "@/assets/blog-box-ate-teto.webp";
import kitRetoRose from "@/assets/blog-kit-reto-rose.webp";
import divisoriaUniqueAntes from "@/assets/blog-divisoria-unique-antes.webp";
import divisoriaUniqueDepois from "@/assets/blog-divisoria-unique-depois.webp";
import espelhoHallAntes from "@/assets/blog-espelho-hall-antes.webp";
import espelhoHall from "@/assets/blog-espelho-hall-depois.webp";
import guiaBoxFlex from "@/assets/blog-guia-box-flex.webp";
import guiaBoxTransfer from "@/assets/blog-guia-box-transfer.webp";
import guiaBoxAbrir from "@/assets/blog-guia-box-abrir.webp";
import guiaBoxFrontal from "@/assets/blog-guia-box-frontal.webp";
import guiaBoxPisoTeto from "@/assets/blog-guia-box-piso-teto.webp";
import guiaBoxElegance from "@/assets/blog-guia-box-elegance.webp";
import guiaBoxCanto from "@/assets/blog-guia-box-canto.webp";
import flexSemBox from "@/assets/blog-flex-sem-box.webp";
import flexFechado from "@/assets/blog-flex-fechado.webp";
import flexAberto from "@/assets/blog-flex-aberto.webp";
import espelhoCapa from "@/assets/blog-espelho-capa.webp";
import espelhoPainelSala from "@/assets/blog-espelho-painel-sala.webp";
import espelhoPainelHall from "@/assets/blog-espelho-painel-hall.webp";
import espelhoBanheiroLed from "@/assets/blog-espelho-banheiro-led.webp";
import espelhoLapidado from "@/assets/blog-espelho-lapidado.webp";
import espelhoBizote from "@/assets/blog-espelho-bizote.webp";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  date: string;
  author: string;
  /** Array of content blocks rendered in order */
  content: BlogBlock[];
  cta?: {
    label: string;
    href: string;
  };
  metaDescription: string;
}

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: { strong?: string; text: string }[] }
  | { type: "image"; src: string; alt: string };

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20box%20de%20segurança.";

export const blogPosts: BlogPost[] = [
  {
    slug: "espelhos-decorativos-banheiro-amplitude-qualidade",
    title:
      "Espelhos Decorativos e para Banheiro: Amplitude e Qualidade Superior em Cada Detalhe",
    excerpt:
      "Cristais Guardian e Cebrace nas espessuras 4mm, 5mm e 6mm. Lapidação, bisotê e LED sob medida para banheiros, salas e halls em São Paulo.",
    image: espelhoCapa,
    imageAlt:
      "Espelho decorativo sob medida em sala de jantar com cristal Guardian instalado pela Projeto Vidros",
    date: "2026-05-05",
    author: "Projeto Vidros",
    metaDescription:
      "Espelhos decorativos e para banheiro sob medida em São Paulo. Cristais Guardian e Cebrace 4mm, 5mm e 6mm com lapidação, bisotê e LED. Projeto Vidros.",
    content: [
      {
        type: "paragraph",
        text: "Seja para ampliar uma sala de jantar ou para transformar o visual do seu banheiro, a escolha do espelho certo vai muito além da estética. Na Projeto Vidros, acreditamos que a durabilidade e a nitidez do reflexo dependem diretamente da procedência do cristal.",
      },
      { type: "heading", text: "As Melhores Marcas do Mercado" },
      {
        type: "paragraph",
        text: "Para garantir que seu espelho não apresente manchas ou distorções com o passar do tempo, trabalhamos exclusivamente com as marcas líderes mundiais: Guardian e Cebrace. Esses fabricantes são referência em resistência à oxidação, o que é fundamental, especialmente para espelhos de banheiro que ficam expostos à umidade constante.",
      },
      {
        type: "image",
        src: espelhoPainelSala,
        alt: "Painel de espelhos decorativos em hall de entrada com acabamento bisotê",
      },
      { type: "heading", text: "Espessuras para Cada Projeto" },
      {
        type: "paragraph",
        text: "Cada ambiente exige uma resistência específica para garantir a segurança e o alinhamento perfeito da peça:",
      },
      {
        type: "list",
        items: [
          { strong: "4mm:", text: "Ideal para espelhos menores ou colados diretamente em painéis de madeira." },
          { strong: "5mm:", text: "A espessura mais versátil, oferecendo excelente equilíbrio entre peso e resistência para a maioria dos projetos residenciais." },
          { strong: "6mm:", text: "Recomendada para espelhos de grandes dimensões ou fixados com botões, garantindo uma planicidade impecável e maior segurança estrutural." },
        ],
      },
      {
        type: "image",
        src: espelhoPainelHall,
        alt: "Painel de espelhos em hall de elevador com cristal de alta qualidade",
      },
      { type: "heading", text: "Transforme seu Banheiro e sua Casa" },
      {
        type: "paragraph",
        text: "Nossos espelhos para banheiro podem ser personalizados com lapidação, bisotê ou iluminação LED, sempre respeitando as medidas exatas do seu espaço. Já para as áreas decorativas, como salas e halls, projetamos painéis que levam sofisticação e claridade para todo o imóvel.",
      },
      {
        type: "image",
        src: espelhoBanheiroLed,
        alt: "Espelho de banheiro com iluminação LED retroiluminada instalado pela Projeto Vidros",
      },
      {
        type: "image",
        src: espelhoLapidado,
        alt: "Espelho de banheiro com acabamento em lapidação reta",
      },
      {
        type: "image",
        src: espelhoBizote,
        alt: "Espelho de banheiro com acabamento bisotê e bordas chanfradas",
      },
      { type: "heading", text: "Por que escolher a Projeto Vidros em São Paulo?" },
      {
        type: "paragraph",
        text: "Combinamos a experiência de quem domina o mercado técnico com a utilização de materiais premium. Além da instalação especializada, oferecemos consultoria para definir qual a melhor marca e espessura para a sua necessidade específica.",
      },
      {
        type: "paragraph",
        text: "Quer valorizar seu ambiente com o melhor espelho de São Paulo? Entre em contato agora pelo WhatsApp: (11) 91548-5945 e solicite seu orçamento com a equipe da Projeto Vidros!",
      },
    ],
    cta: {
      label: "FALAR COM UM PROJETISTA NO WHATSAPP",
      href: "https://wa.me/5511915485945?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20espelhos%20sob%20medida.",
    },
  },
  {
    slug: "box-flex-articulado-banheiros-pequenos-sao-paulo",
    title:
      "Box Flex Articulado: A Solução Inteligente para Banheiros Pequenos em São Paulo",
    excerpt:
      "Vão estreito? O Box Flex Articulado abre até 90% do espaço com vidro temperado 8mm e película de segurança. Ideal para apartamentos compactos.",
    image: flexFechado,
    imageAlt:
      "Box Flex Articulado com vidro temperado e ferragens pretas instalado pela Projeto Vidros em São Paulo",
    date: "2026-05-04",
    author: "Projeto Vidros",
    metaDescription:
      "Box Flex Articulado da Projeto Vidros: solução para banheiros pequenos em São Paulo. Abertura de até 90% do vão, vidro 8mm e película de segurança.",
    content: [
      {
        type: "paragraph",
        text: "Você já desistiu de ter um box de vidro porque o vão do seu banheiro é muito estreito? Se o espaço para entrada é menor que 1 metro, o box de correr tradicional acaba roubando metade da passagem, tornando o banho desconfortável.",
      },
      {
        type: "paragraph",
        text: "Para resolver esse problema, a Projeto Vidros traz o Box Flex (ou Box Articulado), a tecnologia que está revolucionando os apartamentos compactos e reformas inteligentes.",
      },
      {
        type: "image",
        src: flexSemBox,
        alt: "Banheiro compacto antes da instalação do Box Flex, com vão estreito e área de banho aberta",
      },
      { type: "heading", text: "O que é o Box Flex?" },
      {
        type: "paragraph",
        text: "Diferente dos modelos de correr, o Box Flex funciona com um sistema de dobradiças centrais. Isso permite que as folhas de vidro se dobrem uma sobre a outra, garantindo uma abertura de até 90% do vão. Se você tem um espaço de 80cm, terá quase 80cm livres para passar!",
      },
      {
        type: "image",
        src: flexFechado,
        alt: "Box Flex Articulado fechado, mostrando o design clean sem trilho superior",
      },
      {
        type: "heading",
        text: "Por que escolher o Box Articulado da Projeto Vidros?",
      },
      {
        type: "list",
        items: [
          {
            strong: "Ganho de Espaço Real:",
            text: "Ideal para vãos a partir de 60cm, onde nenhum outro box funciona com eficiência.",
          },
          {
            strong: "Segurança em Primeiro Lugar:",
            text: "Utilizamos vidro temperado de 8mm e, como padrão da nossa empresa, aplicamos a película de segurança anti-estilhaço.",
          },
          {
            strong: "Design Sem Trilho Superior:",
            text: "O visual é extremamente moderno e clean, pois não utiliza aquela barra de alumínio no topo, deixando o banheiro com aspecto mais amplo.",
          },
          {
            strong: "Suavidade no Uso:",
            text: "As dobradiças de metal nobre garantem que o abrir e fechar seja silencioso e leve.",
          },
        ],
      },
      {
        type: "image",
        src: flexAberto,
        alt: "Box Flex Articulado aberto, com as folhas de vidro dobradas liberando até 90% do vão",
      },
      { type: "heading", text: "Banheiro SPA e Conforto" },
      {
        type: "paragraph",
        text: "O Box Flex não é apenas funcional; ele é elegante. Ao eliminar os trilhos pesados, você ganha um ambiente com estética minimalista. Além disso, a vedação técnica da Projeto Vidros garante que a água fique exatamente onde deve: dentro da área de banho.",
      },
      { type: "heading", text: "Atendimento em São Paulo" },
      {
        type: "paragraph",
        text: "Se você mora na capital ou região metropolitana e precisa otimizar o espaço do seu banheiro com qualidade técnica e segurança, a Projeto Vidros é especialista na instalação de modelos articulados.",
      },
      {
        type: "paragraph",
        text: "Deseja um orçamento para o seu Box Flex? Fale agora com nossa equipe pelo WhatsApp (11) 91548-5945 ou visite nosso portfólio no site!",
      },
    ],
    cta: {
      label: "FALAR COM UM PROJETISTA NO WHATSAPP",
      href: WHATSAPP_URL,
    },
  },
  {
    slug: "box-banheiro-beleza-seguranca-familia",
    title:
      "🛡️ Box de Banheiro: A Beleza que você quer com a Segurança que sua família precisa",
    excerpt:
      "Box até o teto, Kit Reto e a tecnologia BOX + SEGURO: como unir alto padrão e proteção real contra acidentes em São Paulo.",
    image: bannerBoxSeguro,
    imageAlt:
      "Box de banheiro com vidro temperado e película BOX + SEGURO instalado pela Projeto Vidros em São Paulo",
    date: "2026-05-02",
    author: "Projeto Vidros",
    metaDescription:
      "Box de banheiro até o teto com Kit Reto e película BOX + SEGURO: alto padrão e segurança real contra acidentes. Atendimento em toda São Paulo.",
    content: [
      {
        type: "paragraph",
        text: "Ter um banheiro moderno, com um Box até o Teto e ferragens de alto padrão como o Kit Reto, é o sonho de muitos moradores em São Paulo. Mas, além da estética, existe um fator que não pode ser deixado de lado: a segurança real contra acidentes.",
      },
      {
        type: "heading",
        text: "Por que a película BOX + SEGURO é indispensável?",
      },
      {
        type: "paragraph",
        text: "Mesmo o vidro temperado sendo muito resistente, em caso de uma quebra rara por impacto ou torção, os cacos podem se espalhar, causando riscos de cortes. É aqui que entra a nossa tecnologia BOX + SEGURO.",
      },
      {
        type: "paragraph",
        text: "Ao instalar a película BOX + SEGURO, garantimos que:",
      },
      {
        type: "list",
        items: [
          {
            strong: "Zero queda de vidro:",
            text: "Em caso de quebra, os cacos ficam totalmente presos na película, mantendo a estrutura no lugar até a troca.",
          },
          {
            strong: "Proteção Invisível:",
            text: "Ela não altera a transparência ou a beleza do seu vidro; você nem percebe que ela está lá.",
          },
          {
            strong: "Tranquilidade Total:",
            text: "Ideal para casas com crianças, idosos ou pets, onde a segurança não pode ser negociada.",
          },
        ],
      },
      {
        type: "heading",
        text: "Atendimento Exclusivo em São Paulo",
      },
      {
        type: "paragraph",
        text: "Na Projeto Vidros, somos especialistas em levar essa tecnologia para as regiões mais exigentes de SP. Se você mora no Itaim Bibi, Moema, Pinheiros, Alphaville, Pacaembu ou em qualquer bairro da Zona Norte (como Imirim e Santana), nós vamos até você para realizar a medição técnica e a instalação profissional.",
      },
      {
        type: "paragraph",
        text: "Não transforme seu momento de relaxamento em uma preocupação. Escolha o box mais seguro do mercado com acabamento premium.",
      },
    ],
    cta: {
      label: "QUERO O BOX MAIS SEGURO – ORÇAMENTO VIA WHATSAPP",
      href: WHATSAPP_URL,
    },
  },
  {
    slug: "box-ate-o-teto-efeito-spa",
    title: "Box até o Teto: Transforme seu Banheiro em um SPA Particular",
    excerpt:
      "Descubra como o box até o teto retém o calor, evita o mofo e traz sofisticação absoluta para o seu projeto.",
    image: boxAteTeto,
    imageAlt:
      "Box de banheiro até o teto com ferragens cromadas Kit Reto instalado pela Projeto Vidros em São Paulo",
    date: "2026-05-02",
    author: "Projeto Vidros",
    metaDescription:
      "Saiba por que o box até o teto é a maior tendência para banheiros de luxo em SP. Conforto térmico e design exclusivo pela Projeto Vidros.",
    content: [
      {
        type: "paragraph",
        text: "Você já sentiu aquele choque térmico ao sair do banho em um dia frio? O segredo dos projetos de alto padrão no Itaim e em Alphaville para resolver isso é o Box até o Teto.",
      },
      { type: "heading", text: "Conforto Térmico e Higiene" },
      {
        type: "list",
        items: [
          {
            strong: "Efeito Sauna:",
            text: "Ao fechar o vão até o teto, o vapor fica retido, mantendo a temperatura agradável durante todo o banho.",
          },
          {
            strong: "Adeus ao Mofo:",
            text: "O vapor não se espalha pelo banheiro, preservando a pintura e os móveis do ambiente.",
          },
        ],
      },
      { type: "heading", text: "Estética Minimalista" },
      {
        type: "paragraph",
        text: "Utilizando ferragens modernas como o Kit Reto, o visual fica limpo e sofisticado, ideal para quem busca um design clean e contemporâneo.",
      },
      {
        type: "paragraph",
        text: "Na Projeto Vidros, realizamos a medição técnica precisa para que o fechamento seja perfeito, garantindo segurança e beleza em toda a Zona Norte e regiões nobres de São Paulo.",
      },
    ],
    cta: {
      label: "QUERO MEU BOX ATÉ O TETO – ORÇAMENTO VIA WHATSAPP",
      href: WHATSAPP_URL,
    },
  },
  {
    slug: "kit-reto-rose-design-exclusivo",
    title: "Kit Reto Rose: O Design do Futuro para seu Banheiro",
    excerpt:
      "Conheça o luxo do acabamento Rose com altura fora de padrão de 2,10m. Elegância e linhas minimalistas que arquitetos amam.",
    image: kitRetoRose,
    imageAlt: "Box com Kit Reto Rose e altura personalizada de 2,10m",
    date: "2026-05-02",
    author: "Projeto Vidros",
    metaDescription:
      "Box com Kit Reto Rose em São Paulo. Altura personalizada de 2,10m para um visual clean e elegante. Projetos exclusivos Projeto Vidros.",
    content: [
      {
        type: "paragraph",
        text: "Se você busca fugir do comum, o Kit Reto Rose é a escolha ideal. Com linhas minimalistas e um acabamento sofisticado, ele transforma o visual do banheiro em um ambiente de revista.",
      },
      { type: "heading", text: "Altura fora de padrão: O diferencial de 2,10m" },
      {
        type: "paragraph",
        text: "Diferente dos boxes convencionais, este projeto da Projeto Vidros foi executado com 2,10m de altura. Essa medida personalizada traz uma imponência maior ao espaço e um acabamento muito mais harmônico com o revestimento do banheiro.",
      },
      { type: "heading", text: "Por que arquitetos amam o Kit Reto?" },
      {
        type: "list",
        items: [
          {
            strong: "Visual Clean:",
            text: "Ferragens com linhas retas que trazem modernidade absoluta.",
          },
          {
            strong: "Acabamento Premium:",
            text: "O tom Rose Gold é tendência em decorações de alto padrão em bairros como Itaim Bibi e Moema.",
          },
          {
            strong: "Personalização Técnica:",
            text: "Executamos projetos sob medida que fogem das medidas padrão de mercado.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Na Projeto Vidros, somos especialistas em tirar do papel esses projetos que exigem precisão técnica e um olhar atento ao design.",
      },
    ],
    cta: {
      label: "CONSULTAR MODELOS E PREÇOS",
      href: "https://wa.me/5511915485945?text=Olá,%20vi%20o%20post%20sobre%20o%20Kit%20Reto%20Rose%20de%202,10m.%20Gostaria%20de%20um%20orçamento.",
    },
  },
  {
    slug: "divisoria-versatik-truck-unique-green",
    title: "Divisória de Cozinha: 66% de Abertura e Vão Livre no Unique Green",
    excerpt:
      "Veja como instalamos uma porta de 3 folhas com sistema Versatik Truck, garantindo passagem livre e design integrado.",
    image: divisoriaUniqueDepois,
    imageAlt:
      "Porta divisória de cozinha em vidro pontilhado no condomínio Unique Green",
    date: "2026-05-02",
    author: "Projeto Vidros",
    metaDescription:
      "Instalação de divisória Versatik Truck no Unique Green. Vidro pontilhado 8mm, perfil cinza fosco e sistema sem trilho inferior.",
    content: [
      {
        type: "paragraph",
        text: "Em apartamentos modernos como os do Condomínio Unique Green, otimizar o espaço entre a cozinha e a lavanderia é essencial. Recentemente, entregamos uma solução que une funcionalidade extrema e estética.",
      },
      {
        type: "image",
        src: divisoriaUniqueAntes,
        alt: "Cozinha do Unique Green antes da instalação da divisória de vidro",
      },
      { type: "heading", text: "O Sistema Versatik Truck Acesso Livre" },
      {
        type: "paragraph",
        text: "O grande diferencial deste projeto é o uso do Kit Versatik Truck. Esse sistema permite dividir o vão em 3 folhas de vidro, onde as portas correm de forma simultânea. Isso proporciona uma abertura de 66% da passagem, ideal para vãos menores.",
      },
      {
        type: "image",
        src: divisoriaUniqueDepois,
        alt: "Divisória Versatik Truck em vidro pontilhado instalada no Unique Green",
      },
      { type: "heading", text: "Segurança e Estética" },
      {
        type: "list",
        items: [
          {
            strong: "Sem trilhos no chão:",
            text: "O sistema Acesso Livre elimina trilhos inferiores, evitando tropeços e facilitando a limpeza.",
          },
          {
            strong: "Design Integrado:",
            text: "Utilizamos o acabamento Cinza Fosco para combinar perfeitamente com os móveis planejados do cliente.",
          },
          {
            strong: "Privacidade:",
            text: "O vidro temperado pontilhado de 8mm garante a divisão visual sem barrar a entrada de luz natural.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Na Projeto Vidros, focamos em ferragens premium que resolvem problemas de espaço com elegância. Atendemos toda a região de Pirituba e arredores com medição técnica especializada.",
      },
    ],
    cta: {
      label: "QUERO UMA DIVISÓRIA ASSIM – WHATSAPP",
      href: "https://wa.me/5511915485945?text=Olá,%20vi%20o%20post%20da%20porta%20no%20Unique%20Green%20e%20queria%20um%20orçamento%20parecido.",
    },
  },
  {
    slug: "espelho-sob-medida-hall-entrada",
    title: "Espelho no Hall de Entrada: Amplitude e Iluminação Imediata",
    excerpt:
      "Veja como um espelho 4mm lapidado sob medida transformou o hall de entrada deste apartamento, trazendo sofisticação e profundidade.",
    image: espelhoHall,
    imageAlt: "Espelho 4mm lapidado instalado em hall de entrada sob medida",
    date: "2026-05-02",
    author: "Projeto Vidros",
    metaDescription:
      "Benefícios do espelho sob medida no hall de entrada. Instalação de espelho 4mm lapidado em São Paulo pela Projeto Vidros.",
    content: [
      {
        type: "paragraph",
        text: "O hall de entrada é o cartão de visitas da sua casa. Muitas vezes negligenciado, esse espaço pode ganhar vida nova com o uso estratégico de espelhos sob medida.",
      },
      {
        type: "image",
        src: espelhoHallAntes,
        alt: "Hall de entrada antes da instalação do espelho sob medida",
      },
      { type: "heading", text: "Por que investir em um espelho no Hall?" },
      {
        type: "list",
        items: [
          {
            strong: "Sensação de Amplitude:",
            text: "O espelho 'dobra' o tamanho do ambiente, ideal para corredores e halls estreitos.",
          },
          {
            strong: "Mais Iluminação:",
            text: "Ele reflete a luz natural e artificial, deixando todo o apartamento mais claro e convidativo.",
          },
          {
            strong: "Funcionalidade:",
            text: "O famoso 'check-up' visual antes de sair de casa.",
          },
        ],
      },
      {
        type: "image",
        src: espelhoHall,
        alt: "Hall de entrada depois da instalação do espelho 4mm lapidado sob medida",
      },
      { type: "heading", text: "Qualidade Projeto Vidros" },
      {
        type: "paragraph",
        text: "Neste projeto, utilizamos um espelho de 4mm com acabamento lapidado, cortado exatamente de acordo com o vão do cliente. O resultado é um encaixe perfeito que se integra à arquitetura do imóvel.",
      },
      {
        type: "paragraph",
        text: "Atendemos toda a capital de São Paulo com medição técnica para garantir que o seu projeto saia do papel com a máxima precisão.",
      },
    ],
    cta: {
      label: "SOLICITAR ORÇAMENTO DE ESPELHO",
      href: "https://wa.me/5511915485945?text=Olá,%20vi%20o%20post%20do%20espelho%20no%20hall%20e%20gostaria%20de%20um%20orçamento%20sob%20medida.",
    },
  },
  {
    slug: "guia-completo-box-banheiro-ideal",
    title: "Guia Completo: Como Escolher o Box de Banheiro Ideal para sua Casa",
    excerpt:
      "Espaço, funcionalidade e segurança: veja como escolher o box certo para o seu banheiro com 30 anos de experiência da Projeto Vidros.",
    image: guiaBoxPisoTeto,
    imageAlt:
      "Box de banheiro do piso ao teto com perfil preto instalado pela Projeto Vidros",
    date: "2026-05-03",
    author: "Projeto Vidros",
    metaDescription:
      "Guia completo para escolher o box de banheiro ideal: Flex, Transfer, Abrir, Correr, Piso ao Teto, Elegance e Canto. Consultoria Projeto Vidros em SP.",
    content: [
      {
        type: "paragraph",
        text: "Escolher o box de banheiro vai muito além da estética. É uma decisão que envolve aproveitamento de espaço, funcionalidade e, acima de tudo, a segurança da sua família. Com 30 anos de experiência no mercado, nós da Projeto Vidros preparamos este guia para ajudar você a entender qual modelo se adapta melhor ao seu projeto.",
      },
      { type: "heading", text: "1. Pequenos Vãos (até 1,00m de largura)" },
      {
        type: "paragraph",
        text: "Para banheiros compactos, cada centímetro conta. Se o seu espaço é limitado, estas são as melhores opções:",
      },
      {
        type: "image",
        src: guiaBoxFlex,
        alt: "Box Flex articulado para pequenos espaços",
      },
      {
        type: "list",
        items: [
          {
            strong: "Box Flex (Articulado):",
            text: "É o campeão de abertura, proporcionando até 90% de passagem livre no vão. Ideal para quem precisa de acessibilidade e conforto em espaços reduzidos.",
          },
        ],
      },
      {
        type: "image",
        src: guiaBoxTransfer,
        alt: "Box Versatik Transfer com 3 folhas e abertura de 66% do vão",
      },
      {
        type: "list",
        items: [
          {
            strong: "Box Versatik Transfer (3 Folhas):",
            text: "Uma excelente alternativa para quem não gosta do modelo articulado. Com 1 folha fixa e 2 de correr simultâneas, ele oferece 66% de abertura, unindo modernidade e praticidade.",
          },
        ],
      },
      {
        type: "image",
        src: guiaBoxAbrir,
        alt: "Box de abrir tradicional com porta de 55cm",
      },
      {
        type: "list",
        items: [
          {
            strong: "Box de Abrir Tradicional:",
            text: "Composto por uma parte fixa e uma porta de abrir de 55 cm, é uma das opções mais tradicionais e escolhidas pelo excelente custo-benefício.",
          },
        ],
      },
      { type: "heading", text: "2. Vãos Frontais (acima de 0,90m de largura)" },
      {
        type: "paragraph",
        text: "Para vãos padrão, o modelo de correr é o mais indicado pela sua durabilidade e facilidade de uso.",
      },
      {
        type: "image",
        src: guiaBoxFrontal,
        alt: "Box frontal de correr com Kit Reto branco instalado pela Projeto Vidros",
      },
      {
        type: "list",
        items: [
          {
            strong: "Box Tradicional de Correr:",
            text: "O modelo mais utilizado nos lares brasileiros, com 1 folha fixa e 1 de correr.",
          },
          {
            strong: "Design do Kit:",
            text: "Você pode optar pelo Kit Redondo (estilo clássico) ou pelo atual Kit Reto, que traz linhas minimalistas e modernas para o ambiente.",
          },
        ],
      },
      { type: "heading", text: "3. Soluções específicas e design premium" },
      {
        type: "paragraph",
        text: "Se você busca um diferencial estético ou funcional, considere estes modelos:",
      },
      {
        type: "image",
        src: guiaBoxPisoTeto,
        alt: "Box do piso ao teto com perfil preto criando efeito SPA",
      },
      {
        type: "list",
        items: [
          {
            strong: "Box do Piso ao Teto:",
            text: "O queridinho dos arquitetos. Indicado para banheiros com janela dentro da área de banho, ele retém o vapor, evita a umidade no restante do banheiro e protege seus móveis e teto, criando uma verdadeira experiência de SPA.",
          },
        ],
      },
      {
        type: "image",
        src: guiaBoxElegance,
        alt: "Box Elegance com roldanas aparentes em acabamento preto",
      },
      {
        type: "list",
        items: [
          {
            strong: "Box Elegance:",
            text: "Para quem busca sofisticação, o modelo com roldanas aparentes é uma escolha robusta e muito elegante.",
          },
        ],
      },
      {
        type: "image",
        src: guiaBoxCanto,
        alt: "Box de canto em L com perfil preto e Kit Reto",
      },
      {
        type: "list",
        items: [
          {
            strong: "Box de Canto (ou em L):",
            text: "A solução inteligente para banheiros menores que exigem o aproveitamento máximo da área disponível.",
          },
        ],
      },
      { type: "heading", text: "4. O diferencial de segurança Projeto Vidros" },
      {
        type: "paragraph",
        text: "Independente do modelo escolhido, a segurança não é opcional. Na Projeto Vidros, somos referência no uso da película anti-estilhaço. Em caso de quebra, os fragmentos de vidro ficam presos à película, evitando acidentes e garantindo a tranquilidade da sua casa.",
      },
      { type: "heading", text: "Dúvidas na escolha?" },
      {
        type: "paragraph",
        text: "Aqui na Projeto Vidros, nossos projetistas estão prontos para oferecer uma consultoria técnica e orientar você na melhor escolha para o seu espaço.",
      },
    ],
    cta: {
      label: "FALAR COM UM PROJETISTA NO WHATSAPP",
      href: "https://wa.me/5511915485945?text=Olá,%20li%20o%20guia%20de%20box%20de%20banheiro%20e%20gostaria%20de%20uma%20consultoria%20com%20um%20projetista.",
    },
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
