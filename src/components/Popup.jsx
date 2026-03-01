import { Dialog, DialogContent } from "../components/ui/Dialogs";
import { Button } from "../components/ui/Button";
import { X } from "lucide-react";
import React from "react";

export default function WelcomePopup({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-md sm:max-w-lg p-0 bg-black border-2 border-[#C6930A] shadow-2xl rounded-xl overflow-hidden [&>button[data-state]]:hidden">
        {/* Close button - Top Right */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full p-1.5 bg-[#C6930A]/20 hover:bg-[#C6930A]/30 text-white transition-all duration-300 hover:scale-110"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="flex flex-col p-6 sm:p-8">
          {/* Logo */}
          <div className="mb-6 sm:mb-8  flex justify-center">
            <img
              src="/logopng.png"
              alt="LegalO Logo"
              className="w-40 h-16 sm:w-48 sm:h-20 object-contain bg-white"
            />
          </div>

          {/* Content Text */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C6930A] mb-4 leading-tight">
              LegalO Exam Rescheduled!
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
              Now on 14th March 2026 - More time to prepare, more power to you
            </p>
          </div>

          {/* Registration Button - Bottom Right */}
          <div className="flex justify-end">
            <Button
              onClick={() => {
                window.open(
                  "https://app.legalolympiad.com",
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
