import img131 from "@/assets/box-fume/box-fume-131.png.asset.json";
import img132 from "@/assets/box-fume/box-fume-132.png.asset.json";
import img133 from "@/assets/box-fume/box-fume-133.png.asset.json";
import img134 from "@/assets/box-fume/box-fume-134.png.asset.json";
import img135 from "@/assets/box-fume/box-fume-135.png.asset.json";

// Conjunto rotativo de 5 imagens reais de portfólio (vidro fumê).
// Para trocar/adicionar fotos, basta substituir os arquivos
// em src/assets/box-fume/ (formato .asset.json gerado pelo CDN).
export const BOX_FUME_IMAGES = [
  { src: img131.url, alt: "Box de banheiro fumê de canto com perfil preto premium" },
  { src: img132.url, alt: "Box de vidro fumê frontal de correr com acabamento preto" },
  { src: img133.url, alt: "Box de vidro fumê de abrir em banheiro moderno" },
  { src: img134.url, alt: "Box de vidro fumê com nicho iluminado e pastilhas" },
  { src: img135.url, alt: "Box de vidro fumê compacto sob medida" },
];

// Retorna 1 imagem aleatória do conjunto. Usado tanto pela página
// mestre /box-fume quanto pelas subpáginas /box-fume/[bairro] para
// que cada acesso/variação carregue uma foto diferente.
export function pickRandomBoxFumeImage(seed?: string) {
  if (seed) {
    // Hash determinístico simples: mesma seed (ex.: slug do bairro)
    // retorna sempre a mesma imagem, o que mantém a página estável
    // entre re-renders mas distribui as fotos pelos bairros.
    let h = 0;
    for (let i = 0; i < seed.length; i++) {
      h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    }
    return BOX_FUME_IMAGES[h % BOX_FUME_IMAGES.length];
  }
  return BOX_FUME_IMAGES[Math.floor(Math.random() * BOX_FUME_IMAGES.length)];
}
