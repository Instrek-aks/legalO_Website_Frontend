import React, { useState, useEffect, useCallback, useRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

// ============================================================================
// POPUP STORAGE CONFIGURATION
// To show the popup once per device instead of once per session:
// Switch 'sessionStorage' to 'localStorage' below.
// ============================================================================
const POPUP_STORAGE_KEY = "lo_popup_seen";
const getStorage = () => {
  if (typeof window === "undefined") return null;
  // Switch to window.localStorage for once-per-device behavior:
  return window.sessionStorage;
};

export default function WelcomePopup({ isOpen: controlledIsOpen, onClose: controlledOnClose }) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isTriggeredRef = useRef(false);

  const isControlled = typeof controlledIsOpen === "boolean";
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  // Function to open the popup if it hasn't been dismissed in the current session
  const triggerOpen = useCallback(() => {
    try {
      const storage = getStorage();
      if (storage && storage.getItem(POPUP_STORAGE_KEY) === "true") {
        return;
      }
    } catch {
      // Ignore storage access errors
    }

    if (!isTriggeredRef.current) {
      isTriggeredRef.current = true;
      setInternalIsOpen(true);
    }
  }, []);

  // Function to close popup and save dismissed state to storage
  const handleClose = useCallback((scrollTarget) => {
    try {
      const storage = getStorage();
      if (storage) {
        storage.setItem(POPUP_STORAGE_KEY, "true");
      }
    } catch {
      // Ignore storage access errors
    }

    setInternalIsOpen(false);
    if (controlledOnClose) {
      controlledOnClose();
    }

    if (typeof scrollTarget === "string") {
      const el = document.querySelector(scrollTarget);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [controlledOnClose]);

  // Setup 2.5s timer and exit-intent listener on mount
  useEffect(() => {
    try {
      const storage = getStorage();
      if (storage && storage.getItem(POPUP_STORAGE_KEY) === "true") {
        return; // Already seen in this session
      }
    } catch {
      // Ignore storage access errors
    }

    // 1. Timer: Opens 2.5 seconds after load
    const timer = setTimeout(() => {
      triggerOpen();
    }, 2500);

    // 2. Exit Intent: Opens immediately when cursor moves towards the browser tab bar / top
    const handleMouseOut = (e) => {
      if (!e.relatedTarget && e.clientY < 10) {
        triggerOpen();
      }
    };

    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [triggerOpen]);

  return (
    <>
      {/* Scoped CSS with comprehensive mobile responsiveness */}
      <style>{`
        .lo-ov {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: grid;
          place-items: center;
          padding: 16px;
          background: rgba(4, 18, 13, 0.78);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          overflow-y: auto;
          box-sizing: border-box;
        }
        .lo-card {
          position: relative;
          width: 100%;
          max-width: 456px;
          max-height: calc(100dvh - 32px);
          overflow-y: auto;
          border-radius: 22px;
          background: radial-gradient(120% 100% at 80% -10%, #176045 0%, #07271E 62%);
          border: 1px solid rgba(216, 184, 92, 0.35);
          box-shadow: 0 40px 90px rgba(0, 0, 0, 0.7);
          box-sizing: border-box;
          animation: lo-pop 0.35s cubic-bezier(0.2, 0.8, 0.3, 1);
          scrollbar-width: thin;
          scrollbar-color: rgba(216, 184, 92, 0.3) transparent;
        }
        .lo-card::-webkit-scrollbar {
          width: 4px;
        }
        .lo-card::-webkit-scrollbar-track {
          background: transparent;
        }
        .lo-card::-webkit-scrollbar-thumb {
          background: rgba(216, 184, 92, 0.3);
          border-radius: 4px;
        }
        @keyframes lo-pop {
          from {
            transform: translateY(18px) scale(0.96);
            opacity: 0;
          }
          to {
            transform: none;
            opacity: 1;
          }
        }
        .lo-card:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #8A6606, #EFD48A 48%, #8A6606);
          z-index: 4;
        }
        .lo-tex {
          position: absolute;
          inset: 0;
          opacity: 0.06;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23D8B85C' stroke-width='1'%3E%3Cpath d='M0 40 L40 0 L80 40 L40 80 Z'/%3E%3Ccircle cx='40' cy='40' r='16'/%3E%3C/g%3E%3C/svg%3E");
        }
        .lo-x {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 5;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(216, 184, 92, 0.35);
          background: rgba(255, 255, 255, 0.07);
          color: #D8B85C;
          font-size: 19px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.2s;
        }
        .lo-x:hover {
          background: rgba(216, 184, 92, 0.2);
          color: #fff;
        }
        .lo-body {
          position: relative;
          z-index: 2;
          padding: 34px 30px 28px;
          text-align: center;
          box-sizing: border-box;
        }
        .lo-logo {
          height: 42px;
          margin: 0 auto 18px;
          display: block;
          object-fit: contain;
          max-width: 80%;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5));
        }
        .lo-eyebrow {
          font-family: 'Poppins', system-ui, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #D8B85C;
          margin-bottom: 10px;
        }
        .lo-h {
          font-family: 'Montserrat', system-ui, sans-serif;
          font-weight: 700;
          font-size: 30px;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #F3F0E6 !important;
          margin: 0 0 14px 0;
        }
        .lo-h em {
          font-style: normal;
          color: #D8B85C;
        }
        .lo-date {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px;
          border-radius: 999px;
          border: 1px solid rgba(216, 184, 92, 0.4);
          background: rgba(216, 184, 92, 0.1);
          font-family: 'Poppins', system-ui, sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #D8B85C;
          margin-bottom: 16px;
        }
        .lo-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #D8B85C;
          box-shadow: 0 0 0 4px rgba(216, 184, 92, 0.22);
          animation: lo-pulse 2s infinite;
        }
        @keyframes lo-pulse {
          50% {
            box-shadow: 0 0 0 8px rgba(216, 184, 92, 0);
          }
        }
        .lo-p {
          font-family: 'Poppins', system-ui, sans-serif;
          font-size: 14px;
          line-height: 1.55;
          color: #8FAA9C;
          max-width: 35ch;
          margin: 0 auto 20px;
        }
        .lo-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 22px;
        }
        .lo-chip {
          font-family: 'Poppins', system-ui, sans-serif;
          font-size: 11.5px;
          font-weight: 500;
          color: #C7D3CB;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(216, 184, 92, 0.2);
        }
        .lo-chip b {
          color: #D8B85C;
          font-weight: 600;
        }
        .lo-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: 100%;
          max-width: 320px;
          margin: 0 auto;
          padding: 13px 22px;
          border: 0;
          border-radius: 999px;
          cursor: pointer;
          text-decoration: none;
          font-family: 'Poppins', system-ui, sans-serif;
          font-size: 15.5px;
          font-weight: 700;
          color: #07271E;
          background: linear-gradient(135deg, #E8BE4C, #C6930A);
          transition: 0.22s;
          box-sizing: border-box;
        }
        .lo-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(198, 147, 10, 0.4);
        }
        .lo-alt {
          display: inline-block;
          margin-top: 14px;
          font-family: 'Poppins', system-ui, sans-serif;
          font-size: 13px;
          color: #8FAA9C;
          text-decoration: none;
          border-bottom: 1px solid rgba(143, 170, 156, 0.4);
          padding-bottom: 2px;
          cursor: pointer;
          transition: 0.2s;
        }
        .lo-alt:hover {
          color: #D8B85C;
          border-color: #D8B85C;
        }
        .lo-foot {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(216, 184, 92, 0.18);
          font-family: 'Poppins', system-ui, sans-serif;
          font-size: 11.5px;
          line-height: 1.5;
          color: #6E8579;
        }

        /* ── Mobile Breakpoint: ≤ 480px ── */
        @media (max-width: 480px) {
          .lo-ov {
            padding: 12px;
          }
          .lo-body {
            padding: 26px 18px 20px;
          }
          .lo-logo {
            height: 36px;
            margin-bottom: 12px;
          }
          .lo-eyebrow {
            font-size: 10px;
            margin-bottom: 8px;
          }
          .lo-h {
            font-size: 24px;
            margin-bottom: 10px;
          }
          .lo-date {
            font-size: 12px;
            padding: 6px 14px;
            margin-bottom: 12px;
          }
          .lo-p {
            font-size: 13px;
            line-height: 1.5;
            margin-bottom: 16px;
          }
          .lo-chips {
            gap: 6px;
            margin-bottom: 18px;
          }
          .lo-chip {
            font-size: 11px;
            padding: 5px 10px;
          }
          .lo-cta {
            width: 100%;
            max-width: 100%;
            font-size: 14.5px;
            padding: 13px 18px;
          }
          .lo-alt {
            font-size: 12px;
            margin-top: 10px;
          }
          .lo-foot {
            font-size: 11px;
            margin-top: 14px;
            padding-top: 12px;
          }
        }

        /* ── Small Mobile Breakpoint: ≤ 360px ── */
        @media (max-width: 360px) {
          .lo-body {
            padding: 22px 14px 16px;
          }
          .lo-logo {
            height: 32px;
            margin-bottom: 10px;
          }
          .lo-h {
            font-size: 21px;
          }
          .lo-date {
            font-size: 11px;
            padding: 5px 12px;
          }
          .lo-chip {
            font-size: 10px;
            padding: 4px 8px;
          }
          .lo-cta {
            width: 100%;
            max-width: 100%;
            font-size: 13.5px;
            padding: 11px 14px;
          }
          .lo-x {
            width: 30px;
            height: 30px;
            font-size: 16px;
            top: 10px;
            right: 10px;
          }
        }

        /* ── Short Vertical Screen Breakpoint: height ≤ 640px ── */
        @media (max-height: 640px) {
          .lo-body {
            padding: 20px 18px 16px;
          }
          .lo-logo {
            height: 30px;
            margin-bottom: 8px;
          }
          .lo-eyebrow {
            margin-bottom: 6px;
          }
          .lo-h {
            font-size: 22px;
            margin-bottom: 8px;
          }
          .lo-date {
            margin-bottom: 10px;
            padding: 5px 12px;
          }
          .lo-p {
            font-size: 12.5px;
            margin-bottom: 12px;
          }
          .lo-chips {
            margin-bottom: 14px;
          }
          .lo-cta {
            padding: 10px 16px;
          }
          .lo-foot {
            margin-top: 12px;
            padding-top: 10px;
          }
        }
      `}</style>

      <DialogPrimitive.Root
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) handleClose();
        }}
      >
        <DialogPrimitive.Portal>
          {/* Backdrop overlay */}
          <DialogPrimitive.Overlay className="lo-ov">
            {/* Modal Content */}
            <DialogPrimitive.Content
              aria-describedby={undefined}
              className="lo-card focus:outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lo-tex"></div>

              {/* Close Button */}
              <DialogPrimitive.Close
                onClick={() => handleClose()}
                className="lo-x focus:outline-none"
                aria-label="Close"
              >
                &times;
              </DialogPrimitive.Close>

              {/* Main Card Body */}
              <div className="lo-body">
                {/* 1. Logo */}
                <img
                  className="lo-logo"
                  src="/logo-white.png"
                  alt="Legal Olympiad"
                />

                {/* 2. Eyebrow */}
                <div className="lo-eyebrow">Registrations open</div>

                {/* 3. Heading */}
                <DialogPrimitive.Title className="lo-h" id="loTitle">
                  Legal Olympiad <em>2.0</em>
                </DialogPrimitive.Title>

                {/* 4. Pulsing Date Badge */}
                <div className="lo-date">
                  <span className="lo-dot"></span>
                  Sunday, 18 October 2026
                </div>

                {/* 5. Subtitle */}
                <p className="lo-p">
                  India's national benchmark exam for law students and CLAT aspirants. Online and proctored.
                </p>

                {/* 6. Feature Chips */}
                <div className="lo-chips">
                  <span className="lo-chip">
                    <b>₹499</b> all inclusive
                  </span>
                  <span className="lo-chip">No negative marking</span>
                  <span className="lo-chip">Nothing to cram</span>
                  <span className="lo-chip">All India &amp; State Rank</span>
                </div>

                {/* 7. Primary CTA */}
                <a
                  className="lo-cta"
                  href="https://app.legalolympiad.com/exam/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleClose()}
                >
                  Register Now &nbsp;→
                </a>

                {/* 8. Secondary Link */}
                <button
                  type="button"
                  className="lo-alt bg-transparent border-0"
                  onClick={() => handleClose("#benefits")}
                >
                  See what you get for ₹499
                </button>

                {/* 9. Footer Note */}
                <p className="lo-foot">
                  Open to every law student in India and to CLAT aspirants.
                  <br />
                  No college permission required.
                </p>
              </div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Overlay>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
