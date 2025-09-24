import { Button } from "../components/ui/Button";

const CTASection = () => {
  return (
    <section className="py-20 bg-orange-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="slide-in-left flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              JOIN THE COMMUNITY COURSE AND{" "}
              <span className="text-orange-800">UPGRADE YOUR SKILL</span>
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="slide-in-right flex-shrink-0">
            <div className="w-64 h-40 relative">
              {/* Simple illustration using CSS */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                {/* Character */}
                <div className="w-16 h-16 bg-white rounded-full mb-2 relative">
                  <div className="absolute inset-2 bg-blue-500 rounded-full"></div>
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-400 rounded-full"></div>
                </div>
                {/* Body */}
                <div className="w-12 h-16 bg-blue-600 mx-auto rounded-t-lg"></div>
                {/* Books */}
                <div className="absolute -bottom-2 -right-8 w-20 h-4 bg-yellow-400 rounded"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-4 bg-orange-400 rounded"></div>
                <div className="absolute -bottom-10 -right-4 w-12 h-4 bg-orange-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
