import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
import Header from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;