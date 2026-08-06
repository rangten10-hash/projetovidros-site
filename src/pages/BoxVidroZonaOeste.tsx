import ZonaPageLayout, { ZonaPageData } from "@/components/ZonaPageLayout";
import elegance from "@/assets/box-elegance.webp";
import tradicional from "@/assets/box-tradicional.webp";
import reto from "@/assets/box-reto.webp";
import flex from "@/assets/box-flex.webp";
import nobre from "@/assets/box-nobre.webp";

const data: ZonaPageData = {
  zonaLabel: "Zona Oeste",
  path: "/box-de-vidro-zona-oeste",
  title: "Box de Vidro para Banheiro na Zona Oeste SP | Projeto Vidros",
  description:
    "Box de vidro para banheiro na Zona Oeste de SP. Modelos elegantes, roldanas aparentes, articulados e sob medida.",
  h1: "Box de Banheiro Sob Medida na Zona Oeste de São Paulo",
  subtitulo:
    "Projetos exclusivos em vidro temperado com medição sem custo para a Zona Oeste.",
  bairros: [
    { nome: "Pinheiros", to: "/box-de-banheiro-pinheiros" },
    { nome: "Perdizes", to: "/box-de-banheiro-perdizes" },
    { nome: "Lapa", to: "/box-de-banheiro-lapa" },
    { nome: "Vila Madalena", to: "/box-de-banheiro-vila-madalena" },
    { nome: "Alto de Pinheiros", to: "/box-de-banheiro-alto-de-pinheiros" },
    { nome: "Pompéia", to: "/box-de-banheiro-pompeia" },
    { nome: "Butantã", to: "/box-de-banheiro-butanta" },
    { nome: "Vila Leopoldina", to: "/box-de-banheiro-vila-leopoldina" },
    { nome: "Jaguaré", to: "/box-de-banheiro-jaguare" },
    { nome: "Barra Funda", to: "/box-de-banheiro-barra-funda" },
  ],
  galeria: [
    { src: elegance, alt: "box-de-vidro-instalado-zona-oeste" },
    { src: tradicional, alt: "box-de-vidro-instalado-zona-oeste" },
    { src: reto, alt: "box-de-vidro-instalado-zona-oeste" },
    { src: flex, alt: "box-de-vidro-instalado-zona-oeste" },
    { src: nobre, alt: "box-de-vidro-instalado-zona-oeste" },
  ],
  faq: [
    {
      q: "Qual o prazo de instalação de box na Zona Oeste de SP?",
      a: "O prazo varia de 5 a 15 dias úteis após a medição, a depender da complexidade do projeto. A medição a laser é gratuita em toda a Zona Oeste.",
    },
    {
      q: "Quais modelos são mais procurados na Zona Oeste?",
      a: "Box com roldanas aparentes, box articulado flex para banheiros compactos e box de kit reto minimalista são os favoritos em Pinheiros, Perdizes e Vila Madalena.",
    },
    {
      q: "Vocês instalam em apartamentos com poucas opções de acesso?",
      a: "Sim. Nossa equipe é habituada a prédios com restrição de horário e elevador de serviço, fazendo instalação limpa e sem obra.",
    },
    {
      q: "A medição tem custo?",
      a: "Não. A medição a laser é gratuita e sem compromisso em toda a Zona Oeste de São Paulo.",
    },
  ],
};

const BoxVidroZonaOeste = () => <ZonaPageLayout data={data} />;

export default BoxVidroZonaOeste;
