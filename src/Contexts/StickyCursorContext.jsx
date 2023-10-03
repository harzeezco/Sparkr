import { createContext, useRef, useState } from "react";
import PropTypes from "prop-types";
export const StickyCursorContext = createContext();

const StickyCursorProvider = ({ children }) => {
  const stickyElement = useRef();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StickyCursorContext.Provider value={{stickyElement, isHovered, setIsHovered}}>
      {children}
    </StickyCursorContext.Provider>
  );
};

StickyCursorProvider.propTypes = {
  children: PropTypes.node,
};

export default StickyCursorProvider;
