// Conteúdo rotativo determinístico para as páginas
// /envidracamento-de-sacada/:bairro — 15 títulos H1 alternados por slug
// para blindar o site contra conteúdo duplicado no Google.

export const SACADA_H1_VARIACOES: ((bairro: string) => string)[] = [
  (b) => `Envidraçamento de Sacada em ${b}`,
  (b) => `Fechamento de Sacada de Vidro em ${b}`,
  (b) => `Cortina de Vidro para Varanda em ${b}`,
  (b) => `Instalação de Envidraçamento de Sacadas em ${b}`,
  (b) => `Sacada de Vidro Retrátil em ${b}`,
  (b) => `Fechamento de Varanda Gourmet em ${b}`,
  (b) => `Empresa de Envidraçamento de Sacada em ${b}`,
  (b) => `Vidraçaria Especializada em Sacadas em ${b}`,
  (b) => `Envidraçamento de Varandas e Sacadas em ${b}`,
  (b) => `Projetos de Cortina de Vidro Sob Medida em ${b}`,
  (b) => `Fechamento de Sacada com Vidro Temperado em ${b}`,
  (b) => `Envidraçamento Articulado para Sacadas em ${b}`,
  (b) => `Manutenção e Envidraçamento de Sacadas em ${b}`,
  (b) => `Envidraçamento de Sacada de Alto Padrão em ${b}`,
  (b) => `Especialista em Fechamento de Varandas em ${b}`,
];

// Variação de palavra-chave usada nos links da grade de bairros.
export const SACADA_LINK_VARIACOES: ((bairro: string) => string)[] = [
  (b) => `Envidraçamento de Sacada em ${b}`,
  (b) => `Fechamento de Sacada em ${b}`,
  (b) => `Cortina de Vidro em ${b}`,
  (b) => `Sacada de Vidro em ${b}`,
];

function hash(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

export function pickSacadaH1(slug: string, bairro: string) {
  return SACADA_H1_VARIACOES[hash(slug) % SACADA_H1_VARIACOES.length](bairro);
}

export function pickSacadaLinkLabel(index: number, bairro: string) {
  return SACADA_LINK_VARIACOES[index % SACADA_LINK_VARIACOES.length](bairro);
}

export function sacadaIntro(bairro: string) {
  return `A Projeto Vidros é referência em envidraçamento de sacadas e fechamento de varandas no bairro ${bairro} e região. Atendemos condomínios residenciais com sistemas sob medida, alta vedação e máxima segurança.`;
}
