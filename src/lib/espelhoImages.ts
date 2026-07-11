import espelho1 from "@/assets/espelho-1.webp";
import espelho2 from "@/assets/espelho-2.webp";
import espelho3 from "@/assets/espelho-3.webp";
import espelho4 from "@/assets/espelho-4.webp";
import espelho5 from "@/assets/espelho-5.webp";
import espelho6 from "@/assets/espelho-6.webp";
import espelho7 from "@/assets/espelho-7.webp";
import espelho8 from "@/assets/espelho-8.webp";

export const ESPELHO_IMAGES = [
  { src: espelho1, alt: "Espelho decorativo sob medida instalado em parede" },
  { src: espelho2, alt: "Espelho de banheiro lapidado sob medida" },
  { src: espelho3, alt: "Espelho bisotê decorativo em sala de estar" },
  { src: espelho4, alt: "Espelho de parede inteira em hall de entrada" },
  { src: espelho5, alt: "Espelho sob medida em lavabo moderno" },
  { src: espelho6, alt: "Espelho decorativo com acabamento lapidado" },
  { src: espelho7, alt: "Espelho grande formato instalado em ambiente residencial" },
  { src: espelho8, alt: "Espelho sob medida em ambiente contemporâneo" },
];

function hash(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

export function pickEspelhoImage(seed?: string) {
  if (seed) return ESPELHO_IMAGES[hash(seed) % ESPELHO_IMAGES.length];
  return ESPELHO_IMAGES[Math.floor(Math.random() * ESPELHO_IMAGES.length)];
}

export function pickEspelhoImagePair(seed: string) {
  const a = hash(seed) % ESPELHO_IMAGES.length;
  let b = hash(seed + "-b") % ESPELHO_IMAGES.length;
  if (b === a) b = (a + 3) % ESPELHO_IMAGES.length;
  return [ESPELHO_IMAGES[a], ESPELHO_IMAGES[b]] as const;
}
