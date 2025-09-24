import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  ChevronDown,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLegalODropdownOpen, setIsLegalODropdownOpen] = useState(false);
  const [isDesktopLegalODropdownOpen, setIsDesktopLegalODropdownOpen] =
    useState(false);
  const location = useLocation();

  const navigation = [
    //{ name: "HOME", href: "/" },
    { name: "ABOUT OLYMPIAD", href: "/about" },
    { name: "CONTENT", href: "/courses", hasDropdown: true },
    { name: "EDUCATION", href: "/courses" },

    //{ name: "UPCOMING EVENTS", href: "/events" },
    //{ name: "Login/Register", href: "/register", isButton: true },
    // { name: "PAGES", href: "/pages" },
    // { name: "BLOG", href: "/blog" },
    //{ name: "CONTACT US", href: "/contact" },
  ];

  const legalOServices = [
    //{ name: "Olympiad", href: "/legal-o/olympiad" },
    { name: "BLOGS", href: "/blog" },
    { name: "PODCASTS", href: "/legal-o/podcasts" },
    // { name: "Find a Mentor", href: "/legal-o/find-mentor" },
    // { name: "Subjects for Tomorrow", href: "/legal-o/subjects" },
    // { name: "Mentoring Sessions", href: "/legal-o/mentoring" },
  ];

  // Handle Legal-O dropdown toggle for desktop
  const handleLegalOToggle = () => {
    setIsDesktopLegalODropdownOpen(!isDesktopLegalODropdownOpen);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest(".legal-o-dropdown-container")) {
      setIsDesktopLegalODropdownOpen(false);
    }
  };

  // Close dropdown when pressing Escape key
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsDesktopLegalODropdownOpen(false);
    }
  };

  // Add click outside listener and keyboard support
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Top Bar */}
      {/* <div className="bg-black text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2 sm:mb-0">
            <div className="flex items-center gap-1 sm:gap-2">
              <Phone size={14} className="sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">974 8845246937</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Mail size={14} className="sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm hidden sm:inline">
                info@legalolympiad.com
              </span>
              <span className="text-xs sm:hidden">info@legalolympiad.com</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <MapPin size={14} className="sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm hidden sm:inline">
                24th street, California
              </span>
              <span className="text-xs sm:hidden">California</span>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <Facebook
              size={14}
              className="sm:w-4 sm:h-4 hover:scale-110 transition-transform cursor-pointer"
            />
            <Instagram
              size={14}
              className="sm:w-4 sm:h-4 hover:scale-110 transition-transform cursor-pointer"
            />
            <Twitter
              size={14}
              className="sm:w-4 sm:h-4 hover:scale-110 transition-transform cursor-pointer"
            />
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-[rgba(255,255,255,0.8)] backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer group">
              <Link
                to="/"
                onClick={() => setTimeout(() => window.location.reload(), 100)}
              >
                <img
                  src="/legelOpng.png"
                  alt="Legal Olympiad Logo"
                  className="h-12 w-auto sm:h-16 object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group flex items-center legal-o-dropdown-container"
                >
                  {item.hasDropdown ? (
                    <>
                      <div
                        className="flex items-center gap-1 cursor-pointer touch-manipulation"
                        onClick={handleLegalOToggle}
                      >
                        <span className="text-sm xl:text-base font-semibold transition-colors duration-200 text-black group-hover:text-[#C6930A]">
                          {item.name}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`text-black group-hover:text-[#C6930A] transition-all duration-200 ${
                            isDesktopLegalODropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {/* Desktop Dropdown - Works on both hover and click */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-64 bg-black border border-gray-700 rounded-lg shadow-2xl transition-all duration-200 transform origin-top z-50 ${
                          isDesktopLegalODropdownOpen
                            ? "opacity-100 visible scale-100"
                            : "opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100"
                        }`}
                      >
                        <div className="py-2">
                          {legalOServices.map((service, index) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className={`block px-4 py-3 text-sm text-white hover:bg-[#C6930A] hover:text-black transition-colors duration-200 touch-manipulation ${
                                index === 0 ? "rounded-t-lg" : ""
                              } ${
                                index === legalOServices.length - 1
                                  ? "rounded-b-lg"
                                  : ""
                              }`}
                              onClick={() =>
                                setIsDesktopLegalODropdownOpen(false)
                              }
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : item.isButton ? (
                    <Link
                      to={item.href}
                      className="bg-[#C6930A] hover:bg-[#C6930A]/90 text-white px-4 py-2 rounded-lg text-sm xl:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-sm xl:text-base font-semibold transition-colors duration-200 text-black hover:text-[#C6930A] flex items-center relative group`}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C6930A] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-black hover:text-[#C6930A] hover:bg-gray-800 p-2 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-700 bg-black absolute left-0 right-0 top-full shadow-xl">
              <nav className="flex flex-col p-4">
                {navigation.map((item, index) => (
                  <div key={item.name} className="mb-2">
                    {item.hasDropdown ? (
                      <div>
                        <button
                          className={`w-full text-left text-base font-semibold transition-colors text-white hover:text-[#C6930A] py-4 px-4 flex items-center justify-between ${
                            index === navigation.length - 1
                              ? ""
                              : "border-b border-gray-700"
                          }`}
                          onClick={() =>
                            setIsLegalODropdownOpen(!isLegalODropdownOpen)
                          }
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              isLegalODropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {/* Mobile Dropdown */}
                        {isLegalODropdownOpen && (
                          <div className="bg-gray-900 border-l-4 border-[#C6930A]">
                            {legalOServices.map((service, serviceIndex) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block text-sm text-white hover:text-[#C6930A] py-3 px-8 border-b border-gray-700 last:border-b-0 transition-colors duration-200"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsLegalODropdownOpen(false);
                                }}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : item.isButton ? (
                      <Link
                        to={item.href}
                        className="bg-[#C6930A] hover:bg-[#C6930A]/90 text-white py-3 px-4 rounded-lg text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg block text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Link
                        to={item.href}
                        className={`text-base font-semibold transition-colors text-white hover:text-[#C6930A] py-3 px-4 block ${
                          index === navigation.length - 1
                            ? ""
                            : "border-b border-gray-700"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
