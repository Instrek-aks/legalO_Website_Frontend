import { Toaster } from "./components/ui/Toaster";
import { Toaster as Sonner } from "./components/ui/Sonner";
import { TooltipProvider } from "./components/ui/ToolTip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Pages from "./pages/Pages";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

// LegalO Pages
// import Olympiad from "./pages/LegalO/Olympiad";
// import AITools from "./pages/LegalO/AITools";
// import Podcasts from "./pages/LegalO/Podcasts";
// import FindMentor from "./pages/LegalO/FindMentor";
// import Subjects from "./pages/LegalO/Subjects";
// import Mentoring from "./pages/LegalO/Mentoring";

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
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* LegalO Routes */}
          {/* <Route path="/legal-o/olympiad" element={<Olympiad />} />
          <Route path="/legal-o/ai-tools" element={<AITools />} />
          <Route path="/legal-o/podcasts" element={<Podcasts />} />
          <Route path="/legal-o/find-mentor" element={<FindMentor />} />
          <Route path="/legal-o/subjects" element={<Subjects />} />
          <Route path="/legal-o/mentoring" element={<Mentoring />} /> */}

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
