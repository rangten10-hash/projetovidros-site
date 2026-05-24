import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Ruler,
  Thermometer,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useSeo } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";

import ouroFrontal from "@/assets/box-piso-teto/ouro-frontal.png";
import retoFosco from "@/assets/box-piso-teto/reto-fosco.png";
import retoFoscoAberto from "@/assets/box-piso-teto/reto-fosco-aberto.png";
import ateOTeto from "@/assets/box-piso-teto/ate-o-teto.jpg";
import tetoConcha from "@/assets/box-piso-teto/teto-concha.jpg";
import canto from "@/assets/box-piso-teto/canto.png";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20o%20Box%20Piso%20Teto%20Kit%20Reto.";

const handleWhatsappClick = (e: React.MouseEvent) => {
  e.preventDefault();
  gtagReportConversion(WHATSAPP_URL);
};

const gallery = [
  { src: ouroFrontal, tag: "Kit Ouro Brilhante", caption: "Box Piso Teto Kit Reto — acabamento Ouro Brilhante" },
  { src: retoFosco, tag: "Natural Fosco", caption: "Box Piso Teto Kit Reto — perfil Natural Fosco minimalista" },
  { src: retoFoscoAberto, tag: "Altura Padrão", caption: "Box com Kit Reto Natural Fosco — visão ampla" },
  { src: ateOTeto, tag: "Indo até o Teto", caption: "Box Piso Teto Kit Reto — Preto Fosco do chão ao teto" },
  { src: tetoConcha, tag: "Detalhe do Kit", caption: "Detalhe do perfil quadrado e linhas retas do Kit Reto" },
  { src: canto, tag: "Variação Canto", caption: "Box Piso Teto Kit Reto em configuração de canto" },
];

const colors = [
  { name: "Preto Fosco", hex: "#1a1a1a" },
  { name: "Branco Puro", hex: "#fafafa" },
  { name: "Cromado", hex: "linear-gradient(135deg,#e8e8e8,#a8a8a8)" },
  { name: "Bronze / Champagne", hex: "linear-gradient(135deg,#d8b78a,#9a7544)" },
  { name: "Ouro Brilhante", hex: "linear-gradient(135deg,#f3d77a,#b8860b)" },
  { name: "Natural Fosco", hex: "linear-gradient(135deg,#bcbcbc,#7d7d7d)" },
];

const BoxPisoTetoKitReto = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useSeo({
    title: "Box até o Teto Kit Reto em São Paulo | Projeto Vidros",
    description:
      "Box de banheiro até o teto com Kit Reto minimalista. Vidro temperado de 8mm, vedação total, efeito sauna e máxima sofisticação em SP. Faça um orçamento!",
    path: "/box-piso-teto-kit-reto",
    image: ateOTeto,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Box Piso Teto Kit Reto",
      description:
        "Box de banheiro piso-teto com perfis quadrados minimalistas (Kit Reto). Vidro temperado 8mm, efeito sauna e instalação sob medida em São Paulo.",
      brand: { "@type": "Brand", name: "Projeto Vidros" },
      category: "Box de Banheiro Piso-Teto",
      areaServed: "São Paulo",
    },
  });

  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % gallery.length));
  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));

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
              Box Piso Teto com Kit Reto: O Design de Luxo que Transforma seu Banheiro em um Spa
            </h1>
            <p className="text-primary-foreground/70 text-lg mb-6">
              Sofisticação milimétrica, perfis quadrados minimalistas e o incrível conforto térmico do{" "}
              <strong className="text-copper-light">efeito sauna</strong> para a sua casa em São Paulo.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              O Box Piso Teto com Kit Reto é a escolha definitiva de arquitetos e clientes que buscam alto padrão e
              modernidade absoluta. Esqueça os perfis arredondados e convencionais: o sistema Kit Reto traz linhas
              quadradas, limpas e sem parafusos aparentes. Unindo essa engenharia minimalista ao fechamento que vai do
              chão até o teto, você cria uma barreira hermética elegante que eleva instantaneamente o visual do seu
              ambiente.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsappClick}
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-7 py-4 rounded-md shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento de Box Piso Teto
            </a>
          </div>
          <div className="relative">
            <img
              src={ateOTeto}
              alt="Box de banheiro Piso Teto Kit Reto preto fosco indo do chão ao teto"
              className="w-full rounded-2xl shadow-2xl object-contain max-h-[520px] bg-petrol"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
              Galeria — Box Piso Teto Kit Reto
            </h2>
            <p className="text-muted-foreground">
              Variações de altura, configurações e cores do kit. Toque nas fotos para ampliar.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
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
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
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
              Conforto térmico, ferragens minimalistas e engenharia sob medida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Thermometer,
                title: "Conforto Térmico e Efeito Sauna",
                text: "Por fechar completamente o vão do chão ao teto, este modelo retém o calor e o vapor da ducha dentro da área de banho. O resultado é um banho relaxante digno de um spa particular, além de uma redução de até 95% na umidade do restante do banheiro, protegendo seus móveis, gabinetes e espelhos contra o mofo e o estufamento.",
              },
              {
                icon: Sparkles,
                title: "Ferragens Kit Reto Minimalista",
                text: "O grande segredo da estética desse box está no acabamento. O Kit Reto utiliza perfis estruturais de alumínio com quinas retas e design geométrico. Esse visual robusto e ao mesmo tempo discreto elimina o excesso de informação visual e combina perfeitamente com as cubas, torneiras e decorações mais modernas do mercado.",
              },
              {
                icon: Ruler,
                title: "Engenharia Sob Medida e Vidro de 8mm",
                text: "Cada projeto é único. Nossos boxes são produzidos sob medida utilizando painéis de vidro temperado de 8mm de espessura, garantindo a flexibilidade ideal, leveza no deslizar das portas e altíssima resistência mecânica. Toda a instalação é precedida por uma medição técnica digital a laser, garantindo o prumo perfeito em relação ao seu teto.",
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
              Sua Família com Proteção Triplicada
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Para nós, o luxo deve caminhar lado a lado com a tranquilidade. Por ser um vidro que cobre uma área
              maior, recomendamos para o seu Box Piso Teto a tecnologia{" "}
              <strong className="text-foreground">Box + Seguro</strong>. Trata-se da aplicação de uma película de
              segurança de alta performance diretamente no vidro de 8mm de fábrica. Em caso de qualquer quebra por
              impacto forte, os fragmentos ficam totalmente presos à película, evitando acidentes e mantendo a
              estrutura no lugar até a manutenção.
            </p>
            <Link
              to="/box-seguro"
              className="inline-flex items-center gap-2 text-copper hover:text-copper-light font-semibold transition-colors"
            >
              👉 Saiba tudo sobre como funciona a tecnologia do nosso Box + Seguro
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
              Personalize com o Estilo do seu Projeto
            </h2>
            <p className="text-muted-foreground">
              O Kit Reto de alumínio de alta durabilidade e tratamento anticorrosivo está disponível nas cores que
              ditam as tendências de decoração:
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
            Com sede e atendimento em toda a capital de São Paulo, a{" "}
            <strong className="text-foreground">Projeto Vidros</strong> entrega mais do que vidros: entregamos
            pontualidade, instalação com equipe própria treinada e acabamento impecável. Fale com um de nossos
            consultores agora mesmo, envie as medidas do seu vão e receba um orçamento sob medida direto da fábrica.
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
            Da medição a laser ao ajuste fino, sua obra fica limpa e o resultado, impecável.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsappClick}
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-8 py-4 rounded-md shadow-lg shadow-[#25D366]/30 transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5" />
            Quero um Orçamento de Box Piso Teto no meu WhatsApp
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

export default BoxPisoTetoKitReto;
