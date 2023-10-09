import { createContext, useRef, useState } from "react";
import PropTypes from "prop-types";
export const StickyCursorContext = createContext();

const StickyCursorProvider = ({ children }) => {
  const stickyElement = useRef();
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [scaling, setScaling] = useState(false);

  return (
    <StickyCursorContext.Provider
      value={{
        stickyElement,
        isProjectHovered,
        setIsProjectHovered,
        scaling,
        setScaling,
      }}
    >
      {children}
    </StickyCursorContext.Provider>
  );
};

StickyCursorProvider.propTypes = {
  children: PropTypes.node,
};

export default StickyCursorProvider;
