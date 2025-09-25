import Header from "../components/Header";
import Footer from "../components/Footer";

const Podcasts = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-[#C6930A] to-[#C6930A] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-black font-bold mb-6">
              Podcasts
            </h1>
            <p className="text-xl text-grey-500 opacity-90 max-w-3xl mx-auto">
              Listen to expert insights and discussions on legal education and
              career development
            </p>
          </div>
        </div>
      </section>

      {/* Podcasts Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="slide-in-left">
              <h2 className="text-3xl font-bold text-brand-navy mb-8">
                Coming Soon
              </h2>
              <p className="text-gray-600 text-lg">
                Our podcasts are currently under development. Check back soon
                for engaging legal discussions and expert interviews!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Podcasts;
