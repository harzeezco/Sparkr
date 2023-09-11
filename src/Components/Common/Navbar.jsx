import Logo from "../../assets/Icons/route.svg";
import MessageIcon from "../../assets/Icons/Message.svg";
import ToggleSwitch from "./Toggle";
import { Link } from "react-router-dom";

const links = ["about us", "services", "project", "blog", "contact"];

const Navbar = () => {
  return (
    <div className="m-auto flex w-full items-center justify-between px-4 py-6 lg:max-w-[85vw]">
      <Link to={'/'}>
        <img src={Logo} alt="Logo Image of Route Agency" />
      </Link>

      <nav className="hidden md:block" id="nav-menu">
        <ul
          role="list"
          className="flex items-center justify-between gap-6 text-base font-normal capitalize text-colorwhite-100"
        >
          {links.map((link) => {
            return (
              <Link to={link} key={link}>
                {link}
              </Link>
            );
          })}
        </ul>
      </nav>

      <div className="hidden md:block">
        <div className="inline-flex items-center gap-x-1  text-base font-normal capitalize text-white">
          <img src={MessageIcon} alt="An email icon" />
          <span className="underline">Hello@agency.com</span>
        </div>
        <div className="inline-block pl-4" role="button">
          <ToggleSwitch />
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
