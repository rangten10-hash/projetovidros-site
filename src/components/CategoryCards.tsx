import { Link } from "react-router-dom";
import categoryBox from "@/assets/cat-box-banheiro.jpg";
import categoryPortas from "@/assets/category-portas.jpg";
import categoryEspelhos from "@/assets/cat-espelhos.jpg";
import categoryEspelhosLed from "@/assets/cat-espelhos-led.png";
import categoryProjetos from "@/assets/category-projetos.jpg";

const categories = [
  { title: "Box de Banheiro", image: categoryBox, path: "/box-de-banheiro", alt: "Instalação de box de vidro seguro em São Paulo" },
  { title: "Portas de Vidro", image: categoryPortas, path: "/portas-de-vidro", alt: "Instalação de portas de vidro seguro em São Paulo" },
  { title: "Espelhos", image: categoryEspelhos, path: "/espelhos", alt: "Instalação de espelhos decorativos em São Paulo" },
  { title: "Espelhos LED", image: categoryEspelhosLed, path: "/espelhos-led", alt: "Instalação de espelhos LED em São Paulo" },
  { title: "Projetos", image: categoryProjetos, path: "/projetos", alt: "Projetos de vidro sob medida em São Paulo e Alphaville" },
];

const CategoryCards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Nossos <span className="text-gradient-copper">Produtos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluções em vidro com design, qualidade e segurança para o seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.path}
              to={cat.path}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-petrol/90 via-petrol/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-primary-foreground text-lg font-semibold">
                  {cat.title}
                </h3>
                <div className="h-0.5 w-8 bg-copper mt-2 group-hover:w-16 transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
