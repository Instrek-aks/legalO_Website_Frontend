import Header from "../components/Header";
import HeroSection from "../components/HeroCarousel";
import FeatureCards from "../components/FeatureCards";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import CategoriesSection from "../components/CategoriesSection";
import CoursesSection from "../components/CoursesSection";
import InstructorsSection from "../components/InstructorsSection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import EventsSection from "../components/EventsSection";
import PodcastSection from "../components/PodcastSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Legal Olympiad - India's Premier Legal Career Development Platform | LegalO"
        description="Join India's most comprehensive legal career development platform. Expert mentorship, AI-powered tools, podcasts, and career guidance for aspiring lawyers and legal professionals."
        keywords="legal olympiad, legal career, law students, legal education, legal mentorship, law career guidance, legal professionals, legal olympiad india, legal career development, law olympiad"
        url="https://legalolympiad.com"
      />
      <PerformanceOptimizer />
      <Header />
      <HeroSection />
      <FeatureCards />
      <AboutSection />
      <StatsSection />
      <CategoriesSection />
      <CoursesSection />
      <InstructorsSection />
      <PodcastSection />
      {/* <PricingSection /> */}
      {/* <TestimonialsSection /> */}
      <EventsSection />
      {/* <CTASection /> */}
      <Footer />
    </div>
  );
};

export default Index;
