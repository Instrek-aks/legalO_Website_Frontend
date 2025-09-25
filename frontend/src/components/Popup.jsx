import { X } from "lucide-react";
import { Dialog, DialogContent } from "../components/ui/Dialogs";
import { Button } from "../components/ui/Button";

import React from "react";

export default function WelcomePopup({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 bg-gray-100 border-0 shadow-xl rounded-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-1 rounded-full hover:bg-gray-200 transition-colors"
        >
          <X className="h-5 w-5 text-gray-700" />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center p-8">
          {/* Logo */}
          <div className="mb-6">
            <img src="/logoN" alt="Legal Olympiad" className="w-12 h-12" />
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
            Welcome to Legal Olympiad
          </h2>

          {/* Close button */}
          <Button onClick={onClose} variant="outline" className="px-8">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
