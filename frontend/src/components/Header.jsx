import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      <div className={`wrap nav ${mobileOpen ? "mobile-open" : ""}`}>
        <a href="#top" className="flex items-center gap-2">
          <img
            src="/images/img_1.png"
            alt="Legal Olympiad 2.0 Logo"
          />
        </a>

        <ul className="whitespace-nowrap">
          <li className="whitespace-nowrap shrink-0"><a className="whitespace-nowrap" href="#why" onClick={() => setMobileOpen(false)}>Why sit it</a></li>
          <li className="whitespace-nowrap shrink-0"><a className="whitespace-nowrap" href="#benefits" onClick={() => setMobileOpen(false)}>What you get</a></li>
          <li className="whitespace-nowrap shrink-0"><a className="whitespace-nowrap" href="#paper" onClick={() => setMobileOpen(false)}>The paper</a></li>
          <li className="whitespace-nowrap shrink-0"><a className="whitespace-nowrap" href="#proof" onClick={() => setMobileOpen(false)}>Proof</a></li>
          <li className="whitespace-nowrap shrink-0"><a className="whitespace-nowrap" href="#mentors" onClick={() => setMobileOpen(false)}>Mentors</a></li>
          <li className="whitespace-nowrap shrink-0"><a className="whitespace-nowrap" href="#after" onClick={() => setMobileOpen(false)}>After the exam</a></li>
          <li className="whitespace-nowrap shrink-0"><a className="whitespace-nowrap" href="#faq" onClick={() => setMobileOpen(false)}>FAQs</a></li>
          <li className="mobile-only-item whitespace-nowrap shrink-0">
            <a
              href="/images/Legal%20Olympiad%202.0.pdf"
              download="Legal Olympiad 2.0.pdf"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <Download size={16} />
              <span>Download Brochure</span>
            </a>
          </li>
        </ul>

        <div className="navcta">
          <a
            href="/images/Legal%20Olympiad%202.0.pdf"
            download="Legal Olympiad 2.0.pdf"
            className="btn btn-brochure"
            title="Download Brochure"
          >
            <Download size={15} />
            <span className="brochure-long-text">Download Brochure</span>
            <span className="brochure-short-text">Brochure</span>
          </a>
          <a
            href="https://app.legalolympiad.com/exam/registration"
            className="btn btn-g"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register — ₹499
          </a>
          <button
            className="burger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
