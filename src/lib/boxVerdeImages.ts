// Conjunto de imagens reais de portfólio com vidro verde temperado.
const verde1 = "/assets/box-verde/box-verde-1.webp";
const verde2 = "/assets/box-verde/box-verde-2.webp";

export const BOX_VERDE_IMAGES = [
  {
    src: verde1,
    alt: "Box de Banheiro Verde Temperado 8mm – Projeto Vidros Vidraçaria Zona Norte SP",
  },
  {
    src: verde2,
    alt: "Box de Banheiro Verde Temperado 8mm – Projeto Vidros Vidraçaria Zona Norte SP",
  },
];

export function pickRandomBoxVerdeImage(seed?: string) {
  if (seed) {
    let h = 0;
    for (let i = 0; i < seed.length; i++) {
      h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    }
    return BOX_VERDE_IMAGES[h % BOX_VERDE_IMAGES.length];
  }
  return BOX_VERDE_IMAGES[Math.floor(Math.random() * BOX_VERDE_IMAGES.length)];
}
