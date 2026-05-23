import SmartLink from "./SmartLink";
import categoryBox from "@/assets/cat-box-banheiro-800.webp";
import categoryBox400 from "@/assets/cat-box-banheiro-400.webp";
import categoryPortas from "@/assets/category-portas-800.webp";
import categoryPortas400 from "@/assets/category-portas-400.webp";
import categoryEspelhos from "@/assets/cat-espelhos-800.webp";
import categoryEspelhos400 from "@/assets/cat-espelhos-400.webp";
import categoryEspelhosLed from "@/assets/cat-espelhos-led-800.webp";
import categoryEspelhosLed400 from "@/assets/cat-espelhos-led-400.webp";
import categoryProjetos from "@/assets/category-projetos-800.webp";
import categoryProjetos400 from "@/assets/category-projetos-400.webp";

const categories = [
  { title: "Box de Banheiro", image: categoryBox, image400: categoryBox400, path: "/box-de-banheiro", alt: "Instalação de box de vidro seguro em São Paulo" },
  { title: "Portas de Vidro", image: categoryPortas, image400: categoryPortas400, path: "/portas-de-vidro", alt: "Instalação de portas de vidro seguro em São Paulo" },
  { title: "Espelhos", image: categoryEspelhos, image400: categoryEspelhos400, path: "/espelhos", alt: "Instalação de espelhos decorativos em São Paulo" },
  { title: "Espelhos LED", image: categoryEspelhosLed, image400: categoryEspelhosLed400, path: "/espelhos-led", alt: "Instalação de espelhos LED em São Paulo" },
  { title: "Projetos", image: categoryProjetos, image400: categoryProjetos400, path: "/projetos", alt: "Projetos de vidro sob medida em São Paulo e Alphaville" },
];

const CategoryCards = () => {
  return (
    <section className="py-20 bg-background" aria-labelledby="produtos-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 id="produtos-heading" className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Nossos <span className="text-gradient-copper">Produtos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluções em vidro com design, qualidade e segurança para o seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((cat) => (
            <SmartLink
              key={cat.path}
              to={cat.path}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
            >
              <img
                src={cat.image}
                srcSet={`${cat.image400} 400w, ${cat.image} 800w`}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                alt={cat.alt}
                width={800}
                height={1067}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-petrol/95 via-petrol/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-primary-foreground text-lg font-semibold drop-shadow">
                  {cat.title}
                </h3>
                <div className="h-0.5 w-8 bg-copper mt-2 group-hover:w-16 transition-all duration-500" />
              </div>
            </SmartLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
