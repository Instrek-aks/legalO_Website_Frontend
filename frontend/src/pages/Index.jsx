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
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeatureCards />
      <AboutSection />
      <StatsSection />
      <CategoriesSection />
      <CoursesSection />
      <InstructorsSection />
      {/* <PricingSection /> */}
      {/* <TestimonialsSection /> */}
      <EventsSection />
      {/* <CTASection /> */}
      <Footer />
    </div>
  );
};

export default Index;
