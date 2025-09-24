import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";
import Footer from "../components/Footer";
import { Check, Users, User, Gift } from "lucide-react";

const Register = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const registrationOptions = [
    {
      id: "free",
      title: "Free Registration",
      icon: Gift,
      price: "₹0",
      description: "Basic access to Legal Olympiad resources and community",
      features: [
        "Access to basic study materials",
        "Community forum participation",
        "Newsletter subscription",
        "Basic practice tests",
        "Limited course previews",
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      id: "individual",
      title: "Individual Registration",
      icon: User,
      price: "₹2,999",
      description:
        "Complete access for individual students with premium features",
      features: [
        "All free features included",
        "Complete course library access",
        "Personal mentor assignment",
        "Unlimited practice tests",
        "Certificate of completion",
        "Priority support",
        "Mock competitions",
        "Study schedule planning",
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      popular: true,
    },
    {
      id: "group",
      title: "Group Registration",
      icon: Users,
      price: "₹4,999",
      description:
        "Team registration for 3-5 students with collaborative features",
      features: [
        "All individual features for each member",
        "Team collaboration tools",
        "Group study sessions",
        "Team competitions",
        "Shared progress tracking",
        "Group mentor sessions",
        "Team certificates",
        "Bulk discount pricing",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
  ];

  if (selectedOption) {
    return (
      <div className="min-h-screen">
        <Header />
        <RegistrationForm
          registrationType={selectedOption}
          onBack={() => setSelectedOption(null)}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Choose Your Registration Plan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect registration option that fits your learning
              goals and budget. Start your legal journey with Legal Olympiad
              today.
            </p>
          </div>

          {/* Registration Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {registrationOptions.map((option) => (
              <div
                key={option.id}
                className={`relative ${option.bgColor} rounded-2xl shadow-xl p-8 border-2 ${option.borderColor} hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 flex flex-col`}
                onClick={() => setSelectedOption(option.id)}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {option.price}
                  </div>
                  <p className="text-gray-600">{option.description}</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {option.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-black transition-all duration-300 ${option.color} hover:shadow-lg transform hover:scale-105`}
                >
                  Choose {option.title}
                </button>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Legal Olympiad?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Expert Mentorship
                </h3>
                <p className="text-gray-600">
                  Learn from experienced legal professionals and educators
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Comprehensive Curriculum
                </h3>
                <p className="text-gray-600">
                  Structured learning paths covering all aspects of legal
                  education
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Flexible Learning
                </h3>
                <p className="text-gray-600">
                  Study at your own pace with 24/7 access to resources
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
