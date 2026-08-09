import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Hero from "./Hero";
import PromoBanner from "./PromoBanner";
import SacadaBanner from "./SacadaBanner";

const INTERVAL = 6000; // 6 seconds
const TRANSITION_DURATION = 700; // ms

const slides = [
  { Component: Hero, to: "/box-seguro", label: "Box + Seguro" },
  { Component: PromoBanner, to: "/box-de-banheiro", label: "Oferta Box de Banheiro" },
  { Component: SacadaBanner, to: "/envidracamento-de-sacada", label: "Envidraçamento de Sacadas" },
];

const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = slides.length;
  const navigate = useNavigate();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(((index % totalSlides) + totalSlides) % totalSlides);
  }, [totalSlides]);

  const startAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, INTERVAL);
  }, [totalSlides]);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  useEffect(() => {
    if (!isPaused) startAutoplay();
    else stopAutoplay();
    return () => stopAutoplay();
  }, [isPaused, startAutoplay, stopAutoplay]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  return (
    <section className="relative h-[calc(150vw+6rem)] max-h-[calc(100vh+6rem)] md:max-h-none md:h-screen w-full overflow-hidden pt-24">
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map(({ Component, to, label }) => (
          <div
            key={to}
            role="link"
            tabIndex={0}
            aria-label={label}
            className="min-w-full h-full cursor-pointer"
            onClick={(e) => {
              // deixa links internos do slide (WhatsApp) funcionarem normalmente
              if ((e.target as HTMLElement).closest("a,button")) return;
              navigate(to);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") navigate(to);
            }}
          >
            <Component />
          </div>
        ))}
      </div>

      {/* Setas de navegação */}
      <button
        onClick={() => goToSlide(activeSlide - 1)}
        aria-label="Slide anterior"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/40 hover:bg-black/60 text-primary-foreground backdrop-blur-sm transition-colors"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={() => goToSlide(activeSlide + 1)}
        aria-label="Próximo slide"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/40 hover:bg-black/60 text-primary-foreground backdrop-blur-sm transition-colors"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-0 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.to}
            onClick={() => goToSlide(i)}
            className="p-3 group"
            aria-label={`Ir para slide ${i + 1}`}
          >
            <span
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                activeSlide === i
                  ? "bg-accent scale-125"
                  : "bg-primary-foreground/40 group-hover:bg-primary-foreground/60"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
