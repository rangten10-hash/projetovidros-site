import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Local fonts (replaces Google Fonts to remove ~800ms render delay)
// Only weights actually used above-the-fold are eager; others lazy-loaded after hydration.
import "@fontsource/playfair-display/700.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/600.css";

// Defer non-critical font weights to idle time to cut render-blocking CSS
if (typeof window !== "undefined") {
  const loadExtraFonts = () => {
    import("@fontsource/playfair-display/400.css");
    import("@fontsource/playfair-display/600.css");
    import("@fontsource/raleway/500.css");
    import("@fontsource/raleway/700.css");
  };
  if ("requestIdleCallback" in window) {
    (window as any).requestIdleCallback(loadExtraFonts, { timeout: 2000 });
  } else {
    setTimeout(loadExtraFonts, 1500);
  }
}

import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
