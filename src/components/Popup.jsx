import { Dialog, DialogContent, DialogTitle } from "../components/ui/Dialogs";
import { X } from "lucide-react";
import React from "react";

export default function WelcomePopup({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        aria-describedby={undefined}
        className="!block !h-auto !min-h-fit !max-h-none w-[calc(100vw-32px)] sm:w-[410px] max-w-[420px] p-0 overflow-hidden [&>button:not(.custom-close)]:!hidden border-0"
        style={{
          background: "#104432",
          border: "1.5px solid #d4a017",
          boxShadow:
            "0 0 30px rgba(212, 160, 23, 0.25), 0 20px 50px rgba(0, 0, 0, 0.95)",
          borderRadius: "14px",
        }}
      >
        <DialogTitle className="sr-only">Legal Olympiad 2.0</DialogTitle>

        {/* Close Button - Top Right with Gold Circle Border */}
        <button
          onClick={onClose}
          className="custom-close absolute right-3.5 top-3.5 z-30 flex items-center justify-center rounded-full w-7 h-7 bg-[#104432] hover:bg-white/10 text-white border border-[#d4a017] transition-all duration-200 cursor-pointer"
          aria-label="Close"
        >
          <X className="h-3.5 w-3.5 stroke-[2.2]" />
        </button>

        {/* Main Content Container */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 pt-7 sm:pt-8 pb-7 sm:pb-8 gap-4">
          
          {/* Logo Crest */}
          <div className="flex items-center justify-center mb-1 pt-1">
            <img
              src="/images/img_38.png"
              alt="Legal Olympiad Logo"
              className="h-10 sm:h-12 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/legelLogo.webp";
              }}
            />
          </div>

          {/* Headline: Legal Olympiad 2.0 (White text for Legal Olympiad) */}
          <h2 className="font-serif font-bold text-[24px] sm:text-[28px] text-white leading-tight tracking-wide">
            Legal Olympiad <span className="font-serif font-bold text-[#d4a017]">2.0</span>
          </h2>

          {/* Sub-details */}
          <div className="flex flex-col items-center gap-1.5 my-0.5">
            {/* Date */}
            <p className="font-sans font-bold text-white text-[19px] sm:text-[22px] tracking-wide">
              18th Oct 2026
            </p>

            {/* Mode */}
            <p className="font-sans font-bold text-white text-[14.5px] sm:text-[16.5px] tracking-wider uppercase">
              ONLINE THIS TIME
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              window.open(
                "https://app.legalolympiad.com/exam/registration",
                "_blank",
                "noopener,noreferrer"
              );
              onClose();
            }}
            className="mt-1 px-8 sm:px-10 py-2.5 sm:py-3 rounded-lg font-sans font-bold text-[15px] sm:text-[16px] text-white tracking-wide transition-all duration-200 hover:brightness-110 active:scale-[0.98] cursor-pointer shadow-md"
            style={{
              background: "linear-gradient(180deg, #d89a0c 0%, #b57e03 100%)",
              border: "1px solid #e2aa22",
              boxShadow: "0 4px 14px rgba(181, 126, 3, 0.4)",
            }}
          >
            Register Now
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
