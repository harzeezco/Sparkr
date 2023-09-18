import LogoDarkMode from "../../assets/Icons/LogoDarkMode.svg";
import MessageDarkMode from "../../assets/Icons/MessageLightMode.svg";
import MessageLightMode from "../../assets/Icons/MessageDarkMode.svg";
import LogoLightMode from "../../assets/Icons/LogoLightMode.svg";

import RegularList from "../general/RegularList";
import { NAV_LINKS } from "../../lib/data";
import NavLink from "../navigation/NavLink";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../general/ThemeSwitcher";
import ImageWrapper from "../data-display/ImageWrapper";
import useTheme from "../../Hooks/useTheme";

const Navbar = () => {
  const { theme } = useTheme();

  const isLightMode = theme === "light" ? "text-orangePrimary" : "text-white";

  return (
    <div className="m-auto flex w-full items-center justify-between px-4 py-6 lg:max-w-[85vw] theme-transition">
      <Link to={"/"}>
        <ImageWrapper
          srcForDarkMode={LogoDarkMode}
          src={LogoLightMode}
          alt="Logo Image of Route Agency"
        />
      </Link>

      <nav className="hidden md:inline-flex" id="nav-menu">
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
          className={`inline-flex items-center gap-x-1  text-base font-normal capitalize ${isLightMode} theme-transition`}
        >
          <ImageWrapper
            srcForDarkMode={MessageDarkMode}
            src={MessageLightMode}
            alt="email icon"
          />
          <span className="underline">Hello@agency.com</span>
        </div>
        <div className="inline-block pl-4" role="button">
          <ThemeSwitcher />
        </div>
      </div>

      <button
        aria-label="Toggle Navigation Menu"
        role="button"
        aria-controls="nav-menu"
        className="md-hidden text-3xl text-white md:hidden"
      >
        <ion-icon name="menu-sharp"></ion-icon>
      </button>
    </div>
  );
};

export default Navbar;
