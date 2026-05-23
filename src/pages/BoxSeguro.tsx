import { useState } from "react";
import { gtagReportConversion } from "@/lib/gtag";
import { useSeo } from "@/lib/seo";

const WHATSAPP_URL = "https://wa.me/5511915485945?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20box%20de%20segurança.";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, AlertTriangle, CheckCircle, Sparkles, X } from "lucide-react";
import LazyVideo from "@/components/LazyVideo";
import { Link } from "react-router-dom";
import boxSeguro1 from "@/assets/box-seguro-1.webp";
import boxSeguro2 from "@/assets/box-seguro-2.webp";
import boxSeguro3 from "@/assets/box-seguro-3.webp";
import boxSeguro4 from "@/assets/box-seguro-4.webp";

const galleryImages = [boxSeguro1, boxSeguro2, boxSeguro3, boxSeguro4];

const BoxSeguro = () => {
  useSeo({
    title: "Box Seguro com Película Anti-estilhaço | Projeto Vidros",
    description:
      "Box +Seguro: tecnologia exclusiva com película anti-estilhaço para proteger sua família contra acidentes com vidro temperado em São Paulo.",
    path: "/box-seguro",
  });
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-petrol relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full border border-copper/10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-copper/20 text-copper px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Tecnologia Exclusiva
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight">
            Box Seguro com Película Anti-estilhaço: <span className="text-copper">Proteção para sua Família</span>
          </h1>
          <h2 className="text-primary-foreground/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Por que a Película Anti-estilhaço é Indispensável?
          </h2>
        </div>
      </section>

      {/* O que é */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                O que é o Box <span className="text-copper">+Seguro</span>?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Segurança não é opcional quando se trata de vidro temperado no banheiro. O Box Seguro da <strong className="text-foreground">Projeto Vidros</strong> utiliza uma tecnologia de película de segurança que impede que o vidro caia em caso de quebra acidental.
                </p>
                <ul className="space-y-2 list-none">
                  <li><strong className="text-foreground">Prevenção de Acidentes:</strong> Em caso de impacto, os cacos ficam presos à película, protegendo crianças e idosos.</li>
                  <li><strong className="text-foreground">Normas Técnicas:</strong> Instalação rigorosa seguindo as normas da ABNT.</li>
                  <li><strong className="text-foreground">Tranquilidade Total:</strong> Um investimento pequeno que garante a paz de espírito de quem você ama.</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={boxSeguro1} alt="Vidro temperado com película de segurança" loading="lazy" decoding="async" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vídeo demonstrativo PS4 */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Veja a Tecnologia <span className="text-copper">Box + Seguro em Ação</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Assista ao teste real da película de segurança contra impactos.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <LazyVideo
              src="/videos/box-seguro-ps4.mp4"
              className="aspect-video"
            />
            <div className="mt-8 flex justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); gtagReportConversion(WHATSAPP_URL); }}
                className="bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold uppercase tracking-wide text-sm md:text-base px-8 py-4 rounded-full transition-colors shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
              >
                Quero essa proteção no meu box
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Por que a película é indispensável */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Por que a película é <span className="text-copper">indispensável</span>?
            </h2>
            <p className="text-muted-foreground text-lg">Entenda a diferença técnica e os riscos envolvidos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Box Comum */}
            <div className="bg-background rounded-2xl p-8 border border-destructive/20 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-display text-xl text-foreground">Box Comum <span className="text-muted-foreground text-sm">(Sem Película)</span></h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  O vidro temperado é muito forte, mas não é indestrutível. Em caso de quebra (por impacto, choque térmico ou fadiga do material), ele se estilhaça em milhares de pequenos pedaços.
                </p>
                <div className="bg-destructive/5 border border-destructive/10 rounded-lg p-4">
                  <p className="text-destructive font-semibold text-sm mb-1">⚠ O Risco:</p>
                  <p className="text-sm">
                    No momento da quebra, os estilhaços caem imediatamente. Se houver alguém no banho — especialmente crianças ou idosos — o risco de cortes e ferimentos graves é altíssimo.
                  </p>
                </div>
              </div>
            </div>

            {/* Box +Seguro */}
            <div className="bg-background rounded-2xl p-8 border border-copper/30 shadow-lg ring-2 ring-copper/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-copper/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-copper" />
                </div>
                <h3 className="font-display text-xl text-foreground">Box +Seguro <span className="text-copper text-sm">(Com Película)</span></h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Com a nossa tecnologia, o vidro continua sendo temperado, mas ganha um <strong className="text-foreground">"escudo" invisível</strong>.
                </p>
                <p>
                  <strong className="text-foreground">Como funciona:</strong> Caso o vidro venha a quebrar, a película aplicada em fábrica mantém todos os estilhaços colados e presos na estrutura. O vidro fica fragmentado, mas permanece no lugar, como uma teia, impedindo que os pedaços caiam sobre a pessoa.
                </p>
                <div className="bg-copper/5 border border-copper/10 rounded-lg p-4">
                  <p className="text-copper font-semibold text-sm mb-1">✓ A Vantagem:</p>
                  <p className="text-sm">
                    Você ganha tempo para sair do banho com calma e chamar a manutenção, sem nenhum ferimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de fotos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Veja a tecnologia em ação
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] cursor-pointer"
                onClick={() => setLightboxImg(img)}
              >
                <img src={img} alt={`Box +Seguro exemplo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {lightboxImg && (
            <div
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightboxImg(null)}
            >
              <button
                className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
                onClick={() => setLightboxImg(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={lightboxImg}
                alt="Box +Seguro"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </div>
      </section>

      {/* Disponível para todo o catálogo */}
      <section className="py-20 bg-petrol">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="w-10 h-10 text-copper mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">
            Disponível para todo o nosso <span className="text-copper">Catálogo</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            A melhor notícia é que você não precisa abrir mão do design pela segurança. O sistema Box +Seguro pode ser adicionado a todos os modelos que oferecemos.
          </p>
          <p className="text-primary-foreground/80 text-xl font-display italic mb-10">
            Não arrisque! Peça seu orçamento de Box Seguro hoje mesmo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/box-de-banheiro"
              className="bg-copper text-white px-6 py-3 rounded-md font-semibold hover:bg-copper-light transition-colors"
            >
              Ver Catálogo de Box
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); gtagReportConversion(WHATSAPP_URL); }}
              className="border border-copper text-copper px-6 py-3 rounded-md font-semibold hover:bg-copper/10 transition-colors"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BoxSeguro;
