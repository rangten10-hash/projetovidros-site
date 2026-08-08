import ZonaPageLayout, { ZonaPageData } from "@/components/ZonaPageLayout";
import { SACADA_DIFERENCIAIS, sacadaGaleria } from "./sacadaZonaShared";
import { pickSacadaLinkLabel } from "@/lib/sacadaBairroContent";

const BAIRROS = [
  "Santana", "Tucuruvi", "Mandaqui", "Imirim", "Horto Florestal",
  "Tremembé", "Casa Verde", "Vila Nova Cachoeirinha", "Freguesia do Ó",
  "Pirituba", "Jaçanã", "Vila Guilherme", "Vila Maria", "Parada Inglesa",
  "Lauzane Paulista",
];

const slug = (n: string) =>
  n.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const data: ZonaPageData = {
  zonaLabel: "Zona Norte",
  categoria: "envidraçamento de sacada",
  path: "/envidracamento-de-sacadas-zona-norte-sp",
  title: "Envidraçamento de Sacadas Zona Norte SP | Projeto Vidros",
  description:
    "Envidraçamento de sacadas na Zona Norte de SP: cortina de vidro retrátil sob medida, medição grátis e instalação garantida.",
  h1: "Envidraçamento de Sacadas na Zona Norte de São Paulo",
  subtitulo:
    "Cortinas de vidro retráteis e sistemas articulados sob medida para varandas na Zona Norte.",
  intro:
    "A Projeto Vidros é especialista em envidraçamento de sacadas na Zona Norte de São Paulo. Desde 1991 fechamos varandas em Santana, Tucuruvi, Mandaqui, Imirim, Horto Florestal, Casa Verde, Freguesia do Ó e Pirituba com sistemas retráteis de vidro temperado, perfis de alumínio anodizado e vedação contra chuva, vento e ruído.",
  closing:
    "Atendemos apartamentos, coberturas e varandas gourmet em toda a Zona Norte e na Grande São Paulo, incluindo Guarulhos. Fazemos medição a laser gratuita, entregamos o projeto aprovado pelo condomínio e instalamos sem obra e sem sujeira.",
  eyebrow: "Sacadas de Vidro Zona Norte SP",
  parentLabel: "Envidraçamento de Sacada",
  parentPath: "/envidracamento-de-sacada",
  serviceName: "Envidraçamento de Sacadas na Zona Norte de São Paulo",
  serviceType:
    "Fechamento de sacadas e varandas com cortina de vidro retrátil sob medida",
  ctaMessage:
    "Olá! Vi o site e gostaria de um orçamento de envidraçamento de sacada na Zona Norte de SP.",
  bairrosHeading: "Envidraçamento de sacada por bairro na Zona Norte",
  galeriaHeading: "Sacadas envidraçadas na Zona Norte de SP",
  ctaHeading: "Peça seu orçamento de envidraçamento de sacada na Zona Norte",
  diferenciais: SACADA_DIFERENCIAIS,
  bairros: BAIRROS.map((nome, i) => ({
    nome: pickSacadaLinkLabel(i, nome),
    to: `/envidracamento-de-sacada/${slug(nome)}`,
  })),
  galeria: sacadaGaleria("zona-norte"),
  faq: [
    {
      q: "Qual o prazo de instalação de envidraçamento de sacada na Zona Norte?",
      a: "Após a medição, o prazo médio é de 15 a 30 dias úteis, dependendo do sistema escolhido e do tamanho da varanda. A medição é gratuita em toda a Zona Norte.",
    },
    {
      q: "O envidraçamento retrátil precisa de autorização do condomínio?",
      a: "Sim, a maioria dos condomínios exige aprovação prévia. Fornecemos ficha técnica e memorial do sistema para facilitar a liberação em prédios de Santana, Tucuruvi e região.",
    },
    {
      q: "A cortina de vidro veda chuva e vento?",
      a: "Sim. Utilizamos escovas e borrachas de vedação em todos os perfis, reduzindo entrada de água, poeira e ruído da rua.",
    },
    {
      q: "Vocês atendem Guarulhos e cidades vizinhas?",
      a: "Atendemos toda a Zona Norte de São Paulo e também Guarulhos e demais cidades da Grande São Paulo.",
    },
  ],
};

const SacadaZonaNorte = () => <ZonaPageLayout data={data} />;

export default SacadaZonaNorte;
