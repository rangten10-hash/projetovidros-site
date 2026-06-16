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
import { pickRandomBoxFumeImage } from "@/lib/boxFumeImages";

const MODELOS_FUME: { titulo: string; desc: string }[] = [
  {
    titulo: "Box de vidro frontal fumê",
    desc: "Ideal para vãos retos, com perfil de correr discreto e amplo aproveitamento de luz.",
  },
  {
    titulo: "Box de vidro de canto fumê",
    desc: "Formato em L para otimização de espaço em banheiros com chuveiro no canto.",
  },
  {
    titulo: "Box de vidro de abrir fumê",
    desc: "Porta de giro tradicional, perfeita para banheiros com bom espaço de circulação.",
  },
  {
    titulo: "Box de vidro elegance fumê",
    desc: "Com roldanas aparentes premium em metais nobres, deslizamento silencioso.",
  },
  {
    titulo: "Box de vidro flex fumê",
    desc: "Sistema articulado (camarão) que libera até 90% do vão, ideal para banheiros compactos.",
  },
];

const BoxFumeBairro = () => {
  const { bairro } = useParams<{ bairro: string }>();
  const slug = bairro?.toLowerCase() ?? "";
  const data = slug ? findBairro(slug) : undefined;

  const bairroNome = data?.nome ?? "";
  const title = `Box de Vidro Fumê em ${bairroNome} | Projeto Vidros`;
  const description = `Instalação de Box de Vidro Fumê em ${bairroNome} com vidro temperado 8mm Cebrace/Guardian. Medição digital a laser, modelos frontal, canto, abrir, elegance e flex. Orçamento rápido no WhatsApp.`;

  useSeo({
    title,
    description,
    path: `/box-fume/${slug}`,
    image: `${SITE_URL}/icon-512.png`,
    jsonLd: data
      ? {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `Projeto Vidros – Box Fumê em ${bairroNome}`,
          description,
          areaServed: { "@type": "Place", name: `${bairroNome}, São Paulo` },
          telephone: "+5511915485945",
          url: `${SITE_URL}/box-fume/${slug}`,
        }
      : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) return <Navigate to="/box-fume" replace />;

  const hero = pickRandomBoxFumeImage(slug);
  const secundaria = pickRandomBoxFumeImage(`${slug}-2`);

  const waMsg = `Olá! Estou no site e gostaria de ver fotos de modelos de box fumê instalados aqui em ${bairroNome}.`;
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
              to="/box-fume"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para Box Fumê
            </Link>

            <span className="text-copper text-xs font-semibold tracking-widest uppercase">
              Box Fumê · {bairroNome}
            </span>

            {/* H1 dinâmico */}
            <h1 className="font-display text-3xl md:text-5xl text-petrol mt-3 mb-4 leading-tight">
              Box de Vidro Fumê em {bairroNome}
            </h1>
            <h2 className="font-display text-xl md:text-2xl text-foreground/80 mb-8">
              Procurando Box para Banheiro Fumê com Instalação Rápida em {bairroNome}?
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-xl mb-8 w-full max-h-[350px] md:max-h-[450px] flex items-center justify-center bg-background">
              <img
                src={hero.src}
                alt={`${hero.alt} — instalado em ${bairroNome}`}
                loading="eager"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Parágrafo GEO automatizado */}
            <p className="text-foreground/85 text-lg leading-relaxed mb-6">
              A <strong className="text-foreground">Projeto Vidros</strong> é especialista na
              fabricação e instalação de <strong>box de vidro fumê em {bairroNome}</strong>.
              Atendemos a residências e condomínios da região com uma linha completa que inclui
              o elegante <strong>box de vidro elegance fumê</strong>, o prático{" "}
              <strong>box de vidro flex fumê</strong> para espaços reduzidos, além dos modelos
              tradicionais de <strong>box de vidro frontal fumê</strong>, de canto ou de abrir.
              Realizamos <strong>medição digital a laser em {bairroNome}</strong> para garantir
              uma vedação impecável e oferecemos a opção de aplicação da película{" "}
              <Link to="/box-seguro" className="text-copper underline-offset-2 hover:underline">
                Box + Seguro
              </Link>
              .
            </p>

            {/* Bloco SEO local automatizado */}
            <div className="rounded-xl border border-copper/30 bg-copper/5 p-6 md:p-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-copper/20 flex items-center justify-center">
                  <Ruler className="w-6 h-6 text-copper" />
                </div>
                <p className="text-foreground/85 text-base leading-relaxed">
                  Nossa equipe realiza medições digitais a laser e instalação rápida de{" "}
                  <strong>Box Fumê em toda a região de {bairroNome}</strong>, atendendo a
                  residências e condomínios com o padrão de acabamento Projeto Vidros.
                </p>
              </div>
            </div>

            {/* H3 + Modelos específicos */}
            <h3 className="font-display text-xl md:text-2xl text-petrol mb-2">
              Modernidade e Segurança com Box de Banheiro Fumê Sob Medida em {bairroNome}
            </h3>
            <p className="text-foreground/80 mb-6">
              Confira os modelos de Box Fumê mais procurados pelos clientes de {bairroNome}:
            </p>

            <div className="grid gap-3 mb-10">
              {MODELOS_FUME.map((m) => (
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
                    Todo Box Fumê instalado em {bairroNome} é fabricado com vidro temperado
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
                Quer ver fotos reais de Box Fumê instalados aqui em {bairroNome}? Solicite os
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
                VER FOTOS DE BOX FUMÊ EM {bairroNome.toUpperCase()}
              </a>
            </div>

            {/* Galeria secundária */}
            <div className="rounded-2xl overflow-hidden shadow-md mb-10 w-full max-h-[350px] md:max-h-[450px] flex items-center justify-center bg-background">
              <img
                src={secundaria.src}
                alt={`${secundaria.alt} — projeto Projeto Vidros em ${bairroNome}`}
                loading="lazy"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Navegação interna discreta */}
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
          </div>
        </article>

        {/* Seletor de acabamento (rodapé da página) */}
        <BoxFinishSelector current="fume" className="mt-16" compact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BoxFumeBairro;
