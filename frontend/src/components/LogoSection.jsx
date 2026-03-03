import React from "react";

export const LogoSection = ({
  title,
  subtitle,
  sectionTitle,
  logos,
  direction = "left",
}) => {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Section Title */}
      <div className="text-center px-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#C6930A]">
          {title} <span className="text-white">{subtitle}</span>
        </h2>
        {sectionTitle && (
          <p className="text-gray-400 mt-2 text-base md:text-xl">
            {sectionTitle}
          </p>
        )}
      </div>

      {/* Logo Scroll Container */}
      <div className="relative overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Logos */}
        <div className="flex">
          <div
            className={`flex gap-6 sm:gap-8 md:gap-12 py-2 sm:py-4 animate-scroll hover:[animation-play-state:paused]`}
            style={{
              animationDirection: direction === "left" ? "normal" : "reverse",
            }}
          >
            {/* Duplicate loop for seamless animation */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 
                           bg-[var(--color-gray-600)] rounded-lg border border-white/20 
                           hover:bg-[var(--color-gray-700)] hover:border-white/40 transition-all duration-300 
                           hover:scale-105 hover:shadow-xl hover:shadow-black/10
                           group"
              >
                <div className="w-full h-full flex justify-center items-center p-0">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className={`w-full h-full object-contain filter brightness-[1.4] contrast-[1.2] 
                             ${logo.scale || ""}
                             group-hover:brightness-[1.6] group-hover:contrast-[1.3] 
                             transition-all duration-300`}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
