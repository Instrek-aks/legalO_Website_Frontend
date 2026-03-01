import Header from "../components/Header";
import Footer from "../components/Footer";
import PricingSection from "../components/PricingSection";

const Pages = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-orange-800 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Additional Pages
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Explore our additional resources and pricing options
            </p>
          </div>
        </div>
      </section>

      <PricingSection />
      <Footer />
    </div>
  );
};

export default Pages;
