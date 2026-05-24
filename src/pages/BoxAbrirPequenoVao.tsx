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

import cardCover from "@/assets/box-abrir-pequeno-vao/card-cover.png";
import interna1 from "@/assets/box-abrir-pequeno-vao/interna-1.png";
import interna2 from "@/assets/box-abrir-pequeno-vao/interna-2.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20o%20Box%20de%20Abrir%20para%20Pequenos%20Vãos.";

const handleWhatsappClick = (e: React.MouseEvent) => {
  e.preventDefault();
  gtagReportConversion(WHATSAPP_URL);
};

const gallery = [
  { src: cardCover, tag: "Perfil Preto", caption: "Box de Abrir para Pequenos Vãos — 1 fixo + 1 porta com abertura para dentro" },
  { src: interna1, tag: "Vão Estreito", caption: "Solução elegante para banheiros compactos com pouquíssimo espaço de circulação" },
  { src: interna2, tag: "Cromado", caption: "Box de Abrir em perfil cromado, vidro temperado 8mm com porta de giro" },
];

const colors = [
  { name: "Preto Fosco", hex: "#1a1a1a" },
  { name: "Branco Puro", hex: "#fafafa" },
  { name: "Cromado", hex: "linear-gradient(135deg,#e8e8e8,#a8a8a8)" },
  { name: "Bronze / Champagne", hex: "linear-gradient(135deg,#d8b78a,#9a7544)" },
  { name: "Ouro Brilhante", hex: "linear-gradient(135deg,#f3d77a,#b8860b)" },
  { name: "Natural Fosco", hex: "linear-gradient(135deg,#bcbcbc,#7d7d7d)" },
];

const BoxAbrirPequenoVao = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % gallery.length));
  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));

  useSeo({
    title: "Box de Abrir para Pequenos Vãos em São Paulo | Projeto Vidros",
    description:
      "Otimize banheiros compactos com o Box de Abrir para Pequenos Vãos. 1 folha fixa + 1 porta com abertura para dentro. Altura padrão de 1,84m ou sob medida. Peça seu orçamento!",
    path: "/box-de-abrir-pequeno-vao",
    image: cardCover,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Box de Abrir para Pequenos Vãos",
      description:
        "Box de abrir com 1 folha fixa e 1 porta de giro com abertura para dentro, ideal para banheiros compactos. Altura padrão 1,84m ou sob medida.",
      brand: { "@type": "Brand", name: "Projeto Vidros" },
      category: "Box de Banheiro",
      areaServed: "São Paulo",
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
              Box de Abrir para Pequenos Vãos: A Solução Inteligente com Abertura para Dentro
            </h1>
            <p className="text-primary-foreground/70 text-lg mb-6">
              Perfeito para banheiros compactos ou com vãos estreitos. Engenharia sob medida com{" "}
              <strong className="text-copper-light">1 folha fixa e 1 porta de giro</strong> que abre para o lado interno
              do chuveiro. Disponível na altura padrão de 1,84m ou totalmente personalizado.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              Se você achava que seu banheiro era pequeno demais para ter um box elegante e moderno, o Box de Abrir
              para Pequenos Vãos foi feito para o seu projeto. Desenvolvido especificamente para áreas onde cada
              centímetro conta, este modelo utiliza um sistema inteligente composto por 1 vidro fixo e 1 porta de
              abrir (giro). O grande diferencial está na sua dobradiça técnica que permite a abertura da porta para
              dentro, garantindo que você ganhe espaço de circulação no banheiro e elimine de vez o risco de colisões.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsappClick}
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-7 py-4 rounded-md shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento de Box para Pequeno Vão
            </a>
          </div>
          <div className="relative">
            <img
              src={cardCover}
              alt="Box de Abrir para Pequenos Vãos com perfil preto e abertura interna"
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
              Galeria — Box de Abrir para Pequenos Vãos
            </h2>
            <p className="text-muted-foreground">
              Veja aplicações reais em banheiros compactos. Toque nas fotos para ampliar.
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
              Praticidades e Diferenciais para Pequenos Espaços
            </h2>
            <p className="text-muted-foreground">
              Abertura inteligente, altura flexível e máxima rigidez em vidro 8mm.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Abertura para Dentro (Porta não bate em nada)",
                text: "Em banheiros muito estreitos, uma porta que abre para fora costuma colidir com o vaso sanitário, com o gabinete da pia ou com a parede externa. Com a abertura projetada para o lado de dentro do chuveiro, o espaço externo fica 100% livre. Além disso, ao abrir a porta após o banho, as gotas de água escorrem diretamente na área do ralo, mantendo o piso do banheiro seco.",
              },
              {
                icon: ArrowUpDown,
                title: "Altura Padrão 1,84m ou Sob Medida (Piso ao Teto)",
                text: "Adaptamos o projeto exatamente à sua necessidade e altura do gesso. Você pode optar pela altura padrão de 1,84m (excelente para agilidade na entrega e economia) ou configurar o modelo Piso a Teto sob medida, fechando todo o vão para criar uma vedação térmica perfeita e um design ultra moderno.",
              },
              {
                icon: Ruler,
                title: "Máxima Rigidez e Segurança em Vidro 8mm",
                text: "Por possuir uma estrutura compacta com fixação direta na parede e no piso, este modelo oferece uma estabilidade estrutural incomparável. Utilizamos painéis espessos de vidro temperado de 8mm, com metais nobres e componentes de alta engenharia que proporcionam um movimento de giro suave, leve e altamente durável.",
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
              Proteção Essencial para o Dia a Dia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Compacto no tamanho, mas gigante na segurança. Todos os nossos modelos de Box de Abrir podem receber a
              película invisível de segurança de fábrica através da tecnologia{" "}
              <strong className="text-foreground">Box + Seguro</strong>. Em caso de quebras por impactos acidentais,
              os fragmentos de vidro temperado ficam firmemente presos à película, evitando cortes e acidentes,
              permitindo que a manutenção seja feita com total tranquilidade.
            </p>
            <Link
              to="/box-seguro"
              className="inline-flex items-center gap-2 text-copper hover:text-copper-light font-semibold transition-colors"
            >
              👉 Saiba mais sobre como funciona a segurança do Box + Seguro
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
              Detalhes Modernos para Valorizar o seu Banheiro
            </h2>
            <p className="text-muted-foreground">
              Os perfis e dobradiças do seu box podem ser customizados para combinar perfeitamente com os metais e
              revestimentos do ambiente:
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
            Vãos muito pequenos exigem precisão absoluta. Um erro de poucos milímetros pode fazer a porta de giro
            raspar no piso ou apresentar frestas de vazamento. Na{" "}
            <strong className="text-foreground">Projeto Vidros</strong>, realizamos a medição digital a laser na sua
            residência e contamos com uma equipe técnica especializada para garantir um ajuste milimétrico. Atendemos
            a Zona Norte e toda a capital de São Paulo com garantia de fábrica.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-petrol">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
            Envie as medidas do seu banheiro pelo WhatsApp
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
            Enviar Medidas do meu Banheiro no WhatsApp
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

export default BoxAbrirPequenoVao;
