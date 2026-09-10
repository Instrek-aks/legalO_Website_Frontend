import { useState } from "react";
import { Menu, X } from "lucide-react";

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

        <ul>
          <li><a href="#why" onClick={() => setMobileOpen(false)}>Why sit it</a></li>
          <li><a href="#benefits" onClick={() => setMobileOpen(false)}>What you get</a></li>
          <li><a href="#paper" onClick={() => setMobileOpen(false)}>The paper</a></li>
          <li><a href="#proof" onClick={() => setMobileOpen(false)}>Proof</a></li>
          <li><a href="#mentors" onClick={() => setMobileOpen(false)}>Mentors</a></li>
          <li><a href="#after" onClick={() => setMobileOpen(false)}>After the exam</a></li>
          <li><a href="#faq" onClick={() => setMobileOpen(false)}>FAQs</a></li>
        </ul>

        <div className="navcta">
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
