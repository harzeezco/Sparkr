import * as React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import useTheme from "../../Hooks/useTheme";
import Magnetic from "../../Animation/Magnetic";
import { StickyCursorContext } from "../../Contexts/StickyCursorContext";

const NavToggle = () => {
  const { theme } = useTheme();
  const [isShow, setIsShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const stickyElement = React.useContext(StickyCursorContext);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
    setIsShow((prev) => !prev);
  };

  useEffect(() => {
    isShow && document.querySelector(".sidebar").classList.toggle("open");
    isShow && document.querySelector("body").classList.toggle("overflow");
  }, [isShow]);

  const isLight = theme === "light" ? "bg-dark" : "bg-light-primary";

  return (
    <div className="fixed right-10 top-6 z-50">
      <Magnetic>
        <div className={`burger ${isActive && "active"}`} onClick={toggleMenu}>
          <div ref={stickyElement} className="bounds"></div>
          <div className={`bar bar1 ${isLight}`}></div>
          <div className={`bar bar2 ${isLight}`}></div>
        </div>
      </Magnetic>
    </div>
  );
};

NavToggle.displayName = "NavToggle";

NavToggle.propTypes = {
  stickyElement: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default NavToggle;
