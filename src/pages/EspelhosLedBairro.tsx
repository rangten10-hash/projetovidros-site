import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { findBairro, ZONA_LABEL } from "@/lib/bairros";
import { ledBairroTitle, pickLedBairroDescricao } from "@/lib/espelhoLedBairroContent";
import { useSeo, SITE_URL } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";
import organico1 from "@/assets/espelhos-led/organico-1.webp.asset.json";
import organico2 from "@/assets/espelhos-led/organico-2.webp.asset.json";
import organico3 from "@/assets/espelhos-led/organico-3.webp.asset.json";
import organico4 from "@/assets/espelhos-led/organico-4.webp.asset.json";
import organico5 from "@/assets/espelhos-led/organico-5.webp.asset.json";
import organico6 from "@/assets/espelhos-led/organico-6.webp.asset.json";
import organico7 from "@/assets/espelhos-led/organico-7.webp.asset.json";
import organico8 from "@/assets/espelhos-led/organico-8.webp.asset.json";
import organico9 from "@/assets/espelhos-led/organico-9.webp.asset.json";
import reto1 from "@/assets/espelhos-led/reto-1.webp.asset.json";
import reto2 from "@/assets/espelhos-led/reto-2.webp.asset.json";
import reto3 from "@/assets/espelhos-led/reto-3.webp.asset.json";
import reto4 from "@/assets/espelhos-led/reto-4.webp.asset.json";

const asset = (url: string) => `https://secure-shine-studio.lovable.app${url}`;
const galleries = [
  {
    title: "Espelhos Orgânicos",
    description: "Contornos assimétricos e fluidos para lavabos, banheiros e salas. A iluminação traseira cria um efeito Halo ao redor do espelho; consulte opções de acionamento Touch ou por sensor.",
    photos: [organico1, organico2, organico3, organico4, organico5, organico6, organico7, organico8, organico9].map((photo, i) => ({ src: asset(photo.url), alt: `Espelho orgânico LED sob medida — modelo ${i + 1}` })),
  },
  {
    title: "Espelhos Retos",
    description: "Modelos retangulares, quadrados ou ovais sob medida. Combine iluminação frontal ou traseira e consulte a opção de desembaçador para banheiros.",
    photos: [reto1, reto2, reto3, reto4].map((photo, i) => ({ src: asset(photo.url), alt: `Espelho reto LED sob medida — modelo ${i + 1}` })),
  },
];

const specs = [
  ["Formatos", "Orgânicos, retangulares, quadrados e ovais"],
  ["Iluminação", "Frontal ou traseira; luz quente, neutra ou fria"],
  ["Acionamento", "Touch ou sensor, conforme o projeto"],
  ["Desembaçador", "Opção para modelos de banheiro"],
];

const EspelhosLedBairro = () => {
  const { bairro } = useParams<{ bairro: string }>();
  const slug = bairro?.toLowerCase() ?? "";
  const data = findBairro(slug);
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null);
  const nome = data?.nome ?? "";
  const description = data ? pickLedBairroDescricao(slug, nome) : "";
  const waUrl = `https://wa.me/5511915485945?text=${encodeURIComponent(`Olá, vim pelo site e gostaria de um orçamento de Espelho LED para o bairro ${nome}`)}`;
  useSeo({
    title: data ? ledBairroTitle(nome) : "Espelhos com LED | Projeto Vidros",
    description,
    path: `/espelhos-led/${slug}`,
    jsonLd: data ? {
      "@context": "https://schema.org", "@type": "Service",
      name: `Espelhos com LED sob medida em ${nome}`,
      serviceType: "Espelhos com LED sob medida",
      description,
      areaServed: { "@type": "Place", name: `${nome}, São Paulo` },
      url: `${SITE_URL}/espelhos-led/${slug}`,
      provider: { "@type": "LocalBusiness", name: "Projeto Vidros", telephone: "+5511915485945" },
    } : undefined,
  });

  if (!data) return <Navigate to="/espelhos-led" replace />;
  const cta = (label: string) => (
    <Button asChild size="lg" className="h-auto min-h-12 whitespace-normal px-5 py-3 text-center">
      <a href={waUrl} target="_blank" rel="noopener noreferrer" onClick={(event) => { event.preventDefault(); gtagReportConversion(waUrl, undefined, `espelhos_led_${slug}`); }}>
        <MessageCircle aria-hidden="true" />{label}<ArrowRight aria-hidden="true" />
      </a>
    </Button>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-petrol pt-24 text-primary-foreground">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <Link to="/espelhos-led" className="mb-7 inline-flex items-center gap-2 text-sm text-copper-light hover:underline"><ArrowLeft className="h-4 w-4" /> Voltar para Espelhos LED</Link>
            <p className="mb-3 text-xs font-semibold uppercase text-copper-light">Projeto Vidros · {ZONA_LABEL[data.zona]}</p>
            <h1 className="max-w-3xl font-display text-3xl leading-tight md:text-5xl">Espelhos com LED em {nome} sob Medida</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">Formatos orgânicos e retos, iluminação personalizada e acabamento para o seu ambiente.</p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-9 md:grid-cols-2 md:gap-14">
              <div>
                <p className="text-xs font-semibold uppercase text-copper">Atendimento em {nome}</p>
                <h2 className="mt-3 font-display text-3xl text-petrol md:text-4xl">Um espelho LED para cada espaço</h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">{description}</p>
                <div className="mt-7">{cta(`Solicitar orçamento em ${nome}`)}</div>
              </div>
              <img src={asset(organico1.url)} alt="Espelho orgânico LED em lavabo, exemplo de modelo sob medida" className="max-h-[430px] w-full rounded-md object-contain" loading="eager" />
            </div>
          </div>
        </section>

        {galleries.map((gallery, index) => (
          <section key={gallery.title} className={index % 2 === 0 ? "bg-muted/30 py-14 md:py-20" : "py-14 md:py-20"}>
            <div className="container mx-auto px-4">
              <p className="text-xs font-semibold uppercase text-copper">0{index + 1} / 02 · Modelos sob medida</p>
              <h2 className="mt-3 font-display text-3xl text-petrol md:text-4xl">{gallery.title}</h2>
              <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">{gallery.description}</p>
              <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
                {gallery.photos.map((photo, photoIndex) => (
                  <Button key={photo.src} variant="ghost" type="button" className="group h-auto w-full overflow-hidden rounded-md p-0 hover:bg-transparent" onClick={() => setSelected(photo)} aria-label={`Ampliar foto ${photoIndex + 1} de ${gallery.title}`}>
                    <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />
                  </Button>
                ))}
              </div>
              <div className="mt-9">{cta(`Solicitar orçamento de ${gallery.title} em ${nome}`)}</div>
            </div>
          </section>
        ))}

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl text-petrol md:text-4xl">Opções para o seu projeto</h2>
            <div className="mt-8 overflow-x-auto rounded-md border border-border">
              <table className="w-full min-w-[440px] border-collapse text-left text-sm">
                <tbody>{specs.map(([label, value]) => <tr key={label} className="border-b border-border last:border-b-0 even:bg-muted/30"><th scope="row" className="w-1/3 px-5 py-4 font-semibold text-petrol">{label}</th><td className="px-5 py-4 text-muted-foreground">{value}</td></tr>)}</tbody>
              </table>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">As opções disponíveis dependem das medidas e do modelo escolhido. Consulte a equipe para definir seu projeto em {nome}.</p>
            <div className="mt-7">{cta(`Pedir orçamento de espelho LED em ${nome}`)}</div>
            <div className="mt-10 flex flex-wrap gap-6 border-t border-border pt-6 text-sm font-semibold">
              <Link to="/espelhos-led" className="text-petrol hover:text-copper">Ver todos os espelhos LED</Link>
              <Link to={`/espelhos/${slug}`} className="text-petrol hover:text-copper">Espelhos em {nome}</Link>
              <Link to={`/servicos/${slug}`} className="text-petrol hover:text-copper">Vidraçaria em {nome}</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton url={waUrl} product={`espelhos_led_${slug}`} />
      <Dialog open={Boolean(selected)} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent className="flex max-h-[90vh] max-w-4xl items-center justify-center border-0 bg-background p-3 sm:p-5">
          <DialogTitle className="sr-only">{selected?.alt ?? "Foto do espelho"}</DialogTitle>
          {selected && <img src={selected.src} alt={selected.alt} className="max-h-[80vh] max-w-full object-contain" />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EspelhosLedBairro;