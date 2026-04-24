import { useState, useEffect, useCallback } from "react";
import Hero from "./Hero";
import PromoBanner from "./PromoBanner";

const INTERVAL = 10000; // 10 seconds

const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 2;

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[calc(60vh+6rem)] md:h-[calc(100vh+0px)] w-full overflow-hidden pt-24">
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        <div className="min-w-full h-full">
          <Hero />
        </div>
        <div className="min-w-full h-full">
          <PromoBanner />
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === i
                ? "bg-accent scale-125"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
