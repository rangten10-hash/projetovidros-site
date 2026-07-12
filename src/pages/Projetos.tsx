import { Link } from "react-router-dom";
import GalleryPageLayout from "@/components/GalleryPageLayout";
import projeto1 from "@/assets/projeto-1.webp";
import projeto2 from "@/assets/projeto-2.webp";
import projeto3 from "@/assets/projeto-3.webp";
import projeto4 from "@/assets/projeto-4.webp";
import projeto5 from "@/assets/projeto-5.webp";
import projeto6 from "@/assets/projeto-6.webp";
import projeto7 from "@/assets/projeto-7.webp";
import projeto8 from "@/assets/projeto-8.webp";
import { Phone } from "lucide-react";
import { useSeo } from "@/lib/seo";
import { PROJETO_SERVICOS } from "@/lib/projetoServicos";
import { ZONA_BAIRROS, ZONA_LABEL, type Zona } from "@/lib/bairros";

const projetoImages = [projeto1, projeto2, projeto3, projeto4, projeto5, projeto6, projeto7, projeto8];

const WHATSAPP_URL = "https://wa.me/5511915485945?text=Olá,%20vi%20o%20portfólio%20e%20gostaria%20de%20um%20orçamento.";

const Projetos = () => {
  useSeo({
    title: "Projetos e Portfólio | Projeto Vidros São Paulo",
    description:
      "Portfólio da Projeto Vidros: janelas, guarda-corpo, sacadas, vitrines, divisórias e coberturas de vidro sob medida em São Paulo.",
    path: "/projetos",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Projetos Projeto Vidros",
      description: "Portfólio de instalações residenciais e comerciais em vidro.",
      url: "https://www.projetovidros.com.br/projetos",
    },
  });
  return (
    <GalleryPageLayout
      title="Nossos Projetos: Referência em Vidraçaria em São Paulo"
      subtitle="Portfólio de Instalações Residenciais e Comerciais"
      images={projetoImages}
    >
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          A <strong className="text-foreground">Projeto Vidros</strong> se orgulha de cada instalação realizada. Atendemos desde pequenos reparos até grandes obras em condomínios de alto padrão em Alphaville, Barueri e em toda a capital de SP. Confira alguns de nossos trabalhos recentes em box de banheiro, fechamento de sacadas e espelhos decorativos.
        </p>
        <ul className="space-y-3 list-none">
          <li><strong className="text-foreground">Qualidade Garantida:</strong> Materiais de primeira linha e acabamento detalhista.</li>
          <li><strong className="text-foreground">Instalação Limpa:</strong> Respeito à sua casa e prazos rigorosos.</li>
          <li><strong className="text-foreground">Garantia Técnica:</strong> Suporte pós-venda especializado.</li>
        </ul>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1ebe5a] transition-colors shadow-lg"
        >
          <Phone className="w-4 h-4" />
          Inspire-se em nossos projetos e peça o seu orçamento personalizado!
        </a>

        {/* Serviços especializados */}
        <section className="pt-12">
          <div className="text-center mb-8">
            <span className="text-copper text-xs font-semibold tracking-[0.25em] uppercase">
              Portfólio Técnico
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-petrol mt-2">
              Nossos Serviços Especializados
            </h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-2xl mx-auto">
              Além do box de banheiro, executamos projetos completos em vidro
              temperado e laminado para residências, comércios e obras em toda
              São Paulo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {PROJETO_SERVICOS.map((s) => (
              <div
                key={s.id}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-petrol/10 flex items-center justify-center">
                  <s.Icon className="w-5 h-5 text-petrol" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-petrol mb-1">
                    {s.titulo}
                  </h3>
                  <p className="text-foreground/75 text-sm leading-relaxed">
                    {s.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grade de bairros atendidos */}
        <section className="pt-12">
          <div className="text-center mb-8">
            <span className="text-copper text-xs font-semibold tracking-[0.25em] uppercase">
              Atendimento Local
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-petrol mt-2">
              Projetos de Vidraçaria por Bairro em São Paulo
            </h3>
            <p className="text-muted-foreground text-sm mt-2">
              Clique no seu bairro e veja a página dedicada com projetos, fotos e orçamento.
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
                        to={`/projetos/${b.slug}`}
                        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-copper/60 group-hover:bg-copper transition-colors" />
                        Projetos em {b.nome}
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

export default Projetos;
