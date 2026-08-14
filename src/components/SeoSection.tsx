import { useState, lazy, Suspense } from "react";
import { MapPin, ArrowRight } from "lucide-react";

// Modal (Radix) carregado sob demanda para não pesar no bundle inicial da Home
const BairrosDialog = lazy(() => import("./BairrosDialog"));
import saoPauloCard from "@/assets/regioes-sao-paulo-card.webp";

const regions = [
  "Zona Norte",
  "Zona Sul",
  "Zona Leste",
  "Zona Oeste",
  "Centro de São Paulo",
  "Alphaville",
  "Barueri",
  "Santana de Parnaíba",
];

const SeoSection = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const openDialog = () => {
    setMounted(true);
    setOpen(true);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8 leading-tight text-center">
          Especialistas em Box de Vidro com{" "}
          <span className="text-accent">Película Anti-estilhaço</span>
        </h2>

        <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
          <p>
            A <strong className="text-foreground">Projeto Vidros</strong> é referência em soluções sob medida para quem busca elegância e, acima de tudo, proteção. Somos especialistas em <strong>box de vidro com película anti-estilhaço</strong>, garantindo segurança total para sua família contra acidentes.
          </p>

          <h2 className="font-display text-xl md:text-2xl text-foreground pt-4">
            Espelhos Decorativos Sob Medida em São Paulo
          </h2>
          <p>
            Trabalhamos com <strong>espelhos decorativos sob medida</strong> para todos os ambientes — de espelhos bisotê para salas de jantar a espelhos LED modernos para banheiros. Cada peça é fabricada com acabamento impecável e instalação profissional em toda a Grande São Paulo.
          </p>

          <h2 className="font-display text-xl md:text-2xl text-foreground pt-4">
            Box de Banheiro em São Paulo e Região
          </h2>
          <p>
            Com sede na Zona Norte, expandimos nosso atendimento para oferecer qualidade e rapidez em toda a <strong>Zona Norte, Zona Sul, Zona Leste, Zona Oeste e Centro de São Paulo</strong>. Atendemos com exclusividade grandes condomínios e regiões de alto padrão, como <strong>Alphaville, Barueri e Santana de Parnaíba</strong>.
          </p>
          <p>
            Seja para um projeto residencial ou para sua obra, espelhos decorativos em qualquer região da Grande SP, a Projeto Vidros entrega <strong>instalação limpa, preço de fábrica e garantia técnica</strong>. Peça seu orçamento agora pelo WhatsApp!
          </p>
        </div>

        {/* Regiões atendidas */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-display text-xl md:text-2xl text-foreground mb-6 text-center">
            Regiões Atendidas
          </h3>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Card visual */}
            <button
              type="button"
              onClick={openDialog}
              className="group relative overflow-hidden rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all min-h-[260px] text-left"
              aria-label="Veja todos os bairros atendidos em São Paulo"
            >
              <img
                src={saoPauloCard}
                alt="São Paulo - bairros atendidos pela Projeto Vidros"
                loading="lazy"
                decoding="async"
                width={800}
                height={800}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002B36]/95 via-[#002B36]/55 to-[#002B36]/20" />
              <div className="relative h-full flex flex-col justify-end p-6 md:p-8 text-white">
                <div className="flex items-center gap-2 text-copper text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                  <MapPin className="w-4 h-4" />
                  Cobertura SP
                </div>
                <h4 className="font-display text-2xl md:text-3xl leading-tight mb-4">
                  Atendemos em São Paulo
                </h4>
                <span className="inline-flex items-center gap-2 self-start bg-copper hover:bg-copper/90 text-[#002B36] font-bold text-xs md:text-sm tracking-[0.2em] uppercase px-5 py-3 rounded-md shadow transition-colors">
                  Veja os Bairros
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </button>

            {/* Tags de zona (clicáveis) */}
            <div className="flex flex-wrap content-center justify-center gap-3 md:p-4">
              {regions.map((region) => (
                <button
                  key={region}
                  type="button"
                  onClick={openDialog}
                  className="px-4 py-2 bg-muted hover:bg-copper/15 hover:text-foreground text-muted-foreground rounded-md text-sm font-medium border border-transparent hover:border-copper/40 transition-colors"
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal com tabela de bairros (lazy) */}
      {mounted && (
        <Suspense fallback={null}>
          <BairrosDialog open={open} onOpenChange={setOpen} />
        </Suspense>
      )}
    </section>
  );
};

export default SeoSection;
