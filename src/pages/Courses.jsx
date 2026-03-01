import Header from "../components/Header";
import Footer from "../components/Footer";
import CoursesSection from "../components/CoursesSection";
import CategoriesSection from "../components/CategoriesSection";

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-[#C6930A] to-[#C6930A] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
              Our Services
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Explore our comprehensive catalog of courses designed to advance
              your career
            </p>
          </div>
        </div>
      </section>

      {/* <CategoriesSection /> */}
      <CoursesSection />
      <Footer />
    </div>
  );
};

export default Courses;
