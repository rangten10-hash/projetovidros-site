import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface GalleryPageLayoutProps {
  title: string;
  subtitle: string;
  image?: string;
  images?: string[];
}

const GalleryPageLayout = ({ title, subtitle, image, images }: GalleryPageLayoutProps) => {
  const imageList = images || (image ? Array(8).fill(image) : []);

  const galleryItems = imageList.map((img, i) => ({
    id: i + 1,
    image: img,
    label: `${title} ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-20 bg-petrol">
        <div className="container mx-auto px-4 py-16">
          <Link to="/" className="inline-flex items-center gap-2 text-copper hover:text-copper-light text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <h1 className="font-display text-3xl md:text-5xl text-primary-foreground mb-4">{title}</h1>
          <p className="text-primary-foreground/60 max-w-2xl text-lg">{subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div key={item.id} className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-petrol/0 group-hover:bg-petrol/40 transition-colors duration-500 flex items-end p-4">
                  <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity font-display text-sm">
                    {item.label}
                  </span>
                </div>
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

export default GalleryPageLayout;
