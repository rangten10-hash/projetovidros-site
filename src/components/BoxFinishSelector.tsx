import { Link } from "react-router-dom";

type Finish = {
  slug: string;
  label: string;
  swatch: string; // tailwind background classes for the color dot
  ring?: string;
  active: boolean;
  href?: string;
};

// Pastilhas dos acabamentos. Mantemos apenas Box Fumê ativo;
// os demais já estão estruturados para ativação futura.
const FINISHES: Finish[] = [
  {
    slug: "fume",
    label: "Box Fumê",
    swatch: "bg-gradient-to-br from-zinc-700 to-zinc-900",
    active: true,
    href: "/box-fume",
  },
  {
    slug: "bronze",
    label: "Box Bronze",
    swatch: "bg-gradient-to-br from-amber-700 to-amber-900",
    active: true,
    href: "/box-bronze",
  },
  {
    slug: "verde",
    label: "Box Verde",
    swatch: "bg-gradient-to-br from-emerald-700 to-emerald-900",
    active: true,
    href: "/box-verde",
  },
  {
    slug: "incolor",
    label: "Box Incolor",
    swatch: "bg-gradient-to-br from-slate-100 to-slate-300 border border-border",
    active: true,
    href: "/box-incolor",
  },
  {
    slug: "pontilhado",
    label: "Box Pontilhado",
    swatch:
      "bg-[radial-gradient(circle,_#0f172a_1px,_transparent_1.2px)] [background-size:5px_5px] bg-slate-200",
    active: false,
  },
  {
    slug: "jateado",
    label: "Box Jateado / Fosco",
    swatch: "bg-gradient-to-br from-slate-200 to-slate-400 opacity-90",
    active: false,
  },
];

interface Props {
  current?: string;
  className?: string;
  compact?: boolean;
}

const BoxFinishSelector = ({ current, className = "", compact = false }: Props) => {
  return (
    <section
      className={`py-12 md:py-14 bg-background ${className}`}
      aria-labelledby="finish-title"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <span className="text-copper text-xs font-semibold tracking-[0.25em] uppercase">
            Acabamentos
          </span>
          <h2
            id="finish-title"
            className="font-display text-2xl md:text-3xl text-foreground mt-2"
          >
            Opções de Cores e Modelos de Box
          </h2>
          {!compact && (
            <p className="text-muted-foreground text-sm md:text-base mt-3 max-w-xl mx-auto">
              Escolha o acabamento que melhor combina com o seu banheiro.
              Todos os modelos podem ser executados com película Box + Seguro.
            </p>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {FINISHES.map((f) => {
            const isCurrent = current === f.slug;
            const base =
              "group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border text-sm font-medium transition-all";

            if (isCurrent) {
              return (
                <span
                  key={f.slug}
                  aria-current="page"
                  className={`${base} bg-petrol text-primary-foreground border-petrol shadow-md`}
                >
                  <span
                    className={`w-4 h-4 rounded-full ring-2 ring-copper ${f.swatch}`}
                  />
                  {f.label}
                </span>
              );
            }

            if (f.active && f.href) {
              return (
                <Link
                  key={f.slug}
                  to={f.href}
                  className={`${base} bg-background text-foreground border-border hover:border-copper hover:text-petrol hover:shadow-sm`}
                >
                  <span className={`w-4 h-4 rounded-full ${f.swatch}`} />
                  {f.label}
                </Link>
              );
            }

            return (
              <button
                key={f.slug}
                type="button"
                disabled
                title="Em breve"
                className={`${base} bg-muted/40 text-muted-foreground/70 border-transparent cursor-not-allowed`}
              >
                <span className={`w-4 h-4 rounded-full opacity-70 ${f.swatch}`} />
                {f.label}
                <span className="text-[10px] tracking-widest uppercase ml-1 text-muted-foreground/60">
                  em breve
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BoxFinishSelector;
