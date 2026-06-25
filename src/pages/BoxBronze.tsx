import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BoxFinishSelector from "@/components/BoxFinishSelector";
import { Shield, Sparkles, Ruler, MessageCircle, CheckCircle2 } from "lucide-react";
import { useSeo } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";
import { ZONA_BAIRROS, ZONA_LABEL, type Zona } from "@/lib/bairros";
import { pickRandomBoxBronzeImage } from "@/lib/boxBronzeImages";

const WA_MSG =
  "Olá! Estou no site e gostaria de ver fotos e valores de modelos de box bronze para meu banheiro.";
const WA_URL = `https://wa.me/5511915485945?text=${encodeURIComponent(WA_MSG)}`;

const MODELOS_BRONZE: { titulo: string; desc: string }[] = [
  { titulo: "Box frontal bronze", desc: "Ideal para vãos retos — entrega calor visual e privacidade discreta." },
  { titulo: "Box de canto bronze", desc: "Modelo em L que aquece visualmente banheiros quadrados." },
  { titulo: "Box de abrir bronze", desc: "Porta de giro tradicional com vedação perfeita e ferragens douradas ou pretas." },
  { titulo: "Box elegance bronze", desc: "Design clássico-moderno com roldanas de inox aparentes e tom âmbar." },
  { titulo: "Box flex bronze", desc: "Sistema articulado/camarão para vãos estreitos com pegada retrô-moderna." },
  { titulo: "Box piso teto bronze", desc: "Estrutura minimalista até o teto, criando o efeito de parede de vidro bronze temperado." },
];

const BoxBronze = () => {
  useSeo({
    title: "Box de Vidro Bronze e Box para Banheiro Bronze | Projeto Vidros",
    description:
      "Box de vidro bronze temperado 8mm: frontal, canto, abrir, elegance, flex e piso-teto. Tonalidade âmbar sofisticada, medição digital a laser e instalação em toda a Grande SP.",
    path: "/box-bronze",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Instalação de Box de Vidro Bronze",
      serviceType: "Fabricação e instalação de box de banheiro em vidro temperado bronze 8mm",
      description:
        "Box de banheiro em vidro temperado bronze 8mm com película Box + Seguro opcional. Medição digital e instalação em toda a Grande São Paulo.",
      areaServed: { "@type": "City", name: "São Paulo" },
      provider: {
        "@type": "LocalBusiness",
        name: "Projeto Vidros",
        telephone: "+5511915485945",
        areaServed: "São Paulo e Grande SP",
      },
    },
  });

  const hero = pickRandomBoxBronzeImage();
  const handleCta = (e: React.MouseEvent) => {
    e.preventDefault();
    gtagReportConversion(WA_URL);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4 pt-6 md:pt-10">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-copper text-xs font-semibold tracking-[0.25em] uppercase">
                Acabamento Bronze
              </span>
              <h1 className="font-display text-3xl md:text-5xl text-petrol mt-3 mb-5 leading-tight">
                Box de Vidro Bronze e Box para Banheiro Bronze
              </h1>
              <h2 className="font-display text-lg md:text-xl text-foreground/80 mb-4">
                Box de Banheiro Bronze Sob Medida com Instalação Rápida
              </h2>
              <h3 className="font-display text-base md:text-lg text-copper mb-6">
                Tom Âmbar, Calor Visual e Elegância Clássica
              </h3>
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
                O <strong className="text-foreground">box de vidro bronze</strong> é um
                clássico que voltou com força total. A tonalidade quente do{" "}
                <strong>vidro bronze temperado 8mm</strong> entrega aconchego visual, valoriza
                metais dourados, madeira natural e revestimentos em mármore travertino — uma
                combinação atemporal para quem quer um banheiro elegante, sofisticado e com
                pegada retrô-moderna em São Paulo.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCta}
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm px-6 py-3 rounded-md shadow-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Orçamento Box Bronze
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

        <BoxFinishSelector current="bronze" className="mt-12" />

        <section className="container mx-auto px-4 pt-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl text-petrol mb-3 text-center">
              Box de Banheiro Bronze Sob Medida com Design Atemporal
            </h3>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              Cada projeto é executado com medição digital a laser e ferragens em alumínio
              reforçado — combinando calor visual e durabilidade premium.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: Sparkles,
                  title: "Vidro Bronze Temperado 8mm",
                  desc: "Resistência mecânica e térmica certificadas pelas normas ABNT, com tonalidade âmbar uniforme em toda a chapa.",
                },
                {
                  icon: Shield,
                  title: "Aconchego e Privacidade",
                  desc: "O tom bronze filtra a luz de forma quente, criando ambientes acolhedores sem perder a sofisticação.",
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

        <section className="container mx-auto px-4 pt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl text-petrol mb-6 text-center">
              Modelos de Box Bronze Disponíveis
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-foreground/85">
              {MODELOS_BRONZE.map((m) => (
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

        <section className="container mx-auto px-4 pt-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-copper text-xs font-semibold tracking-[0.25em] uppercase">
                Atendimento Local
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-petrol mt-2">
                Box Bronze por Bairro em São Paulo
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
                          to={`/box-bronze/${b.slug}`}
                          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-copper/60 group-hover:bg-copper transition-colors" />
                          Box Bronze em {b.nome}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pt-16">
          <div className="max-w-3xl mx-auto rounded-2xl bg-petrol p-8 md:p-10 text-center">
            <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-4">
              Pronto para instalar seu Box Bronze?
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

export default BoxBronze;
