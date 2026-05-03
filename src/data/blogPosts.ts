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
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
