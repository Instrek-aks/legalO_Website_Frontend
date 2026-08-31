import { LogoSection } from "./LogoSection";

const engagementLogos = [
  { name: "", image: "/img1.webp", scale: "scale-110" },
  { name: "", image: "/img2.webp" },
  { name: "", image: "/img3.webp" },
  { name: "", image: "/img4.webp" },
  { name: "", image: "/img6.webp" },
  { name: "", image: "/img7.webp" },
  { name: "", image: "/img8.webp", scale: "scale-125" },
  { name: "", image: "/img9.webp", scale: "scale-150" },
];

export const LogoCarousel = () => {
  return (
    <div
      className="bg-black flex flex-col justify-center py-20 px-2"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto w-full space-y-24">
        <LogoSection
          title="ACADEMIC"
          subtitle="COLLABORATIONS"
          sectionTitle="Associated with leading law schools and institutions across India"
          logos={engagementLogos}
          direction="left"
        />
      </div>
    </div>
  );
};
