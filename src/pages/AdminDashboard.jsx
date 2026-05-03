import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    talentExamStudents: 0,
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardStats = async () => {
      const token = localStorage.getItem("adminToken");

      try {
        const res = await axios.get("https://yaduvanshi-backend.onrender.com//api/admin/dashboard-stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStats({
          totalUsers: res.data.totalUsers || 0,
          talentExamStudents: res.data.talentExamStudents || 0,
        });
      } catch (err) {
        console.error("Dashboard error:", err.response?.data || err.message);
        localStorage.removeItem("adminToken");
        // navigate("/admin-login");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1f2937]">Dashboard</h1>
            <p className="text-gray-500 mt-1">Admin overview</p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-[#0f766e] hover:bg-[#115e59] text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-2">Total Users</p>
            <h2 className="text-3xl font-bold text-[#111827]">
              {stats.totalUsers}
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-2">
              Talent Search Exam Students
            </p>
            <h2 className="text-3xl font-bold text-[#111827]">
              {stats.talentExamStudents}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;