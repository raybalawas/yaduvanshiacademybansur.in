import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

const AdminUploadedResultList = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [stats, setStats] = useState(null);
  const [exporting, setExporting] = useState(false);

  const itemsPerPage = 20;
  const classes = ['3rd', '4th', '5th', '6th', '7th', '8th'];

  // Fetch results from API (NO AUTHENTICATION)
  const fetchResults = async () => {
    setLoading(true);
    try {
      // Change API_URL to your production URL if needed
      const API_URL = 'https://yaduvanshi-backend.onrender.com';
      // OR for local: const API_URL = 'https://yaduvanshi-backend.onrender.com';

      let url = `${API_URL}/api/talent-result/public/all?page=${currentPage}&limit=${itemsPerPage}`;

      if (selectedClass) {
        url += `&class=${selectedClass}`;
      }

      if (searchTerm) {
        url += `&search=${encodeURIComponent(searchTerm)}`;
      }

      // NO AUTH HEADERS NEEDED
      const response = await axios.get(url);

      if (response.data.success) {
        setResults(response.data.data);
        setTotalPages(response.data.pages);
        setTotalResults(response.data.total);
      }
    } catch (error) {
      console.error('Error fetching results:', error);
      alert('Failed to fetch results: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  // Fetch statistics (NO AUTHENTICATION)
  const fetchStats = async () => {
    try {
      const API_URL = 'https://yaduvanshi-backend.onrender.com';
      // OR for local: const API_URL = 'https://yaduvanshi-backend.onrender.com';

      // NO AUTH HEADERS NEEDED
      const response = await axios.get(`${API_URL}/api/talent-result/public/stats`);

      if (response.data.success) {
        setStats(response.data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  // Export to Excel (NO AUTHENTICATION)
  const exportToExcel = async () => {
    setExporting(true);
    try {
      const API_URL = 'https://yaduvanshi-backend.onrender.com';

      // Fetch all results (without pagination) - NO AUTH
      const response = await axios.get(`${API_URL}/api/talent-result/public/all?limit=5000`);

      if (response.data.success) {
        const exportData = response.data.data.map((item, index) => ({
          'SR.NO': index + 1,
          'NAME': item.name,
          'FATHER NAME': item.fName,
          'CLASS': item.class,
          'ROLL NO': item.rollNo || '-',
          'MOBILE NO': item.phone,
          'MARKS': item.marks,
          'PERCENTAGE': item.percentage || ((item.marks / 100) * 100).toFixed(2),
          'RANK': item.rank || '-',
          'RESULT': item.resultStatus === 'pass' ? 'PASS' : 'FAIL'
        }));

        const ws = XLSX.utils.json_to_sheet(exportData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Talent Exam Results');
        XLSX.writeFile(wb, `talent_exam_results_${new Date().toISOString().split('T')[0]}.xlsx`);
      }
    } catch (error) {
      console.error('Export error:', error);
      alert('Failed to export data');
    } finally {
      setExporting(false);
    }
  };

  useEffect(() => {
    fetchResults();
    fetchStats();
  }, [currentPage, selectedClass]);

  // Handle search with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPage === 1) {
        fetchResults();
      } else {
        setCurrentPage(1);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const getRankBadgeClass = (rank) => {
    if (rank === 1) return 'bg-yellow-500 text-white';
    if (rank === 2) return 'bg-gray-400 text-white';
    if (rank === 3) return 'bg-orange-500 text-white';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="p-6 w-full bg-gray-50 min-h-screen">
      {/* Statistics Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#B8860B]">
            <div className="text-2xl font-bold text-[#0B3B2C]">{stats.totalStudents}</div>
            <div className="text-sm text-gray-500">Total Students</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600">{stats.totalPassed}</div>
            <div className="text-sm text-gray-500">Passed</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
            <div className="text-2xl font-bold text-red-600">{stats.totalFailed}</div>
            <div className="text-sm text-gray-500">Failed</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#B8860B]">
            <div className="text-2xl font-bold">{stats.overallPassPercentage}%</div>
            <div className="text-sm text-gray-500">Pass Percentage</div>
          </div>
        </div>
      )}

      {/* Main Card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Talent Exam Results</h1>
              <p className="text-gray-200 text-sm mt-1">
                View and manage all student results
              </p>
            </div>
            <button
              onClick={exportToExcel}
              disabled={exporting}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {exporting ? 'Exporting...' : 'Export to Excel'}
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, father name, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div>
              <select
                value={selectedClass}
                onChange={(e) => {
                  setSelectedClass(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
              >
                <option value="">All Classes</option>
                {classes.map(cls => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B8860B]"></div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-20">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-500">No results found</p>
            </div>
          ) : (
            <table className="min-w-full bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SR.NO</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Father Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll No</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marks</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {results.map((student, index) => (
                  <tr key={student._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-500">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{student.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{student.fName}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="px-2 py-1 bg-[#B8860B]/10 text-[#B8860B] rounded-full text-xs font-medium">
                        {student.class}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{student.phone}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{student.rollNo || '-'}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-700">{student.marks}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRankBadgeClass(student.rank)}`}>
                        {student.rank || '-'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        student.resultStatus === 'pass'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {student.resultStatus === 'pass' ? 'PASS' : 'FAIL'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-600">
                Showing {results.length} of {totalResults} entries
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  ← Prev
                </button>
                <span className="px-3 py-1 text-sm font-medium text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Class-wise Statistics */}
      {stats?.classWise && stats.classWise.length > 0 && (
        <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] px-6 py-4">
            <h2 className="text-xl font-bold text-white">Class-wise Statistics</h2>
          </div>
          <div className="overflow-x-auto p-4">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Class</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Total</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Passed</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Failed</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Pass %</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Avg Marks</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Highest</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {stats.classWise.map((cls, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm font-medium text-gray-900">{cls.class}</td>
                    <td className="px-4 py-2 text-sm text-gray-600">{cls.totalStudents}</td>
                    <td className="px-4 py-2 text-sm text-green-600">{cls.passed}</td>
                    <td className="px-4 py-2 text-sm text-red-600">{cls.failed}</td>
                    <td className="px-4 py-2 text-sm font-semibold text-[#B8860B]">{cls.passPercentage}%</td>
                    <td className="px-4 py-2 text-sm text-gray-600">{cls.averageMarks}</td>
                    <td className="px-4 py-2 text-sm font-semibold text-gray-700">{cls.highestMarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUploadedResultList;