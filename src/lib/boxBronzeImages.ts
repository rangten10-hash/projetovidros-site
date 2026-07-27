// Conjunto de imagens reais de portfólio com vidro bronze temperado.
const bronze1 = "/assets/box-bronze/box-bronze-1.webp";
const bronze2 = "/assets/box-bronze/box-bronze-2.webp";

export const BOX_BRONZE_IMAGES = [
  { src: bronze1, alt: "Box de banheiro em vidro bronze temperado com perfil dourado e ripado de madeira" },
  { src: bronze2, alt: "Box de banheiro em vidro bronze temperado com perfil preto e marmorizado claro" },
];

export function pickRandomBoxBronzeImage(seed?: string) {
  if (seed) {
    let h = 0;
    for (let i = 0; i < seed.length; i++) {
      h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    }
    return BOX_BRONZE_IMAGES[h % BOX_BRONZE_IMAGES.length];
  }
  return BOX_BRONZE_IMAGES[Math.floor(Math.random() * BOX_BRONZE_IMAGES.length)];
}
