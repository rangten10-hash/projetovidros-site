import GalleryPageLayout from "@/components/GalleryPageLayout";
import espelho1 from "@/assets/espelho-1.jpg";
import espelho2 from "@/assets/espelho-2.jpg";
import espelho3 from "@/assets/espelho-3.jpg";
import espelho4 from "@/assets/espelho-4.jpg";
import espelho5 from "@/assets/espelho-5.jpg";
import espelho6 from "@/assets/espelho-6.jpg";
import espelho7 from "@/assets/espelho-7.jpg";
import espelho8 from "@/assets/espelho-8.jpg";

const espelhoImages = [espelho1, espelho2, espelho3, espelho4, espelho5, espelho6, espelho7, espelho8];

const Espelhos = () => (
  <GalleryPageLayout
    title="Espelhos"
    subtitle="Espelhos decorativos e funcionais para todos os ambientes. Design exclusivo e acabamento impecável."
    images={espelhoImages}
  />
);

export default Espelhos;
