import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useTheme from "../../Hooks/useTheme";
import { motion } from "framer-motion";

const AppLayout = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0}} // Translate from the bottom
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }} // Translate to the bottom on exit
      transition={{ duration: 0.6, delay: 0, ease: "easeInOut" }}
    >
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
      
    </motion.div>
  );
};

export default AppLayout;
