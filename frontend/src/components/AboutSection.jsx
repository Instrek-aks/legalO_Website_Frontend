import { Button } from "../components/ui/Button";

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content: Text */}
          <div className="slide-in-left order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight">
              About the Legal Olympiad
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-[#C6930A] mb-6 sm:mb-8"></div>
            <p className="text-sm sm:text-base text-black mb-4 sm:mb-6 text-left leading-relaxed">
              Legal Olympiad is a pioneering initiative designed to inspire and
              engage students in the field of law. This unique competition aims
              to cultivate legal awareness, analytical reasoning, and
              problem-solving skills among aspiring law students. By presenting
              real-world scenarios, case studies, and thought-provoking
              questions, the Olympiad encourages participants to go beyond
              textbooks and develop a deeper understanding of justice, rights,
              and responsibilities.
            </p>
            <p className="text-sm sm:text-base text-black mb-4 sm:mb-6 text-left leading-relaxed">
              The Legal Olympiad is more than an exam it is a platform for
              mentorship, learning, and excellence. It empowers students to
              sharpen their logical reasoning, enhance their command over legal
              principles, and prepare for the challenges of tomorrow's legal
              profession.
            </p>
            <p className="text-sm sm:text-base text-black text-left leading-relaxed">
              Much like the Maths or Science Olympiads that identify prodigies
              in their fields, the Legal Olympiad identifies and nurtures the
              next generation of advocates, judges, and policy leaders those who
              will uphold the rule of law and champion justice.
            </p>
            {/* <div className="bg-orange-800 text-white p-8 rounded-lg text-center flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2">Join the Movement</h3>
              <p className="mb-2">
                The Legal Olympiad isn't just a competition. It's your legal
                compass. Registrations Opening Soon – Stay Tuned!
              </p>
            </div> */}
          </div>
          {/* Right Content: Image */}
          <div className="slide-in-right order-1 lg:order-2 flex justify-center">
            <img
              src="/hero2.jpg"
              alt="Legal Olympiad"
              className="w-full max-w-sm sm:max-w-md h-64 sm:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
