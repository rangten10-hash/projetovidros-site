import { Link } from "react-router-dom";
import GalleryPageLayout from "@/components/GalleryPageLayout";
import espelho1 from "@/assets/espelho-1.webp";
import espelho2 from "@/assets/espelho-2.webp";
import espelho3 from "@/assets/espelho-3.webp";
import espelho4 from "@/assets/espelho-4.webp";
import espelho5 from "@/assets/espelho-5.webp";
import espelho6 from "@/assets/espelho-6.webp";
import espelho7 from "@/assets/espelho-7.webp";
import espelho8 from "@/assets/espelho-8.webp";
import { Phone } from "lucide-react";
import { useSeo } from "@/lib/seo";
import { ZONA_BAIRROS, ZONA_LABEL, type Zona } from "@/lib/bairros";

const espelhoImages = [espelho1, espelho2, espelho3, espelho4, espelho5, espelho6, espelho7, espelho8];

const WHATSAPP_URL = "https://wa.me/5511915485945?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20espelhos%20sob%20medida.";

const Espelhos = () => {
  useSeo({
    title: "Espelhos Decorativos Sob Medida em São Paulo | Projeto Vidros",
    description:
      "Espelhos decorativos sob medida em SP: bisotê, lapidados, para banheiro e parede inteira. Cristais Guardian e Cebrace com instalação especializada.",
    path: "/espelhos",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Espelhos Decorativos Sob Medida em São Paulo",
      serviceType: "Fabricação e Instalação de Espelhos Sob Medida",
      description: "Espelhos sob medida com cristais Guardian e Cebrace, acabamento lapidado ou bisotê, instalados em São Paulo.",
      areaServed: { "@type": "City", name: "São Paulo" },
      provider: {
        "@type": "LocalBusiness",
        name: "Projeto Vidros",
        telephone: "+55-11-91548-5945",
      },
    },
  });
  return (
  <GalleryPageLayout
    title="Espelhos Decorativos Sob Medida em São Paulo"
    subtitle="Transforme seu Ambiente com Amplitude e Elegância"
    images={espelhoImages}
  >
    <div className="space-y-6 text-muted-foreground leading-relaxed">
      <p>
        Os espelhos são peças-chave na decoração moderna. Além de sua funcionalidade, eles têm o poder de ampliar espaços pequenos e refletir a iluminação natural, trazendo mais vida para sua casa ou escritório. Na <strong className="text-foreground">Projeto Vidros</strong>, fabricamos espelhos sob medida com acabamento impecável em lapidação ou bisotê.
      </p>
      <ul className="space-y-3 list-none">
        <li><strong className="text-foreground">Espelhos para Banheiro:</strong> Modelos resistentes à umidade com instalação segura.</li>
        <li><strong className="text-foreground">Espelhos de Parede Inteira:</strong> Ideal para salas de jantar, quartos e academias.</li>
        <li><strong className="text-foreground">Acabamentos Exclusivos:</strong> Lapidação reta, bisotê (bordas chanfradas) e colagem com silicone neutro que não mancha a prata do espelho.</li>
      </ul>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1ebe5a] transition-colors shadow-lg"
      >
        <Phone className="w-4 h-4" />
        Peça seu orçamento de espelho sob medida agora!
      </a>

      {/* Grade de bairros atendidos */}
      <section className="pt-12">
        <div className="text-center mb-8">
          <span className="text-copper text-xs font-semibold tracking-[0.25em] uppercase">
            Atendimento Local
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-petrol mt-2">
            Espelhos Sob Medida por Bairro em São Paulo
          </h3>
          <p className="text-muted-foreground text-sm mt-2">
            Clique no seu bairro e veja a página dedicada com modelos, fotos e orçamento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(Object.keys(ZONA_BAIRROS) as Zona[]).map((z) => (
            <div key={z} className="rounded-xl border border-border bg-card p-5">
              <h4 className="font-display text-lg text-petrol mb-3 pb-2 border-b border-copper/40">
                {ZONA_LABEL[z]}
              </h4>
              <ul className="space-y-1.5">
                {ZONA_BAIRROS[z].map((b) => (
                  <li key={b.slug}>
                    <Link
                      to={`/espelhos/${b.slug}`}
                      className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-copper/60 group-hover:bg-copper transition-colors" />
                      Espelhos em {b.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  </GalleryPageLayout>
  );
};

export default Espelhos;
