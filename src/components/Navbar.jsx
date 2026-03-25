import YaduvanshiLogo from "../assets/yaduvashiAcademylogo.jpeg";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Telent Exam", path: "/telent-search-exam" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] shadow-xl py-2"
          : "bg-gradient-to-r from-[#0B3B2C] to-[#0f4a37] shadow-md py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src={YaduvanshiLogo}
                alt="Yaduvanshi Academy"
                className="h-12 w-12 object-contain rounded-full border-2 border-[#B8860B] group-hover:border-white transition-all duration-300"
              />
              <div className="absolute -inset-1 bg-[#B8860B] rounded-full blur opacity-20 group-hover:opacity-30 transition"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white leading-tight">
                YADUVANSHI
              </span>
              <span className="text-xs text-[#B8860B] -mt-1 font-medium">
                ACADEMY BANSUR
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-[#B8860B] text-white"
                    : "text-gray-200 hover:bg-[#B8860B] hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Admission Button */}
            <Link
              to="/admission"
              className="ml-4 px-5 py-2 bg-[#B8860B] text-white rounded-lg font-semibold hover:bg-[#9E7008] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>🎯</span>
              Admission {new Date().getFullYear()}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#B8860B] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 bg-white rounded-lg p-4 shadow-xl border-t-4 border-[#B8860B]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-2 px-3 rounded-lg transition-all ${
                  isActive(link.path)
                    ? "bg-[#B8860B] text-white"
                    : "text-gray-700 hover:bg-[#B8860B] hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Admission Button */}
            <Link
              to="/admission"
              className="block mt-4 bg-[#B8860B] text-white text-center py-2 rounded-lg font-semibold hover:bg-[#9E7008] transition"
              onClick={() => setIsOpen(false)}
            >
              🎯 Admission Open {new Date().getFullYear()}
            </Link>

            {/* Quick Contact in Mobile Menu */}
            <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-600">
              <p className="font-semibold text-[#0B3B2C] mb-2">Contact:</p>
              <a href="tel:+917725945908" className="block hover:text-[#B8860B] py-1">
                📞 +91 7725945908
              </a>
              <a href="tel:+918503998922" className="block hover:text-[#B8860B] py-1">
                📞 +91 8503998922
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;