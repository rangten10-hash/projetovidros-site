import bannerBoxSeguro from "@/assets/banner-mobile-seguranca.webp";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  date: string;
  author: string;
  /** Array of content blocks rendered in order */
  content: BlogBlock[];
  cta?: {
    label: string;
    href: string;
  };
  metaDescription: string;
}

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: { strong?: string; text: string }[] }
  | { type: "image"; src: string; alt: string };

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20box%20de%20segurança.";

export const blogPosts: BlogPost[] = [
  {
    slug: "box-banheiro-beleza-seguranca-familia",
    title:
      "🛡️ Box de Banheiro: A Beleza que você quer com a Segurança que sua família precisa",
    excerpt:
      "Box até o teto, Kit Reto e a tecnologia BOX + SEGURO: como unir alto padrão e proteção real contra acidentes em São Paulo.",
    image: bannerBoxSeguro,
    imageAlt:
      "Box de banheiro com vidro temperado e película BOX + SEGURO instalado pela Projeto Vidros em São Paulo",
    date: "2026-05-02",
    author: "Projeto Vidros",
    metaDescription:
      "Box de banheiro até o teto com Kit Reto e película BOX + SEGURO: alto padrão e segurança real contra acidentes. Atendimento em toda São Paulo.",
    content: [
      {
        type: "paragraph",
        text: "Ter um banheiro moderno, com um Box até o Teto e ferragens de alto padrão como o Kit Reto, é o sonho de muitos moradores em São Paulo. Mas, além da estética, existe um fator que não pode ser deixado de lado: a segurança real contra acidentes.",
      },
      {
        type: "heading",
        text: "Por que a película BOX + SEGURO é indispensável?",
      },
      {
        type: "paragraph",
        text: "Mesmo o vidro temperado sendo muito resistente, em caso de uma quebra rara por impacto ou torção, os cacos podem se espalhar, causando riscos de cortes. É aqui que entra a nossa tecnologia BOX + SEGURO.",
      },
      {
        type: "paragraph",
        text: "Ao instalar a película BOX + SEGURO, garantimos que:",
      },
      {
        type: "list",
        items: [
          {
            strong: "Zero queda de vidro:",
            text: "Em caso de quebra, os cacos ficam totalmente presos na película, mantendo a estrutura no lugar até a troca.",
          },
          {
            strong: "Proteção Invisível:",
            text: "Ela não altera a transparência ou a beleza do seu vidro; você nem percebe que ela está lá.",
          },
          {
            strong: "Tranquilidade Total:",
            text: "Ideal para casas com crianças, idosos ou pets, onde a segurança não pode ser negociada.",
          },
        ],
      },
      {
        type: "heading",
        text: "Atendimento Exclusivo em São Paulo",
      },
      {
        type: "paragraph",
        text: "Na Projeto Vidros, somos especialistas em levar essa tecnologia para as regiões mais exigentes de SP. Se você mora no Itaim Bibi, Moema, Pinheiros, Alphaville, Pacaembu ou em qualquer bairro da Zona Norte (como Imirim e Santana), nós vamos até você para realizar a medição técnica e a instalação profissional.",
      },
      {
        type: "paragraph",
        text: "Não transforme seu momento de relaxamento em uma preocupação. Escolha o box mais seguro do mercado com acabamento premium.",
      },
    ],
    cta: {
      label: "QUERO O BOX MAIS SEGURO – ORÇAMENTO VIA WHATSAPP",
      href: WHATSAPP_URL,
    },
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
