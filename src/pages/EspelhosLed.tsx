import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useSeo } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import reto1 from "@/assets/espelhos-led/reto-1.webp.asset.json";
import reto2 from "@/assets/espelhos-led/reto-2.webp.asset.json";
import reto3 from "@/assets/espelhos-led/reto-3.webp.asset.json";
import reto4 from "@/assets/espelhos-led/reto-4.webp.asset.json";

type MirrorPhoto = { src: string; alt: string };

const straightPhotos: MirrorPhoto[] = [
  { src: `https://secure-shine-studio.lovable.app${reto1.url}`, alt: "Espelho LED retangular de banheiro com luz indireta em bancada de pedra" },
  { src: `https://secure-shine-studio.lovable.app${reto2.url}`, alt: "Espelho LED retangular retroiluminado sobre bancada de banheiro" },
  { src: `https://secure-shine-studio.lovable.app${reto3.url}`, alt: "Espelho LED reto com iluminação branca em banheiro com bancada dupla" },
  { src: `https://secure-shine-studio.lovable.app${reto4.url}`, alt: "Espelho LED retangular de lavabo com luz quente e bancada de pedra" },
];

// Galerias aceitam até dez fotos por categoria; as fotos orgânicas serão adicionadas quando enviadas.
const organicPhotos: MirrorPhoto[] = [];

const categories = [
  {
    id: "organicos",
    name: "Espelhos Orgânicos",
    subtitle: "Formas livres, luz envolvente",
    description: "Com contornos assimétricos e fluidos, os espelhos orgânicos criam um ponto de destaque em banheiros, lavabos, dormitórios e camarins. A luz indireta valoriza o desenho da peça e traz uma atmosfera acolhedora ao ambiente.",
    details: ["Formatos assimétricos, em gota ou sob medida", "Iluminação traseira com efeito Halo", "Acionamento Touch ou por sensor"],
    photos: organicPhotos,
    query: "espelho LED orgânico",
  },
  {
    id: "retos",
    name: "Espelhos Retos",
    subtitle: "Linhas precisas, luz para o dia a dia",
    description: "Retangulares, quadrados ou ovais: os modelos retos combinam com diferentes projetos e podem receber luz frontal para os cuidados diários ou iluminação traseira para um efeito mais suave. O desembaçador é uma opção para banheiros.",
    details: ["Formatos retangulares, quadrados e ovais sob medida", "Iluminação frontal ou traseira", "Opção de desembaçador e acionamento Touch"],
    photos: straightPhotos,
    query: "espelho LED reto",
  },
] as const;

const whatsappUrl = (model: string) =>
  `https://wa.me/5511915485945?text=${encodeURIComponent(`Olá, vi o site e gostaria de um orçamento para ${model} sob medida.`)}`;

const EspelhosLed = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<MirrorPhoto | null>(null);
  useSeo({
    title: "Espelhos com LED Sob Medida em São Paulo | Projeto Vidros",
    description: "Espelhos LED orgânicos e retos sob medida em São Paulo. Iluminação Halo, frontal ou traseira, acionamento Touch ou sensor e opção de desembaçador.",
    path: "/espelhos-led",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-petrol pt-24 text-primary-foreground">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <Link to="/espelhos" className="mb-7 inline-flex items-center gap-2 text-sm text-copper-light hover:underline"><ArrowLeft className="h-4 w-4" /> Voltar para Espelhos</Link>
            <p className="mb-3 text-xs font-semibold uppercase text-copper-light">Projeto Vidros · São Paulo</p>
            <h1 className="max-w-3xl font-display text-3xl leading-tight md:text-5xl">Espelhos com LED Sob Medida em São Paulo</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">Iluminação personalizada para o seu ambiente, com opções de acionamento Touch ou sensor e desembaçador.</p>
          </div>
        </section>

        {categories.map((category, index) => (
          <section key={category.id} id={category.id} className={index % 2 ? "bg-muted/30 py-14 md:py-20" : "py-14 md:py-20"}>
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase text-copper">0{index + 1} / 02 · {category.subtitle}</p>
                <h2 className="mt-3 font-display text-3xl text-petrol md:text-4xl">{category.name}</h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">{category.description}</p>
                <ul className="mt-6 grid gap-3 text-sm text-foreground sm:grid-cols-3">
                  {category.details.map((detail) => (
                    <li key={detail} className="border-l-2 border-copper pl-3 leading-relaxed">{detail}</li>
                  ))}
                </ul>
              </div>

              {category.photos.length > 0 ? (
                <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
                  {category.photos.slice(0, 10).map((photo, photoIndex) => (
                    <Button key={photo.src} variant="ghost" type="button" className="group relative h-auto w-full overflow-hidden rounded-md p-0 hover:bg-transparent" onClick={() => setSelectedPhoto(photo)} aria-label={`Ampliar foto ${photoIndex + 1} de ${category.name}`}>
                      <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />
                    </Button>
                  ))}
                </div>
              ) : (
                <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">Projetos desta coleção serão apresentados aqui.</div>
              )}

              <Button asChild size="lg" className="mt-9 h-auto min-h-12 w-full whitespace-normal bg-primary px-5 py-3 text-center text-primary-foreground hover:bg-primary/90 sm:w-auto">
                <a href={whatsappUrl(category.query)} target="_blank" rel="noopener noreferrer" onClick={(event) => { event.preventDefault(); gtagReportConversion(whatsappUrl(category.query), undefined, `espelhos_led_${category.id}`); }}>
                  <MessageCircle className="h-4 w-4" /> Solicitar Orçamento Deste Modelo <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </section>
        ))}
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

export default EspelhosLed;