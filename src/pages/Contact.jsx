import { useState } from "react";
import Swal from "sweetalert2";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
    setFormError("");
    setFieldErrors({});

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        Swal.fire({
          icon: "success",
          title: "Submitted!",
          text: data.message || "Your message has been sent successfully! We'll get back to you soon.",
          confirmButtonColor: "#B8860B",
        });
      } else {
        if (data.error) {
          setFormError(data.error);
        }
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
      }
    } catch (error) {
      setFormError("Server error: " + error.message);
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Something went wrong. Please try again or contact us directly.",
        confirmButtonColor: "#B8860B",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Have questions about our courses? We're here to help you on your journey to becoming a defence officer.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#0B3B2C] mb-6 pb-2 border-b-2 border-[#B8860B] inline-block">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition"
                />
                {fieldErrors.name && (
                  <p className="text-sm text-red-600 mt-1">{fieldErrors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition"
                />
                {fieldErrors.email && (
                  <p className="text-sm text-red-600 mt-1">{fieldErrors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="+91 77259 45908"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition resize-none"
                ></textarea>
                {fieldErrors.message && (
                  <p className="text-sm text-red-600 mt-1">{fieldErrors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#B8860B] hover:bg-[#9E7008] text-white font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                    ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
                  `}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
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

            {/* Contact Details Cards */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-[#0B3B2C] mb-4 pb-2 border-b-2 border-[#B8860B] inline-block">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="bg-[#B8860B]/10 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-[#B8860B] text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600 text-sm">
                      Yaduvanshi Academy Bansur,<br />
                      Alwar Road, Near Kanhaiya Nagar,<br />
                      Bansur, Rajasthan - 301402
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="bg-[#B8860B]/10 p-3 rounded-lg">
                    <FaPhone className="text-[#B8860B] text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600 text-sm">
                      <a href="tel:+917725945908" className="hover:text-[#B8860B] transition">
                        +91 77259 45908
                      </a>
                      <br />
                      <a href="tel:+918949540232" className="hover:text-[#B8860B] transition">
                        +91 89495 40232
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="bg-[#B8860B]/10 p-3 rounded-lg">
                    <FaEnvelope className="text-[#B8860B] text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600 text-sm">
                      <a href="mailto:info@yaduvanshiacademy.com" className="hover:text-[#B8860B] transition">
                        info@yaduvanshiacademy.com
                      </a>
                      <br />
                      <a href="mailto:admissions@yaduvanshiacademy.com" className="hover:text-[#B8860B] transition">
                        admissions@yaduvanshiacademy.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="bg-[#B8860B]/10 p-3 rounded-lg">
                    <FaClock className="text-[#B8860B] text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Working Hours</p>
                    <p className="text-gray-600 text-sm">
                      Monday - Saturday: 7:00 AM - 8:00 PM<br />
                      Sunday: 8:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
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
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition transform hover:scale-110"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition transform hover:scale-110"
                >
                  <FaYoutube size={20} />
                </a>
                <a
                  href="https://wa.me/917725945908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition transform hover:scale-110"
                >
                  <FaWhatsapp size={20} />
                </a>
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
              <h3 className="font-semibold text-gray-800 mb-2">What are your visiting hours?</h3>
              <p className="text-gray-600 text-sm">You can visit us Monday to Saturday between 7 AM and 8 PM. Sunday 8 AM to 2 PM.</p>
            </div>
            <div className="p-4 border-l-4 border-[#B8860B] bg-gray-50 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Do I need to book an appointment?</h3>
              <p className="text-gray-600 text-sm">While walk-ins are welcome, we recommend booking an appointment for a dedicated counseling session.</p>
            </div>
            <div className="p-4 border-l-4 border-[#B8860B] bg-gray-50 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-2">How can I get admission?</h3>
              <p className="text-gray-600 text-sm">Fill the contact form or call us directly. We'll guide you through the admission process.</p>
            </div>
            <div className="p-4 border-l-4 border-[#B8860B] bg-gray-50 rounded-r-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Do you offer online counseling?</h3>
              <p className="text-gray-600 text-sm">Yes, we offer online counseling via WhatsApp and video calls for outstation students.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;