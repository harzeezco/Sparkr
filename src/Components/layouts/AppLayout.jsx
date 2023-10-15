import { lazy, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import useTheme from "../../Hooks/useTheme";
import { AnimatePresence } from "framer-motion";
import BannerAnimationContextProvider from "../../Contexts/BannerAnimationContext";
import Transition from "../general/Transition";

const Footer = lazy(() => import("./Footer"));

const AppLayout = () => {
  const { theme } = useTheme();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // eslint-disable-next-line no-unused-vars
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Transition />
      <div
        className={`bg-${theme} text-${theme}-primary theme-transition relative`}
        // animate={isInView ? "open" : "closed"}
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
