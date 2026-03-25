import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaClipboardList,
  FaFileAlt,
  FaCalendarAlt,
  FaRupeeSign,
  FaCheckCircle,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaUserGraduate,
  FaMedal,
  FaDownload,
  FaPrint,
  FaShare,
} from "react-icons/fa";

const AdmissionPage = () => {
  const [activeTab, setActiveTab] = useState("process");
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    course: "",
    class: "",
    board: "",
    message: "",
  });

  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Show success message
    alert("Application submitted successfully! We'll contact you soon.");
    setShowForm(false);
  };

  const courses = [
    {
      id: "sainik6",
      name: "Sainik School Class 6",
      duration: "1 Year",
      fee: "45,000",
    },
    {
      id: "sainik9",
      name: "Sainik School Class 9",
      duration: "1 Year",
      fee: "48,000",
    },
    {
      id: "military",
      name: "Military School (RMS)",
      duration: "9 Months",
      fee: "40,000",
    },
    { id: "rimc", name: "RIMC Coaching", duration: "6 Months", fee: "85,000" },
    {
      id: "nda",
      name: "NDA Foundation",
      duration: "2-3 Years",
      fee: "65,000/yr",
    },
    {
      id: "ssb",
      name: "SSB Interview Prep",
      duration: "3 Months",
      fee: "35,000",
    },
    {
      id: "physical",
      name: "Physical Training",
      duration: "6 Months",
      fee: "25,000",
    },
  ];

  const admissionSteps = [
    {
      step: 1,
      title: "Registration",
      description: "Fill the online registration form with basic details",
      icon: <FaClipboardList className="text-3xl" />,
    },
    {
      step: 2,
      title: "Entrance Test",
      description: "Appear for our scholarship & eligibility test",
      icon: <FaFileAlt className="text-3xl" />,
    },
    {
      step: 3,
      title: "Counseling",
      description: "Meet our academic counselors for course selection",
      icon: <FaUserGraduate className="text-3xl" />,
    },
    {
      step: 4,
      title: "Fee Payment",
      description: "Complete the admission by paying the fees",
      icon: <FaRupeeSign className="text-3xl" />,
    },
    {
      step: 5,
      title: "Orientation",
      description: "Attend the orientation program with parents",
      icon: <FaGraduationCap className="text-3xl" />,
    },
  ];

  const documents = [
    { name: "Birth Certificate", required: true },
    { name: "Previous Class Marksheet", required: true },
    { name: "School Leaving Certificate", required: true },
    { name: "Passport Size Photos (4)", required: true },
    { name: "Aadhar Card (Student)", required: true },
    { name: "Aadhar Card (Parents)", required: true },
    { name: "Caste Certificate (if applicable)", required: false },
    { name: "Income Certificate (if applicable)", required: false },
  ];

  const feeStructure = [
    {
      course: "Sainik School Class 6",
      tuition: "35,000",
      examFee: "5,000",
      material: "5,000",
      total: "45,000",
    },
    {
      course: "Sainik School Class 9",
      tuition: "38,000",
      examFee: "5,000",
      material: "5,000",
      total: "48,000",
    },
    {
      course: "Military School (RMS)",
      tuition: "32,000",
      examFee: "4,000",
      material: "4,000",
      total: "40,000",
    },
    {
      course: "RIMC Coaching",
      tuition: "70,000",
      examFee: "8,000",
      material: "7,000",
      total: "85,000",
    },
  ];

  const importantDates = [
    { event: "Admission Start Date", date: "1 November 2024" },
    { event: "Entrance Test Date", date: "15 December 2024" },
    { event: "Result Declaration", date: "25 December 2024" },
    { event: "Counseling & Admission", date: "5-10 January 2025" },
    { event: "Classes Commence", date: "1 February 2025" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#B8860B] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              ADMISSIONS OPEN {new Date().getFullYear() - 1}-
              {new Date().getFullYear().toString().slice(-2)}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join the Ranks of{" "}
              <span className="text-[#B8860B]">Future Officers</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Take the first step towards a prestigious career in the Indian
              Armed Forces
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quick Info Strip */}
      <div className="bg-white shadow-md py-4 border-b-2 border-[#B8860B]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-[#B8860B] font-bold text-xl">📅</div>
            <div className="text-sm font-semibold text-gray-800">Last Date</div>
            <div className="text-xs text-gray-600">coming soon</div>
          </div>
          <div className="text-center">
            <div className="text-[#B8860B] font-bold text-xl">🎯</div>
            <div className="text-sm font-semibold text-gray-800">Seats</div>
            <div className="text-xs text-gray-600">150 Only</div>
          </div>
          <div className="text-center">
            <div className="text-[#B8860B] font-bold text-xl">⏰</div>
            <div className="text-sm font-semibold text-gray-800">Test Date</div>
            <div className="text-xs text-gray-600">coming soon</div>
          </div>
          <div className="text-center">
            <div className="text-[#B8860B] font-bold text-xl">💺</div>
            <div className="text-sm font-semibold text-gray-800">Apply Now</div>
            <div className="text-xs text-gray-600">Online/Offline</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: "process", label: "Admission Process", icon: "📋" },
            // { id: "dates", label: "Important Dates", icon: "📅" },
            // { id: "fees", label: "Fee Structure", icon: "💰" },
            { id: "docs", label: "Documents Required", icon: "📄" },
            { id: "faq", label: "FAQ", icon: "❓" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-[#B8860B] text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-[#B8860B] hover:text-white shadow"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Admission Process Tab */}
          {activeTab === "process" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-[#0B3B2C] mb-6">
                Admission Process {new Date().getFullYear() - 1}-
                {new Date().getFullYear().toString().slice(-2)}
              </h2>

              {/* Steps */}
              <div className="grid md:grid-cols-5 gap-4">
                {admissionSteps.map((step) => (
                  <div key={step.step} className="relative">
                    <div className="bg-[#0B3B2C] text-white rounded-lg p-4 text-center h-full hover:shadow-xl transition transform hover:-translate-y-1">
                      <div className="text-4xl mb-2 text-[#B8860B]">
                        {step.icon}
                      </div>
                      <div className="text-2xl font-bold text-[#B8860B] mb-2">
                        {step.step}
                      </div>
                      <h3 className="font-bold mb-2">{step.title}</h3>
                      <p className="text-xs text-gray-300">
                        {step.description}
                      </p>
                    </div>
                    {step.step < 5 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 text-2xl text-[#B8860B]">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Online Registration Button */}
              {/* <div className="text-center mt-8">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-[#B8860B] hover:bg-[#9E7008] text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-xl"
                >
                  Apply Online Now
                </button>
              </div> */}
            </motion.div>
          )}

          {/* Important Dates Tab */}
          {activeTab === "dates" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-3xl font-bold text-[#0B3B2C] mb-6">
                Important Dates
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {importantDates.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="bg-[#B8860B] text-white p-3 rounded-full">
                        <FaCalendarAlt />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.event}</p>
                        <p className="font-bold text-lg">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#0B3B2C] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <FaClock className="text-[#B8860B]" />
                    Quick Reminder
                  </h3>
                  <p className="mb-4">
                    Register before 31st December 2024 to get:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#B8860B]" />
                      Free study material worth ₹2000
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#B8860B]" />
                      10% scholarship on early registration
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#B8860B]" />
                      Free demo classes
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* Fee Structure Tab */}
          {activeTab === "fees" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-3xl font-bold text-[#0B3B2C] mb-6">
                Fee Structure (Annual)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0B3B2C] text-white">
                      <th className="p-3 text-left">Course</th>
                      <th className="p-3 text-left">Tuition Fee</th>
                      <th className="p-3 text-left">Exam Fee</th>
                      <th className="p-3 text-left">Material</th>
                      <th className="p-3 text-left">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((fee, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-semibold">{fee.course}</td>
                        <td className="p-3">₹{fee.tuition}</td>
                        <td className="p-3">₹{fee.examFee}</td>
                        <td className="p-3">₹{fee.material}</td>
                        <td className="p-3 font-bold text-[#B8860B]">
                          ₹{fee.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  * Hostel and mess charges extra. Scholarship available for
                  meritorious students.
                </p>
              </div>
            </motion.div>
          )}

          {/* Documents Required Tab */}
          {activeTab === "docs" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-3xl font-bold text-[#0B3B2C] mb-6">
                Documents Required
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 border rounded-lg"
                  >
                    <div
                      className={`p-2 rounded-full ${doc.required ? "bg-green-100" : "bg-gray-100"}`}
                    >
                      <FaCheckCircle
                        className={
                          doc.required ? "text-green-600" : "text-gray-400"
                        }
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{doc.name}</p>
                      <p className="text-xs text-gray-500">
                        {doc.required ? "Mandatory" : "If applicable"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FaDownload className="text-[#B8860B]" />
                  Download the document checklist for offline submission
                </p>
              </div> */}
            </motion.div>
          )}

          {/* FAQ Tab */}
          {activeTab === "faq" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-3xl font-bold text-[#0B3B2C] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What is the minimum age for Sainik School coaching?",
                    a: "For Class 6 coaching, students should be 10-12 years old. For Class 9, students should be 13-15 years old.",
                  },
                  {
                    q: "Is there any entrance test for admission?",
                    a: "Yes, we conduct a scholarship cum entrance test to assess the student's aptitude.",
                  },
                  {
                    q: "Do you provide hostel facility?",
                    a: "Yes, we have separate hostel facilities for boys and girls with 24/7 security and mess facility.",
                  },
                  {
                    q: "What is the batch size?",
                    a: "We maintain small batch sizes of 25-30 students to ensure personalized attention.",
                  },
                  {
                    q: "Is there any scholarship available?",
                    a: "Yes, scholarships are available for meritorious students and wards of defence personnel.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 hover:shadow-md transition"
                  >
                    <p className="font-bold text-[#0B3B2C] mb-2">
                      Q{index + 1}: {faq.q}
                    </p>
                    <p className="text-gray-600 pl-4 border-l-2 border-[#B8860B]">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
            <div className="bg-[#0B3B2C] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Call Us</h3>
            <p className="text-[#B8860B] font-semibold">+91 7725945908</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
            <div className="bg-[#0B3B2C] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaWhatsapp size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
            <p className="text-[#B8860B] font-semibold">+91 7725945908</p>
            <p className="text-sm text-gray-500">Reply within 5 minutes</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition">
            <div className="bg-[#0B3B2C] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-[#B8860B] font-semibold">
              admissions@yaduvanshiacademy.com
            </p>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-[#0B3B2C] text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Online Application Form</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-white hover:text-[#B8860B] text-2xl"
                >
                  &times;
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Student's Full Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                    placeholder="Enter student name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Parent's Name *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                    placeholder="Enter parent name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                    placeholder="Enter email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                    placeholder="10 digit mobile number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Course *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Class *
                  </label>
                  <input
                    type="text"
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                    placeholder="e.g., Class 5, Class 8"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    School Board
                  </label>
                  <select
                    name="board"
                    value={formData.board}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                  >
                    <option value="">Select board</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="RBSE">RBSE</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                    placeholder="Any specific requirements or questions?"
                  ></textarea>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                  <FaCheckCircle className="text-green-600" />
                  By submitting this form, you agree to our terms and
                  conditions.
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#B8860B] hover:bg-[#9E7008] text-white py-3 rounded-lg font-semibold transition"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Map Section */}
      <div className="bg-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0B3B2C] mb-6 text-center">
            Visit Our Campus
          </h2>
          
            {/* Add Google Map here */}
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
          <div className="mt-4 text-center">
            <p className="flex items-center justify-center gap-2 text-gray-600">
              <FaMapMarkerAlt className="text-[#B8860B]" />
              P.no 148, Laxman Colony, Alwar Road, Near Kanhaiya Nagar, Jaipur -
              301402
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
