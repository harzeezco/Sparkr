import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ThemeSwitcher from "../general/ThemeSwitcher";
import RegularList from "../general/RegularList";
import { NAV_LINKS } from "../../lib/data";
import NavLink from "../navigation/NavLink";
import ImageWrapper from "../data-display/ImageWrapper";
import ScrollToTopLink from "../../Animation/ScrollToTopLink";
import LogoDarkMode from "../../assets/Svg/LogoDarkMode.svg";
import LogoLightMode from "../../assets/Svg/LogoLightMode.svg";
import Nav from "../navigation/Nav";
import { SmallScreenContext } from "../../Contexts/SmallScreenContext";

const Navbar = () => {
  const { isActive } = useContext(SmallScreenContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        ease: "easeInOut",
        duration: 1,
        delay: 0.5,
      }}
      className="theme-transition m-auto flex w-full items-center justify-between px-5 py-7 pb-6 lg:max-w-[1100px]"
    >
      <ScrollToTopLink to="/">
        <ImageWrapper
          srcForDarkMode={LogoDarkMode}
          src={LogoLightMode}
          alt="Logo"
          height="34"
          width="150"
          className="relative"
        />
      </ScrollToTopLink>

      <nav className="hidden md:inline-flex" id="nav-menu" role="navigation">
        <ul
          role="list"
          className="flex items-center justify-between gap-6 text-lg font-normal capitalize"
        >
          <RegularList
            items={NAV_LINKS}
            resourceName="navlink"
            itemComponent={NavLink}
          />
        </ul>
      </nav>

      <div className="hidden md:inline-flex">
        <button
          className={`theme-transition border border-solid border-orangePrimary px-3 text-base font-normal capitalize text-orangePrimary hover:bg-orangePrimary hover:text-white`}
        >
          Let&apos;s talk
        </button>
        <div className="inline-block pl-4">
          <ThemeSwitcher />
        </div>
      </div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
