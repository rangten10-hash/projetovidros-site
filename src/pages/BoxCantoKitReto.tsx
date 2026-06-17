import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Ruler,
  ArrowUpDown,
  ChevronRight,
  ChevronLeft,
  X,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useSeo } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";

import cardCover from "@/assets/box-canto-kit-reto/card-cover.png";
import cantoPreto from "@/assets/box-canto-kit-reto/canto-preto.jpg";
import peliculaSeguro from "@/assets/box-canto-kit-reto/pelicula-seguro.jpg";
import cantoCromado from "@/assets/box-canto-kit-reto/canto-cromado.png";
import cinzaRal from "@/assets/box-canto-kit-reto/cinza-ral-9007.png";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20o%20Box%20de%20Canto%20Kit%20Reto.";

const handleWhatsappClick = (e: React.MouseEvent) => {
  e.preventDefault();
  gtagReportConversion(WHATSAPP_URL);
};

const gallery = [
  { src: cantoPreto, tag: "Preto Fosco", caption: "Box de Canto Kit Reto Preto Fosco — abertura em L com perfis quadrados minimalistas" },
  { src: peliculaSeguro, tag: "Box + Seguro", caption: "Película de segurança aplicada de fábrica — fragmentos ficam colados ao vidro em caso de impacto" },
  { src: cantoCromado, tag: "Cromado", caption: "Box de Canto Kit Reto Cromado — brilho intenso em harmonia com metais e torneiras" },
  { src: cinzaRal, tag: "Cinza RAL 9007", caption: "Box de Canto Kit Reto Cinza RAL 9007 — tom metálico sofisticado para projetos contemporâneos" },
];

const colors = [
  { name: "Preto Fosco", hex: "#1a1a1a" },
  { name: "Branco Puro", hex: "#fafafa" },
  { name: "Cromado", hex: "linear-gradient(135deg,#e8e8e8,#a8a8a8)" },
  { name: "Bronze / Champagne", hex: "linear-gradient(135deg,#d8b78a,#9a7544)" },
  { name: "Ouro Brilhante", hex: "linear-gradient(135deg,#f5d76e,#c9a227)" },
  { name: "Natural Fosco", hex: "linear-gradient(135deg,#bdbdbd,#8f8f8f)" },
];

const BoxCantoKitReto = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % gallery.length));
  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));

  useSeo({
    title: "Box de Canto Kit Reto em São Paulo | Projeto Vidros",
    description:
      "Otimize o espaço do seu banheiro em L com o Box de Canto Kit Reto. Vidro de 8mm, design minimalista quadrado, disponível na altura padrão de 1,90m ou até o teto em SP. Confira!",
    path: "/box-de-canto-kit-reto",
    image: cardCover,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Instalação de Box de Canto Kit Reto em São Paulo",
      serviceType: "Instalação de Box de Banheiro de Canto",
      description:
        "Box de canto em L com perfis quadrados minimalistas (Kit Reto), vidro temperado 8mm. Altura padrão 1,90m ou piso a teto sob medida em São Paulo.",
      areaServed: { "@type": "City", name: "São Paulo" },
      provider: {
        "@type": "LocalBusiness",
        name: "Projeto Vidros",
        telephone: "+55-11-91548-5945",
      },
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 bg-petrol relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Link
              to="/box-de-banheiro"
              className="inline-flex items-center gap-2 text-copper hover:text-copper-light text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Box de Banheiro
            </Link>
            <h1 className="font-display text-3xl md:text-5xl text-primary-foreground leading-tight mb-5">
              Box de Canto Kit Reto: Economia Inteligente de Espaço com Design Quadrado Premium
            </h1>
            <p className="text-primary-foreground/70 text-lg mb-6">
              A solução perfeita em <strong className="text-copper-light">"L"</strong> para banheiros compactos ou
              modernos, disponível na altura convencional de 1,90m ou indo até o teto totalmente sob medida.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              O Box de Canto Kit Reto é o equilíbrio perfeito entre a máxima otimização de espaço e a sofisticação da
              arquitetura moderna. Projetado especificamente para cantos de parede (formato em L), suas portas correm
              suavemente para as laterais, criando um vão de abertura excelente sem ocupar espaço externo no banheiro.
              Esqueça os perfis arredondados antigos: a linha Kit Reto traz contornos geométricos e quinas quadradas
              que transformam o visual do ambiente.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsappClick}
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-7 py-4 rounded-md shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento de Box de Canto Kit Reto
            </a>
          </div>
          <div className="relative">
            <img
              src={cardCover}
              alt="Box de Canto Kit Reto com perfis quadrados pretos em vidro temperado"
              className="w-full rounded-2xl shadow-2xl object-contain max-h-[520px] bg-petrol"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
              Galeria — Box de Canto Kit Reto
            </h2>
            <p className="text-muted-foreground">
              Modelos instalados pela Projeto Vidros. Toque nas fotos para ampliar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative rounded-xl overflow-hidden border border-border bg-muted/40 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="aspect-[3/4] overflow-hidden flex items-center justify-center bg-muted/30">
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <span className="absolute top-2 left-2 bg-petrol/90 text-primary-foreground text-[10px] uppercase tracking-wide px-2 py-1 rounded">
                  {g.tag}
                </span>
                <p className="text-xs text-muted-foreground p-3 leading-snug text-left">{g.caption}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
              Os Grandes Diferenciais do Modelo
            </h2>
            <p className="text-muted-foreground">
              Versatilidade de altura, abertura em L com perfis quadrados e estrutura robusta em vidro 8mm.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: ArrowUpDown,
                title: "Do Chão ao Teto ou Altura Padrão (1,90m)",
                text: "Você escolhe o visual do seu projeto. Desenvolvemos este modelo tanto na altura padrão de 1,90m (com excelente custo-benefício e instalação rápida) quanto na versão Piso a Teto sob medida, que fecha completamente o vão em L do chão até o gesso, garantindo isolamento total e o sofisticado efeito sauna.",
              },
              {
                icon: Sparkles,
                title: "Abertura em \"L\" com Perfis Minimalistas",
                text: "Ideal para aproveitar cada centímetro útil do banheiro, o sistema de canto utiliza duas folhas fixas e duas folhas móveis que se encontram perfeitamente no centro. Os perfis de alumínio do Kit Reto eliminam parafusos expostos, trazendo linhas limpas e um design minimalista que valoriza o revestimento do seu chuveiro.",
              },
              {
                icon: Ruler,
                title: "Estrutura Firme com Vidro Temperado de 8mm",
                text: "Mesmo com duas frentes de vidro se unindo em ângulo reto, a engenharia do nosso kit garante total estabilidade e vedação contra vazamentos de água. Produzido com painéis de vidro temperado de 8mm, oferece um deslize leve, silencioso e altíssima resistência contra impactos no uso diário.",
              },
            ].map((d) => (
              <div
                key={d.title}
                className="bg-card border border-border rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-copper/10 text-copper flex items-center justify-center mb-4">
                  <d.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Box + Seguro */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-copper/10 text-copper flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="uppercase text-xs tracking-wider text-copper">Box + Seguro</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5">
              Proteção Essencial para o Box de Canto
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Como o modelo de canto possui mais painéis de vidro e um fechamento centralizado, a segurança é nossa
              prioridade máxima na Projeto Vidros. Por isso, recomendamos a integração com a tecnologia{" "}
              <strong className="text-foreground">Box + Seguro</strong>. Uma película de segurança invisível é
              aplicada de fábrica nos vidros de 8mm. Se houver um impacto muito forte que quebre o vidro, os
              fragmentos continuam totalmente colados à película, protegendo quem está tomando banho ou usando o
              banheiro.
            </p>
            <Link
              to="/box-seguro"
              className="inline-flex items-center gap-2 text-copper hover:text-copper-light font-semibold transition-colors"
            >
              👉 Entenda como a tecnologia Box + Seguro protege a sua casa
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cores */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
              Acabamentos que Combinam com seus Metais
            </h2>
            <p className="text-muted-foreground">
              Personalize a estrutura de alumínio anticorrosiva do seu Box de Canto Kit Reto com as cores mais
              elegantes do mercado:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {colors.map((c) => (
              <div key={c.name} className="flex flex-col items-center text-center">
                <span
                  className="w-20 h-20 rounded-full border-2 border-border shadow-inner mb-3"
                  style={{ background: c.hex }}
                  aria-label={c.name}
                />
                <span className="text-sm text-foreground font-medium leading-tight">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fechamento */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 text-center">
            Por que escolher a Projeto Vidros?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Especialistas na fabricação e instalação de vidros em toda a capital de São Paulo, a{" "}
            <strong className="text-foreground">Projeto Vidros</strong> trabalha com medição digital a laser. Em
            boxes de canto, essa precisão é crucial para que o fechamento em L fique 100% alinhado, sem frestas e sem
            balanços. Conte com nossa equipe própria de montagem. Peça seu orçamento direto de fábrica!
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-petrol">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
            Orçamento direto da fábrica, no seu WhatsApp
          </h2>
          <p className="text-primary-foreground/70 mb-8 text-lg">
            Medição a laser, instalação limpa e fechamento em L 100% alinhado.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsappClick}
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-8 py-4 rounded-md shadow-lg shadow-[#25D366]/30 transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5" />
            Quero um Orçamento de Box de Canto no meu WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
            aria-label="Próxima"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[lightbox].src}
              alt={gallery[lightbox].caption}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <figcaption className="text-center text-white/80 text-sm mt-3">
              {gallery[lightbox].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};

export default BoxCantoKitReto;
