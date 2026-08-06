import ZonaPageLayout, { ZonaPageData } from "@/components/ZonaPageLayout";
import elegance from "@/assets/box-elegance.webp";
import tradicional from "@/assets/box-tradicional.webp";
import reto from "@/assets/box-reto.webp";
import flex from "@/assets/box-flex.webp";
import nobre from "@/assets/box-nobre.webp";

const data: ZonaPageData = {
  zonaLabel: "Zona Leste",
  path: "/box-de-vidro-zona-leste",
  title: "Box de Vidro para Banheiro na Zona Leste SP | Projeto Vidros",
  description:
    "Preço direto de fábrica e instalação rápida de box de vidro na Zona Leste SP. Vidro temperado 8mm certificado.",
  h1: "Box de Banheiro Sob Medida na Zona Leste de São Paulo",
  subtitulo:
    "Qualidade, segurança e pontualidade na instalação de box de vidro na Zona Leste.",
  intro:
    "A Projeto Vidros é especialista em box para banheiro na Zona Leste de São Paulo. Desde 1991 atendemos moradores do Tatuapé, Mooca, Anália Franco, Vila Formosa, Belém, Penha, Vila Prudente, Carrão, Itaquera e Aricanduva com instalação profissional, vidro temperado 8mm e película de segurança anti-estilhaço inclusa.",
  closing:
    "Cada projeto é feito sob medida com medição a laser e instalação limpa sem obra. Atendemos também toda a região da Zona Leste e Grande São Paulo. Veja a linha completa de box de banheiro e nossos espelhos sob medida.",
    { nome: "Tatuapé", to: "/box-de-banheiro-tatuape" },
    { nome: "Mooca", to: "/box-de-banheiro-mooca" },
    { nome: "Anália Franco", to: "/box-de-banheiro-analia-franco" },
    { nome: "Vila Formosa", to: "/box-de-banheiro-vila-formosa" },
    { nome: "Belém", to: "/box-de-banheiro-belem" },
    { nome: "Penha", to: "/box-de-banheiro-penha" },
    { nome: "Vila Prudente", to: "/box-de-banheiro-vila-prudente" },
    { nome: "Carrão", to: "/box-de-banheiro-carrao" },
    { nome: "Itaquera", to: "/box-de-banheiro-itaquera" },
    { nome: "Aricanduva", to: "/box-de-banheiro-aricanduva" },
  ],
  galeria: [
    { src: elegance, alt: "box-de-vidro-instalado-zona-leste" },
    { src: tradicional, alt: "box-de-vidro-instalado-zona-leste" },
    { src: reto, alt: "box-de-vidro-instalado-zona-leste" },
    { src: flex, alt: "box-de-vidro-instalado-zona-leste" },
    { src: nobre, alt: "box-de-vidro-instalado-zona-leste" },
  ],
  faq: [
    {
      q: "Qual o prazo de instalação de box na Zona Leste de SP?",
      a: "O prazo varia de 5 a 15 dias úteis após a medição, a depender da complexidade do projeto. A medição a laser é gratuita em toda a Zona Leste.",
    },
    {
      q: "O preço é direto de fábrica?",
      a: "Sim. Fabricamos em produção própria desde 1991, com corte CNC, o que elimina intermediários e reduz o custo final do seu box.",
    },
    {
      q: "Qual vidro vocês utilizam?",
      a: "Vidro temperado de 8mm certificado, com opção de película de segurança anti-estilhaço (Box + Seguro) em todos os modelos.",
    },
    {
      q: "Tem solução para banheiro pequeno?",
      a: "Sim. O Box Flex articulado libera até 90% do vão e é ideal para os banheiros compactos comuns nos apartamentos da Zona Leste.",
    },
  ],
};

const BoxVidroZonaLeste = () => <ZonaPageLayout data={data} />;

export default BoxVidroZonaLeste;
