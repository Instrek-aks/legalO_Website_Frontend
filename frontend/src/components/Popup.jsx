import { Dialog, DialogContent } from "../components/ui/Dialogs";
import { Button } from "../components/ui/Button";

import React from "react";

export default function WelcomePopup({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-xs sm:max-w-md p-0 bg-gray-100 border-0 shadow-xl rounded-xl">
        {/* Content */}
        <div className="flex flex-col items-center text-center p-4 sm:p-8">
          {/* Logo */}
          <div className="mb-4 sm:mb-6">
            <img
              src="/logopng.png"
              alt="Legal Olympiad"
              className="w-25 h-12 sm:w-25 sm:h-12"
            />
          </div>

          {/* Illustration */}
          <div className="mb-4 sm:mb-6">
            <img
              src="/welcome.jpg"
              alt="Courthouse illustration"
              className="w-36 h-28 sm:w-48 sm:h-36 object-contain"
            />
          </div>

          {/* Welcome text */}
          <h2 className="text-lg sm:text-xl font-semibold text-accent mb-6 sm:mb-8">
            Registration for Legal Olympiad will begin shortly.
          </h2>

          {/* Close button */}
          <Button
            onClick={onClose}
            variant="outline"
            className="bg-[#C6930A] px-6 sm:px-8 py-2 text-sm sm:text-base"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
