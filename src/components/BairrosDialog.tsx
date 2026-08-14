import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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

type Props = { open: boolean; onOpenChange: (v: boolean) => void };

const BairrosDialog = ({ open, onOpenChange }: Props) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-background border-copper/30">
      <DialogHeader>
        <DialogTitle className="font-display text-2xl md:text-3xl text-foreground text-center">
          Bairros atendidos em <span className="text-copper">São Paulo</span>
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
            <h4 className="font-display text-lg text-[#002B36] dark:text-foreground mb-3 pb-2 border-b border-copper/40">
              {zona.titulo}
            </h4>
            <ul className="space-y-1.5">
              {zona.bairros.map((b) => (
                <li key={b.slug}>
                  <Link
                    to={`/servicos/${b.slug}`}
                    onClick={() => onOpenChange(false)}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-copper/60 group-hover:bg-copper transition-colors" />
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
);

export default BairrosDialog;
