import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const StickyBottomBar = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed) return null;

  return (
    <>
      <style>{`
        .lo-sticky-bar {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
          background: linear-gradient(180deg, rgba(16, 63, 48, 0.98) 0%, rgba(7, 39, 30, 0.99) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1px solid rgba(216, 184, 92, 0.35);
          box-shadow: 0 -8px 25px rgba(0, 0, 0, 0.5);
          padding: 10px 24px;
          padding-bottom: max(10px, env(safe-area-inset-bottom, 10px));
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(115%);
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.3, 1);
          pointer-events: none;
          box-sizing: border-box;
        }

        .lo-sticky-bar.show {
          transform: translateY(0);
          pointer-events: auto;
        }

        .lo-sticky-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding-right: 36px;
          box-sizing: border-box;
        }

        .lo-sticky-text {
          color: #C7D3CB;
          font-family: 'Poppins', system-ui, sans-serif;
          font-size: 13.5px;
          line-height: 1.4;
          margin: 0;
          text-align: center;
        }

        .lo-sticky-text b {
          color: #D8B85C;
          font-family: 'Montserrat', system-ui, sans-serif;
          font-weight: 700;
        }

        .lo-sticky-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 22px;
          border-radius: 999px;
          background: linear-gradient(135deg, #E8BE4C, #C6930A);
          color: #07271E;
          font-family: 'Poppins', system-ui, sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          border: 0;
          transition: 0.2s;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(198, 147, 10, 0.3);
          width: auto;
          max-width: fit-content;
        }

        .lo-sticky-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(198, 147, 10, 0.45);
          color: #07271E;
        }

        .lo-sticky-close {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(216, 184, 92, 0.25);
          color: rgba(216, 184, 92, 0.85);
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 50%;
          transition: 0.2s;
          flex-shrink: 0;
        }

        .lo-sticky-close:hover {
          color: #fff;
          background: rgba(216, 184, 92, 0.25);
        }

        /* ── Tablet & Mobile (≤ 768px) ── */
        @media (max-width: 768px) {
          .lo-sticky-bar {
            padding: 10px 14px;
            padding-bottom: max(10px, env(safe-area-inset-bottom, 10px));
          }

          .lo-sticky-content {
            flex-direction: column;
            gap: 8px;
            padding-right: 30px;
          }

          .lo-sticky-text {
            font-size: 12px;
            line-height: 1.35;
            text-align: center;
            width: 100%;
          }

          .lo-sticky-btn {
            width: auto;
            max-width: 260px;
            padding: 8px 24px;
            font-size: 13px;
            align-self: center;
          }

          .lo-sticky-close {
            top: 2px;
            right: 0;
            transform: none;
            width: 24px;
            height: 24px;
          }
        }

        /* ── Mobile (≤ 480px) ── */
        @media (max-width: 480px) {
          .lo-sticky-content {
            padding-right: 28px;
          }

          .lo-sticky-btn {
            width: 100%;
            max-width: 100%;
            padding: 9px 16px;
            font-size: 13px;
            box-sizing: border-box;
          }
        }

        /* ── Small Mobile (≤ 380px) ── */
        @media (max-width: 380px) {
          .lo-sticky-bar {
            padding: 8px 10px;
            padding-bottom: max(8px, env(safe-area-inset-bottom, 8px));
          }

          .lo-sticky-content {
            padding-right: 24px;
          }

          .lo-sticky-text {
            font-size: 11px;
          }

          .lo-sticky-btn {
            font-size: 12.5px;
            padding: 8px 12px;
            width: 100%;
            max-width: 100%;
          }

          .lo-sticky-close {
            width: 22px;
            height: 22px;
          }
        }
      `}</style>

      <div className={`lo-sticky-bar ${show ? "show" : ""}`} id="stickyBar">
        <div className="lo-sticky-content">
          <p className="lo-sticky-text">
            <b>Legal Olympiad 2.0</b> · Sunday, 18 October 2026 · ₹499 · open to every law student and CLAT aspirant in India
          </p>

          <a
            className="lo-sticky-btn"
            href="https://app.legalolympiad.com/exam/registration"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register now →
          </a>

          <button
            type="button"
            className="lo-sticky-close"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss sticky bar"
          >
            <X size={15} />
          </button>
        </div>
      </div>
    </>
  );
};

export default StickyBottomBar;
