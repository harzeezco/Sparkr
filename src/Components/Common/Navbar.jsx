import Logo from "../../assets/Icons/route.svg";
import MessageIcon from "../../assets/Icons/Message.svg";
import ToggleSwitch from "../Toggle";

const links = ["about us", "services", "project", "blog", "contact"];

const Navbar = () => {
  return (
    <div className="m-auto flex w-full max-w-[70rem] items-center justify-between px-6 py-6">
      <img src={Logo} alt="Logo Image of Route Agency" />

      <nav className="hidden md:block" id="nav-menu">
        <ul
          role="list"
          className="text-colorwhite-100 flex items-center justify-between gap-6 text-base font-normal capitalize"
        >
          {links.map((link) => {
            return <li key={link}>{link}</li>;
          })}
        </ul>
      </nav>

      <div className="hidden md:block">
        <div className="text-colorwhite-100 inline-flex items-center  gap-x-1 text-base font-normal capitalize">
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
