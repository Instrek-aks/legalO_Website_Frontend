import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";

const HeroCarousel = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  const heroContent = {
    image: {
      mobile: "/1080px x 1920px.webp",
      tablet: "/1024px × 768px.webp",
      desktop: "/1920px x 1080px.webp",
    },
  };

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getAspectRatio = () => {
    // Increased the width-to-height ratio to decrease the overall height of the section.
    // This will effectively crop out the bottom black space when combined with backgroundSize: "cover".
    if (screenSize === "mobile") return 1080 / 1700;
    if (screenSize === "tablet") return 1024 / 750;
    return 1920 / 850;
  };

  const getButtonPosition = () => {
    // You can independently adjust the button position for mobile and tablet here
    if (screenSize === "mobile") {
      return { top: "72%", left: "50%" }; 
    }
    if (screenSize === "tablet") {
      return { top: "75%", left: "50%" };
    }
    // Desktop position (do not change this if it's already perfect)
    return { top: "85%", left: "92%" };
  };

  return (
    <div 
      className="relative w-full overflow-hidden flex items-center bg-black bg-no-repeat"
      style={{
        aspectRatio: getAspectRatio(),
        backgroundImage: `url("${
          heroContent.image[screenSize] || heroContent.image.desktop
        }")`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      {/* Absolute positioning container for the button */}
      <div 
        className="absolute z-10 flex flex-row gap-3 sm:gap-4"
        style={{
          ...getButtonPosition(),
          transform: "translate(-50%, -50%)"
        }}
      >
        <Button
          className="bg-white hover:bg-gray-100 text-black text-sm sm:text-base md:text-lg w-36 sm:w-auto px-6 sm:px-8 py-2 sm:py-3 shadow-lg font-bold"
          onClick={() =>
            window.open(
              "http://app.legalolympiad.com/exam/registration",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          Register Now
        </Button>
      </div>
    </div>
  );
};

export default HeroCarousel;
