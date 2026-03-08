import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import TalentExamAdmitCard from "./TalentExamAdmitCard";
import { QRCodeCanvas } from "qrcode.react";
import {
  Download,
  Copy,
  Check,
  Smartphone,
  Award,
  Clock,
  Users,
  Mail,
  Phone,
  MapPin,
  User,
  GraduationCap,
  UserCircle,
} from "lucide-react";

function TalentExam() {
  const [formData, setFormData] = useState({
    name: "",
    fName: "",
    phone: "",
    class: "",
    address: "",
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("form");
  const qrRef = useRef(null);

  const [formUrl, setFormUrl] = useState("");

  useEffect(() => {
    const origin = window.location.origin;
    setFormUrl(`${origin}/telent-search-exam`);
  }, []);

  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Full name is required";
    } else if (formData.name.trim().length < 3) {
      errors.name = "Name must be at least 3 characters";
    }

    // Father's Name validation
    if (!formData.fName.trim()) {
      errors.fName = "Father's name is required";
    } else if (formData.fName.trim().length < 3) {
      errors.fName = "Father's name must be at least 3 characters";
    }

    // Phone validation (required now)
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else {
      const phoneRegex =
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
        errors.phone = "Please enter a valid phone number";
      }
    }

    // Class validation
    if (!formData.class) {
      errors.class = "Please select your class";
    }

    // Address validation
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    } else if (formData.address.trim().length < 8) {
      errors.address = "Address must be at least 8 characters";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");

    // Format as Indian phone number
    if (value.length > 0) {
      if (value.length <= 5) {
        value = value;
      } else if (value.length <= 10) {
        value = value.slice(0, 5) + " " + value.slice(5);
      } else {
        value = value.slice(0, 5) + " " + value.slice(5, 10);
      }
    }

    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));

    if (fieldErrors.phone) {
      setFieldErrors((prev) => ({
        ...prev,
        phone: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fix the errors in the form",
        confirmButtonColor: "#0B3B2C",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const API_URL =
        import.meta.env.VITE_API_URL ||
        "https://yaduvanshiacademybansur-backend.vercel.app";

      const response = await axios.post(
        `${API_URL}/api/talent-exam/register`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false, // Set to false if you're not using cookies/auth
        },
      );

      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your registration has been submitted successfully!",
          confirmButtonColor: "#0B3B2C",
        });

        setFormData({
          name: "",
          fName: "",
          phone: "",
          class: "",
          address: "",
        });
        setFieldErrors({});
      }
    } catch (error) {
      console.error("Submission error:", error);

      let errorMessage = "An error occurred. Please try again.";

      if (error.response) {
        // The server responded with an error
        errorMessage = error.response.data.message || "Failed to submit form";
        console.error("Response status:", error.response.status);
        console.error("Response data:", error.response.data);

        // Show specific error
        Swal.fire({
          icon: "error",
          title: `Error ${error.response.status}`,
          text: errorMessage,
          confirmButtonColor: "#0B3B2C",
        });
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage =
          "No response from server. Please check if backend is running.";
        Swal.fire({
          icon: "error",
          title: "Connection Error",
          text: errorMessage,
          confirmButtonColor: "#0B3B2C",
        });
      } else {
        // Something happened in setting up the request
        errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Error",
          text: errorMessage,
          confirmButtonColor: "#0B3B2C",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "talent-exam-qr.png";
      link.href = url;
      link.click();

      Swal.fire({
        icon: "success",
        title: "Downloaded!",
        text: "QR code has been downloaded successfully",
        timer: 2000,
        showConfirmButton: false,
        background: "#fff",
      });
    }
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(formUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    Swal.fire({
      icon: "success",
      title: "Copied!",
      text: "URL copied to clipboard",
      timer: 1500,
      showConfirmButton: false,
      background: "#fff",
    });
  };

  const shareQR = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Talent Search Exam Registration",
          text: "Fill out the talent search exam registration form",
          url: formUrl,
        })
        .catch(console.error);
    } else {
      copyUrl();
    }
  };

  /*Admit card logic*/
  const now = new Date();

  const startDate = new Date("2026-03-25T00:00:00");
  const endDate = new Date("2026-03-27T12:00:00");

  const isAdmitCardAvailable = now >= startDate && now <= endDate;

  /*Admit card logic*/
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section with Dark Green Theme */}
      <div className="bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Award className="w-16 h-16 text-green-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Talent Search Exam 2026
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Unlock your potential and showcase your talents on a grand
              platform
            </p>

            {/* Stats Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <Clock className="w-6 h-6 mx-auto mb-2 text-green-200" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-green-200">Registration Open</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <Users className="w-6 h-6 mx-auto mb-2 text-green-200" />
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm text-green-200">Participants</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                <Award className="w-6 h-6 mx-auto mb-2 text-green-200" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-green-200">Prizes</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
            <button
              onClick={() => setActiveTab("form")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === "form"
                  ? "bg-[#0B3B2C] text-white"
                  : "text-gray-600 hover:text-[#0B3B2C]"
              }`}
            >
              Registration Form
            </button>
            {isAdmitCardAvailable ? (
              <button
                onClick={() => setActiveTab("admit")}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === "admit"
                    ? "bg-[#0B3B2C] text-white"
                    : "text-gray-600 hover:text-[#0B3B2C]"
                }`}
              >
                Admit Card
              </button>
            ) : null}
            <button
              onClick={() => setActiveTab("qr")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === "qr"
                  ? "bg-[#0B3B2C] text-white"
                  : "text-gray-600 hover:text-[#0B3B2C]"
              }`}
            >
              QR Code Access
            </button>
          </div>
        </div>

        {/* Form Tab */}
        {activeTab === "form" && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-t-4 border-[#0B3B2C]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <UserCircle className="w-6 h-6 text-[#0B3B2C]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Registration Form
                    </h2>
                    <p className="text-sm text-gray-600">
                      Fill in your details below
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="name"
                    >
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-[#0B3B2C]" />
                        Full Name <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter your full name"
                      className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B3B2C] focus:border-transparent transition ${
                        fieldErrors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      disabled={isSubmitting}
                    />
                    {fieldErrors.name && (
                      <p className="text-sm text-red-600 mt-1">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Father's Name Field */}
                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="fName"
                    >
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-[#0B3B2C]" />
                        Father's Name <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      id="fName"
                      name="fName"
                      value={formData.fName}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter your father's name"
                      className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B3B2C] focus:border-transparent transition ${
                        fieldErrors.fName ? "border-red-500" : "border-gray-300"
                      }`}
                      disabled={isSubmitting}
                    />
                    {fieldErrors.fName && (
                      <p className="text-sm text-red-600 mt-1">
                        {fieldErrors.fName}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="phone"
                    >
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#0B3B2C]" />
                        Phone Number <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      type="tel"
                      placeholder="+91 77259 45908"
                      className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B3B2C] focus:border-transparent transition ${
                        fieldErrors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      disabled={isSubmitting}
                    />
                    {fieldErrors.phone && (
                      <p className="text-sm text-red-600 mt-1">
                        {fieldErrors.phone}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      Include country code for international numbers
                    </p>
                  </div>

                  {/* Class Field - Dropdown */}
                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="class"
                    >
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-[#0B3B2C]" />
                        Class <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <select
                      id="class"
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B3B2C] focus:border-transparent transition appearance-none bg-white ${
                        fieldErrors.class ? "border-red-500" : "border-gray-300"
                      }`}
                      disabled={isSubmitting}
                    >
                      <option value="">Select Your Class</option>
                      <option value="3rd">3rd Class</option>
                      <option value="4th">4th Class</option>
                      <option value="5th">5th Class</option>
                      <option value="6th">6th Class</option>
                      <option value="7th">7th Class</option>
                      <option value="8th">8th Class</option>
                    </select>
                    {fieldErrors.class && (
                      <p className="text-sm text-red-600 mt-1">
                        {fieldErrors.class}
                      </p>
                    )}
                  </div>

                  {/* Address Field */}
                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="address"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#0B3B2C]" />
                        Your Address <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Enter your full address (e.g., Dhani Tikwali, Village Balawas, Post Ratanpura, Teh. Bansur, Dist. Alwar, Rajasthan)"
                      className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B3B2C] focus:border-transparent transition resize-none ${
                        fieldErrors.address
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      disabled={isSubmitting}
                    ></textarea>
                    {fieldErrors.address && (
                      <p className="text-sm text-red-600 mt-1">
                        {fieldErrors.address}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      Minimum 8 characters
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] hover:from-[#1a5a3a] hover:to-[#0B3B2C] text-white font-semibold px-8 py-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                        ${isSubmitting ? "opacity-50 cursor-not-allowed hover:translate-y-0" : ""}
                      `}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        "Register Now"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-[#0B3B2C] sticky top-4">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#0B3B2C]" />
                  Important Information
                </h3>

                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#0B3B2C] mb-2">
                      📅 Exam Schedule
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Registration closes: March 25, 2026</li>
                      <li>• Exam Date: March 27, 2026</li>
                      <li>• Results: May 03, 2026</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#0B3B2C] mb-2">
                      🎯 Categories
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Academic Excellence</li>
                      <li>• Performing Arts</li>
                      <li>• Creative Writing</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <a href="https://www.google.com/maps?ll=27.696171,76.379039&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=10736199241078035800">
                      <h4 className="font-semibold text-[#0B3B2C] mb-2">
                        📍 Exam Center
                      </h4>
                      <p className="text-sm text-gray-600">
                        Yaduvanshi Academy, Bansur
                      </p>
                    </a>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500">
                      <span className="text-red-500">*</span> All fields marked
                      are mandatory
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "admit" && <TalentExamAdmitCard />}
        {/* QR Code Tab */}
        {activeTab === "qr" && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* QR Code Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#0B3B2C]">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Quick Access QR Code
                </h2>
                <p className="text-gray-600">
                  Scan to open registration form on your phone
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div
                  ref={qrRef}
                  className="bg-white p-6 rounded-xl border-2 border-gray-200 mb-6 shadow-lg"
                >
                  {formUrl && (
                    <QRCodeCanvas
                      value={formUrl}
                      size={280}
                      bgColor="#ffffff"
                      fgColor="#0B3B2C"
                      level="H"
                      includeMargin={true}
                    />
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Scan to Register
                </h3>
                <p className="text-sm text-gray-500 text-center mb-6">
                  Use your phone's camera or QR scanner app
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={downloadQR}
                    className="flex items-center gap-2 bg-[#0B3B2C] hover:bg-[#1a5a3a] text-white px-6 py-3 rounded-lg transition shadow-md hover:shadow-lg"
                  >
                    <Download size={18} />
                    Download QR
                  </button>

                  <button
                    onClick={copyUrl}
                    className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition shadow-md hover:shadow-lg"
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                    {copied ? "Copied!" : "Copy URL"}
                  </button>

                  <button
                    onClick={shareQR}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition shadow-md hover:shadow-lg lg:hidden"
                  >
                    <Smartphone size={18} />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* QR Instructions */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#0B3B2C]">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Smartphone className="w-6 h-6 text-[#0B3B2C]" />
                How to Use QR Code
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#0B3B2C] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Open Camera App
                    </h3>
                    <p className="text-sm text-gray-600">
                      Open your phone's camera or any QR scanner app
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#0B3B2C] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Scan the Code
                    </h3>
                    <p className="text-sm text-gray-600">
                      Point your camera at the QR code on the left
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#0B3B2C] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Tap Notification
                    </h3>
                    <p className="text-sm text-gray-600">
                      Tap the notification that appears to open the form
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#0B3B2C] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Fill & Submit
                    </h3>
                    <p className="text-sm text-gray-600">
                      Complete the registration form and submit
                    </p>
                  </div>
                </div>
              </div>

              {/* URL Display */}
              <div className="mt-8 bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Direct URL:</p>
                <div className="flex items-center gap-2">
                  <code className="bg-white px-3 py-2 rounded-lg text-xs text-gray-800 border border-gray-200 flex-1 break-all">
                    {formUrl}
                  </code>
                  <button
                    onClick={copyUrl}
                    className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition flex-shrink-0"
                    title="Copy URL"
                  >
                    {copied ? (
                      <Check size={16} className="text-green-600" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Download the QR code to print or share with candidates
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-600">
            © 2026 Talent Search Exam. All rights reserved. |
            <span className="text-[#0B3B2C] ml-1">
              Powered by Yaduvanshi Academy
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default TalentExam;
