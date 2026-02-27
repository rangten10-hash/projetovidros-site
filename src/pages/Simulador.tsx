import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BoxSimulator from "@/components/BoxSimulator";

const Simulador = () => {
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
