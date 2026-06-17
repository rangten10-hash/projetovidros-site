import { MapPin } from "lucide-react";
import { buildAtendimentoTexto, type CategoriaSlug } from "@/lib/bairroProfiles";

interface Props {
  slug: string;
  categoria: CategoriaSlug;
}

const BairroAtendimentoSection = ({ slug, categoria }: Props) => {
  const result = buildAtendimentoTexto(slug, categoria);
  if (!result) return null;

  const isFactual = result.tipo === "factual";

  return (
    <section
      className={
        isFactual
          ? "rounded-xl border border-border bg-card p-5 md:p-6 mb-10"
          : "rounded-xl border border-copper/30 bg-copper/5 p-6 md:p-8 mb-10"
      }
      aria-label={`Atendimento em ${result.bairro.nome}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
            isFactual ? "bg-petrol/10" : "bg-copper/20"
          }`}
        >
          <MapPin className={`w-5 h-5 ${isFactual ? "text-petrol" : "text-copper"}`} />
        </div>
        <div>
          <h3 className="font-display text-lg text-petrol mb-1">
            Atendimento em {result.bairro.nome}
          </h3>
          <p className="text-foreground/85 text-base leading-relaxed">{result.texto}</p>
        </div>
      </div>
    </section>
  );
};

export default BairroAtendimentoSection;
