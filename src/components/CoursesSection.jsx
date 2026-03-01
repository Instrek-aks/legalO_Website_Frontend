import { Button } from "../components/ui/Button";
import {
  Star,
  Users,
  Clock,
  Heart,
  Brain,
  Headphones,
  UserCheck,
  BookOpen,
  Network,
  Gavel,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "AI-powered Legal Career Guidance",
    description:
      "Get personalized career guidance using advanced AI technology to map your legal journey.",
    image: "/AIpowered.jpg",
    icon: Brain,
    features: ["AI Analysis", "Career Mapping", "Skill Assessment"],
    duration: "Ongoing Support",
  },
  {
    id: 2,
    title: "Legal Podcasts With Experts",
    description:
      "Access exclusive legal podcasts featuring industry experts and thought leaders.",
    image: "/podcasts.jpg",
    icon: Headphones,
    features: ["Expert Insights", "Latest Updates", "Case Studies"],
    duration: "Weekly Episodes",
  },
  {
    id: 3,
    title: "One-on-One Mentoring",
    description:
      "Direct mentorship from serving and retired judges, senior advocates, and professors.",
    image: "/mentoring.jpg",
    icon: UserCheck,
    features: ["Personal Guidance", "Expert Mentors", "Career Planning"],
    duration: "Flexible Sessions",
  },
  {
    id: 4,
    title: "Subjects for Tomorrow",
    description:
      "Future-ready legal domains including cyber law, AI law, and emerging legal fields.",
    image: "/subjects.jpg",
    icon: BookOpen,
    features: ["Future Technology", "Emerging Laws", "Innovation"],
    duration: "Regular Update",
  },
  {
    id: 5,
    title: "Career Counselling & Networking",
    description:
      "Connect with legal professionals and get career guidance through exclusive networking events.",
    image: "/career.jpg",
    icon: Network,
    features: ["Networking", "Career Advice", "Industry Connect"],
    duration: "Monthly Events",
  },
  {
    id: 6,
    title: "Court Craft & Judgement Appreciation",
    description:
      "Master courtroom skills and analyze landmark judgments for practical legal understanding.",
    image: "/court.jpg",
    icon: Gavel,
    features: ["Court Skills", "Case Analysis", "Practical Training"],
    duration: "Workshop",
  },
];

const ServicesSection = () => {
  const [likedServices, setLikedServices] = useState(new Set());

  const toggleLike = (serviceId) => {
    setLikedServices((prev) => {
      const newLiked = new Set(prev);
      if (newLiked.has(serviceId)) {
        newLiked.delete(serviceId);
      } else {
        newLiked.add(serviceId);
      }
      return newLiked;
    });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 sm:mb-16">
          <div className="slide-in-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              SERVICES WE OFFER
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#C6930A] sm:text-[#C6930A]">
              Comprehensive legal services designed to empower your legal career
              journey.
            </p>
          </div>
          {/* <div className="slide-in-right mt-4 sm:mt-6 md:mt-0">
            <Button className="bg-[#ea4820] hover:bg-[#ea4820] text-white text-xs sm:text-sm">
              Explore All Services
            </Button>
          </div> */}
        </div>

        <div className="w-16 sm:w-24 h-1 bg-[#C6930A] mb-8 sm:mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isLiked = likedServices.has(service.id);
            return (
              <div
                key={service.id}
                className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group fade-in-up stagger-${
                  (index % 3) + 1
                } hover:scale-105 flex flex-col h-full`}
              >
                <div className="relative overflow-hidden">
                  <div className="p-2 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg m-2">
                    <div className="relative overflow-hidden rounded-lg border-2 border-orange-300 shadow-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#C6930A] p-2 rounded-lg shadow-md">
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <button
                        onClick={() => toggleLike(service.id)}
                        className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 hover:bg-white 
  p-1.5 sm:p-2 rounded-full transition-colors duration-300 shadow-md 
  flex items-center justify-center"
                      >
                        <Heart
                          size={14}
                          className={`sm:w-4 sm:h-4 transition-colors duration-300 ${
                            isLiked
                              ? "text-red-500 fill-red-500"
                              : "text-gray-600 hover:text-red-500"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex flex-col ">
                  {/* Title Section */}
                  <div className="mb-3 min-h-[3rem] flex items-start">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-black leading-tight group-hover:text-[#C6930A] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description Section */}
                  <div className="mb-4 min-h-[4rem] flex items-start">
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features Section */}
                  <div className="mb-4 min-h-[2.5rem] flex items-start">
                    <div className="flex flex-wrap gap-1">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-orange-100 text-[#C6930A] px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Info Section */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between text-xs sm:text-sm text-[#C6930A] font-medium">
                      <div className="flex items-center gap-1">
                        <Clock size={12} className="sm:w-4 sm:h-4" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={12} className="sm:w-4 sm:h-4" />
                        <span>Premium Service</span>
                      </div>
                    </div>
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

export default ServicesSection;
