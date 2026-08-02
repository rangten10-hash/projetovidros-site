import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useSeo } from "@/lib/seo";
import { gtagReportConversion } from "@/lib/gtag";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Maximize2, CloudRain, Volume2, ShieldCheck, Phone } from "lucide-react";
import sacadaAntes from "@/assets/blog-sacada-unique-antes.jpg";
import sacadaDepois from "@/assets/sacada-depois-envidracada.webp";

const WHATSAPP_URL =
  "https://wa.me/5511915485945?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20envidraçamento%20de%20sacada.";

const handleWhatsApp = (e: React.MouseEvent) => {
  e.preventDefault();
  gtagReportConversion(WHATSAPP_URL);
};

const BENEFICIOS = [
  {
    icon: Maximize2,
    title: "Ampliação do Ambiente",
    text: "Integre sua varanda à sala ou ao espaço gourmet e ganhe uma nova área útil em casa, usável o ano inteiro.",
  },
  {
    icon: CloudRain,
    title: "Proteção contra Chuva, Vento e Poeira",
    text: "Proteja móveis e estofados e acabe com o trabalho de limpar a varanda a cada tempestade.",
  },
  {
    icon: Volume2,
    title: "Isolamento Térmico e Acústico",
    text: "Reduza os ruídos externos da rua e mantenha a temperatura agradável em todas as estações.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança para Crianças e Pets",
    text: "Fechamento completo com travas de segurança, sem abrir mão da vista panorâmica.",
  },
];

const FAQ = [
  {
    q: "O envidraçamento altera a fachada do condomínio?",
    a: "Não. O projeto é executado dentro do padrão exigido pela convenção do condomínio — cor do perfil, tipo de vidro e altura das lâminas seguem exatamente a especificação aprovada pela administração. Antes da medição, verificamos as regras do seu prédio para que a fachada permaneça uniforme.",
  },
  {
    q: "O vidro resiste a ventos fortes em andares altos?",
    a: "Sim. Utilizamos vidro temperado de alta espessura, dimensionado conforme a pressão do vento na altura do seu pavimento e o tamanho do vão. Perfis de alumínio reforçados e fixações apropriadas garantem estabilidade mesmo em andares altos e regiões de vento intenso.",
  },
  {
    q: "Como funciona a limpeza das folhas de vidro?",
    a: "É simples: o sistema articulado permite girar cada lâmina individualmente, dando acesso às duas faces do vidro de dentro da sacada. Você limpa tudo com segurança, sem precisar se debruçar e sem contratar serviço externo.",
  },
];

const EnvidracamentoSacada = () => {
  useSeo({
    title: "Envidraçamento de Sacada Sob Medida em São Paulo | Projeto Vidros",
    description:
      "Envidraçamento de sacada sob medida em São Paulo: cortina de vidro temperado, sistema articulado, vedação dupla e instalação especializada. Orçamento no WhatsApp.",
    path: "/envidracamento-de-sacada",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Envidraçamento de Sacadas Sob Medida",
        serviceType: "Envidraçamento de sacada com cortina de vidro temperado",
        description:
          "Fechamento de sacadas e varandas com vidro temperado, sistema articulado (cortina de vidro), perfis de alumínio reforçados e vedação dupla.",
        areaServed: { "@type": "City", name: "São Paulo" },
        provider: {
          "@type": "LocalBusiness",
          name: "Projeto Vidros",
          telephone: "+55-11-91548-5945",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  });

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-petrol relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full border border-copper/10" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="text-copper text-xs font-semibold tracking-[0.25em] uppercase">
            Varandas e Sacadas
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-4 mb-6 leading-tight">
            Envidraçamento de Sacadas Sob Medida
          </h1>
          <h2 className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
            A transformação perfeita para a sua varanda: mais espaço, conforto e
            proteção para a sua família.
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#1ebe5a] transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Solicitar Orçamento no WhatsApp
          </a>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl text-petrol text-center mb-10">
            Por que fechar a sua sacada com vidro?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFICIOS.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-petrol/10 text-petrol mb-4">
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="font-semibold text-petrol text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Antes e Depois */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl text-petrol text-center mb-10">
            Transformação Real: Veja o Antes e Depois
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            <figure className="rounded-2xl overflow-hidden border border-border bg-card flex flex-col h-full">
              <div className="aspect-[4/3] w-full overflow-hidden bg-black/5">
                <img
                  src={sacadaAntes}
                  alt="Sacada aberta antes do envidraçamento – Projeto Vidros Vidraçaria Zona Norte SP"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="p-4 mt-auto text-sm text-muted-foreground">
                <strong className="text-petrol">Antes:</strong> sacada aberta, exposta
                à chuva, ao vento e à poeira.
              </figcaption>
            </figure>
            <figure className="rounded-2xl overflow-hidden border border-border bg-card flex flex-col h-full">
              <div className="aspect-[4/3] w-full overflow-hidden bg-black/5">
                <img
                  src={sacadaDepois}
                  alt="Sacada envidraçada com vidro temperado depois da instalação – Projeto Vidros Vidraçaria Zona Norte SP"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="p-4 mt-auto text-sm text-muted-foreground">
                <strong className="text-petrol">Depois:</strong> varanda integrada,
                protegida e com vista panorâmica preservada.
              </figcaption>
            </figure>
          </div>

        </div>
      </section>

      {/* Tecnologia */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-petrol text-center mb-10">
            Tecnologia e Qualidade Projeto Vidros
          </h2>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-semibold text-petrol text-xl mb-2">
                Sistema Articulado / Cortina de Vidro
              </h3>
              <p>
                As lâminas de vidro deslizam sobre trilhos e giram uma a uma,
                permitindo abertura total ou parcial da sacada. Todas as folhas se
                recolhem no canto, empilhadas lado a lado, sem ocupar espaço útil e
                sem colunas no meio do vão — você escolhe entre varanda totalmente
                aberta ou fechada em segundos.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-petrol text-xl mb-2">
                Roldanas de Alta Resistência e Vedação Dupla
              </h3>
              <p>
                Trabalhamos com vidro temperado de alta resistência, perfis de
                alumínio reforçados e roldanas de rolamento que mantêm o
                deslizamento leve por anos. A vedação dupla, com escovinhas e
                silicone especial, bloqueia infiltração de água, vento e poeira,
                mantendo o ambiente limpo mesmo em temporais. Também aplicamos, sob
                consulta, a{" "}
                <Link to="/box-seguro" className="text-copper underline">
                  película de segurança anti-estilhaço
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-petrol text-center mb-10">
            Dúvidas Frequentes sobre Envidraçamento de Sacada
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-petrol font-semibold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 md:py-20 bg-petrol">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
            Pronto para valorizar o seu imóvel?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Fale com nossos especialistas em envidraçamento e receba um orçamento
            personalizado para o seu projeto.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-10 py-5 rounded-md text-lg font-bold hover:bg-[#1ebe5a] transition-colors shadow-lg"
          >
            <Phone className="w-6 h-6" />
            Solicitar Orçamento no WhatsApp
          </a>
        </div>
      </section>

      {/* Grade de bairros atendidos */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-copper text-xs font-semibold tracking-[0.25em] uppercase">
              Atendimento Local
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-petrol mt-2">
              Envidraçamento de Sacadas por Bairro em São Paulo
            </h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-2xl mx-auto">
              Clique no seu bairro e confira projetos realizados, modelos e solicite
              seu orçamento sob medida.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(Object.keys(ZONA_BAIRROS) as Zona[]).map((z) => (
              <div key={z} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-display text-lg text-petrol mb-3 pb-2 border-b border-copper/40">
                  {ZONA_LABEL[z]}
                </h3>
                <ul className="space-y-1.5">
                  {ZONA_BAIRROS[z].map((b, i) => (
                    <li key={b.slug}>
                      <Link
                        to={`/envidracamento-de-sacada/${b.slug}`}
                        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-copper/60 group-hover:bg-copper transition-colors" />
                        {pickSacadaLinkLabel(i, b.nome)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default EnvidracamentoSacada;
