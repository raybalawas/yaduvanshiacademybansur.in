import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Gallery from "./pages/Gallery.jsx";
import Admission from "./pages/Admission.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import TalentExamQR from "./pages/TalentExam.jsx";
import SimpleQRCode from "./pages/QrCode.jsx";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/telent-search-exam" element={<TalentExamQR />} />
              <Route path="/qr-code" element={<SimpleQRCode />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>

      <WhatsAppButton />
    </>
  );
}

export default App;
