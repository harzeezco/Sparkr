import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useTheme from "../../Hooks/useTheme";

const AppLayout = () => {
  const { theme } = useTheme();

  return (
    <div className={`bg-${theme} text-${theme}-primary theme-transition`}>
      <header className="">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="" aria-labelledby="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default AppLayout;
