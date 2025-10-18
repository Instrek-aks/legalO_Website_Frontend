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
                href="https://www.linkedin.com/company/legalolympiad/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C6930A] transition-colors"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://x.com/LegalOlympiad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C6930A] transition-colors"
              >
                <Twitter size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/legalolympiad/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C6930A] transition-colors"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.youtube.com/@LegalOlympiad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C6930A] transition-colors"
              >
                <Youtube size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://wa.me/917827050511"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C6930A] transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="sm:w-5 sm:h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
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
            <h3 className="text-base sm:text-lg font-bold mb-4 ">
              Contact Info
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {/* Address */}
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin
                  size={16}
                  className="sm:w-5 sm:h-5 text-[#C6930A] mt-1 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Greater Kailash, South Delhi, 110048
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Phone
                  size={16}
                  className="sm:w-5 sm:h-5 text-[#C6930A] mt-1 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  +91-9999026602
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Mail
                  size={16}
                  className="sm:w-5 sm:h-5 text-[#C6930A] mt-1 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Partner@legalolympiad.com
                </span>
              </div>

              {/* Phone */}
              {/* <div className="flex items-start gap-2 sm:gap-3">
                <Phone
                  size={16}
                  className="sm:w-5 sm:h-5 text-[#C6930A] flex-shrink-0"
                />
                <a
                  href="tel:+19748845246937"
                  className="text-xs sm:text-sm text-gray-300 hover:text-[#C6930A] transition-colors leading-relaxed"
                >
                  +91-9999026602
                </a>
              </div> */}
              {/* Email */}
              {/* <div className="flex items-start gap-2 sm:gap-3">
                <Mail
                  size={16}
                  className="sm:w-5 sm:h-5 text-[#C6930A] flex-shrink-0"
                />
                <a
                  href="mailto:info@legalolympiad.com"
                  className="text-xs sm:text-sm text-gray-300 hover:text-[#C6930A] transition-colors leading-relaxed"
                >
                  Partner@legalolympiad.com
                </a>
              </div> */}
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
        className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 bg-[#C6930A] hover:bg-[#C6930A]/90 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
