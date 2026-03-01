import {
  BookOpen,
  Search,
  BarChart3,
  GraduationCap,
  Trophy,
  Scale,
  Target,
  FileText,
  Users,
  Star,
} from "lucide-react";

const whyParticipate = [
  {
    title: "Bridge Knowledge",
    description:
      "Bridge your knowledge and passion by solving complex legal challenges with guidance from experienced professionals, ensuring both practical insight and theoretical depth.",
    icon: Scale,
    color: "text-[#C6930A]",
    bgGradient: "from-black to-gray-900",
    borderColor: "border-[#C6930A]",
    textColor: "text-white",
  },
  {
    title: "Discover Your Niche",
    description:
      "Explore diverse domains such as criminal, corporate, intellectual property, cyber, and environmental law to identify your area of true professional interest and future growth.",
    icon: Search,
    color: "text-[#C6930A]",
    bgGradient: "from-black to-gray-900",
    borderColor: "border-[#C6930A]",
    textColor: "text-white",
  },
  {
    title: "Performance Card",
    description:
      "Receive detailed personalized scorecards highlighting your core strengths, improvement areas, and overall performance metrics to track your legal learning journey.",
    icon: BarChart3,
    color: "text-[#C6930A]",
    bgGradient: "from-black to-gray-900",
    borderColor: "border-[#C6930A]",
    textColor: "text-white",
  },
  {
    title: "Mentor Clinics",
    description:
      "Gain access to exclusive mentor clinics with senior advocates, professors, and legal experts, enabling one-on-one guidance to refine both skills and career strategy.",
    icon: GraduationCap,
    color: "text-[#C6930A]",
    bgGradient: "from-black to-gray-900",
    borderColor: "border-[#C6930A]",
    textColor: "text-white",
  },
  {
    title: "Recognition Trophies",
    description:
      "Earn recognition through scholarships, internships, and publication opportunities that build your credibility, strengthen your profile, and enhance your career prospects.",
    icon: Trophy,
    color: "text-[#C6930A]",
    bgGradient: "from-black to-gray-900",
    borderColor: "border-[#C6930A]",
    textColor: "text-white",
  },
  {
    title: "Train for Tomorrow",
    description:
      "Go beyond the standard curriculum. A challenge and an opportunity to learn today what will serve you in the years ahead.",
    icon: Target,
    color: "text-[#C6930A]",
    bgGradient: "from-black to-gray-900",
    borderColor: "border-[#C6930A]",
    textColor: "text-white",
  },
];

const CategoriesSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .scroll-container {
            animation: scroll 40s linear infinite;
            width: fit-content;
          }
          
          .scroll-container:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-black to-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 text-center">
              Why Choose Us?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              Join the Legal Olympiad and unlock your potential in the legal
              world
            </p>
            <div className="w-16 sm:w-24 h-1 bg-[#C6930A] mx-auto mt-3 sm:mt-4"></div>
          </div>

          {/* Infinite scrolling container */}
          <div className="relative overflow-hidden">
            <div className="scroll-container flex">
              {/* First set of cards */}
              {whyParticipate.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={`first-${item.title}`}
                    className={`flex-shrink-0 w-72 sm:w-80 mx-3 sm:mx-4 bg-gradient-to-br ${item.bgGradient} border-2 ${item.borderColor} rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105 hover:border-[#C6930A] backdrop-blur-sm`}
                  >
                    <div className="mb-6 flex justify-center">
                      <div className="p-3 bg-[#C6930A]/10 rounded-full group-hover:bg-[#C6930A]/20 transition-colors duration-300">
                        <IconComponent
                          size={40}
                          className={`${item.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                      </div>
                    </div>
                    <h3
                      className={`text-lg sm:text-xl font-bold ${item.textColor} mb-4 text-center group-hover:text-[#C6930A] transition-colors duration-300`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base ${item.textColor} opacity-90 leading-relaxed group-hover:opacity-100 transition-all duration-300 text-center`}
                    >
                      {item.description}
                    </p>
                    <div className="mt-6 w-12 h-1 bg-gradient-to-r from-transparent via-[#C6930A] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                );
              })}

              {/* Duplicate set for seamless infinite scroll */}
              {whyParticipate.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={`second-${item.title}`}
                    className={`flex-shrink-0 w-72 sm:w-80 mx-3 sm:mx-4 bg-gradient-to-br ${item.bgGradient} border-2 ${item.borderColor} rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105 hover:border-[#C6930A] backdrop-blur-sm`}
                  >
                    <div className="mb-6 flex justify-center">
                      <div className="p-3 bg-[#C6930A]/10 rounded-full group-hover:bg-[#C6930A]/20 transition-colors duration-300">
                        <IconComponent
                          size={40}
                          className={`${item.color} group-hover:scale-110 transition-transform duration-300`}
                        />
                      </div>
                    </div>
                    <h3
                      className={`text-lg sm:text-xl font-bold ${item.textColor} mb-4 text-center group-hover:text-[#C6930A] transition-colors duration-300`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base ${item.textColor} opacity-90 leading-relaxed group-hover:opacity-100 transition-all duration-300 text-center`}
                    >
                      {item.description}
                    </p>
                    <div className="mt-6 w-12 h-1 bg-gradient-to-r from-transparent via-[#C6930A] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;
