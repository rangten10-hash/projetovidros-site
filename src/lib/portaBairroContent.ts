// 5 variações de conteúdo rotativo para páginas /portas-de-vidro/:bairro.
// Escolha determinística por slug — mesmo bairro sempre gera o mesmo texto,
// distribuindo os 5 modelos entre os bairros para evitar conteúdo duplicado.

export interface PortaBairroVariacao {
  id: number;
  title: (bairro: string) => string;
  paragraph: (bairro: string, regiao: string) => string;
}

export const PORTA_VARIACOES: PortaBairroVariacao[] = [
  {
    id: 1,
    title: (b) =>
      `Portas de Vidro Sob Medida em ${b}: Divisórias Modernas`,
    paragraph: (b, regiao) =>
      `Otimizar o espaço com elegância é o objetivo de quem busca por portas de vidro sob medida em ${b}. Nossas soluções são ideais para dividir a cozinha da área de serviço ou integrar salas e varandas de forma fluida. Atendemos toda a ${regiao} de São Paulo com projetos personalizados de alta qualidade, utilizando sistemas de roldanas aparentes e trilhos modernos que garantem um deslizamento suave e seguro para o seu dia a dia.`,
  },
  {
    id: 2,
    title: (b) =>
      `Portas de Vidro de Correr em ${b}: Linhas Vision e Flex`,
    paragraph: (b, regiao) =>
      `Procurando uma vidraçaria especializada em sistemas de alto padrão em ${b}? A Projeto Vidros leva até a ${regiao} o que há de mais inovador em engenharia de vidros, trabalhando com as renomadas linhas da Ideia Glass, como a Porta Vision, Nobre e Flex. Nossos projetos sob medida utilizam vidro temperado de segurança (8mm ou 10mm) com acabamento impecável, unindo sofisticação e máxima durabilidade para residências e comércios.`,
  },
  {
    id: 3,
    title: (b) =>
      `Instalação de Porta de Vidro Flex e de Abrir em ${b}`,
    paragraph: (b, regiao) =>
      `Apartamentos e ambientes compactos na ${regiao} exigem soluções inteligentes para não perder área de circulação. Se você mora em ${b}, a Projeto Vidros oferece modelos como a Porta Flex (camarão), que proporciona até 90% de abertura do vão. Trabalhamos com fixação precisa, ferragens premium e instalação limpa, garantindo que o seu aproveitamento de espaço seja perfeito e com total isolamento acústico ou visual quando necessário.`,
  },
  {
    id: 4,
    title: (b) => `Fábrica de Portas de Vidro Temperado em ${b}`,
    paragraph: (b, regiao) =>
      `Fabricadas rigorosamente dentro das normas técnicas de segurança, as portas de vidro da Projeto Vidros são sinônimo de resistência na ${regiao}. Atendendo moradores e empresas em ${b}, desenvolvemos portas de correr, de abrir e sistemas versáteis como o Versatik para grandes vãos. Utilizamos silicone neutro e guarnições de alta performance para assegurar uma excelente vedação contra vento e respingos. Solicite fotos de projetos reais da sua região pelo nosso WhatsApp.`,
  },
  {
    id: 5,
    title: (b) => `Vidraçaria de Portas e Divisórias de Vidro em ${b}`,
    paragraph: (b, regiao) =>
      `Com atendimento exclusivo em toda a ${regiao} de São Paulo, a Projeto Vidros é a parceira ideal para o seu projeto de interiores em ${b}. Oferecemos visitas técnicas para medição precisa e um catálogo completo de vidros incolor, jateado, fumê ou opaco. Garanta o melhor custo-benefício em portas residenciais direto de quem entende do assunto. Fale com a nossa equipe local e receba seu orçamento rápido.`,
  },
];

function hash(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

export function pickPortaVariacao(slug: string): PortaBairroVariacao {
  return PORTA_VARIACOES[hash(slug) % PORTA_VARIACOES.length];
}
