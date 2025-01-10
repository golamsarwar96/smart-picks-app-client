import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto">
      <section>
        <Navbar></Navbar>
      </section>
      <section className="min-h-[calc(100vh-232px)]">
        <Outlet></Outlet>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default MainLayout;
