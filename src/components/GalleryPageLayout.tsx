import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface GalleryPageLayoutProps {
  title: string;
  subtitle: string;
  image?: string;
  images?: string[];
  comingSoon?: boolean;
  children?: React.ReactNode;
}

const GalleryPageLayout = ({ title, subtitle, image, images, comingSoon, children }: GalleryPageLayoutProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

      {children && (
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl">
            {children}
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container mx-auto px-4">
          {comingSoon ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="bg-accent/10 border border-accent/30 rounded-lg px-8 py-6 text-center">
                <h2 className="font-display text-2xl text-foreground mb-2">📸 Fotos em breve</h2>
                <p className="text-muted-foreground">Estamos preparando as melhores fotos para você. Volte em breve!</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <img
                    src={item.image}
                    alt={`${title} ${item.id} - Projeto Vidros São Paulo`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-petrol/0 group-hover:bg-petrol/40 transition-colors duration-500 flex items-end p-4">
                    <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity font-display text-sm">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt={`${title} - Detalhe do projeto Projeto Vidros`}
              loading="lazy"
              decoding="async"
              className="w-full max-h-[85vh] object-contain rounded-xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GalleryPageLayout;
