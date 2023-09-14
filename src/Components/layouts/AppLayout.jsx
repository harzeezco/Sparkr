import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div>
      <header className="bg-colorDark">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-colorDark" aria-labelledby="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default AppLayout;
