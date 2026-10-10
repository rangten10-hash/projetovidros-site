import ambiente from "../assets/max-system/ambiente.webp.asset.json";
import instalacao from "../assets/max-system/instalacao.webp.asset.json";
import design from "../assets/max-system/design.webp.asset.json";
import poster from "../assets/max-system/video-poster.webp.asset.json";
import video from "../assets/max-system/demonstracao.mp4.asset.json";

const assetUrl = (url: string) => `https://secure-shine-studio.lovable.app${url}`;
export const MAX_SYSTEM = {
  path: "/portas/max-system-pivotante",
  name: "Porta Max System Pivotante",
  title: "Porta Max System Pivotante em São Paulo | Projeto Vidros",
  description: "Porta Max System Pivotante AL Indústria sob medida em São Paulo. Design europeu, bordas protegidas por alumínio e vedação perimetral. Solicite orçamento.",
  maxHeightMeters: 3,
  cardMessage: "Olá! Gostaria de mais informações e orçamento para a Porta Max System Pivotante.",
  pageMessage: "Olá! Vim pela página da Porta Max System Pivotante e gostaria de solicitar um orçamento.",
  video: assetUrl(video.url),
  poster: assetUrl(poster.url),
  images: [
    { src: assetUrl(ambiente.url), alt: "Porta Max System Pivotante com perfis pretos em ambiente residencial" },
    { src: assetUrl(instalacao.url), alt: "Porta Max System instalada com vidro e proteção de alumínio nas bordas" },
    { src: assetUrl(design.url), alt: "Porta Max System com perfis slim e acabamento minimalista AL Indústria" },
  ],
};
export const maxSystemWhatsApp = (source: "card" | "page") =>
  `https://wa.me/5511915485945?text=${encodeURIComponent(source === "card" ? MAX_SYSTEM.cardMessage : MAX_SYSTEM.pageMessage)}`;
export const maxSystemSchemas = [
  {
    "@context": "https://schema.org", "@type": "Product",
    name: MAX_SYSTEM.name, description: MAX_SYSTEM.description,
    brand: { "@type": "Brand", name: "AL Indústria" },
    image: MAX_SYSTEM.images.map((image) => image.src),
    url: `https://www.projetovidros.com.br${MAX_SYSTEM.path}`,
    additionalProperty: [{ "@type": "PropertyValue", name: "Altura máxima mediante avaliação técnica", value: MAX_SYSTEM.maxHeightMeters, unitCode: "MTR" }],
  },
  {
    "@context": "https://schema.org", "@type": "LocalBusiness",
    name: "Projeto Vidros", telephone: "+55-11-91548-5945",
    url: "https://www.projetovidros.com.br",
    areaServed: { "@type": "City", name: "São Paulo" },
  },
];