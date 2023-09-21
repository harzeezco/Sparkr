import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useTheme from "../../Hooks/useTheme";
import { motion } from "framer-motion";
// import useLocoScroll from "../../Hooks/useLocoScroll";

const AppLayout = () => {
  const { theme } = useTheme();
  // useLocoScroll()

  return (
    <motion.div
      initial={{ opacity: 0 }} // Translate from the bottom
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Translate to the bottom on exit
      transition={{ duration: 0.6, delay: 0, ease: "easeInOut" }}
      // data-scroll-container
      // id="main-container"
    >
      <div
        className={`bg-${theme} text-${theme}-primary theme-transition relative z-10`}
      >
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
