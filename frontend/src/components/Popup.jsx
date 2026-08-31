import { Dialog, DialogContent } from "../components/ui/Dialogs";
import { Button } from "../components/ui/Button";
import { X } from "lucide-react";
import React from "react";

export default function WelcomePopup({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] sm:w-[85vw] md:w-[75vw] lg:w-[60vw] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-0 bg-black border-2 border-[#C6930A] shadow-2xl rounded-xl overflow-hidden [&>button[data-state]]:hidden">
        {/* Close button - Top Right */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex items-center justify-center rounded-full p-1.5 bg-[#C6930A]/20 hover:bg-[#C6930A]/30 text-white transition-all duration-300 hover:scale-110"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="flex flex-col p-5 sm:p-6 md:p-8 lg:p-10">
          {/* Logo */}
          <div className="mb-4 sm:mb-6 md:mb-8 flex justify-center">
            <img
              src="/l.png"
              alt="LegalO Logo"
              className="w-32 h-12 sm:w-40 sm:h-16 md:w-48 md:h-20 lg:w-56 lg:h-24 object-contain"
            />
          </div>

          {/* Content Text */}
          <div className="text-center mb-5 sm:mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#C6930A] mb-2 leading-tight">
              Legal Olympiad 2.o
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
              18th Oct 2026
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white uppercase tracking-wider font-semibold">
              ONLINE THIS TIME
            </p>
          </div>

          {/* Registration Button - Centered */}
          <div className="flex justify-center mt-2 md:mt-4">
            <Button
              onClick={() => {
                window.open(
                  "https://app.legalolympiad.com/exam/registration",
                  "_blank",
                  "noopener,noreferrer"
                );
                onClose();
              }}
              className="bg-[#C6930A] hover:bg-[#C6930A]/90 text-white font-semibold px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Register Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
