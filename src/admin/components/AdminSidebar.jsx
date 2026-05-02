import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin-dashboard" },
    { name: "Users", path: "/admin-users" },
    { name: "Result", path: "/admin-upload-result" },
    { name: "Result List", path: "/admin-uploaded-result-list" },
  ];

  return (
    <div className="w-[240px] min-h-screen bg-white border-r border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-[#1f2937] mb-8">
        Yaduvanshi Academy
      </h2>

      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-[#e6fffb] text-[#0f766e] font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default AdminSidebar;
