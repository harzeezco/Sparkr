import * as React from "react";

import LogoDarkMode from "../../assets/Svg/LogoDarkMode.svg";
import LogoLightMode from "../../assets/Svg/LogoLightMode.svg";
import MessageDarkMode from "../../assets/Icons/MessageLightMode.svg";
import MessageLightMode from "../../assets/Icons/MessageDarkMode.svg";

import RegularList from "../general/RegularList";
import { NAV_LINKS } from "../../lib/data";
import NavLink from "../navigation/NavLink";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../general/ThemeSwitcher";
import ImageWrapper from "../data-display/ImageWrapper";
import useTheme from "../../Hooks/useTheme";
import NavToggle from "../general/NavToggleIcon";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div className="theme-transition m-auto flex w-full items-center justify-between px-4 py-7 pb-6 lg:max-w-[85vw]">
      <Link to={"/"}>
        <ImageWrapper
          srcForDarkMode={LogoDarkMode}
          src={LogoLightMode}
          alt="Logo"
          height="34"
          width="150"
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
        <div
          className={`inline-flex items-center gap-x-1  text-base font-normal capitalize text-${theme} theme-transition`}
        >
          <ImageWrapper
            srcForDarkMode={MessageDarkMode}
            src={MessageLightMode}
            alt="email icon"
            height="25"
            width="25"
          />
          <span className="underline">Hello@agency.com</span>
        </div>
        <div className="inline-block pl-4" role="button">
          <ThemeSwitcher />
        </div>
      </div>
      <div
        aria-label="Toggle Navigation Menu"
        role="button"
        aria-controls="nav-menu"
        className="md-hidden bg-white text-3xl md:hidden"
      >
        <NavToggle />
      </div>
    </div>
  );
};

export default Navbar;
