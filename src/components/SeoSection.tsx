import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import saoPauloCard from "@/assets/regioes-sao-paulo-card.jpg";

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

type Bairro = { nome: string; slug: string };
type ZonaBlock = { titulo: string; bairros: Bairro[] };

const ZONAS: ZonaBlock[] = [
  {
    titulo: "Zona Norte",
    bairros: [
      { nome: "Santana", slug: "santana" },
      { nome: "Mandaqui", slug: "mandaqui" },
      { nome: "Tucuruvi", slug: "tucuruvi" },
      { nome: "Parada Inglesa", slug: "parada-inglesa" },
      { nome: "Lauzane Paulista", slug: "lauzane-paulista" },
      { nome: "Horto Florestal", slug: "horto-florestal" },
      { nome: "Tremembé", slug: "tremembe" },
      { nome: "Casa Verde", slug: "casa-verde" },
      { nome: "Bairro do Limão", slug: "bairro-do-limao" },
      { nome: "Vila Nova Cachoeirinha", slug: "vila-nova-cachoeirinha" },
      { nome: "Imirim", slug: "imirim" },
      { nome: "Freguesia do Ó", slug: "freguesia-do-o" },
      { nome: "Vila Maria", slug: "vila-maria" },
      { nome: "Vila Guilherme", slug: "vila-guilherme" },
      { nome: "Jaçanã", slug: "jacana" },
      { nome: "Pirituba", slug: "pirituba" },
      { nome: "Cachoeirinha", slug: "cachoeirinha" },
      { nome: "Guarulhos", slug: "guarulhos" },
    ],
  },
  {
    titulo: "Zona Sul",
    bairros: [
      { nome: "Moema", slug: "moema" },
      { nome: "Morumbi", slug: "morumbi" },
      { nome: "Vila Clementino", slug: "vila-clementino" },
      { nome: "Brooklin", slug: "brooklin" },
      { nome: "Socorro", slug: "socorro" },
      { nome: "Santo Amaro", slug: "santo-amaro" },
      { nome: "Ibirapuera", slug: "ibirapuera" },
      { nome: "Saúde", slug: "saude" },
      { nome: "Campo Belo", slug: "campo-belo" },
      { nome: "Vila Mariana", slug: "vila-mariana" },
      { nome: "Jabaquara", slug: "jabaquara" },
      { nome: "Itaim Bibi", slug: "itaim-bibi" },
      { nome: "Interlagos", slug: "interlagos" },
      { nome: "Paraíso", slug: "paraiso" },
      { nome: "Panamby", slug: "panamby" },
      { nome: "Jardim Europa", slug: "jardim-europa" },
      { nome: "Vila Sônia", slug: "vila-sonia" },
    ],
  },
  {
    titulo: "Zona Oeste",
    bairros: [
      { nome: "Alphaville", slug: "alphaville" },
      { nome: "Cotia", slug: "cotia" },
      { nome: "Barueri", slug: "barueri" },
      { nome: "Butantã", slug: "butanta" },
      { nome: "Pinheiros", slug: "pinheiros" },
      { nome: "Lapa", slug: "lapa" },
      { nome: "Perdizes", slug: "perdizes" },
      { nome: "Vila Leopoldina", slug: "vila-leopoldina" },
      { nome: "Osasco", slug: "osasco" },
      { nome: "Barra Funda", slug: "barra-funda" },
      { nome: "Pompéia", slug: "pompeia" },
      { nome: "Vila Madalena", slug: "vila-madalena" },
      { nome: "Parque São Domingos", slug: "parque-sao-domingos" },
      { nome: "Vila Olímpia", slug: "vila-olimpia" },
      { nome: "Santana de Parnaíba", slug: "santana-de-parnaiba" },
    ],
  },
  {
    titulo: "Zona Leste",
    bairros: [
      { nome: "Mooca", slug: "mooca" },
      { nome: "Penha", slug: "penha" },
      { nome: "Vila Formosa", slug: "vila-formosa" },
      { nome: "Tatuapé", slug: "tatuape" },
      { nome: "Vila Prudente", slug: "vila-prudente" },
      { nome: "Belém", slug: "belem" },
      { nome: "Vila Carrão", slug: "vila-carrao" },
      { nome: "Ipiranga", slug: "ipiranga" },
    ],
  },
  {
    titulo: "Centro",
    bairros: [
      { nome: "Avenida Paulista", slug: "avenida-paulista" },
      { nome: "Bom Retiro", slug: "bom-retiro" },
      { nome: "Liberdade", slug: "liberdade" },
      { nome: "Consolação", slug: "consolacao" },
      { nome: "Centro", slug: "centro" },
      { nome: "Aclimação", slug: "aclimacao" },
      { nome: "Bela Vista", slug: "bela-vista" },
      { nome: "Cambuci", slug: "cambuci" },
      { nome: "Brás", slug: "bras" },
      { nome: "Santa Cecília", slug: "santa-cecilia" },
      { nome: "Pacaembu", slug: "pacaembu" },
      { nome: "Higienópolis", slug: "higienopolis" },
      { nome: "Jardins", slug: "jardins" },
      { nome: "Frei Caneca", slug: "frei-caneca" },
    ],
  },
];

const SeoSection = () => {
  const [open, setOpen] = useState(false);

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
              onClick={() => setOpen(true)}
              className="group relative overflow-hidden rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all min-h-[260px] text-left"
              aria-label="Veja todos os bairros atendidos em São Paulo"
            >
              <img
                src={saoPauloCard}
                alt="São Paulo - bairros atendidos pela Projeto Vidros"
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002B36]/95 via-[#002B36]/55 to-[#002B36]/20" />
              <div className="relative h-full flex flex-col justify-end p-6 md:p-8 text-white">
                <div className="flex items-center gap-2 text-[hsl(var(--copper))] text-xs font-semibold tracking-[0.25em] uppercase mb-2">
                  <MapPin className="w-4 h-4" />
                  Cobertura SP
                </div>
                <h4 className="font-display text-2xl md:text-3xl leading-tight mb-4">
                  Atendemos em São Paulo
                </h4>
                <span className="inline-flex items-center gap-2 self-start bg-[hsl(var(--copper))] hover:bg-[hsl(var(--copper))]/90 text-[#002B36] font-bold text-xs md:text-sm tracking-[0.2em] uppercase px-5 py-3 rounded-md shadow transition-colors">
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
                  onClick={() => setOpen(true)}
                  className="px-4 py-2 bg-muted hover:bg-[hsl(var(--copper))]/15 hover:text-foreground text-muted-foreground rounded-md text-sm font-medium border border-transparent hover:border-[hsl(var(--copper))]/40 transition-colors"
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal com tabela de bairros */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-background border-[hsl(var(--copper))]/30">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl md:text-3xl text-foreground text-center">
              Bairros atendidos em <span className="text-[hsl(var(--copper))]">São Paulo</span>
            </DialogTitle>
            <p className="text-center text-muted-foreground text-sm mt-2">
              Clique no seu bairro para ver os serviços de box de vidro e vidraçaria disponíveis.
            </p>
          </DialogHeader>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {ZONAS.map((zona) => (
              <div
                key={zona.titulo}
                className="rounded-xl border border-border bg-card p-5 animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                <h4 className="font-display text-lg text-[#002B36] dark:text-foreground mb-3 pb-2 border-b border-[hsl(var(--copper))]/40">
                  {zona.titulo}
                </h4>
                <ul className="space-y-1.5">
                  {zona.bairros.map((b) => (
                    <li key={b.slug}>
                      <Link
                        to={`/servicos/${b.slug}`}
                        onClick={() => setOpen(false)}
                        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-[hsl(var(--copper))] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--copper))]/60 group-hover:bg-[hsl(var(--copper))] transition-colors" />
                        {b.nome}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SeoSection;
