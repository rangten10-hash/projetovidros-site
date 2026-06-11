import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, CheckCircle2, MessageCircle, Sparkles, Move, ArrowLeftRight } from "lucide-react";
import { gtagReportConversion } from "@/lib/gtag";
import { useSeo, SITE_URL } from "@/lib/seo";

type Zona = "norte" | "sul" | "oeste" | "leste" | "centro";

const ZONA_BAIRROS: Record<Zona, string[]> = {
  norte: ["santana", "mandaqui", "tucuruvi", "parada-inglesa", "lauzane-paulista", "horto-florestal", "tremembe", "casa-verde", "bairro-do-limao", "vila-nova-cachoeirinha", "imirim", "freguesia-do-o", "vila-maria", "vila-guilherme", "jacana", "pirituba", "cachoeirinha", "guarulhos"],
  sul: ["moema", "morumbi", "vila-clementino", "brooklin", "socorro", "santo-amaro", "ibirapuera", "saude", "campo-belo", "vila-mariana", "jabaquara", "itaim-bibi", "interlagos", "paraiso", "panamby", "jardim-europa", "vila-sonia"],
  oeste: ["alphaville", "cotia", "barueri", "butanta", "pinheiros", "lapa", "perdizes", "vila-leopoldina", "osasco", "barra-funda", "pompeia", "vila-madalena", "parque-sao-domingos", "vila-olimpia", "santana-de-parnaiba"],
  leste: ["mooca", "penha", "vila-formosa", "tatuape", "vila-prudente", "belem", "vila-carrao", "ipiranga"],
  centro: ["avenida-paulista", "bom-retiro", "liberdade", "consolacao", "centro", "aclimacao", "bela-vista", "cambuci", "bras", "santa-cecilia", "pacaembu", "higienopolis", "jardins", "frei-caneca"],
};

// Mapa de slug -> nome formatado correto (com acentos)
const BAIRRO_DISPLAY: Record<string, string> = {
  "parada-inglesa": "Parada Inglesa",
  "lauzane-paulista": "Lauzane Paulista",
  "horto-florestal": "Horto Florestal",
  "tremembe": "Tremembé",
  "casa-verde": "Casa Verde",
  "bairro-do-limao": "Bairro do Limão",
  "vila-nova-cachoeirinha": "Vila Nova Cachoeirinha",
  "imirim": "Imirim",
  "freguesia-do-o": "Freguesia do Ó",
  "vila-maria": "Vila Maria",
  "vila-guilherme": "Vila Guilherme",
  "jacana": "Jaçanã",
  "pirituba": "Pirituba",
  "cachoeirinha": "Cachoeirinha",
  "guarulhos": "Guarulhos",
  "santana": "Santana",
  "mandaqui": "Mandaqui",
  "tucuruvi": "Tucuruvi",
  "moema": "Moema",
  "morumbi": "Morumbi",
  "vila-clementino": "Vila Clementino",
  "brooklin": "Brooklin",
  "socorro": "Socorro",
  "santo-amaro": "Santo Amaro",
  "ibirapuera": "Ibirapuera",
  "saude": "Saúde",
  "campo-belo": "Campo Belo",
  "vila-mariana": "Vila Mariana",
  "jabaquara": "Jabaquara",
  "itaim-bibi": "Itaim Bibi",
  "interlagos": "Interlagos",
  "paraiso": "Paraíso",
  "panamby": "Panamby",
  "jardim-europa": "Jardim Europa",
  "vila-sonia": "Vila Sônia",
  "alphaville": "Alphaville",
  "cotia": "Cotia",
  "barueri": "Barueri",
  "butanta": "Butantã",
  "pinheiros": "Pinheiros",
  "lapa": "Lapa",
  "perdizes": "Perdizes",
  "vila-leopoldina": "Vila Leopoldina",
  "osasco": "Osasco",
  "barra-funda": "Barra Funda",
  "pompeia": "Pompéia",
  "vila-madalena": "Vila Madalena",
  "parque-sao-domingos": "Parque São Domingos",
  "vila-olimpia": "Vila Olímpia",
  "mooca": "Mooca",
  "penha": "Penha",
  "vila-formosa": "Vila Formosa",
  "tatuape": "Tatuapé",
  "vila-prudente": "Vila Prudente",
  "belem": "Belém",
  "vila-carrao": "Vila Carrão",
  "ipiranga": "Ipiranga",
  "avenida-paulista": "Avenida Paulista",
  "bom-retiro": "Bom Retiro",
  "liberdade": "Liberdade",
  "consolacao": "Consolação",
  "centro": "Centro",
  "aclimacao": "Aclimação",
  "bela-vista": "Bela Vista",
  "cambuci": "Cambuci",
  "bras": "Brás",
  "santa-cecilia": "Santa Cecília",
  "pacaembu": "Pacaembu",
  "higienopolis": "Higienópolis",
  "jardins": "Jardins",
  "frei-caneca": "Frei Caneca",
};

const ZONA_TEXTO: Record<Zona, { titulo: string; paragrafos: string[] }> = {
  norte: {
    titulo: "Atendimento Especializado na Zona Norte de São Paulo",
    paragrafos: [
      "Quem mora ou está reformando na Zona Norte de São Paulo sabe que a região combina bairros tradicionais de alta densidade vertical com condomínios horizontais exclusivos de alto padrão. Atender às exigências da Zona Norte requer precisão absoluta no projeto. A Projeto Vidros é especialista em desenvolver soluções sob medida para os lares da ZN, garantindo uma instalação limpa, ágil e em total conformidade com as normas técnicas.",
      "Nossos projetos trazem o equilíbrio perfeito entre sofisticação e o aproveitamento inteligente de espaço para banheiros de todos os tamanhos, assegurando que o seu imóvel seja valorizado e conte com acabamentos de primeira linha.",
    ],
  },
  sul: {
    titulo: "Atendimento Premium na Zona Sul de São Paulo",
    paragrafos: [
      "A Zona Sul de São Paulo é reconhecida pelo seu mercado imobiliário residencial premium, caracterizado por apartamentos de alto padrão, estúdios modernos e grandes projetos corporativos. Apartamentos e suítes de luxo na ZS exigem acabamentos minimalistas e componentes de engenharia impecável. A Projeto Vidros atende à Zona Sul focando em designs modernos que conversam perfeitamente com a arquitetura contemporânea da região.",
      "Trabalhamos com kits de linhas retas e roldanas de alta tecnologia para oferecer salas de banho dignas de hotéis de luxo, unindo elegância, funcionalidade e durabilidade para clientes exigentes.",
    ],
  },
  oeste: {
    titulo: "Atendimento Sob Medida na Zona Oeste de São Paulo",
    paragrafos: [
      "O eixo da Zona Oeste e sua extensão metropolitana destacam-se por bairros altamente arborizados, condomínios fechados horizontais de altíssimo padrão e apartamentos que prezam pela integração de ambientes e design inovador. Morar na Zona Oeste ou nas regiões integradas significa buscar o que há de mais moderno em decoração interna.",
      "A Projeto Vidros executa projetos personalizados na ZO focando em transparência, amplitude e segurança máxima. Nossas soluções de box e vidros sob medida são pensadas para complementar a iluminação natural e o estilo arquitetônico único que dita tendência em toda a região.",
    ],
  },
  leste: {
    titulo: "Atendimento Moderno na Zona Leste de São Paulo",
    paragrafos: [
      "A Zona Leste é uma das regiões que mais cresce e se moderniza verticalmente em São Paulo, com o surgimento de novos condomínios residenciais imensos e bairros inteiros que valorizam o comércio forte e o conforto dentro de casa. Com o perfil dinâmico dos apartamentos da ZL, a otimização de cada centímetro quadrado no banheiro tornou-se fundamental.",
      "A Projeto Vidros atende à Zona Leste levando sistemas inteligentes de abertura que resolvem o problema de vãos estreitos e trazem facilidade de manutenção e limpeza para a rotina das famílias, sem abrir mão da beleza e do acabamento industrial impecável.",
    ],
  },
  centro: {
    titulo: "Atendimento Versátil no Centro de São Paulo",
    paragrafos: [
      "O Centro de São Paulo e seus bairros históricos adjacentes reúnem desde apartamentos clássicos de metragens generosas e pé-direito alto até os novos microapartamentos e estúdios super compactos. Reformar nessa região exige versatilidade e total conhecimento estrutural devido às particularidades de prumo e tubulação de prédios tradicionais.",
      "A Projeto Vidros oferece atendimento especializado para o Centro, dispondo de soluções que vão desde caixilhos robustos e imponentes para grandes vãos até engenharia articulada de alta performance para banheiros pequenos, sempre garantindo vedação total e segurança.",
    ],
  },
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getZona(slug: string): Zona | null {
  for (const z of Object.keys(ZONA_BAIRROS) as Zona[]) {
    if (ZONA_BAIRROS[z].includes(slug)) return z;
  }
  return null;
}

function formatBairro(slug: string): string {
  if (BAIRRO_DISPLAY[slug]) return BAIRRO_DISPLAY[slug];
  return slug
    .split("-")
    .map((w) => (w.length <= 2 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

const MODELOS = [
  {
    icon: Sparkles,
    title: "Box com Kit Reto Minimalista",
    desc: "Linhas limpas e perfil discreto. Ideal para banheiros modernos com estética clean e máxima transparência.",
  },
  {
    icon: Move,
    title: "Box Articulado Flex – 90% de abertura",
    desc: "Engenharia articulada que libera quase todo o vão. Solução perfeita para banheiros pequenos e suítes compactas.",
  },
  {
    icon: ArrowLeftRight,
    title: "Box de Correr Tradicional",
    desc: "Roldanas de alta performance e vedação superior. O clássico que entrega durabilidade e custo-benefício.",
  },
];

const ServicosBairro = () => {
  const { bairro } = useParams<{ bairro: string }>();
  const slug = bairro ? slugify(bairro) : "";
  const zona = slug ? getZona(slug) : null;

  const bairroNome = formatBairro(slug);
  const title = `Vidraçaria em ${bairroNome}: Box de Vidro e Projetos Sob Medida | Projeto Vidros`;
  const description = `Procurando uma Vidraçaria em ${bairroNome}? A Projeto Vidros oferece instalação rápida de box de banheiro em ${bairroNome}, espelhos e fechamentos com design premium. Solicite seu orçamento!`;

  useSeo({
    title,
    description,
    path: `/servicos/${slug}`,
    image: `${SITE_URL}/icon-512.png`,
    jsonLd: zona
      ? {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `Projeto Vidros – Vidraçaria em ${bairroNome}`,
          description,
          areaServed: { "@type": "Place", name: `${bairroNome}, São Paulo` },
          telephone: "+5511915485945",
          url: `${SITE_URL}/servicos/${slug}`,
        }
      : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug || !zona) return <Navigate to="/" replace />;

  const zonaTxt = ZONA_TEXTO[zona];
  const waMsg = `Olá! Gostaria de um orçamento de box de vidro para o meu banheiro aqui em ${bairroNome}.`;
  const waUrl = `https://wa.me/5511915485945?text=${encodeURIComponent(waMsg)}`;

  const handleCta = (e: React.MouseEvent) => {
    e.preventDefault();
    gtagReportConversion(waUrl);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <article className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-copper text-xs font-semibold tracking-widest uppercase">
              Atendimento Local · {bairroNome}
            </span>
            <h1 className="font-display text-3xl md:text-5xl text-petrol mt-3 mb-6 leading-tight">
              Vidraçaria em {bairroNome}: Box de Vidro e Projetos Sob Medida
            </h1>

            <div className="space-y-6 text-foreground/85 text-lg leading-relaxed">
              <h2 className="font-display text-2xl md:text-3xl text-petrol mt-4 mb-2">
                {zonaTxt.titulo}
              </h2>
              {zonaTxt.paragrafos.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <h2 className="font-display text-2xl md:text-3xl text-petrol mt-10 mb-2">
                Box de Banheiro em {bairroNome} com Película Anti-Estilhaço
              </h2>

              <div className="rounded-xl border border-copper/30 bg-copper/5 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-copper/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-copper" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-petrol mb-3">
                      Segurança Essencial: Conheça a Tecnologia Box + Seguro
                    </h3>
                    <p className="text-foreground/80 text-base leading-relaxed">
                      O banheiro é a área mais propensa a quedas e escorregões em qualquer residência. Pensando na proteção completa da sua família, a Projeto Vidros integra a aplicação da película de segurança de alta resistência (PS4) em seus projetos. No caso raríssimo de uma quebra do vidro temperado por forte impacto ou choque térmico, a nossa película retém 100% dos fragmentos grudados na estrutura, impedindo que pedaços caiam no chão e evitando cortes ou acidentes graves até que nossa equipe realize a manutenção técnica.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-display text-xl md:text-2xl text-petrol mt-10 mb-2">
                Modelos de Box de Vidro Mais Procurados em {bairroNome}
              </h3>

              <div className="grid gap-4 not-prose">
                {MODELOS.map((m) => (
                  <div key={m.title} className="flex gap-4 items-start p-5 rounded-xl border border-border bg-card">
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-petrol/10 flex items-center justify-center">
                      <m.icon className="w-5 h-5 text-petrol" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg text-petrol mb-1">{m.title}</h4>
                      <p className="text-base text-foreground/75 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2 text-base">
                <Link
                  to="/box-seguro"
                  className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-copper transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-copper" />
                  Conheça o Box + Seguro
                </Link>
                <Link
                  to="/box-de-banheiro"
                  className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-copper transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-copper" />
                  Ver catálogo de Box de Banheiro
                </Link>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-petrol p-8 md:p-10 text-center">
              <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-3">
                Orçamento rápido em {bairroNome}
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-6">
                Solicite seu Box de Vidro hoje mesmo
              </h3>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCta}
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm md:text-base px-6 md:px-10 py-4 rounded-lg shadow-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                QUERO MEU BOX EM {bairroNome.toUpperCase()}
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicosBairro;
