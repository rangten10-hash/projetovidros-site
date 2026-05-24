import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Maximize2, ShieldCheck, Sparkles, Ruler, X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useSeo } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";

import flexPadraoFechado from "@/assets/box-flex/box-flex-padrao-fechado.png";
import flexPadraoAberto from "@/assets/box-flex/box-flex-padrao-aberto.png";
import flexTetoFechado from "@/assets/box-flex/box-flex-teto-fechado.jpg";
import flexTetoAberto from "@/assets/box-flex/box-flex-teto-aberto.jpg";
import flexAbertura90 from "@/assets/box-flex/box-flex-abertura-90.png";
import flexCores from "@/assets/box-flex/box-flex-cores.png";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20o%20Box%20Flex%20Articulado.";

const handleWhatsappClick = (e: React.MouseEvent) => {
  e.preventDefault();
  gtagReportConversion(WHATSAPP_URL);
};

const gallery = [
  { src: flexPadraoFechado, tag: "Altura Padrão", caption: "Box Flex Altura Padrão — fechado (kit Preto Fosco)" },
  { src: flexPadraoAberto, tag: "Altura Padrão", caption: "Box Flex Altura Padrão — aberto, articulado" },
  { src: flexTetoFechado, tag: "Indo até o Teto", caption: "Box Flex Piso-Teto — fechado (kit Dourado)" },
  { src: flexTetoAberto, tag: "Indo até o Teto", caption: "Box Flex Piso-Teto — aberto, máxima passagem" },
  { src: flexAbertura90, tag: "Abertura 90%", caption: "Abertura articulada de até 90% do vão" },
];

const colors = [
  { name: "Preto", hex: "#1a1a1a" },
  { name: "Branco", hex: "#fafafa" },
  { name: "Cromado", hex: "linear-gradient(135deg,#e8e8e8,#a8a8a8)" },
  { name: "Dourado", hex: "linear-gradient(135deg,#e6c46a,#b8860b)" },
  { name: "Rose", hex: "linear-gradient(135deg,#e8a899,#c47561)" },
];

const BoxFlex = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useSeo({
    title: "Box Flex Articulado Sob Medida em São Paulo | Projeto Vidros",
    description:
      "Box Flex ideal para banheiros pequenos em SP. Ganhe até 90% de vão livre com abertura articulada. Vidro temperado com película de segurança. Peça orçamento!",
    path: "/box-flex",
    image: flexTetoFechado,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Box Flex Articulado",
      description:
        "Box de banheiro articulado com abertura de até 90% do vão livre. Vidro temperado com opção de película de segurança. Sob medida em São Paulo.",
      brand: { "@type": "Brand", name: "Projeto Vidros" },
      category: "Box de Banheiro Articulado",
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
              Box Flex Articulado: A Solução Perfeita para Banheiros Pequenos
            </h1>
            <p className="text-primary-foreground/70 text-lg mb-3">
              Ganhe até <strong className="text-copper-light">90% de passagem livre</strong> no vão com abertura
              articulada inteligente — sem trilhos superiores e com design clean.
            </p>
            <p className="text-primary-foreground/60 mb-6">
              Atendimento sob medida na Zona Norte e em toda a capital de São Paulo. Vidro temperado com opção de
              película de segurança contra estilhaços.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              O Box Flex Articulado (também conhecido como <strong className="text-primary-foreground">box camarão</strong>) é a escolha
              definitiva para quem busca otimização de espaço sem abrir mão da elegância. Projetado especialmente para
              banheiros pequenos, apartamentos compactos ou vãos estreitos, seu sistema de abertura inteligente elimina
              a necessidade de uma porta batente tradicional ou de trilhos superiores pesados. Com engenharia de alta
              performance, ele garante uma passagem livre incrível de até 90% do vão, transformando a experiência de
              banho e a circulação do seu ambiente.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsappClick}
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-7 py-4 rounded-md shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento do Box Flex via WhatsApp
            </a>
          </div>
          <div className="relative">
            <img
              src={flexAbertura90}
              alt="Box Flex articulado com abertura de até 90% do vão"
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
              Variações do Box Flex
            </h2>
            <p className="text-muted-foreground">
              Disponível em <strong className="text-foreground">Altura Padrão</strong> ou{" "}
              <strong className="text-foreground">Indo até o Teto</strong>. Toque nas fotos para ampliar.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition-all"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
              Diferenciais e Especificações Técnicas
            </h2>
            <p className="text-muted-foreground">
              Engenharia sofisticada, segurança reforçada e acabamento sob medida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              {
                icon: Maximize2,
                title: "Ganho de Espaço Inteligente",
                text: "Diga adeus aos banheiros apertados onde a porta do box bate no vaso sanitário, no gabinete ou nos nichos. O mecanismo articulado do Box Flex dobra-se perfeitamente sobre si mesmo em um movimento suave de abertura lateral. Isso significa que mesmo em vãos a partir de 60 cm, você garante total liberdade de acesso e um aproveitamento cirúrgico de cada centímetro quadrado disponível no seu cômodo.",
              },
              {
                icon: ShieldCheck,
                title: "Segurança Reforçada e Película PVB",
                text: "Sua tranquilidade e a da sua família vêm em primeiro lugar. Todos os nossos modelos de Box Flex são fabricados com vidro temperado de alta resistência física e térmica. Para elevar o nível de proteção, oferecemos a aplicação opcional da película de segurança anti-estilhaço de fábrica. Em caso de quebra por forte impacto, os fragmentos de vidro ficam totalmente colados à película, evitando acidentes e cortes.",
              },
              {
                icon: Sparkles,
                title: "Design Clean e Alta Durabilidade",
                text: "Com uma estética minimalista, o sistema não utiliza trilhos superiores horizontais, o que deixa o visual do banheiro muito mais limpo, moderno e amplo. Suas dobradiças e acessórios são confeccionados em metais nobres com tratamento anticorrosivo, garantindo que o trilho inferior deslize com o mínimo de esforço e máxima suavidade por anos, sem travar ou fazer barulho.",
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

          {/* Cores */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-1/3">
                <div className="inline-flex items-center gap-2 text-copper mb-2">
                  <Ruler className="w-4 h-4" />
                  <span className="uppercase text-xs tracking-wider">Acabamento</span>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">
                  Cores de Kit Disponíveis
                </h3>
                <p className="text-muted-foreground text-sm">
                  Combine o kit do seu Box Flex com a paleta do banheiro.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-5 gap-5">
                {colors.map((c) => (
                  <div key={c.name} className="flex flex-col items-center text-center">
                    <span
                      className="w-16 h-16 rounded-full border-2 border-border shadow-inner mb-2"
                      style={{ background: c.hex }}
                      aria-label={c.name}
                    />
                    <span className="text-xs text-foreground font-medium leading-tight">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <img
                src={flexCores}
                alt="Disponibilidade de cores do kit Box Flex: preto, branco, cromado, dourado e rose"
                loading="lazy"
                decoding="async"
                className="w-full max-w-2xl mx-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Institucional / SEO local */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 text-center">
            Por que escolher a Projeto Vidros em São Paulo?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Encontrar uma vidraçaria de confiança na Zona Norte ou em qualquer região de São Paulo exige atenção aos
            detalhes. Na <strong className="text-foreground">Projeto Vidros</strong>, nós unimos a fabricação sob medida à instalação
            técnica de altíssima precisão. Nossa equipe técnica realiza a medição e a checagem de prumo e nível
            utilizando equipamentos a laser de última geração, o que anula erros de instalação e vazamentos
            indesejados de água. Atendemos residências, apartamentos e projetos comerciais levando soluções que
            alinham estética, segurança regulamentada e prazos de entrega rigorosamente cumpridos. Peça seu orçamento
            direto de fábrica hoje mesmo.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-petrol">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
            Instalação por equipe própria, com acabamento milimétrico a laser
          </h2>
          <p className="text-primary-foreground/70 mb-8 text-lg">
            Da medição ao ajuste fino, sua obra fica limpa e o resultado, impecável. Receba seu orçamento direto
            de fábrica agora mesmo.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsappClick}
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-8 py-4 rounded-md shadow-lg shadow-[#25D366]/30 transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5" />
            Quero um Orçamento de Box Flex no Meu WhatsApp
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
          <figure
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
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

export default BoxFlex;
