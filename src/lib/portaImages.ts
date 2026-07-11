import portaVision from "@/assets/porta-vision.webp";
import portaNobre from "@/assets/porta-nobre.webp";
import portaCerto from "@/assets/porta-certo.webp";
import portaFlex from "@/assets/porta-flex.webp";
import portaAbrir from "@/assets/porta-abrir.webp";
import portaCorrer from "@/assets/porta-correr.webp";
import portaVersatik from "@/assets/porta-versatik.webp";

export const PORTA_IMAGES = [
  { src: portaVision, alt: "Porta de vidro Vision com sistema de correr e roldanas aparentes" },
  { src: portaNobre, alt: "Porta de vidro Nobre com amortecedores e acabamento premium" },
  { src: portaCerto, alt: "Porta de vidro Certo com sistema semi automático" },
  { src: portaFlex, alt: "Porta de vidro Flex articulada tipo camarão" },
  { src: portaAbrir, alt: "Porta de vidro temperado de abrir com dobradiças" },
  { src: portaCorrer, alt: "Porta de vidro temperado de correr sob medida" },
  { src: portaVersatik, alt: "Porta de vidro Versatik com sistema de correr sobreposto" },
];

function hash(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

export function pickPortaImagePair(seed: string) {
  const a = hash(seed) % PORTA_IMAGES.length;
  let b = hash(seed + "-b") % PORTA_IMAGES.length;
  if (b === a) b = (a + 3) % PORTA_IMAGES.length;
  return [PORTA_IMAGES[a], PORTA_IMAGES[b]] as const;
}
