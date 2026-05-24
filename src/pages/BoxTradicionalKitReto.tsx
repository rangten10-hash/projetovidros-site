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

import cardCover from "@/assets/box-tradicional-kit-reto/card-cover.png";
import cantoPreto from "@/assets/box-tradicional-kit-reto/canto-preto.jpg";
import branco from "@/assets/box-tradicional-kit-reto/branco.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20o%20Box%20Tradicional%20Kit%20Reto.";

const handleWhatsappClick = (e: React.MouseEvent) => {
  e.preventDefault();
  gtagReportConversion(WHATSAPP_URL);
};

const gallery = [
  { src: cardCover, tag: "Cromado / Inox", caption: "Box Tradicional Kit Reto — perfil cromado em vidro temperado 8mm" },
  { src: cantoPreto, tag: "Preto Fosco", caption: "Box Canto Kit Reto Preto Fosco — versão em L com acabamento minimalista" },
  { src: branco, tag: "Branco Puro", caption: "Box Tradicional Kit Reto Branco — visual clean e atemporal" },
];

const colors = [
  { name: "Preto Fosco", hex: "#1a1a1a" },
  { name: "Branco Puro", hex: "#fafafa" },
  { name: "Cromado", hex: "linear-gradient(135deg,#e8e8e8,#a8a8a8)" },
  { name: "Bronze / Champagne", hex: "linear-gradient(135deg,#d8b78a,#9a7544)" },
  { name: "Ouro Brilhante", hex: "linear-gradient(135deg,#f3d77a,#b8860b)" },
  { name: "Natural Fosco", hex: "linear-gradient(135deg,#bcbcbc,#7d7d7d)" },
];

const BoxTradicionalKitReto = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % gallery.length));
  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));

  useSeo({
    title: "Box Tradicional Kit Reto em São Paulo | Projeto Vidros",
    description:
      "O box de correr clássico atualizado para o design moderno. Vidro temperado de 8mm com Kit Reto minimalista, disponível na altura padrão de 1,90m ou sob medida em SP. Confira!",
    path: "/box-tradicional-kit-reto",
    image: cardCover,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Box Tradicional Kit Reto",
      description:
        "Box de banheiro de correr com perfis quadrados minimalistas (Kit Reto), vidro temperado 8mm. Altura padrão 1,90m ou sob medida em São Paulo.",
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
              Box Tradicional Kit Reto: A Evolução Moderna do Box de Correr Clássico
            </h1>
            <p className="text-primary-foreground/70 text-lg mb-6">
              O sistema de correr que você já conhece, agora com{" "}
              <strong className="text-copper-light">perfis quadrados minimalistas</strong> na altura padrão de 1,90m ou
              totalmente sob medida para o seu projeto.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              Se você busca a praticidade imbatível do box de correr tradicional, mas não quer aquele visual antigo com
              perfis arredondados e cheios de emendas, o Box Tradicional Kit Reto é a sua solução perfeita. Ele traz a
              engenharia de perfis de alumínio com linhas retas e geométricas, escondendo parafusos e fixações. É a
              união exata entre a eficiência de espaço do sistema de correr e a sofisticação do design contemporâneo.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsappClick}
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-7 py-4 rounded-md shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento de Box Tradicional Kit Reto
            </a>
          </div>
          <div className="relative">
            <img
              src={cardCover}
              alt="Box Tradicional Kit Reto com perfis quadrados em vidro temperado"
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
              Galeria — Box Tradicional Kit Reto
            </h2>
            <p className="text-muted-foreground">
              Variações de cor e configuração instaladas pela Projeto Vidros. Toque nas fotos para ampliar.
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
              Flexibilidade de altura, perfis sem parafusos e deslize suave em vidro 8mm.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: ArrowUpDown,
                title: "Flexibilidade de Altura (Padrão ou Sob Medida)",
                text: "Adequamos o projeto exatamente à sua necessidade e orçamento. Produzimos este modelo tanto na altura padrão de 1,90m (ideal para quem busca rapidez e excelente custo-benefício) quanto totalmente sob medida, desenhado milimetricamente para acompanhar a altura de revestimentos, nichos ou necessidades específicas do seu ambiente.",
              },
              {
                icon: Sparkles,
                title: "Perfis Quadrados sem Parafusos Aparentes",
                text: "O Kit Reto substitui as linhas pesadas dos boxes convencionais por uma estrutura minimalista com acabamento reto. Os perfis recebem tampas e encaixes especiais que eliminam parafusos expostos, facilitando a limpeza diária e entregando um visual muito mais limpo e sofisticado.",
              },
              {
                icon: Ruler,
                title: "Deslize Suave com Vidro de 8mm",
                text: "Equipado com roldanas de alta performance protegidas dentro do trilho superior, o fechamento e abertura da porta acontecem de forma ultra suave e silenciosa. Tudo isso estruturado em vidro temperado de 8mm de espessura, garantindo a segurança regulamentada e o peso ideal para um manuseio leve no dia a dia.",
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
              Para nós da Projeto Vidros, segurança é inegociável. Mesmo na altura padrão de 1,90m, recomendamos a
              aplicação da nossa tecnologia exclusiva{" "}
              <strong className="text-foreground">Box + Seguro</strong>. Uma película de segurança invisível e de
              alta resistência é aplicada de fábrica no vidro de 8mm. Se houver qualquer quebra por impacto acidental,
              os fragmentos de vidro ficam grudados na película, evitando cortes e acidentes graves domésticos.
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

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
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
            Com atendimento especializado na Zona Norte e em toda a capital de São Paulo, a{" "}
            <strong className="text-foreground">Projeto Vidros</strong> instala seu box com equipes próprias e
            tecnologia de medição digital a laser. Isso garante folgas perfeitas e zero vazamentos de água para fora
            da área de banho. Peça seu orçamento direto de fábrica preenchendo o formulário ou chamando no WhatsApp!
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
            Quero um Orçamento de Box Tradicional no meu WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BoxTradicionalKitReto;
