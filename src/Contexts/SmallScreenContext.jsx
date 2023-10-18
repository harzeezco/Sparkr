import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useTheme from "../Hooks/useTheme";

export const SmallScreenContext = createContext();

const SmallScreenContextProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    if (isActive) {
      document.querySelector("body").classList.add("overflow");
    } else {
      document.querySelector("body").classList.remove("overflow");
    }
  }, [isActive]);

  return (
    <SmallScreenContext.Provider
      value={{ theme, toggleTheme, isActive, setIsActive}}
    >
      {children}
    </SmallScreenContext.Provider>
  );
};

SmallScreenContextProvider.propTypes = {
  children: PropTypes.node,
};

export default SmallScreenContextProvider;
