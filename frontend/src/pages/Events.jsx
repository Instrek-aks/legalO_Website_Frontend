import Header from "../components/Header";
import Footer from "../components/Footer";
import EventsSection from "../components/EventsSection";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-brand-orange to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="slide-in-left">
            <h1 className="text-[#FFD700] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Events & Competitions
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join our upcoming events and competitions to enhance your learning
              experience
            </p>
          </div>
        </div>
      </section>

      <EventsSection />
      <Footer />
    </div>
  );
};

export default Events;
