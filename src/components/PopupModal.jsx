import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PopupModal = () => {
  const [showModal, setShowModal] = useState(false);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 8000); // 8 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
    setFormError("");
    setFieldErrors({});

    try {
      const response = await fetch("https://yaduvanshi-backend.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your message has been sent successfully! We will get back to you shortly.",
        });
        setShowModal(false);
      } else {
        if (data.error) {
          setFormError(data.error);
        }

        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops!",
        //   text:
        //      "Failed to submit the form. please check your input.",
        // });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError(
        "Server error: " + error.message ||
          "Failed to submit the form. Please try again later."
      );
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-1 rounded-2xl shadow-2xl w-[95%] max-w-3xl h-[95vh] overflow-auto">
            <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col justify-between">
              <div className="p-8 overflow-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-indigo-700">
                    🚀 Welcome to Zerfinis Pvt Ltd
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 hover:text-red-500 text-3xl font-bold"
                  >
                    ×
                  </button>
                </div>

                <p className="text-gray-700 mb-6 text-base">
                  🚨 Unlock access to our premium Add Campaings, project
                  consulting, and tailored software solutions. Fill the form
                  below and we’ll get back to you shortly!
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  {fieldErrors.name && (
                    <p className="text-sm text-red-600">{fieldErrors.name}</p>
                  )}
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  {fieldErrors.email && (
                    <p className="text-sm text-red-600">{fieldErrors.email}</p>
                  )}
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    pattern="[0-9]{10}"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  {fieldErrors.phone && (
                    <p className="text-sm text-red-600">{fieldErrors.phone}</p>
                  )}
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  />
                  {fieldErrors.message && (
                    <p className="text-sm text-red-600">
                      {fieldErrors.message}
                    </p>
                  )}
                  <button
                    type="submit"
                    className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition
                      ${
                        isSubmitting
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-indigo-700 hover:shadow-lg"
                      }
                      `}
                  >
                    {isSubmitting ? " 📩 Sending..." : " 📩 Send Inquiry"}
                  </button>
                </form>
              </div>

              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-3 text-sm font-medium rounded-b-xl">
                🔥 13+ Business Ownrs trust Zerfinis Pvt Ltd. Contact the
                revolution today!
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupModal;
