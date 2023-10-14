import { lazy } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import useTheme from "../../Hooks/useTheme";
import { AnimatePresence } from "framer-motion";
import BannerAnimationContextProvider from "../../Contexts/BannerAnimationContext";

const Footer = lazy(() => import("./Footer"));

const AppLayout = () => {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      <div
        className={`bg-${theme} text-${theme}-primary theme-transition relative`}
        id="scrollbar"
      >
        <header>
          <Navbar />
        </header>

        <main className="relative">
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
