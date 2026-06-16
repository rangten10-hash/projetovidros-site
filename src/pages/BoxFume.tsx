import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BoxFinishSelector from "@/components/BoxFinishSelector";
import { Shield, Sparkles, Ruler, MessageCircle, CheckCircle2 } from "lucide-react";
import { useSeo, SITE_URL } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";
import { ZONA_BAIRROS, ZONA_LABEL, type Zona } from "@/lib/bairros";
import { pickRandomBoxFumeImage } from "@/lib/boxFumeImages";

const WA_MSG =
  "Olá! Estou no site e gostaria de ver fotos de modelos de box fumê instalados pela Projeto Vidros.";
const WA_URL = `https://wa.me/5511915485945?text=${encodeURIComponent(WA_MSG)}`;

const BoxFume = () => {
  useSeo({
    title: "Box de Vidro Fumê em São Paulo | Box Fumê 8mm Temperado — Projeto Vidros",
    description:
      "Box de banheiro fumê com vidro temperado 8mm (Cebrace/Guardian). Sofisticação, privacidade e modernidade. Medição digital a laser e instalação em toda a Grande SP.",
    path: "/box-fume",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Box de Vidro Fumê",
      description:
        "Box de banheiro em vidro temperado fumê 8mm Cebrace/Guardian com película Box + Seguro opcional.",
      brand: { "@type": "Brand", name: "Projeto Vidros" },
      category: "Box de Banheiro Fumê",
    },
  });

  const hero = pickRandomBoxFumeImage();
  const handleCta = (e: React.MouseEvent) => {
    e.preventDefault();
    gtagReportConversion(WA_URL);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 pt-6 md:pt-10">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-copper text-xs font-semibold tracking-[0.25em] uppercase">
                Acabamento Fumê
              </span>
              <h1 className="font-display text-3xl md:text-5xl text-petrol mt-3 mb-5 leading-tight">
                Box de Vidro Fumê em São Paulo
              </h1>
              <h2 className="font-display text-lg md:text-xl text-foreground/80 mb-6">
                Procurando Box para Banheiro Fumê com Instalação Rápida?
              </h2>
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
                O <strong className="text-foreground">Box Fumê</strong> da Projeto Vidros é
                fabricado em <strong>vidro temperado de 8mm</strong> nas marcas{" "}
                <strong>Cebrace</strong> e <strong>Guardian</strong>, garantindo um banheiro
                mais sofisticado, com privacidade discreta e estética contemporânea.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCta}
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm px-6 py-3 rounded-md shadow-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Orçamento Box Fumê
                </a>
                <Link
                  to="/box-seguro"
                  className="inline-flex items-center gap-2 border border-petrol text-petrol hover:bg-petrol hover:text-primary-foreground font-semibold text-sm px-6 py-3 rounded-md transition-colors"
                >
                  Película Box + Seguro
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-h-[350px] md:max-h-[450px] flex items-center justify-center bg-background">
              <img
                src={hero.src}
                alt={hero.alt}
                loading="eager"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Seletor de cores */}
        <BoxFinishSelector current="fume" className="mt-12" />

        {/* Diferenciais técnicos */}
        <section className="container mx-auto px-4 pt-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl text-petrol mb-3 text-center">
              Modernidade e Segurança com Box de Banheiro Fumê Sob Medida
            </h3>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              Cada projeto é executado com medição digital a laser e ferragens
              em alumínio reforçado — combinando privacidade visual e durabilidade premium.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: Sparkles,
                  title: "Vidro Temperado 8mm Premium",
                  desc: "Marcas Cebrace e Guardian. Resistência mecânica e térmica certificadas pelas normas ABNT.",
                },
                {
                  icon: Shield,
                  title: "Privacidade Sofisticada",
                  desc: "A tonalidade fumê filtra a visão e a luz, gerando um efeito spa moderno sem escurecer o ambiente.",
                },
                {
                  icon: Ruler,
                  title: "Medição Digital a Laser",
                  desc: "Encaixe milimétrico em qualquer vão. Instalação limpa e rápida em todos os bairros atendidos.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="w-11 h-11 rounded-lg bg-petrol/10 flex items-center justify-center mb-4">
                    <c.icon className="w-5 h-5 text-petrol" />
                  </div>
                  <h4 className="font-display text-lg text-petrol mb-2">{c.title}</h4>
                  <p className="text-sm text-foreground/75 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modelos com cor fumê (long tail) */}
        <section className="container mx-auto px-4 pt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl text-petrol mb-6 text-center">
              Modelos de Box Fumê Disponíveis
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-foreground/85">
              {[
                ["Box de vidro frontal fumê", "Vãos retos com perfil de correr."],
                ["Box de vidro de canto fumê", "Formato L para otimizar o espaço."],
                ["Box de vidro de abrir fumê", "Porta de giro tradicional."],
                ["Box de vidro elegance fumê", "Roldanas aparentes premium."],
                ["Box de vidro flex fumê", "Sistema articulado/camarão para banheiros compactos."],
              ].map(([t, d]) => (
                <li
                  key={t}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
                >
                  <CheckCircle2 className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-petrol text-sm">{t}</p>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Grade de bairros */}
        <section className="container mx-auto px-4 pt-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-copper text-xs font-semibold tracking-[0.25em] uppercase">
                Atendimento Local
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-petrol mt-2">
                Box Fumê por Bairro em São Paulo
              </h3>
              <p className="text-muted-foreground text-sm mt-2">
                Clique no seu bairro e veja a página dedicada com modelos, fotos e orçamento.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(Object.keys(ZONA_BAIRROS) as Zona[]).map((z) => (
                <div
                  key={z}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <h4 className="font-display text-lg text-petrol mb-3 pb-2 border-b border-copper/40">
                    {ZONA_LABEL[z]}
                  </h4>
                  <ul className="space-y-1.5">
                    {ZONA_BAIRROS[z].map((b) => (
                      <li key={b.slug}>
                        <Link
                          to={`/box-fume/${b.slug}`}
                          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-copper/60 group-hover:bg-copper transition-colors" />
                          Box Fumê em {b.nome}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="container mx-auto px-4 pt-16">
          <div className="max-w-3xl mx-auto rounded-2xl bg-petrol p-8 md:p-10 text-center">
            <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-4">
              Pronto para instalar seu Box Fumê?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Atendimento rápido, medição digital a laser sem custo e garantia técnica.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCta}
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BoxFume;
