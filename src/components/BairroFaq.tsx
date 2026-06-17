import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buildBairroFaq, CATEGORIAS, type CategoriaSlug } from "@/lib/bairroProfiles";
import { findBairro } from "@/lib/bairros";
import { useEffect } from "react";

interface Props {
  slug: string;
  categoria: CategoriaSlug;
}

const FAQ_JSONLD_ID = "bairro-faq-jsonld";

const BairroFaq = ({ slug, categoria }: Props) => {
  const itens = buildBairroFaq(slug, categoria);
  const bairro = findBairro(slug);
  const cat = CATEGORIAS[categoria];

  useEffect(() => {
    if (!itens.length) return;
    const data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: itens.map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a },
      })),
    };
    let el = document.getElementById(FAQ_JSONLD_ID) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = FAQ_JSONLD_ID;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
    return () => {
      const cur = document.getElementById(FAQ_JSONLD_ID);
      if (cur) cur.remove();
    };
  }, [itens]);

  if (!itens.length || !bairro) return null;

  return (
    <section className="mt-12 mb-4" aria-label={`Perguntas frequentes sobre ${cat.label} em ${bairro.nome}`}>
      <h3 className="font-display text-xl md:text-2xl text-petrol mb-4">
        Perguntas frequentes — {cat.label} em {bairro.nome}
      </h3>
      <Accordion type="single" collapsible className="rounded-xl border border-border bg-card px-5">
        {itens.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="last:border-b-0">
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default BairroFaq;
