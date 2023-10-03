import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useTheme from "../../Hooks/useTheme";
import { motion } from "framer-motion";
import Sidebar from "../navigation/Sidebar";
import Cursor from "../../Animation/Cursor";
import StickyCursorProvider from "../../Contexts/StickyCursorContext";
import SideNavContextProvider from "../../Contexts/SideNavContext";

const AppLayout = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }} // Translate from the bottom
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Translate to the bottom on exit
      transition={{ duration: 0.6, delay: 0, ease: "easeInOut" }}
    >
      <div
        className={`bg-${theme} text-${theme}-primary theme-transition relative z-10`}
      >
        <StickyCursorProvider>
          <Cursor />
          <header className="">
            <SideNavContextProvider>
              <Navbar />
              <Sidebar />
            </SideNavContextProvider>
          </header>
        </StickyCursorProvider>
        <main className="relative z-[-3]">
          <Outlet />
        </main>
        <footer className="" aria-labelledby="footer">
          <Footer />
        </footer>
      </div>
    </motion.div>
  );
};

export default AppLayout;
