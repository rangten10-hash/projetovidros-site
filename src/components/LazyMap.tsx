import { useEffect, useRef, useState } from "react";

interface LazyMapProps {
  src: string;
  title: string;
}

/**
 * Only mounts the Google Maps iframe once it scrolls near the viewport,
 * keeping it out of the initial page load entirely.
 */
const LazyMap = ({ src, title }: LazyMapProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div ref={ref} className="rounded-lg overflow-hidden w-full h-64 md:h-80 bg-primary-foreground/5">
      {visible && (
        <iframe
          title={title}
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
};

export default LazyMap;
