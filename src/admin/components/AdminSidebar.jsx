import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-[250px] h-screen bg-gray-900 text-white p-6">

      <h2 className="text-xl font-bold mb-8">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-4">

        <Link to="/admin-dashboard">Dashboard</Link>

        <Link to="/admin-users">Users</Link>

        <Link to="/admin-courses">Courses</Link>

        <Link to="/admin-gallery">Gallery</Link>

      </nav>

    </div>
  );
};

export default AdminSidebar;