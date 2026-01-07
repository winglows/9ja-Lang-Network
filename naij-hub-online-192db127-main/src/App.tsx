import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Media from "./pages/Media";
import Resources from "./pages/Resources";
import People from "./pages/People";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MaterialsUnavailable from "./pages/MaterialsUnavailable";
import useScrollToTop from "./hooks/useScrollToTop";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useScrollToTop();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/media" element={<Media />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/people" element={<People />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/materials-unavailable" element={<MaterialsUnavailable />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
