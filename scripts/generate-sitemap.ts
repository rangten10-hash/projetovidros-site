// Runs before `vite dev` and `vite build` (predev/prebuild hooks).
// Writes public/sitemap.xml combining static routes, all blog posts and
// every neighborhood served by the dynamic /servicos/:bairro route.

import { writeFileSync, readFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://www.projetovidros.com.br";

// Mantenha em sincronia com src/pages/ServicosBairro.tsx (ZONA_BAIRROS).
const BAIRROS: string[] = [
  // Norte
  "santana", "mandaqui", "tucuruvi", "parada-inglesa", "lauzane-paulista",
  "horto-florestal", "tremembe", "casa-verde", "bairro-do-limao",
  "vila-nova-cachoeirinha", "imirim", "freguesia-do-o", "vila-maria",
  "vila-guilherme", "jacana", "pirituba", "cachoeirinha", "guarulhos",
  // Sul
  "moema", "morumbi", "vila-clementino", "brooklin", "socorro", "santo-amaro",
  "ibirapuera", "saude", "campo-belo", "vila-mariana", "jabaquara",
  "itaim-bibi", "interlagos", "paraiso", "panamby", "jardim-europa",
  "vila-sonia",
  // Oeste
  "alphaville", "cotia", "barueri", "butanta", "pinheiros", "lapa",
  "perdizes", "vila-leopoldina", "osasco", "barra-funda", "pompeia",
  "vila-madalena", "parque-sao-domingos", "vila-olimpia",
  "santana-de-parnaiba",
  // Leste
  "mooca", "penha", "vila-formosa", "tatuape", "vila-prudente", "belem",
  "vila-carrao", "ipiranga",
  // Centro
  "avenida-paulista", "bom-retiro", "liberdade", "consolacao", "centro",
  "aclimacao", "bela-vista", "cambuci", "bras", "santa-cecilia", "pacaembu",
  "higienopolis", "jardins", "frei-caneca",
];

const STATIC_ROUTES: { path: string; changefreq?: string; priority?: string }[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/box-de-banheiro", changefreq: "monthly", priority: "0.8" },
  { path: "/box-flex", changefreq: "monthly", priority: "0.9" },
  { path: "/box-seguro", changefreq: "monthly", priority: "0.8" },
  { path: "/box-fume", changefreq: "monthly", priority: "0.9" },
  { path: "/box-incolor", changefreq: "monthly", priority: "0.9" },
  { path: "/box-verde", changefreq: "monthly", priority: "0.9" },
  { path: "/box-bronze", changefreq: "monthly", priority: "0.9" },
  { path: "/portas-de-vidro", changefreq: "monthly", priority: "0.8" },
  { path: "/espelhos", changefreq: "monthly", priority: "0.8" },
  { path: "/espelhos-led", changefreq: "monthly", priority: "0.8" },
  { path: "/envidracamento-de-sacada", changefreq: "monthly", priority: "0.9" },
  { path: "/projetos", changefreq: "monthly", priority: "0.7" },
  { path: "/simulador", changefreq: "monthly", priority: "0.6" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
];

function getBlogSlugs(): string[] {
  const src = readFileSync(resolve("src/data/blogPosts.ts"), "utf8");
  const slugs = new Set<string>();
  // Captura apenas as definições de slug do objeto de post (linha começando com slug:)
  const re = /^\s*slug:\s*"([^"]+)"/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src)) !== null) slugs.add(m[1]);
  return Array.from(slugs);
}

function urlBlock(path: string, changefreq?: string, priority?: string) {
  return [
    `  <url>`,
    `    <loc>${BASE_URL}${path}</loc>`,
    changefreq ? `    <changefreq>${changefreq}</changefreq>` : null,
    priority ? `    <priority>${priority}</priority>` : null,
    `  </url>`,
  ].filter(Boolean).join("\n");
}

const blogSlugs = getBlogSlugs();

const urls: string[] = [
  ...STATIC_ROUTES.map((r) => urlBlock(r.path, r.changefreq, r.priority)),
  ...blogSlugs.map((s) => urlBlock(`/blog/${s}`, "monthly", "0.6")),
  ...BAIRROS.map((b) => urlBlock(`/servicos/${b}`, "monthly", "0.7")),
  ...BAIRROS.map((b) => urlBlock(`/box-fume/${b}`, "monthly", "0.7")),
  ...BAIRROS.map((b) => urlBlock(`/box-incolor/${b}`, "monthly", "0.7")),
  ...BAIRROS.map((b) => urlBlock(`/box-verde/${b}`, "monthly", "0.7")),
  ...BAIRROS.map((b) => urlBlock(`/box-bronze/${b}`, "monthly", "0.7")),
  ...BAIRROS.map((b) => urlBlock(`/espelhos/${b}`, "monthly", "0.7")),
  ...BAIRROS.map((b) => urlBlock(`/portas-de-vidro/${b}`, "monthly", "0.7")),
  ...BAIRROS.map((b) => urlBlock(`/projetos/${b}`, "monthly", "0.7")),
  ...BAIRROS.map((b) => urlBlock(`/envidracamento-de-sacada/${b}`, "monthly", "0.7")),
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...urls,
  `</urlset>`,
  ``,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(
  `sitemap.xml gerado (${STATIC_ROUTES.length} estáticas + ${blogSlugs.length} posts + ${BAIRROS.length} bairros × 9 prefixos: servicos, box-fume, box-incolor, box-verde, box-bronze, espelhos, portas-de-vidro, projetos, envidracamento-de-sacada)`,
);
