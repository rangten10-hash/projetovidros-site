import { Link } from "react-router-dom";
import { ArrowRight, Building2, DoorOpen, MessageCircle, ShieldCheck, Sparkles, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MAX_SYSTEM, maxSystemWhatsApp } from "@/lib/maxSystem";
import { gtagReportConversion } from "@/lib/gtag";

export function MaxSystemWhatsApp({ source, label = "Solicitar orçamento" }: { source: "card" | "page"; label?: string }) {
  const url = maxSystemWhatsApp(source);
  return <Button asChild variant="whatsapp" className="h-auto min-h-11 whitespace-normal py-3 text-center">
    <a href={url} target="_blank" rel="noopener noreferrer" data-wa-product={`porta_max_system_pivotante_${source}`} onClick={(event) => { event.preventDefault(); gtagReportConversion(url, undefined, `porta_max_system_pivotante_${source}`); }}>
      <MessageCircle />{label}
    </a>
  </Button>;
}

export function MaxSystemBenefits() {
  const benefits = [
    { icon: Sparkles, title: "Design Europeu Clean", text: "Perfis finos e pivôs embutidos para um visual minimalista de esquadria de luxo." },
    { icon: VolumeX, title: "Vedação Acústica e Térmica", text: "Escovas em todo o perímetro ajudam a reduzir a entrada de vento, poeira e ruídos externos." },
    { icon: Building2, title: "Grandes Formatos (Pé-Direito Duplo)", text: `Portas de até ${MAX_SYSTEM.maxHeightMeters.toFixed(2).replace(".", ",")}m de altura, conforme dimensionamento e avaliação técnica do projeto.` },
    { icon: DoorOpen, title: "Sistema Pivotante Elegante", text: "Abertura suave e moderna para fachadas e divisões de ambientes de alto padrão." },
  ];
  return <ul className="grid sm:grid-cols-2 gap-5">{benefits.map(({ icon: Icon, title, text }) => <li key={title} className="flex gap-3">
    <Icon className="h-5 w-5 shrink-0 text-copper-light mt-1" />
    <div><h3 className="font-body font-semibold text-base text-primary-foreground">{title}</h3><p className="text-sm text-primary-foreground/75 leading-relaxed mt-1">{text}</p></div>
  </li>)}</ul>;
}

export default function MaxSystemFeature() {
  return <article className="col-span-full overflow-hidden rounded-lg border border-copper bg-petrol text-primary-foreground" aria-label="Porta Max System Pivotante em destaque">
    <div className="grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      <div className="bg-petrol-light flex items-center justify-center p-4 md:p-6">
        <video controls playsInline preload="none" poster={MAX_SYSTEM.poster} aria-label="Vídeo de demonstração da Porta Max System Pivotante" className="w-full max-w-sm aspect-[9/16] max-h-[620px] object-contain"><source src={MAX_SYSTEM.videoWebm} type="video/webm" /><source src={MAX_SYSTEM.video} type="video/mp4" /></video>
      </div>
      <div className="p-6 md:p-9 flex flex-col justify-center gap-6">
        <span className="text-copper-light text-xs font-semibold">ALTA SEGURANÇA E ALTO PADRÃO</span>
        <Link to={MAX_SYSTEM.path} className="hover:text-copper-light transition-colors"><h2 className="text-2xl md:text-3xl">PORTA MAX SYSTEM PIVOTANTE</h2></Link>
        <p className="text-primary-foreground/80 text-lg">A evolução da porta de vidro: Segurança, vedação de alto padrão e visual minimalista.</p>
        <div className="border-l-2 border-copper pl-4">
          <h3 className="flex gap-2 items-center text-copper-light text-lg"><ShieldCheck className="w-5 h-5 shrink-0" />Proteção Total das Bordas</h3>
          <p className="mt-2 text-primary-foreground/80 text-sm leading-relaxed">O perfil de alumínio envelopa os cantos e quinas do vidro — pontos vulneráveis a impactos —, reforçando a proteção da peça em relação às portas com bordas expostas.</p>
        </div>
        <MaxSystemBenefits />
        <div className="flex flex-wrap gap-3">
          <MaxSystemWhatsApp source="card" />
          <Button asChild variant="outline" className="bg-transparent border-copper text-primary-foreground hover:bg-petrol-light hover:text-primary-foreground h-auto min-h-11 whitespace-normal"><Link to={MAX_SYSTEM.path}>Conhecer a porta<ArrowRight /></Link></Button>
        </div>
      </div>
    </div>
  </article>;
}