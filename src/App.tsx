import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PaintDecontamination from "./pages/PaintDecontamination";
import CeramicCoating from "./pages/CeramicCoating";
import PaintCorrection from "./pages/PaintCorrection";
import DecalRemoval from "./pages/DecalRemoval";
import CarValeting from "./pages/CarValeting";
import DeepClean from "./pages/DeepClean";
import MaintenanceWash from "./pages/MaintenanceWash";
import Kilmarnock from "./pages/Kilmarnock";
import Irvine from "./pages/Irvine";
import Troon from "./pages/Troon";
import Ayr from "./pages/Ayr";
import Prestwick from "./pages/Prestwick";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Service Pages */}
          <Route path="/paint-decontamination" element={<PaintDecontamination />} />
          <Route path="/ceramic-coating" element={<CeramicCoating />} />
          <Route path="/paint-correction" element={<PaintCorrection />} />
          <Route path="/decal-removal" element={<DecalRemoval />} />
          <Route path="/car-valeting" element={<CarValeting />} />
          <Route path="/deep-clean" element={<DeepClean />} />
          <Route path="/maintenance-wash" element={<MaintenanceWash />} />
          {/* Location Pages */}
          <Route path="/kilmarnock" element={<Kilmarnock />} />
          <Route path="/irvine" element={<Irvine />} />
          <Route path="/troon" element={<Troon />} />
          <Route path="/ayr" element={<Ayr />} />
          <Route path="/prestwick" element={<Prestwick />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
