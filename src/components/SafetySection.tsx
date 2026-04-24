import { Shield, Award, Heart } from "lucide-react";
import logo from "@/assets/logo-projectovidros.webp";

const features = [
  {
    icon: Shield,
    title: "DNA em Segurança",
    description: "Especialistas em vidros laminados e películas de proteção de alta performance.",
  },
  {
    icon: Award,
    title: "Tradição de 35 anos",
    description: "Milhares de lares atendidos com o rigor técnico de quem entende de vidro de verdade.",
  },
  {
    icon: Heart,
    title: "Compromisso com a Vida",
    description: "Tecnologia antiestilhaço que garante que um acidente doméstico nunca se transforme em uma tragédia.",
  },
];

const SafetySection = () => {
  return (
    <section className="py-24 bg-petrol relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full border border-copper/10" />
      <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full border border-copper/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story */}
          <div>
            <span className="text-copper text-sm font-semibold tracking-widest uppercase mb-4 block">
              Nossa História
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6 leading-tight">
              Segurança que Atravessa{" "}
              <span className="text-gradient-copper">Gerações</span>
            </h2>
            <div className="space-y-4 text-primary-foreground/70 leading-relaxed">
              <p>
                <strong className="text-copper-light">Pioneirismo e Proteção desde 1991.</strong> Quando abrimos nossas portas em 1991, o mercado de vidros era focado apenas na estética. Nós decidimos ir além: fomos pioneiros ao colocar a segurança da sua família como o fundamento de cada projeto.
              </p>
              <p>
                Não entregamos apenas um box de banheiro; entregamos a tranquilidade de saber que, no momento mais relaxante do seu dia, você está protegido pelas melhores tecnologias do mundo.
              </p>
            </div>
          </div>

          {/* Right - Selo + Features */}
          <div>
            <div className="flex justify-center mb-12">
              <img
                src={logo}
                alt="Projeto Vidros - Desde 1991"
                className="w-72 h-72 object-contain drop-shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              {features.map((feat) => (
                <div key={feat.title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-copper/20 flex items-center justify-center">
                    <feat.icon className="w-5 h-5 text-copper" />
                  </div>
                  <div>
                    <h3 className="font-display text-primary-foreground text-lg font-semibold mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-primary-foreground/60 text-sm leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
