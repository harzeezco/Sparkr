import LogoDarkMode from "../../assets/Svg/LogoDarkMode.svg";
import LogoLightMode from "../../assets/Svg/LogoLightMode.svg";

import RegularList from "../general/RegularList";
import { NAV_LINKS } from "../../lib/data";
import NavLink from "../navigation/NavLink";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../general/ThemeSwitcher";
import ImageWrapper from "../data-display/ImageWrapper";
import NavToggle from "../general/NavToggleIcon";

const Navbar = () => {
  return (
    <div className="theme-transition m-auto flex w-full items-center justify-between px-5 py-7 pb-6 lg:max-w-[1100px]">
      <Link to={"/"}>
        <ImageWrapper
          srcForDarkMode={LogoDarkMode}
          src={LogoLightMode}
          alt="Logo"
          height="34"
          width="150"
          className="relative z-[-3]"
        />
      </Link>

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
        <div className="inline-block pl-4" role="button">
          <ThemeSwitcher />
        </div>
      </div>
      <div
        aria-label="Toggle Navigation Menu"
        role="button"
        aria-controls="nav-menu"
        className="md-hidden fixed left-[85vw] z-50 grid h-[40px] w-[40px] items-center md:hidden"
      >
        <NavToggle />
      </div>
    </div>
  );
};

export default Navbar;
