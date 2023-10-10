import { useContext } from "react";
import { motion } from "framer-motion";

import { SmallScreenContext } from "../../Contexts/SmallScreenContext";
import ThemeSwitcher from "../general/ThemeSwitcher";
import RegularList from "../general/RegularList";
import NavToggle from "../general/NavToggleIcon";
import { NAV_LINKS } from "../../lib/data";
import NavLink from "../navigation/NavLink";
import ImageWrapper from "../data-display/ImageWrapper";
import ScrollToTopLink from "../../Animation/ScrollToTopLink";

import LogoDarkMode from "../../assets/Svg/LogoDarkMode.svg";
import LogoLightMode from "../../assets/Svg/LogoLightMode.svg";

const Navbar = () => {
  const { setIsHide } = useContext(SmallScreenContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
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
          className="relative z-[-3]"
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
      <div
        className="md-hidden fixed left-[85vw] z-50 grid h-[40px] w-[40px] items-center md:hidden"
        onClick={() => setIsHide(true)}
      >
        <NavToggle />
      </div>
    </motion.div>
  );
};

export default Navbar;
