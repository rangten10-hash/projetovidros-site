import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Shield,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { useSeo, SITE_URL } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";
import { findBairro, ZONA_LABEL, type Zona } from "@/lib/bairros";
import { pickEspelhoImagePair } from "@/lib/espelhoImages";
import { pickEspelhoVariacao } from "@/lib/espelhoBairroContent";

const MODELOS_ESPELHO: { titulo: string; desc: string }[] = [
  {
    titulo: "Espelho de parede inteira",
    desc: "Painéis grandes que ampliam salas, halls e academias com máxima reflexão de luz.",
  },
  {
    titulo: "Espelho para banheiro antiumidade",
    desc: "Prata protegida contra oxidação, ideal para banheiros e lavabos.",
  },
  {
    titulo: "Espelho com acabamento bisotê",
    desc: "Bordas chanfradas 20mm que valorizam ambientes clássicos e contemporâneos.",
  },
  {
    titulo: "Espelho lapidado reto",
    desc: "Acabamento discreto e moderno, perfeito para composições minimalistas.",
  },
  {
    titulo: "Espelho decorativo sob medida",
    desc: "Formatos personalizados com fixação em silicone neutro que não mancha a prata.",
  },
];

const EspelhosBairro = () => {
  const { bairro } = useParams<{ bairro: string }>();
  const slug = bairro?.toLowerCase() ?? "";
  const data = slug ? findBairro(slug) : undefined;

  const bairroNome = data?.nome ?? "";
  const regiao = data ? ZONA_LABEL[data.zona as Zona] : "";
  const variacao = data ? pickEspelhoVariacao(slug) : null;

  const title = variacao
    ? `${variacao.title(bairroNome)} | Projeto Vidros`
    : "";
  const description = data
    ? `Espelhos sob medida em ${bairroNome} (${regiao}): decorativos, bisotê, lapidados e antiumidade para banheiro. Instalação profissional. Orçamento pelo WhatsApp.`
    : "";

  useSeo({
    title,
    description,
    path: `/espelhos/${slug}`,
    image: `${SITE_URL}/icon-512.png`,
    jsonLd: data
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Espelhos Sob Medida em ${bairroNome}`,
          serviceType:
            "Fabricação e instalação de espelhos decorativos sob medida",
          description,
          areaServed: { "@type": "Place", name: `${bairroNome}, São Paulo` },
          url: `${SITE_URL}/espelhos/${slug}`,
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

  if (!data || !variacao) return <Navigate to="/espelhos" replace />;

  const [hero, secundaria] = pickEspelhoImagePair(slug);

  const waMsg = `Olá! Estou no site e gostaria de um orçamento de espelhos sob medida aqui em ${bairroNome}.`;
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
              to="/espelhos"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para Espelhos
            </Link>

            <span className="text-copper text-xs font-semibold tracking-widest uppercase">
              Espelhos Sob Medida · {bairroNome}
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
                alt={`${hero.alt} — instalado em ${bairroNome}`}
                loading="eager"
                className="block w-auto h-auto max-w-full max-h-[350px] md:max-h-[450px] object-contain"
              />
            </div>

            {/* Parágrafo rotativo (uma das 5 variações) */}
            <p className="text-foreground/85 text-lg leading-relaxed mb-8">
              {variacao.paragraph(bairroNome, regiao)}
            </p>

            <h3 className="font-display text-xl md:text-2xl text-petrol mb-2">
              Modelos de Espelho mais procurados em {bairroNome}
            </h3>
            <p className="text-foreground/80 mb-6">
              Confira os formatos e acabamentos que mais entregamos na região:
            </p>

            <div className="grid gap-3 mb-10">
              {MODELOS_ESPELHO.map((m) => (
                <div
                  key={m.titulo}
                  className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-petrol/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-petrol" />
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

            {/* Qualidade */}
            <div className="rounded-xl border border-border bg-card p-6 md:p-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-petrol/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-petrol" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-petrol mb-2">
                    Espelhos Cristais Cebrace e Guardian
                  </h4>
                  <p className="text-foreground/80 text-base leading-relaxed">
                    Todo espelho instalado em {bairroNome} utiliza cristais das
                    marcas <strong>Cebrace</strong> e <strong>Guardian</strong>,
                    com fixação em silicone neutro que não agride a prata do
                    espelho, garantindo durabilidade e ausência de manchas
                    precoces.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA WhatsApp */}
            <div className="rounded-2xl bg-petrol p-8 md:p-10 text-center mb-10">
              <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-3">
                Orçamento rápido em {bairroNome}
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-6">
                Quer ver fotos reais de espelhos instalados aqui em {bairroNome}?
                Solicite os modelos pelo WhatsApp!
              </h3>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCta}
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm md:text-base px-6 md:px-10 py-4 rounded-lg shadow-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                VER FOTOS DE ESPELHOS EM {bairroNome.toUpperCase()}
              </a>
            </div>

            {/* Galeria secundária */}
            <div className="rounded-2xl overflow-hidden shadow-md mb-10 w-full flex items-center justify-center bg-background">
              <img
                src={secundaria.src}
                alt={`${secundaria.alt} — projeto Projeto Vidros em ${bairroNome}`}
                loading="lazy"
                className="block w-auto h-auto max-w-full max-h-[350px] md:max-h-[450px] object-contain"
              />
            </div>

            {/* Navegação interna */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-border text-sm">
              <Link
                to="/espelhos"
                className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-copper transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-copper" />
                Ver todos os modelos de Espelhos
              </Link>
              <Link
                to="/espelhos-led"
                className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-copper transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-copper" />
                Espelhos com LED
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

export default EspelhosBairro;
