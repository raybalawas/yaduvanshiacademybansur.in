import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const TalentExamAdmitCard = () => {
  const [phone, setPhone] = useState("");
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);

  useEffect(() => {
    const now = new Date();
    // const start = new Date("2026-03-22T00:00:00");
    // const end = new Date("2026-03-27T12:00:00");

    // if (now < start || now > end) {
    //   alert("Admit card download is not available yet.");
    // }
  }, []);
  const validatePhone = (number) => {
    // Indian mobile number: starts with 6-9 and exactly 10 digits
    const phoneRegex = /^[6-9]{1}[0-9]{9}$/;
    return phoneRegex.test(number);
  };

  // Handle phone input change
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // allow only digits
    if (value.length <= 10) {
      setPhone(value);
      setIsValidPhone(validatePhone(value));
    }
  };
  const fetchAdmitCard = async () => {
    if (!isValidPhone) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone Number",
        text: "Please enter a valid 10-digit Indian mobile number",
        confirmButtonColor: "#0B3B2C",
      });
      return;
    }
    try {
      setLoading(true);
      const API_URL =
        import.meta.env.VITE_API_URL || "https://yaduvanshiacademybansur-backend-6xas4w19s-raybalawas-projects.vercel.app/"

        // "https://yaduvanshiacademybansur-backend.vercel.app";
      // https://yaduvanshiacademybansur-backend.vercel.app/api/talent-exam/admit-card
      const res = await axios.post(
        `${API_URL}/api/talent-exam/admit-card`,
        { phone },
        { responseType: "blob" },
      );

      const blob = new Blob([res.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "TalentExamAdmitCard.pdf";
      a.click();

      Swal.fire({
        icon: "success",
        title: "Admit Card Generated!",
        text: "Your admit card has been downloaded successfully.",
        confirmButtonColor: "#0B3B2C",
        timer: 2000,
        showConfirmButton: true,
      }).then(() => {
        window.location.reload();
      });

      setLoading(false);
    } catch (err) {
      console.error("Error fetching admit card:", err);
      if (err.response) {
        // The request was made and the server responded with a status code
        if (err.response.status === 404) {
          Swal.fire({
            icon: "error",
            title: "Not Found",
            text: "No registration found for this phone number. Please check the number and try again.",
            confirmButtonColor: "#0B3B2C",
          });
        } else if (err.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Invalid Request",
            text:
              err.response.data?.message ||
              "Please check your phone number and try again.",
            confirmButtonColor: "#0B3B2C",
          });
        } else if (err.response.status === 500) {
          Swal.fire({
            icon: "error",
            title: "Server Error",
            text: "Something went wrong on our end. Please try again later.",
            confirmButtonColor: "#0B3B2C",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text:
              err.response.data?.message ||
              "Failed to generate admit card. Please try again.",
            confirmButtonColor: "#0B3B2C",
          });
        }
      } else if (err.request) {
        // The request was made but no response was received
        Swal.fire({
          icon: "error",
          title: "Connection Error",
          text: "Unable to connect to server. Please check your internet connection.",
          confirmButtonColor: "#0B3B2C",
        });
      } else {
        // Something happened in setting up the request
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An unexpected error occurred. Please try again.",
          confirmButtonColor: "#0B3B2C",
        });
      }
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-900 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl p-8">
        {/* Title */}
        <div className="text-center border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold text-green-900">
            Yaduvanshi Academy Bansur
          </h1>
          <p className="text-gray-600">Talent Search Examination Admit Card</p>
        </div>

        {/* Input Section */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="w-full md:w-2/3">
            <input
              type="text"
              placeholder="Enter Registered Phone Number"
              value={phone}
              onChange={handlePhoneChange}
              className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-700 transition
                ${
                  phone && !isValidPhone
                    ? "border-red-500 bg-red-50"
                    : isValidPhone
                      ? "border-green-500 bg-green-50"
                      : "border-gray-300"
                }`}
              maxLength="10"
              inputMode="numeric"
              pattern="[6-9]{1}[0-9]{9}"
              required
            />{" "}
            {phone && !isValidPhone && (
              <p className="text-red-500 text-xs mt-1">
                Please enter a valid 10-digit Indian mobile number
              </p>
            )}
          </div>

          <button
            onClick={fetchAdmitCard}
            disabled={loading || !isValidPhone}
            className={`px-6 py-3 rounded-lg font-semibold transition text-white min-w-[180px]
            ${
              loading || !isValidPhone
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-800 hover:bg-green-900 cursor-pointer"
            }`}
          >
            {loading ? (
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
                Generating...
              </span>
            ) : (
              "Download Admit Card"
            )}
          </button>
        </div>

        {/* Phone Number Status */}
        {isValidPhone && (
          <div className="mt-4 text-center text-sm text-green-600 bg-green-50 p-2 rounded-lg">
            ✓ Valid phone number. You can download your admit card.
          </div>
        )}

        {/* Exam Information */}
        <div className="mt-8 grid md:grid-cols-2 gap-6 text-gray-700 text-sm">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Exam Details</h3>

            <p>
              <strong>Date:</strong> 27 March 2026
            </p>
            <p>
              <strong>Time:</strong> 10:00 AM – 12:00 PM
            </p>
            <p>
              <strong>Reporting:</strong> 9:00 AM
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Exam Center</h3>

            <p>
              Yaduvanshi Academy Bansur <br />
              Alwar Road, Rajasthan
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-gray-50 p-5 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">
            Important Instructions
          </h3>

          <ul className="list-disc ml-6 text-sm text-gray-600 space-y-1">
            <li>Bring printed admit card to exam hall.</li>
            <li>Reach exam center 30 minutes early.</li>
            <li>Carry one passport size photo.</li>
            <li>Use blue or black pen only.</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Yaduvanshi Academy Bansur
        </div>
      </div>
    </div>
  );
};

export default TalentExamAdmitCard;
