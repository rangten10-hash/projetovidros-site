import ZonaPageLayout, { ZonaPageData } from "@/components/ZonaPageLayout";
import { SACADA_DIFERENCIAIS, sacadaGaleria } from "./sacadaZonaShared";
import { pickSacadaLinkLabel } from "@/lib/sacadaBairroContent";

const BAIRROS = [
  "Moema", "Vila Mariana", "Campo Belo", "Brooklin", "Morumbi",
  "Santo Amaro", "Ibirapuera", "Saúde", "Jabaquara", "Itaim Bibi",
  "Paraíso", "Panamby", "Interlagos", "Vila Clementino", "Socorro",
];

const slug = (n: string) =>
  n.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const data: ZonaPageData = {
  zonaLabel: "Zona Sul",
  categoria: "envidraçamento de sacada",
  path: "/envidracamento-de-sacadas-zona-sul-sp",
  title: "Envidraçamento de Sacadas Zona Sul SP | Projeto Vidros",
  description:
    "Envidraçamento de sacadas na Zona Sul de SP: cortina de vidro retrátil sob medida para varandas gourmet, com medição grátis.",
  h1: "Envidraçamento de Sacadas na Zona Sul de São Paulo",
  subtitulo:
    "Fechamento de varandas com vidro retrátil sob medida para apartamentos de alto padrão na Zona Sul.",
  intro:
    "A Projeto Vidros executa envidraçamento de sacadas na Zona Sul de São Paulo desde 1991. Atendemos Moema, Vila Mariana, Campo Belo, Brooklin, Morumbi, Itaim Bibi, Santo Amaro e Jabaquara com cortinas de vidro retráteis, sistemas articulados e acabamento premium para varandas gourmet.",
  closing:
    "Cada projeto é dimensionado após medição a laser gratuita, com documentação técnica para aprovação no condomínio e instalação limpa, sem obra. Atendemos toda a Zona Sul e regiões vizinhas da capital.",
  eyebrow: "Sacadas de Vidro Zona Sul SP",
  parentLabel: "Envidraçamento de Sacada",
  parentPath: "/envidracamento-de-sacada",
  serviceName: "Envidraçamento de Sacadas na Zona Sul de São Paulo",
  serviceType:
    "Fechamento de sacadas e varandas com cortina de vidro retrátil sob medida",
  ctaMessage:
    "Olá! Vi o site e gostaria de um orçamento de envidraçamento de sacada na Zona Sul de SP.",
  bairrosHeading: "Envidraçamento de sacada por bairro na Zona Sul",
  galeriaHeading: "Sacadas envidraçadas na Zona Sul de SP",
  ctaHeading: "Peça seu orçamento de envidraçamento de sacada na Zona Sul",
  diferenciais: SACADA_DIFERENCIAIS,
  bairros: BAIRROS.map((nome, i) => ({
    nome: pickSacadaLinkLabel(i + 1, nome),
    to: `/envidracamento-de-sacada/${slug(nome)}`,
  })),
  galeria: sacadaGaleria("zona-sul"),
  faq: [
    {
      q: "Quanto custa envidraçar uma sacada na Zona Sul de SP?",
      a: "O valor depende do vão, do sistema (retrátil ou articulado) e da espessura do vidro. Fazemos medição gratuita e enviamos o orçamento fechado, sem surpresas.",
    },
    {
      q: "Vocês atendem apartamentos de alto padrão em Moema e Itaim Bibi?",
      a: "Sim. Grande parte dos nossos projetos na Zona Sul são varandas gourmet em prédios de alto padrão, com acabamento e ferragens premium.",
    },
    {
      q: "O sistema retrátil abre totalmente?",
      a: "Sim, as folhas deslizam e se recolhem em uma das laterais, liberando quase toda a abertura da sacada em poucos segundos.",
    },
    {
      q: "Qual a manutenção necessária?",
      a: "Basta limpeza periódica dos trilhos e dos vidros. Fazemos também manutenção e troca de roldanas em sistemas já instalados.",
    },
  ],
};

const SacadaZonaSul = () => <ZonaPageLayout data={data} />;

export default SacadaZonaSul;
