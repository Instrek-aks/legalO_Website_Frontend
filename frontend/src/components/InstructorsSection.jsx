const instructors = [
  {
    id: 1,
    name: "Vineet Sharma",
    role: "Founder",
    image: "/Vineet.webp",
    roleColor: "text-[#C6930A]",
    description: "Leading the vision and strategic direction of Legal Olympiad",
    linkedin: "https://www.linkedin.com/in/vineet82/?originalSubdomain=in",
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
    name: "Praveen Sharma",
    role: "Co-Founder",
    image: "/praveen.JPG",
    roleColor: "text-[#C6930A]",
    description:
      "Providing seasoned expertise in business strategy and decision-making",
    linkedin:
      "https://www.linkedin.com/in/praveen-sharma-640086209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },

  // {
  //   id: 4,
  //   name: "Adnan Abbasi",
  //   role: "AI Advisor",
  //   image: "/Adnan.png",
  //   roleColor: "text-[#C6930A]",
  //   description: "Delivering strategic AI guidance and transformative insights",
  //   linkedin:
  //     "https://www.linkedin.com/in/adnan-abbasi-bb659a116?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  // },

  {
    id: 4,
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
    role: "Student Mentor",
    image: "/vikasN.jpg",
    roleColor: "text-[#C6930A]",
    description:
      "Leveraging extensive judicial experience and profound legal acumen",
    linkedin:
      "https://www.linkedin.com/in/vikas-gogne-42918527?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 2,
    name: "Satyam Chaturvedi",
    role: "Student Mentor",
    image: "/satyamN.jpg",
    roleColor: "text-[#C6930A]",
    description:
      "Offering judicial expertise coupled with actionable legal insights",
    linkedin:
      "https://www.linkedin.com/in/satyam-chaturvedi-18845171?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 3,
    name: "Aprajita Budhwar",
    role: "Student Mentor",
    image: "/Aprajita.jpg",
    roleColor: "text-[#C6930A]",
    description:
      "Delivering judicial knowledge paired with implementable legal guidance",
    linkedin:
      "https://www.linkedin.com/in/aprajita-budhwar-122b87162/?originalSubdomain=in",
  },
  {
    id: 4,
    name: "Nitish Dham",
    role: "Mentor",
    image: "/Nitish.jpeg",
    roleColor: "text-[#C6930A]",
    description: "Delhi Cantonment Board Panel Advocate with hands-on courtroom expertise.",
    linkedin: "https://www.linkedin.com/in/nitish-dham-12b12a14b/",
  },
  {
    id: 5,
    name: "Sumit Misra",
    role: "Mentor",
    image: "/sumit.jpeg",
    roleColor: "text-[#C6930A]",
    description:
      "Experienced advocate combining complex litigation expertise with a strong pro bono ethos.",
    linkedin: "https://www.linkedin.com/in/sumitmisra92/",
  },
  {
    id: 6,
    name: "Yugasha Gargey",
    role: "Mentor",
    image: "/yug.jpeg",
    roleColor: "text-[#C6930A]",
    description:
      "Assistant Professor and research scholar committed to impactful legal education and justice.",
    linkedin:
      "https://www.linkedin.com/in/yugasha-gargey-7a6773384/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 7,
    name: "Vimmy Miglani",
    role: "Mentor",
    image: "/vimmy.png",
    roleColor: "text-[#C6930A]",
    description:
      "Academic expert blending core legal disciplines with doctoral research on cryptocurrency laws.",
    linkedin: "https://www.linkedin.com/in/vimmy-miglani-683295238/",
  },
  {
    id: 8,
    name: "Dr. Priyanka Chaudhary",
    role: "Mentor",
    image: "/priyanka.jpeg",
    roleColor: "text-[#C6930A]",
    description:
      "Academic mentor specializing in law teaching and scholarly research.",
    linkedin:
      "https://www.linkedin.com/in/priyanka-chaudhary-15b376338/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 9,
    name: "Dr. Ajmer Singh",
    role: "Mentor",
    image: "/ajmer.jpg",
    roleColor: "text-[#C6930A]",
    description: "Academic mentor dedicated to excellence in legal education",
    linkedin:
      "https://www.linkedin.com/in/ajmer-singh-a74103214/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 10,
    name: "Naginder Benipal",
    role: "Mentor",
    image: "/Naginder.JPG",
    roleColor: "text-[#C6930A]",
    description:
      "Senior Panel Counsel with 16+ years’ experience in constitutional and public law practice.",
    linkedin: "https://www.linkedin.com/company/naginder-benipal/",
  },
  {
    id: 11,
    name: "Ankit Siwach",
    role: "Mentor",
    image: "/Ankit.jpeg",
    roleColor: "text-[#C6930A]",
    description:
      "Delivering strategic legal counsel shaped by government litigation experience.",
    linkedin: "https://www.linkedin.com/in/ankit-siwach-a9b874179/",
  },
  {
    id: 12,
    name: "Shashwat Saxena",
    role: "Mentor",
    image: "/saxsena.jpeg",
    roleColor: "text-[#C6930A]",
    description:
      "District and Sessions Court practitioner shaping the next generation of legal professionals.",
    linkedin: "https://www.linkedin.com/in/shashwat-saxena-92832054/",
  },
  {
    id: 13,
    name: "Naomi Chandra",
    role: "Mentor",
    image: "/naomi.jpeg",
    roleColor: "text-[#C6930A]",
    description: "Senior litigator and former Amicus Curiae mentoring aspiring lawyers",
    linkedin: "https://www.linkedin.com/in/naomi-chandra-93b1983/",
  },
  {
    id: 14,
    name: "Tarun Agarwal",
    role: "Mentor",
    image: "/tarun.png",
    roleColor: "text-[#C6930A]",
    description:
      "Founder & Managing Partner, TBA Legal, with expertise rooted in top-tier law firms.",
    linkedin: "https://www.linkedin.com/in/tarun-agarwal-tbalegal9/",
  },
  {
    id: 15,
    name: "Shreyansh Rathi",
    role: "Mentor",
    image: "/shreyansh_new.jpg",
    roleColor: "text-[#C6930A]",
    description: "Supreme Court & Delhi High Court Advocate handling complex litigation.",
    linkedin: "https://www.linkedin.com/in/shreyansh-rathi-912358140/",
  },
  {
    id: 16,
    name: "Purva Kohli",
    role: "Mentor",
    image: "/purva_new.jpg",
    roleColor: "text-[#C6930A]",
    description: "Litigation & Dispute Resolution Lawyer; trained Mediator based in Delhi.",
    linkedin: "https://www.linkedin.com/in/purva-kohli-2451b7117/",
  },
  {
    id: 17,
    name: "Anika Bajpai",
    role: "Mentor",
    image: "/anika.jpg",
    roleColor: "text-[#C6930A]",
    description: "Senior Associate & Advocate with strong litigation and corporate advisory experience.",
    linkedin: "https://www.linkedin.com/in/anika-bajpai-424b1030/",
  },
  {
    id: 18,
    name: "Rohit Chaturvedi",
    role: "Mentor",
    image: "/rohit.jpg",
    roleColor: "text-[#C6930A]",
    description: "Attorney at Parin Law Office with strong litigation experience and client‑focused legal practice.",
    linkedin: "https://www.linkedin.com/in/rohit-chaturvedi-a026b239/",
  },
  {
    id: 19,
    name: "Apurva Sanjeti",
    role: "Mentor",
    image: "/apurva.jpg",
    roleColor: "text-[#C6930A]",
    description: "Legal & Contracting Professional specializing in legal operations and AI-enabled solutions.",
    linkedin: "https://www.linkedin.com/in/apurva-sanjeti-06737b39/",
  },
  {
    id: 20,
    name: "Palak Sharma",
    role: "Mentor",
    image: "/palak.jpg",
    roleColor: "text-[#C6930A]",
    description: "Associate Advocate handling litigation, arbitration, and dispute resolution.",
    linkedin: "https://www.linkedin.com/in/palaksharma30/",
  },
  {
    id: 21,
    name: "Deveshi Mishra",
    role: "Mentor",
    image: "/deveshi.png",
    roleColor: "text-[#C6930A]",
    description: "Delhi High Court Advocate handling diverse litigation matters.",
    linkedin: "https://www.linkedin.com/in/deveshi-mishra/",
  },
  {
    id: 22,
    name: "Manav Tanwani",
    role: "Mentor",
    image: "/manav.jpg",
    roleColor: "text-[#C6930A]",
    description: "Advocate & Legal Practitioner with litigation and advisory expertise.",
    linkedin: "https://www.linkedin.com/in/manav-tanwani-a80344109/",
  },
  {
    id: 23,
    name: "Ritu Raj Srivastava",
    role: "Mentor",
    image: "/ritu.jpg",
    roleColor: "text-[#C6930A]",
    description: "Principal Associate & Advocate at Karanjawala & Co., specializing in litigation and legal advisory.",
    linkedin: "https://www.linkedin.com/in/ritu-raj-7705a2a0/",
  },
  {
    id: 24,
    name: "Akash Raj",
    role: "Mentor",
    image: "/akash.jpg",
    roleColor: "text-[#C6930A]",
    description: "Advocate at Patna High Court with broad litigation experience.",
    linkedin: "https://www.linkedin.com/in/akash-raj-bb0114131/",
  },
];

// Reusable component for team member cards
const TeamMemberCard = ({ member, index }) => (
  <div
    key={member.id}
    className="group relative h-full mx-4 sm:mx-0"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-[#C6930A] h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-72 sm:h-64 md:h-73 lg:h-72 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-700"
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


    </div>
  </div>
);

const InstructorsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:pt-10 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        {/* Leadership Team Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-black mb-6 text-center">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-black mb-6 text-center">
              Our <span className="text-[#C6930A]">Student Mentors</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed text-center">
              Experienced lawyers and young professionals who guide and support
              participants throughout their legal journey, providing
              peer-to-peer mentorship and practical insights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
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
