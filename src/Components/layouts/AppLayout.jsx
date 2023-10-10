import { lazy, useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import useTheme from "../../Hooks/useTheme";
import { AnimatePresence } from "framer-motion";
const Sidebar = lazy(() => import("../navigation/SmallScrenNav"));
import BannerAnimationContextProvider from "../../Contexts/BannerAnimationContext";
import { SmallScreenContext } from "../../Contexts/SmallScreenContext";

const Footer = lazy(() => import("./Footer"));

const AppLayout = () => {
  const { theme } = useTheme();
  const { isHide } = useContext(SmallScreenContext);

  return (
    <AnimatePresence>
      <div
        className={`bg-${theme} text-${theme}-primary theme-transition relative z-10`}
        id="scrollbar"
      >
        <header>
          <Navbar />
          {isHide ? <Sidebar /> : null}
        </header>

        <main className="relative z-[-3]">
          <BannerAnimationContextProvider>
            <Outlet />
          </BannerAnimationContextProvider>
        </main>

        <footer aria-labelledby="footer">
          <Footer />
        </footer>
      </div>
    </AnimatePresence>
  );
};

export default AppLayout;
