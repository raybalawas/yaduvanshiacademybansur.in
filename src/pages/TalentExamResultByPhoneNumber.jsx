import React, { useState } from "react";
import axios from "axios";
import {
  FaSearch,
  FaPhone,
  FaUser,
  FaUserTie,
  FaDownload,
  FaPrint,
} from "react-icons/fa";

const TalentExamResultByPhoneNumber = () => {
  const [searchType, setSearchType] = useState("phone");
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState(null);
  const [multipleResults, setMultipleResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);

  const API_URL = "https://yaduvanshi-backend.onrender.com";

  // Helper function to get total marks based on class
  const getTotalMarksByClass = (className) => {
    const classNum = parseInt(className);
    if (classNum === 3 || classNum === 4 || className === "3rd" || className === "4th") {
      return 50;
    }
    return 60;
  };

  // ✅ FIXED: Always calculate percentage fresh, don't trust database
  const calculatePercentage = (marks, className) => {
    const totalMarks = getTotalMarksByClass(className);
    return ((marks / totalMarks) * 100).toFixed(2);
  };

  const getGrade = (percentage) => {
    const perc = parseFloat(percentage);
    if (perc >= 90) return "A+";
    if (perc >= 80) return "A";
    if (perc >= 70) return "B+";
    if (perc >= 60) return "B";
    if (perc >= 50) return "C";
    if (perc >= 40) return "D";
    return "F";
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchValue.trim()) {
      setError("Please enter a value to search");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);
    setMultipleResults([]);
    setSelectedResult(null);
    setSearched(true);

    try {
      let response;

      if (searchType === "phone") {
        const cleanPhone = searchValue.trim().replace(/\D/g, "");
        if (cleanPhone.length !== 10) {
          setError("Please enter a valid 10-digit phone number");
          setLoading(false);
          return;
        }

        response = await axios.get(
          `${API_URL}/api/talent-result/check/${cleanPhone}`
        );

        if (response.data.success) {
          if (response.data.multiple) {
            setMultipleResults(response.data.data);
            setResult(null);
          } else {
            setResult(response.data.data);
            setMultipleResults([]);
          }
        } else {
          setError(response.data.message || "No result found");
        }
      } else {
        response = await axios.get(
          `${API_URL}/api/talent-result/public/all?search=${encodeURIComponent(searchValue.trim())}&limit=10`
        );
        if (response.data.success && response.data.data.length > 0) {
          if (response.data.data.length === 1) {
            setResult(response.data.data[0]);
          } else {
            setMultipleResults(response.data.data);
          }
        } else {
          setError("No result found for this search. Please check your input.");
        }
      }
    } catch (err) {
      console.error("Search error:", err);
      if (err.code === "ERR_NETWORK") {
        setError("Cannot connect to server. Please try again later.");
      } else if (err.response?.status === 404) {
        setError("No result found for this search. Please check your input.");
      } else {
        setError(
          err.response?.data?.message ||
            "No result found for this search. Please check your input."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const downloadResultPDF = (singleResult) => {
    const resultToPrint = singleResult || result;
    if (!resultToPrint) return;

    // ✅ Calculate fresh for PDF
    const totalMarks = getTotalMarksByClass(resultToPrint.class);
    const percentage = calculatePercentage(resultToPrint.marks, resultToPrint.class);
    const grade = getGrade(percentage);

    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Talent Exam Result - ${resultToPrint.name}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 40px;
            max-width: 800px;
            margin: 0 auto;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 3px solid #B8860B;
            padding-bottom: 20px;
          }
          .logo {
            font-size: 24px;
            font-weight: bold;
            color: #0B3B2C;
          }
          .title {
            font-size: 28px;
            color: #B8860B;
            margin: 10px 0;
          }
          .result-card {
            background: #f5f5f5;
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
          }
          .info-row {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
          }
          .label {
            font-weight: bold;
            color: #333;
          }
          .value {
            color: #555;
          }
          .rank {
            font-size: 24px;
            font-weight: bold;
            color: #B8860B;
            text-align: center;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 12px;
            color: #999;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">YADUVANSHI ACADEMY BANSUR</div>
          <div class="title">Talent Exam Result</div>
        </div>
        <div class="result-card">
          <div class="info-row">
            <span class="label">Student Name:</span>
            <span class="value">${resultToPrint.name}</span>
          </div>
          <div class="info-row">
            <span class="label">Father's Name:</span>
            <span class="value">${resultToPrint.fName}</span>
          </div>
          <div class="info-row">
            <span class="label">Phone Number:</span>
            <span class="value">${resultToPrint.phone}</span>
          </div>
          <div class="info-row">
            <span class="label">Class:</span>
            <span class="value">${resultToPrint.class}</span>
          </div>
          <div class="info-row">
            <span class="label">Roll Number:</span>
            <span class="value">${resultToPrint.rollNo || "-"}</span>
          </div>
          <div class="info-row">
            <span class="label">Marks Obtained:</span>
            <span class="value">${resultToPrint.marks} / ${totalMarks}</span>
          </div>
          <div class="info-row">
            <span class="label">Percentage:</span>
            <span class="value">${percentage}%</span>
          </div>
          <div class="info-row">
            <span class="label">Grade:</span>
            <span class="value">${grade}</span>
          </div>
          <div class="info-row">
            <span class="label">Result:</span>
            <span class="value" style="color: ${parseFloat(percentage) >= 40 ? "green" : "red"}; font-weight: bold;">
              ${parseFloat(percentage) >= 40 ? "PASS" : "FAIL"}
            </span>
          </div>
        </div>
        <div class="rank">
          🏆 Rank: ${resultToPrint.rank || "-"}
        </div>
        <div class="footer">
          <p>This is a system generated result. Valid with official stamp.</p>
          <p>© Yaduvanshi Academy Bansur - Shaping Future Defence Officers</p>
        </div>
      </body>
      </html>
    `;

    const win = window.open();
    win.document.write(printContent);
    win.document.close();
    win.print();
  };

  const printResult = () => {
    window.print();
  };

  const getRankBadge = (rank) => {
    if (!rank) return null;
    if (rank === 1) return "🥇 Gold Medalist - 1st Rank";
    if (rank === 2) return "🥈 Silver Medalist - 2nd Rank";
    if (rank === 3) return "🥉 Bronze Medalist - 3rd Rank";
    return `${rank}${getRankSuffix(rank)} Rank`;
  };

  const getRankSuffix = (rank) => {
    if (rank === 1) return "st";
    if (rank === 2) return "nd";
    if (rank === 3) return "rd";
    return "th";
  };

  // ✅ FIXED: Render result card with fresh calculations
  const renderResultCard = (resultData, isSelected = false) => {
    const totalMarks = getTotalMarksByClass(resultData.class);
    // Force calculate fresh percentage - don't use database percentage
    const percentage = calculatePercentage(resultData.marks, resultData.class);
    const grade = getGrade(percentage);
    const isPass = parseFloat(percentage) >= 40;

    return (
      <div
        className={`bg-white rounded-2xl shadow-xl overflow-hidden mb-6 ${isSelected ? "ring-2 ring-[#B8860B]" : ""}`}
      >
        {resultData.rank && (
          <div className="bg-gradient-to-r from-[#B8860B] to-[#0B3B2C] px-6 py-4 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold">
                {getRankBadge(resultData.rank)}
              </div>
              <div className="text-sm mt-1">🎉 Congratulations! 🎉</div>
            </div>
          </div>
        )}

        <div className="p-6">
          <div className="text-center mb-6">
            <div className="inline-block bg-[#0B3B2C]/10 rounded-full px-4 py-1">
              <span className="text-sm font-semibold text-[#B8860B]">
                {resultData.class} Class - TALENT EXAM RESULT{" "}
                {new Date().getFullYear()}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-600">Student Name:</span>
              <span className="text-gray-800 font-medium">{resultData.name}</span>
            </div>
            <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-600">Father's Name:</span>
              <span className="text-gray-800">{resultData.fName}</span>
            </div>
            <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-600">Phone Number:</span>
              <span className="text-gray-800">{resultData.phone}</span>
            </div>
            <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-600">Class:</span>
              <span className="px-2 py-1 bg-[#B8860B]/10 text-[#B8860B] rounded-full text-sm font-medium">
                {resultData.class}
              </span>
            </div>
            <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-600">Roll Number:</span>
              <span className="text-gray-800">{resultData.rollNo || "-"}</span>
            </div>
            <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-600">Marks Obtained:</span>
              <span className="text-2xl font-bold text-[#B8860B]">
                {resultData.marks} / {totalMarks}
              </span>
            </div>
            <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-600">Percentage:</span>
              <span className="text-lg font-semibold text-gray-800">
                {percentage}%
              </span>
            </div>
            <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-600">Grade:</span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700">
                {grade}
              </span>
            </div>
            <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
              <span className="font-semibold text-gray-600">Result:</span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  isPass ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {isPass ? "✓ PASS" : "✗ FAIL"}
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => downloadResultPDF(resultData)}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition flex items-center gap-2"
            >
              <FaDownload /> Download Result
            </button>
            <button
              onClick={printResult}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition flex items-center gap-2"
            >
              <FaPrint /> Print
            </button>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500 border-t">
          <p>
            This is a system generated result. For any discrepancies, please
            contact the academy.
          </p>
          <p className="mt-1">
            📞 Yaduvanshi Academy Bansur: +91 8949540232 | +91 9460129249
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] py-16">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Check Your{" "}
            <span className="text-[#B8860B]">Talent Exam Result</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Enter your details below to view your exam results
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] px-6 py-4">
            <h2 className="text-xl font-bold text-white">Find Your Result</h2>
            <p className="text-gray-200 text-sm">
              Search by Phone Number, Name, or Father's Name
            </p>
          </div>

          <div className="p-6">
            {/* Search Type Tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => setSearchType("phone")}
                className={`px-5 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
                  searchType === "phone"
                    ? "bg-[#B8860B] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FaPhone /> Phone Number
              </button>
              <button
                onClick={() => setSearchType("name")}
                className={`px-5 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
                  searchType === "name"
                    ? "bg-[#B8860B] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FaUser /> Student Name
              </button>
              <button
                onClick={() => setSearchType("father")}
                className={`px-5 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
                  searchType === "father"
                    ? "bg-[#B8860B] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <FaUserTie /> Father's Name
              </button>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder={
                      searchType === "phone"
                        ? "Enter 10-digit mobile number..."
                        : searchType === "name"
                        ? "Enter student name..."
                        : "Enter father's name..."
                    }
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                  />
                  <div className="absolute left-4 top-3.5 text-gray-400">
                    {searchType === "phone" && <FaPhone />}
                    {searchType === "name" && <FaUser />}
                    {searchType === "father" && <FaUserTie />}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-[#B8860B] hover:bg-[#9E7008] text-white rounded-lg font-semibold transition flex items-center justify-center gap-2 disabled:opacity-50 animate-pulse hover:animate-none"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <FaSearch />
                )}
                {loading ? "Searching..." : "Search Result"}
              </button>
            </form>

            <div className="mt-4 text-sm text-gray-500">
              <p>💡 Tip: For best results, enter the exact phone number or name as registered.</p>
              <p className="mt-1 text-xs text-[#B8860B]">
                📌 Note: 3rd & 4th class: 50 marks total | 5th-8th class: 60 marks total
              </p>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="mt-8 text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B8860B] mx-auto"></div>
            <p className="text-gray-500 mt-4">Searching for your result...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && searched && (
          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <svg className="mx-auto h-12 w-12 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-red-600 font-medium">{error}</p>
            <p className="text-gray-500 text-sm mt-2">
              Please check your details and try again. If you continue to face issues, contact the academy.
            </p>
          </div>
        )}

        {/* Multiple Results Section */}
        {multipleResults.length > 0 && !loading && (
          <div className="mt-8">
            <div className="bg-[#0B3B2C] text-white px-6 py-3 rounded-t-2xl">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FaPhone /> Found {multipleResults.length} result(s) for this phone number
              </h3>
              <p className="text-sm text-gray-200">Click on any result to view details</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {multipleResults.map((res) => (
                <div
                  key={res._id}
                  onClick={() => setSelectedResult(selectedResult?._id === res._id ? null : res)}
                  className="bg-white rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg transition border-2 hover:border-[#B8860B]"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-800">{res.name}</h4>
                      <p className="text-sm text-gray-500">Class: {res.class}</p>
                      <p className="text-sm text-gray-500">Father: {res.fName}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        parseFloat(calculatePercentage(res.marks, res.class)) >= 40
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}>
                        {parseFloat(calculatePercentage(res.marks, res.class)) >= 40 ? "PASS" : "FAIL"}
                      </span>
                      <p className="text-lg font-bold text-[#B8860B] mt-1">{res.marks} marks</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100 text-center">
                    <span className="text-xs text-[#B8860B]">
                      Click to {selectedResult?._id === res._id ? "hide" : "view"} full result
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {selectedResult && renderResultCard(selectedResult, true)}
          </div>
        )}

        {/* Single Result Display */}
        {result && !loading && !multipleResults.length && renderResultCard(result)}
      </div>

      {/* Instructions Section */}
      <div className="bg-white py-12 mt-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#0B3B2C] mb-8">
            How to Check Your Result
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-[#B8860B] font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Select Search Type</h3>
              <p className="text-sm text-gray-600">Choose to search by Phone Number, Student Name, or Father's Name</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-[#B8860B] font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Enter Details</h3>
              <p className="text-sm text-gray-600">Enter the registered phone number or name correctly</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-[#B8860B] font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">View & Download</h3>
              <p className="text-sm text-gray-600">View your result and download/print for future reference</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-[#0B3B2C] py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white text-lg mb-3">Need help with your result?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918949540232" className="inline-flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#9E7008] text-white px-6 py-2 rounded-lg font-semibold transition">
              📞 Call Us: +91 8949540232
            </a>
            <a href="https://wa.me/918949540232" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition">
              💬 WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentExamResultByPhoneNumber;