import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Shield,
  CheckCircle2,
  MessageCircle,
  DoorOpen,
  ArrowLeft,
} from "lucide-react";
import { useSeo, SITE_URL } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";
import { findBairro, ZONA_LABEL, type Zona } from "@/lib/bairros";
import { pickPortaImagePair } from "@/lib/portaImages";
import { pickPortaVariacao } from "@/lib/portaBairroContent";

const MODELOS_PORTA: { titulo: string; desc: string }[] = [
  {
    titulo: "Porta Vision (correr)",
    desc: "Sistema deslizante com roldanas aparentes Elegance e trilho com fixação invisível.",
  },
  {
    titulo: "Porta Flex (camarão)",
    desc: "Articulada, libera mais de 90% do vão — perfeita para banheiros e ambientes compactos.",
  },
  {
    titulo: "Porta Versatik",
    desc: "Correr sobreposto com abertura até 2/3 do vão para varandas, áreas gourmet e integração.",
  },
  {
    titulo: "Porta de Abrir (giro)",
    desc: "Vidro temperado 8mm ou 10mm com ferragens premium em inox ou alumínio.",
  },
  {
    titulo: "Porta de Correr Tradicional",
    desc: "Deslizamento suave com roldanas de alta performance, ideal para vãos de circulação.",
  },
];

const PortasVidroBairro = () => {
  const { bairro } = useParams<{ bairro: string }>();
  const slug = bairro?.toLowerCase() ?? "";
  const data = slug ? findBairro(slug) : undefined;

  const bairroNome = data?.nome ?? "";
  const regiao = data ? ZONA_LABEL[data.zona as Zona] : "";
  const variacao = data ? pickPortaVariacao(slug) : null;

  const title = variacao
    ? `${variacao.title(bairroNome)} | Projeto Vidros`
    : "";
  const description = data
    ? `Portas de vidro sob medida em ${bairroNome} (${regiao}): correr, abrir, flex camarão, Vision e Versatik. Vidro temperado 8/10mm. Orçamento pelo WhatsApp.`
    : "";

  useSeo({
    title,
    description,
    path: `/portas-de-vidro/${slug}`,
    image: `${SITE_URL}/icon-512.png`,
    jsonLd: data
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Portas de Vidro Sob Medida em ${bairroNome}`,
          serviceType:
            "Fabricação e instalação de portas de vidro temperado sob medida",
          description,
          areaServed: { "@type": "Place", name: `${bairroNome}, São Paulo` },
          url: `${SITE_URL}/portas-de-vidro/${slug}`,
          provider: {
            "@type": "LocalBusiness",
            name: "Projeto Vidros",
            telephone: "+5511915485945",
            areaServed: `${bairroNome}, São Paulo`,
          },
        }
      : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data || !variacao) return <Navigate to="/portas-de-vidro" replace />;

  const [hero, secundaria] = pickPortaImagePair(slug);

  const waMsg = `Olá! Estou no site e gostaria de um orçamento de portas de vidro sob medida aqui em ${bairroNome}.`;
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
            <Link
              to="/portas-de-vidro"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para Portas de Vidro
            </Link>

            <span className="text-copper text-xs font-semibold tracking-widest uppercase">
              Portas de Vidro Sob Medida · {bairroNome}
            </span>

            <h1 className="font-display text-3xl md:text-5xl text-petrol mt-3 mb-4 leading-tight">
              {variacao.title(bairroNome)}
            </h1>
            <h2 className="font-display text-xl md:text-2xl text-foreground/80 mb-8">
              Fabricação, corte e instalação profissional em {bairroNome} e {regiao}
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-xl mb-8 w-full flex items-center justify-center bg-background">
              <img
                src={hero.src}
                alt={`${hero.alt} — instalada em ${bairroNome}`}
                loading="eager"
                className="block w-auto h-auto max-w-full max-h-[350px] md:max-h-[450px] object-contain"
              />
            </div>

            <p className="text-foreground/85 text-lg leading-relaxed mb-8">
              {variacao.paragraph(bairroNome, regiao)}
            </p>

            <h3 className="font-display text-xl md:text-2xl text-petrol mb-2">
              Modelos de Porta de Vidro mais procurados em {bairroNome}
            </h3>
            <p className="text-foreground/80 mb-6">
              Sistemas que mais entregamos na região:
            </p>

            <div className="grid gap-3 mb-10">
              {MODELOS_PORTA.map((m) => (
                <div
                  key={m.titulo}
                  className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-petrol/10 flex items-center justify-center">
                    <DoorOpen className="w-5 h-5 text-petrol" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-petrol mb-1">
                      {m.titulo} em {bairroNome}
                    </h4>
                    <p className="text-foreground/75 text-base">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-card p-6 md:p-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-petrol/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-petrol" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-petrol mb-2">
                    Vidro Temperado de Segurança 8mm / 10mm
                  </h4>
                  <p className="text-foreground/80 text-base leading-relaxed">
                    Toda porta instalada em {bairroNome} utiliza vidro temperado
                    até 5x mais resistente que o vidro comum. Em caso de quebra,
                    estilhaça em pequenos fragmentos arredondados que reduzem o
                    risco de acidentes — norma NBR 14698.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-petrol p-8 md:p-10 text-center mb-10">
              <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-3">
                Orçamento rápido em {bairroNome}
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-6">
                Quer ver fotos reais de portas de vidro instaladas aqui em {bairroNome}?
                Fale com nossa equipe pelo WhatsApp!
              </h3>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCta}
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm md:text-base px-6 md:px-10 py-4 rounded-lg shadow-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                VER PORTAS DE VIDRO EM {bairroNome.toUpperCase()}
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md mb-10 w-full flex items-center justify-center bg-background">
              <img
                src={secundaria.src}
                alt={`${secundaria.alt} — projeto Projeto Vidros em ${bairroNome}`}
                loading="lazy"
                className="block w-auto h-auto max-w-full max-h-[350px] md:max-h-[450px] object-contain"
              />
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-border text-sm">
              <Link
                to="/portas-de-vidro"
                className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-copper transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-copper" />
                Ver todos os modelos de Portas
              </Link>
              <Link
                to={`/servicos/${slug}`}
                className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-copper transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-copper" />
                Vidraçaria em {bairroNome}
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PortasVidroBairro;
