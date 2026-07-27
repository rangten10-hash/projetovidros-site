import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
}

/**
 * Lazy YouTube player: renders only the thumbnail until the user clicks.
 * Avoids loading ~1MB of YouTube JS on initial page load.
 */
const YouTubeFacade = ({ videoId, title }: YouTubeFacadeProps) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border-4 border-petrol/90 bg-black shadow-[0_20px_50px_-15px_rgba(0,43,54,0.55)]"
      style={{ paddingBottom: "56.25%" }}
    >
      {active ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Assistir vídeo: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FF0000] shadow-lg transition-transform group-hover:scale-110">
            <Play className="h-7 w-7 translate-x-[2px] fill-white text-white" />
          </span>
        </button>
      )}
    </div>
  );
};

export default YouTubeFacade;
