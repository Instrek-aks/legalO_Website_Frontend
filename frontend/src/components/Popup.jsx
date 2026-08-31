import { Dialog, DialogContent, DialogTitle } from "../components/ui/Dialogs";
import { Button } from "../components/ui/Button";
import { X } from "lucide-react";
import React from "react";

export default function WelcomePopup({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent aria-describedby={undefined} className="w-[85vw] sm:w-[70vw] max-w-xs md:max-w-sm p-0 bg-black border-2 border-[#C6930A] shadow-2xl rounded-xl overflow-hidden [&>button[data-state]]:hidden">
        <DialogTitle className="sr-only">Legal Olympiad Welcome</DialogTitle>
        {/* Close button - Top Right */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex items-center justify-center rounded-full p-1.5 bg-[#C6930A]/20 hover:bg-[#C6930A]/30 text-white transition-all duration-300 hover:scale-110"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="flex flex-col p-4 md:p-6 pb-6 md:pb-8">
          {/* Logo */}
          <div className="mb-2 md:mb-4 flex justify-center">
            <img
              src="/l.webp"
              alt="LegalO Logo"
              className="w-24 h-10 md:w-32 md:h-12 object-contain"
            />
          </div>

          {/* Content Text */}
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-bold text-[#C6930A] mb-1 leading-tight">
              Legal Olympiad 2.o
            </h2>
            <p className="text-base md:text-lg font-bold text-white mb-1">
              18th Oct 2026
            </p>
            <p className="text-xs md:text-sm text-white uppercase tracking-wider font-semibold">
              ONLINE THIS TIME
            </p>
          </div>

          {/* Registration Button - Centered */}
          <div className="flex justify-center mt-0">
            <Button
              onClick={() => {
                window.open(
                  "https://app.legalolympiad.com/exam/registration",
                  "_blank",
                  "noopener,noreferrer"
                );
                onClose();
              }}
              className="bg-[#C6930A] hover:bg-[#C6930A]/90 text-white font-semibold px-4 md:px-6 py-2 text-xs md:text-sm rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Register Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
