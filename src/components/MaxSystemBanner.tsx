import desktop from "@/assets/max-system/banner-desktop.webp.asset.json";
import mobile from "@/assets/max-system/banner-mobile.webp.asset.json";

const MaxSystemBanner = () => (
  <section className="relative h-full w-full overflow-hidden bg-petrol">
    <picture>
      <source media="(min-width: 768px)" srcSet={`https://secure-shine-studio.lovable.app${desktop.url}`} type="image/webp" />
      <img
        src={`https://secure-shine-studio.lovable.app${mobile.url}`}
        alt="Lançamento Porta Max System Pivotante Projeto Vidros - Segurança e Vedação de Alto Padrão"
        width={1024}
        height={1536}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-contain object-top md:object-center"
      />
    </picture>
  </section>
);

export default MaxSystemBanner;