import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContexts";

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
