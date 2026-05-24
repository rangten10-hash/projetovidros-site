import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BoxBanheiro from "./pages/BoxBanheiro";
import BoxFlex from "./pages/BoxFlex";
import BoxPisoTetoKitReto from "./pages/BoxPisoTetoKitReto";
import BoxTradicionalKitReto from "./pages/BoxTradicionalKitReto";
import BoxCantoKitReto from "./pages/BoxCantoKitReto";
import BoxAbrirPequenoVao from "./pages/BoxAbrirPequenoVao";
import BoxTransfer3Folhas from "./pages/BoxTransfer3Folhas";
import BoxSeguro from "./pages/BoxSeguro";
import PortasVidro from "./pages/PortasVidro";
import Espelhos from "./pages/Espelhos";
import EspelhosLed from "./pages/EspelhosLed";
import Projetos from "./pages/Projetos";
import Simulador from "./pages/Simulador";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import VersionChecker from "./components/VersionChecker";

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
          <Route path="/box-flex" element={<BoxFlex />} />
          <Route path="/box-piso-teto-kit-reto" element={<BoxPisoTetoKitReto />} />
          <Route path="/box-tradicional-kit-reto" element={<BoxTradicionalKitReto />} />
          <Route path="/box-de-canto-kit-reto" element={<BoxCantoKitReto />} />
          <Route path="/box-de-abrir-pequeno-vao" element={<BoxAbrirPequenoVao />} />
          <Route path="/box-transfer-3-folhas" element={<BoxTransfer3Folhas />} />
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
        <CookieConsent />
        <VersionChecker />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
