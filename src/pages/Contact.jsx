import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaCheckCircle,
  FaGraduationCap,
  FaMedal,
  FaUsers,
  FaCalendarAlt
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] py-16">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-[#B8860B]">Touch</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Have questions about our courses? We're here to help you on your
            journey to becoming a defence officer.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Decorative Top Bar */}
            <div className="h-2 bg-gradient-to-r from-[#B8860B] to-[#0B3B2C]"></div>

            <div className="p-6 md:p-8">
              {/* Tagline Section */}
              <div className="text-center mb-8">
                <div className="inline-block bg-[#0B3B2C]/10 rounded-full px-4 py-1 mb-4">
                  <span className="text-sm font-semibold text-[#B8860B]">
                    ✦ CONNECT WITH US ✦
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-[#0B3B2C] mb-3">
                  We're Here to Help
                </h2>
                <p className="text-gray-600 max-w-md mx-auto">
                  Our dedicated team is ready to assist you with any questions
                  about admissions, courses, or your journey to becoming a
                  defence officer.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Phone Section */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition">
                  <div className="bg-[#B8860B]/10 p-3 rounded-full">
                    <FaPhone className="text-[#B8860B] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B3B2C] text-lg mb-1">
                      Call Us Directly
                    </h3>
                    <a
                      href="tel:+917725945908"
                      className="text-gray-700 hover:text-[#B8860B] transition block"
                    >
                      +91 77259 45908
                    </a>
                    <a
                      href="tel:+918503998922"
                      className="text-gray-700 hover:text-[#B8860B] transition block"
                    >
                      +91 8503998922
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Mon-Sat: 7:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>

                {/* WhatsApp Section */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition">
                  <div className="bg-[#25D366]/10 p-3 rounded-full">
                    <FaWhatsapp className="text-[#25D366] text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#0B3B2C] text-lg mb-1">
                      WhatsApp Chat
                    </h3>
                    <a
                      href="https://wa.me/917725945908"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#25D366] transition block"
                    >
                      +91 77259 45908
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Quick responses within 5 minutes
                    </p>
                    <a
                      href="https://wa.me/917725945908?text=Hello%20👋%2C%20I'm%20interested%20in%20your%20defence%20coaching%20programs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 bg-[#25D366] hover:bg-[#20BA5C] text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                    >
                      Start WhatsApp Chat →
                    </a>
                  </div>
                </div>

                {/* Email Section */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition">
                  <div className="bg-[#B8860B]/10 p-3 rounded-full">
                    <FaEnvelope className="text-[#B8860B] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B3B2C] text-lg mb-1">
                      Send an Email
                    </h3>
                    <a
                      href="mailto:info@yaduvanshiacademy.com"
                      className="text-gray-700 hover:text-[#B8860B] transition block"
                    >
                      info@yaduvanshiacademy.com
                    </a>
                    <a
                      href="mailto:admissions@yaduvanshiacademy.com"
                      className="text-gray-700 hover:text-[#B8860B] transition block"
                    >
                      admissions@yaduvanshiacademy.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Response within 24 hours
                    </p>
                  </div>
                </div>

                {/* Address Section */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition">
                  <div className="bg-[#B8860B]/10 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-[#B8860B] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B3B2C] text-lg mb-1">
                      Visit Our Campus
                    </h3>
                    <p className="text-gray-700">
                      Yaduvanshi Academy Bansur,
                      <br />
                      Alwar Road, Near Kanhaiya Nagar,
                      <br />
                      Bansur, Rajasthan - 301402
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Monday - Saturday: 7:00 AM - 8:00 PM
                      <br />
                      Sunday: 8:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>

                {/* Quick Response Note */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-[#0B3B2C]/5 p-3 rounded-lg">
                      <FaClock className="text-[#B8860B] mx-auto mb-2" />
                      <p className="text-xs text-gray-600">
                        Response within 24h
                      </p>
                    </div>
                    <div className="bg-[#0B3B2C]/5 p-3 rounded-lg">
                      <FaCheckCircle className="text-[#B8860B] mx-auto mb-2" />
                      <p className="text-xs text-gray-600">Free Counseling</p>
                    </div>
                    <div className="bg-[#0B3B2C]/5 p-3 rounded-lg">
                      <FaGraduationCap className="text-[#B8860B] mx-auto mb-2" />
                      <p className="text-xs text-gray-600">Scholarship Guide</p>
                    </div>
                    <div className="bg-[#0B3B2C]/5 p-3 rounded-lg">
                      <FaMedal className="text-[#B8860B] mx-auto mb-2" />
                      <p className="text-xs text-gray-600">Expert Guidance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map & Contact Details */}
          <div className="space-y-6">
            {/* Google Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.065912847259!2d76.3764644759257!3d27.69617127618023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d5f3a2103fee5%3A0x94fea453b2465558!2sYaduvanshi%20Academy%20Bansur!5e0!3m2!1sen!2sin!4v1740560712345!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yaduvanshi Academy Location"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-[#0B3B2C] mb-4 pb-2 border-b-2 border-[#B8860B] inline-block">
                Why Choose Yaduvanshi Academy?
              </h3>
              
              <div className="space-y-3 mt-4">
                {[
                  { icon: <FaMedal />, text: "15+ Years of Excellence in Defence Education" },
                  { icon: <FaUsers />, text: "2000+ Students Successfully Trained" },
                  { icon: <FaGraduationCap />, text: "500+ Sainik School Selections" },
                  { icon: <FaCalendarAlt />, text: "100+ NDA Cadets Serving the Nation" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="text-[#B8860B] text-xl">{item.icon}</div>
                    <p className="text-gray-700 text-sm font-medium">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917725945908?text=Hello%20👋%2C%20I'm%20interested%20in%20your%20defence%20coaching%20programs"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105"
              >
                <FaWhatsapp size={20} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Social Media Links */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                Follow Us on Social Media
              </h3>
              <div className="flex justify-center gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition transform hover:scale-110"
                  aria-label="YouTube"
                >
                  <FaYoutube size={20} />
                </a>
                <a
                  href="https://wa.me/917725945908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition transform hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
              <div className="text-center mt-4">
                <p className="text-xs text-gray-500">Stay updated with latest news, events, and success stories</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-12 mt-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#0B3B2C] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border-l-4 border-[#B8860B] bg-gray-50 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                What are your visiting hours?
              </h3>
              <p className="text-gray-600 text-sm">
                You can visit us Monday to Saturday between 7 AM and 8 PM.
                Sunday 8 AM to 2 PM.
              </p>
            </div>
            <div className="p-4 border-l-4 border-[#B8860B] bg-gray-50 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Do I need to book an appointment?
              </h3>
              <p className="text-gray-600 text-sm">
                While walk-ins are welcome, we recommend booking an appointment
                for a dedicated counseling session.
              </p>
            </div>
            <div className="p-4 border-l-4 border-[#B8860B] bg-gray-50 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                How can I get admission?
              </h3>
              <p className="text-gray-600 text-sm">
                Call us directly or visit our campus. Our counselors will guide
                you through the admission process.
              </p>
            </div>
            <div className="p-4 border-l-4 border-[#B8860B] bg-gray-50 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Do you offer online counseling?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes, we offer online counseling via WhatsApp and video calls for
                outstation students.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Banner */}
      <div className="bg-[#0B3B2C] py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white text-lg mb-3">
            📞 Need immediate assistance? Call us now!
          </p>
          <a 
            href="tel:+917725945908"
            className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9E7008] text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            <FaPhone />
            +91 77259 45908
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;