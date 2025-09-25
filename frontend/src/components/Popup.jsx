import { X } from "lucide-react";
import { Dialog, DialogContent } from "../components/ui/Dialogs";
import { Button } from "../components/ui/Button";

import React from "react";

export default function WelcomePopup({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 bg-gray-100 border-0 shadow-xl rounded-xl">
        {/* Content */}
        <div className="flex flex-col items-center text-center p-8">
          {/* Logo */}
          <div className="mb-6">
            <img src="/logoN.jpg" alt="Legal Olympiad" className="w-25 h-12" />
          </div>

          {/* Illustration */}
          <div className="mb-6">
            <img
              src="/welcome.jpg"
              alt="Courthouse illustration"
              className="w-48 h-36 object-contain"
            />
          </div>

          {/* Welcome text */}
          <h2 className="text-xl font-semibold text-accent mb-8">
            Registration will begin shortly.
          </h2>

          {/* Close button */}
          <Button
            onClick={onClose}
            variant="outline"
            className="bg-[#C6930A] px-8"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
