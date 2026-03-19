import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminRegister = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/admin/register", {
        email,
        password,
      });

      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin-login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b4f3f] via-[#2f6b59] to-[#4b7f68] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid md:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
        
        {/* Left Theme Section */}
        <div className="hidden md:flex flex-col justify-center px-10 py-14 text-white bg-gradient-to-b from-[#064e3b] to-[#0b5d47]">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
              <img src="src/assets/yaduvashiAcademylogo.jpeg" alt="Logo" className="w-full h-full object-cover" />
            </div>

            <div>
              <h1 className="text-3xl font-extrabold leading-tight">
                YADUVANSHI
              </h1>
              <p className="text-[#d4a017] text-lg font-semibold">
                ACADEMY BANSUR
              </p>
            </div>
          </div>

          <div className="inline-block w-fit px-5 py-2 rounded-full bg-[#c89211]/20 border border-[#d4a017]/30 text-[#f3cf6b] text-sm font-semibold mb-6">
            ADMIN ACCESS PORTAL
          </div>

          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Welcome <span className="text-[#d4a017]">Back</span>
          </h2>

          <p className="text-lg text-white/85 leading-8">
            Login to manage students, courses, admissions and academy records
            securely from the admin dashboard.
          </p>

          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-3xl font-bold text-[#d4a017]">12+</h3>
              <p className="text-white/80 text-sm">Years of Excellence</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#d4a017]">200+</h3>
              <p className="text-white/80 text-sm">Students Trained</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#d4a017]">50+</h3>
              <p className="text-white/80 text-sm">Selections</p>
            </div>
          </div>
        </div>

        {/* Right Login Form */}
        <div className="bg-white px-6 sm:px-10 py-10 sm:py-14 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="md:hidden text-center mb-8">
              <h1 className="text-3xl font-extrabold text-[#0b4f3f]">
                YADUVANSHI
              </h1>
              <p className="text-[#c89211] font-bold text-lg">
                ACADEMY BANSUR
              </p>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-4xl font-extrabold text-[#0b4f3f] mb-2">
                Admin Registration
              </h2>
              <p className="text-gray-500 text-sm">
                Please enter your credentials to continue
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#0b4f3f] mb-2">
                  Admin Email
                </label>
                <input
                  type="email"
                  placeholder="Enter admin email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#c89211] focus:ring-2 focus:ring-[#d4a017]/30 transition"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0b4f3f] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#c89211] focus:ring-2 focus:ring-[#d4a017]/30 transition"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#c89211] hover:bg-[#b8840f] text-white font-bold text-lg py-3 shadow-lg transition duration-300"
              >
                Register
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500">
              Secure admin access for Yaduvanshi Academy Bansur
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;