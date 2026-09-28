import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useSeo } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";
import { ZONA_BAIRROS, ZONA_LABEL, type Zona } from "@/lib/bairros";
import espelho1 from "@/assets/espelho-1.webp";
import espelho2 from "@/assets/espelho-2.webp";
import espelho3 from "@/assets/espelho-3.webp";
import espelho4 from "@/assets/espelho-4.webp";
import espelho5 from "@/assets/espelho-5.webp";
import espelho6 from "@/assets/espelho-6.webp";
import espelho7 from "@/assets/espelho-7.webp";
import espelho8 from "@/assets/espelho-8.webp";
import armario from "@/assets/espelhos-gallery/espelho-armario.webp.asset.json";
import banheiro from "@/assets/espelhos-gallery/espelho-banheiro.webp.asset.json";
import closet from "@/assets/espelhos-gallery/espelho-closte.webp.asset.json";
import lapidado from "@/assets/espelhos-gallery/espelho-lapidado-2.webp.asset.json";
import lavabo from "@/assets/espelhos-gallery/espelho-mod-1-b.webp.asset.json";
import organicoMoldura from "@/assets/espelhos-gallery/espelho-organico-moldura.webp.asset.json";
import organico from "@/assets/espelhos-gallery/espelho-organico.webp.asset.json";
import quarto from "@/assets/espelhos-gallery/espelho-quarto.webp.asset.json";
import salaGrande from "@/assets/espelhos-gallery/espelho-sala-grande1.webp.asset.json";

type Category = "Orgânicos" | "Banheiros" | "Parede Inteira";
type Photo = { src: string; alt: string; category: Category };
const filters = ["Todos", "Orgânicos", "Banheiros", "Parede Inteira"] as const;
type Filter = typeof filters[number];
const assetUrl = (path: string) => `https://secure-shine-studio.lovable.app${path}`;

// Add future projects here with their category; the filters update automatically.
const photos: Photo[] = [
  { src: assetUrl(organico.url), alt: "Espelho orgânico sob medida em hall com aparador", category: "Orgânicos" },
  { src: assetUrl(salaGrande.url), alt: "Espelho de parede inteira em sala de estar", category: "Parede Inteira" },
  { src: assetUrl(banheiro.url), alt: "Espelho sob medida instalado sobre bancada de banheiro", category: "Banheiros" },
  { src: assetUrl(organicoMoldura.url), alt: "Espelho orgânico com moldura em quarto", category: "Orgânicos" },
  { src: assetUrl(lapidado.url), alt: "Espelho lapidado amplo sobre bancada de lavabo", category: "Banheiros" },
  { src: assetUrl(closet.url), alt: "Espelho orgânico de corpo inteiro em closet", category: "Orgânicos" },
  { src: espelho5, alt: "Espelho de parede inteira em sala de jantar", category: "Parede Inteira" },
  { src: espelho1, alt: "Espelho amplo em banheiro claro", category: "Banheiros" },
  { src: assetUrl(quarto.url), alt: "Espelho de corpo inteiro em quarto", category: "Parede Inteira" },
  { src: espelho6, alt: "Espelho de parede inteira em ambiente residencial", category: "Parede Inteira" },
  { src: assetUrl(lavabo.url), alt: "Espelho de formato orgânico em lavabo", category: "Orgânicos" },
  { src: assetUrl(armario.url), alt: "Espelho sob medida em armário de banheiro", category: "Banheiros" },
  { src: espelho2, alt: "Espelhos retangulares sobre bancada de banheiro", category: "Banheiros" },
  { src: espelho3, alt: "Espelho de parede inteira em ambiente comercial", category: "Parede Inteira" },
  { src: espelho4, alt: "Espelho decorativo em espaço de atendimento", category: "Parede Inteira" },
  { src: espelho7, alt: "Espelho amplo em hall de entrada", category: "Parede Inteira" },
  { src: espelho8, alt: "Espelho sob medida em banheiro contemporâneo", category: "Banheiros" },
];

const whatsappUrl = (model: string) => `https://wa.me/5511915485945?text=${encodeURIComponent(`Olá, vi o site e gostaria de um orçamento para ${model} sob medida.`)}`;

const Espelhos = () => {
  const [filter, setFilter] = useState<Filter>("Todos");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const visiblePhotos = filter === "Todos" ? photos : photos.filter((photo) => photo.category === filter);

  useSeo({
    title: "Espelhos Decorativos Sob Medida em São Paulo | Projeto Vidros",
    description: "Espelhos decorativos sob medida em SP: bisotê, lapidados, para banheiro e parede inteira. Cristais Guardian e Cebrace com instalação especializada.",
    path: "/espelhos",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Espelhos Decorativos Sob Medida em São Paulo",
      serviceType: "Fabricação e Instalação de Espelhos Sob Medida",
      description: "Espelhos sob medida com cristais Guardian e Cebrace, acabamento lapidado ou bisotê, instalados em São Paulo.",
      areaServed: { "@type": "City", name: "São Paulo" },
      provider: { "@type": "LocalBusiness", name: "Projeto Vidros", telephone: "+55-11-91548-5945" },
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-petrol pt-20 text-primary-foreground">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-copper-light transition-colors hover:text-primary-foreground"><ArrowLeft className="h-4 w-4" />Voltar</Link>
            <h1 className="max-w-4xl font-display text-3xl md:text-5xl">Espelhos Decorativos Sob Medida em São Paulo</h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">Transforme seu Ambiente com Amplitude e Elegância</p>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-labelledby="gallery-title">
          <div className="container mx-auto px-4">
            <div className="mb-7 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase text-copper">Projetos instalados</p>
                <h2 id="gallery-title" className="mt-2 font-display text-3xl text-petrol md:text-4xl">Espelhos para cada ambiente</h2>
              </div>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar fotos de espelhos">
                {filters.map((item) => (
                  <Button key={item} type="button" size="sm" variant={filter === item ? "default" : "outline"} aria-pressed={filter === item} onClick={() => setFilter(item)} className="h-10 rounded-md px-4">
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {visiblePhotos.map((photo, index) => (
                <Button key={photo.src} variant="ghost" type="button" onClick={() => setSelectedPhoto(photo)} aria-label={`Ampliar foto: ${photo.alt}`} className="group relative h-auto w-full overflow-hidden rounded-md p-0 hover:bg-transparent focus-visible:ring-2 focus-visible:ring-ring">
                  <img src={photo.src} alt={photo.alt} loading={index < 4 ? "eager" : "lazy"} decoding="async" className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />
                  <span className="absolute inset-x-0 bottom-0 bg-petrol/80 px-3 py-2 text-left text-xs text-primary-foreground md:text-sm">{photo.category}</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-14 md:py-20" aria-labelledby="organicos-title">
          <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2 md:gap-14">
            <img src={assetUrl(organicoMoldura.url)} alt="Espelho orgânico com moldura sob medida instalado em quarto" loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover object-center md:aspect-[5/4]" />
            <div>
              <p className="text-xs font-semibold uppercase text-copper">Design fluído e assimétrico</p>
              <h2 id="organicos-title" className="mt-3 font-display text-3xl text-petrol md:text-4xl">Espelhos Orgânicos</h2>
              <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">Contornos livres que transformam paredes em pontos de destaque. Fabricamos seu espelho orgânico sob medida, em qualquer formato, para acompanhar o desenho do seu ambiente.</p>
              <Button asChild size="lg" className="mt-7 h-auto min-h-12 w-full whitespace-normal px-5 py-3 text-center sm:w-auto">
                <a href={whatsappUrl("espelho orgânico")} target="_blank" rel="noopener noreferrer" onClick={(event) => { event.preventDefault(); gtagReportConversion(whatsappUrl("espelho orgânico"), undefined, "espelhos_organicos"); }}>
                  <MessageCircle className="h-4 w-4" />Solicitar Orçamento de Espelho Orgânico<ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20" aria-labelledby="acabamentos-title">
          <div className="container mx-auto max-w-4xl px-4 leading-relaxed text-muted-foreground">
            <h2 id="acabamentos-title" className="mb-6 font-display text-3xl text-petrol">Tipos de espelhos e acabamentos</h2>
            <p>Os espelhos são peças-chave na decoração moderna. Além de sua funcionalidade, eles têm o poder de ampliar espaços pequenos e refletir a iluminação natural, trazendo mais vida para sua casa ou escritório. Na <strong className="text-foreground">Projeto Vidros</strong>, fabricamos espelhos sob medida com acabamento impecável em lapidação ou bisotê.</p>
            <ul className="mt-6 space-y-3">
              <li><strong className="text-foreground">Espelhos para Banheiro:</strong> Modelos resistentes à umidade com instalação segura.</li>
              <li><strong className="text-foreground">Espelhos de Parede Inteira:</strong> Ideal para salas de jantar, quartos e academias.</li>
              <li><strong className="text-foreground">Acabamentos Exclusivos:</strong> Lapidação reta, bisotê (bordas chanfradas) e colagem com silicone neutro que não mancha a prata do espelho.</li>
            </ul>
            <Button asChild size="lg" className="mt-8 h-auto min-h-12 w-full whitespace-normal px-5 py-3 text-center sm:w-auto">
              <a href={whatsappUrl("espelho")} target="_blank" rel="noopener noreferrer" onClick={(event) => { event.preventDefault(); gtagReportConversion(whatsappUrl("espelho"), undefined, "espelhos"); }}><MessageCircle className="h-4 w-4" />Peça seu orçamento de espelho sob medida agora!</a>
            </Button>
          </div>
        </section>

        <section className="border-t border-border bg-muted/20 py-14 md:py-20" aria-labelledby="bairros-title">
          <div className="container mx-auto px-4">
            <div className="mb-9 text-center">
              <p className="text-xs font-semibold uppercase text-copper">Atendimento Local</p>
              <h2 id="bairros-title" className="mt-2 font-display text-2xl text-petrol md:text-3xl">Espelhos Sob Medida por Bairro em São Paulo</h2>
              <p className="mt-2 text-sm text-muted-foreground">Encontre modelos, fotos e orçamento para sua região.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {(Object.keys(ZONA_BAIRROS) as Zona[]).map((zona) => (
                <div key={zona} className="rounded-md border border-border bg-card p-5">
                  <h3 className="mb-3 border-b border-copper/40 pb-2 font-display text-lg text-petrol">{ZONA_LABEL[zona]}</h3>
                  <ul className="space-y-1.5">
                    {ZONA_BAIRROS[zona].map((bairro) => (
                      <li key={bairro.slug}><Link to={`/espelhos/${bairro.slug}`} className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-copper"><span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-copper/60 group-hover:bg-copper" />Espelhos em {bairro.nome}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <Dialog open={Boolean(selectedPhoto)} onOpenChange={(open) => { if (!open) setSelectedPhoto(null); }}>
        <DialogContent className="flex max-h-[90vh] max-w-4xl items-center justify-center border-0 bg-background p-3 sm:p-5">
          <DialogTitle className="sr-only">{selectedPhoto?.alt ?? "Foto do espelho"}</DialogTitle>
          {selectedPhoto && <img src={selectedPhoto.src} alt={selectedPhoto.alt} className="max-h-[80vh] max-w-full object-contain" />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Espelhos;