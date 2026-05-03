import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CookieConsent from "./components/CookieConsent";

// Code-split secondary routes to reduce initial JS bundle
const BoxBanheiro = lazy(() => import("./pages/BoxBanheiro"));
const BoxSeguro = lazy(() => import("./pages/BoxSeguro"));
const PortasVidro = lazy(() => import("./pages/PortasVidro"));
const Espelhos = lazy(() => import("./pages/Espelhos"));
const EspelhosLed = lazy(() => import("./pages/EspelhosLed"));
const Projetos = lazy(() => import("./pages/Projetos"));
const Simulador = lazy(() => import("./pages/Simulador"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="h-10 w-10 rounded-full border-2 border-accent border-t-transparent animate-spin" aria-label="Carregando" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/box-de-banheiro" element={<BoxBanheiro />} />
            <Route path="/box-seguro" element={<BoxSeguro />} />
            <Route path="/portas-de-vidro" element={<PortasVidro />} />
            <Route path="/espelhos" element={<Espelhos />} />
            <Route path="/espelhos-led" element={<EspelhosLed />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/simulador" element={<Simulador />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
