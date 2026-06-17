import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BoxFinishSelector from "@/components/BoxFinishSelector";
import {
  Shield,
  CheckCircle2,
  MessageCircle,
  Ruler,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { useSeo, SITE_URL } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";
import { findBairro } from "@/lib/bairros";
import { pickRandomBoxIncolorImage } from "@/lib/boxIncolorImages";
import { buildBairroMetaDescription } from "@/lib/bairroProfiles";
import BairroAtendimentoSection from "@/components/BairroAtendimentoSection";
import BairroFaq from "@/components/BairroFaq";

const MODELOS_INCOLOR: { titulo: string; desc: string }[] = [
  { titulo: "Box frontal incolor", desc: "Ideal para vãos retos, garantindo um visual limpo e funcional." },
  { titulo: "Box de canto incolor", desc: "Modelo em L que otimiza o espaço de banheiros quadrados." },
  { titulo: "Box de abrir incolor", desc: "Porta de giro tradicional com vedação perfeita e metais nobres." },
  { titulo: "Box elegance incolor", desc: "O ápice do design contemporâneo com roldanas de inox aparentes deslizantes." },
  { titulo: "Box flex incolor", desc: "Sistema articulado/camarão que garante até 90% de abertura em vãos estreitos." },
  { titulo: "Box piso teto incolor", desc: "Estrutura minimalista que vai até o teto, criando o efeito de uma parede de vidro invisível (estilo sauna)." },
];

const BoxIncolorBairro = () => {
  const { bairro } = useParams<{ bairro: string }>();
  const slug = bairro?.toLowerCase() ?? "";
  const data = slug ? findBairro(slug) : undefined;

  const bairroNome = data?.nome ?? "";
  const title = `Box de Vidro Incolor em ${bairroNome} | Projeto Vidros`;
  const description = slug
    ? buildBairroMetaDescription(slug, "incolor")
    : `Box de Vidro Incolor em ${bairroNome}.`;

  useSeo({
    title,
    description,
    path: `/box-incolor/${slug}`,
    image: `${SITE_URL}/icon-512.png`,
    jsonLd: data
      ? {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `Projeto Vidros – Box Incolor em ${bairroNome}`,
          description,
          areaServed: { "@type": "Place", name: `${bairroNome}, São Paulo` },
          telephone: "+5511915485945",
          url: `${SITE_URL}/box-incolor/${slug}`,
        }
      : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) return <Navigate to="/box-incolor" replace />;

  const hero = pickRandomBoxIncolorImage(slug);
  const secundaria = pickRandomBoxIncolorImage(`${slug}-2`);

  const waMsg = `Olá! Estou no site da Projeto Vidros e gostaria de ver fotos e valores de modelos de box incolor para meu banheiro aqui em ${bairroNome}.`;
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
              to="/box-incolor"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para Box Incolor
            </Link>

            <span className="text-copper text-xs font-semibold tracking-widest uppercase">
              Box Incolor · {bairroNome}
            </span>

            {/* H1 dinâmico */}
            <h1 className="font-display text-3xl md:text-5xl text-petrol mt-3 mb-4 leading-tight">
              Box de Vidro Incolor em {bairroNome}
            </h1>
            <h2 className="font-display text-xl md:text-2xl text-foreground/80 mb-8">
              Box de Banheiro Incolor Sob Medida com Instalação Rápida em {bairroNome}
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-xl mb-8 w-full flex items-center justify-center bg-background">
              <img
                src={hero.src}
                alt={`${hero.alt} — instalado em ${bairroNome}`}
                loading="eager"
                className="block w-auto h-auto max-w-full max-h-[350px] md:max-h-[450px] object-contain"
              />
            </div>

            {/* Parágrafo GEO automatizado */}
            <p className="text-foreground/85 text-lg leading-relaxed mb-6">
              Procurando por <strong>box para banheiro incolor</strong> com instalação rápida e
              precisa? A <strong className="text-foreground">Projeto Vidros</strong> é
              especialista na fabricação e montagem de{" "}
              <strong>box de vidro incolor em {bairroNome}</strong>. Atendemos residências e
              condomínios da região com soluções que trazem mais claridade e espaço, como o
              sofisticado <strong>box elegance incolor</strong>, o prático{" "}
              <strong>box flex incolor</strong>, além dos modelos tradicionais (frontal, de
              canto ou de abrir). Agende sua{" "}
              <strong>medição digital a laser em {bairroNome}</strong>.
            </p>

            {/* Atendimento na região — texto varia com perfil do bairro */}
            <BairroAtendimentoSection slug={slug} categoria="incolor" />

            {/* H3 + Modelos específicos */}
            <h3 className="font-display text-xl md:text-2xl text-petrol mb-2">
              Onde Encontrar Box de Vidro Incolor com Acabamento de Alta Qualidade em {bairroNome}?
            </h3>
            <p className="text-foreground/80 mb-6">
              Confira os modelos de Box Incolor mais procurados pelos clientes de {bairroNome}:
            </p>

            <div className="grid gap-3 mb-10">
              {MODELOS_INCOLOR.map((m) => (
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

            {/* Segurança */}
            <div className="rounded-xl border border-border bg-card p-6 md:p-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-petrol/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-petrol" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-petrol mb-2">
                    Vidro Temperado 8mm Cebrace / Guardian
                  </h4>
                  <p className="text-foreground/80 text-base leading-relaxed">
                    Todo Box Incolor instalado em {bairroNome} é fabricado com vidro temperado
                    de 8mm das marcas <strong>Cebrace</strong> e <strong>Guardian</strong>,
                    certificadas pelas normas ABNT. Combine com a película{" "}
                    <Link to="/box-seguro" className="text-copper underline-offset-2 hover:underline">
                      Box + Seguro
                    </Link>{" "}
                    para retenção total dos fragmentos em caso de impacto.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA WhatsApp dinâmico */}
            <div className="rounded-2xl bg-petrol p-8 md:p-10 text-center mb-10">
              <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-3">
                Orçamento rápido em {bairroNome}
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-6">
                Quer ver fotos e valores reais de Box Incolor aqui em {bairroNome}? Solicite
                os modelos pelo WhatsApp!
              </h3>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCta}
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm md:text-base px-6 md:px-10 py-4 rounded-lg shadow-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                VER FOTOS DE BOX INCOLOR EM {bairroNome.toUpperCase()}
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
                to="/box-de-banheiro"
                className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-copper transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-copper" />
                Ver todos os Modelos de Box de Banheiro
              </Link>
              <Link
                to="/box-seguro"
                className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-copper transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-copper" />
                Tecnologia Película Box + Seguro
              </Link>
              <Link
                to={`/servicos/${slug}`}
                className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-copper transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-copper" />
                Vidraçaria em {bairroNome}
              </Link>
            </div>

            {/* FAQ específico do bairro + categoria */}
            <BairroFaq slug={slug} categoria="incolor" />
          </div>
        </article>

        <BoxFinishSelector current="incolor" className="mt-16" compact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BoxIncolorBairro;
