import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BoxFinishSelector from "@/components/BoxFinishSelector";
import { Shield, CheckCircle2, MessageCircle, Sparkles, ArrowLeft } from "lucide-react";
import { useSeo, SITE_URL } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";
import { findBairro } from "@/lib/bairros";
import { pickRandomBoxBronzeImage } from "@/lib/boxBronzeImages";
import BairroAtendimentoSection from "@/components/BairroAtendimentoSection";
import BairroFaq from "@/components/BairroFaq";

const MODELOS_BRONZE: { titulo: string; desc: string }[] = [
  { titulo: "Box frontal bronze", desc: "Ideal para vãos retos — entrega calor visual e privacidade discreta." },
  { titulo: "Box de canto bronze", desc: "Modelo em L que aquece visualmente banheiros quadrados." },
  { titulo: "Box de abrir bronze", desc: "Porta de giro tradicional com vedação perfeita e ferragens douradas ou pretas." },
  { titulo: "Box elegance bronze", desc: "Design clássico-moderno com roldanas de inox aparentes e tom âmbar." },
  { titulo: "Box flex bronze", desc: "Sistema articulado/camarão para vãos estreitos com pegada retrô-moderna." },
  { titulo: "Box piso teto bronze", desc: "Estrutura minimalista até o teto, criando o efeito de parede de vidro bronze temperado." },
];

const BoxBronzeBairro = () => {
  const { bairro } = useParams<{ bairro: string }>();
  const slug = bairro?.toLowerCase() ?? "";
  const data = slug ? findBairro(slug) : undefined;

  const bairroNome = data?.nome ?? "";
  const title = `${bairroNome} | Box de Vidro Bronze Direto da Fábrica`;
  const description = `Box de banheiro bronze em ${bairroNome} com instalação rápida. Fabricação própria, corte CNC de alta precisão e vidro temperado bronze sob medida. Peça seu orçamento pelo WhatsApp!`;

  useSeo({
    title,
    description,
    path: `/box-bronze/${slug}`,
    image: `${SITE_URL}/icon-512.png`,
    jsonLd: data
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Instalação de Box Bronze em ${bairroNome}`,
          serviceType: "Fabricação e instalação de box de banheiro em vidro temperado bronze 8mm",
          description,
          areaServed: { "@type": "Place", name: `${bairroNome}, São Paulo` },
          url: `${SITE_URL}/box-bronze/${slug}`,
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

  if (!data) return <Navigate to="/box-bronze" replace />;

  const hero = pickRandomBoxBronzeImage(slug);
  const secundaria = pickRandomBoxBronzeImage(`${slug}-2`);

  const waMsg = `Olá! Estou no site da Projeto Vidros e gostaria de ver fotos e valores de modelos de box bronze para meu banheiro aqui em ${bairroNome}.`;
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
              to="/box-bronze"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para Box Bronze
            </Link>

            <span className="text-copper text-xs font-semibold tracking-widest uppercase">
              Box Bronze · {bairroNome}
            </span>

            <h1 className="font-display text-3xl md:text-5xl text-petrol mt-3 mb-4 leading-tight">
              Box de Vidro Bronze em {bairroNome}
            </h1>
            <h2 className="font-display text-xl md:text-2xl text-foreground/80 mb-8">
              Box de Banheiro Bronze Sob Medida com Instalação Rápida em {bairroNome}
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-xl mb-8 w-full flex items-center justify-center bg-background">
              <img
                src={hero.src}
                alt={`${hero.alt} — instalado em ${bairroNome}`}
                loading="eager"
                className="block w-auto h-auto max-w-full max-h-[350px] md:max-h-[450px] object-contain"
              />
            </div>

            <p className="text-foreground/85 text-lg leading-relaxed mb-6">
              Procurando por <strong>box para banheiro bronze</strong> com instalação rápida e
              precisa? A <strong className="text-foreground">Projeto Vidros</strong> é
              especialista na fabricação e montagem de{" "}
              <strong>box de vidro bronze em {bairroNome}</strong>. Atendemos residências e
              condomínios da região com uma estética quente e clássica-moderna — do{" "}
              <strong>box elegance bronze</strong> ao prático <strong>box flex bronze</strong>,
              passando pelos modelos tradicionais (frontal, de canto ou de abrir). Agende sua{" "}
              <strong>medição digital a laser em {bairroNome}</strong>.
            </p>

            <BairroAtendimentoSection slug={slug} categoria="bronze" />

            <h3 className="font-display text-xl md:text-2xl text-petrol mb-2">
              Modelos de Box Bronze mais pedidos em {bairroNome}
            </h3>
            <p className="text-foreground/80 mb-6">
              Confira os modelos de Box Bronze mais procurados pelos clientes de {bairroNome}:
            </p>

            <div className="grid gap-3 mb-10">
              {MODELOS_BRONZE.map((m) => (
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

            <div className="rounded-xl border border-border bg-card p-6 md:p-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-petrol/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-petrol" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-petrol mb-2">
                    Vidro Bronze Temperado 8mm
                  </h4>
                  <p className="text-foreground/80 text-base leading-relaxed">
                    Todo Box Bronze instalado em {bairroNome} é fabricado com vidro temperado
                    de 8mm, com tonalidade âmbar uniforme e certificação ABNT. Combine com a
                    película{" "}
                    <Link to="/box-seguro" className="text-copper underline-offset-2 hover:underline">
                      Box + Seguro
                    </Link>{" "}
                    para retenção total dos fragmentos em caso de impacto.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-petrol p-8 md:p-10 text-center mb-10">
              <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-3">
                Orçamento rápido em {bairroNome}
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-6">
                Quer ver fotos e valores reais de Box Bronze aqui em {bairroNome}? Solicite os
                modelos pelo WhatsApp!
              </h3>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCta}
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm md:text-base px-6 md:px-10 py-4 rounded-lg shadow-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                VER FOTOS DE BOX BRONZE EM {bairroNome.toUpperCase()}
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
              <Link to="/box-de-banheiro" className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-copper transition-colors">
                <CheckCircle2 className="w-4 h-4 text-copper" />
                Ver todos os Modelos de Box de Banheiro
              </Link>
              <Link to="/box-seguro" className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-copper transition-colors">
                <CheckCircle2 className="w-4 h-4 text-copper" />
                Tecnologia Película Box + Seguro
              </Link>
              <Link to={`/servicos/${slug}`} className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-copper transition-colors">
                <CheckCircle2 className="w-4 h-4 text-copper" />
                Vidraçaria em {bairroNome}
              </Link>
            </div>

            <BairroFaq slug={slug} categoria="bronze" />
          </div>
        </article>

        <BoxFinishSelector current="bronze" className="mt-16" compact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BoxBronzeBairro;
