import { Button } from "../components/ui/Button";
import { Check, Database, Settings, Rocket } from "lucide-react";

const plans = [
  {
    name: "RECOMMENDED",
    icon: Database,
    price: "5.99",
    period: "/Month",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium perspiciatis",
    features: [
      "Create and host custom content",
      "Create custom learning paths",
      "Custom Categories",
      "Native courses in English",
    ],
    buttonColor: "bg-orange-800 hover:bg-orange-800/90",
    textColor: "text-orange-800",
    popular: false,
  },
  {
    name: "STANDARD",
    icon: Settings,
    price: "25.99",
    period: "/Month",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium perspiciatis",
    features: [
      "Create and host custom content",
      "Create custom learning paths",
      "Custom Categories",
      "Native courses in all Languages",
      "24/7 customer support",
    ],
    buttonColor: "bg-orange-800 hover:bg-orange-800/90",
    textColor: "text-orange-800",
    popular: true,
  },
  {
    name: "PREMIUM",
    icon: Rocket,
    price: "25.99",
    period: "/Month",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium perspiciatis",
    features: [
      "Create and host custom content",
      "Create custom learning paths",
      "Custom Categories",
      "Native courses in all Languages",
      "24/7 customer support",
    ],
    buttonColor: "bg-orange-800 hover:bg-orange-800/90",
    textColor: "text-orange-800",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-base mb-4">Awesome Packages</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            SIMPLE ALL INCLUSIVE <span className="text-[#C6930A]">PRICING</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-[#C6930A] mx-auto mt-3 sm:mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.name}
                className={`bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                  plan.popular ? "scale-105 border-2 border-orange-800" : ""
                } fade-in-up stagger-${index + 1}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-800 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="mb-4 flex justify-center">
                    <div
                      className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                        plan.popular ? "bg-orange-800" : "bg-gray-100"
                      }`}
                    >
                      <IconComponent
                        size={32}
                        className={
                          plan.popular ? "text-white" : "text-gray-600"
                        }
                      />
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold ${plan.textColor} mb-4`}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {plan.description}
                  </p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-sm text-gray-500">$</span>
                    <span className={`text-4xl font-bold ${plan.textColor}`}>
                      {plan.price}
                    </span>
                    <span className="text-sm text-orange-800 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check
                        size={20}
                        className="text-green-500 flex-shrink-0"
                      />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className={`w-full ${plan.buttonColor} text-white`}>
                  Choose Plan
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
