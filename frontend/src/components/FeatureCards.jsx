import { Award, Users, Gavel, FileText, Settings } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Introduction to the legal field",
    description:
      "Top ten students in the Olympiad will be given assistance in gaining internships at top tier law firms and offices of Senior Advocates across the country.",
    bgColor: "bg-gradient-to-br from-white to-gray-100",
    textColor: "text-black",
  },
  {
    icon: Users,
    title: "Consulting\nForum ",
    description:
      "Get mentorship from experienced judges, senior advocates, lawyers, and professors to guide your legal journey and career growth.",
    bgColor: "bg-gradient-to-br from-black to-gray-800",
    textColor: "text-white",
  },
  {
    icon: Gavel,
    title: "Court\nCraft",
    description:
      "Train in courtroom skills, advocacy techniques, and legal processes with immersive workshops and practice sessions.",
    bgColor: "bg-gradient-to-br from-white to-gray-100",
    textColor: "text-black",
  },
  {
    icon: FileText,
    title: "Judgement\nAppreciation",
    description:
      "Strengthen your legal reasoning by analyzing landmark judgments and their impact on law and society.",
    bgColor: "bg-gradient-to-br from-black to-gray-800",
    textColor: "text-white",
  },
  {
    icon: Settings,
    title: "Policy\nMaking",
    description:
      "Legal Olympiad helps shift the view of law from rigid rules to a policy-making framework, building skills to design laws that achieve real social outcomes.",
    bgColor: "bg-gradient-to-br from-white to-gray-100",
    textColor: "text-black",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why LegalO
          </h2>
          <div className="w-16 h-1 bg-[#C6930A] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className={`${feature.bgColor} ${
                  feature.textColor
                } p-6 text-center hover:scale-105 transition-transform duration-300 fade-in-up stagger-${
                  index + 1
                } flex flex-col`}
              >
                <div className="mb-4 flex justify-center">
                  <IconComponent size={40} className={`${feature.textColor}`} />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-center min-h-[3.5rem] flex items-center justify-center whitespace-pre-line">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="flex-1 flex items-start">
                    <p
                      className={`text-sm sm:text-base opacity-90 leading-tight text-center ${feature.textColor}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
