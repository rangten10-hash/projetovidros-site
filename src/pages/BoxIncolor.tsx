import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BoxFinishSelector from "@/components/BoxFinishSelector";
import { Shield, Sparkles, Ruler, MessageCircle, CheckCircle2 } from "lucide-react";
import { useSeo } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";
import { ZONA_BAIRROS, ZONA_LABEL, type Zona } from "@/lib/bairros";
import { pickRandomBoxIncolorImage } from "@/lib/boxIncolorImages";

const WA_MSG =
  "Olá! Estou no site e gostaria de ver fotos e valores de modelos de box incolor para meu banheiro.";
const WA_URL = `https://wa.me/5511915485945?text=${encodeURIComponent(WA_MSG)}`;

const MODELOS_INCOLOR: { titulo: string; desc: string }[] = [
  { titulo: "Box frontal incolor", desc: "Ideal para vãos retos, garantindo um visual limpo e funcional." },
  { titulo: "Box de canto incolor", desc: "Modelo em L que otimiza o espaço de banheiros quadrados." },
  { titulo: "Box de abrir incolor", desc: "Porta de giro tradicional com vedação perfeita e metais nobres." },
  { titulo: "Box elegance incolor", desc: "O ápice do design contemporâneo com roldanas de inox aparentes deslizantes." },
  { titulo: "Box flex incolor", desc: "Sistema articulado/camarão que garante até 90% de abertura em vãos estreitos." },
  { titulo: "Box piso teto incolor", desc: "Estrutura minimalista que vai até o teto, criando o efeito de uma parede de vidro invisível (estilo sauna)." },
];

const BoxIncolor = () => {
  useSeo({
    title: "Box de Vidro Incolor e Box para Banheiro Incolor | Projeto Vidros",
    description:
      "Box de vidro incolor temperado 8mm Cebrace/Guardian: frontal, canto, abrir, elegance, flex e piso-teto. Medição digital a laser e instalação em toda a Grande SP.",
    path: "/box-incolor",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Box de Vidro Incolor",
      description:
        "Box de banheiro em vidro temperado incolor 8mm Cebrace/Guardian com película Box + Seguro opcional.",
      brand: { "@type": "Brand", name: "Projeto Vidros" },
      category: "Box de Banheiro Incolor",
    },
  });

  const hero = pickRandomBoxIncolorImage();
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
                Acabamento Incolor
              </span>
              <h1 className="font-display text-3xl md:text-5xl text-petrol mt-3 mb-5 leading-tight">
                Box de Vidro Incolor e Box para Banheiro Incolor
              </h1>
              <h2 className="font-display text-lg md:text-xl text-foreground/80 mb-4">
                Box de Banheiro Incolor Sob Medida com Instalação Rápida
              </h2>
              <h3 className="font-display text-base md:text-lg text-copper mb-6">
                Onde Encontrar Box de Vidro Incolor com Acabamento de Alta Qualidade?
              </h3>
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
                O <strong className="text-foreground">box de vidro incolor</strong> é o grande
                curinga da arquitetura e decoração de interiores. A principal vantagem do{" "}
                <strong>vidro incolor temperado 8mm</strong> é a sua total neutralidade: ele
                não interfere na decoração do banheiro, permitindo que suas escolhas de
                revestimentos, pisos, louças e metais (como a torneira e o chuveiro) sejam os
                verdadeiros protagonistas do ambiente. Além de proporcionar uma incrível
                sensação de amplitude e claridade — sendo perfeito para banheiros compactos de
                São Paulo —, o acabamento incolor se adapta a qualquer estilo, do clássico ao
                moderno.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCta}
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm px-6 py-3 rounded-md shadow-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Orçamento Box Incolor
                </a>
                <Link
                  to="/box-seguro"
                  className="inline-flex items-center gap-2 border border-petrol text-petrol hover:bg-petrol hover:text-primary-foreground font-semibold text-sm px-6 py-3 rounded-md transition-colors"
                >
                  Película Box + Seguro
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full flex items-center justify-center bg-background">
              <img
                src={hero.src}
                alt={hero.alt}
                loading="eager"
                className="block w-auto h-auto max-w-full max-h-[350px] md:max-h-[450px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* Seletor de cores */}
        <BoxFinishSelector current="incolor" className="mt-12" />

        {/* Diferenciais técnicos */}
        <section className="container mx-auto px-4 pt-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl text-petrol mb-3 text-center">
              Amplitude e Claridade com Box de Banheiro Incolor Sob Medida
            </h3>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              Cada projeto é executado com medição digital a laser e ferragens em alumínio
              reforçado — combinando neutralidade visual e durabilidade premium.
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
                  title: "Neutralidade Total",
                  desc: "O incolor não compete com revestimentos, louças e metais — valoriza a decoração existente.",
                },
                {
                  icon: Ruler,
                  title: "Medição Digital a Laser",
                  desc: "Encaixe milimétrico em qualquer vão. Instalação limpa e rápida em todos os bairros atendidos.",
                },
              ].map((c) => (
                <div key={c.title} className="rounded-xl border border-border bg-card p-6">
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

        {/* Grid de Modelos técnicos (long tail) */}
        <section className="container mx-auto px-4 pt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl text-petrol mb-6 text-center">
              Modelos de Box Incolor Disponíveis
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-foreground/85">
              {MODELOS_INCOLOR.map((m) => (
                <li
                  key={m.titulo}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
                >
                  <CheckCircle2 className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-petrol text-sm">{m.titulo}</p>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
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
                Box Incolor por Bairro em São Paulo
              </h3>
              <p className="text-muted-foreground text-sm mt-2">
                Clique no seu bairro e veja a página dedicada com modelos, fotos e orçamento.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(Object.keys(ZONA_BAIRROS) as Zona[]).map((z) => (
                <div key={z} className="rounded-xl border border-border bg-card p-5">
                  <h4 className="font-display text-lg text-petrol mb-3 pb-2 border-b border-copper/40">
                    {ZONA_LABEL[z]}
                  </h4>
                  <ul className="space-y-1.5">
                    {ZONA_BAIRROS[z].map((b) => (
                      <li key={b.slug}>
                        <Link
                          to={`/box-incolor/${b.slug}`}
                          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-copper/60 group-hover:bg-copper transition-colors" />
                          Box Incolor em {b.nome}
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
              Pronto para instalar seu Box Incolor?
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

export default BoxIncolor;
