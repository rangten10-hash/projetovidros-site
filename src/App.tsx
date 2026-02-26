import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BoxBanheiro from "./pages/BoxBanheiro";
import PortasVidro from "./pages/PortasVidro";
import Espelhos from "./pages/Espelhos";
import EspelhosLed from "./pages/EspelhosLed";
import Projetos from "./pages/Projetos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/box-de-banheiro" element={<BoxBanheiro />} />
          <Route path="/portas-de-vidro" element={<PortasVidro />} />
          <Route path="/espelhos" element={<Espelhos />} />
          <Route path="/espelhos-led" element={<EspelhosLed />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
