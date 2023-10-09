import * as React from "react";
import Magnetic from "../../Animation/Magnetic";
import { StickyCursorContext } from "../../Contexts/StickyCursorContext";
import { SideNavContext } from "../../Contexts/SideNavContext";

const NavToggle = () => {
  const { isHovered } = React.useContext(StickyCursorContext);
  const { toggleMenu, isShow, theme } = React.useContext(SideNavContext);

  const isLight = theme === "light" ? "bg-dark" : "bg-light-primary";

  // const h = isHovered && theme === "light" ? "bg-light-primary" : "bg-dark";
  // const d = theme === "dark" && !isHovered ? "bg-light-primary" : null;
  
  return (
    <>
{/*      
        <Magnetic>
          <input id="checkbox" type="checkbox" checked={isShow} readOnly />
          <label className={`toggle`} htmlFor="checkbox" onClick={toggleMenu}>
            
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
        </Magnetic> */}
      

      <div
        className="md:opacity-0 visible opacity-1 md:invisible"
      >
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
