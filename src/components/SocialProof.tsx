import { Instagram } from "lucide-react";
import instagramLogo from "@/assets/social-instagram.png";
import tiktokLogo from "@/assets/social-tiktok.png";

const INSTAGRAM_URL = "https://www.instagram.com/projetovidros.sp?igsh=MjJ3b2hzb3phdTFz&utm_source=qr";
const TIKTOK_URL = "https://www.tiktok.com/@projeto.vidros?_r=1&_t=ZS-95oOpJcsi9d";

// Placeholder Instagram-like grid using existing project images
import img1 from "@/assets/cat-box-banheiro.webp";
import img2 from "@/assets/cat-espelhos.webp";
import img3 from "@/assets/cat-espelhos-led.webp";
import img4 from "@/assets/category-portas.webp";

const instagramPosts = [
  { src: img1, alt: "Box de banheiro instalado" },
  { src: img2, alt: "Espelho decorativo sob medida" },
  { src: img3, alt: "Espelho LED instalado" },
  { src: img4, alt: "Porta de vidro temperado" },
];

const tiktokVideos = [
  { src: img1, alt: "Vídeo TikTok - Box +Seguro" },
  { src: img4, alt: "Vídeo TikTok - Instalação" },
  { src: img3, alt: "Vídeo TikTok - LED" },
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-full">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Veja mais de nossos trabalhos em{" "}
            <span className="text-gradient-copper">tempo real</span> em nossas redes sociais
          </h2>
          <p className="text-muted-foreground">
            Acompanhe instalações, bastidores e novidades direto no nosso Instagram e TikTok.
          </p>

          <div className="flex items-center justify-center gap-8 mt-8">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Projeto Vidros"
              className="transition-transform duration-300 hover:scale-125 hover:animate-pulse"
            >
              <img src={instagramLogo} alt="Instagram" className="h-16 w-16 md:h-20 md:w-20 object-contain" />
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Projeto Vidros"
              className="transition-transform duration-300 hover:scale-125 hover:animate-pulse"
            >
              <img src={tiktokLogo} alt="TikTok" className="h-16 w-16 md:h-20 md:w-20 object-contain rounded-2xl" />
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 max-w-full">
          {/* Instagram Feed */}
          <div className="bg-card rounded-2xl p-4 sm:p-6 shadow-sm border border-border min-w-0 overflow-hidden">
            <div className="flex items-center gap-3 mb-5">
              <img src={instagramLogo} alt="" className="h-8 w-8 object-contain" aria-hidden />
              <div>
                <h3 className="font-display text-lg text-foreground">@projetovidros.sp</h3>
                <p className="text-xs text-muted-foreground">Nosso feed no Instagram</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {instagramPosts.map((post, i) => (
                <a
                  key={i}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-md"
                >
                  <img
                    src={post.src}
                    alt={post.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-petrol/0 group-hover:bg-petrol/40 transition-colors flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center w-full rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Seguir no Instagram
            </a>
          </div>

          {/* TikTok Carousel */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-5">
              <img src={tiktokLogo} alt="" className="h-8 w-8 object-contain rounded-lg" aria-hidden />
              <div>
                <h3 className="font-display text-lg text-foreground">@projeto.vidros</h3>
                <p className="text-xs text-muted-foreground">Vídeos no TikTok</p>
              </div>
            </div>

            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide max-w-full">
              {tiktokVideos.map((v, i) => (
                <a
                  key={i}
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0 w-32 sm:w-40 md:w-44 aspect-[9/16] snap-start rounded-xl overflow-hidden bg-petrol border-2 border-foreground/10"
                >
                  <img
                    src={v.src}
                    alt={v.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground ml-0.5" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 text-primary-foreground text-[11px] font-medium truncate">
                    @projeto.vidros
                  </div>
                </a>
              ))}
            </div>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center w-full rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground bg-foreground hover:bg-foreground/90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
              Ver vídeos no TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
