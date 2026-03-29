const regions = [
  "Zona Norte",
  "Zona Sul",
  "Zona Leste",
  "Zona Oeste",
  "Centro de São Paulo",
  "Alphaville",
  "Barueri",
  "Santana de Parnaíba",
];

const SeoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8 leading-tight text-center">
          Especialistas em Box de Vidro com{" "}
          <span className="text-accent">Película Anti-estilhaço</span>
        </h2>

        <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
          <p>
            A <strong className="text-foreground">Projeto Vidros</strong> é referência em soluções sob medida para quem busca elegância e, acima de tudo, proteção. Somos especialistas em <strong>box de vidro com película anti-estilhaço</strong>, garantindo segurança total para sua família contra acidentes.
          </p>

          <h2 className="font-display text-xl md:text-2xl text-foreground pt-4">
            Espelhos Decorativos Sob Medida em São Paulo
          </h2>
          <p>
            Trabalhamos com <strong>espelhos decorativos sob medida</strong> para todos os ambientes — de espelhos bisotê para salas de jantar a espelhos LED modernos para banheiros. Cada peça é fabricada com acabamento impecável e instalação profissional em toda a Grande São Paulo.
          </p>

          <h2 className="font-display text-xl md:text-2xl text-foreground pt-4">
            Box de Banheiro em São Paulo e Região
          </h2>
          <p>
            Com sede na Zona Norte, expandimos nosso atendimento para oferecer qualidade e rapidez em toda a <strong>Zona Norte, Zona Sul, Zona Leste, Zona Oeste e Centro de São Paulo</strong>. Atendemos com exclusividade grandes condomínios e regiões de alto padrão, como <strong>Alphaville, Barueri e Santana de Parnaíba</strong>.
          </p>
          <p>
            Seja para um projeto residencial ou para sua obra, espelhos decorativos em qualquer região da Grande SP, a Projeto Vidros entrega <strong>instalação limpa, preço de fábrica e garantia técnica</strong>. Peça seu orçamento agora pelo WhatsApp!
          </p>
        </div>

        {/* Regiões atendidas */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-display text-xl md:text-2xl text-foreground mb-6 text-center">
            Regiões Atendidas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {regions.map((region) => (
              <span
                key={region}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm font-medium"
              >
                {region}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoSection;
