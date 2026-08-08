import ZonaPageLayout, { ZonaPageData } from "@/components/ZonaPageLayout";
import { SACADA_DIFERENCIAIS, sacadaGaleria } from "./sacadaZonaShared";
import { pickSacadaLinkLabel } from "@/lib/sacadaBairroContent";

const BAIRROS = [
  "Pinheiros", "Perdizes", "Lapa", "Vila Madalena", "Alto de Pinheiros",
  "Pompéia", "Butantã", "Vila Leopoldina", "Barra Funda", "Vila Olímpia",
  "Alphaville", "Barueri", "Osasco", "Cotia", "Santana de Parnaíba",
];

const slug = (n: string) =>
  n.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const data: ZonaPageData = {
  zonaLabel: "Zona Oeste",
  categoria: "envidraçamento de sacada",
  path: "/envidracamento-de-sacadas-zona-oeste-sp",
  title: "Envidraçamento de Sacadas Zona Oeste SP | Projeto Vidros",
  description:
    "Envidraçamento de sacadas na Zona Oeste de SP e Alphaville: cortina de vidro retrátil sob medida com medição grátis.",
  h1: "Envidraçamento de Sacadas na Zona Oeste de São Paulo",
  subtitulo:
    "Fechamento de varandas com cortina de vidro retrátil sob medida na Zona Oeste e Alphaville.",
  intro:
    "A Projeto Vidros é referência em envidraçamento de sacadas na Zona Oeste de São Paulo. Atendemos Pinheiros, Perdizes, Lapa, Vila Madalena, Alto de Pinheiros, Pompéia, Butantã, Vila Leopoldina e Barra Funda, além de Alphaville, Barueri, Osasco e Cotia, com sistemas retráteis em vidro temperado e acabamento de alto padrão.",
  closing:
    "Fazemos medição a laser gratuita, fornecemos memorial técnico para aprovação em condomínio e instalamos com equipe própria, sem obra. Atendemos toda a Zona Oeste e o entorno da Grande São Paulo.",
  eyebrow: "Sacadas de Vidro Zona Oeste SP",
  parentLabel: "Envidraçamento de Sacada",
  parentPath: "/envidracamento-de-sacada",
  serviceName: "Envidraçamento de Sacadas na Zona Oeste de São Paulo",
  serviceType:
    "Fechamento de sacadas e varandas com cortina de vidro retrátil sob medida",
  ctaMessage:
    "Olá! Vi o site e gostaria de um orçamento de envidraçamento de sacada na Zona Oeste de SP.",
  bairrosHeading: "Envidraçamento de sacada por bairro na Zona Oeste",
  galeriaHeading: "Sacadas envidraçadas na Zona Oeste de SP",
  ctaHeading: "Peça seu orçamento de envidraçamento de sacada na Zona Oeste",
  diferenciais: SACADA_DIFERENCIAIS,
  bairros: BAIRROS.map((nome, i) => ({
    nome: pickSacadaLinkLabel(i + 3, nome),
    to: `/envidracamento-de-sacada/${slug(nome)}`,
  })),
  galeria: sacadaGaleria("zona-oeste"),
  faq: [
    {
      q: "Vocês atendem Alphaville e Barueri?",
      a: "Sim. Além da Zona Oeste da capital, atendemos Alphaville, Barueri, Santana de Parnaíba, Osasco e Cotia com o mesmo padrão de projeto e instalação.",
    },
    {
      q: "Qual sistema é indicado para varanda gourmet?",
      a: "O sistema retrátil é o mais procurado: as folhas se recolhem totalmente, integrando a varanda ao ambiente interno quando aberta.",
    },
    {
      q: "A medição tem custo?",
      a: "Não. A medição a laser é gratuita e sem compromisso em toda a Zona Oeste e região de Alphaville.",
    },
    {
      q: "Vocês dão garantia?",
      a: "Sim, garantia sobre ferragens, perfis e mão de obra, com assistência técnica própria.",
    },
  ],
};

const SacadaZonaOeste = () => <ZonaPageLayout data={data} />;

export default SacadaZonaOeste;
