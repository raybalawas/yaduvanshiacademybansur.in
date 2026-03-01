import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import Admission from "./pages/Admission";
import WhatsAppButton from "./components/WhatsAppButton";

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
