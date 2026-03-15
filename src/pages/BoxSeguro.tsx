import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, AlertTriangle, CheckCircle, Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";
import boxSeguro1 from "@/assets/box-seguro-1.jpg";
import boxSeguro2 from "@/assets/box-seguro-2.jpg";
import boxSeguro3 from "@/assets/box-seguro-3.jpg";
import boxSeguro4 from "@/assets/box-seguro-4.jpg";

const BoxSeguro = () => {
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
            Box <span className="text-copper">+Seguro</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A Evolução da Proteção para seu Banheiro
          </p>
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
                  O Box +Seguro <strong className="text-foreground">não é um box comum</strong>. É um sistema de proteção avançado onde aplicamos uma película de segurança de alta performance diretamente no vidro temperado.
                </p>
                <p>
                  Diferente de aplicações comuns, a nossa película é instalada em nossa fábrica antes de chegar à sua casa. Isso é fundamental porque o material exige um <strong className="text-foreground">tempo de cura controlado</strong> e um preparo técnico rigoroso para que a aderência seja total e a eficiência contra impactos seja de 100%.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={boxSeguro1} alt="Vidro temperado com película de segurança" className="w-full h-auto object-cover" />
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
            {[boxSeguro1, boxSeguro2, boxSeguro3, boxSeguro4].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <img src={img} alt={`Box +Seguro exemplo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
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
            Não arrisque o que você tem de mais precioso. Proteja sua família com quem entende de vidro há mais de 30 anos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/box-de-banheiro"
              className="bg-copper text-white px-6 py-3 rounded-md font-semibold hover:bg-copper-light transition-colors"
            >
              Ver Catálogo de Box
            </Link>
            <a
              href="https://wa.me/5511967652289"
              target="_blank"
              rel="noopener noreferrer"
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
