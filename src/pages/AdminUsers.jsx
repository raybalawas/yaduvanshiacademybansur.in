import { useEffect, useState } from "react";
import axios from "axios";

const AdminUsers = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });

  const studentsPerPage = 10;

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(
        "https://yaduvanshiacademybansur-backend.vercel.app/api/talent-exam/registrations"
      );

      if (res.data.success) {
        setStudents(res.data.data);
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const generateAdmitCard = async (phone) => {
    try {
      const res = await axios.post(
        "https://yaduvanshiacademybansur-backend.vercel.app/api/talent-exam/admit-card",
        { phone },
        {
          responseType: "blob",
        }
      );

      const file = new Blob([res.data], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      const newWindow = window.open(fileURL);
      
      newWindow.onload = () => {
        newWindow.print();
      };
    } catch (error) {
      console.error("Admit card error:", error);
      alert("Failed to generate admit card. Please try again.");
    }
  };

  // Sorting function
  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
    setCurrentPage(1); // Reset to first page when sorting
  };

  // Get sorted students
  const getSortedStudents = (studentsList) => {
    if (!sortConfig.key) return studentsList;

    return [...studentsList].sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      // Handle numeric values
      if (sortConfig.key === "phone" || sortConfig.key === "class") {
        aValue = String(aValue);
        bValue = String(bValue);
      }

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  // Filter students by search term
  const filteredStudents = students.filter((student) =>
    student.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort filtered students
  const sortedStudents = getSortedStudents(filteredStudents);

  // Pagination logic
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = sortedStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const totalPages = Math.ceil(sortedStudents.length / studentsPerPage);

  // Generate page numbers to display (max 5 at a time)
  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    const pageNumbers = [];
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
      
      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) pageNumbers.push("...");
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return "↕️";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  return (
    <div className="p-6 w-full bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] px-6 py-4">
          <h1 className="text-2xl font-bold text-white">
            Talent Search Exam Students
          </h1>
          <p className="text-gray-200 text-sm mt-1">
            Manage and generate admit cards for registered students
          </p>
        </div>

        {/* Search Box */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by student name..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="text-sm text-gray-600">
              Total Registrations:{" "}
              <span className="font-semibold text-[#B8860B]">
                {filteredStudents.length}
              </span>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B8860B]"></div>
          </div>
        ) : (
          <>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th
                      className="px-4 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition"
                      onClick={() => handleSort("name")}
                    >
                      Name{" "}
                      <span className="text-xs text-gray-500">
                        {getSortIcon("name")}
                      </span>
                    </th>
                    <th
                      className="px-4 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition"
                      onClick={() => handleSort("fName")}
                    >
                      Father{" "}
                      <span className="text-xs text-gray-500">
                        {getSortIcon("fName")}
                      </span>
                    </th>
                    <th
                      className="px-4 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition"
                      onClick={() => handleSort("phone")}
                    >
                      Phone{" "}
                      <span className="text-xs text-gray-500">
                        {getSortIcon("phone")}
                      </span>
                    </th>
                    <th
                      className="px-4 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition"
                      onClick={() => handleSort("class")}
                    >
                      Class{" "}
                      <span className="text-xs text-gray-500">
                        {getSortIcon("class")}
                      </span>
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentStudents.length > 0 ? (
                    currentStudents.map((student, index) => (
                      <tr
                        key={student._id}
                        className={`hover:bg-gray-50 transition ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="px-4 py-3 text-sm text-gray-800 font-medium">
                          {student.name}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {student.fName}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {student.phone}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          <span className="px-2 py-1 bg-[#B8860B]/10 text-[#B8860B] rounded-full text-xs font-medium">
                            {student.class}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => generateAdmitCard(student.phone)}
                            className="bg-[#B8860B] hover:bg-[#9E7008] text-white px-4 py-1.5 rounded-md text-sm font-medium transition transform hover:scale-105"
                          >
                            Admit Card
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-4 py-12 text-center text-gray-500">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400 mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        No students found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-gray-600">
                    Showing{" "}
                    <span className="font-semibold">
                      {indexOfFirstStudent + 1}
                    </span>{" "}
                    to{" "}
                    <span className="font-semibold">
                      {Math.min(indexOfLastStudent, sortedStudents.length)}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold">{sortedStudents.length}</span>{" "}
                    entries
                  </div>

                  <div className="flex items-center gap-2 flex-wrap justify-center">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(currentPage - 1)}
                      className="px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                      ← Prev
                    </button>

                    {getPageNumbers().map((page, index) => (
                      <button
                        key={index}
                        onClick={() => typeof page === "number" && setCurrentPage(page)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
                          currentPage === page
                            ? "bg-[#B8860B] text-white shadow-md"
                            : page === "..."
                            ? "cursor-default bg-transparent"
                            : "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
                        }`}
                        disabled={page === "..."}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(currentPage + 1)}
                      className="px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Results Summary */}
            {filteredStudents.length > 0 && (
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-xs text-gray-500">
                <p>
                  Showing {currentStudents.length} of {filteredStudents.length}{" "}
                  registrations
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminUsers;
