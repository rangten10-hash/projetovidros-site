// Perfis editáveis por bairro. Preencha conforme for levantando dados reais.
// Quando um campo estiver ausente, os componentes de UI degradam para uma
// versão curta e factual — em vez de repetir um molde de marketing genérico.

import { findBairro, ZONA_LABEL, type Zona } from "@/lib/bairros";

export type CategoriaSlug = "fume" | "incolor" | "verde" | "bronze";

export interface CategoriaAngulo {
  label: string;            // "Box Fumê"
  artigo: string;           // "o" / "a"
  beneficio: string;        // "privacidade e sofisticação"
  beneficioCurto: string;   // "privacidade"
  publicoTipico: string;    // "quem busca um banheiro mais reservado"
  acabamentoNota: string;   // observação técnica específica da categoria
}

export const CATEGORIAS: Record<CategoriaSlug, CategoriaAngulo> = {
  fume: {
    label: "Box Fumê",
    artigo: "o",
    beneficio: "privacidade e sofisticação",
    beneficioCurto: "privacidade visual",
    publicoTipico: "moradores que querem um banheiro mais intimista",
    acabamentoNota:
      "o vidro fumê reduz a visibilidade interna sem escurecer o ambiente, valorizando metais escovados e revestimentos amadeirados",
  },
  incolor: {
    label: "Box Incolor",
    artigo: "o",
    beneficio: "amplitude e neutralidade",
    beneficioCurto: "sensação de amplitude",
    publicoTipico: "quem quer ampliar visualmente um banheiro pequeno",
    acabamentoNota:
      "o vidro incolor maximiza a entrada de luz e combina com qualquer paleta de revestimentos, do clássico ao contemporâneo",
  },
  verde: {
    label: "Box Verde",
    artigo: "o",
    beneficio: "estética natural e privacidade suave",
    beneficioCurto: "tom verde sofisticado",
    publicoTipico: "quem busca um banheiro com identidade contemporânea e biofílica",
    acabamentoNota:
      "o vidro verde temperado entrega uma tonalidade discreta que combina com revestimentos amadeirados, marmorizados claros e metais pretos ou dourados",
  },
  bronze: {
    label: "Box Bronze",
    artigo: "o",
    beneficio: "calor visual e elegância clássica",
    beneficioCurto: "tom âmbar sofisticado",
    publicoTipico: "quem prefere ambientes aconchegantes com pegada retrô-moderna",
    acabamentoNota:
      "o vidro bronze temperado traz uma tonalidade quente que valoriza metais dourados, madeira natural e revestimentos em mármore travertino",
  },
};

export interface BairroProfile {
  /** Tipo de imóvel predominante: "apartamentos", "sobrados", "condomínios horizontais"… */
  imovelPredominante?: string;
  /** Observação técnica vista em campo (não-marketing). */
  observacaoTecnica?: string;
  /** Prazo real de instalação para a região, se diferente do padrão. Ex: "5 a 7 dias úteis". */
  prazoInstalacao?: string;
  /** Categoria mais vendida naquele bairro (para meta description). */
  categoriaDestaque?: CategoriaSlug;
  /** Diferencial concreto a citar na meta (prazo, modelo, condição). */
  diferencial?: string;
  /** Minutos médios de deslocamento da base até o bairro (fallback factual). */
  tempoDeslocamentoMin?: number;
}

/**
 * Prazo padrão usado quando o bairro não tem prazo próprio cadastrado.
 * Mantemos um único valor — não vamos inventar variação artificial entre bairros.
 */
export const PRAZO_PADRAO = "3 a 7 dias úteis após a medição";

/**
 * Preencha aqui os bairros conforme for levantando dados. Bairros ausentes
 * recebem a versão curta e factual. Os exemplos abaixo ilustram o formato.
 */
export const BAIRRO_PROFILES: Record<string, BairroProfile> = {
  // Zona Norte
  santana: {
    imovelPredominante: "apartamentos de médio e alto padrão e prédios modernos",
    observacaoTecnica: "alta demanda por box flex articulado devido a vãos compactos planejados",
    prazoInstalacao: "5 dias úteis após a medição",
    categoriaDestaque: "incolor",
    diferencial: "atendimento ágil por estarmos colados à região central de Santana",
    tempoDeslocamentoMin: 12,
  },
  tucuruvi: {
    imovelPredominante: "novos condomínios residenciais próximos ao metrô e sobrados",
    observacaoTecnica: "projetos de box até o teto com forte retenção de vapor e modelos elegance",
    prazoInstalacao: "6 dias úteis após a medição",
    categoriaDestaque: "fume",
    diferencial: "medição a laser agendada com precisão para os novos condomínios da região",
    tempoDeslocamentoMin: 18,
  },
  "parada-inglesa": {
    imovelPredominante: "apartamentos residenciais novos e coberturas",
    observacaoTecnica: "instalações sob medida integradas com revestimentos premium e nichos",
    prazoInstalacao: "5 dias úteis após a medição",
    categoriaDestaque: "incolor",
    diferencial: "equipe técnica local com deslocamento imediato para vistorias",
    tempoDeslocamentoMin: 15,
  },
  mandaqui: {
    imovelPredominante: "sobrados em ruas residenciais e condomínios horizontais",
    observacaoTecnica: "vãos de banheiros mais amplos e projetos de box de canto em L",
    prazoInstalacao: "6 dias úteis após a medição",
    categoriaDestaque: "fume",
    diferencial: "forte atuação regional com instalação limpa e sem quebra-quebra",
    tempoDeslocamentoMin: 20,
  },
  "casa-verde": {
    imovelPredominante: "prédios de médio padrão e casas comerciais",
    observacaoTecnica: "projetos de box de correr tradicionais com roldanas embutidas",
    prazoInstalacao: "5 dias úteis após a medição",
    categoriaDestaque: "incolor",
    diferencial: "vistas técnicas agendadas no mesmo período da chamada do cliente",
    tempoDeslocamentoMin: 22,
  },
  limao: {
    imovelPredominante: "apartamentos novos de construtoras e sobrados antigos",
    observacaoTecnica: "ajuste fino de prumo em paredes antigas com medição computadorizada",
    prazoInstalacao: "6 dias úteis após a medição",
    categoriaDestaque: "incolor",
    diferencial: "vedação de silicone anti-fungo especial inclusa no projeto",
    tempoDeslocamentoMin: 25,
  },
  jacana: {
    imovelPredominante: "casas térreas residenciais e sobrados",
    observacaoTecnica: "vãos que exigem perfis de alumínio reforçados e vidros normatizados",
    prazoInstalacao: "7 dias úteis após a medição",
    categoriaDestaque: "fume",
    diferencial: "atendimento focado na segurança de residências familiares da região",
    tempoDeslocamentoMin: 28,
  },
  "vila-maria": {
    imovelPredominante: "galpões comerciais, sobrados e novos condomínios verticais",
    observacaoTecnica: "projetos robustos com ferragens de alta performance contra impactos",
    prazoInstalacao: "6 dias úteis após a medição",
    categoriaDestaque: "incolor",
    diferencial: "logística facilitada pelo acesso direto às principais avenidas da região",
    tempoDeslocamentoMin: 19,
  },
  "lauzane-paulista": {
    imovelPredominante: "apartamentos compactos e residenciais verticais",
    observacaoTecnica: "forte aplicação de sistemas camarão/flex para otimizar espaço atrás da porta",
    prazoInstalacao: "5 dias úteis após a medição",
    categoriaDestaque: "incolor",
    diferencial: "projetos sob medida ideais para o perfil dos imóveis da região do shopping",
    tempoDeslocamentoMin: 14,
  },
  "horto-florestal": {
    imovelPredominante: "casas de alto padrão, coberturas e condomínios de luxo",
    observacaoTecnica: "projetos de box elegance com roldanas de inox e box piso-teto com engenharia fina",
    prazoInstalacao: "7 dias úteis após a medição",
    categoriaDestaque: "fume",
    diferencial: "acabamento premium focado em projetos assinados por arquitetos da região",
    tempoDeslocamentoMin: 16,
  },
  tremembe: {
    imovelPredominante: "chácaras urbanas, casas em condomínio fechado e sobrados",
    observacaoTecnica: "vãos customizados de grandes dimensões que exigem vidros de engenharia",
    prazoInstalacao: "7 dias úteis após a medição",
    categoriaDestaque: "fume",
    diferencial: "atendimento especializado para grandes vãos e projetos diferenciados",
    tempoDeslocamentoMin: 22,
  },
  "vila-guilherme": {
    imovelPredominante: "apartamentos residenciais modernos e conjuntos comerciais",
    observacaoTecnica: "aplicação da película Box + Seguro contra acidentes térmicos em prédios",
    prazoInstalacao: "5 dias úteis após a medição",
    categoriaDestaque: "incolor",
    diferencial: "equipe técnica de prontidão para medição na mesma semana do contato",
    tempoDeslocamentoMin: 17,
  },
  // Zonas variadas (mantidos)
  moema: {
    imovelPredominante: "apartamentos de médio e alto padrão",
    observacaoTecnica: "vãos amplos e pés-direitos altos em prédios reformados",
    prazoInstalacao: "3 a 5 dias úteis após a medição",
    categoriaDestaque: "incolor",
    diferencial: "medição digital a laser sem custo",
    tempoDeslocamentoMin: 25,
  },
  tatuape: {
    imovelPredominante: "apartamentos novos e sobrados reformados",
    observacaoTecnica: "muitos vãos com revestimento porcelanato grande formato",
    prazoInstalacao: "4 a 6 dias úteis após a medição",
    categoriaDestaque: "fume",
    diferencial: "perfis em alumínio preto fosco em estoque",
    tempoDeslocamentoMin: 35,
  },
  alphaville: {
    imovelPredominante: "condomínios horizontais e sobrados de alto padrão",
    observacaoTecnica: "instalações em sacadas integradas e banheiros suítes amplos",
    categoriaDestaque: "fume",
    diferencial: "atendimento técnico dedicado para condomínios fechados",
    tempoDeslocamentoMin: 55,
  },
};

export function getBairroProfile(slug: string): BairroProfile | undefined {
  return BAIRRO_PROFILES[slug];
}

// ---------- Helpers de geração de texto -------------------------------------

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/**
 * Constrói um parágrafo de "Atendimento na Região" combinando variáveis reais.
 * - Com dados completos: monta frases distintas (não molde com nome trocado).
 * - Sem dados: degrada para bloco curto e factual (zona + tempo médio).
 */
export function buildAtendimentoTexto(slug: string, categoria: CategoriaSlug) {
  const bairro = findBairro(slug);
  const profile = getBairroProfile(slug);
  const cat = CATEGORIAS[categoria];
  if (!bairro) return null;

  const zonaLabel = ZONA_LABEL[bairro.zona as Zona];

  // Sem dados específicos: bloco factual e curto.
  if (!profile || (!profile.imovelPredominante && !profile.observacaoTecnica)) {
    const tempo = profile?.tempoDeslocamentoMin;
    const partes = [
      `${bairro.nome} fica na ${zonaLabel} de São Paulo.`,
      tempo
        ? `Da nossa base até a região, o deslocamento médio é de cerca de ${tempo} minutos.`
        : "Atendemos toda a região com medição agendada por WhatsApp.",
    ];
    return { tipo: "factual" as const, texto: partes.join(" "), profile, bairro };
  }

  // Com dados: três variações de redação, escolhidas por hash do slug.
  const variante = hashSlug(slug) % 3;
  const imovel = profile.imovelPredominante!;
  const obs = profile.observacaoTecnica;

  const frasesComObs = [
    `Em ${bairro.nome}, a maior parte dos projetos que entregamos é em ${imovel}, onde ${obs}. Para esses casos ${cat.artigo} ${cat.label.toLowerCase()} entrega ${cat.beneficio}, justamente o que ${cat.publicoTipico} costuma pedir aqui na região.`,
    `O perfil dos imóveis em ${bairro.nome} — predominantemente ${imovel}, com ${obs} — pede uma especificação cuidadosa. Trabalhamos ${cat.label.toLowerCase()} na região porque ${cat.acabamentoNota}.`,
    `Atendemos ${bairro.nome} com foco em ${imovel}. Um detalhe que costumamos encontrar: ${obs}. Por isso ${cat.label.toLowerCase()} se encaixa bem aqui — entrega ${cat.beneficioCurto} sem comprometer a estética do projeto.`,
  ];

  const frasesSemObs = [
    `Em ${bairro.nome} atendemos majoritariamente ${imovel}. Para esse perfil ${cat.label.toLowerCase()} costuma ser a escolha mais coerente, por entregar ${cat.beneficio}.`,
    `Os clientes de ${bairro.nome} são em geral moradores de ${imovel}. Nesse contexto ${cat.acabamentoNota}.`,
    `${bairro.nome} concentra ${imovel}. ${cat.label} é uma opção comum por aqui — combina ${cat.beneficioCurto} com manutenção fácil.`,
  ];

  const texto = (obs ? frasesComObs : frasesSemObs)[variante];
  return { tipo: "rico" as const, texto, profile, bairro };
}

/**
 * Itens de FAQ específicos do bairro + categoria. Quando não há dado próprio,
 * a resposta é honesta ("igual para todos os bairros") em vez de inventar.
 */
export function buildBairroFaq(slug: string, categoria: CategoriaSlug) {
  const bairro = findBairro(slug);
  const cat = CATEGORIAS[categoria];
  if (!bairro) return [];

  const itens: { q: string; a: string }[] = [];

  // 1) Prazo de instalação — resposta padrão unificada
  itens.push({
    q: `Qual o prazo de instalação de ${cat.label.toLowerCase()} em ${bairro.nome}?`,
    a: `O prazo varia de 10 dias úteis para modelos de box padrão ou até 20 dias úteis para projetos totalmente personalizados. Esse prazo é unificado para toda a nossa área de atendimento em São Paulo, pois priorizamos a máxima transparência com nossos clientes em vez de criar variações artificiais por bairro.`,
  });

  // 2) Tipo de imóvel — resposta padrão unificada
  itens.push({
    q: `Que tipo de imóvel vocês atendem em ${bairro.nome}?`,
    a: `Atendemos todos os perfis de imóveis na região, incluindo apartamentos, casas, empresas e lojas. Nossa equipe técnica é altamente capacitada tanto para instalações residenciais quanto para projetos comerciais sob medida.`,
  });

  // 3) Pergunta específica por categoria
  if (categoria === "incolor") {
    itens.push({
      q: `Box Incolor é a opção mais procurada em ${bairro.nome}?`,
      a: `Sim. Entre os pedidos que recebemos, o box incolor é o que aparece com maior frequência, principalmente por entregar uma sensação de amplitude ao ambiente, leveza visual e total neutralidade com qualquer tipo de revestimento.`,
    });
  } else if (categoria === "fume") {
    itens.push({
      q: `Box Fumê é uma opção muito procurada em ${bairro.nome}?`,
      a: `Sim. O box fumê é altamente procurado por clientes que buscam um design moderno, sofisticado e, acima de tudo, privacidade discreta no momento do banho, filtrando a luz de forma elegante.`,
    });
  } else if (categoria === "verde") {
    itens.push({
      q: `Box Verde combina com banheiros em ${bairro.nome}?`,
      a: `Sim. O box verde temperado vem sendo bastante pedido por entregar uma tonalidade natural e elegante, que conversa muito bem com revestimentos amadeirados, marmorizados claros e metais pretos ou dourados — uma escolha contemporânea e fora do óbvio.`,
    });
  } else if (categoria === "bronze") {
    itens.push({
      q: `Box Bronze ainda é uma boa escolha em ${bairro.nome}?`,
      a: `Sim. O box bronze é um clássico que voltou com força: entrega calor visual e sofisticação, valorizando ambientes com metais dourados, madeira natural e mármores em tons quentes. É a escolha ideal para quem busca um banheiro aconchegante e atemporal.`,
    });
  }

  return itens;
}

/**
 * Meta description combinada: bairro + categoria em destaque (se houver) +
 * diferencial concreto. Sempre combina pelo menos 2 variáveis reais.
 */
export function buildBairroMetaDescription(
  slug: string,
  categoriaAtual: CategoriaSlug,
): string {
  const bairro = findBairro(slug);
  const profile = getBairroProfile(slug);
  const cat = CATEGORIAS[categoriaAtual];
  if (!bairro) return "";

  const destaque =
    profile?.categoriaDestaque && profile.categoriaDestaque !== categoriaAtual
      ? ` ${CATEGORIAS[profile.categoriaDestaque].label} é a linha mais pedida na região.`
      : "";

  const diferencial = profile?.diferencial
    ? ` Diferencial em ${bairro.nome}: ${profile.diferencial}.`
    : "";

  const prazo = profile?.prazoInstalacao
    ? ` Prazo de ${profile.prazoInstalacao}.`
    : "";

  const imovel = profile?.imovelPredominante
    ? ` Experiência em ${profile.imovelPredominante}.`
    : "";

  // Garante combinação de >=2 variáveis reais quando há perfil. Caso contrário,
  // gera uma meta curta sem fórmula promocional.
  const variaveis = [diferencial, prazo, imovel, destaque].filter(Boolean);
  if (variaveis.length === 0) {
    return `${cat.label} em ${bairro.nome} — vidro temperado 8mm, medição digital a laser e orçamento pelo WhatsApp.`;
  }

  const corpo = variaveis.slice(0, 2).join("").trim();
  return `${cat.label} em ${bairro.nome}.${corpo} Orçamento rápido pelo WhatsApp.`.replace(/\s+/g, " ");
}
