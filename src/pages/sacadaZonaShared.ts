import sacada1 from "@/assets/sacada-envidracada-149.png.asset.json";
import sacada2 from "@/assets/sacada-envidracada-150.png.asset.json";
import sacada3 from "@/assets/sacada-envidracada-151.png.asset.json";

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
    { src: sacada1.url, alt: alt(1) },
    { src: sacada2.url, alt: alt(2) },
    { src: sacada3.url, alt: alt(3) },
  ];
}
