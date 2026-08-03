import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import CookieConsent from "./components/CookieConsent";
import VersionChecker from "./components/VersionChecker";

// Every route except the home page is code-split so the initial payload
// only contains what the first paint needs.
const BoxBanheiro = lazy(() => import("./pages/BoxBanheiro"));
const BoxFlex = lazy(() => import("./pages/BoxFlex"));
const BoxPisoTetoKitReto = lazy(() => import("./pages/BoxPisoTetoKitReto"));
const BoxTradicionalKitReto = lazy(() => import("./pages/BoxTradicionalKitReto"));
const BoxCantoKitReto = lazy(() => import("./pages/BoxCantoKitReto"));
const BoxAbrirPequenoVao = lazy(() => import("./pages/BoxAbrirPequenoVao"));
const BoxTransfer3Folhas = lazy(() => import("./pages/BoxTransfer3Folhas"));
const BoxSeguro = lazy(() => import("./pages/BoxSeguro"));
const BoxFume = lazy(() => import("./pages/BoxFume"));
const BoxFumeBairro = lazy(() => import("./pages/BoxFumeBairro"));
const BoxIncolor = lazy(() => import("./pages/BoxIncolor"));
const BoxIncolorBairro = lazy(() => import("./pages/BoxIncolorBairro"));
const BoxVerde = lazy(() => import("./pages/BoxVerde"));
const BoxVerdeBairro = lazy(() => import("./pages/BoxVerdeBairro"));
const BoxBronze = lazy(() => import("./pages/BoxBronze"));
const BoxBronzeBairro = lazy(() => import("./pages/BoxBronzeBairro"));
const PortasVidro = lazy(() => import("./pages/PortasVidro"));
const PortasVidroBairro = lazy(() => import("./pages/PortasVidroBairro"));
const Espelhos = lazy(() => import("./pages/Espelhos"));
const EspelhosBairro = lazy(() => import("./pages/EspelhosBairro"));
const EspelhosLed = lazy(() => import("./pages/EspelhosLed"));
const EnvidracamentoSacada = lazy(() => import("./pages/EnvidracamentoSacada"));
const EnvidracamentoSacadaBairro = lazy(() => import("./pages/EnvidracamentoSacadaBairro"));
const Projetos = lazy(() => import("./pages/Projetos"));
const ProjetosBairro = lazy(() => import("./pages/ProjetosBairro"));
const Simulador = lazy(() => import("./pages/Simulador"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ServicosBairro = lazy(() => import("./pages/ServicosBairro"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/box-de-banheiro" element={<BoxBanheiro />} />
        <Route path="/box-de-vidro" element={<Navigate to="/box-de-banheiro" replace />} />
        <Route path="/box-flex" element={<BoxFlex />} />
        <Route path="/box-piso-teto-kit-reto" element={<BoxPisoTetoKitReto />} />
        <Route path="/box-tradicional-kit-reto" element={<BoxTradicionalKitReto />} />
        <Route path="/box-de-canto-kit-reto" element={<BoxCantoKitReto />} />
        <Route path="/box-de-abrir-pequeno-vao" element={<BoxAbrirPequenoVao />} />
        <Route path="/box-transfer-3-folhas" element={<BoxTransfer3Folhas />} />
        <Route path="/box-seguro" element={<BoxSeguro />} />
        <Route path="/box-fume" element={<BoxFume />} />
        <Route path="/box-fume/:bairro" element={<BoxFumeBairro />} />
        <Route path="/box-incolor" element={<BoxIncolor />} />
        <Route path="/box-incolor/:bairro" element={<BoxIncolorBairro />} />
        <Route path="/box-verde" element={<BoxVerde />} />
        <Route path="/box-verde/:bairro" element={<BoxVerdeBairro />} />
        <Route path="/box-bronze" element={<BoxBronze />} />
        <Route path="/box-bronze/:bairro" element={<BoxBronzeBairro />} />
        <Route path="/portas-de-vidro" element={<PortasVidro />} />
        <Route path="/portas-de-vidro/:bairro" element={<PortasVidroBairro />} />
        <Route path="/espelhos" element={<Espelhos />} />
        <Route path="/espelhos/:bairro" element={<EspelhosBairro />} />
        <Route path="/espelhos-led" element={<EspelhosLed />} />
        <Route path="/envidracamento-de-sacada" element={<EnvidracamentoSacada />} />
        <Route path="/envidracamento-de-sacada/:bairro" element={<EnvidracamentoSacadaBairro />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projetos/:bairro" element={<ProjetosBairro />} />
        <Route path="/simulador" element={<Simulador />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/servicos/:bairro" element={<ServicosBairro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    <CookieConsent />
    <VersionChecker />
  </BrowserRouter>
);

export default App;
