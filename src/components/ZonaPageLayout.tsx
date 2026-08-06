import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  MessageCircle,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Ruler,
  Truck,
  BadgeCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSeo } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";

export interface ZonaPageData {
  zonaLabel: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  subtitulo: string;
  intro?: string;
  closing?: string;
  bairros: { nome: string; to: string }[];
  galeria: { src: string; alt: string }[];
  faq: { q: string; a: string }[];
}

const DIFERENCIAIS = [
  {
    icon: ShieldCheck,
    title: "Vidro temperado 8mm certificado",
    desc: "Todos os projetos saem com vidro temperado de 8mm e opção de película anti-estilhaço Box + Seguro.",
  },
  {
    icon: Ruler,
    title: "Medição a laser sem custo",
    desc: "Nossa equipe faz a medição no local com precisão milimétrica antes de produzir o seu box.",
  },
  {
    icon: Truck,
    title: "Fabricação própria desde 1991",
    desc: "Produção interna com corte CNC: preço direto de fábrica e prazos que a gente realmente cumpre.",
  },
  {
    icon: BadgeCheck,
    title: "Instalação limpa e garantida",
    desc: "Instaladores próprios, sem sujeira e sem obra, com garantia sobre ferragens e mão de obra.",
  },
];

const ZonaPageLayout = ({ data }: { data: ZonaPageData }) => {
  const waMsg = `Olá! Vi o site e gostaria de um orçamento de box de vidro para banheiro na ${data.zonaLabel} de SP.`;
  const waUrl = `https://wa.me/5511915485945?text=${encodeURIComponent(waMsg)}`;
  const [slide, setSlide] = useState(0);

  useSeo({
    title: data.title,
    description: data.description,
    path: data.path,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `Box de Vidro para Banheiro na ${data.zonaLabel} de São Paulo`,
        serviceType:
          "Fabricação e instalação de box de banheiro em vidro temperado 8mm sob medida",
        areaServed: data.bairros.map((b) => ({ "@type": "Place", name: b.nome })),
        provider: {
          "@type": "LocalBusiness",
          name: "Projeto Vidros",
          telephone: "+5511915485945",
          areaServed: `${data.zonaLabel} de São Paulo`,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data.path]);

  const handleCta = (e: React.MouseEvent) => {
    e.preventDefault();
    gtagReportConversion(waUrl);
  };

  const total = data.galeria.length;
  const go = (dir: number) => setSlide((s) => (s + dir + total) % total);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        {/* HERO */}
        <section className="bg-petrol">
          <div className="container mx-auto px-4 py-14 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <nav className="text-xs text-primary-foreground/50 mb-5">
                <Link to="/" className="hover:text-copper">Início</Link>
                {" / "}
                <Link to="/box-de-banheiro" className="hover:text-copper">Box de Banheiro</Link>
                {" / "}
                <span>{data.zonaLabel}</span>
              </nav>
              <span className="text-copper text-xs font-semibold tracking-[0.25em] uppercase">
                Atendimento {data.zonaLabel} SP
              </span>
              <h1 className="font-display text-3xl md:text-5xl text-primary-foreground mt-3 mb-5 leading-tight">
                {data.h1}
              </h1>
              <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-8">
                {data.subtitulo}
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCta}
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm md:text-base px-8 py-4 rounded-lg shadow-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Pedir Orçamento pelo WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* BAIRROS */}
        <section className="container mx-auto px-4 mt-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-petrol mb-6">
              Bairros atendidos na {data.zonaLabel}
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {data.bairros.map((b) => (
                <Link
                  key={b.to}
                  to={b.to}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-copper hover:bg-copper hover:text-primary-foreground"
                >
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  {b.nome}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIA ROTATIVA */}
        <section className="container mx-auto px-4 mt-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-petrol mb-6">
              Modelos de box instalados na {data.zonaLabel}
            </h2>
            <div className="relative overflow-hidden rounded-xl border border-border bg-card">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                {data.galeria.map((img, i) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full shrink-0 aspect-[4/3] object-cover"
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-petrol shadow-md transition-colors hover:bg-copper hover:text-primary-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Próxima foto"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-petrol shadow-md transition-colors hover:bg-copper hover:text-primary-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {data.galeria.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setSlide(i)}
                    aria-label={`Ir para a foto ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      i === slide ? "w-6 bg-copper" : "w-2.5 bg-background/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="container mx-auto px-4 mt-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-petrol mb-6">
              Por que escolher a Projeto Vidros na {data.zonaLabel}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {DIFERENCIAIS.map((d) => (
                <div key={d.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-copper/10">
                    <d.icon className="h-5 w-5 text-copper" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-petrol mb-1">{d.title}</h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 mt-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-petrol mb-6">
              Perguntas frequentes – {data.zonaLabel}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {data.faq.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-display text-base md:text-lg text-petrol">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-10 rounded-xl border border-border bg-muted/40 p-6 text-center">
              <p className="font-display text-xl text-petrol mb-4">
                Peça seu orçamento de box de vidro na {data.zonaLabel}
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCta}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-sm px-6 py-3 rounded-md shadow-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
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

export default ZonaPageLayout;
