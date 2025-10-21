import { UserPlus } from "lucide-react";

const FloatingRegisterButton = () => {
  // Button shows on all pages - always floating

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a
        href="https://App.legalolympiad.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-20 h-20 bg-[#C6930A] hover:bg-[#B8820A] text-white rounded-full shadow-2xl hover:shadow-3xl border-2 border-[#C6930A] text-center font-semibold text-sm"
        title="Register Now"
        style={{ backgroundColor: "#C6930A" }}
      >
        <span className="text-center leading-tight">Register Now</span>
      </a>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Register Now
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
      </div>
    </div>
  );
};

export default FloatingRegisterButton;
