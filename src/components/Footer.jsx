import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import academyLogo from "../assets/yaduvashiAcademylogo.jpeg";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-[#0B3B2C] via-[#0f4a37] to-[#0B3B2C] text-gray-300 py-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1"
        >
          <div
            className="flex items-center space-x-3 mb-4 cursor-pointer group"
            onClick={() => handleNavigate("/")}
          >
            <img
              src={academyLogo}
              alt="National Defence Academy Logo"
              className="h-16 w-16 object-contain rounded-full border-2 border-[#B8860B] group-hover:border-white transition-all duration-300"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white leading-tight">
                Yaduvanshi
              </span>
              <span className="text-lg font-semibold text-[#B8860B] -mt-1">
                ACADEMY Bansur
              </span>
              <span className="text-xs text-gray-400">Since 2014</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Shaping future officers with discipline, academic excellence, and
            physical fitness. Trusted by 2000+ parents and students across
            Rajasthan.
          </p>
          <div className="flex items-center text-sm text-gray-400">
            <span className="bg-[#B8860B] text-white px-3 py-1 rounded-full text-xs font-semibold">
              ESTD 2014
            </span>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4 border-b-2 border-[#B8860B] inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {["/", "/courses", "/results", "/about", "/contact"].map(
              (path, idx) => {
                const names = [
                  "Home",
                  "Courses",
                  "Our Results",
                  "About Us",
                  "Contact",
                ];
                return (
                  <li
                    key={idx}
                    className="cursor-pointer hover:text-[#B8860B] transition duration-300 ease-in-out transform hover:translate-x-1"
                    onClick={() => handleNavigate(path)}
                  >
                    {names[idx]}
                  </li>
                );
              },
            )}
          </ul>
        </motion.div>

        {/* Our Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4 border-b-2 border-[#B8860B] inline-block pb-1">
            Our Courses
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              "Sainik School Class 6th",
              "Sainik School Class 9th",
              "Navodya Vidyalaya Class 6th",
              "Navodya Vidyalya Class 9th",
              "Military School (RMS)",
              "RIMC Coaching",
            ].map((course, index) => (
              <li
                key={index}
                className="hover:text-[#B8860B] cursor-pointer transition duration-300"
                onClick={() => handleNavigate("/courses")}
              >
                {course}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4 border-b-2 border-[#B8860B] inline-block pb-1">
            Facilities
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            
            <li className="flex items-center gap-2">
              <span className="text-[#B8860B]">✓</span> Physical Training Ground
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#B8860B]">✓</span> Well-Stocked Library
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#B8860B]">✓</span> Disciplined Environment
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#B8860B]">✓</span> Hostel Facility
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#B8860B]">✓</span> Medical Room
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4 border-b-2 border-[#B8860B] inline-block pb-1">
            Contact Us
          </h3>
          <div className="space-y-3 text-sm text-gray-400">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#B8860B] mt-1 flex-shrink-0" />
              <span>
                P.no Shree Ram Vatika,
                <br />
                Alwar Road, Near Kanhaiya Nagar,
                <br />
                Kotputli-Behror - 301402, Rajasthan
              </span>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#B8860B] flex-shrink-0" />
              <span>
                <a
                  href="tel:+918949540232"
                  className="hover:text-[#B8860B] transition"
                >
                  +91 7725945908
                </a>
                ,{" "}
                <a
                  href="tel:+919460129249"
                  className="hover:text-[#B8860B] transition"
                >
                  +91 8503998922
                </a>
              </span>
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#B8860B] flex-shrink-0" />
              <a
                href="mailto:defenceacademy@gmail.com"
                className="hover:text-[#B8860B] transition"
              >
                defenceacademy@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaClock className="text-[#B8860B] flex-shrink-0" />
              <span>
                Mon - Sat: 8:00 AM - 5:00 PM
                <br />
                Sunday: 9:00 AM - 4:00 PM
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-12 pt-8 border-t border-gray-700"
      >
        {/* Social Media */}
        <div className="flex justify-center space-x-6 text-gray-400 text-xl mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B8860B] transition transform hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B8860B] transition transform hover:scale-110"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B8860B] transition transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B8860B] transition transform hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Ratings/Testimonials Badges */}
        <div className="flex justify-center flex-wrap gap-6 mb-6">
          {[
            { name: "Google Reviews", rating: 4.8, reviews: "150+" },
            { name: "Parent Satisfaction", rating: 4.9, reviews: "95%" },
            { name: "Success Rate", rating: 4.7, reviews: "85%" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 px-5 py-2 rounded-lg border border-[#B8860B]/30"
            >
              <p className="text-white font-semibold text-sm mb-1">
                {item.name}
              </p>
              <div className="flex items-center justify-center space-x-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.floor(item.rating)
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }
                      size={14}
                    />
                  ))}
                </div>
                <span className="ml-2 text-white text-xs">
                  {item.rating} ({item.reviews})
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Yaduvanshi Academy Bansur. All
            Rights Reserved.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Designed with 🎖️ for future officers of India
          </p>
        </div>
      </motion.div>

      {/* Quick Contact Floating Badge (Mobile Only) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="bg-[#B8860B] text-white p-3 rounded-lg shadow-lg flex justify-between items-center">
          <span className="text-sm font-semibold">
            Admission Open {new Date().getFullYear()}
          </span>
          <a
            href="tel:+918949540232"
            className="bg-white text-[#0B3B2C] px-4 py-1 rounded-full text-sm font-bold"
          >
            Call Now
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
