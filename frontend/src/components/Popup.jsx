import { Dialog, DialogContent } from "../components/ui/Dialogs";
import { Button } from "../components/ui/Button";
import { X } from "lucide-react";
import React from "react";

export default function WelcomePopup({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[85vw] max-w-sm p-0 bg-black border-2 border-[#C6930A] shadow-2xl rounded-xl overflow-hidden [&>button[data-state]]:hidden">
        {/* Close button - Top Right */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full p-1.5 bg-[#C6930A]/20 hover:bg-[#C6930A]/30 text-white transition-all duration-300 hover:scale-110"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="flex flex-col p-4 sm:p-6">
          {/* Logo */}
          <div className="mb-4 sm:mb-6 flex justify-center">
            <img
              src="/l.png"
              alt="LegalO Logo"
              className="w-32 h-12 sm:w-40 sm:h-16 object-contain"
            />
          </div>

          {/* Content Text */}
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#C6930A] mb-1 leading-tight">
              Legal Olympiad 2.o
            </h2>
            <p className="text-lg sm:text-xl font-bold text-white mb-1">
              18th Oct 2026
            </p>
            <p className="text-base sm:text-lg text-white uppercase tracking-wider font-semibold">
              ONLINE THIS TIME
            </p>
          </div>

          {/* Registration Button - Centered */}
          <div className="flex justify-center mt-2">
            <Button
              onClick={() => {
                window.open(
                  "https://app.legalolympiad.com/exam/registration",
                  "_blank",
                  "noopener,noreferrer"
                );
                onClose();
              }}
              className="bg-[#C6930A] hover:bg-[#C6930A]/90 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Register Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
