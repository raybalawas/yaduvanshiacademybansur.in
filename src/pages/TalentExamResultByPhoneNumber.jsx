import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch, FaPhone, FaUser, FaUserTie, FaDownload, FaPrint } from 'react-icons/fa';

const TalentExamResultByPhoneNumber = () => {
  const [searchType, setSearchType] = useState('phone');
  const [searchValue, setSearchValue] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  const API_URL = 'https://yaduvanshiacademybansur-backend.vercel.app';

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchValue.trim()) {
      setError('Please enter a value to search');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);
    setSearched(true);

    try {
      let response;

      if (searchType === 'phone') {
        response = await axios.get(`${API_URL}/api/talent-result/check/${searchValue.trim()}`);
        if (response.data.success) {
          setResult(response.data.data);
        } else {
          setError(response.data.message || 'No result found');
        }
      } else {
        // For name and father name search
        response = await axios.get(`${API_URL}/api/talent-result/public/all?search=${encodeURIComponent(searchValue.trim())}&limit=1`);
        if (response.data.success && response.data.data.length > 0) {
          setResult(response.data.data[0]);
        } else {
          setError('No result found for this search. Please check your input.');
        }
      }
    } catch (err) {
      console.error('Search error:', err);
      setError(err.response?.data?.message || 'No result found for this search. Please check your input.');
    } finally {
      setLoading(false);
    }
  };

  const downloadResultPDF = () => {
    if (!result) return;

    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Talent Exam Result - ${result.name}</title>
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
            <span class="value">${result.name}</span>
          </div>
          <div class="info-row">
            <span class="label">Father's Name:</span>
            <span class="value">${result.fName}</span>
          </div>
          <div class="info-row">
            <span class="label">Phone Number:</span>
            <span class="value">${result.phone}</span>
          </div>
          <div class="info-row">
            <span class="label">Class:</span>
            <span class="value">${result.class}</span>
          </div>
          <div class="info-row">
            <span class="label">Roll Number:</span>
            <span class="value">${result.rollNo || '-'}</span>
          </div>
          <div class="info-row">
            <span class="label">Marks Obtained:</span>
            <span class="value">${result.marks} / 100</span>
          </div>
          <div class="info-row">
            <span class="label">Percentage:</span>
            <span class="value">${result.percentage || ((result.marks / 100) * 100).toFixed(2)}%</span>
          </div>
          <div class="info-row">
            <span class="label">Result:</span>
            <span class="value" style="color: ${result.resultStatus === 'pass' ? 'green' : 'red'}; font-weight: bold;">
              ${result.resultStatus === 'pass' ? 'PASS' : 'FAIL'}
            </span>
          </div>
        </div>
        <div class="rank">
          🏆 Rank: ${result.rank || '-'}
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
    if (rank === 1) return '🥇 Gold Medalist - 1st Rank';
    if (rank === 2) return '🥈 Silver Medalist - 2nd Rank';
    if (rank === 3) return '🥉 Bronze Medalist - 3rd Rank';
    return `${rank}${getRankSuffix(rank)} Rank`;
  };

  const getRankSuffix = (rank) => {
    if (rank === 1) return 'st';
    if (rank === 2) return 'nd';
    if (rank === 3) return 'rd';
    return 'th';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] py-16">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Check Your <span className="text-[#B8860B]">Talent Exam Result</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Enter your details below to view your exam results
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] px-6 py-4">
            <h2 className="text-xl font-bold text-white">Find Your Result</h2>
            <p className="text-gray-200 text-sm">Search by Phone Number, Name, or Father's Name</p>
          </div>

          <div className="p-6">
            {/* Search Type Tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => setSearchType('phone')}
                className={`px-5 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
                  searchType === 'phone'
                    ? 'bg-[#B8860B] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <FaPhone /> Phone Number
              </button>
              <button
                onClick={() => setSearchType('name')}
                className={`px-5 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
                  searchType === 'name'
                    ? 'bg-[#B8860B] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <FaUser /> Student Name
              </button>
              <button
                onClick={() => setSearchType('father')}
                className={`px-5 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
                  searchType === 'father'
                    ? 'bg-[#B8860B] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                      searchType === 'phone'
                        ? 'Enter 10-digit mobile number...'
                        : searchType === 'name'
                        ? 'Enter student name...'
                        : 'Enter father\'s name...'
                    }
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
                  />
                  <div className="absolute left-4 top-3.5 text-gray-400">
                    {searchType === 'phone' && <FaPhone />}
                    {searchType === 'name' && <FaUser />}
                    {searchType === 'father' && <FaUserTie />}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-[#B8860B] hover:bg-[#9E7008] text-white rounded-lg font-semibold transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <FaSearch />
                )}
                {loading ? 'Searching...' : 'Search Result'}
              </button>
            </form>

            {/* Tips */}
            <div className="mt-4 text-sm text-gray-500">
              <p>💡 Tip: For best results, enter the exact phone number or name as registered.</p>
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

        {/* Result Display */}
        {result && !loading && (
          <div className="mt-8 bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Rank Banner */}
            <div className="bg-gradient-to-r from-[#B8860B] to-[#0B3B2C] px-6 py-4 text-center">
              <div className="text-white">
                <div className="text-3xl font-bold">{getRankBadge(result.rank)}</div>
                <div className="text-sm mt-1">🎉 Congratulations! 🎉</div>
              </div>
            </div>

            {/* Result Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="inline-block bg-[#0B3B2C]/10 rounded-full px-4 py-1">
                  <span className="text-sm font-semibold text-[#B8860B]">TALENT EXAM RESULT {new Date().getFullYear()}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-600">Student Name:</span>
                  <span className="text-gray-800 font-medium">{result.name}</span>
                </div>
                <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-600">Father's Name:</span>
                  <span className="text-gray-800">{result.fName}</span>
                </div>
                <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-600">Phone Number:</span>
                  <span className="text-gray-800">{result.phone}</span>
                </div>
                <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-600">Class:</span>
                  <span className="px-2 py-1 bg-[#B8860B]/10 text-[#B8860B] rounded-full text-sm font-medium">
                    {result.class}
                  </span>
                </div>
                <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-600">Roll Number:</span>
                  <span className="text-gray-800">{result.rollNo || '-'}</span>
                </div>
                <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-600">Marks Obtained:</span>
                  <span className="text-2xl font-bold text-[#B8860B]">{result.marks} / 100</span>
                </div>
                <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-600">Percentage:</span>
                  <span className="text-lg font-semibold text-gray-800">
                    {result.percentage || ((result.marks / 100) * 100).toFixed(2)}%
                  </span>
                </div>
                <div className="flex flex-wrap justify-between py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-600">Result:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    result.resultStatus === 'pass'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {result.resultStatus === 'pass' ? '✓ PASS' : '✗ FAIL'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <button
                  onClick={downloadResultPDF}
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

            {/* Footer Message */}
            <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-500 border-t">
              <p>This is a system generated result. For any discrepancies, please contact the academy.</p>
              <p className="mt-1">📞 Yaduvanshi Academy Bansur: +91 8949540232 | +91 9460129249</p>
            </div>
          </div>
        )}
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
          <p className="text-white text-lg mb-3">
            Need help with your result?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918949540232"
              className="inline-flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#9E7008] text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              📞 Call Us: +91 8949540232
            </a>
            <a
              href="https://wa.me/918949540232"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              💬 WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentExamResultByPhoneNumber;