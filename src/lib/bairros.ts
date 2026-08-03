// Lista canônica de bairros atendidos. Usada por:
// - /servicos/:bairro (ServicosBairro.tsx — mantém cópia local por enquanto)
// - /box-fume e /box-fume/:bairro
// - scripts/generate-sitemap.ts (referência manual)

export type Zona = "norte" | "sul" | "oeste" | "leste" | "centro";

export const ZONA_BAIRROS: Record<Zona, { slug: string; nome: string }[]> = {
  norte: [
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
  ],
  sul: [
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
  ],
  oeste: [
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
  ],
  leste: [
    { slug: "mooca", nome: "Mooca" },
    { slug: "penha", nome: "Penha" },
    { slug: "vila-formosa", nome: "Vila Formosa" },
    { slug: "tatuape", nome: "Tatuapé" },
    { slug: "vila-prudente", nome: "Vila Prudente" },
    { slug: "belem", nome: "Belém" },
    { slug: "vila-carrao", nome: "Vila Carrão" },
    { slug: "ipiranga", nome: "Ipiranga" },
  ],
  centro: [
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
  ],
};

export const ZONA_LABEL: Record<Zona, string> = {
  norte: "Zona Norte",
  sul: "Zona Sul",
  oeste: "Zona Oeste",
  leste: "Zona Leste",
  centro: "Centro",
};

export const ALL_BAIRROS = (Object.keys(ZONA_BAIRROS) as Zona[]).flatMap((z) =>
  ZONA_BAIRROS[z].map((b) => ({ ...b, zona: z })),
);

export function findBairro(slug: string) {
  return ALL_BAIRROS.find((b) => b.slug === slug);
}
