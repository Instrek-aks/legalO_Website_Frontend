const instructors = [
  {
    id: 1,
    name: "Vineet Sharma",
    role: "Founder",
    image: "/Vineet.webp",
    roleColor: "text-[#C6930A]",
    description: "Leading the vision and strategic direction of Legal Olympiad",
    linkedin:
      "https://in.linkedin.com/in/vinksharma?original_referer=https%3A%2F%2Fwww.bing.com%2F",
  },
  {
    id: 2,
    name: "Sanjana Wadhwa",
    role: "Co-Founder",
    image: "/sanjanO.webp",
    roleColor: "text-[#C6930A]",
    description: "Driving innovation in legal education and mentorship",
    linkedin:
      "https://in.linkedin.com/in/sanjanawadhwa94?original_referer=https%3A%2F%2Fwww.bing.com%2F",
  },

  {
    id: 3,
    name: "Adnan Abbasi",
    role: "AI Advisor",
    image: "/Adnan.png",
    roleColor: "text-[#C6930A]",
    description: "Specializing in legal technology and digital transformation",
    linkedin:
      "https://www.linkedin.com/in/adnan-abbasi-bb659a116?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 4,
    name: "Praveen Sharma",
    role: "Business Advisor",
    image: "/praveen.JPG",
    roleColor: "text-[#C6930A]",
    description: "Bringing judicial expertise and legal insights",
    linkedin:
      "https://www.linkedin.com/in/praveen-sharma-640086209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 5,
    name: "Tithika Mittal",
    role: "Technology Ecosystem Coordinator",
    image: "/tithika.webp",
    roleColor: "text-[#C6930A]",
    description: "Orchestrating technology integration and digital platforms",
    linkedin:
      "https://in.linkedin.com/in/tithika-mittal-504775321?original_referer=https%3A%2F%2Fwww.bing.com%2F",
  },
];

const studentMentors = [
  {
    id: 1,
    name: "Vikas Gogne",
    role: "Co-Founder",
    image: "/lawyer_photo.jpg",
    roleColor: "text-[#C6930A]",
    description: "",
    linkedin:
      "https://www.linkedin.com/in/vikas-gogne-42918527?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 2,
    name: "Satyam Chaturvedi",
    role: "Co-Founder",
    image: "/lawyer_photo.jpg",
    roleColor: "text-[#C6930A]",
    description: "",
    linkedin:
      "https://www.linkedin.com/in/satyam-chaturvedi-18845171?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

// Reusable component for team member cards
const TeamMemberCard = ({ member, index }) => (
  <div
    key={member.id}
    className="group relative h-full mx-4 sm:mx-0"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden border border-gray-100 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 sm:h-44 md:h-52 lg:h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Role Badge */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
          <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">
            {member.role}
          </span>
        </div>

        {/* Hover Info - Hidden on mobile, shown on hover for desktop */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 hidden sm:block">
          <p className="text-white text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            {member.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-4 lg:p-6 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3 gap-2">
            <h3 className="text-lg sm:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-[#C6930A] transition-colors duration-300 flex-1 min-w-0">
              {member.name}
            </h3>
            {/* LinkedIn Icon - Shown only if LinkedIn URL exists */}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-7 sm:h-7 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0"
                aria-label={`Open ${member.name}'s LinkedIn profile`}
                title={`Open ${member.name}'s LinkedIn profile`}
              >
                <svg
                  className="w-4 h-4 sm:w-4 sm:h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
          </div>
          <p
            className={`${member.roleColor} font-semibold text-sm sm:text-sm mb-3 sm:mb-3`}
          >
            {member.description}
          </p>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C6930A] to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  </div>
);

const InstructorsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        {/* Leadership Team Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 text-center">
            Meet Our <span className="text-[#C6930A]">Leadership Team</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed text-center">
            The Legal Olympiad is led by a dedicated team of legal
            professionals, educators, and innovators committed to transforming
            legal education. Together, we bring diverse expertise to create
            India's premier legal career development platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {instructors.map((instructor, index) => (
            <TeamMemberCard
              key={instructor.id}
              member={instructor}
              index={index}
            />
          ))}
        </div>

        {/* Student Mentors Section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 text-center">
              Our <span className="text-[#C6930A]">Student Mentors</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed text-center">
              Experienced lawyers and young professionals who guide and support
              participants throughout their legal journey, providing
              peer-to-peer mentorship and practical insights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {studentMentors.map((mentor, index) => (
              <TeamMemberCard key={mentor.id} member={mentor} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
