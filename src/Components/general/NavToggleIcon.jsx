import * as React from "react";
import Magnetic from "../../Animation/Magnetic";
import { StickyCursorContext } from "../../Contexts/StickyCursorContext";
import { SideNavContext } from "../../Contexts/SideNavContext";

const NavToggle = () => {
  const { stickyElement, isHovered } = React.useContext(StickyCursorContext);
  const { toggleMenu, isShow, theme } = React.useContext(SideNavContext);

  const h = isHovered && theme === "light" ? "bg-light-primary" : "bg-dark";
  const d = theme === "dark" && !isHovered ? "bg-light-primary" : null;

  return (
    <Magnetic>
      <input id="checkbox" type="checkbox" checked={isShow} readOnly />
      <label className={`toggle`} htmlFor="checkbox" onClick={toggleMenu}>
        <div ref={stickyElement} className="bounds"></div>
        {h ? (
          <>
            <div className={`bar bar--top  ${h}`}></div>
            <div className={`bar bar--bottom ${h}`}></div>
          </>
        ) : null}
        {d ? (
          <>
            <div className={`bar bar--top  ${d}`}></div>
            <div className={`bar bar--bottom ${d}`}></div>
          </>
        ) : null}
      </label>
    </Magnetic>
  );
};

export default NavToggle;
