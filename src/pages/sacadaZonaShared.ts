import sacadaDepois from "@/assets/sacada-depois-envidracada.webp";
import sacadaRetratilCapa from "@/assets/blog-sacada-retratil-capa.webp";
import sacadaRetratilAbrindo from "@/assets/blog-sacada-retratil-abrindo.webp";
import sacadaRetratilFinal from "@/assets/blog-sacada-retratil-final.jpg";
import sacadaUniqueCapa from "@/assets/blog-sacada-unique-capa.webp";
import sacadaUniqueDepois from "@/assets/blog-sacada-unique-depois.jpg";
import cortinaVidro from "@/assets/blog-vidro-acrilico-cortina-capa.webp";

export const SACADA_DIFERENCIAIS = [
  {
    title: "Vidro temperado de alta resistência",
    desc: "Sistemas retráteis e articulados em vidro temperado certificado, com perfis de alumínio anodizado e vedação reforçada.",
  },
  {
    title: "Medição a laser sem custo",
    desc: "Visita técnica gratuita para medir a sacada com precisão milimétrica e apresentar o projeto antes da fabricação.",
  },
  {
    title: "Fabricação própria desde 1991",
    desc: "Produção interna com corte CNC: preço direto de fábrica, prazos reais e peças sob medida para cada varanda.",
  },
  {
    title: "Instalação aprovada em condomínios",
    desc: "Equipe própria acostumada a normas de condomínio, horário de obras e elevador de serviço, com garantia total.",
  },
];

export function sacadaGaleria(zona: string) {
  const alt = (n: number) =>
    `envidracamento-de-sacada-instalado-${zona}-sp-${n}`;
  return [
    { src: sacadaDepois, alt: alt(1) },
    { src: sacadaRetratilCapa, alt: alt(2) },
    { src: sacadaRetratilAbrindo, alt: alt(3) },
    { src: sacadaUniqueCapa, alt: alt(4) },
    { src: sacadaUniqueDepois, alt: alt(5) },
    { src: sacadaRetratilFinal, alt: alt(6) },
    { src: cortinaVidro, alt: alt(7) },
  ];
}
