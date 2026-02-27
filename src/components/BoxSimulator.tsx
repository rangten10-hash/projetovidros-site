import { useState, useRef, useCallback, useEffect } from "react";
import { Upload, Move, Maximize2, RotateCcw, ImageIcon } from "lucide-react";
import simBoxTeto from "@/assets/sim-box-teto.jpg";
import simBoxElegance from "@/assets/sim-box-elegance.jpg";
import simBoxCanto from "@/assets/sim-box-canto.jpg";

interface BoxModel {
  id: string;
  name: string;
  description: string;
  image: string;
  overlayColor: string;
}

const boxModels: BoxModel[] = [
  {
    id: "teto",
    name: "Box até o Teto",
    description: "Elegância e proteção total com vidro do piso ao teto.",
    image: simBoxTeto,
    overlayColor: "rgba(0, 79, 89, 0.25)",
  },
  {
    id: "elegance",
    name: "Box Elegance Cobre",
    description: "Ferragens em cobre escovado, sofisticação máxima.",
    image: simBoxElegance,
    overlayColor: "rgba(184, 115, 51, 0.2)",
  },
  {
    id: "canto",
    name: "Box de Canto",
    description: "Design curvo que otimiza espaço com estilo.",
    image: simBoxCanto,
    overlayColor: "rgba(120, 120, 120, 0.2)",
  },
];

// SVG overlays for each box type
const BoxOverlaySVG = ({ modelId, color }: { modelId: string; color: string }) => {
  if (modelId === "teto") {
    return (
      <svg width="100%" height="100%" viewBox="0 0 200 300" preserveAspectRatio="none">
        {/* Straight panel - floor to ceiling */}
        <rect x="10" y="5" width="4" height="290" fill="#888" opacity="0.9" />
        <rect x="18" y="5" width="80" height="290" fill={color} stroke="#aaa" strokeWidth="1.5" />
        <rect x="100" y="5" width="4" height="290" fill="#888" opacity="0.9" />
        {/* Door panel */}
        <rect x="108" y="5" width="80" height="290" fill={color} stroke="#aaa" strokeWidth="1.5" />
        <rect x="190" y="5" width="4" height="290" fill="#888" opacity="0.9" />
        {/* Handle */}
        <rect x="170" y="120" width="6" height="60" rx="3" fill="#666" opacity="0.8" />
        {/* Top rail */}
        <rect x="10" y="3" width="184" height="4" fill="#999" opacity="0.8" />
      </svg>
    );
  }
  if (modelId === "elegance") {
    return (
      <svg width="100%" height="100%" viewBox="0 0 200 250" preserveAspectRatio="none">
        {/* Frame with copper accents */}
        <rect x="5" y="10" width="190" height="4" fill="#B87333" opacity="0.9" />
        <rect x="5" y="10" width="4" height="236" fill="#B87333" opacity="0.9" />
        <rect x="191" y="10" width="4" height="236" fill="#B87333" opacity="0.9" />
        {/* Glass panels */}
        <rect x="12" y="16" width="88" height="226" fill={color} stroke="#B87333" strokeWidth="1" />
        <rect x="104" y="16" width="84" height="226" fill={color} stroke="#B87333" strokeWidth="1" />
        {/* Copper hinges */}
        <rect x="98" y="50" width="10" height="14" rx="2" fill="#B87333" opacity="0.9" />
        <rect x="98" y="180" width="10" height="14" rx="2" fill="#B87333" opacity="0.9" />
        {/* Handle */}
        <rect x="168" y="100" width="8" height="50" rx="4" fill="#B87333" opacity="0.8" />
      </svg>
    );
  }
  // Corner box
  return (
    <svg width="100%" height="100%" viewBox="0 0 200 250" preserveAspectRatio="none">
      {/* Curved corner shape */}
      <path
        d="M 10 245 L 10 15 Q 100 10 190 15 L 190 245"
        fill={color}
        stroke="#aaa"
        strokeWidth="2"
      />
      {/* Center divide */}
      <line x1="100" y1="12" x2="100" y2="245" stroke="#bbb" strokeWidth="1.5" />
      {/* Bottom rail */}
      <path
        d="M 10 245 Q 100 250 190 245"
        fill="none"
        stroke="#999"
        strokeWidth="3"
      />
      {/* Top rail */}
      <path
        d="M 10 15 Q 100 10 190 15"
        fill="none"
        stroke="#999"
        strokeWidth="3"
      />
      {/* Handles */}
      <circle cx="80" cy="130" r="5" fill="#888" opacity="0.7" />
      <circle cx="120" cy="130" r="5" fill="#888" opacity="0.7" />
    </svg>
  );
};

const BoxSimulator = () => {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<BoxModel | null>(null);
  const [overlayPos, setOverlayPos] = useState({ x: 100, y: 50 });
  const [overlaySize, setOverlaySize] = useState({ w: 200, h: 280 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setUserImage(ev.target?.result as string);
        setSelectedModel(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectModel = (model: BoxModel) => {
    setSelectedModel(model);
    setOverlayPos({ x: 100, y: 50 });
    setOverlaySize({ w: 200, h: 280 });
  };

  const getPointerPos = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const pos = getPointerPos(e);
    setIsDragging(true);
    setDragStart({ x: pos.x - overlayPos.x, y: pos.y - overlayPos.y });
  };

  const handleResizeStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const pos = getPointerPos(e);
    setIsResizing(true);
    setDragStart({ x: pos.x, y: pos.y });
  };

  const handlePointerMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      if (isDragging) {
        setOverlayPos({
          x: Math.max(0, Math.min(x - dragStart.x, rect.width - overlaySize.w)),
          y: Math.max(0, Math.min(y - dragStart.y, rect.height - overlaySize.h)),
        });
      }
      if (isResizing) {
        const dx = x - dragStart.x;
        const dy = y - dragStart.y;
        setOverlaySize((prev) => ({
          w: Math.max(80, prev.w + dx),
          h: Math.max(100, prev.h + dy),
        }));
        setDragStart({ x, y });
      }
    },
    [isDragging, isResizing, dragStart, overlaySize]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    setIsResizing(false);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchmove", handlePointerMove, { passive: false });
    window.addEventListener("touchend", handlePointerUp);
    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  const handleReset = () => {
    setSelectedModel(null);
    setOverlayPos({ x: 100, y: 50 });
    setOverlaySize({ w: 200, h: 280 });
  };

  return (
    <section className="py-20 bg-ice">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-petrol mb-4">
            Simulador de Box
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Envie uma foto do seu banheiro e veja como ficaria com nossos modelos de box.
            Arraste e redimensione para ajustar ao seu espaço.
          </p>
        </div>

        {/* Upload area or canvas */}
        <div className="max-w-4xl mx-auto">
          {!userImage ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-copper/40 rounded-2xl p-16 flex flex-col items-center justify-center cursor-pointer hover:border-copper hover:bg-copper/5 transition-all min-h-[400px]"
            >
              <Upload className="w-16 h-16 text-copper mb-6" />
              <p className="text-petrol font-semibold text-lg mb-2">
                Clique para enviar a foto do seu banheiro
              </p>
              <p className="text-muted-foreground text-sm">
                JPG, PNG — Máximo 20MB
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          ) : (
            <>
              {/* Canvas */}
              <div
                ref={containerRef}
                className="relative overflow-hidden rounded-2xl shadow-elegant border border-border bg-petrol/5 select-none"
                style={{ touchAction: "none" }}
              >
                <img
                  src={userImage}
                  alt="Seu banheiro"
                  className="w-full h-auto block max-h-[600px] object-contain"
                  draggable={false}
                />

                {/* Overlay */}
                {selectedModel && (
                  <div
                    onMouseDown={handleDragStart}
                    onTouchStart={handleDragStart}
                    className="absolute cursor-move"
                    style={{
                      left: overlayPos.x,
                      top: overlayPos.y,
                      width: overlaySize.w,
                      height: overlaySize.h,
                    }}
                  >
                    <BoxOverlaySVG
                      modelId={selectedModel.id}
                      color={selectedModel.overlayColor}
                    />

                    {/* Resize handle */}
                    <div
                      onMouseDown={handleResizeStart}
                      onTouchStart={handleResizeStart}
                      className="absolute bottom-0 right-0 w-7 h-7 bg-copper rounded-tl-lg cursor-se-resize flex items-center justify-center shadow-md"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-white rotate-90" />
                    </div>

                    {/* Drag indicator */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 bg-petrol/70 rounded-full px-2 py-0.5 flex items-center gap-1 pointer-events-none">
                      <Move className="w-3 h-3 text-white" />
                      <span className="text-[10px] text-white font-medium">Arraste</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mt-4 gap-3">
                <button
                  onClick={() => {
                    setUserImage(null);
                    setSelectedModel(null);
                  }}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-petrol transition-colors"
                >
                  <ImageIcon className="w-4 h-4" />
                  Trocar foto
                </button>
                {selectedModel && (
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Resetar posição
                  </button>
                )}
              </div>

              {/* Model cards */}
              <div className="mt-8">
                <h3 className="text-petrol font-semibold mb-4 text-center">
                  Selecione um modelo para visualizar:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {boxModels.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => handleSelectModel(model)}
                      className={`group rounded-xl overflow-hidden border-2 transition-all text-left ${
                        selectedModel?.id === model.id
                          ? "border-copper shadow-lg scale-[1.02]"
                          : "border-border hover:border-copper/50 hover:shadow-md"
                      }`}
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={model.image}
                          alt={model.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 bg-card">
                        <h4 className="font-display text-petrol text-sm font-semibold mb-1">
                          {model.name}
                        </h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {model.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BoxSimulator;
