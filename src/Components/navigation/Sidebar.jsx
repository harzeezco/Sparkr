import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../lib/data";
import ThemeSwitcher from "../general/ThemeSwitcher";
import { useContext } from "react";
import { SideNavContext } from "../../Contexts/SideNavContext";

const Sidebar = () => {
  const { toggleMenu, theme, toggleTheme } = useContext(SideNavContext);

  const themeMode = theme === "light" ? "dark" : "light";

  const isLight = theme === "light" ? "bg-light-primary" : "bg-dark";

  const toggleSwitch = () => {
    toggleMenu();
    toggleTheme();
  };

  return (
    <div
      className={`sidebar md:hidden ${isLight} theme-transition flex items-start justify-start`}
    >
      <nav className="pl-10 pt-8 sm:pl-20 sm:pt-14">
        <p>Menu</p>
        <ul className="py-4">
          {NAV_LINKS.map((links) => {
            return (
              <li
                key={links.id}
                className={`text-[42px] font-normal capitalize text-${theme}`}
              >
                <Link to={links.path}>{links.link}</Link>
              </li>
            );
          })}
        </ul>
        <button
          className={`transition-all text-${theme} flex items-center rounded-3xl border px-6 py-3`}
          role="button"
          aria-controls="toggle"
          aria-label="Toggle Theme Mode"
          onClick={(e) => toggleSwitch(e)}
        >
          <ThemeSwitcher />

          <span className="pl-2">Switch to {themeMode} mode</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
