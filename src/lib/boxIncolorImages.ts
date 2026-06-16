// Conjunto rotativo de 5 imagens reais de portfólio com vidro incolor.
// Importadas via ES modules para serem servidas/hashed pelo Vite.
import elegance from "@/assets/box-elegance.webp";
import tradicional from "@/assets/box-tradicional.webp";
import reto from "@/assets/box-reto.webp";
import flex from "@/assets/box-flex.webp";
import nobre from "@/assets/box-nobre.webp";

export const BOX_INCOLOR_IMAGES = [
  { src: elegance, alt: "Box de banheiro incolor elegance com roldanas aparentes" },
  { src: tradicional, alt: "Box de vidro incolor tradicional de correr em vidro temperado 8mm" },
  { src: reto, alt: "Box de vidro incolor frontal reto com acabamento minimalista" },
  { src: flex, alt: "Box de vidro incolor flex articulado para banheiro compacto" },
  { src: nobre, alt: "Box de vidro incolor com ferragens premium em banheiro moderno" },
];

// Retorna 1 imagem do conjunto. Com seed (ex.: slug do bairro), distribui
// determinísticamente as fotos entre os diferentes bairros.
export function pickRandomBoxIncolorImage(seed?: string) {
  if (seed) {
    let h = 0;
    for (let i = 0; i < seed.length; i++) {
      h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    }
    return BOX_INCOLOR_IMAGES[h % BOX_INCOLOR_IMAGES.length];
  }
  return BOX_INCOLOR_IMAGES[Math.floor(Math.random() * BOX_INCOLOR_IMAGES.length)];
}
