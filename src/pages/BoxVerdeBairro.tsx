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
import { pickRandomBoxVerdeImage } from "@/lib/boxVerdeImages";
import BairroAtendimentoSection from "@/components/BairroAtendimentoSection";
import BairroFaq from "@/components/BairroFaq";

const MODELOS_VERDE: { titulo: string; desc: string }[] = [
  { titulo: "Box frontal verde", desc: "Ideal para vãos retos — destaca o tom verde sem comprometer a luminosidade." },
  { titulo: "Box de canto verde", desc: "Modelo em L que valoriza banheiros quadrados com identidade contemporânea." },
  { titulo: "Box de abrir verde", desc: "Porta de giro tradicional com vedação perfeita e ferragens premium." },
  { titulo: "Box elegance verde", desc: "Design contemporâneo com roldanas de inox aparentes e tom natural sofisticado." },
  { titulo: "Box flex verde", desc: "Sistema articulado/camarão para vãos estreitos com tonalidade biofílica." },
  { titulo: "Box piso teto verde", desc: "Estrutura minimalista até o teto, criando o efeito de parede de vidro verde temperado." },
];

const BoxVerdeBairro = () => {
  const { bairro } = useParams<{ bairro: string }>();
  const slug = bairro?.toLowerCase() ?? "";
  const data = slug ? findBairro(slug) : undefined;

  const bairroNome = data?.nome ?? "";
  const title = `${bairroNome} | Box de Vidro Verde Direto da Fábrica`;
  const description = `Box de banheiro verde em ${bairroNome} com instalação rápida. Fabricação própria, corte CNC de alta precisão e vidro temperado verde sob medida. Peça seu orçamento pelo WhatsApp!`;

  useSeo({
    title,
    description,
    path: `/box-verde/${slug}`,
    image: `${SITE_URL}/icon-512.png`,
    jsonLd: data
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Instalação de Box Verde em ${bairroNome}`,
          serviceType: "Fabricação e instalação de box de banheiro em vidro temperado verde 8mm",
          description,
          areaServed: { "@type": "Place", name: `${bairroNome}, São Paulo` },
          url: `${SITE_URL}/box-verde/${slug}`,
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

  if (!data) return <Navigate to="/box-verde" replace />;

  const hero = pickRandomBoxVerdeImage(slug);
  const secundaria = pickRandomBoxVerdeImage(`${slug}-2`);

  const waMsg = `Olá! Estou no site da Projeto Vidros e gostaria de ver fotos e valores de modelos de box verde para meu banheiro aqui em ${bairroNome}.`;
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
              to="/box-verde"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para Box Verde
            </Link>

            <span className="text-copper text-xs font-semibold tracking-widest uppercase">
              Box Verde · {bairroNome}
            </span>

            <h1 className="font-display text-3xl md:text-5xl text-petrol mt-3 mb-4 leading-tight">
              Box de Vidro Verde em {bairroNome}
            </h1>
            <h2 className="font-display text-xl md:text-2xl text-foreground/80 mb-8">
              Box de Banheiro Verde Sob Medida com Instalação Rápida em {bairroNome}
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
              Procurando por <strong>box para banheiro verde</strong> com instalação rápida e
              precisa? A <strong className="text-foreground">Projeto Vidros</strong> é
              especialista na fabricação e montagem de{" "}
              <strong>box de vidro verde em {bairroNome}</strong>. Atendemos residências e
              condomínios da região com uma estética contemporânea e biofílica — do{" "}
              <strong>box elegance verde</strong> ao prático <strong>box flex verde</strong>,
              passando pelos modelos tradicionais (frontal, de canto ou de abrir). Agende sua{" "}
              <strong>medição digital a laser em {bairroNome}</strong>.
            </p>

            <BairroAtendimentoSection slug={slug} categoria="verde" />

            <h3 className="font-display text-xl md:text-2xl text-petrol mb-2">
              Modelos de Box Verde mais pedidos em {bairroNome}
            </h3>
            <p className="text-foreground/80 mb-6">
              Confira os modelos de Box Verde mais procurados pelos clientes de {bairroNome}:
            </p>

            <div className="grid gap-3 mb-10">
              {MODELOS_VERDE.map((m) => (
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
                    Vidro Verde Temperado 8mm
                  </h4>
                  <p className="text-foreground/80 text-base leading-relaxed">
                    Todo Box Verde instalado em {bairroNome} é fabricado com vidro temperado
                    de 8mm, com tonalidade uniforme e certificação ABNT. Combine com a película{" "}
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
                Quer ver fotos e valores reais de Box Verde aqui em {bairroNome}? Solicite os
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
                VER FOTOS DE BOX VERDE EM {bairroNome.toUpperCase()}
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

            <BairroFaq slug={slug} categoria="verde" />
          </div>
        </article>

        <BoxFinishSelector current="verde" className="mt-16" compact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BoxVerdeBairro;
