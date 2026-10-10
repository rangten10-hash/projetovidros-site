import { Check, Diamond, FlaskConical, ShieldCheck, Trophy } from "lucide-react";

const benefits = [
  {
    icon: Diamond,
    title: "Espelhos Guardian & Cebrace",
    label: "Matéria-prima premium",
    text: "Utilizamos apenas lâminas de alta definição das marcas Guardian Evolution e Cebrace, garantindo reflexão perfeita, sem distorções e com altíssima durabilidade.",
  },
  {
    icon: ShieldCheck,
    title: "Proteção de Borda",
    label: "Aplicação inclusa em todas as peças",
    text: "Todas as nossas peças recebem aplicação perimetral de Protetor de Borda Tekbond (Grupo Saint-Gobain), criando uma barreira química impermeável que impede o surgimento de manchas pretas e corrosão nas bordas.",
  },
  {
    icon: FlaskConical,
    title: "Colagem Neutra",
    label: "Fixação segura e neutra",
    text: "Utilizamos exclusivamente colas e adesivos Fixa Espelhos neutros (100% livres de solventes e ácidos), que não reagem com a camada de prata e evitam manchas no fundo do espelho.",
  },
];

const comparisons = [
  ["Bordas cortadas e expostas à umidade", "Bordas 100% seladas com Tekbond (Saint-Gobain)"],
  ["Risco de manchas pretas em poucos meses", "Proteção contra oxidação e desgaste do tempo"],
  ["Uso de colas genéricas com solventes nocivos", "Adesivos neutros especiais: não mancham nem reagem com a prata"],
  ["Garantia limitada pela falta de tratamento químico", "Garantia de fábrica reforçada no acabamento e na durabilidade"],
];

const MirrorQualitySection = () => (
  <section aria-labelledby="mirror-quality-title" className="border-y border-copper-light/60 bg-petrol py-14 text-primary-foreground md:py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-sm border border-copper-light px-3 py-2 text-xs font-semibold text-copper-light">
          <ShieldCheck aria-hidden="true" className="h-4 w-4 shrink-0" />
          Linha Premium Guardian & Cebrace
        </span>
        <h2 id="mirror-quality-title" className="mt-5 font-display text-3xl leading-tight md:text-4xl">Trabalhamos Exclusivamente com Espelhos Guardian Evolution e Cebrace</h2>
        <p className="mt-4 text-base text-primary-foreground/80">As marcas número 1 do mercado de vidros e espelhos.</p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-10">
        {benefits.map(({ icon: Icon, title, label, text }) => (
          <div key={title} className="border-t border-copper-light/60 pt-6">
            <Icon aria-hidden="true" className="h-8 w-8 text-copper-light" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-2xl">{title}</h3>
            <p className="mt-2 text-xs font-semibold uppercase text-copper-light">{label}</p>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 border-t border-copper-light/60 pt-9">
        <h3 className="font-display text-2xl md:text-3xl">O cuidado que faz a diferença</h3>
        <div className="mt-6 hidden grid-cols-2 gap-8 border-b border-primary-foreground/20 pb-4 md:grid">
          <p className="text-sm font-semibold text-primary-foreground/70">Outras Vidraçarias / Mercado</p>
          <p className="flex items-center gap-2 text-sm font-semibold text-copper-light"><Trophy aria-hidden="true" className="h-5 w-5" />PROJETO VIDROS</p>
        </div>
        <dl>
          {comparisons.map(([market, project]) => (
            <div key={market} className="grid gap-3 border-b border-primary-foreground/20 py-5 md:grid-cols-2 md:gap-8">
              <dt className="text-sm leading-relaxed text-primary-foreground/65"><span className="mb-1 block text-xs font-semibold uppercase md:hidden">Outras Vidraçarias / Mercado</span>{market}</dt>
              <dd className="flex items-start gap-3 text-sm leading-relaxed"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-copper-light" /><div><span className="mb-1 block text-xs font-semibold uppercase text-copper-light md:hidden">Projeto Vidros</span>{project}</div></dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default MirrorQualitySection;