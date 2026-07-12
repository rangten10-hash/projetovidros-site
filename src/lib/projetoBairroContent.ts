// 10 variações rotativas de conteúdo para /projetos/:bairro.
// A escolha é determinística pelo slug — mesmo bairro sempre gera o
// mesmo texto — mas as 10 variações se distribuem entre os bairros
// para blindar o site contra conteúdo duplicado no Google.

export interface ProjetoBairroVariacao {
  id: number;
  foco: string; // categoria do serviço em destaque
  title: (bairro: string) => string;
  paragraph: (bairro: string, regiao: string) => string;
}

export const PROJETO_VARIACOES: ProjetoBairroVariacao[] = [
  {
    id: 1,
    foco: "Janelas de Vidro Temperado",
    title: (b) => `Projetos de Janelas de Vidro Temperado em ${b}`,
    paragraph: (b, regiao) =>
      `Procurando modernizar sua residência ou empresa em ${b}? A Projeto Vidros desenvolve projetos sob medida de janelas de vidro temperado na ${regiao}. Garantimos excelente isolamento acústico, vedação perfeita contra chuvas e um design minimalista que valoriza a fachada do seu imóvel. Atendimento local com medição técnica precisa.`,
  },
  {
    id: 2,
    foco: "Guarda-Corpo de Vidro",
    title: (b) => `Instalação de Guarda-Corpo de Vidro em ${b}`,
    paragraph: (b, regiao) =>
      `Segurança e estética precisam andar juntas na sua sacada ou escada. Nossa equipe é especialista na instalação de guarda-corpo de vidro temperado laminado em ${b}, seguindo à risca todas as normas de segurança vigentes. Leve elegância e proteção real para sua família na ${regiao} com quem entende de engenharia em vidros.`,
  },
  {
    id: 3,
    foco: "Envidraçamento de Sacadas",
    title: (b) => `Envidraçamento de Sacadas e Varandas em ${b}`,
    paragraph: (b, regiao) =>
      `Ganhe um novo ambiente na sua casa ou apartamento com o sistema de envidraçamento de sacadas em ${b}. Proteja seu espaço gourmet contra ventos, poeira e barulho externo com painéis deslizantes de alta performance. Atendemos toda a ${regiao} com garantia de fábrica e assistência técnica especializada.`,
  },
  {
    id: 4,
    foco: "Portas Comerciais",
    title: (b) => `Portas de Vidro para Lojas e Comércios em ${b}`,
    paragraph: (b, regiao) =>
      `Valorize a fachada do seu negócio na ${regiao}. Desenvolvemos portas para lojas em ${b} utilizando vidros de alta resistência, molas hidráulicas embutidas e ferragens de inox. Projetos comerciais focados em durabilidade, segurança e estética atraente para receber seus clientes.`,
  },
  {
    id: 5,
    foco: "Vitrines Comerciais",
    title: (b) => `Fábrica de Vitrines de Vidro para Lojas em ${b}`,
    paragraph: (b, regiao) =>
      `Chame a atenção do público com uma vitrine de loja impecável em ${b}. Executamos projetos comerciais sob medida na ${regiao}, instalando painéis de vidro temperado ou laminado de grandes dimensões que oferecem total transparência e máxima segurança patrimonial. Solicite um consultor local.`,
  },
  {
    id: 6,
    foco: "Divisórias de Cozinha",
    title: (b) => `Divisórias de Vidro para Cozinha em ${b}`,
    paragraph: (b, regiao) =>
      `Divida seus ambientes internos com muita sofisticação. A Projeto Vidros instala divisórias de cozinha em ${b}, ideais para isolar a área de cocção mantendo a luz natural e a amplitude do espaço. Opções em vidro incolor, serigrafado ou jateado sob medida para apartamentos na ${regiao}.`,
  },
  {
    id: 7,
    foco: "Divisórias de Lavanderia",
    title: (b) => `Divisórias de Vidro para Lavanderia em ${b}`,
    paragraph: (b, regiao) =>
      `Esconda o varal e organize sua área de serviço de forma inteligente. Criamos divisórias de lavanderia em ${b} com sistemas de correr ou fixos que se adaptam perfeitamente ao seu espaço. Atendimento rápido em toda a ${regiao}, oferecendo soluções funcionais e fáceis de limpar.`,
  },
  {
    id: 8,
    foco: "Divisórias de Escritório",
    title: (b) => `Divisórias Corporativas de Vidro em ${b}`,
    paragraph: (b, regiao) =>
      `Otimize o layout da sua empresa na ${regiao}. Nossas divisórias de escritórios em ${b} são ideais para criar salas de diretoria, recepções e ambientes de reunião privativos sem perder a integração do time. Excelente atenuação acústica e design corporativo de alto padrão.`,
  },
  {
    id: 9,
    foco: "Vidro para Obra",
    title: (b) => `Fornecimento de Vidros para Obras em ${b}`,
    paragraph: (b, regiao) =>
      `Atendemos construtores, arquitetos e engenheiros que buscam vidro para sua obra em ${b}. Entregamos cortes precisos de vidros temperados, laminados, espelhos e tampos direto da fábrica para a sua construção na ${regiao}. Compromisso com prazos rígidos e excelência técnica.`,
  },
  {
    id: 10,
    foco: "Cobertura de Vidro",
    title: (b) => `Cobertura de Vidro Sob Medida em ${b}`,
    paragraph: (b, regiao) =>
      `Proteja seu corredor, garagem ou área gourmet com as nossas coberturas de vidro em ${b}. Desenvolvidas com estruturas metálicas reforçadas e vidros laminados com proteção contra raios solares, nossas coberturas garantem luminosidade e total estanqueidade contra chuvas na ${regiao}.`,
  },
];

function hash(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

export function pickProjetoVariacao(slug: string): ProjetoBairroVariacao {
  return PROJETO_VARIACOES[hash(slug) % PROJETO_VARIACOES.length];
}
