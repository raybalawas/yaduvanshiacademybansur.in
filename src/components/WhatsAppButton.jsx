import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes, FaPhone, FaGraduationCap } from "react-icons/fa";

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedOption, setSelectedOption] = useState("general");
  
  const phoneNumber = "7725945908"; // Academy phone number
  
  // Pre-defined messages for different inquiries
  const messages = {
    general: "Hello 👋, I'm interested in your defence coaching programs at Yaduvanshi Academy. Can you share details about courses and admission?",
    sainik: "Hello 👋, I want to know about Sainik School coaching for my child. Please share information about Class 6/9 admission, fees, and batch timings.",
    military: "Hello 👋, I'm interested in Military School (RMS) coaching. Can you provide details about the entrance exam preparation?",
    rimc: "Hello 👋, I want to know about RIMC coaching at your academy. Please share eligibility criteria and course details.",
    nda: "Hello 👋, I'm interested in NDA foundation course. Can you share details about the curriculum, duration, and fees?",
    physical: "Hello 👋, I want to know about physical training programs for defence exams. What all does it include?",
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messages[selectedOption])}`;

  // Show popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  // Don't show popup if user has interacted with the button
  const handleButtonClick = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* Main WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleButtonClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Tooltip */}
        <span className={`absolute bottom-full right-0 mb-3 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
          isHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
        }`}>
          👋 Chat with our admission counselor
          <span className="absolute bottom-[-6px] right-6 w-3 h-3 bg-gray-900 transform rotate-45"></span>
        </span>

        {/* Button with Pulse Effect */}
        <div className="relative">
          {/* Ripple Effect */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
          
          {/* Main Button */}
          <div className="relative bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center gap-2">
            <FaWhatsapp size={28} />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap text-sm font-medium">
              Chat with us
            </span>
          </div>
        </div>

        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center animate-bounce border-2 border-white">
          1
        </span>
      </a>

      {/* Quick Inquiry Popup */}
      {showPopup && (
        <div className="fixed bottom-24 right-6 z-50 max-w-sm w-full sm:w-96 bg-white rounded-2xl shadow-2xl border-t-4 border-[#25D366] overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] text-white p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-[#B8860B] p-2 rounded-full">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Yaduvanshi Academy</h3>
                  <p className="text-xs text-gray-200">Typically replies within 5 mins</p>
                </div>
              </div>
              <button 
                onClick={() => setShowPopup(false)}
                className="hover:bg-white/20 p-1 rounded-full transition"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-5">
            <p className="text-gray-600 text-sm mb-4">
              👋 Hi! How can we help you today? Select your inquiry:
            </p>

            {/* Options Grid */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[
                { id: "general", label: "📋 General", desc: "Quick info" },
                { id: "sainik", label: "🎯 Sainik School", desc: "Class 6/9" },
                { id: "military", label: "🏛️ Military School", desc: "RMS CET" },
                { id: "rimc", label: "⭐ RIMC", desc: "Dehradun" },
                { id: "nda", label: "📚 NDA", desc: "Foundation" },
                { id: "physical", label: "💪 Physical", desc: "Training" },
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    selectedOption === option.id 
                      ? 'border-[#25D366] bg-green-50' 
                      : 'border-gray-200 hover:border-[#25D366] hover:bg-gray-50'
                  }`}
                >
                  <p className="font-semibold text-gray-800 text-sm">{option.label}</p>
                  <p className="text-xs text-gray-500">{option.desc}</p>
                </button>
              ))}
            </div>

            {/* Selected Option Message Preview */}
            <div className="bg-gray-50 p-3 rounded-lg mb-4 text-sm text-gray-600 italic border-l-4 border-[#B8860B]">
              "{messages[selectedOption].substring(0, 70)}..."
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowPopup(false)}
                className="flex-1 bg-[#25D366] hover:bg-[#20BA5C] text-white text-center py-3 rounded-lg font-semibold transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={18} />
                Start Chat
              </a>
              <a
                href="tel:+917725945908"
                className="px-4 py-3 border-2 border-[#0B3B2C] text-[#0B3B2C] rounded-lg hover:bg-[#0B3B2C] hover:text-white transition flex items-center justify-center"
              >
                <FaPhone size={18} />
              </a>
            </div>

            {/* Operating Hours */}
            <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-400 flex justify-between items-center">
              <span>📞 Mon-Sat: 8AM - 5PM</span>
              <span className="text-[#B8860B] font-semibold">🎯 Admission {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      )}

      {/* Styles for animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;