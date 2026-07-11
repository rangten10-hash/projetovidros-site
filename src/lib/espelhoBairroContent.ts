// 5 variações de conteúdo rotativo para páginas /espelhos/:bairro.
// A escolha é determinística por slug — mesmo bairro sempre gera o mesmo
// texto, mas os 5 modelos se distribuem entre os bairros para blindar o
// site contra conteúdo duplicado no Google.

export interface EspelhoBairroVariacao {
  id: number;
  title: (bairro: string) => string;
  paragraph: (bairro: string, regiao: string) => string;
}

export const ESPELHO_VARIACOES: EspelhoBairroVariacao[] = [
  {
    id: 1,
    title: (b) =>
      `Espelhos Sob Medida em ${b}: Amplitude e Elegância para seu Ambiente`,
    paragraph: (b, regiao) =>
      `Quem está decorando ou reformando em ${b} sabe que cada detalhe conta para valorizar o imóvel. Os espelhos sob medida da Projeto Vidros são perfeitos para criar uma sensação de amplitude e maximizar a iluminação natural do espaço. Atendemos toda a ${regiao} de São Paulo com projetos personalizados, garantindo uma instalação segura, rápida e com acabamento impecável em bisotê ou lapidação reta. Transforme sua sala, quarto ou hall com sofisticação local.`,
  },
  {
    id: 2,
    title: (b) =>
      `Fábrica de Espelhos em ${b}: Projetos Decorativos Personalizados`,
    paragraph: (b, regiao) =>
      `Procurando uma vidraçaria de confiança para instalar espelhos em ${b}? A Projeto Vidros une tecnologia e tradição para entregar peças cortadas exatamente na medida da sua necessidade. Seja para um espelho de parede inteira na sala de jantar ou um modelo iluminado, nossa equipe atende a ${regiao} levando materiais de primeira linha, como os espelhos Cebrace e Guardian. Agende uma visita técnica e comprove nossa agilidade na entrega.`,
  },
  {
    id: 3,
    title: (b) => `Espelho para Banheiro e Ambientes Internos em ${b}`,
    paragraph: (b, regiao) =>
      `O banheiro e o lavabo ganham vida nova com o espelho certo. Para os moradores de ${b}, a Projeto Vidros oferece modelos com tratamento especial antiumidade, evitando manchas precoce na prata do espelho. Atuamos fortemente na ${regiao} com instalação residencial e comercial, combinando perfeitamente o design do seu espelho com o seu box de vidro. Conte com nossa equipe especializada para um acabamento perfeito.`,
  },
  {
    id: 4,
    title: (b) => `Espelhos Decorativos e Modernos na Região de ${b}`,
    paragraph: (b, regiao) =>
      `Os espelhos deixaram de ser itens funcionais para se tornarem os protagonistas da arquitetura moderna na ${regiao}. Se você reside em ${b}, conte com as soluções sob medida da Projeto Vidros. Desenvolvemos desde grandes painéis de espelho para salas e academias até modelos lapidados exclusivos. Nossa instalação é limpa, precisa e segue rigorosamente todas as normas técnicas de segurança.`,
  },
  {
    id: 5,
    title: (b) => `Vidraçaria Especialista em Espelhos em ${b}`,
    paragraph: (b, regiao) =>
      `Atendendo de forma exclusiva a ${regiao} de São Paulo, a Projeto Vidros leva até ${b} o melhor custo-benefício em espelhos decorativos. Criamos projetos que valorizam a arquitetura interna do seu lar ou comércio, utilizando colagem com silicone neutro que não agride a estrutura do vidro. Peça seu orçamento pelo WhatsApp de forma prática e tenha o atendimento de uma equipe que já é referência na região.`,
  },
];

function hash(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

export function pickEspelhoVariacao(slug: string): EspelhoBairroVariacao {
  return ESPELHO_VARIACOES[hash(slug) % ESPELHO_VARIACOES.length];
}
