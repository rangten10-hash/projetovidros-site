// Pós-build: gera dist/<rota>/index.html para cada rota dinâmica/estática,
// com <title>, <meta description>, og:* e canonical já substituídos no HTML
// (server-side). Resolve o problema de "view-source" mostrar sempre o title
// genérico do index.html numa SPA. A app React continua hidratando normalmente
// e o useSeo só re-aplica os mesmos valores.
//
// Roda no postbuild (após `vite build`).

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";

const BASE_URL = "https://www.projetovidros.com.br";
const DIST = resolve("dist");
const TEMPLATE_PATH = resolve(DIST, "index.html");

if (!existsSync(TEMPLATE_PATH)) {
  console.error("[prerender-meta] dist/index.html não encontrado — abortando.");
  process.exit(0);
}

const TEMPLATE = readFileSync(TEMPLATE_PATH, "utf8");

// ============================================================
// Lista canônica de bairros (espelha src/lib/bairros.ts)
// ============================================================
const BAIRROS: { slug: string; nome: string }[] = [
  // Norte
  { slug: "santana", nome: "Santana" },
  { slug: "mandaqui", nome: "Mandaqui" },
  { slug: "tucuruvi", nome: "Tucuruvi" },
  { slug: "parada-inglesa", nome: "Parada Inglesa" },
  { slug: "lauzane-paulista", nome: "Lauzane Paulista" },
  { slug: "horto-florestal", nome: "Horto Florestal" },
  { slug: "tremembe", nome: "Tremembé" },
  { slug: "casa-verde", nome: "Casa Verde" },
  { slug: "bairro-do-limao", nome: "Bairro do Limão" },
  { slug: "vila-nova-cachoeirinha", nome: "Vila Nova Cachoeirinha" },
  { slug: "imirim", nome: "Imirim" },
  { slug: "freguesia-do-o", nome: "Freguesia do Ó" },
  { slug: "vila-maria", nome: "Vila Maria" },
  { slug: "vila-guilherme", nome: "Vila Guilherme" },
  { slug: "jacana", nome: "Jaçanã" },
  { slug: "pirituba", nome: "Pirituba" },
  { slug: "cachoeirinha", nome: "Cachoeirinha" },
  { slug: "guarulhos", nome: "Guarulhos" },
  // Sul
  { slug: "moema", nome: "Moema" },
  { slug: "morumbi", nome: "Morumbi" },
  { slug: "vila-clementino", nome: "Vila Clementino" },
  { slug: "brooklin", nome: "Brooklin" },
  { slug: "socorro", nome: "Socorro" },
  { slug: "santo-amaro", nome: "Santo Amaro" },
  { slug: "ibirapuera", nome: "Ibirapuera" },
  { slug: "saude", nome: "Saúde" },
  { slug: "campo-belo", nome: "Campo Belo" },
  { slug: "vila-mariana", nome: "Vila Mariana" },
  { slug: "jabaquara", nome: "Jabaquara" },
  { slug: "itaim-bibi", nome: "Itaim Bibi" },
  { slug: "interlagos", nome: "Interlagos" },
  { slug: "paraiso", nome: "Paraíso" },
  { slug: "panamby", nome: "Panamby" },
  { slug: "jardim-europa", nome: "Jardim Europa" },
  { slug: "vila-sonia", nome: "Vila Sônia" },
  // Oeste
  { slug: "alphaville", nome: "Alphaville" },
  { slug: "cotia", nome: "Cotia" },
  { slug: "barueri", nome: "Barueri" },
  { slug: "butanta", nome: "Butantã" },
  { slug: "pinheiros", nome: "Pinheiros" },
  { slug: "lapa", nome: "Lapa" },
  { slug: "perdizes", nome: "Perdizes" },
  { slug: "vila-leopoldina", nome: "Vila Leopoldina" },
  { slug: "osasco", nome: "Osasco" },
  { slug: "barra-funda", nome: "Barra Funda" },
  { slug: "pompeia", nome: "Pompéia" },
  { slug: "vila-madalena", nome: "Vila Madalena" },
  { slug: "parque-sao-domingos", nome: "Parque São Domingos" },
  { slug: "vila-olimpia", nome: "Vila Olímpia" },
  { slug: "santana-de-parnaiba", nome: "Santana de Parnaíba" },
  // Leste
  { slug: "mooca", nome: "Mooca" },
  { slug: "penha", nome: "Penha" },
  { slug: "vila-formosa", nome: "Vila Formosa" },
  { slug: "tatuape", nome: "Tatuapé" },
  { slug: "vila-prudente", nome: "Vila Prudente" },
  { slug: "belem", nome: "Belém" },
  { slug: "vila-carrao", nome: "Vila Carrão" },
  { slug: "ipiranga", nome: "Ipiranga" },
  // Centro
  { slug: "avenida-paulista", nome: "Avenida Paulista" },
  { slug: "bom-retiro", nome: "Bom Retiro" },
  { slug: "liberdade", nome: "Liberdade" },
  { slug: "consolacao", nome: "Consolação" },
  { slug: "centro", nome: "Centro" },
  { slug: "aclimacao", nome: "Aclimação" },
  { slug: "bela-vista", nome: "Bela Vista" },
  { slug: "cambuci", nome: "Cambuci" },
  { slug: "bras", nome: "Brás" },
  { slug: "santa-cecilia", nome: "Santa Cecília" },
  { slug: "pacaembu", nome: "Pacaembu" },
  { slug: "higienopolis", nome: "Higienópolis" },
  { slug: "jardins", nome: "Jardins" },
  { slug: "frei-caneca", nome: "Frei Caneca" },
];

// ============================================================
// Blog posts (parse simples do TS-source)
// ============================================================
function getBlogPosts(): { slug: string; title: string; metaDescription: string }[] {
  const src = readFileSync(resolve("src/data/blogPosts.ts"), "utf8");
  // Cada post começa com "slug: "..." e termina com "}," — pegamos blocos por slug.
  const posts: { slug: string; title: string; metaDescription: string }[] = [];
  const blockRe = /\{\s*slug:\s*"([^"]+)",[\s\S]*?metaDescription:\s*\n?\s*"([^"]+)"/g;
  let m: RegExpExecArray | null;
  while ((m = blockRe.exec(src)) !== null) {
    const slug = m[1];
    const metaDescription = m[2];
    // Title fica entre slug e metaDescription — busca local
    const local = src.slice(m.index, m.index + 4000);
    const tm = local.match(/title:\s*"([^"]+)"/);
    const title = tm ? tm[1] : slug;
    posts.push({ slug, title, metaDescription });
  }
  return posts;
}

// ============================================================
// Geração de metadados por rota (espelha lógica de useSeo nas páginas)
// ============================================================
interface RouteMeta {
  path: string; // ex: "/servicos/santana"
  title: string;
  description: string;
  ogType?: "website" | "article";
}

const STATIC_ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: "Vidraçaria na Zona Norte e Imirim | Projeto Vidros SP",
    description:
      "Vidraçaria no Imirim e Zona Norte de SP. Especialista em box de banheiro, espelhos sob medida e envidraçamento. Medição rápida e orçamento direto pelo WhatsApp!",
    ogType: "website",
  },
  {
    path: "/box-de-banheiro",
    title: "Box de Banheiro na Zona Norte SP: Preços e Modelos | Projeto Vidros",
    description:
      "Procurando box para banheiro na Zona Norte? Modelos de abrir, correr, elegantes e temperados com instalação rápida no Imirim e região. Solicite seu orçamento!",
  },
  {
    path: "/box-para-banheiro-zona-norte",
    title: "Box para Banheiro na Zona Norte SP | Projeto Vidros",
    description:
      "Box para banheiro na Zona Norte de SP com vidro temperado e película anti-estilhaço. Atendemos Santana, Tucuruvi, Imirim, Vila Guilherme e toda a ZN. Orçamento pelo WhatsApp!",
  },
  {
    path: "/box-de-vidro-zona-sul",
    title: "Box de Vidro para Banheiro na Zona Sul SP | Projeto Vidros",
    description:
      "Fabricação e instalação de box de banheiro na Zona Sul de SP. Vidro temperado sob medida, medição rápida e garantia.",
  },
  {
    path: "/envidracamento-de-sacadas-zona-norte-sp",
    title: "Envidraçamento de Sacadas Zona Norte SP | Projeto Vidros",
    description:
      "Envidraçamento de sacadas na Zona Norte de SP: cortina de vidro retrátil sob medida, medição grátis e instalação garantida.",
  },
  {
    path: "/envidracamento-de-sacadas-zona-sul-sp",
    title: "Envidraçamento de Sacadas Zona Sul SP | Projeto Vidros",
    description:
      "Envidraçamento de sacadas na Zona Sul de SP: cortina de vidro retrátil sob medida para varandas gourmet, com medição grátis.",
  },
  {
    path: "/envidracamento-de-sacadas-zona-leste-sp",
    title: "Envidraçamento de Sacadas Zona Leste SP | Projeto Vidros",
    description:
      "Envidraçamento de sacadas na Zona Leste de SP: fechamento de varanda com vidro retrátil sob medida, medição grátis e garantia.",
  },
  {
    path: "/envidracamento-de-sacadas-zona-oeste-sp",
    title: "Envidraçamento de Sacadas Zona Oeste SP | Projeto Vidros",
    description:
      "Envidraçamento de sacadas na Zona Oeste de SP e Alphaville: cortina de vidro retrátil sob medida com medição grátis.",
  },
  {
    path: "/box-de-vidro-zona-oeste",
    title: "Box de Vidro para Banheiro na Zona Oeste SP | Projeto Vidros",
    description:
      "Box de vidro para banheiro na Zona Oeste de SP. Modelos elegantes, roldanas aparentes, articulados e sob medida.",
  },
  {
    path: "/box-de-vidro-zona-leste",
    title: "Box de Vidro para Banheiro na Zona Leste SP | Projeto Vidros",
    description:
      "Preço direto de fábrica e instalação rápida de box de vidro na Zona Leste SP. Vidro temperado 8mm certificado.",
  },


  {
    path: "/box-fume",
    title: "Box Fumê em São Paulo | Vidro Temperado Direto da Fábrica",
    description:
      "Box de banheiro fumê em vidro temperado 8mm. Modelos frontal, canto, abrir, elegance e flex. Orçamento via WhatsApp.",
  },
  {
    path: "/box-incolor",
    title: "Box Incolor em São Paulo | Vidro Temperado Direto da Fábrica",
    description:
      "Box incolor em vidro temperado 8mm: amplitude, neutralidade e modelos sob medida. Atendimento em toda São Paulo.",
  },
  {
    path: "/box-verde",
    title: "Box Verde Sob Medida SP | Vidro Temperado 8mm – Projeto Vidros",
    description:
      "Box de banheiro com vidro verde temperado 8mm em São Paulo. Estética biofílica, privacidade suave e instalação rápida. Orçamento pelo WhatsApp!",
  },
  {
    path: "/box-bronze",
    title: "Box Bronze em São Paulo | Vidro Temperado Direto da Fábrica",
    description:
      "Box bronze em vidro temperado 8mm: tom âmbar elegante, calor visual e modelos sob medida em toda São Paulo.",
  },
  {
    path: "/box-flex",
    title: "Box Flex Articulado 90% Abertura | Projeto Vidros",
    description:
      "Box Flex articulado que libera até 90% do vão. Solução ideal para banheiros pequenos e suítes compactas.",
  },
  {
    path: "/box-seguro",
    title: "Box +Seguro com Película Anti-Estilhaço | Projeto Vidros",
    description:
      "Tecnologia Box +Seguro: película anti-estilhaço aplicada em vidro temperado para máxima proteção da família.",
  },
  {
    path: "/portas-de-vidro",
    title: "Portas de Vidro Sob Medida em São Paulo | Projeto Vidros",
    description:
      "Portas de vidro temperado sob medida: pivotantes, de correr, camarão e blindex. Instalação em toda São Paulo.",
  },
  {
    path: "/espelhos",
    title: "Espelhos Sob Medida em São Paulo | Projeto Vidros",
    description:
      "Espelhos decorativos, lapidados e bisotados sob medida. Instalação profissional em residências e comércios.",
  },
  {
    path: "/espelhos-led",
    title: "Espelhos com LED Sob Medida | Projeto Vidros",
    description:
      "Espelhos com iluminação LED integrada — design contemporâneo para banheiros, lavabos e salas.",
  },
  {
    path: "/envidracamento-de-sacada",
    title: "Envidraçamento de Sacadas na Zona Norte e SP | Projeto Vidros",
    description:
      "Fechamento de sacadas e janelas retráteis sob medida em SP. Segurança, vedação de chuva e acabamento fino. Peça uma visita técnica!",
  },
  {
    path: "/projetos",
    title: "Projetos Realizados | Projeto Vidros São Paulo",
    description:
      "Galeria de projetos de box de banheiro, espelhos e portas de vidro instalados pela Projeto Vidros em São Paulo.",
  },
  { path: "/simulador", title: "Simulador de Box | Projeto Vidros", description: "Monte e visualize seu box ideal." },
  {
    path: "/blog",
    title: "Blog | Projeto Vidros",
    description: "Dicas, modelos e cuidados com box de banheiro, espelhos e portas de vidro.",
  },
];

const ESPELHO_TITLES = [
  (n: string) => `Espelhos Sob Medida em ${n}: Amplitude e Elegância para seu Ambiente`,
  (n: string) => `Fábrica de Espelhos em ${n}: Projetos Decorativos Personalizados`,
  (n: string) => `Espelho para Banheiro e Ambientes Internos em ${n}`,
  (n: string) => `Espelhos Decorativos e Modernos na Região de ${n}`,
  (n: string) => `Vidraçaria Especialista em Espelhos em ${n}`,
];

const PORTA_TITLES = [
  (n: string) => `Portas de Vidro Sob Medida em ${n}: Divisórias Modernas`,
  (n: string) => `Portas de Vidro de Correr em ${n}: Linhas Vision e Flex`,
  (n: string) => `Instalação de Porta de Vidro Flex e de Abrir em ${n}`,
  (n: string) => `Fábrica de Portas de Vidro Temperado em ${n}`,
  (n: string) => `Vidraçaria de Portas e Divisórias de Vidro em ${n}`,
];

const PROJETO_TITLES = [
  (n: string) => `Projetos de Janelas de Vidro Temperado em ${n}`,
  (n: string) => `Instalação de Guarda-Corpo de Vidro em ${n}`,
  (n: string) => `Envidraçamento de Sacadas e Varandas em ${n}`,
  (n: string) => `Portas de Vidro para Lojas e Comércios em ${n}`,
  (n: string) => `Fábrica de Vitrines de Vidro para Lojas em ${n}`,
  (n: string) => `Divisórias de Vidro para Cozinha em ${n}`,
  (n: string) => `Divisórias de Vidro para Lavanderia em ${n}`,
  (n: string) => `Divisórias Corporativas de Vidro em ${n}`,
  (n: string) => `Fornecimento de Vidros para Obras em ${n}`,
  (n: string) => `Cobertura de Vidro Sob Medida em ${n}`,
];

const SACADA_H1_VARIACOES = [
  (n: string) => `Envidraçamento de Sacada em ${n}`,
  (n: string) => `Fechamento de Sacada de Vidro em ${n}`,
  (n: string) => `Cortina de Vidro para Varanda em ${n}`,
  (n: string) => `Instalação de Envidraçamento de Sacadas em ${n}`,
  (n: string) => `Sacada de Vidro Retrátil em ${n}`,
  (n: string) => `Fechamento de Varanda Gourmet em ${n}`,
  (n: string) => `Empresa de Envidraçamento de Sacada em ${n}`,
  (n: string) => `Vidraçaria Especializada em Sacadas em ${n}`,
  (n: string) => `Envidraçamento de Varandas e Sacadas em ${n}`,
  (n: string) => `Projetos de Cortina de Vidro Sob Medida em ${n}`,
  (n: string) => `Fechamento de Sacada com Vidro Temperado em ${n}`,
  (n: string) => `Envidraçamento Articulado para Sacadas em ${n}`,
  (n: string) => `Manutenção e Envidraçamento de Sacadas em ${n}`,
  (n: string) => `Envidraçamento de Sacada de Alto Padrão em ${n}`,
  (n: string) => `Especialista em Fechamento de Varandas em ${n}`,
];



function hashSlug(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function bairroMeta(
  slug: string,
  nome: string,
  prefixo: "servicos" | "box-fume" | "box-incolor" | "box-verde" | "box-bronze" | "espelhos" | "portas-de-vidro" | "projetos" | "envidracamento-de-sacada",
): RouteMeta {
  if (prefixo === "espelhos") {
    const t = ESPELHO_TITLES[hashSlug(slug) % ESPELHO_TITLES.length](nome);
    return {
      path: `/espelhos/${slug}`,
      title: `${t} | Projeto Vidros`,
      description: `Espelhos sob medida em ${nome}: decorativos, bisotê, lapidados e antiumidade para banheiro. Instalação profissional em São Paulo. Orçamento pelo WhatsApp.`,
      ogType: "article",
    };
  }
  if (prefixo === "portas-de-vidro") {
    const t = PORTA_TITLES[hashSlug(slug) % PORTA_TITLES.length](nome);
    return {
      path: `/portas-de-vidro/${slug}`,
      title: `${t} | Projeto Vidros`,
      description: `Portas de vidro sob medida em ${nome}: correr, abrir, flex camarão, Vision e Versatik. Vidro temperado 8/10mm. Orçamento pelo WhatsApp.`,
      ogType: "article",
    };
  }
  if (prefixo === "envidracamento-de-sacada") {
    const t = SACADA_H1_VARIACOES[hashSlug(slug) % SACADA_H1_VARIACOES.length](nome);
    return {
      path: `/envidracamento-de-sacada/${slug}`,
      title: `${t} - Projeto Vidros`,
      description: `Envidraçamento de sacada e fechamento de varanda em ${nome}: cortina de vidro retrátil sob medida, vidro temperado, alta vedação e instalação garantida. Orçamento pelo WhatsApp.`,
      ogType: "article",
    };
  }
  if (prefixo === "projetos") {
    const t = PROJETO_TITLES[hashSlug(slug) % PROJETO_TITLES.length](nome);
    return {
      path: `/projetos/${slug}`,
      title: `${t} | Projeto Vidros`,
      description: `Projetos de vidraçaria em ${nome}: janelas, guarda-corpo, sacadas, vitrines, divisórias e coberturas de vidro sob medida. Orçamento pelo WhatsApp.`,
      ogType: "article",
    };
  }
  const titleByPrefix: Record<Exclude<typeof prefixo, "espelhos" | "portas-de-vidro" | "projetos" | "envidracamento-de-sacada">, string> = {
    servicos: `${nome} | Box de Vidro Direto da Fábrica`,
    "box-fume": `${nome} | Box de Vidro Fumê Direto da Fábrica`,
    "box-incolor": `${nome} | Box de Vidro Incolor Direto da Fábrica`,
    "box-verde": `${nome} | Box de Vidro Verde Direto da Fábrica`,
    "box-bronze": `${nome} | Box de Vidro Bronze Direto da Fábrica`,
  };
  const descByPrefix: Record<Exclude<typeof prefixo, "espelhos" | "portas-de-vidro" | "projetos" | "envidracamento-de-sacada">, string> = {
    servicos: `Box de banheiro em ${nome} com instalação rápida. Fabricação própria, corte CNC de alta precisão e vidro temperado sob medida. Peça seu orçamento pelo WhatsApp!`,
    "box-fume": `Box de banheiro fumê em ${nome} com instalação rápida. Fabricação própria, corte CNC de alta precisão e vidro temperado fumê sob medida. Peça seu orçamento pelo WhatsApp!`,
    "box-incolor": `Box de banheiro incolor em ${nome} com instalação rápida. Fabricação própria, corte CNC de alta precisão e vidro temperado incolor sob medida. Peça seu orçamento pelo WhatsApp!`,
    "box-verde": `Box de banheiro verde em ${nome} com instalação rápida. Fabricação própria, corte CNC de alta precisão e vidro temperado verde sob medida. Peça seu orçamento pelo WhatsApp!`,
    "box-bronze": `Box de banheiro bronze em ${nome} com instalação rápida. Fabricação própria, corte CNC de alta precisão e vidro temperado bronze sob medida. Peça seu orçamento pelo WhatsApp!`,
  };
  return {
    path: `/${prefixo}/${slug}`,
    title: titleByPrefix[prefixo],
    description: descByPrefix[prefixo],
    ogType: "article",
  };
}

function blogMeta(p: { slug: string; title: string; metaDescription: string }): RouteMeta {
  const cleanTitle = p.title.replace(/[^\p{L}\p{N}\s:–\-+]/gu, "").trim();
  return {
    path: `/blog/${p.slug}`,
    title: `${cleanTitle} | Projeto Vidros`,
    description: p.metaDescription,
    ogType: "article",
  };
}

// ============================================================
// Aplicar substituições no template
// ============================================================
function escapeAttr(s: string) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escapeText(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function applyMeta(html: string, meta: RouteMeta): string {
  const url = `${BASE_URL}${meta.path}`;
  const title = escapeText(meta.title);
  const desc = escapeAttr(meta.description);
  const titleAttr = escapeAttr(meta.title);
  const ogType = meta.ogType ?? "article";

  let out = html;

  // <title>
  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);

  // meta name="description"
  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${desc}">`,
  );

  // og:title
  out = out.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${titleAttr}">`,
  );
  // og:description
  out = out.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${desc}">`,
  );
  // og:url
  out = out.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${url}" />`,
  );
  // og:type
  out = out.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:type" content="${ogType}" />`,
  );

  // twitter
  out = out.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${titleAttr}">`,
  );
  out = out.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${desc}">`,
  );

  // canonical — substitui se existir, senão injeta antes de </head>
  const canonicalTag = `<link rel="canonical" href="${url}" />`;
  if (/<link\s+rel="canonical"[^>]*>/i.test(out)) {
    out = out.replace(/<link\s+rel="canonical"[^>]*>/i, canonicalTag);
  } else {
    out = out.replace(/<\/head>/i, `  ${canonicalTag}\n  </head>`);
  }

  return out;
}

function writeRoute(meta: RouteMeta) {
  const html = applyMeta(TEMPLATE, meta);
  const outPath =
    meta.path === "/"
      ? resolve(DIST, "index.html")
      : resolve(DIST, meta.path.replace(/^\//, ""), "index.html");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
}

// ============================================================
// Execução
// ============================================================
const routes: RouteMeta[] = [
  ...STATIC_ROUTES,
  ...getBlogPosts().map(blogMeta),
  ...BAIRROS.map((b) => bairroMeta(b.slug, b.nome, "servicos")),
  ...BAIRROS.map((b) => bairroMeta(b.slug, b.nome, "box-fume")),
  ...BAIRROS.map((b) => bairroMeta(b.slug, b.nome, "box-incolor")),
  ...BAIRROS.map((b) => bairroMeta(b.slug, b.nome, "box-verde")),
  ...BAIRROS.map((b) => bairroMeta(b.slug, b.nome, "box-bronze")),
  ...BAIRROS.map((b) => bairroMeta(b.slug, b.nome, "espelhos")),
  ...BAIRROS.map((b) => bairroMeta(b.slug, b.nome, "portas-de-vidro")),
  ...BAIRROS.map((b) => bairroMeta(b.slug, b.nome, "projetos")),
  ...BAIRROS.map((b) => bairroMeta(b.slug, b.nome, "envidracamento-de-sacada")),
];

for (const r of routes) writeRoute(r);

console.log(`[prerender-meta] ${routes.length} rotas geradas em dist/`);
