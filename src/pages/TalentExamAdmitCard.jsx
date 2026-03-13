import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const TalentExamAdmitCard = () => {
  const [phone, setPhone] = useState("");
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const now = new Date();
    const start = new Date("2026-03-25T00:00:00");
    const end = new Date("2026-03-27T12:00:00");

    if (now < start || now > end) {
      alert("Admit card download is not available yet.");
    }
  }, []);

  const fetchAdmitCard = async () => {
    try {
      setLoading(true);
      const API_URL =
        import.meta.env.VITE_API_URL ||
        "https://yaduvanshiacademybansur-backend.vercel.app";
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

      setLoading(false);
    } catch (err) {
      Swal.error("No registration found for this number.");
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
          <input
            type="text"
            placeholder="Enter Registered Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-green-700"
          />

          <button
            onClick={fetchAdmitCard}
            disabled={loading}
            className={`px-6 py-3 rounded-lg font-semibold transition text-white
            ${
            loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-800 hover:bg-green-900 cursor-pointer"
            }`}
          >
            {loading ? "Generating..." : "Download Admit Card"}
          </button>
        </div>

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
