import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Local fonts (replaces Google Fonts to remove ~800ms render delay)
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";

import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
