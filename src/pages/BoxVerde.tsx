import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BoxFinishSelector from "@/components/BoxFinishSelector";
import { Shield, Sparkles, Ruler, MessageCircle, CheckCircle2 } from "lucide-react";
import { useSeo } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";
import { ZONA_BAIRROS, ZONA_LABEL, type Zona } from "@/lib/bairros";
import { pickRandomBoxVerdeImage } from "@/lib/boxVerdeImages";

const WA_MSG =
  "Olá! Estou no site e gostaria de ver fotos e valores de modelos de box verde para meu banheiro.";
const WA_URL = `https://wa.me/5511915485945?text=${encodeURIComponent(WA_MSG)}`;

const MODELOS_VERDE: { titulo: string; desc: string }[] = [
  { titulo: "Box frontal verde", desc: "Ideal para vãos retos — destaca o tom verde sem comprometer a luminosidade." },
  { titulo: "Box de canto verde", desc: "Modelo em L que valoriza banheiros quadrados com identidade contemporânea." },
  { titulo: "Box de abrir verde", desc: "Porta de giro tradicional com vedação perfeita e ferragens premium." },
  { titulo: "Box elegance verde", desc: "Design contemporâneo com roldanas de inox aparentes e tom natural sofisticado." },
  { titulo: "Box flex verde", desc: "Sistema articulado/camarão para vãos estreitos com tonalidade biofílica." },
  { titulo: "Box piso teto verde", desc: "Estrutura minimalista até o teto, criando o efeito de parede de vidro verde temperado." },
];

const BoxVerde = () => {
  useSeo({
    title: "Box Verde Sob Medida SP | Vidro Temperado 8mm – Projeto Vidros",
    description:
      "Box de banheiro com vidro verde temperado 8mm em São Paulo. Estética biofílica, privacidade suave e instalação rápida. Orçamento pelo WhatsApp!",
    path: "/box-verde",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Instalação de Box de Vidro Verde",
      serviceType: "Fabricação e instalação de box de banheiro em vidro temperado verde 8mm",
      description:
        "Box de banheiro em vidro temperado verde 8mm com película Box + Seguro opcional. Medição digital e instalação em toda a Grande São Paulo.",
      areaServed: { "@type": "City", name: "São Paulo" },
      provider: {
        "@type": "LocalBusiness",
        name: "Projeto Vidros",
        telephone: "+5511915485945",
        areaServed: "São Paulo e Grande SP",
      },
    },
  });

  const hero = pickRandomBoxVerdeImage();
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
                Acabamento Verde
              </span>
              <h1 className="font-display text-3xl md:text-5xl text-petrol mt-3 mb-5 leading-tight">
                Box de Vidro Verde Sob Medida em São Paulo
              </h1>
              <h2 className="font-display text-lg md:text-xl text-foreground/80 mb-4">
                Box de Banheiro Verde Sob Medida com Instalação Rápida
              </h2>
              <h3 className="font-display text-base md:text-lg text-copper mb-6">
                Tonalidade Natural, Privacidade Suave e Estética Biofílica
              </h3>
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
                O <strong className="text-foreground">box de vidro verde</strong> é a escolha
                de quem quer fugir do óbvio sem abrir mão da elegância. A tonalidade discreta do{" "}
                <Link to="/box-seguro" className="text-copper font-semibold underline underline-offset-2 hover:text-petrol transition-colors">
                  vidro temperado
                </Link>{" "}
                verde 8mm entrega privacidade suave, conversa naturalmente com revestimentos
                amadeirados, marmorizados claros e metais pretos ou dourados — uma estética
                biofílica e contemporânea. É a aposta certa para quem procura um{" "}
                <Link to="/box-de-banheiro" className="text-copper font-semibold underline underline-offset-2 hover:text-petrol transition-colors">
                  box de banheiro
                </Link>{" "}
                com personalidade marcante em São Paulo, combinando também com um{" "}
                <Link to="/espelhos" className="text-copper font-semibold underline underline-offset-2 hover:text-petrol transition-colors">
                  espelho
                </Link>{" "}
                sob medida na mesma parede.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCta}
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm px-6 py-3 rounded-md shadow-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Orçamento Box Verde
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

        <BoxFinishSelector current="verde" className="mt-12" />

        <section className="container mx-auto px-4 pt-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl text-petrol mb-3 text-center">
              Box de Banheiro Verde Sob Medida com Design Contemporâneo
            </h3>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              Cada projeto é executado com medição digital a laser e ferragens em alumínio
              reforçado — combinando estética natural e durabilidade premium.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: Sparkles,
                  title: "Vidro Verde Temperado 8mm",
                  desc: "Resistência mecânica e térmica certificadas pelas normas ABNT, com tonalidade uniforme em toda a chapa.",
                },
                {
                  icon: Shield,
                  title: "Privacidade Suave",
                  desc: "O vidro verde filtra o olhar sem escurecer o banheiro — discrição com luminosidade preservada.",
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
              Modelos de Box Verde Disponíveis
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-foreground/85">
              {MODELOS_VERDE.map((m) => (
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
                Box Verde por Bairro em São Paulo
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
                          to={`/box-verde/${b.slug}`}
                          className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-copper/60 group-hover:bg-copper transition-colors" />
                          Box Verde em {b.nome}
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
              Pronto para instalar seu Box Verde?
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

export default BoxVerde;
