import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle2, MessageCircle, ArrowLeft, Sparkles } from "lucide-react";
import { useSeo, SITE_URL } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";
import { findBairro, ZONA_LABEL, type Zona } from "@/lib/bairros";
import { pickProjetoVariacao } from "@/lib/projetoBairroContent";
import { PROJETO_SERVICOS } from "@/lib/projetoServicos";
import projeto1 from "@/assets/projeto-1.webp";
import projeto2 from "@/assets/projeto-2.webp";
import projeto3 from "@/assets/projeto-3.webp";
import projeto4 from "@/assets/projeto-4.webp";
import projeto5 from "@/assets/projeto-5.webp";
import projeto6 from "@/assets/projeto-6.webp";
import projeto7 from "@/assets/projeto-7.webp";
import projeto8 from "@/assets/projeto-8.webp";

const IMGS = [projeto1, projeto2, projeto3, projeto4, projeto5, projeto6, projeto7, projeto8];

function hashSlug(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

const ProjetosBairro = () => {
  const { bairro } = useParams<{ bairro: string }>();
  const slug = bairro?.toLowerCase() ?? "";
  const data = slug ? findBairro(slug) : undefined;

  const bairroNome = data?.nome ?? "";
  const regiao = data ? ZONA_LABEL[data.zona as Zona] : "";
  const variacao = data ? pickProjetoVariacao(slug) : null;

  const title = variacao
    ? `${variacao.title(bairroNome)} | Projeto Vidros`
    : "";
  const description = data
    ? `Projetos de vidraçaria em ${bairroNome} (${regiao}): janelas, guarda-corpo, sacadas, vitrines, divisórias e coberturas de vidro sob medida. Orçamento pelo WhatsApp.`
    : "";

  useSeo({
    title,
    description,
    path: `/projetos/${slug}`,
    image: `${SITE_URL}/icon-512.png`,
    jsonLd: data
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Projetos de Vidraçaria Sob Medida em ${bairroNome}`,
          serviceType:
            "Projetos de vidraçaria: janelas, guarda-corpo, sacadas, vitrines, divisórias e coberturas",
          description,
          areaServed: { "@type": "Place", name: `${bairroNome}, São Paulo` },
          url: `${SITE_URL}/projetos/${slug}`,
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

  if (!data || !variacao) return <Navigate to="/projetos" replace />;

  const base = hashSlug(slug);
  const hero = IMGS[base % IMGS.length];
  const secundaria = IMGS[(base + 3) % IMGS.length];

  const waMsg = `Olá! Estou no site e gostaria de um orçamento para um projeto de vidraçaria aqui em ${bairroNome}.`;
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
              to="/projetos"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para Projetos
            </Link>

            <span className="text-copper text-xs font-semibold tracking-widest uppercase">
              Vidraçaria Especializada · {bairroNome}
            </span>

            <h1 className="font-display text-3xl md:text-5xl text-petrol mt-3 mb-4 leading-tight">
              {variacao.title(bairroNome)}
            </h1>
            <h2 className="font-display text-xl md:text-2xl text-foreground/80 mb-8">
              Projetos residenciais e comerciais sob medida em {bairroNome} e {regiao}
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-xl mb-8 w-full flex items-center justify-center bg-background">
              <img
                src={hero}
                alt={`Projeto de vidraçaria instalado em ${bairroNome}`}
                loading="eager"
                className="block w-auto h-auto max-w-full max-h-[350px] md:max-h-[450px] object-contain"
              />
            </div>

            <p className="text-foreground/85 text-lg leading-relaxed mb-10">
              {variacao.paragraph(bairroNome, regiao)}
            </p>

            <h3 className="font-display text-xl md:text-2xl text-petrol mb-2">
              Serviços de Vidraçaria mais procurados em {bairroNome}
            </h3>
            <p className="text-foreground/80 mb-6">
              Projetos que executamos com frequência na região:
            </p>

            <div className="grid gap-3 mb-10">
              {PROJETO_SERVICOS.map((s) => (
                <div
                  key={s.id}
                  className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-petrol/10 flex items-center justify-center">
                    <s.Icon className="w-5 h-5 text-petrol" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-petrol mb-1">
                      {s.titulo} em {bairroNome}
                    </h4>
                    <p className="text-foreground/75 text-base">{s.descricao}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-card p-6 md:p-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-petrol/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-petrol" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-petrol mb-2">
                    Qualidade e Garantia Técnica
                  </h4>
                  <p className="text-foreground/80 text-base leading-relaxed">
                    Todos os projetos executados em {bairroNome} utilizam vidros
                    temperados e laminados de fábricas reconhecidas (Cebrace,
                    Guardian), com acabamento CNC, ferragens premium e
                    instalação limpa por equipe própria — cumprindo integralmente
                    a norma NBR 14698.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-petrol p-8 md:p-10 text-center mb-10">
              <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-3">
                Orçamento rápido em {bairroNome}
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-6">
                Quer ver fotos reais de projetos entregues aqui em {bairroNome}?
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
                FALAR COM EQUIPE EM {bairroNome.toUpperCase()}
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md mb-10 w-full flex items-center justify-center bg-background">
              <img
                src={secundaria}
                alt={`Projeto de vidraçaria Projeto Vidros — ${bairroNome}`}
                loading="lazy"
                className="block w-auto h-auto max-w-full max-h-[350px] md:max-h-[450px] object-contain"
              />
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-border text-sm">
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-copper transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-copper" />
                Ver todos os projetos
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

export default ProjetosBairro;
