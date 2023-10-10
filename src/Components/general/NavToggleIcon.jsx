import { useContext } from "react";
import { SmallScreenContext } from "../../Contexts/SmallScreenContext";

const NavToggle = () => {
  const { toggleMenu, theme } = useContext(SmallScreenContext);

  const isLight = theme === "light" ? "bg-dark" : "bg-light-primary";

  return (
    <>
      <div className="opacity-1 visible md:invisible md:opacity-0">
        <input id="checkbox" type="checkbox" />
        <label className="toggle" htmlFor="checkbox" onClick={toggleMenu}>
          <div className={`bar bar--top ${isLight}`}></div>
          <div className={`bar bar--bottom ${isLight}`}></div>
        </label>
      </div>
    </>
  );
};

export default NavToggle;
