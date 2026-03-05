import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSchool, 
  FaMedal, 
  FaUsers, 
  FaClock, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope,
  FaCheckCircle,
  FaTrophy,
  FaUserGraduate
} from 'react-icons/fa';

// Import your academy image (you can add these images to your assets folder)
import academyImage from '../assets/portfolio2.png';
import studentsImage from '../assets/portfolio1.png';
import facultyImage from '../assets/portfolio2.png';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            National Defence Academy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Shaping Future Leaders with Discipline & Excellence Since 2010
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Academy Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Yaduvanshi <span className="text-[#B8860B]">Academy Bansur</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="bg-[#B8860B] text-white px-4 py-1 rounded-full text-sm font-semibold">
              Since 2014
            </span>
            <span className="bg-[#0B3B2C] text-white px-4 py-1 rounded-full text-sm font-semibold">
              ESTD
            </span>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Shaping future officers with discipline, academic excellence, and physical fitness. 
            Trusted by <strong className="text-[#B8860B]">200+ parents and students</strong> across Rajasthan.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {[
            { number: "12+", label: "Years of Excellence", icon: <FaTrophy /> },
            { number: "200+", label: "Students Trained", icon: <FaUsers /> },
            { number: "50+", label: "Sainik Selections", icon: <FaMedal /> },
            // { number: "100+", label: "NDA Cadets", icon: <FaUserGraduate /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center border-b-4 border-[#B8860B]"
            >
              <div className="text-[#B8860B] text-3xl mb-2 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-[#0B3B2C]">{stat.number}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Quick Links & Courses Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#0B3B2C] mb-6 pb-2 border-b-2 border-[#B8860B] inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "Courses", "Our Results", "About Us", "Contact"].map((link, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="text-[#B8860B]">✓</span>
                  <a href={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-[#B8860B] transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Courses */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#0B3B2C] mb-6 pb-2 border-b-2 border-[#B8860B] inline-block">
              Our Courses
            </h3>
            <ul className="space-y-3">
              {[
                "Sainik School Class 6",
                "Sainik School Class 9",
                "Military School (RMS)",
                "RIMC Coaching",
                "NDA Foundation",
                "SSB Interview Prep",
                "Physical Training",
              ].map((course, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="text-[#B8860B]">🎯</span>
                  {course}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Facilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-[#0B3B2C] mb-8">
            Our <span className="text-[#B8860B]">Facilities</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              // "Smart Classrooms",
              "Physical Training Ground",
              "Well-Stocked Library",
              "Computer Lab",
              "Hostel Facility",
              "Medical Room",
            ].map((facility, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow text-center border border-gray-200">
                <FaCheckCircle className="text-[#B8860B] text-2xl mx-auto mb-2" />
                <p className="text-sm text-gray-700">{facility}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] text-white p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Contact Us</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#B8860B] mt-1 flex-shrink-0" />
                <p>
                  P.no 148, Laxman Colony, Alwar Road,<br />
                  Near Kanhaiya Nagar, Jaipur - 301402,<br />
                  Rajasthan
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#B8860B]" />
                <p>+91 7725945908, +91 8503998922</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#B8860B]" />
                <a href="mailto:yaduvanshiacademybansur@gmail.com" className="hover:text-[#B8860B]">
                  yaduvanshiacademybansur@gmail.com
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaClock className="text-[#B8860B]" />
                <div>
                  <p>Mon - Sat: 7:00 AM - 8:00 PM</p>
                  <p>Sunday: 8:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="bg-[#B8860B] text-[#0B3B2C] p-4 rounded-lg">
                <p className="font-bold text-lg mb-1">🎯 Admission Open {new Date().getFullYear()}</p>
                <p className="text-sm">Limited seats available. Enroll today!</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Section (Optional) */}
        <div className="mt-8 text-center">
          <a 
            href="https://www.google.com/maps/@27.696449,76.3787435,17.62z?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#B8860B] hover:text-[#0B3B2C] transition"
          >
            {/* <FaMapMarkerAlt /> */}
            {/* View on Google Maps */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;