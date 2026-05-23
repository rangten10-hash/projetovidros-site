import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssCodeSplit: true,
    target: "es2020",
    cssTarget: "chrome90",
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // Manual chunks isolate heavy libs so the home route ships minimal JS
        // and shared vendors stay cacheable across route navigations.
        manualChunks: (id) => {
          if (!id.includes("node_modules")) return;
          if (id.includes("react-router")) return "router";
          if (id.includes("@tanstack")) return "query";
          if (id.includes("@radix-ui")) return "radix";
          if (id.includes("lucide-react")) return "icons";
          if (id.includes("@fontsource")) return "fonts";
          if (id.includes("sonner") || id.includes("next-themes")) return "toast";
          if (id.includes("web-vitals")) return "vitals";
          if (id.includes("@supabase")) return "supabase";
          if (id.includes("react-dom") || id.includes("/react/") || id.includes("scheduler"))
            return "react";
        },
      },
    },
  },
}));

