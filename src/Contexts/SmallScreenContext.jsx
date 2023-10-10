import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useTheme from "../Hooks/useTheme";

export const SmallScreenContext = createContext();

const SmallScreenContextProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const [isShow, setIsShow] = useState(false);
  const [isHide, setIsHide] = useState(false);

  const toggleMenu = () => {
    setIsShow((prev) => !prev);
  };

  useEffect(() => {
    if (isHide) {
      isShow
        ? document.querySelector(".sidebar").classList.add("open")
        : document.querySelector(".sidebar").classList.remove("open");
      isShow
        ? document.querySelector("body").classList.add("overflow")
        : document.querySelector("body").classList.remove("overflow");
    }
  }, [isShow, isHide]);

  return (
    <SmallScreenContext.Provider
      value={{ toggleMenu, isShow, theme, toggleTheme, isHide, setIsHide }}
    >
      {children}
    </SmallScreenContext.Provider>
  );
};

SmallScreenContextProvider.propTypes = {
  children: PropTypes.node,
};

export default SmallScreenContextProvider;
