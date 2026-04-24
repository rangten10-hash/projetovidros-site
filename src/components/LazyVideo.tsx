import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

const LazyVideo = ({ src, poster, className = "" }: LazyVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [showPlay, setShowPlay] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !videoRef.current) return;
    const v = videoRef.current;
    const tryPlay = async () => {
      try {
        await v.play();
        setShowPlay(false);
      } catch {
        setShowPlay(true);
      }
    };
    tryPlay();
  }, [inView]);

  const handlePlay = () => {
    videoRef.current?.play();
    setShowPlay(false);
  };

  return (
    <div
      ref={containerRef}
      className={`relative rounded-2xl overflow-hidden shadow-xl bg-black ${className}`}
    >
      {inView && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          controls
          className="w-full h-full object-cover"
        />
      )}
      {showPlay && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Reproduzir vídeo"
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
        >
          <span className="w-20 h-20 rounded-full bg-copper/90 hover:bg-copper flex items-center justify-center shadow-2xl">
            <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
};

export default LazyVideo;
