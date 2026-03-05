import React, { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

function TalentExam() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
        errors.phone = 'Please enter a valid phone number';
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'phone' ? value : value
    }));
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fix the errors in the form',
        confirmButtonColor: '#B8860B'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('/api/talent-exam/register', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your message has been sent successfully!',
          confirmButtonColor: '#B8860B'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setFieldErrors({});
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: response.data.message || 'Something went wrong',
          confirmButtonColor: '#B8860B'
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      
      // Handle different error scenarios
      if (error.response) {
        // Server responded with error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message || 'Failed to submit form',
          confirmButtonColor: '#B8860B'
        });
      } else if (error.request) {
        // Request made but no response
        Swal.fire({
          icon: 'error',
          title: 'Connection Error',
          text: 'No response from server. Please try again.',
          confirmButtonColor: '#B8860B'
        });
      } else {
        // Something else happened
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred. Please try again.',
          confirmButtonColor: '#B8860B'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Phone number formatting
  const handlePhoneChange = (e) => {
    let value = e.target.value;
    // Remove all non-digits
    value = value.replace(/\D/g, '');
    
    // Format as Indian phone number (optional)
    if (value.length > 0) {
      if (value.length <= 5) {
        value = value;
      } else if (value.length <= 10) {
        value = value.slice(0, 5) + ' ' + value.slice(5);
      } else {
        value = value.slice(0, 5) + ' ' + value.slice(5, 10);
      }
    }
    
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Talent Search Exam Registration
          </h1>
          <p className="text-lg text-gray-600">
            Fill out the form below to register for the talent search exam
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition ${
                  fieldErrors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                disabled={isSubmitting}
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
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition ${
                  fieldErrors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                disabled={isSubmitting}
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
                onChange={handlePhoneChange}
                type="tel"
                placeholder="+91 77259 45908"
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition ${
                  fieldErrors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                disabled={isSubmitting}
              />
              {fieldErrors.phone && (
                <p className="text-sm text-red-600 mt-1">{fieldErrors.phone}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                Optional: Include country code for international numbers
              </p>
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
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition resize-none ${
                  fieldErrors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                disabled={isSubmitting}
              ></textarea>
              {fieldErrors.message && (
                <p className="text-sm text-red-600 mt-1">{fieldErrors.message}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                Minimum 10 characters
              </p>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#B8860B] hover:bg-[#9E7008] text-white font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                  ${isSubmitting ? "opacity-50 cursor-not-allowed hover:bg-[#B8860B] hover:translate-y-0" : ""}
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

          {/* Additional Information */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Important Information:
            </h3>
            <ul className="text-xs text-gray-600 space-y-2 list-disc list-inside">
              <li>All fields marked with <span className="text-red-500">*</span> are mandatory</li>
              <li>You will receive a confirmation email after successful registration</li>
              <li>Exam details will be sent to your registered email address</li>
              <li>Keep your phone number handy for important updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentExam;