import { Outlet } from "react-router-dom";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";

const AppLayout = () => {
  return (
    <div className="">
      <header className="bg-colorDark">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AppLayout;
