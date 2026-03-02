import GalleryPageLayout from "@/components/GalleryPageLayout";
import projeto1 from "@/assets/projeto-1.jpg";
import projeto2 from "@/assets/projeto-2.jpg";
import projeto3 from "@/assets/projeto-3.jpg";
import projeto4 from "@/assets/projeto-4.jpg";
import projeto5 from "@/assets/projeto-5.jpg";
import projeto6 from "@/assets/projeto-6.jpg";
import projeto7 from "@/assets/projeto-7.jpg";
import projeto8 from "@/assets/projeto-8.jpg";

const projetoImages = [projeto1, projeto2, projeto3, projeto4, projeto5, projeto6, projeto7, projeto8];

const Projetos = () => (
  <GalleryPageLayout
    title="Projetos"
    subtitle="Projetos personalizados em vidro para fachadas, coberturas e divisórias. Transforme seu espaço."
    images={projetoImages}
  />
);

export default Projetos;
