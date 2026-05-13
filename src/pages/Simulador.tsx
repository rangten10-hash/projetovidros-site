import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BoxSimulator from "@/components/BoxSimulator";
import { useSeo } from "@/lib/seo";

const Simulador = () => {
  useSeo({
    title: "Simulador de Box | Projeto Vidros",
    description:
      "Simule seu box de banheiro escolhendo modelo, cor de perfil e acabamento. Receba orçamento direto pelo WhatsApp.",
    path: "/simulador",
  });
  return (
    <div className="min-h-screen bg-ice">
      <Header />
      <div className="pt-20">
        <BoxSimulator />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Simulador;
