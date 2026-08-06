import ZonaPageLayout, { ZonaPageData } from "@/components/ZonaPageLayout";
import elegance from "@/assets/box-elegance.webp";
import tradicional from "@/assets/box-tradicional.webp";
import reto from "@/assets/box-reto.webp";
import flex from "@/assets/box-flex.webp";
import nobre from "@/assets/box-nobre.webp";

const data: ZonaPageData = {
  zonaLabel: "Zona Sul",
  path: "/box-de-vidro-zona-sul",
  title: "Box de Vidro para Banheiro na Zona Sul SP | Projeto Vidros",
  description:
    "Fabricação e instalação de box de banheiro na Zona Sul de SP. Vidro temperado sob medida, medição rápida e garantia.",
  h1: "Box de Banheiro Sob Medida na Zona Sul de São Paulo",
  subtitulo:
    "Atendimento ágil e instalação profissional de box de vidro temperado na Zona Sul.",
  bairros: [
    { nome: "Moema", to: "/box-de-banheiro-moema" },
    { nome: "Vila Mariana", to: "/box-de-banheiro-vila-mariana" },
    { nome: "Campo Belo", to: "/box-de-banheiro-campo-belo" },
    { nome: "Brooklin", to: "/box-de-banheiro-brooklin" },
    { nome: "Morumbi", to: "/box-de-banheiro-morumbi" },
    { nome: "Santo Amaro", to: "/box-de-banheiro-santo-amaro" },
    { nome: "Ipiranga", to: "/box-de-banheiro-ipiranga" },
    { nome: "Jabaquara", to: "/box-de-banheiro-jabaquara" },
    { nome: "Saúde", to: "/box-de-banheiro-saude" },
    { nome: "Vila Mascote", to: "/box-de-banheiro-vila-mascote" },
  ],
  galeria: [
    { src: elegance, alt: "box-de-vidro-instalado-zona-sul" },
    { src: tradicional, alt: "box-de-vidro-instalado-zona-sul" },
    { src: reto, alt: "box-de-vidro-instalado-zona-sul" },
    { src: flex, alt: "box-de-vidro-instalado-zona-sul" },
    { src: nobre, alt: "box-de-vidro-instalado-zona-sul" },
  ],
  faq: [
    {
      q: "Qual o prazo de instalação de box na Zona Sul de SP?",
      a: "O prazo varia de 5 a 15 dias úteis após a medição, a depender da complexidade do projeto. A medição a laser é gratuita em toda a Zona Sul.",
    },
    {
      q: "Vocês atendem apartamentos de alto padrão na Zona Sul?",
      a: "Sim. Trabalhamos com kits de linhas retas, ferragens premium e vidro temperado 8mm, atendendo condomínios de Moema, Brooklin, Campo Belo, Vila Mariana e região.",
    },
    {
      q: "O box de vidro pode ter película anti-estilhaço?",
      a: "Pode. A tecnologia Box + Seguro aplica película de segurança que retém os fragmentos no caso raro de quebra, evitando acidentes.",
    },
    {
      q: "Como funciona o orçamento?",
      a: "Você envia as medidas aproximadas e fotos pelo WhatsApp, recebe uma estimativa na hora e agendamos a medição a laser sem custo.",
    },
  ],
};

const BoxVidroZonaSul = () => <ZonaPageLayout data={data} />;

export default BoxVidroZonaSul;
