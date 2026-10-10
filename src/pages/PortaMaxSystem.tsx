import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Check, Maximize2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { MaxSystemBenefits, MaxSystemWhatsApp } from "@/components/MaxSystemFeature";
import { MAX_SYSTEM, maxSystemSchemas, maxSystemWhatsApp } from "@/lib/maxSystem";
import { ZONA_BAIRROS, ZONA_LABEL, type Zona } from "@/lib/bairros";
import { useSeo } from "@/lib/seo";

const comparisons = [
  { label: "Bordas & Quinas do Vidro", conventional: "Cantos do vidro expostos, mais vulneráveis a impactos acidentais.", max: "Perfis e cantoneiras de alumínio envolvem as bordas e quinas, reforçando a proteção contra impactos." },
  { label: "Acabamento & Ferragens", conventional: "Ferragens metálicas aparentes nos cantos, como os modelos 1101/1103.", max: "Perfis slim contínuos com pivôs embutidos e ocultos dentro do perfil." },
  { label: "Vedação & Conforto", conventional: "Frestas abertas podem permitir a passagem de vento, poeira e ruídos.", max: "Escovas de vedação em todo o perímetro ajudam a melhorar o conforto do ambiente." },
];

export default function PortaMaxSystem() {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedImage = selected === null ? undefined : MAX_SYSTEM.images[selected];
  useSeo({ title: MAX_SYSTEM.title, description: MAX_SYSTEM.description, path: MAX_SYSTEM.path, image: MAX_SYSTEM.images[0].src, jsonLd: maxSystemSchemas });
  return <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="pt-28 pb-12 md:pb-16 bg-petrol text-primary-foreground">
        <div className="container mx-auto px-4 pt-10">
          <Button asChild variant="link" className="px-0 text-copper-light mb-5"><Link to="/portas-de-vidro"><ArrowLeft />Voltar para Portas</Link></Button>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-copper-light text-xs font-semibold mb-5"><span>ALTA SEGURANÇA</span><span>LINHA PREMIUM</span><span>DESIGN EUROPEU</span></div>
          <h1 className="text-3xl md:text-5xl max-w-4xl leading-tight">Porta Max System Pivotante <span className="text-copper-light text-xl md:text-2xl block mt-3">AL Indústria</span></h1>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mt-5 mb-7">Design europeu minimalista, vedação termoacústica e proteção total das bordas do vidro.</p>
          <MaxSystemWhatsApp source="page" />
        </div>
      </section>

      <section className="py-12 md:py-16" aria-label="Fotos e demonstração da Porta Max System">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)] gap-6 items-start">
            <div className="grid grid-cols-2 gap-4">
              {MAX_SYSTEM.images.map((image, index) => <figure key={image.src} className={index === 0 ? "col-span-2" : ""}>
                <Button variant="ghost" className={`relative w-full h-auto p-0 overflow-hidden bg-muted hover:bg-muted ${index === 0 ? "aspect-[4/3]" : "aspect-square"}`} aria-label={`Ampliar foto ${index + 1} da Porta Max System`} onClick={() => setSelected(index)}>
                  <img src={image.src} alt={image.alt} className="w-full h-full object-contain" loading={index === 0 ? "eager" : "lazy"} decoding="async" />
                  <Maximize2 className="absolute right-3 bottom-3 text-primary bg-background/90 rounded-sm p-1 h-7 w-7" />
                </Button>
              </figure>)}
            </div>
            <div>
              <h2 className="text-2xl text-petrol mb-4">Veja a Max System em ação</h2>
              <video controls playsInline preload="none" poster={MAX_SYSTEM.poster} aria-label="Vídeo de demonstração da Porta Max System Pivotante" className="w-full aspect-[9/16] object-contain bg-petrol rounded-md"><source src={MAX_SYSTEM.videoWebm} type="video/webm" /><source src={MAX_SYSTEM.video} type="video/mp4" /></video>
              <p className="mt-3 text-sm text-muted-foreground">Demonstração do sistema pivotante AL Indústria.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-petrol text-primary-foreground py-12 md:py-16 border-y border-copper">
        <div className="container mx-auto px-4 max-w-5xl">
          <ShieldCheck className="text-copper-light h-9 w-9 mb-4" />
          <h2 className="text-3xl mb-5">Proteção das bordas. Elegância em cada detalhe.</h2>
          <p className="text-primary-foreground/80 leading-relaxed mb-8">Diferente das portas convencionais com cantos expostos, a Max System utiliza perfis de alumínio para envelopar as bordas e quinas do vidro. Esse cuidado protege pontos vulneráveis da peça, aliado ao visual de uma esquadria de alto padrão.</p>
          <MaxSystemBenefits />
          <p className="text-primary-foreground/65 text-sm mt-6 mb-7">A proteção das bordas não torna o vidro inquebrável. As medidas, o vidro e a instalação devem ser definidos após avaliação técnica.</p>
          <MaxSystemWhatsApp source="page" label="Pedir orçamento da Porta Max System" />
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl text-petrol mb-8">Porta Convencional de Vidro vs. Porta Max System</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[false, true].map((premium) => <article key={String(premium)} className={`rounded-lg border p-6 ${premium ? "bg-petrol border-copper text-primary-foreground" : "bg-card border-border text-foreground"}`}>
              <h3 className="text-2xl mb-6">{premium ? "Porta Max System" : "Porta Convencional de Vidro"}</h3>
              <ul className="space-y-6">{comparisons.map((row) => <li key={row.label}>
                <h4 className={`font-body font-semibold flex items-start gap-2 ${premium ? "text-copper-light" : "text-foreground"}`}>{premium && <Check className="w-5 h-5 shrink-0" />}{row.label}</h4>
                <p className={`text-sm mt-2 leading-relaxed ${premium ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{premium ? row.max : row.conventional}</p>
              </li>)}</ul>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-petrol mb-4">Instalação de Porta Max System Pivotante perto de você</h2>
          <p className="text-muted-foreground mb-8">Projeto sob medida e instalação em São Paulo. Atendimento nos bairros das Zonas Norte, Sul, Oeste, Leste e Centro.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{(Object.keys(ZONA_BAIRROS) as Zona[]).map((zona) => <div key={zona}>
            <h3 className="text-xl text-petrol pb-3 mb-3 border-b border-copper/40">{ZONA_LABEL[zona]}</h3>
            <ul className="space-y-2">{ZONA_BAIRROS[zona].map((bairro) => <li key={bairro.slug}><Link to={`/portas-de-vidro/${bairro.slug}`} className="text-sm text-muted-foreground hover:text-copper transition-colors">Portas de Vidro em {bairro.nome}</Link></li>)}</ul>
          </div>)}</div>
          <div className="mt-10"><MaxSystemWhatsApp source="page" label="Solicitar orçamento para meu projeto" /></div>
        </div>
      </section>
    </main>
    <Dialog open={Boolean(selectedImage)} onOpenChange={(open) => { if (!open) setSelected(null); }}>
      <DialogContent className="max-w-4xl"><DialogTitle>Porta Max System Pivotante</DialogTitle>{selectedImage && <img src={selectedImage.src} alt={selectedImage.alt} className="w-full max-h-[75vh] object-contain" />}</DialogContent>
    </Dialog>
    <Footer /><WhatsAppButton url={maxSystemWhatsApp("page")} product="porta_max_system_pivotante_flutuante" />
  </div>;
}