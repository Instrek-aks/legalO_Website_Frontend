import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  ArrowUp,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = () => {
    // If we're already on the same page, scroll to top
    if (location.pathname === window.location.pathname) {
      scrollToTop();
    }
    // If navigating to a different page, scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="bg-black text-white relative">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="slide-in-left">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#C6930A] rounded-full flex items-center justify-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white rounded-full"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold">
                LegalOlympiad
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
              India's first national-level Legal Olympiad bridging the gap
              between theory and practice, empowering students with real-world
              legal skills and career direction.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://in.linkedin.com/company/instrek-technologies"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={18}
                  className="sm:w-5 sm:h-5 hover:text-[#C6930A] cursor-pointer transition-colors bg-blue-700"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="slide-in-left stagger-1">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#C6930A] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#C6930A] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#C6930A] transition-colors"
                >
                  Legal-O Services
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#C6930A] transition-colors"
                >
                  Upcoming Events
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/register"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#ea4820] transition-colors"
                >
                  Subscription
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="text-sm sm:text-base text-gray-300 hover:text-[#C6930A] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="slide-in-right">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Contact Info
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin
                  size={16}
                  className="sm:w-5 sm:h-5 text-[#C6930A] mt-1 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Address: C-18, Second floor, Pamposh Enclave, New Delhi -
                  110048
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Phone
                  size={16}
                  className="sm:w-5 sm:h-5 text-[#C6930A] mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+19748845246937"
                  className="text-xs sm:text-sm text-gray-300 hover:text-[#C6930A] transition-colors leading-relaxed"
                >
                  +91-9999026602
                </a>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Mail
                  size={16}
                  className="sm:w-5 sm:h-5 text-[#C6930A] mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:info@legalolympiad.com"
                  className="text-xs sm:text-sm text-gray-300 hover:text-[#C6930A] transition-colors leading-relaxed"
                >
                  Partner@legalolympiad.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-gray-300 text-center sm:text-left">
            © 2025 LegalOlympiad. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 mt-3 sm:mt-0">
            <Link
              to="/privacy-policy"
              onClick={handleLinkClick}
              className="text-xs sm:text-sm text-gray-300 hover:text-[#C6930A] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              onClick={handleLinkClick}
              className="text-xs sm:text-sm text-gray-300 hover:text-[#C6930A] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 bg-[#C6930A] hover:bg-[#C6930A]/90 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={16} className="sm:w-5 sm:h-5" />
      </button>
    </footer>
  );
};

export default Footer;
