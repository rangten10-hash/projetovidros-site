import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MessageCircle, CheckCircle2, MapPin } from "lucide-react";
import { useSeo } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";
import { ZONA_BAIRROS } from "@/lib/bairros";

const WA_MSG =
  "Olá, vi o site e gostaria de um orçamento de box para banheiro na Zona Norte de SP.";
const WA_URL = `https://wa.me/5511915485945?text=${encodeURIComponent(WA_MSG)}`;

const MODELOS = [
  { nome: "Box Flex Articulado", to: "/box-flex" },
  { nome: "Box de Canto Kit Reto", to: "/box-de-canto-kit-reto" },
  { nome: "Box Tradicional de Correr", to: "/box-tradicional-kit-reto" },
  { nome: "Box Piso ao Teto", to: "/box-piso-teto-kit-reto" },
  { nome: "Box de Abrir para Pequenos Vãos", to: "/box-de-abrir-pequeno-vao" },
];

const FAQ = [
  {
    q: "Qual o prazo de instalação de box na Zona Norte?",
    a: "Em média 3 a 5 dias úteis após a medição. Realizamos medição a laser gratuita em toda a Zona Norte de SP.",
  },
  {
    q: "Box para banheiro pequeno tem na Zona Norte?",
    a: "Sim! O Box Flex Articulado é ideal para banheiros com entrada de 75cm a 1 metro, com abertura de até 90% do vão.",
  },
  {
    q: "A Projeto Vidros atende meu bairro na Zona Norte?",
    a: "Atendemos todos os bairros da Zona Norte: Santana, Tucuruvi, Imirim, Mandaqui, Vila Maria, Horto Florestal, Freguesia do Ó, Vila Guilherme, Parada Inglesa, Jaçanã, Tremembé, Cachoeirinha e região.",
  },
];

const BoxBanheiroZonaNorte = () => {
  useSeo({
    title: "Box para Banheiro na Zona Norte SP | Projeto Vidros",
    description:
      "Box para banheiro na Zona Norte de SP com vidro temperado e película anti-estilhaço. Atendemos Santana, Tucuruvi, Imirim, Vila Guilherme e toda a ZN. Orçamento pelo WhatsApp!",
    path: "/box-para-banheiro-zona-norte",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Box para Banheiro na Zona Norte de São Paulo",
        serviceType:
          "Fabricação e instalação de box de banheiro em vidro temperado 8mm com película anti-estilhaço",
        areaServed: ZONA_BAIRROS.norte.map((b) => ({ "@type": "Place", name: b.nome })),
        provider: {
          "@type": "LocalBusiness",
          name: "Projeto Vidros",
          telephone: "+5511915485945",
          areaServed: "Zona Norte de São Paulo",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  });

  const handleCta = (e: React.MouseEvent) => {
    e.preventDefault();
    gtagReportConversion(WA_URL);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4 pt-6 md:pt-10">
          <div className="max-w-4xl mx-auto">
            <nav className="text-xs text-muted-foreground mb-4">
              <Link to="/" className="hover:text-copper">Início</Link>
              {" / "}
              <Link to="/box-de-banheiro" className="hover:text-copper">Box de Banheiro</Link>
              {" / "}
              <span>Zona Norte</span>
            </nav>

            <span className="text-copper text-xs font-semibold tracking-[0.25em] uppercase">
              Atendimento Zona Norte SP
            </span>
            <h1 className="font-display text-3xl md:text-5xl text-petrol mt-3 mb-6 leading-tight">
              Box para Banheiro na Zona Norte de SP
            </h1>

            <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
              A Projeto Vidros é especialista em box para banheiro na Zona Norte de São Paulo.
              Desde 1991 atendemos moradores de Santana, Tucuruvi, Imirim, Mandaqui, Vila Maria,
              Horto Florestal, Freguesia do Ó, Vila Guilherme, Parada Inglesa e toda a região com
              instalação profissional,{" "}
              <Link to="/box-seguro" className="text-copper font-semibold underline underline-offset-2 hover:text-petrol transition-colors">
                vidro temperado
              </Link>{" "}
              8mm e película de segurança anti-estilhaço inclusa.
            </p>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCta}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm px-6 py-3 rounded-md shadow-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Pedir Orçamento pelo WhatsApp
            </a>
          </div>
        </section>

        <section className="container mx-auto px-4 mt-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-petrol mb-6">
              Nossos modelos de box para banheiro na Zona Norte
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {MODELOS.map((m) => (
                <li key={m.to}>
                  <Link
                    to={m.to}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-copper transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-copper shrink-0" />
                    <span className="text-foreground font-medium">{m.nome}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-6">
              Cada projeto é feito sob medida com medição a laser e instalação limpa sem obra.
              Atendemos também Alphaville, Barueri e toda a Grande São Paulo. Veja a linha completa
              de{" "}
              <Link to="/box-de-banheiro" className="text-copper font-semibold underline underline-offset-2 hover:text-petrol transition-colors">
                box de banheiro
              </Link>{" "}
              e nossos{" "}
              <Link to="/espelhos" className="text-copper font-semibold underline underline-offset-2 hover:text-petrol transition-colors">
                espelhos
              </Link>{" "}
              sob medida.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 mt-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-petrol mb-6">
              Bairros atendidos na Zona Norte
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {ZONA_BAIRROS.norte.map((b) => (
                <Link
                  key={b.slug}
                  to={`/servicos/${b.slug}`}
                  className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground hover:border-copper hover:text-copper transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-copper shrink-0" />
                  {b.nome}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mt-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-petrol mb-6">
              Perguntas frequentes sobre box na Zona Norte
            </h2>
            <div className="space-y-4">
              {FAQ.map((f) => (
                <div key={f.q} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="font-display text-lg text-foreground mb-2">{f.q}</h3>
                  <p className="text-foreground/80 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-muted/40 border border-border rounded-xl p-6 text-center">
              <p className="font-display text-xl text-petrol mb-4">
                Peça seu orçamento de box para banheiro na Zona Norte
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCta}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm px-6 py-3 rounded-md shadow-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Pedir Orçamento pelo WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BoxBanheiroZonaNorte;
