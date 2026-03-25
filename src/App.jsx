import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";
import TalentExamQR from "./pages/TalentExam";

import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminProtectedRoute from "./admin/components/AdminProtectedRoute.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC WEBSITE */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/telent-search-exam" element={<TalentExamQR />} />
        </Route>

        {/* ADMIN PANEL */}
        <Route element={<AdminLayout />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-users" element={<AdminUsers />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;