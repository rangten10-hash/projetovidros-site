// Conjunto rotativo de 5 imagens reais de portfólio (vidro fumê).
// Arquivos físicos em /public/assets/box-fume/. Para trocar, basta
// substituir os PNGs mantendo os mesmos nomes (fume-1.webp ... fume-5.png).
export const BOX_FUME_IMAGES = [
  { src: "/assets/box-fume/fume-1.webp", alt: "Box de banheiro fumê de canto com perfil preto premium" },
  { src: "/assets/box-fume/fume-2.webp", alt: "Box de vidro fumê frontal de correr com acabamento preto" },
  { src: "/assets/box-fume/fume-3.webp", alt: "Box de vidro fumê de abrir em banheiro moderno" },
  { src: "/assets/box-fume/fume-4.webp", alt: "Box de vidro fumê com nicho iluminado e pastilhas" },
  { src: "/assets/box-fume/fume-5.png", alt: "Box de vidro fumê compacto sob medida" },
];

// Retorna 1 imagem do conjunto. Quando recebe uma seed (ex.: slug do
// bairro), gera um hash determinístico para manter a mesma foto entre
// re-renders mas distribuir as fotos pelos diferentes bairros.
export function pickRandomBoxFumeImage(seed?: string) {
  if (seed) {
    let h = 0;
    for (let i = 0; i < seed.length; i++) {
      h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    }
    return BOX_FUME_IMAGES[h % BOX_FUME_IMAGES.length];
  }
  return BOX_FUME_IMAGES[Math.floor(Math.random() * BOX_FUME_IMAGES.length)];
}
