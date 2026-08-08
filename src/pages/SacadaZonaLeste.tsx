import ZonaPageLayout, { ZonaPageData } from "@/components/ZonaPageLayout";
import { SACADA_DIFERENCIAIS, sacadaGaleria } from "./sacadaZonaShared";
import { pickSacadaLinkLabel } from "@/lib/sacadaBairroContent";

const BAIRROS = [
  "Tatuapé", "Mooca", "Anália Franco", "Vila Formosa", "Penha",
  "Belém", "Vila Prudente", "Vila Carrão", "Ipiranga", "Aricanduva",
  "Itaquera", "Água Rasa", "Jardim Anália Franco", "Carrão", "Chácara Klabin",
];

const slug = (n: string) =>
  n.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const data: ZonaPageData = {
  zonaLabel: "Zona Leste",
  categoria: "envidraçamento de sacada",
  path: "/envidracamento-de-sacadas-zona-leste-sp",
  title: "Envidraçamento de Sacadas Zona Leste SP | Projeto Vidros",
  description:
    "Envidraçamento de sacadas na Zona Leste de SP: fechamento de varanda com vidro retrátil sob medida, medição grátis e garantia.",
  h1: "Envidraçamento de Sacadas na Zona Leste de São Paulo",
  subtitulo:
    "Cortina de vidro retrátil e fechamento de varandas sob medida para apartamentos da Zona Leste.",
  intro:
    "A Projeto Vidros faz envidraçamento de sacadas na Zona Leste de São Paulo com fabricação própria desde 1991. Atendemos Tatuapé, Mooca, Anália Franco, Vila Formosa, Penha, Belém, Vila Prudente, Vila Carrão e Ipiranga com sistemas retráteis em vidro temperado, perfis de alumínio e vedação reforçada contra chuva e ruído.",
  closing:
    "Trabalhamos com medição a laser gratuita, projeto pronto para aprovação em condomínio e instalação rápida, sem quebra-quebra. Atendemos toda a Zona Leste da capital e a Grande São Paulo.",
  eyebrow: "Sacadas de Vidro Zona Leste SP",
  parentLabel: "Envidraçamento de Sacada",
  parentPath: "/envidracamento-de-sacada",
  serviceName: "Envidraçamento de Sacadas na Zona Leste de São Paulo",
  serviceType:
    "Fechamento de sacadas e varandas com cortina de vidro retrátil sob medida",
  ctaMessage:
    "Olá! Vi o site e gostaria de um orçamento de envidraçamento de sacada na Zona Leste de SP.",
  bairrosHeading: "Envidraçamento de sacada por bairro na Zona Leste",
  galeriaHeading: "Sacadas envidraçadas na Zona Leste de SP",
  ctaHeading: "Peça seu orçamento de envidraçamento de sacada na Zona Leste",
  diferenciais: SACADA_DIFERENCIAIS,
  bairros: BAIRROS.map((nome, i) => ({
    nome: pickSacadaLinkLabel(i + 2, nome),
    to: `/envidracamento-de-sacada/${slug(nome)}`,
  })),
  galeria: sacadaGaleria("zona-leste"),
  faq: [
    {
      q: "Vocês instalam envidraçamento de sacada no Tatuapé e na Mooca?",
      a: "Sim. Tatuapé, Mooca, Anália Franco e Vila Formosa estão entre as regiões que mais atendemos na Zona Leste, com medição gratuita.",
    },
    {
      q: "Qual o prazo do serviço na Zona Leste?",
      a: "De 10 a 20 dias úteis após a medição e a aprovação do projeto, conforme o sistema escolhido.",
    },
    {
      q: "Dá para envidraçar sacada pequena?",
      a: "Sim. Produzimos sob medida, inclusive para sacadas compactas, com folhas dimensionadas para o vão disponível.",
    },
    {
      q: "O vidro é seguro para crianças e pets?",
      a: "Usamos vidro temperado certificado e podemos aplicar película de segurança anti-estilhaço, aumentando a proteção da família.",
    },
  ],
};

const SacadaZonaLeste = () => <ZonaPageLayout data={data} />;

export default SacadaZonaLeste;
