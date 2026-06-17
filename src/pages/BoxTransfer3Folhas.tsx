import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  ArrowLeftRight,
  Layers,
  ChevronRight,
  ChevronLeft,
  X,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useSeo } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";

import cardCover from "@/assets/box-transfer-3-folhas/card-cover.png";
import aberto from "@/assets/box-transfer-3-folhas/aberto.png";
import fechado from "@/assets/box-transfer-3-folhas/fechado.png";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20o%20Box%20Transfer%203%20Folhas.";

const handleWhatsappClick = (e: React.MouseEvent) => {
  e.preventDefault();
  gtagReportConversion(WHATSAPP_URL);
};

const gallery = [
  { src: cardCover, tag: "Box Reto 3 Folhas", caption: "Box Transfer 3 Folhas — abertura de até 66% do vão livre" },
  { src: fechado, tag: "Fechado", caption: "Box Transfer 3 Folhas fechado em perfil preto fosco com vidro 8mm" },
  { src: aberto, tag: "Aberto", caption: "Sistema Transfer aberto: 2 portas correm simultaneamente atrás da folha fixa" },
];

const BoxTransfer3Folhas = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % gallery.length));
  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));

  useSeo({
    title: "Box Transfer 3 Folhas com Abertura de 66% | Projeto Vidros",
    description:
      "Ganhe até 66% de passagem livre no seu banheiro com o Box Transfer de 3 Folhas. Sistema inteligente com 2 portas de correr simultâneas. Ideal para vãos pequenos em SP!",
    path: "/box-transfer-3-folhas",
    image: cardCover,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Instalação de Box Transfer 3 Folhas em São Paulo",
      serviceType: "Instalação de Box de Banheiro Transfer",
      description:
        "Box de banheiro com sistema Transfer de 3 folhas: 1 fixa + 2 portas que correm simultaneamente, liberando até 66% do vão.",
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
              Box Transfer 3 Folhas: Tecnologia de Corre Simultâneo para Máxima Abertura
            </h1>
            <p className="text-primary-foreground/70 text-lg mb-6">
              A engenharia perfeita para banheiros compactos. Enquanto o box comum abre apenas 50%, o sistema Transfer
              libera até <strong className="text-copper-light">66% do vão</strong> com um deslize suave e sincronizado.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              O Box Transfer de 3 Folhas foi projetado para superar as limitações dos boxes tradicionais em espaços
              reduzidos. Seu funcionamento conta com 1 folha fixa e 2 portas móveis que correm simultaneamente. Ao
              puxar a primeira porta, a segunda se move de forma sincronizada e inteligente, recolhendo os vidros
              atrás da folha fixa. O resultado? Uma área de passagem livre impressionante de até 66% do vão útil,
              trazendo conforto e acessibilidade real para o seu banho.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsappClick}
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-7 py-4 rounded-md shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento de Box Transfer 3 Folhas
            </a>
          </div>
          <div className="relative">
            <img
              src={cardCover}
              alt="Box Transfer 3 Folhas com abertura de 66% do vão"
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
              Galeria — Box Transfer 3 Folhas
            </h2>
            <p className="text-muted-foreground">
              Veja o sistema fechado e em pleno funcionamento. Toque nas fotos para ampliar.
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

      {/* Vantagens */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
              As Grandes Vantagens do Sistema Transfer
            </h2>
            <p className="text-muted-foreground">
              Mais passagem, movimento sincronizado e estética minimalista.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: ArrowLeftRight,
                title: "Abertura Ampliada de até 66%",
                text: "Chega de se espremer para entrar no chuveiro. Nos modelos tradicionais de duas folhas, metade do vão fica eternamente fechada. Com o sistema Transfer de 3 folhas, os painéis se sobrepõem perfeitamente, liberando uma passagem muito maior e transformando a experiência de banheiros pequenos.",
              },
              {
                icon: Sparkles,
                title: "Movimento Sincronizado e Inteligente",
                text: "Giro suave, preciso e sem esforço. Graças aos trilhos de alta engenharia e ao sistema de arrasto técnico, você movimenta apenas uma folha e a outra acompanha o curso de forma totalmente automática e silenciosa. Praticidade pura no uso diário.",
              },
              {
                icon: Layers,
                title: "Design Clean e Moderno",
                text: "Além de funcional, o Box Transfer entrega uma estética minimalista impecável. Ele elimina perfis pesados e frestas desnecessárias, valorizando a arquitetura interna do box e facilitando a limpeza diária dos vidros de 8mm.",
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
              Alta Performance com Segurança Reforçada
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Como o Box Transfer possui mais painéis móveis se movimentando simultaneamente, a Projeto Vidros faz
              questão de aplicar o máximo padrão de segurança. Esse modelo é totalmente compatível com a nossa
              tecnologia <strong className="text-foreground">Box + Seguro</strong>, que traz uma película de alta
              resistência aplicada direto de fábrica no vidro temperado de 8mm. Se houver qualquer quebra acidental,
              os fragmentos ficam presos na película, garantindo proteção total para sua família.
            </p>
            <Link
              to="/box-seguro"
              className="inline-flex items-center gap-2 text-copper hover:text-copper-light font-semibold transition-colors"
            >
              👉 Veja como a tecnologia Box + Seguro protege o seu banheiro
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fechamento */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 text-center">
            Por que instalar com a Projeto Vidros?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Sistemas com portas simultâneas e sincronizadas exigem uma instalação rigorosa. Qualquer desalinhamento
            no nível do piso compromete o arrasto das folhas. É por isso que a{" "}
            <strong className="text-foreground">Projeto Vidros</strong> utiliza medição digital a laser e conta com
            equipes de montagem próprias e altamente treinadas. Garantimos um funcionamento milimétrico, suave e com
            vedação perfeita em toda a capital de São Paulo. Traga seu projeto para quem entende de verdade!
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-petrol">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
            Quero um Orçamento do Box Transfer 3 Folhas
          </h2>
          <p className="text-primary-foreground/70 mb-8 text-lg">
            Medição digital a laser, fabricação própria e instalação garantida em toda São Paulo.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsappClick}
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-8 py-4 rounded-md shadow-lg shadow-[#25D366]/30 transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5" />
            Quero um Orçamento do Box Transfer 3 Folhas
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

export default BoxTransfer3Folhas;
