import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, X } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface Product {
  name: string;
  image: string;
  description?: string;
  fullDescription?: string;
}

interface ProductPageLayoutProps {
  title: string;
  subtitle: string;
  products: Product[];
}

const ProductPageLayout = ({ title, subtitle, products }: ProductPageLayoutProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-28 bg-petrol">
        <div className="container mx-auto px-4 py-16">
          <Link to="/" className="inline-flex items-center gap-2 text-copper hover:text-copper-light text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <h1 className="font-display text-3xl md:text-5xl text-primary-foreground mb-4">{title}</h1>
          <p className="text-primary-foreground/60 max-w-2xl text-lg">{subtitle}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-border cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground mb-2">{product.name}</h3>
                  {product.description && (
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  )}
                  <a
                    href="https://wa.me/5511915485945?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20box%20de%20segurança."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-copper-light transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Pedir Orçamento
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full max-h-[50vh] object-contain bg-muted/30 rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                {selectedProduct.name}
              </h2>
              {selectedProduct.fullDescription && (
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line mb-6">
                  {selectedProduct.fullDescription}
                </div>
              )}
              <a
                href="https://wa.me/5511915485945?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20para%20box%20de%20segurança."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md text-sm font-semibold hover:bg-copper-light transition-colors"
              >
                <Phone className="w-4 h-4" />
                Pedir Orçamento
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductPageLayout;
