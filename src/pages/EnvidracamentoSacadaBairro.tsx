import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  CloudRain,
  Volume2,
  TrendingUp,
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { useSeo, SITE_URL } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";
import { findBairro, ZONA_LABEL, type Zona } from "@/lib/bairros";
import { pickSacadaH1, sacadaIntro } from "@/lib/sacadaBairroContent";
import sacadaAntes from "@/assets/blog-sacada-unique-antes.jpg";
import sacadaDepois from "@/assets/sacada-depois-envidracada.webp";

const BENEFICIOS = [
  {
    icon: CloudRain,
    titulo: "Proteção contra chuva, vento e poeira",
    desc: "Móveis, estofados e piso protegidos o ano todo, com vedação dupla nos trilhos.",
  },
  {
    icon: Volume2,
    titulo: "Isolamento térmico e acústico",
    desc: "Reduz o ruído da rua e mantém a temperatura da varanda agradável.",
  },
  {
    icon: TrendingUp,
    titulo: "Valorização do imóvel",
    desc: "A varanda vira área útil integrada, aumentando o valor de venda e locação.",
  },
  {
    icon: ShieldCheck,
    titulo: "Segurança para crianças e pets",
    desc: "Fechamento completo com travas de segurança, sem perder a vista panorâmica.",
  },
];

const EnvidracamentoSacadaBairro = () => {
  const { bairro } = useParams<{ bairro: string }>();
  const slug = bairro?.toLowerCase() ?? "";
  const data = slug ? findBairro(slug) : undefined;

  const bairroNome = data?.nome ?? "";
  const regiao = data ? ZONA_LABEL[data.zona as Zona] : "";
  const h1 = data ? pickSacadaH1(slug, bairroNome) : "";

  const description = data
    ? `Envidraçamento de sacada e fechamento de varanda em ${bairroNome} (${regiao}): cortina de vidro retrátil sob medida, vidro temperado, alta vedação e instalação garantida. Orçamento pelo WhatsApp.`
    : "";

  useSeo({
    title: data ? `${h1} - Projeto Vidros` : "",
    description,
    path: `/envidracamento-de-sacada/${slug}`,
    image: `${SITE_URL}/icon-512.png`,
    jsonLd: data
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: h1,
          serviceType:
            "Envidraçamento de sacadas e fechamento de varandas com vidro temperado",
          description,
          areaServed: { "@type": "Place", name: `${bairroNome}, São Paulo` },
          url: `${SITE_URL}/envidracamento-de-sacada/${slug}`,
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

  if (!data) return <Navigate to="/envidracamento-de-sacada" replace />;

  const waMsg = `Olá, gostaria de um orçamento de envidraçamento de sacada para o bairro ${bairroNome}.`;
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
              to="/envidracamento-de-sacada"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para Envidraçamento de Sacada
            </Link>

            <span className="text-copper text-xs font-semibold tracking-widest uppercase">
              Envidraçamento de Sacada · {bairroNome}
            </span>

            <h1 className="font-display text-3xl md:text-5xl text-petrol mt-3 mb-4 leading-tight">
              {h1} - Projeto Vidros
            </h1>
            <h2 className="font-display text-xl md:text-2xl text-foreground/80 mb-8">
              Cortina de vidro sob medida para apartamentos em {bairroNome} e {regiao}
            </h2>

            <p className="text-foreground/85 text-lg leading-relaxed mb-10">
              {sacadaIntro(bairroNome)}
            </p>

            {/* Antes e Depois */}
            <h3 className="font-display text-2xl text-petrol mb-5">
              Antes e Depois de Sacadas Envidraçadas
            </h3>
            <div className="grid md:grid-cols-2 gap-6 items-stretch mb-10">
              <figure className="rounded-2xl overflow-hidden border border-border bg-card flex flex-col h-full">
                <div className="aspect-[4/3] w-full overflow-hidden bg-black/5">
                  <img
                    src={sacadaAntes}
                    alt={`Sacada aberta antes do envidraçamento em ${bairroNome} – Projeto Vidros Vidraçaria`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="p-4 mt-auto text-sm text-muted-foreground">
                  <strong className="text-petrol">Antes:</strong> varanda aberta em{" "}
                  {bairroNome}, exposta à chuva e à poeira.
                </figcaption>
              </figure>
              <figure className="rounded-2xl overflow-hidden border border-border bg-card flex flex-col h-full">
                <div className="aspect-[4/3] w-full overflow-hidden bg-black/5">
                  <img
                    src={sacadaDepois}
                    alt={`Sacada envidraçada com vidro temperado em ${bairroNome} – Projeto Vidros Vidraçaria`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="p-4 mt-auto text-sm text-muted-foreground">
                  <strong className="text-petrol">Depois:</strong> fechamento em vidro
                  temperado, com vista preservada.
                </figcaption>
              </figure>
            </div>

            {/* Benefícios */}
            <h3 className="font-display text-2xl text-petrol mb-5">
              Vantagens de fechar a sacada em {bairroNome}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {BENEFICIOS.map((b) => (
                <div
                  key={b.titulo}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <div className="w-10 h-10 rounded-lg bg-petrol/10 flex items-center justify-center mb-3">
                    <b.icon className="w-5 h-5 text-petrol" />
                  </div>
                  <h4 className="font-display text-lg text-petrol mb-1">
                    {b.titulo}
                  </h4>
                  <p className="text-foreground/75 text-base">{b.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA WhatsApp */}
            <div className="rounded-2xl bg-petrol p-8 md:p-10 text-center mb-10">
              <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-3">
                Orçamento sob medida em {bairroNome}
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-6">
                Quer ver fotos reais de sacadas envidraçadas aqui em {bairroNome}?
              </h3>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCta}
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm md:text-base px-6 md:px-10 py-4 rounded-lg shadow-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                ORÇAMENTO DE SACADA EM {bairroNome.toUpperCase()}
              </a>
            </div>

            {/* Navegação interna */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-border text-sm">
              <Link
                to="/envidracamento-de-sacada"
                className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-copper transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-copper" />
                Tudo sobre Envidraçamento de Sacada
              </Link>
              <Link
                to={`/servicos/${slug}`}
                className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-copper transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-copper" />
                Vidraçaria em {bairroNome}
              </Link>
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-copper transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-copper" />
                Ver projetos realizados
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

export default EnvidracamentoSacadaBairro;
